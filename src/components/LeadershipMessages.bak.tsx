import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const MessageCard = ({ id, name, title, image, message, delay = 0 }: { id: string, name: string, title: string, image: string, message: string[], delay?: number }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay,
        staggerChildren: 0.15,
        delayChildren: delay + 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1, margin: "-50px" }}
      variants={containerVariants}
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 border border-primary/5 mb-24 scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-4 relative group overflow-hidden"
        >
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent lg:hidden" />
          <div className="absolute bottom-6 left-6 text-white lg:hidden">
            <p className="text-sm font-medium opacity-80 uppercase tracking-widest">{title}</p>
            <h3 className="text-2xl font-bold">{name}</h3>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="lg:col-span-8 p-8 lg:p-16 flex flex-col justify-center">
          <div className="hidden lg:block mb-8">
            <motion.h4 variants={itemVariants} className="text-primary/60 font-bold uppercase tracking-[0.3em] text-xs mb-2">Executive Statement</motion.h4>
            <motion.h3 variants={itemVariants} className="text-4xl font-heading font-bold text-primary mb-1">{title}</motion.h3>
            <motion.p variants={itemVariants} className="text-xl font-medium text-accent">{name}</motion.p>
          </div>

          <div className="relative">
            <Quote className="absolute -top-6 -left-6 w-12 h-12 text-primary/5 -z-0" />
            <div className="relative z-10 space-y-4 text-muted-foreground leading-relaxed text-lg">
              {message.map((para, i) => (
                <motion.p 
                  key={i}
                  variants={itemVariants}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-muted flex items-center gap-4"
          >
            <div className="w-12 h-1 px-1 bg-primary/20 rounded-full" />
            <p className="text-sm font-bold uppercase tracking-widest text-primary/40">Kangaroo Group Leadership</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const LeadershipMessages = () => {
  // ... (leaders array remains same)
  const leaders = [
    {
      id: "chairman-message",
      name: "Pashupati Bista",
      title: "Chairman",
      image: "/chairman.png",
      message: [
        "We hereby take this opportunity to sincerely thank you for your interest in knowing us for further bonds. This profile gives you outline information about Kangaroo Human Resources Pvt. Ltd.. Which has been a renowned name in the spheres of overseas recruitment company in Nepal.",
        "Kangaroo Human Resources has risen to the forefront of the Nepalese manpower industry with the successful recruitment of more than 20,000 people in Middle East and Asia Pacific. Backed by client-focused professional management system accompanied with skilled manpower requirement in time. Our well trained and experienced team are committed to completing each and every assignment with speed and accuracy that can meet your criteria and contribute to productivity growth.",
        "The number of Nepalese going abroad for employment has been rising rapidly over the past couple of decades. The top five destinations of Nepalese for employment comprise Malaysia, Qatar, Saudi Arabia, Kuwait, UAE and the like. Nepal is now enjoying the demographic dividends which signify that there are large numbers of youth population. Thus recruiting form Nepal for your company is easier, quicker and productive.",
        "We believe our continuous success depends upon our customers' trust and we are dedicated to sustaining that trust. Finally, 'Your Job Is Our Job' is our motto and we accomplish every task in rational and professional manner keeping your requirement at the heart of everything we do."
      ]
    },
    {
      id: "ceo-message",
      name: "Seung Guk Kim",
      title: "CEO",
      image: "/ceo.png",
      message: [
        "Kangaroo Human Resources Pvt. Ltd., established in 2016 and registered under the Department of Labor, Government of Nepal (License No. 1381/074/75), is a prominent recruitment firm. We are supported by experienced Human Resources Development professionals proficient in training, manpower planning, and recruiting both domestically and internationally.",
        "Our specialization lies in planning, training, and recruiting high-quality human resources for various companies abroad. To date, we have successfully placed over 20,000 job seekers in countries such as Saudi Arabia, Dubai, Qatar, Bahrain, Oman, Kuwait, Malaysia, Japan, and Macau.",
        "With a nationwide network and an extensive database of job seekers, we offer comprehensive solutions for all recruitment needs, spanning from highly skilled to unskilled categories. Acting as a pivotal link between international job seekers and employers, we provide end-to-end recruitment services.",
        "Our vast database ensures that we can meet your requirements with qualified candidates from diverse industries and specialties. Once entrusted with a task, we take full responsibility for sourcing and recruiting the right human resources for your organization."
      ]
    },
    {
      id: "md-message",
      name: "Rinku Shahi Bista",
      title: "Managing Director",
      image: "/md.png",
      message: [
        "Dear Valuable Clients, Warm Greetings!",
        "In this third millennium era, human resources have become one of the most important subjects in the field of development globally hence looking forward in being a part of the Global development team. We planted a foundation stone in developing ourselves to be the part of Kangaroo Human Resources Pvt. Ltd. Nepal took our first step towards Human Resources Development.",
        "Kangaroo Human Resources Pvt. Ltd. Is owned and managed by experienced HRD professionals, who have over 15 years of experience in the field of recruitment & Selection. To meet the exacting Demands of Commercial & Government establishments round the globe we set up dully accredited company.",
        "Nepalese Manpower are sought-after the world over, for their technical skills, hard work and the ability to work under trying conditions. We look forward in giving the best of our services in the near coming future at any point of time. We would be your best solutions towards your human resources requirements for any industries."
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {leaders.map((leader) => (
            <MessageCard key={leader.id} {...leader} delay={0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessages;
