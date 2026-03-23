import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CtaSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center rtl:text-right">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-heading font-bold mb-6"
          >
            {t('cta.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/70 mb-10 font-body leading-relaxed max-w-2xl mx-auto"
          >
            {t('cta.description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="/contact"
              className="inline-block gradient-accent text-accent-foreground font-bold px-10 py-4 rounded-xl hover:shadow-lg transition-all active:scale-95"
            >
              {t('cta.button')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
