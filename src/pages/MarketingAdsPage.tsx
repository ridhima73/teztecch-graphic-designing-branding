import React, { useState } from 'react';
import { 
  Megaphone, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Layers, 
  Monitor, 
  Printer, 
  Maximize2, 
  HelpCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { SERVICES } from '../data/servicesData';
import { CTASection } from '../components/CTASection';

interface MarketingAdsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanner: () => void;
}

export const MarketingAdsPage: React.FC<MarketingAdsPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const service = SERVICES['marketing-ads'];
  const [selectedFormat, setSelectedFormat] = useState<'hoarding' | 'brochure' | 'flyer' | 'digital'>('hoarding');

  const formatPreviews = {
    hoarding: {
      title: 'Large-Format Highway Hoardings & Billboards (40x20 ft)',
      desc: 'High-contrast typography readable at 80 km/h with impactful single-message focus and clear contact CTAs.',
      specs: 'Scale vector reproduction • Weatherproof CMYK profile • 300+ DPI equivalent rendering',
    },
    brochure: {
      title: 'Corporate Tri-Fold & Multi-Page Product Catalogs',
      desc: 'Architectural grid alignment, elegant white space, and clear section breaks for tenders, real estate, and product lines.',
      specs: 'FOGRA39 / SWOP calibrated • 3mm bleed margins • Spot UV and foil stamping masks',
    },
    flyer: {
      title: 'High-Impact Promotional Flyers & Event Posters',
      desc: 'Single and double-sided handouts designed for immediate event footfall, retail promotions, and direct mailers.',
      specs: 'A4 / A5 / DL standard sizes • Print-ready PDF/X-1a files • Instant commercial print compatible',
    },
    digital: {
      title: 'Google Display Network & Programmatic Web Ad Banners',
      desc: 'Pixel-perfect responsive banner suites formatted in all IAB standard sizes (Leaderboard, MPU, Skyscraper).',
      specs: '100% SVG / HTML5 / WebP • Sub-150KB fast load • Dynamic CTA hover states',
    },
  };

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#004D44] via-[#005B51] to-[#00433B] text-white py-16 lg:py-24 relative overflow-hidden border-b border-[#006055]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#008375]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#02B8A6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEFCE8] border border-[#FACC15] text-[#004D44] text-xs font-black uppercase tracking-wider shadow-sm"
            >
              <Megaphone className="w-4 h-4 text-[#CA8A04]" />
              Omnichannel Conversion
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
            >
              Marketing & <span className="text-[#FACC15]">Advertising</span> Designs
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-teal-100 font-bold"
            >
              &ldquo;From online ads to offline marketing materials, we design creatives that convert.&rdquo;
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-teal-100/90 leading-relaxed font-normal"
            >
              Whether you need 40-foot outdoor highway hoardings across Maharashtra or high-converting digital ad campaigns, our designs command attention and drive measurable customer actions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-4 flex flex-wrap justify-center gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                id="marketing-planner-btn"
                onClick={onOpenPlanner}
                className="px-7 py-4 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <span>Plan Your Marketing Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onNavigate('contact')}
                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-teal-200/30 transition-all backdrop-blur-sm"
              >
                Talk to Nagpur Print & Ad Team
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Key Design Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#004D44] tracking-tight">
              Our Design Solutions
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              End-to-end print prepress precision and high-ROI digital formats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Posters & Flyers */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                Posters & Flyers
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Eye-catching single and double-sided promotional flyers, event posters, and counter handouts with clear call-to-actions.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ A4, A5, DL Standard Sizes</li>
                <li className="flex items-center gap-1.5">✓ Ultra-Crisp Typography</li>
                <li className="flex items-center gap-1.5">✓ Direct Footfall Focus</li>
              </ul>
            </motion.div>

            {/* 2. Brochures & Catalogs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                Brochures & Catalogs
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Bi-fold, tri-fold, gatefold brochures and multi-page product catalogs designed to showcase complex product inventories elegantly.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ 4 to 64+ Page Layouts</li>
                <li className="flex items-center gap-1.5">✓ Real Estate & Industrial Specs</li>
                <li className="flex items-center gap-1.5">✓ Structured Grid Hierarchy</li>
              </ul>
            </motion.div>

            {/* 3. Hoardings & Banners */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Maximize2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                Hoardings & Banners
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Large-format outdoor billboards, highway unipoles, exhibition backdrops, roll-up standees, and bus shelter advertising.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ Massive 40x20+ Ft Scalability</li>
                <li className="flex items-center gap-1.5">✓ Instant Highway Readability</li>
                <li className="flex items-center gap-1.5">✓ Prepress Color Match</li>
              </ul>
            </motion.div>

            {/* 4. Digital Ad Creatives */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                Digital Ad Creatives
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Google Display Network (GDN) banner packs, retargeting display ads, and website slider banners calibrated for high conversions.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ Standard IAB Sizes</li>
                <li className="flex items-center gap-1.5">✓ Lightweight File Specs</li>
                <li className="flex items-center gap-1.5">✓ Conversion Optimized CTAs</li>
              </ul>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Interactive Media Format Switcher */}
      <section className="py-16 bg-gradient-to-b from-[#00433B] to-[#003831] text-white border-t border-[#005B51]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#FACC15]">
              Interactive Format Explorer
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Preview Media Specifications & Scaling
            </h3>
          </div>

          <div className="bg-[#004D44]/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-teal-700/50 shadow-xl space-y-6">
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'hoarding', label: 'Outdoor Hoarding' },
                { id: 'brochure', label: 'Product Brochure' },
                { id: 'flyer', label: 'Promo Flyer' },
                { id: 'digital', label: 'Digital Ad Banner' },
              ].map((fmt) => (
                <button
                  key={fmt.id}
                  onClick={() => setSelectedFormat(fmt.id as any)}
                  className={`p-3 rounded-xl text-xs font-bold transition-all ${
                    selectedFormat === fmt.id
                      ? 'bg-[#FACC15] text-[#004D44] shadow-sm font-black'
                      : 'bg-white/10 text-teal-100 hover:bg-white/20'
                  }`}
                >
                  {fmt.label}
                </button>
              ))}
            </div>

            <div className="p-6 bg-[#003831] rounded-2xl border border-teal-700/50 space-y-3">
              <h4 className="text-base font-bold text-[#FACC15]">
                {formatPreviews[selectedFormat].title}
              </h4>
              <p className="text-xs text-teal-100 leading-relaxed">
                {formatPreviews[selectedFormat].desc}
              </p>
              <div className="pt-3 border-t border-teal-700/50 flex items-center gap-2 text-xs text-teal-200">
                <Printer className="w-4 h-4 text-[#FACC15]" />
                <span><strong>Prepress Standard:</strong> {formatPreviews[selectedFormat].specs}</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-teal-200">
              <span>All vector formats generated in 100% CMYK / RGB with full bleed marks.</span>
              <button onClick={onOpenPlanner} className="text-[#FACC15] font-bold hover:underline">
                Get Quote →
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-black text-[#004D44] text-center mb-8">
            Marketing & Advertising Design FAQs
          </h3>
          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F0FDFB] border border-teal-100">
                <h4 className="text-sm font-bold text-[#004D44] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#008375]" />
                  {faq.q}
                </h4>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} onOpenPlanner={onOpenPlanner} />
    </div>
  );
};

