import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, LucideIcon, Info } from 'lucide-react';

interface FeatureSection {
  title: string;
  icon: LucideIcon;
  content: string;
}

interface FeatureDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  sections: FeatureSection[];
  footerNote?: string;
}

const FeatureDetailModal: React.FC<FeatureDetailModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  subtitle, 
  icon: TitleIcon, 
  sections,
  footerNote
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
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TitleIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-800 tracking-tight">{title}</h2>
                  <p className="text-slate-500 text-sm font-medium">{subtitle}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
              <div className="grid md:grid-cols-2 gap-6">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <section.icon className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-black text-slate-800 mb-2">{section.title}</h3>
                        <p className="text-slate-600 text-[13px] leading-relaxed font-medium">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Note Section */}
              {footerNote && (
                <div className="mt-8 p-6 rounded-2xl bg-amber-50 border border-amber-100 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-none">
                    <Info className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-amber-900 mb-1 uppercase tracking-wider text-xs">Important Note</h4>
                    <p className="text-amber-800 text-[13px] leading-relaxed font-medium italic">
                      {footerNote}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FeatureDetailModal;
