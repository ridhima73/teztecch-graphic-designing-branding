import React from 'react';
import { Phone, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/servicesData';
import { PageId } from '../types';

interface CTASectionProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanner: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onNavigate, onOpenPlanner }) => {
  return (
    <section className="py-20 bg-[#F0FDFB] relative overflow-hidden border-t border-teal-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-[#006A60] via-[#008375] to-[#004D44] rounded-3xl p-8 sm:p-14 text-white relative shadow-2xl overflow-hidden border border-teal-500/30"
        >
          
          {/* Subtle curved arc overlays matching reference image */}
          <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full border-[40px] border-white/5 pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full border-[30px] border-white/5 pointer-events-none" />
          <div className="absolute right-1/4 top-0 w-64 h-64 rounded-full bg-[#02B8A6]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEFCE8] border border-[#FACC15] text-[#004D44] text-xs font-black uppercase tracking-wider shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#CA8A04]" />
              Let’s Bring Your Brand Vision To Life
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Transform Your Brand <span className="text-[#FACC15]">Visually</span>?
            </h2>

            <p className="text-base sm:text-lg text-teal-100 leading-relaxed font-normal">
              Connect with <strong className="text-white font-bold">Teztecch</strong> today and let creativity take your business to the next level. We combine strategy and artistry to craft designs that speak and brands that stand out.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <motion.button
                id="cta-book-consultation-btn"
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-xs rounded-xl transition-all shadow-lg active:scale-95 flex items-center gap-2"
              >
                <span>Book Free Design Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                id="cta-open-planner-btn"
                onClick={onOpenPlanner}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-white/15 hover:bg-white/25 text-white font-bold text-xs rounded-xl border border-white/30 transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-[#FACC15]" />
                <span>Instant Project Estimator</span>
              </motion.button>

              <motion.a
                href={`https://wa.me/919822278791?text=${encodeURIComponent('Hello Teztecch! I am interested in transforming my brand visuals.')}`}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-[#004D44] hover:bg-[#003B34] text-white font-bold text-xs rounded-xl border border-teal-400/30 transition-all flex items-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>

            {/* Quick Contact Bar */}
            <div className="pt-6 border-t border-teal-500/30 flex flex-wrap items-center justify-center gap-6 text-xs text-teal-100/90">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
                Direct Hotline: <strong className="text-white">{COMPANY_INFO.phones[0]}</strong>
              </span>
              <span>•</span>
              <span className="text-teal-200">
                Nagpur, Maharashtra • Monday – Saturday (10 AM – 7 PM)
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

