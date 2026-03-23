import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import ClientsSection from "@/components/ClientsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const Index = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => api.get('/posts').then(res => res.data)
  });
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        
        {/* Job Postings Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Latest Job Opportunities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our current job categories and apply for positions that match your skills.
              </p>
            </div>
            
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: any) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                No job postings available at the moment.
              </div>
            )}
          </div>
        </section>

        <FeaturesSection />
        <ClientsSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
