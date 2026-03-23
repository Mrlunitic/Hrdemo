import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrganizationChart from "@/components/OrganizationChart";
import LeadershipMessages from "@/components/LeadershipMessages";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Community = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 min-h-screen">
        <div className="px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container mx-auto text-center max-w-3xl mt-16 mb-16 rtl:text-right"
          >
            <h1 className="text-5xl font-heading font-bold mb-6 text-primary">{t('community.title')}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('community.description')}
            </p>
          </motion.div>
        </div>
        
        <OrganizationChart />
        
        <div className="container mx-auto px-4 mt-20 pb-20">
          <h2 className="text-4xl font-heading font-bold text-center text-primary mb-16 underline decoration-accent/30 underline-offset-8">Meet our Visionary Leaders</h2>
          <LeadershipMessages />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
