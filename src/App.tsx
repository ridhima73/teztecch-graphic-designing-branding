import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProjectPlannerModal } from './components/ProjectPlannerModal';
import { motion, AnimatePresence } from 'motion/react';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { LogoBrandingPage } from './pages/LogoBrandingPage';
import { SocialMediaPage } from './pages/SocialMediaPage';
import { MarketingAdsPage } from './pages/MarketingAdsPage';
import { PackagingPage } from './pages/PackagingPage';
import { CorporateBrandingPage } from './pages/CorporateBrandingPage';
import { UIGraphicsPage } from './pages/UIGraphicsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';

import { MessageSquare, ArrowUp, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from './data/servicesData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenPlanner={() => setIsPlannerOpen(true)} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} onOpenPlanner={() => setIsPlannerOpen(true)} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} onOpenPlanner={() => setIsPlannerOpen(true)} />;
      case 'logo-branding':
        return <LogoBrandingPage onNavigate={handleNavigate} onOpenPlanner={() => setIsPlannerOpen(true)} />;
      case 'social-media':
        return <SocialMediaPage onNavigate={handleNavigate} onOpenPlanner={() => setIsPlannerOpen(true)} />;
      case 'marketing-ads':
        return <MarketingAdsPage onNavigate={handleNavigate} onOpenPlanner={() => setIsPlannerOpen(true)} />;
      case 'packaging':
        return <PackagingPage onNavigate={handleNavigate} onOpenPlanner={() => setIsPlannerOpen(true)} />;
      case 'corporate-branding':
        return <CorporateBrandingPage onNavigate={handleNavigate} onOpenPlanner={() => setIsPlannerOpen(true)} />;
      case 'ui-graphics':
        return <UIGraphicsPage onNavigate={handleNavigate} onOpenPlanner={() => setIsPlannerOpen(true)} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} onOpenPlanner={() => setIsPlannerOpen(true)} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} onOpenPlanner={() => setIsPlannerOpen(true)} />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenPlanner={() => setIsPlannerOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0A2925] font-sans selection:bg-[#00A896] selection:text-white">
      
      {/* Global Agency Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenPlanner={() => setIsPlannerOpen(true)}
      />

      {/* Main Page Content with smooth animated page transitions */}
      <main className="flex-1 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Agency Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPlanner={() => setIsPlannerOpen(true)}
      />

      {/* Floating Action Utilities */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* Scroll to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              id="scroll-to-top-btn"
              onClick={scrollToTop}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white shadow-lg border border-teal-100 text-[#008375] hover:text-[#00A896] flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Instant Estimator Button */}
        <motion.button
          id="floating-planner-trigger-btn"
          onClick={() => setIsPlannerOpen(true)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:flex px-4 py-2.5 bg-[#005F55] hover:bg-[#004E46] text-white rounded-full shadow-lg border border-[#00A896]/40 font-bold text-xs items-center gap-2 transition-all shadow-[#00A896]/20"
        >
          <Sparkles className="w-4 h-4 text-[#FACC15] animate-spin" style={{ animationDuration: '8s' }} />
          <span>Instant Quote</span>
        </motion.button>

        {/* Floating WhatsApp Quick Action */}
        <motion.a
          href={`https://wa.me/919822278791?text=${encodeURIComponent('Hello Teztecch! I am looking for graphic designing & branding services.')}`}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2.5 bg-[#008375] hover:bg-[#006D62] text-white rounded-full shadow-xl border border-teal-400/40 font-bold text-xs flex items-center gap-2 transition-all group"
          id="floating-whatsapp-btn"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
          </span>
          <MessageSquare className="w-4 h-4 text-white" />
          <span className="hidden sm:inline font-semibold">WhatsApp Direct</span>
        </motion.a>
      </div>

      {/* Interactive Project Estimator Modal */}
      <ProjectPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
      />

    </div>
  );
}

