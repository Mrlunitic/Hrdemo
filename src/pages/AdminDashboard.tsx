import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import api from '../lib/api';
import Navbar from '../components/Navbar';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [partners, setPartners] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isUploadingGallery, setIsUploadingGallery] = useState(false);
  const [isUploadingPartner, setIsUploadingPartner] = useState(false);
  
  const [newPost, setNewPost] = useState({ 
    caption: '', 
    category: 'Hotel & Catering',
    country: '',
    region: 'Gulf Countries',
    candidatesNeeded: '',
    image: null as File | null
  });

  const [newGalleryItem, setNewGalleryItem] = useState({
    caption: '',
    image: null as File | null
  });

  const [newPartner, setNewPartner] = useState({
    name: '',
    type: 'client',
    country: 'KSA(SAUDI)',
    image: null as File | null
  });
  
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [galleryPreview, setGalleryPreview] = useState<string | null>(null);
  const [partnerPreview, setPartnerPreview] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  const countries_list = ["KSA(SAUDI)", "KUWAIT", "MALAYASIA", "QATAR", "UAE"];

  const categories = [
    "Hotel & Catering",
    "Vehicle/Heavy Equipment",
    "Supermarkets",
    "Hospitals",
    "Agriculture"
  ];

  const regions = [
    "Gulf Countries",
    "European Countries",
    "Asian Countries",
    "Other"
  ];

  const regionCountryMap: Record<string, string[]> = {
    "Gulf Countries": ["Kuwait", "UAE", "Qatar", "Saudi Arabia", "Oman", "Bahrain"],
    "European Countries": ["Romania", "Croatia", "Poland", "Hungary", "Bulgaria"],
    "Asian Countries": ["Malaysia", "Japan", "South Korea", "Singapore"],
    "Other": ["Other"]
  };

  useEffect(() => {
    fetchPosts();
    fetchGallery();
    fetchPartners();
  }, []);

  // Set default country based on region when region changes
  useEffect(() => {
    const countries = regionCountryMap[newPost.region] || [];
    if (countries.length > 0 && !countries.includes(newPost.country)) {
      setNewPost(prev => ({ ...prev, country: countries[0] }));
    }
  }, [newPost.region]);

  const fetchPosts = async () => {
    try {
      const response = await api.get('/posts');
      setPosts(response.data);
    } catch (error) {
      toast.error("Failed to fetch posts");
    }
  };

  const fetchGallery = async () => {
    try {
      const response = await api.get('/gallery');
      setGallery(response.data);
    } catch (error) {
      toast.error("Failed to fetch gallery");
    }
  };

  const fetchPartners = async () => {
    try {
      const response = await api.get('/partners');
      setPartners(response.data);
    } catch (error) {
      toast.error("Failed to fetch partners");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewPost({ ...newPost, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleGalleryImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewGalleryItem({ ...newGalleryItem, image: file });
      setGalleryPreview(URL.createObjectURL(file));
    }
  };

  const handlePartnerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewPartner({ ...newPartner, image: file });
      setPartnerPreview(URL.createObjectURL(file));
    }
  };

  const handleEditClick = (post: any) => {
    setNewPost({
      caption: post.caption,
      category: post.category || 'Hotel & Catering',
      country: post.country || '',
      region: post.region || 'Gulf Countries',
      candidatesNeeded: post.candidatesNeeded || '',
      image: null
    });
    setImagePreview(post.imageUrl);
    setEditId(post._id);
    setIsEditing(true);
    // Switch to create/edit tab
    const createTab = document.querySelector('[value="create"]') as HTMLButtonElement;
    if (createTab) createTab.click();
  };

  const resetPostForm = () => {
    setNewPost({ 
      caption: '', 
      category: 'Hotel & Catering',
      country: '',
      region: 'Gulf Countries',
      candidatesNeeded: '',
      image: null 
    });
    setImagePreview(null);
    setIsEditing(false);
    setEditId(null);
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('caption', newPost.caption);
    formData.append('category', newPost.category);
    formData.append('country', newPost.country);
    formData.append('region', newPost.region);
    formData.append('candidatesNeeded', newPost.candidatesNeeded);
    if (newPost.image) formData.append('image', newPost.image);

    setIsCreating(true);
    try {
      if (isEditing && editId) {
        await api.put(`/posts/${editId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        toast.success("Post updated successfully!");
      } else {
        await api.post('/posts', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        toast.success("Post created successfully!");
      }
      resetPostForm();
      fetchPosts();
    } catch (error) {
      toast.error(isEditing ? "Failed to update post" : "Failed to create post");
    } finally {
      setIsCreating(false);
    }
  };

  const handleCreateGalleryItem = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('caption', newGalleryItem.caption);
    if (newGalleryItem.image) formData.append('image', newGalleryItem.image);

    setIsUploadingGallery(true);
    try {
      await api.post('/gallery', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success("Photo added to gallery!");
      setNewGalleryItem({ caption: '', image: null });
      setGalleryPreview(null);
      fetchGallery();
    } catch (error) {
      toast.error("Failed to upload photo");
    } finally {
      setIsUploadingGallery(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      await api.delete(`/posts/${id}`);
      toast.success("Post deleted");
      fetchPosts();
    } catch (error) {
      toast.error("Failed to delete post");
    }
  };

  const handleDeleteGalleryItem = async (id: string) => {
    if (!confirm("Are you sure you want to delete this photo?")) return;
    try {
      await api.delete(`/gallery/${id}`);
      toast.success("Photo deleted");
      fetchGallery();
    } catch (error) {
      toast.error("Failed to delete photo");
    }
  };

  const handleCreatePartner = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newPartner.name);
    formData.append('type', newPartner.type);
    formData.append('country', newPartner.country || '');
    if (newPartner.image) formData.append('image', newPartner.image);

    setIsUploadingPartner(true);
    try {
      await api.post('/partners', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success("Partner added successfully!");
      setNewPartner({ name: '', type: 'client', country: 'KSA(SAUDI)', image: null });
      setPartnerPreview(null);
      fetchPartners();
    } catch (error) {
      toast.error("Failed to add partner");
    } finally {
      setIsUploadingPartner(false);
    }
  };

  const handleDeletePartner = async (id: string) => {
    if (!confirm("Are you sure you want to delete this partner?")) return;
    try {
      await api.delete(`/partners/${id}`);
      toast.success("Partner deleted");
      fetchPartners();
    } catch (error) {
      toast.error("Failed to delete partner");
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <main className="container mx-auto py-24 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <Link to="/admin/applications">View Applications</Link>
            </Button>
            <Button onClick={logout} variant="destructive">Logout</Button>
          </div>
        </div>

        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full max-w-3xl grid-cols-6 mb-8">
            <TabsTrigger value="posts" className="text-xs sm:text-sm">Job Posts</TabsTrigger>
            <TabsTrigger value="create" className="text-xs sm:text-sm">{isEditing ? "Edit Job" : "New Job"}</TabsTrigger>
            <TabsTrigger value="gallery" className="text-xs sm:text-sm">Gallery</TabsTrigger>
            <TabsTrigger value="upload-gallery" className="text-xs sm:text-sm">Add Photo</TabsTrigger>
            <TabsTrigger value="partners" className="text-xs sm:text-sm">Partners</TabsTrigger>
            <TabsTrigger value="add-partner" className="text-xs sm:text-sm">Add Partner</TabsTrigger>
          </TabsList>

          <TabsContent value="posts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post: any) => (
                <Card key={post._id} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img src={post.imageUrl} alt={post.caption} className="object-cover w-full h-full" />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{post.caption}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEditClick(post)}>Edit</Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeletePost(post._id)}>Delete</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="create">
            <Card className="max-w-xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{isEditing ? "Edit Job Post" : "Create Job Post"}</CardTitle>
                {isEditing && (
                  <Button variant="ghost" size="sm" onClick={resetPostForm}>Cancel Edit</Button>
                )}
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreatePost} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="caption">Job Title / Category</Label>
                    <Input 
                      id="caption" 
                      required 
                      value={newPost.caption}
                      onChange={(e) => setNewPost({ ...newPost, caption: e.target.value })}
                      placeholder="e.g., Software Engineer - Kuwait"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select 
                      id="category"
                      className="w-full p-2 rounded-md border border-input bg-background"
                      value={newPost.category}
                      onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    >
                      {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="region">Region</Label>
                      <select 
                        id="region"
                        className="w-full p-2 rounded-md border border-input bg-background"
                        value={newPost.region}
                        onChange={(e) => setNewPost({ ...newPost, region: e.target.value })}
                      >
                        {regions.map(reg => <option key={reg} value={reg}>{reg}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <select 
                        id="country"
                        className="w-full p-2 rounded-md border border-input bg-background"
                        value={newPost.country}
                        onChange={(e) => setNewPost({ ...newPost, country: e.target.value })}
                      >
                        {(regionCountryMap[newPost.region] || []).map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="candidatesNeeded">Number of Candidates Required</Label>
                    <Input 
                      id="candidatesNeeded" 
                      required 
                      value={newPost.candidatesNeeded}
                      onChange={(e) => setNewPost({ ...newPost, candidatesNeeded: e.target.value })}
                      placeholder="e.g., 50 or 5-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image">Banner Image</Label>
                    <Input id="image" type="file" accept="image/*" required onChange={handleImageChange} />
                    {imagePreview && (
                      <div className="mt-4 aspect-video rounded-lg overflow-hidden border">
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                  <Button type="submit" className="w-full" disabled={isCreating}>
                    {isCreating ? "Uploading..." : (isEditing ? "Update Post" : "Create Post")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.map((item: any) => (
                <Card key={item._id} className="overflow-hidden group relative">
                  <div className="aspect-square relative">
                    <img src={item.imageUrl} alt={item.caption} className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-4">
                      <p className="text-white text-xs text-center mb-4 line-clamp-2">{item.caption}</p>
                      <Button variant="destructive" size="sm" onClick={() => handleDeleteGalleryItem(item._id)}>Delete</Button>
                    </div>
                  </div>
                </Card>
              ))}
              {gallery.length === 0 && (
                <div className="col-span-full py-12 text-center text-muted-foreground border border-dashed rounded-xl">
                  No photos in the gallery yet.
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="upload-gallery">
            <Card className="max-w-xl">
              <CardHeader>
                <CardTitle>Add to Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateGalleryItem} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="gal-caption">Photo Caption / Description</Label>
                    <Input 
                      id="gal-caption" 
                      required 
                      value={newGalleryItem.caption}
                      onChange={(e) => setNewGalleryItem({ ...newGalleryItem, caption: e.target.value })}
                      placeholder="e.g., Team at Kuwait Office"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gal-image">Photo</Label>
                    <Input id="gal-image" type="file" accept="image/*" required onChange={handleGalleryImageChange} />
                    {galleryPreview && (
                      <div className="mt-4 aspect-video rounded-lg overflow-hidden border">
                        <img src={galleryPreview} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                  <Button type="submit" className="w-full" disabled={isUploadingGallery}>
                    {isUploadingGallery ? "Uploading..." : "Add to Gallery"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partners">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {partners.map((partner: any) => (
                <Card key={partner._id} className="overflow-hidden group relative">
                  <div className="aspect-video relative bg-white flex items-center justify-center p-4">
                    <img src={partner.imageUrl} alt={partner.name} className="max-w-full max-h-full object-contain" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-4">
                      <p className="text-white text-xs font-bold text-center mb-1">{partner.name}</p>
                      <p className="text-white/70 text-[10px] text-center mb-4 uppercase">{partner.type} {partner.country ? `- ${partner.country}` : ''}</p>
                      <Button variant="destructive" size="sm" onClick={() => handleDeletePartner(partner._id)}>Delete</Button>
                    </div>
                  </div>
                </Card>
              ))}
              {partners.length === 0 && (
                <div className="col-span-full py-12 text-center text-muted-foreground border border-dashed rounded-xl">
                  No partners added yet.
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="add-partner">
            <Card className="max-w-xl">
              <CardHeader>
                <CardTitle>Add New Partner (Client/Company)</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreatePartner} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="partner-name">Partner Name</Label>
                    <Input 
                      id="partner-name" 
                      required 
                      value={newPartner.name}
                      onChange={(e) => setNewPartner({ ...newPartner, name: e.target.value })}
                      placeholder="e.g., HIDADA Construction"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="partner-type">Type</Label>
                      <select 
                        id="partner-type"
                        className="w-full p-2 rounded-md border border-input bg-background"
                        value={newPartner.type}
                        onChange={(e) => setNewPartner({ ...newPartner, type: e.target.value as any })}
                      >
                        <option value="client">Client</option>
                        <option value="company">Company</option>
                      </select>
                    </div>
                    {newPartner.type === 'client' && (
                      <div className="space-y-2">
                        <Label htmlFor="partner-country">Country</Label>
                        <select 
                          id="partner-country"
                          className="w-full p-2 rounded-md border border-input bg-background"
                          value={newPartner.country}
                          onChange={(e) => setNewPartner({ ...newPartner, country: e.target.value })}
                        >
                          {countries_list.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="partner-image">Logo</Label>
                    <Input id="partner-image" type="file" accept="image/*" required onChange={handlePartnerImageChange} />
                    {partnerPreview && (
                      <div className="mt-4 aspect-video rounded-lg overflow-hidden border bg-white flex items-center justify-center p-4">
                        <img src={partnerPreview} alt="Preview" className="max-w-full max-h-full object-contain" />
                      </div>
                    )}
                  </div>
                  <Button type="submit" className="w-full" disabled={isUploadingPartner}>
                    {isUploadingPartner ? "Uploading..." : "Add Partner"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
