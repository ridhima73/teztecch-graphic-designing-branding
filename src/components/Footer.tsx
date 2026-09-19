import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  ArrowUpRight, 
  Sparkles, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/servicesData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanner: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPlanner }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#003B34] text-white pt-16 pb-12 border-t border-[#00554B] relative overflow-hidden">
      {/* Background ambient curved shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#008375]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#02B8A6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Consultation Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#004D44] via-[#005B51] to-[#004D44] rounded-3xl p-8 sm:p-10 mb-16 border border-teal-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEFCE8] text-[#004D44] text-xs font-black uppercase tracking-wider mb-3 border border-[#FACC15]">
              <Sparkles className="w-3.5 h-3.5 text-[#CA8A04]" />
              Start Your Design Journey
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ready to Transform Your Brand Visually?
            </h3>
            <p className="text-teal-100/90 text-sm mt-2">
              Connect with Teztecch today and let creativity take your business to the next level.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-end">
            <motion.button
              id="footer-planner-cta-btn"
              onClick={onOpenPlanner}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3.5 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-xs rounded-xl transition-all shadow-md active:scale-95"
            >
              Instant Project Estimator
            </motion.button>
            <motion.button
              id="footer-contact-cta-btn"
              onClick={() => handleNav('contact')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-teal-300/30 transition-all flex items-center gap-2"
            >
              <span>Get Free Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#FACC15]" />
            </motion.button>
          </div>
        </motion.div>

        {/* 4-Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#00554B]">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00A896] to-[#007A6E] flex items-center justify-center text-white font-black text-xl shadow-md border border-teal-300/30">
                T
              </div>
              <span className="font-black text-2xl tracking-tight text-white">
                TEZTECCH
              </span>
            </div>

            <p className="text-teal-100/80 text-xs sm:text-sm leading-relaxed">
              Teztecch is a dynamic IT, branding, and advertising company delivering creative and technology-driven solutions. We combine creativity with strategy to produce designs that are not only visually appealing but also business-focused.
            </p>

            <div className="pt-2">
              <div className="text-xs text-[#FACC15] font-bold uppercase tracking-wider mb-1">
                Design Philosophy
              </div>
              <p className="text-xs text-teal-200 italic">
                &ldquo;We don’t just design — we create impact.&rdquo;
              </p>
            </div>
          </div>

          {/* Col 2: Design Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-[#00554B] pb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span>
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-teal-100/80">
              <li>
                <button 
                  onClick={() => handleNav('logo-branding')} 
                  className="hover:text-[#FACC15] transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#2DD4BF]" />
                  Logo & Brand Identity
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('social-media')} 
                  className="hover:text-[#FACC15] transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#2DD4BF]" />
                  Social Media Creatives
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('marketing-ads')} 
                  className="hover:text-[#FACC15] transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#2DD4BF]" />
                  Marketing & Advertising
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('packaging')} 
                  className="hover:text-[#FACC15] transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#2DD4BF]" />
                  Packaging & Label Design
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('corporate-branding')} 
                  className="hover:text-[#FACC15] transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#2DD4BF]" />
                  Corporate Branding & Stationery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('ui-graphics')} 
                  className="hover:text-[#FACC15] transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#2DD4BF]" />
                  UI Graphics & Visual Assets
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-[#00554B] pb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span>
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-teal-100/80">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About Us & Vision
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">
                  All Services Hub
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-white transition-colors">
                  Client Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact & Location
                </button>
              </li>
              <li>
                <button onClick={onOpenPlanner} className="text-[#FACC15] hover:underline font-bold">
                  Budget Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-[#00554B] pb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span>
              Nagpur Headquarters
            </h4>
            
            <div className="space-y-2.5 text-xs text-teal-100">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FACC15] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Teztecch</p>
                  <p className="text-teal-200">IT, Branding & Advertising Company</p>
                  <p className="text-teal-200">Nagpur, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#FACC15] flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${COMPANY_INFO.phoneRaw[0]}`} className="hover:text-[#FACC15] font-semibold text-white">
                    {COMPANY_INFO.phones[0]}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phoneRaw[1]}`} className="hover:text-[#FACC15] font-semibold text-white">
                    {COMPANY_INFO.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#FACC15] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#FACC15] text-teal-200">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Globe className="w-4 h-4 text-[#FACC15] flex-shrink-0" />
                <a href="https://www.teztecch.com" target="_blank" rel="noreferrer" className="hover:text-[#FACC15] text-teal-200">
                  {COMPANY_INFO.website}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-teal-300">
                <Clock className="w-4 h-4 text-[#FACC15] flex-shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-300/80">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Teztecch. All rights reserved.</span>
            <span>•</span>
            <span className="text-teal-200">IT, Branding & Advertising Company</span>
          </div>

          <div className="flex items-center gap-4 text-teal-200">
            <span className="flex items-center gap-1 text-[#FACC15]">
              <ShieldCheck className="w-4 h-4" />
              100% Vector Trademark Ready
            </span>
            <span>•</span>
            <span>Nagpur • Maharashtra</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

