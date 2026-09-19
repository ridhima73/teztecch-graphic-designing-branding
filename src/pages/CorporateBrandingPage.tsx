import React, { useState } from 'react';
import { 
  Briefcase, 
  Sparkles, 
  ArrowRight, 
  CreditCard, 
  FileText, 
  BookOpen, 
  Presentation, 
  ShieldCheck, 
  HelpCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { SERVICES } from '../data/servicesData';
import { CTASection } from '../components/CTASection';

interface CorporateBrandingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanner: () => void;
}

export const CorporateBrandingPage: React.FC<CorporateBrandingPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const service = SERVICES['corporate-branding'];
  const [activeTab, setActiveTab] = useState<'cards' | 'letterheads' | 'profiles' | 'decks'>('cards');

  const stationeryShowcase = {
    cards: {
      title: 'Executive Business Cards (Standard & NFC-Smart)',
      desc: 'Bespoke cotton card stock, velvet touch soft lamination, selective spot UV, and laser cut geometric edges.',
      features: ['350-600 GSM Cotton & Linen Cards', 'Spot UV & Metallic Hot Foil Layer Masks', 'NFC Embedded Digital vCard Options'],
    },
    letterheads: {
      title: 'Official Corporate Letterheads & Continuation Sheets',
      desc: 'Balanced margins and elegant brand header/footer systems tailored for executive memos, agreements, and formal tenders.',
      features: ['Print-Ready CMYK 120 GSM Stock Files', 'Editable Microsoft Word (.docx) Master', 'Editable Google Docs Corporate Template'],
    },
    profiles: {
      title: 'High-Impact Company Profiles & Annual Reports',
      desc: 'Multi-page corporate brochures that present your company history, leadership, case studies, and financial highlights with authority.',
      features: ['12 to 32+ Page Structural Layouts', 'Financial Infographics & Milestone Timelines', 'Digital Interactive PDF with Clickable Links'],
    },
    decks: {
      title: 'Investor Pitch Decks & Keynote Presentation Master Templates',
      desc: 'High-stakes pitch decks crafted to command room attention during venture capital fundraising and board meetings.',
      features: ['25+ Fully Customizable Slide Layouts', 'PowerPoint (.pptx) & Keynote Formats', 'Data Chart Styling & Vector Icon Library'],
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
              <Briefcase className="w-4 h-4 text-[#CA8A04]" />
              Executive B2B Distinction
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
            >
              Corporate <span className="text-[#FACC15]">Branding</span> & Collateral
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-teal-100 font-bold"
            >
              &ldquo;Maintain consistency across all brand touchpoints.&rdquo;
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-teal-100/90 leading-relaxed font-normal"
            >
              We design executive corporate stationery, company capability profiles, and investor pitch decks that build instant trust, authority, and professionalism.
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
                id="corporate-planner-btn"
                onClick={onOpenPlanner}
                className="px-7 py-4 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <span>Order Corporate Stationery Suite</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onNavigate('contact')}
                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-teal-200/30 transition-all backdrop-blur-sm"
              >
                Request Corporate Proposal
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Includes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
              Executive Assets
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#004D44] tracking-tight">
              What Corporate Branding Includes
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Complete stationery systems delivered in both commercial print-ready PDFs and editable digital templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Business Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                1. Business Cards
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Premium dual-sided executive cards with specialized spot UV masks, embossing plates, and modern vertical or horizontal typography layouts.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ Standard & Square Card Sizes</li>
                <li className="flex items-center gap-1.5">✓ Spot UV & Foil Ready Vectors</li>
                <li className="flex items-center gap-1.5">✓ QR Code & Digital vCard Link</li>
              </ul>
            </motion.div>

            {/* 2. Letterheads */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                2. Letterheads
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Official company letterheads and invoice header templates designed for legal contracts, tender submissions, and formal correspondence.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ A4 & US Letter Dimensions</li>
                <li className="flex items-center gap-1.5">✓ Editable MS Word Template</li>
                <li className="flex items-center gap-1.5">✓ Official Email Signature PNG</li>
              </ul>
            </motion.div>

            {/* 3. Company Profiles */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                3. Company Profiles
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Comprehensive B2B company capability brochures, corporate portfolios, and annual reports designed to win high-value contracts.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ Corporate Infographics</li>
                <li className="flex items-center gap-1.5">✓ Executive Leadership Bios</li>
                <li className="flex items-center gap-1.5">✓ High-Res Print & Web PDF</li>
              </ul>
            </motion.div>

            {/* 4. Presentation Designs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Presentation className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                4. Presentation Designs
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Custom-branded PowerPoint & Keynote master slide decks, investor pitches, series funding presentations, and quarterly review decks.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ 25+ Reusable Master Slides</li>
                <li className="flex items-center gap-1.5">✓ 16:9 Widescreen Layout</li>
                <li className="flex items-center gap-1.5">✓ Editable Charts & Icons</li>
              </ul>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Interactive Stationery Suite Visualizer */}
      <section className="py-16 bg-gradient-to-b from-[#00433B] to-[#003831] text-white border-t border-[#005B51]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#FACC15]">
              Interactive Suite Inspector
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Explore Stationery Specifications
            </h3>
          </div>

          <div className="bg-[#004D44]/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-teal-700/50 shadow-xl space-y-6">
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'cards', label: 'Business Cards' },
                { id: 'letterheads', label: 'Letterheads & Invoices' },
                { id: 'profiles', label: 'Company Profile' },
                { id: 'decks', label: 'Pitch Deck Slides' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`p-3 rounded-xl text-xs font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#FACC15] text-[#004D44] shadow-sm font-black'
                      : 'bg-white/10 text-teal-100 hover:bg-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6 bg-[#003831] rounded-2xl border border-teal-700/50 space-y-4">
              <h4 className="text-base font-bold text-[#FACC15]">
                {stationeryShowcase[activeTab].title}
              </h4>
              <p className="text-xs text-teal-100 leading-relaxed">
                {stationeryShowcase[activeTab].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {stationeryShowcase[activeTab].features.map((feat, idx) => (
                  <div key={idx} className="p-3 bg-white/10 rounded-xl text-xs text-teal-100 flex items-center gap-2 border border-teal-700/50">
                    <Sparkles className="w-4 h-4 text-[#FACC15] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-teal-200">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FACC15]" />
                Includes editable Word & PPT templates + Commercial Print PDFs
              </span>
              <button onClick={onOpenPlanner} className="text-[#FACC15] font-bold hover:underline">
                Calculate Package →
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-black text-[#004D44] text-center mb-8">
            Corporate Branding FAQs
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

