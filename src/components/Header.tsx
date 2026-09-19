import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles, 
  MessageSquare, 
  Crown, 
  Share2, 
  Megaphone, 
  Package, 
  Briefcase, 
  Layout, 
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/servicesData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenPlanner: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenPlanner }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks: { id: PageId; title: string; desc: string; icon: any }[] = [
    { id: 'logo-branding', title: 'Logo & Brand Identity', desc: 'Logos, guidelines & complete identity kits', icon: Crown },
    { id: 'social-media', title: 'Social Media Creatives', desc: 'Posts, reels covers, ad creatives & carousels', icon: Share2 },
    { id: 'marketing-ads', title: 'Marketing & Advertising', desc: 'Posters, brochures, hoardings & flyers', icon: Megaphone },
    { id: 'packaging', title: 'Packaging Design', desc: 'Box, pouch & bottle label 3D mockups', icon: Package },
    { id: 'corporate-branding', title: 'Corporate Branding', desc: 'Stationery, pitch decks & company profiles', icon: Briefcase },
    { id: 'ui-graphics', title: 'UI Graphics & Visual Assets', desc: 'Website banners, custom icons & illustrations', icon: Layout },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServiceActive = [
    'services',
    'logo-branding',
    'social-media',
    'marketing-ads',
    'packaging',
    'corporate-branding',
    'ui-graphics'
  ].includes(currentPage);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification & Contact Bar with Teal Gradient */}
      <div className="bg-[#004D44] text-white/95 text-xs py-2 px-4 border-b border-[#006055] hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-teal-100">
              <MapPin className="w-3.5 h-3.5 text-[#2DD4BF]" />
              {COMPANY_INFO.city}
            </span>
            <span className="flex items-center gap-1.5 text-teal-100">
              <Clock className="w-3.5 h-3.5 text-[#2DD4BF]" />
              {COMPANY_INFO.workingHours}
            </span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1.5 hover:text-[#2DD4BF] transition-colors text-teal-100"
            >
              <Mail className="w-3.5 h-3.5 text-[#2DD4BF]" />
              {COMPANY_INFO.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span className="text-teal-200 font-medium">Direct Line:</span>
              <a href={`tel:${COMPANY_INFO.phoneRaw[0]}`} className="hover:text-[#2DD4BF] font-semibold text-white">
                {COMPANY_INFO.phones[0]}
              </a>
              <span className="text-teal-400/60">|</span>
              <a href={`tel:${COMPANY_INFO.phoneRaw[1]}`} className="hover:text-[#2DD4BF] font-semibold text-white">
                {COMPANY_INFO.phones[1]}
              </a>
            </div>

            <motion.a 
              href={`https://wa.me/919822278791?text=${encodeURIComponent('Hello Teztecch Team, I am looking for graphic designing & branding services.')}`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 bg-[#00A896] hover:bg-[#02B8A6] text-white px-3 py-0.5 rounded-full font-bold transition-colors shadow-sm"
            >
              <MessageSquare className="w-3 h-3 text-[#FACC15]" />
              WhatsApp
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-teal-100 py-3' 
          : 'bg-white border-b border-teal-50 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Brand Logo */}
          <motion.button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00A896] to-[#006055] flex items-center justify-center shadow-md shadow-[#00A896]/20 group-hover:scale-105 transition-transform border border-teal-400/30">
              <div className="relative flex items-center justify-center">
                <span className="text-white font-black text-xl tracking-tighter">T</span>
                <span className="absolute -top-1 -right-1.5 w-2 h-2 bg-[#FACC15] rounded-full ring-2 ring-[#006055]"></span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-2xl tracking-tight text-[#004D44] group-hover:text-[#00A896] transition-colors">
                  TEZTECCH
                </span>
                <span className="px-1.5 py-0.5 text-[10px] uppercase font-black tracking-wider bg-[#E6FAF7] text-[#008375] border border-[#00A896]/30 rounded">
                  Design
                </span>
              </div>
              <p className="text-[10px] text-teal-700/70 font-semibold tracking-wider uppercase">
                Branding • Advertising • UI
              </p>
            </div>
          </motion.button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              id="nav-home-btn"
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all relative ${
                currentPage === 'home'
                  ? 'text-[#004D44] bg-[#E6FAF7] font-bold'
                  : 'text-neutral-600 hover:text-[#008375] hover:bg-[#F0FDFB]'
              }`}
            >
              Home
            </button>

            <button
              id="nav-about-btn"
              onClick={() => handleNavClick('about')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                currentPage === 'about'
                  ? 'text-[#004D44] bg-[#E6FAF7] font-bold'
                  : 'text-neutral-600 hover:text-[#008375] hover:bg-[#F0FDFB]'
              }`}
            >
              About Us
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                id="nav-services-dropdown-btn"
                onClick={() => handleNavClick('services')}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold inline-flex items-center gap-1.5 transition-all ${
                  isServiceActive
                    ? 'text-[#004D44] bg-[#E6FAF7] font-bold'
                    : 'text-neutral-600 hover:text-[#008375] hover:bg-[#F0FDFB]'
                }`}
              >
                Products & Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180 text-[#00A896]' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-[580px] bg-white rounded-2xl shadow-2xl border border-teal-100 p-4 grid grid-cols-2 gap-2 mt-1 z-50"
                  >
                    <div className="col-span-2 px-3.5 py-2.5 bg-gradient-to-r from-[#E6FAF7] to-[#F0FDFB] border border-teal-100 rounded-xl flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#004D44] uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#00A896]" />
                        Comprehensive Design Solutions
                      </span>
                      <button 
                        onClick={() => handleNavClick('services')}
                        className="text-xs font-bold text-[#00A896] hover:text-[#006055] hover:underline flex items-center gap-1"
                      >
                        View All Services <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    {serviceLinks.map((service) => {
                      const Icon = service.icon;
                      const isActive = currentPage === service.id;
                      return (
                        <motion.button
                          key={service.id}
                          id={`dropdown-service-${service.id}`}
                          onClick={() => handleNavClick(service.id)}
                          whileHover={{ x: 2 }}
                          className={`text-left p-3 rounded-xl transition-all flex items-start gap-3 group ${
                            isActive 
                              ? 'bg-[#E6FAF7] border border-[#00A896]' 
                              : 'hover:bg-[#F0FDFB] border border-transparent'
                          }`}
                        >
                          <div className={`p-2 rounded-lg transition-colors ${
                            isActive 
                              ? 'bg-[#008375] text-white shadow-sm' 
                              : 'bg-[#E6FAF7] text-[#008375] group-hover:bg-[#00A896] group-hover:text-white'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className={`text-xs font-bold transition-colors ${
                              isActive ? 'text-[#004D44]' : 'text-neutral-900 group-hover:text-[#008375]'
                            }`}>
                              {service.title}
                            </div>
                            <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                              {service.desc}
                            </p>
                          </div>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              id="nav-portfolio-btn"
              onClick={() => handleNavClick('portfolio')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                currentPage === 'portfolio'
                  ? 'text-[#004D44] bg-[#E6FAF7] font-bold'
                  : 'text-neutral-600 hover:text-[#008375] hover:bg-[#F0FDFB]'
              }`}
            >
              Portfolio & Work
            </button>

            <button
              id="nav-contact-btn"
              onClick={() => handleNavClick('contact')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                currentPage === 'contact'
                  ? 'text-[#004D44] bg-[#E6FAF7] font-bold'
                  : 'text-neutral-600 hover:text-[#008375] hover:bg-[#F0FDFB]'
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              id="header-quote-calculator-btn"
              onClick={onOpenPlanner}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-[#006055] bg-[#E6FAF7] hover:bg-[#CCFBF1] border border-teal-200 transition-all shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00A896]" />
              Instant Estimator
            </motion.button>

            <motion.button
              id="header-get-started-btn"
              onClick={() => handleNavClick('contact')}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#00A896] to-[#008375] hover:from-[#02B8A6] hover:to-[#00A896] transition-all shadow-md shadow-[#00A896]/20"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-quick-planner-btn"
              onClick={onOpenPlanner}
              className="p-2 rounded-lg bg-[#E6FAF7] text-[#006055] text-xs font-bold flex items-center gap-1 border border-teal-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00A896]" />
              <span>Quote</span>
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#E6FAF7] text-[#006055] hover:bg-[#CCFBF1] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-teal-100 px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold ${
                  currentPage === 'home' ? 'bg-[#E6FAF7] text-[#004D44]' : 'text-neutral-700'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold ${
                  currentPage === 'about' ? 'bg-[#E6FAF7] text-[#004D44]' : 'text-neutral-700'
                }`}
              >
                About Us
              </button>

              <button
                onClick={() => handleNavClick('services')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold ${
                  currentPage === 'services' ? 'bg-[#E6FAF7] text-[#004D44]' : 'text-neutral-700'
                }`}
              >
                All Products & Services
              </button>

              {/* Service Subpages in Mobile Drawer */}
              <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-[#00A896] ml-3">
                {serviceLinks.map((service) => {
                  const Icon = service.icon;
                  const isActive = currentPage === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleNavClick(service.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 ${
                        isActive ? 'bg-[#008375] text-white' : 'text-neutral-600 hover:bg-[#F0FDFB]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{service.title}</span>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handleNavClick('portfolio')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold ${
                  currentPage === 'portfolio' ? 'bg-[#E6FAF7] text-[#004D44]' : 'text-neutral-700'
                }`}
              >
                Portfolio & Case Studies
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold ${
                  currentPage === 'contact' ? 'bg-[#E6FAF7] text-[#004D44]' : 'text-neutral-700'
                }`}
              >
                Contact Us & Location
              </button>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-3 border-t border-teal-100 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw[0]}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#E6FAF7] text-[#004D44] rounded-xl text-xs font-bold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00A896]" />
                  Call Us
                </a>
                <a
                  href={`https://wa.me/919822278791?text=${encodeURIComponent('Hello Teztecch Team, I want to discuss graphic design services.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#00A896] text-white rounded-xl text-xs font-bold shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="w-full py-3 bg-[#006055] text-white rounded-xl font-bold text-xs shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#FACC15]" />
                <span>Open Instant Project Estimator</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
