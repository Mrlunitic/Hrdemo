import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, Users, Award, TrendingUp, Globe, Shield
} from "lucide-react";
import { useTranslation } from "react-i18next";
import FeatureDetailModal from "./FeatureDetailModal";
import { featureDetails } from "@/data/featureDetails";

const FeaturesSection = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState<any>(null);

  const features = [
    { id: 'learning', icon: BookOpen, title: t('features.items.learning.title'), description: t('features.items.learning.desc') },
    { id: 'talent', icon: Users, title: t('features.items.talent.title'), description: t('features.items.talent.desc') },
    { id: 'certs', icon: Award, title: t('features.items.certs.title'), description: t('features.items.certs.desc') },
    { id: 'analytics', icon: TrendingUp, title: t('features.items.analytics.title'), description: t('features.items.analytics.desc') },
    { id: 'global', icon: Globe, title: t('features.items.global.title'), description: t('features.items.global.desc') },
    { id: 'compliance', icon: Shield, title: t('features.items.compliance.title'), description: t('features.items.compliance.desc') },
  ];

  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 rtl:text-right"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">{t('features.badge')}</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
            {t('features.title')}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body">
            {t('features.description')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActiveFeature(featureDetails[feature.id])}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-300 rtl:text-right cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{feature.description}</p>
            </motion.div>
          ))}
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
    </section>
  );
};

export default FeaturesSection;
