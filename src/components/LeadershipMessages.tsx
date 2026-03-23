import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, X, LucideIcon } from 'lucide-react';

const ExecutiveMessageModal = ({ 
  isOpen, 
  onClose, 
  name, 
  title, 
  image, 
  message 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  name: string, 
  title: string, 
  image: string, 
  message: string[] 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
          >
            {/* Header / Image side */}
            <div className="lg:w-2/5 relative h-64 lg:h-auto">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-white/70 mb-2">Executive Statement</p>
                <h3 className="text-3xl font-black text-white leading-tight mb-2">{title}</h3>
                <p className="text-xl font-bold text-accent-foreground">{name}</p>
              </div>
            </div>

            {/* Content side */}
            <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col relative bg-white overflow-hidden">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors z-20"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>

              <Quote className="absolute top-12 right-12 w-24 h-24 text-primary/5 -z-0" />
              
              <div className="relative z-10 flex-1 overflow-y-auto pr-4 custom-scrollbar">
                <div className="space-y-6 text-slate-600 text-[15px] sm:text-base leading-relaxed font-medium pt-4">
                  {message.map((para, i) => (
                    <p key={i}>
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-4 opacity-50">
                  <div className="w-12 h-1 bg-primary/20 rounded-full" />
                  <p className="text-xs font-black uppercase tracking-widest text-primary">Kangaroo Group Leadership</p>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={onClose}
                  className="px-10 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Close Message
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const MessageCard = ({ 
  id, 
  name, 
  title, 
  image, 
  message, 
  onClick,
  delay = 0 
}: { 
  id: string, 
  name: string, 
  title: string, 
  image: string, 
  message: string[], 
  onClick: () => void,
  delay?: number 
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay,
        staggerChildren: 0.1,
        delayChildren: delay + 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      onClick={onClick}
      className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-primary/5 border border-primary/5 flex flex-col h-full hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group cursor-pointer active:scale-[0.98]"
    >
      {/* Small Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-1">Executive Statement</p>
          <h3 className="text-xl font-black text-white leading-tight">{title}</h3>
          <p className="text-sm font-bold text-accent-foreground/90">{name}</p>
        </div>
      </div>

      {/* Compact Content */}
      <div className="p-6 flex flex-col flex-1 relative bg-white">
        <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/5 -z-0" />
        
        <div className="relative z-10 flex-1 overflow-hidden">
          <div className="space-y-3 text-slate-600 text-[13px] leading-relaxed font-medium pt-2 line-clamp-[6]">
            {message[0]}
          </div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between"
        >
          <span className="text-[10px] font-black uppercase tracking-widest text-primary font-bold group-hover:translate-x-1 transition-transform">
            Read Full Message →
          </span>
          <div className="w-8 h-1 bg-primary/20 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const LeadershipMessages = () => {
  const [activeLeader, setActiveLeader] = useState<any>(null);

  const leaders = [
    {
      id: "chairman-message",
      name: "Pashupati Bista",
      title: "Chairman",
      image: "file:///C:/Users/HP/.gemini/antigravity/brain/b2c74083-b90e-4fb2-81d7-feabd7005dc9/chairman_pashupati_bista_1774247327947.png",
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
      image: "file:///C:/Users/HP/.gemini/antigravity/brain/b2c74083-b90e-4fb2-81d7-feabd7005dc9/ceo_seung_guk_kim_1774247351137.png",
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
      image: "file:///C:/Users/HP/.gemini/antigravity/brain/b2c74083-b90e-4fb2-81d7-feabd7005dc9/md_rinku_shahi_bista_1774247438227.png",
      message: [
        "Dear Valuable Clients, Warm Greetings!",
        "In this third millennium era, human resources have become one of the most important subjects in the field of development globally hence looking forward in being a part of the Global development team. We planted a foundation stone in developing ourselves to be the part of Kangaroo Human Resources Pvt. Ltd. Nepal took our first step towards Human Resources Development.",
        "Kangaroo Human Resources Pvt. Ltd. Is owned and managed by experienced HRD professionals, who have over 15 years of experience in the field of recruitment & Selection. To meet the exacting Demands of Commercial & Government establishments round the globe we set up dully accredited company.",
        "Nepalese Manpower are sought-after the world over, for their technical skills, hard work and the ability to work under trying conditions. We look forward in giving the best of our services in the near coming future at any point of time. We would be your best solutions towards your human resources requirements for any industries."
      ]
    }
  ];

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {leaders.map((leader, index) => (
          <MessageCard 
            key={leader.id} 
            {...leader} 
            delay={index * 0.1} 
            onClick={() => setActiveLeader(leader)}
          />
        ))}
      </div>

      <ExecutiveMessageModal 
        isOpen={!!activeLeader}
        onClose={() => setActiveLeader(null)}
        {...activeLeader}
      />
    </>
  );
};

export default LeadershipMessages;
