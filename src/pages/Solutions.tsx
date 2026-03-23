import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Solutions = () => {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <motion.h1 
            {...fadeIn}
            className="text-4xl font-heading font-bold mb-8 text-primary rtl:text-right"
          >
            {t('solutions.title')}
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeIn} className="rtl:text-right">
              <h2 className="text-2xl font-heading font-semibold mb-4">{t('solutions.executive.title')}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('solutions.executive.text')}
              </p>
              
              <h2 className="text-2xl font-heading font-semibold mb-4">{t('solutions.volume.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('solutions.volume.text')}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary rounded-2xl p-8 rtl:text-right"
            >
              <h3 className="text-xl font-heading font-bold mb-4">{t('solutions.why.title')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2 rtl:flex-row-reverse">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p><strong>{t('solutions.why.expertise.title')}</strong> {t('solutions.why.expertise.text')}</p>
                </li>
                <li className="flex items-start gap-2 rtl:flex-row-reverse">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p><strong>{t('solutions.why.reach.title')}</strong> {t('solutions.why.reach.text')}</p>
                </li>
                <li className="flex items-start gap-2 rtl:flex-row-reverse">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p><strong>{t('solutions.why.tailored.title')}</strong> {t('solutions.why.tailored.text')}</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </main>
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Solutions;
