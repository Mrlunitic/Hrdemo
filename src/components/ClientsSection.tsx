import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import api from "../lib/api";

const countries = ["KSA(SAUDI)", "KUWAIT", "MALAYASIA", "QATAR", "UAE"];

const Marquee = ({ items, reverse = false }: { items: any[], reverse?: boolean }) => {
  if (items.length === 0) return null;

  // Duplicate items to ensure a smooth loop if there are few items
  const displayItems = items.length < 5 ? [...items, ...items, ...items] : items;

  return (
    <div className="flex overflow-hidden space-x-8 py-10 select-none">
      <motion.div
        animate={{
          x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-none space-x-8"
      >
        {displayItems.map((partner, index) => (
          <div
            key={`${partner._id}-${index}`}
            className="flex-none w-64 h-32 bg-white border border-muted rounded-xl p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
          >
            <img
              src={partner.imageUrl}
              alt={partner.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
      <motion.div
        animate={{
          x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-none space-x-8"
      >
        {displayItems.map((partner, index) => (
          <div
            key={`${partner._id}-${index}-clone`}
            className="flex-none w-64 h-32 bg-white border border-muted rounded-xl p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
          >
            <img
              src={partner.imageUrl}
              alt={partner.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ClientsSection = () => {
  const [activeTab, setActiveTab] = useState("KSA(SAUDI)");
  const [allPartners, setAllPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await api.get('/partners');
        setAllPartners(response.data);
      } catch (error) {
        console.error("Failed to fetch partners", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPartners();
  }, []);

  const filteredClients = allPartners.filter(
    (p: any) => p.type === 'client' && p.country === activeTab
  );

  const companies = allPartners.filter((p: any) => p.type === 'company');

  if (loading) return null;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Clients Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="bg-primary text-white px-8 py-2 rounded-lg font-bold text-sm tracking-wider mb-6 shadow-lg shadow-primary/20">
            CLIENTS
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-4 text-center">
            OUR PRESTIGIOUS CLIENTS
          </h2>
          <div className="flex items-center gap-1.5 mb-12">
            <div className="h-1.5 w-8 rounded-full bg-primary" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary/30" />
          </div>

          {/* Country Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 bg-muted/30 p-1.5 rounded-2xl border border-muted max-w-3xl mx-auto">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setActiveTab(country)}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === country
                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                    : "text-muted-foreground hover:text-primary hover:bg-white"
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>

        {/* Client Logos Ticker */}
        <div className="relative min-h-[160px]">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          {filteredClients.length > 0 ? (
            <Marquee items={filteredClients} />
          ) : (
            <div className="flex justify-center items-center h-32 text-muted-foreground italic">
              No clients found for {activeTab}
            </div>
          )}
        </div>

        {/* Companies Header */}
        <div className="flex flex-col items-center mt-24 mb-16">
          <div className="bg-primary text-white px-8 py-2 rounded-lg font-bold text-sm tracking-wider mb-6 shadow-lg shadow-primary/20">
            COMPANIES
          </div>
          <div className="flex items-center gap-1.5 mb-12">
            <div className="h-1.5 w-1.5 rounded-full bg-primary/30" />
            <div className="h-1.5 w-8 rounded-full bg-primary" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary/30" />
          </div>
        </div>

        {/* Companies Logos Ticker (Reversed) */}
        <div className="relative min-h-[160px]">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          {companies.length > 0 ? (
            <Marquee items={companies} reverse={true} />
          ) : (
            <div className="flex justify-center items-center h-32 text-muted-foreground italic">
              No companies added yet
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
