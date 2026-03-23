import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AnimatedNumber = ({ value }: { value: string }) => {
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, numericPart, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [numericPart]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
};

const StatsBar = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "10", suffix: "K+", label: t('stats.professionals') },
    { value: "500", suffix: "+", label: t('stats.manpower') },
    { value: "50", suffix: "+", label: t('stats.countries') },
    { value: "25", suffix: "+", label: t('stats.excellence') },
  ];

  return (
    <section className="relative -mt-12 z-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl border border-muted grid grid-cols-2 md:grid-cols-4 divide-x divide-muted rtl:divide-x-reverse overflow-hidden"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="text-center py-8 px-4"
            >
              <div className="text-3xl sm:text-4xl font-heading font-bold text-accent">
                <AnimatedNumber value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-sm text-muted-foreground mt-1 font-body">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
