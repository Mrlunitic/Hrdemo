import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { ImageIcon, Maximize2 } from "lucide-react";

const Gallery = () => {
  const { t } = useTranslation();

  const { data: photos, isLoading } = useQuery({
    queryKey: ['gallery'],
    queryFn: () => api.get('/gallery').then(res => res.data)
  });

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header Section */}
          <motion.div 
            {...fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-primary">
              Our Gallery
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore moments from our various offices, recruitment drives, and community engagement initiatives around the world.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-muted animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : photos && photos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {photos.map((photo: any, idx: number) => (
                <motion.div
                  key={photo._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer"
                >
                  <img 
                    src={photo.imageUrl} 
                    alt={photo.caption} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white font-medium text-sm line-clamp-2 mb-2">
                      {photo.caption}
                    </p>
                    <div className="flex items-center text-white/60 text-xs">
                      <Maximize2 className="w-3 h-3 mr-1" /> View Full Image
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-muted/30 rounded-3xl border border-dashed border-border max-w-2xl mx-auto">
              <ImageIcon className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-muted-foreground mb-2">No photos yet</h3>
              <p className="text-muted-foreground/60">Check back soon for latest arrivals and updates from our global teams.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
