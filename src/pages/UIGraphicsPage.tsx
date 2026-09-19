import React, { useState } from 'react';
import { 
  Layout, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Monitor, 
  Smartphone, 
  Layers, 
  Shapes, 
  Compass, 
  HelpCircle,
  Eye,
  Zap,
  Target
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES } from '../data/servicesData';
import { CTASection } from '../components/CTASection';

interface UIGraphicsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanner: () => void;
}

export const UIGraphicsPage: React.FC<UIGraphicsPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const service = SERVICES['ui-graphics'];
  const [activeAssetType, setActiveAssetType] = useState<'banners' | 'app' | 'icons' | 'elements'>('banners');

  const assetDetails = {
    banners: {
      title: 'High-Conversion Website Hero Banners & Sliders',
      desc: 'Engineered for instant visual impact above the digital fold, optimized for ultra-fast LCP web performance.',
      features: ['Responsive 1920px, 1440px & 768px viewports', 'Lossless WebP & SVG format exports', 'A/B tested headline & CTA button contrast'],
    },
    app: {
      title: 'Mobile App Graphics & Onboarding Illustrations',
      desc: 'Engaging onboarding screen sequences, empty state illustrations, and gamified achievement badges.',
      features: ['iOS @2x/@3x and Android xxxhdpi exports', 'Light & Dark theme adapted graphics', 'Figma auto-layout compatible components'],
    },
    icons: {
      title: 'Custom Vector Icon Sets & Micro-Illustrations',
      desc: 'Uniform stroke weight, optical corner radiuses, and grid consistency across your complete software product.',
      features: ['Pixel-snapped 24px & 48px grid alignments', 'Pure SVG code for inline web rendering', 'Stroke and Filled state variations'],
    },
    elements: {
      title: 'UI Visual Elements & Infographic Data Cards',
      desc: 'Custom UI chart cards, visual comparison tables, and decorative vector background patterns.',
      features: ['SaaS dashboard card graphics', 'Product feature visual cards', 'Transparent PNG & vector SVG suites'],
    },
  };

  const strategyPillars = [
    {
      title: 'Understanding Brand Positioning',
      desc: 'Analyzing your market tier, competitive differentiators, and audience expectations to craft authentic visual cues.',
      icon: Target,
    },
    {
      title: 'Audience-Focused Design',
      desc: 'Designing graphics that reflect the cognitive patterns, reading habits, and visual preferences of your exact demographics.',
      icon: Eye,
    },
    {
      title: 'Consistent Visual Storytelling',
      desc: 'Ensuring your website banners, app onboarding screens, and social graphics speak one continuous, recognizable design language.',
      icon: Compass,
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="bg-[#111111] text-white py-16 lg:py-24 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEFCE8] border border-[#FACC15] text-black text-xs font-black uppercase tracking-wider">
              <Layout className="w-4 h-4 text-[#CA8A04]" />
              Digital Experience & Strategy
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              UI Graphics & <span className="text-[#FACC15]">Visual Strategy</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white font-bold">
              &ldquo;Enhance your digital presence with high-quality graphics.&rdquo;
            </p>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              We design bespoke website banners, app graphics, custom icon systems, and visual storytelling assets tailored for SaaS, mobile apps, and modern web platforms.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                id="ui-planner-btn"
                onClick={onOpenPlanner}
                className="px-7 py-4 bg-[#FACC15] hover:bg-[#EAB308] text-black font-black text-sm rounded-xl transition-all shadow-sm flex items-center gap-2 active:scale-95"
              >
                <span>Plan Your UI Graphics Suite</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-sm rounded-xl border border-neutral-700 transition-all"
              >
                Get Digital Asset Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* We Design Section (From Prompt) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#CA8A04]">
              Digital Visual Assets
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              What We Design
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              High-resolution vector assets and illustrations tailored for fast digital product performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Website Banners */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:border-black shadow-sm transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                1. Website Banners
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Hero section graphics, landing page product composites, promotional offer banners, and dynamic carousel sliders.
              </p>
              <ul className="text-xs text-neutral-700 space-y-1.5 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-1.5">✓ Retina 4K Ultra-Sharp</li>
                <li className="flex items-center gap-1.5">✓ Lightweight WebP Compression</li>
                <li className="flex items-center gap-1.5">✓ Conversion-Focused CTAs</li>
              </ul>
            </div>

            {/* 2. App Graphics */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:border-black shadow-sm transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                2. App Graphics
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Mobile onboarding walkthrough illustrations, empty state states, in-app celebration screens, and feature popups.
              </p>
              <ul className="text-xs text-neutral-700 space-y-1.5 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-1.5">✓ iOS & Android Specs</li>
                <li className="flex items-center gap-1.5">✓ Clean Vector Shapes</li>
                <li className="flex items-center gap-1.5">✓ Light/Dark Theme Ready</li>
              </ul>
            </div>

            {/* 3. Icons & Illustrations */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:border-black shadow-sm transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Shapes className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                3. Icons & Illustrations
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Custom iconography systems (line, duotone, filled) and unique editorial illustrations representing complex technical concepts.
              </p>
              <ul className="text-xs text-neutral-700 space-y-1.5 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-1.5">✓ 24px/48px Consistent Grid</li>
                <li className="flex items-center gap-1.5">✓ Pure Inline SVG Export</li>
                <li className="flex items-center gap-1.5">✓ Figma Component Libraries</li>
              </ul>
            </div>

            {/* 4. Visual Elements */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 hover:border-black shadow-sm transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                4. Visual Elements
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Custom infographic badges, metrics counters, comparison tables, and decorative vector backgrounds for websites.
              </p>
              <ul className="text-xs text-neutral-700 space-y-1.5 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-1.5">✓ Responsive Asset Scaling</li>
                <li className="flex items-center gap-1.5">✓ Brand Theme Color Alignment</li>
                <li className="flex items-center gap-1.5">✓ Developer-Ready Code Snippets</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Creative Content & Visual Strategy (From Prompt) */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#CA8A04]">
              Strategic Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Creative Content & Visual Strategy
            </h2>
            <p className="text-base text-neutral-800 font-semibold">
              &ldquo;We don’t just design — we strategize your visual communication for better engagement and brand recall.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategyPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm hover:border-black transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FACC15] flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Interactive Asset Explorer */}
      <section className="py-16 bg-[#111111] text-white border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#FACC15]">
              Digital Asset Inspection
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Explore Asset Formats & Optimization
            </h3>
          </div>

          <div className="bg-[#18181B] p-6 sm:p-8 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'banners', label: 'Website Banners' },
                { id: 'app', label: 'App Onboarding' },
                { id: 'icons', label: 'Vector Icons' },
                { id: 'elements', label: 'Visual Cards' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveAssetType(tab.id as any)}
                  className={`p-3 rounded-xl text-xs font-bold transition-all ${
                    activeAssetType === tab.id
                      ? 'bg-[#FACC15] text-black shadow-sm'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-4">
              <h4 className="text-base font-bold text-[#FACC15]">
                {assetDetails[activeAssetType].title}
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {assetDetails[activeAssetType].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {assetDetails[activeAssetType].features.map((feat, idx) => (
                  <div key={idx} className="p-3 bg-white/5 rounded-xl text-xs text-neutral-200 flex items-center gap-2 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#FACC15] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-neutral-400">
              <span>All assets delivered optimized for Figma, Web, iOS, and Android.</span>
              <button onClick={onOpenPlanner} className="text-[#FACC15] font-bold hover:underline">
                Get Asset Quote →
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-black text-neutral-900 text-center mb-8">
            UI Graphics & Visual Strategy FAQs
          </h3>
          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-black" />
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
