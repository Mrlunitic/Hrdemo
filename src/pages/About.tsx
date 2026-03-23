import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadershipMessages from "@/components/LeadershipMessages";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BookOpen, Shield } from "lucide-react";
import FeatureDetailModal from "@/components/FeatureDetailModal";
import { featureDetails } from "@/data/featureDetails";

const About = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState<any>(null);

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
          <div className="max-w-4xl mx-auto">
            <motion.h1
              {...fadeIn}
              className="text-4xl sm:text-5xl font-heading font-bold mb-8 text-primary text-center rtl:text-right"
            >
              {t('about.title')}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-video bg-muted rounded-2xl mb-12 overflow-hidden relative"
            >
              <img src="/logo.png" alt="Logo" className="absolute inset-0 w-full h-full object-contain p-12 opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl font-heading font-bold text-primary text-center px-4">
                  {t('hero.badge')}
                </h2>
              </div>
            </motion.div>

            <div className="prose prose-lg max-w-none text-muted-foreground rtl:text-right">
              <motion.p
                {...fadeIn}
                className="text-xl font-medium text-foreground mb-6"
              >
                {t('about.description')}
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-8 mt-12 mb-8">
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-xl border border-border shadow-sm rtl:text-right"
                >
                  <h4 className="text-xl font-heading font-bold mb-4 text-accent">{t('about.vision.title')}</h4>
                  <p className="text-sm leading-relaxed">{t('about.vision.text')}</p>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-xl border border-border shadow-sm rtl:text-right"
                >
                  <h4 className="text-xl font-heading font-bold mb-4 text-accent">{t('about.mission.title')}</h4>
                  <p className="text-sm leading-relaxed">{t('about.mission.text')}</p>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-xl border border-border shadow-sm rtl:text-right"
                >
                  <h4 className="text-xl font-heading font-bold mb-4 text-accent">{t('about.global.title')}</h4>
                  <p className="text-sm leading-relaxed">{t('about.global.text')}</p>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-xl border border-border shadow-sm rtl:text-right"
                >
                  <h4 className="text-xl font-heading font-bold mb-4 text-accent">{t('about.industry.title')}</h4>
                  <p className="text-sm leading-relaxed">{t('about.industry.text')}</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Wider sections */}
          <div className="max-w-6xl mx-auto mt-32">
            <div id="executive-messages">
              <h3 className="text-4xl font-heading font-bold text-primary mb-16 text-center underline decoration-accent/30 underline-offset-8">
                Executive Messages
              </h3>
              <LeadershipMessages />
            </div>

            {/* Compliance & Requirements Section */}
            <div className="mt-32">
              <motion.h3
                {...fadeIn}
                className="text-4xl font-heading font-bold text-primary mb-12 text-center underline decoration-accent/30 underline-offset-8"
              >
                Requirements & Agreements
              </motion.h3>
              <div className="grid sm:grid-cols-2 gap-8">
                <motion.div
                  {...fadeIn}
                  onClick={() => setActiveFeature(featureDetails.learning)}
                  className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-primary/20 transition-all cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-800 mb-4">{featureDetails.learning.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    Explore the essential legal documentation and governmental requirements for international recruitment and employment compliance.
                  </p>
                  <div className="mt-8 flex items-center text-primary font-black text-sm uppercase tracking-widest gap-2">
                    View Requirements <span className="text-xl">→</span>
                  </div>
                </motion.div>

                <motion.div
                  {...fadeIn}
                  onClick={() => setActiveFeature(featureDetails.compliance)}
                  className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-primary/20 transition-all cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all text-accent">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-800 mb-4">{featureDetails.compliance.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    Detailed breakdown of standard employment agreements, candidate welfare policies, and recruitment terms and conditions.
                  </p>
                  <div className="mt-8 flex items-center text-accent font-black text-sm uppercase tracking-widest gap-2">
                    View Terms <span className="text-xl">→</span>
                  </div>
                </motion.div>
              </div>
            </div>

            <FeatureDetailModal
              isOpen={!!activeFeature}
              onClose={() => setActiveFeature(null)}
              title={activeFeature?.title || ""}
              subtitle={activeFeature?.subtitle || ""}
              icon={activeFeature?.icon || BookOpen}
              sections={activeFeature?.sections || []}
              footerNote={activeFeature?.footerNote}
            />

            <motion.div
              {...fadeIn}
              className="mt-32 mb-8"
            >
              <h3 className="text-2xl font-heading font-semibold text-primary mb-6 text-center rtl:text-right">
                {t('about.headquarters')}
              </h3>
              <div className="bg-card rounded-2xl border border-border shadow-md overflow-hidden w-full h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.638423450711!2d85.3423851!3d27.699905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1949ee20b003%3A0xc8af9ada0a5d2386!2sKangaroo%20Human%20Resource%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1709668351001!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kangaroo Human Resources Office Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
