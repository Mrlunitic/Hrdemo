import { motion } from "framer-motion";
import heroImg from "@/assets/hero-team.jpg";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden pt-16">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rtl:text-right"
          >
            <span className="inline-block bg-white text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              {t('hero.badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
              {t('hero.title1')} <br />
              <span className="text-white">{t('hero.title2')}</span> <br />
              {t('hero.title3')}
            </h1>
            <p className="text-lg text-primary-foreground/70 font-body max-w-lg mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/solutions"
                className="bg-white text-primary font-semibold px-8 py-3.5 rounded-lg text-sm hover:bg-white/90 transition-colors shadow-lg"
              >
                {t('hero.cta1')}
              </a>
              <a
                href="/about"
                className="border border-white/50 text-white font-semibold px-8 py-3.5 rounded-lg text-sm hover:bg-white/10 transition-colors"
              >
                {t('hero.cta2')}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl" />
              <img
                src={heroImg}
                alt="Diverse HR professionals collaborating in a modern office"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[16/10]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
