import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t } = useTranslation();
  
  // Get localized items array from i18n
  // We use type assertion since t return string by default but can return objects/arrays with returnObjects: true
  const testimonialItems = t('testimonials.items', { returnObjects: true }) as Array<{
    quote: string;
    name: string;
    role: string;
  }>;

  return (
    <section id="community" className="py-24 px-4 bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 rtl:text-right"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">{t('testimonials.badge')}</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonialItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 flex flex-col rtl:text-right"
            >
              <div className="flex gap-1 mb-4 rtl:flex-row-reverse">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-highlight text-highlight" />
                ))}
              </div>
              <p className="text-foreground/80 font-body leading-relaxed flex-1 italic">"{item.quote}"</p>
              <div className="mt-6 pt-4 border-t border-border">
                <div className="font-heading font-bold text-foreground">{item.name}</div>
                <div className="text-sm text-muted-foreground font-body">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
