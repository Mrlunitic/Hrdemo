import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Download, FileText, CheckSquare, BarChart3, Users, Globe, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import PostCard from "@/components/PostCard";
import RecruitmentProcess from "@/components/RecruitmentProcess";

const Resources = () => {
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const { data: posts, isLoading: isPostsLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => api.get('/posts').then(res => res.data)
  });

  const getCountryCount = (countryName: string) => {
    if (!posts) return 0;
    return posts.filter((post: any) => 
      post.country?.trim().toLowerCase() === countryName.trim().toLowerCase()
    ).length;
  };

  const filteredPosts = posts?.filter((post: any) => 
    selectedCountry ? post.country?.trim().toLowerCase() === selectedCountry.trim().toLowerCase() : false
  ) || [];
  
  const resourceCategories = [
    t('resources.categories.all'),
    t('resources.categories.guides'),
    t('resources.categories.checklists'),
    t('resources.categories.articles'),
    t('resources.categories.whitepapers'),
    t('resources.categories.templates')
  ];
  
  const additionalResources = [
    {
      category: t('resources.categories.templates').slice(0, -1), // Singular
      title: t('resources.items.remote.title'),
      description: t('resources.items.remote.desc'),
      icon: <Globe className="w-5 h-5" />,
      linkText: t('resources.items.remote.link')
    },
    {
      category: t('resources.categories.whitepapers').slice(0, -1), // Singular
      title: t('resources.items.diversity.title'),
      description: t('resources.items.diversity.desc'),
      icon: <Users className="w-5 h-5" />,
      linkText: t('resources.items.diversity.link')
    },
    {
      category: t('resources.categories.articles').slice(0, -1), // Singular
      title: t('resources.items.retention.title'),
      description: t('resources.items.retention.desc'),
      icon: <BarChart3 className="w-5 h-5" />,
      linkText: t('resources.items.retention.link')
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header Section */}
          <motion.div 
            {...fadeIn}
            className="max-w-3xl mb-12 rtl:text-right"
          >
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-primary">{t('resources.title')}</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('resources.description')}
            </p>
            
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input 
                type="text" 
                placeholder={t('resources.search')}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </motion.div>

          {/* Featured Resource */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 relative overflow-hidden rtl:text-right"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <FileText className="w-64 h-64 -rotate-12" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {t('resources.featured.badge')}
              </span>
              <h2 className="text-3xl font-heading font-bold mb-4 text-primary">{t('resources.featured.title')}</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                {t('resources.featured.description')}
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 h-auto text-lg rounded-xl shadow-lg shadow-primary/20">
                <Download className="mr-2 w-5 h-5 rtl:ml-2 rtl:mr-0" /> {t('resources.featured.button')}
              </Button>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-10 rtl:flex-row-reverse"
          >
            {resourceCategories.map((cat, idx) => (
              <motion.button 
                key={cat}
                variants={fadeIn}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  idx === 0 ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Country-Specific Vacancies Section */}
          <motion.div 
            {...fadeIn}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-heading font-bold text-primary">Explore Vacancies by Country</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { name: 'Kuwait', region: 'Gulf' },
                { name: 'UAE', region: 'Gulf' },
                { name: 'Qatar', region: 'Gulf' },
                { name: 'Malaysia', region: 'Asia' },
                { name: 'Romania', region: 'Europe' },
                { name: 'Croatia', region: 'Europe' },
                { name: 'Poland', region: 'Europe' },
                { name: 'Japan', region: 'Asia' }
              ].map((country) => {
                const count = getCountryCount(country.name);
                const isSelected = selectedCountry?.toLowerCase() === country.name.toLowerCase();
                
                return (
                  <div 
                    key={country.name} 
                    onClick={() => setSelectedCountry(isSelected ? null : country.name)}
                    className={`bg-card border p-6 rounded-2xl hover:shadow-md transition-all cursor-pointer group ${
                      isSelected ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                    }`}
                  >
                    <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">{country.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{country.region}</p>
                    <div className="flex items-center justify-between text-primary font-semibold text-sm">
                      <span>{count > 0 ? `${count} Vacancies` : `View Vacancies`}</span>
                      <span>{isSelected ? '↓' : '→'}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <AnimatePresence>
              {selectedCountry && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-border pt-12">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold">Vacancies in {selectedCountry}</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setSelectedCountry(null)}
                        className="text-muted-foreground hover:text-primary"
                      >
                        <X className="w-4 h-4 mr-2" /> Clear Selection
                      </Button>
                    </div>

                    {filteredPosts.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post: any) => (
                          <PostCard key={post._id} post={post} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-20 bg-muted/20 rounded-3xl border border-dashed border-border">
                        <Globe className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                        <p className="text-muted-foreground">No current job openings found for {selectedCountry}.</p>
                        <p className="text-sm text-muted-foreground/60 mt-1">Please check back later or explore other countries.</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <RecruitmentProcess />

          {/* Professional Categories Section */}
          <motion.div 
            {...fadeIn}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-heading font-bold text-primary">Job Categories & Professional Roles</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  title: 'Hotel & Catering Staff', 
                  items: ['Managers', 'Chefs', 'Cooks', 'Waiters', 'Barman', 'Housekeepers'] 
                },
                { 
                  title: 'Vehicle & Heavy Equipment', 
                  items: ['Light/Heavy Drivers', 'Crane Operators', 'Auto Mechanics', 'HE Operators'] 
                },
                { 
                  title: 'Supermarkets & Retail', 
                  items: ['Salesmen', 'Cashiers', 'Store Keepers', 'Trolley Boys', 'Cleaners'] 
                },
                { 
                  title: 'Hospitals & Medical', 
                  items: ['Doctors', 'Nurses', 'Lab Technicians', 'Pharmacists', 'Staff'] 
                }
              ].map((cat) => (
                <Card key={cat.title} className="p-6 border-primary/10">
                  <h3 className="text-xl font-bold mb-4 text-primary">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map(item => (
                      <span key={item} className="px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full border border-primary/10">
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="group border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all bg-card flex flex-col h-full rtl:text-right">
              <div className="flex items-center justify-between mb-6 rtl:flex-row-reverse">
                <div className="bg-accent/10 p-3 rounded-lg text-accent">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-accent tracking-widest uppercase">{t('resources.categories.guides').slice(0, -1)}</div>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">{t('resources.items.salary.title')}</h3>
              <p className="text-muted-foreground mb-8 text-base flex-grow">{t('resources.items.salary.desc')}</p>
              <button className="text-primary font-bold text-sm inline-flex items-center hover:translate-x-1 transition-transform rtl:flex-row-reverse rtl:hover:-translate-x-1">
                {t('resources.items.salary.link')} <span className="ml-2 rtl:mr-2 rtl:ml-0">{document.documentElement.dir === 'rtl' ? '←' : '→'}</span>
              </button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="group border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all bg-card flex flex-col h-full rtl:text-right">
              <div className="flex items-center justify-between mb-6 rtl:flex-row-reverse">
                <div className="bg-accent/10 p-3 rounded-lg text-accent">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-accent tracking-widest uppercase">Process</div>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">Recruitment Process</h3>
              <p className="text-muted-foreground mb-8 text-base flex-grow">Our structured step-by-step approach to ensure the best talent acquisition and placement for our clients.</p>
              <button 
                onClick={() => document.getElementById('recruitment-process-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary font-bold text-sm inline-flex items-center hover:translate-x-1 transition-transform rtl:flex-row-reverse rtl:hover:-translate-x-1"
              >
                View Process <span className="ml-2 rtl:mr-2 rtl:ml-0">{document.documentElement.dir === 'rtl' ? '←' : '→'}</span>
              </button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="group border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all bg-card flex flex-col h-full rtl:text-right">
              <div className="flex items-center justify-between mb-6 rtl:flex-row-reverse">
                <div className="bg-accent/10 p-3 rounded-lg text-accent">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-accent tracking-widest uppercase">{t('resources.categories.articles').slice(0, -1)}</div>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">{t('resources.items.interview.title')}</h3>
              <p className="text-muted-foreground mb-8 text-base flex-grow">{t('resources.items.interview.desc')}</p>
              <button className="text-primary font-bold text-sm inline-flex items-center hover:translate-x-1 transition-transform rtl:flex-row-reverse rtl:hover:-translate-x-1">
                {t('resources.items.interview.link')} <span className="ml-2 rtl:mr-2 rtl:ml-0">{document.documentElement.dir === 'rtl' ? '←' : '→'}</span>
              </button>
            </motion.div>

            {additionalResources.map((res) => (
              <motion.div variants={fadeIn} key={res.title} className="group border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all bg-card flex flex-col h-full rtl:text-right">
                <div className="flex items-center justify-between mb-6 rtl:flex-row-reverse">
                  <div className="bg-accent/10 p-3 rounded-lg text-accent">
                    {res.icon}
                  </div>
                  <div className="text-xs font-bold text-accent tracking-widest uppercase">{res.category}</div>
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">{res.title}</h3>
                <p className="text-muted-foreground mb-8 text-base flex-grow">{res.description}</p>
                <button className="text-primary font-bold text-sm inline-flex items-center hover:translate-x-1 transition-transform rtl:flex-row-reverse rtl:hover:-translate-x-1">
                  {res.linkText} <span className="ml-2 rtl:mr-2 rtl:ml-0">{document.documentElement.dir === 'rtl' ? '←' : '→'}</span>
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Section */}
          <motion.div 
            {...fadeIn}
            className="mt-20 border-t border-border pt-20 text-center rtl:text-right"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">{t('resources.newsletter.title')}</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {t('resources.newsletter.description')}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto rtl:flex-row-reverse">
              <input 
                type="email" 
                placeholder={t('resources.newsletter.placeholder')}
                className="flex-grow px-6 py-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-auto shadow-lg shadow-primary/20 font-bold rounded-xl">
                {t('resources.newsletter.button')}
              </Button>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
