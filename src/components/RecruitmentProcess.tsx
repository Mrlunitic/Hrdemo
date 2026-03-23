import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const steps = [
  {
    title: "Step I: Pre Labor Approval",
    description: "After receiving the authorized Demand Letter from the respective company, the documents are presented for pre labor approval. The Department of Foreign Employment (DOFE) of Nepal analyzes the documents and approve for further processing.",
    color: "bg-blue-50",
    accent: "text-blue-600"
  },
  {
    title: "Step II: Advertisement",
    description: "The Demand Letter which is pre approved from Department of Foreign Employment (DOFE) is published in National daily/weekly newspaper for collecting documents. Kangaroo Human Resources Pvt. Ltd. uses different tools like Internet, SMS, telephone etc. in order to inform and collect documents.",
    color: "bg-indigo-50",
    accent: "text-indigo-600"
  },
  {
    title: "Step III: Candidate Screening/Interview",
    description: "We search from the up to date data bank of potential candidates with full information on their skill and education. Kangaroo Human Resources Pvt. Ltd. shall make the short list of the candidates for pre-interview. The final interview for the short listed candidates will be conducted by the employer himself or his representative.",
    color: "bg-sky-50",
    accent: "text-sky-600"
  },
  {
    title: "Step IV: Communications",
    description: "All the departments of Kangaroo Human Resources Pvt. Ltd. is fully computerized and networked in order to provide our clients and the candidates the best and prompt services. Our staff members are always committed and ready to help its clients.",
    color: "bg-cyan-50",
    accent: "text-cyan-600"
  },
  {
    title: "Step V: Medical Checkup",
    description: "Only selected candidates will be send for full medical examination to the medical centre authorized by Government of Nepal. The candidates who are physically and mentally fit are eligible to sign the employment contract and he/she should be entitled for further visa procedures.",
    color: "bg-teal-50",
    accent: "text-teal-600"
  },
  {
    title: "Step VI: Visa Processing",
    description: "We send all the necessary documents as per requirements for further visa processing like passport copies, photographs, medical reports, experience certificates etc. to the employer.",
    color: "bg-emerald-50",
    accent: "text-emerald-600"
  },
  {
    title: "Step VII: Orientation",
    description: "After receiving the job offer or employment visa, orientation classes are compulsory organized by government registered institutes. It helps to create awareness and make cordial relations between employer and employee.",
    color: "bg-green-50",
    accent: "text-green-600"
  },
  {
    title: "Step VIII: Final Labor Approval",
    description: "All necessary documents are submitted in Department of Foreign Employment (DOFE), Nepal for final approval and immigration clearance. The DOFE analyzes the documents and provides final approval.",
    color: "bg-lime-50",
    accent: "text-lime-600"
  },
  {
    title: "FINAL: Travel Arrangement",
    description: "As soon as visa endorsed passport are received, we give tickets booking to our Travel Agency. After flight confirmation we send flight details for airport pick-up and hostel arrangement.",
    color: "bg-yellow-50",
    accent: "text-yellow-600"
  }
];

const TimelineItem = ({ step, index }: { step: typeof steps[0], index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 45 : -45, 0]);
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 100 : -100, 0]);

  return (
    <div ref={ref} className={`relative flex items-center justify-between mb-24 w-full ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`} style={{ perspective: "1000px" }}>
      {/* Connector Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className={`w-6 h-6 rounded-full bg-white border-4 border-primary shadow-[0_0_20px_rgba(var(--primary),0.3)]`}
        />
      </div>

      {/* Card Content */}
      <motion.div 
        style={{ scale, opacity, rotateY, x }}
        className={`w-[45%] p-8 rounded-3xl border border-primary/10 shadow-xl ${step.color} backdrop-blur-sm relative transition-shadow hover:shadow-2xl`}
      >
        <div className={`text-4xl font-black ${step.accent} opacity-10 absolute top-4 right-6 italic`}>
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </div>
        <span className={`${step.accent} font-bold text-sm tracking-widest uppercase mb-4 block`}>
          {step.title.split(':')[0]}
        </span>
        <h3 className="text-2xl font-heading font-bold text-primary mb-4">
          {step.title.includes(':') ? step.title.split(':')[1].trim() : step.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </motion.div>

      {/* Spacer for the other side */}
      <div className="w-[45%]" />
    </div>
  );
};

const RecruitmentProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div id="recruitment-process-section" className="py-32 bg-muted/20 overflow-hidden relative">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6"
          >
            Recruitment Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Our professional step-by-step approach to ensuring the best talent acquisition and placement for our clients.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary/10 rounded-full">
            <motion.div 
              style={{ scaleY: pathLength }}
              className="absolute top-0 left-0 right-0 h-full bg-primary rounded-full origin-top"
            />
          </div>

          {/* Timeline Items */}
          <div className="relative">
            {steps.map((step, i) => (
              <TimelineItem key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentProcess;
