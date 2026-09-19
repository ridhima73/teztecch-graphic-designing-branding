import React, { useState } from 'react';
import { 
  Crown, 
  Sparkles, 
  ArrowRight, 
  Palette, 
  ShieldCheck, 
  Download, 
  HelpCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { SERVICES } from '../data/servicesData';
import { CTASection } from '../components/CTASection';

interface LogoBrandingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanner: () => void;
}

export const LogoBrandingPage: React.FC<LogoBrandingPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const service = SERVICES['logo-branding'];
  const [selectedPalette, setSelectedPalette] = useState<number>(0);

  const samplePalettes = [
    {
      name: 'Teztecch Signature (Teal & Amber Gold)',
      colors: ['#00A896', '#008375', '#F59E0B', '#004D44', '#FFFFFF'],
      vibes: 'Modern, dynamic, technology-driven & authoritative',
    },
    {
      name: 'Executive Minimalist (Deep Pine & Emerald)',
      colors: ['#003831', '#10B981', '#004D44', '#94A3B8', '#F8FAFC'],
      vibes: 'Sophisticated corporate, consulting & FinTech',
    },
    {
      name: 'Artisanal Luxury (Charcoal & Warm Gold)',
      colors: ['#18181B', '#D97706', '#78716C', '#E7E5E4', '#FAF5FF'],
      vibes: 'Premium retail, hospitality, gourmet & lifestyle',
    },
  ];

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
              <Crown className="w-4 h-4 text-[#CA8A04]" />
              Core Identity Pillar
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
            >
              Logo & <span className="text-[#FACC15]">Brand Identity</span> Design
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-teal-100 font-bold"
            >
              &ldquo;Your brand starts with a strong identity.&rdquo;
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-teal-100/90 leading-relaxed font-normal"
            >
              We design logos and brand elements that reflect your vision and create lasting impressions across digital platforms, physical packaging, and corporate collateral.
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
                id="logo-page-planner-btn"
                onClick={onOpenPlanner}
                className="px-7 py-4 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <span>Plan Your Logo & Identity Kit</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onNavigate('contact')}
                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-teal-200/30 transition-all backdrop-blur-sm"
              >
                Schedule Brand Discovery Call
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Deliver Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
              Complete Deliverable System
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#004D44] tracking-tight">
              What We Deliver
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Everything your brand requires to maintain absolute visual consistency from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Unique Logo Concepts */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                Unique Logo Concepts
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                4-6 distinct vector concepts covering wordmarks, emblems, abstract symbols, and minimalist modern marks crafted from scratch.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ 100% Original Vector Art</li>
                <li className="flex items-center gap-1.5">✓ No Stock Clip-art</li>
                <li className="flex items-center gap-1.5">✓ Trademark Safe</li>
              </ul>
            </motion.div>

            {/* 2. Brand Color Palette & Typography */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                Brand Color Palette & Typography
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Curated primary, secondary, and accent color codes (HEX, RGB, CMYK, Pantone) with primary display and body font pairings.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ Contrast Tested (WCAG AA)</li>
                <li className="flex items-center gap-1.5">✓ Web & Print Font Hierarchy</li>
                <li className="flex items-center gap-1.5">✓ Psychological Color Align</li>
              </ul>
            </motion.div>

            {/* 3. Brand Guidelines */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                Brand Guidelines
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Comprehensive Brand Bible detailing clear-space margins, minimum size specs, color variations, background rules, and incorrect usage.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ Official PDF Style Guide</li>
                <li className="flex items-center gap-1.5">✓ Dos & Don’ts Showcase</li>
                <li className="flex items-center gap-1.5">✓ Sub-brand Scaling Rules</li>
              </ul>
            </motion.div>

            {/* 4. Complete Identity Kits */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                Complete Identity Kits
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Fully organized cloud folder containing scalable vector files, transparent PNGs, high-res JPEGs, SVG code, and favicon sets.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ Formats: AI, EPS, SVG, PDF</li>
                <li className="flex items-center gap-1.5">✓ App Icon & Favicon Suite</li>
                <li className="flex items-center gap-1.5">✓ Social Avatar Exports</li>
              </ul>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Interactive Color Palette & Typography Studio */}
      <section className="py-16 bg-gradient-to-b from-[#00433B] to-[#003831] text-white border-t border-[#005B51]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#FACC15]">
              Interactive Design Playground
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Color Harmony & Brand Psychology Explorer
            </h3>
            <p className="text-xs text-teal-200">
              Preview how our color strategy pairs primary, accent, and neutral tones for modern brands.
            </p>
          </div>

          <div className="bg-[#004D44]/90 backdrop-blur-md p-8 rounded-3xl border border-teal-700/50 shadow-xl space-y-8">
            {/* Palette Switcher */}
            <div className="flex flex-wrap gap-2 justify-center">
              {samplePalettes.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPalette(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedPalette === idx
                      ? 'bg-[#FACC15] text-[#004D44] shadow-sm font-black'
                      : 'bg-white/10 text-teal-100 hover:bg-white/20'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Visual Color Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {samplePalettes[selectedPalette].colors.map((color, cIdx) => (
                <div key={cIdx} className="rounded-2xl p-4 flex flex-col justify-between h-28 text-white shadow-sm border border-white/20" style={{ backgroundColor: color }}>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-black/60 w-fit">
                    {['Primary 01', 'Primary 02', 'Accent Warm', 'Dark Canvas', 'Light / Surface'][cIdx]}
                  </span>
                  <span className="text-xs font-black font-mono tracking-wider drop-shadow">
                    {color}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#003831] rounded-2xl flex flex-wrap items-center justify-between gap-2 text-xs text-teal-100 border border-teal-800">
              <span><strong>Brand Emotion:</strong> {samplePalettes[selectedPalette].vibes}</span>
              <button onClick={onOpenPlanner} className="text-[#FACC15] font-bold hover:underline flex items-center gap-1">
                Customize Yours →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4-Step Process & FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div>
            <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
                Methodical Execution
              </span>
              <h2 className="text-3xl font-black text-[#004D44]">
                Our Logo Design Workflow
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {service.process.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-white border border-teal-100 hover:border-[#00A896] hover:shadow-md transition-all"
                >
                  <span className="text-2xl font-black text-[#008375] font-mono">{step.step}</span>
                  <h3 className="text-sm font-bold text-[#004D44] mt-2 mb-1">{step.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="border-t border-teal-100 pt-16">
            <h3 className="text-2xl font-black text-[#004D44] text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F0FDFB] border border-teal-100 space-y-2">
                  <h4 className="text-xs font-bold text-[#004D44] flex items-start gap-1.5">
                    <HelpCircle className="w-4 h-4 text-[#008375] flex-shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed pl-5.5">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTASection onNavigate={onNavigate} onOpenPlanner={onOpenPlanner} />
    </div>
  );
};

