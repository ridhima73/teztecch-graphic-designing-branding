import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Crown, 
  Share2, 
  Megaphone, 
  Package, 
  Briefcase, 
  Layout, 
  Palette, 
  ShieldCheck, 
  Zap, 
  TrendingUp,
  Star,
  ChevronRight,
  MessageSquare,
  PenTool,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/servicesData';
import { PORTFOLIO_PROJECTS, TESTIMONIALS } from '../data/portfolioData';
import { CTASection } from '../components/CTASection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanner: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenPlanner }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'branding' | 'digital' | 'print'>('all');

  const expertiseCards = [
    {
      id: 'logo-branding' as PageId,
      title: 'Logo & Brand Identity Design',
      desc: 'Unique logo concepts, brand color palette, typography & complete identity guidelines that reflect your vision.',
      icon: Crown,
      badge: 'Brand Core',
      color: '#008375',
    },
    {
      id: 'social-media' as PageId,
      title: 'Social Media Creatives',
      desc: 'Instagram & Facebook posts, stories, banners, high-ROI ad creatives & festival promotional graphics.',
      icon: Share2,
      badge: 'High Engagement',
      color: '#00A896',
    },
    {
      id: 'marketing-ads' as PageId,
      title: 'Marketing & Advertising Designs',
      desc: 'Posters, flyers, brochures, hoardings, highway banners & digital ad campaigns engineered to convert.',
      icon: Megaphone,
      badge: 'High ROI',
      color: '#02B8A6',
    },
    {
      id: 'packaging' as PageId,
      title: 'Packaging Design',
      desc: 'Creative and functional product packaging, die-line master templates & label designs that dominate retail shelves.',
      icon: Package,
      badge: 'Shelf Impact',
      color: '#008375',
    },
    {
      id: 'corporate-branding' as PageId,
      title: 'Corporate Branding',
      desc: 'Maintain consistency across all touchpoints with business cards, letterheads, company profiles & pitch decks.',
      icon: Briefcase,
      badge: 'Executive B2B',
      color: '#00A896',
    },
    {
      id: 'ui-graphics' as PageId,
      title: 'UI Graphics & Visual Assets',
      desc: 'Website banners, mobile app graphics, custom icon systems & responsive vector visual elements.',
      icon: Layout,
      badge: 'Digital UX',
      color: '#02B8A6',
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. HERO SECTION WITH TEAL GRADIENT & FLUID ANIMATIONS */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#004D44] via-[#005B51] to-[#00433B] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-[#006055]">
        
        {/* Organic curved background shapes matching reference */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#008375]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] bg-[#02B8A6]/20 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle SVG Background Vector Curve */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1440 800" fill="none">
          <path d="M-100,200 C300,50 600,450 1100,250 C1300,180 1500,400 1600,300" stroke="#FACC15" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="300" cy="50" r="6" fill="#FACC15" />
          <circle cx="600" cy="450" r="6" fill="#02B8A6" />
          <circle cx="1100" cy="250" r="6" fill="#FACC15" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEFCE8] border border-[#FACC15] text-[#004D44] text-xs font-black uppercase tracking-wider shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#CA8A04]" />
                <span>Teztecch Graphic Designing & Branding</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight sm:leading-[1.1]"
              >
                Designs That <span className="text-[#FACC15]">Speak</span>. <br />
                Brands That <span className="text-white border-b-4 border-[#FACC15]">Stand Out</span>.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-base sm:text-lg text-teal-100 font-normal leading-relaxed max-w-2xl"
              >
                {COMPANY_INFO.heroDescription}
              </motion.p>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="text-xs sm:text-sm text-teal-200/90 leading-relaxed max-w-2xl"
              >
                {COMPANY_INFO.secondaryDescription}
              </motion.p>

              {/* Call to Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3"
              >
                <motion.button
                  id="hero-explore-services-btn"
                  onClick={() => onNavigate('services')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-xs rounded-xl transition-all shadow-lg flex items-center gap-2 active:scale-95"
                >
                  <span>Explore Our Expertise</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  id="hero-open-planner-btn"
                  onClick={onOpenPlanner}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-teal-300/30 font-bold text-xs rounded-xl transition-all flex items-center gap-2 backdrop-blur-sm shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-[#FACC15]" />
                  <span>Instant Project Estimator</span>
                </motion.button>

                <motion.a
                  href={`https://wa.me/919822278791?text=${encodeURIComponent('Hello Teztecch! I saw your portfolio and want to discuss graphic design services.')}`}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3.5 bg-[#008375] hover:bg-[#007064] text-white font-bold text-xs rounded-xl border border-teal-400/30 transition-all flex items-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Chat Direct</span>
                </motion.a>
              </motion.div>

              {/* Trust Indicators / Stats */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="pt-6 border-t border-[#006E62] grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {COMPANY_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="text-left">
                    <div className="text-2xl font-black text-white flex items-baseline gap-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-teal-200 font-medium mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

            </motion.div>

            {/* Right Interactive Visual Card (5 cols) with Floating Elements */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              
              {/* Floating Decorative Pen Tool Badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-4 z-20 bg-white text-[#004D44] p-3 rounded-2xl shadow-xl border border-teal-100 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-xl bg-[#E6FAF7] flex items-center justify-center text-[#008375]">
                  <PenTool className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-black text-[#008375] uppercase">Vector Precision</div>
                  <div className="text-xs font-bold text-neutral-900">Pixel-Perfect Curves</div>
                </div>
              </motion.div>

              <div className="bg-gradient-to-b from-[#00554B] to-[#003D36] rounded-3xl p-6 sm:p-8 border border-teal-400/30 shadow-2xl relative overflow-hidden backdrop-blur-md">
                
                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-[#FACC15] text-[#004D44] px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1 border border-teal-900">
                  <Sparkles className="w-3.5 h-3.5 text-[#004D44]" />
                  Nagpur HQ
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-[#006E62] pb-4">
                    <div>
                      <span className="text-[10px] font-bold text-[#FACC15] uppercase tracking-wider">
                        Live Brand Showcase
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        Full-Stack Graphic Craftsmanship
                      </h4>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-lg bg-[#00423A] text-teal-200 font-mono border border-teal-500/20">
                      2026 Edition
                    </span>
                  </div>

                  {/* Visual preview grid cards with hover animations */}
                  <div className="space-y-2.5">
                    <motion.div 
                      whileHover={{ x: 4 }}
                      className="p-3.5 rounded-2xl bg-[#00483E]/80 border border-teal-500/20 flex items-center gap-3.5 hover:border-teal-300/40 transition-colors shadow-inner"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white text-[#004D44] flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
                        <Crown className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-white flex items-center justify-between">
                          <span>Brand Identity & Vector Kits</span>
                          <span className="text-[10px] text-[#FACC15] font-bold">100% Vector</span>
                        </div>
                        <p className="text-[11px] text-teal-200 truncate">
                          Logos, guidelines, color harmony & brand bibles
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ x: 4 }}
                      className="p-3.5 rounded-2xl bg-[#00483E]/80 border border-teal-500/20 flex items-center gap-3.5 hover:border-teal-300/40 transition-colors shadow-inner"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#FACC15] text-[#004D44] flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-white flex items-center justify-between">
                          <span>Social & High-ROI Ad Creatives</span>
                          <span className="text-[10px] text-[#FACC15] font-bold">+3.4x CTR</span>
                        </div>
                        <p className="text-[11px] text-teal-200 truncate">
                          Carousels, story sequences, reels covers & banners
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ x: 4 }}
                      className="p-3.5 rounded-2xl bg-[#00483E]/80 border border-teal-500/20 flex items-center gap-3.5 hover:border-teal-300/40 transition-colors shadow-inner"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white text-[#004D44] flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
                        <Package className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-white flex items-center justify-between">
                          <span>Packaging & 3D Label Renders</span>
                          <span className="text-[10px] text-[#FACC15] font-bold">Shelf Impact</span>
                        </div>
                        <p className="text-[11px] text-teal-200 truncate">
                          Rigid boxes, bottles, pouch die-lines & packaging
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Impact quote card */}
                  <div className="bg-[#00433A] border border-teal-500/30 p-4 rounded-2xl">
                    <p className="text-xs text-teal-100 italic leading-relaxed">
                      &ldquo;{COMPANY_INFO.impactStatement}&rdquo;
                    </p>
                    <div className="mt-2 text-[11px] font-bold text-[#FACC15] flex items-center justify-between">
                      <span>— Teztecch Creative Directive</span>
                      <button 
                        onClick={() => onNavigate('about')}
                        className="underline hover:text-white"
                      >
                        Read Vision →
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. OUR EXPERTISE SECTION */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-3 mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6FAF7] text-[#008375] text-xs font-black uppercase tracking-wider border border-teal-200">
              <Sparkles className="w-3.5 h-3.5 text-[#00A896]" />
              What We Do Best
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#004D44] tracking-tight">
              Our <span className="underline decoration-[#00A896] decoration-4">Expertise</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              From logos to full-scale branding, from social media creatives to marketing materials — we design everything your brand needs to shine in the digital and offline world.
            </p>
          </motion.div>

          {/* 6 Expertise Cards Grid with Spring Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  id={`expertise-card-${item.id}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-3xl p-8 border border-neutral-200 hover:border-[#00A896] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#E6FAF7] text-[#008375] flex items-center justify-center group-hover:bg-[#008375] group-hover:text-[#FACC15] transition-colors shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-[#E6FAF7] text-[#008375] uppercase tracking-wider group-hover:bg-[#FEFCE8] group-hover:text-[#004D44] group-hover:border group-hover:border-[#FACC15] transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#008375] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(item.id)}
                      className="text-xs font-bold text-[#008375] hover:text-[#004D44] flex items-center gap-1 group/btn underline decoration-[#00A896] decoration-2"
                    >
                      <span>Explore Deliverables</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                    <span className="text-[10px] text-neutral-400 font-semibold">Turnaround 3-5d</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Central Callout Banner with Teal Gradient */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-14 p-8 bg-gradient-to-r from-[#E6FAF7] via-[#F0FDFB] to-[#E6FAF7] border border-teal-200 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm"
          >
            <div className="space-y-1">
              <h4 className="text-xl font-black text-[#004D44]">
                We don’t just design — we create impact.
              </h4>
              <p className="text-xs sm:text-sm text-teal-800/80">
                Let’s bring your brand vision to life with tailored visual storytelling.
              </p>
            </div>
            <div className="flex gap-3">
              <motion.button
                onClick={onOpenPlanner}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#008375] hover:bg-[#006D62] text-white font-black text-xs rounded-xl transition-all shadow-md"
              >
                Plan Project Scope
              </motion.button>
              <motion.button
                onClick={() => onNavigate('portfolio')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 bg-white hover:bg-neutral-50 text-[#004D44] font-bold text-xs rounded-xl border border-teal-200 transition-all shadow-sm"
              >
                View Showcase
              </motion.button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. FEATURED PORTFOLIO HIGHLIGHTS */}
      <section className="py-20 bg-[#F0FDFB]/60 border-y border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
                Proven Agency Results
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#004D44] tracking-tight mt-1">
                Featured Creative Work
              </h2>
            </div>
            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#008375] hover:text-[#004D44] underline decoration-[#00A896] decoration-2"
            >
              <span>Explore All Case Studies (6 Verticals)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Featured Projects with Motion hover */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_PROJECTS.slice(0, 3).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden border border-teal-100 hover:border-[#00A896] hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-52 overflow-hidden bg-neutral-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#004D44] shadow-sm">
                      {project.categoryLabel}
                    </span>
                  </div>
                  {project.metrics && (
                    <div className="absolute bottom-3 right-3">
                      <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-[#FACC15] text-[#004D44] shadow-sm">
                        {project.metrics}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] text-teal-600 font-medium">{project.client} • {project.year}</span>
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#008375] transition-colors mt-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-2 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((t, i) => (
                        <span key={i} className="text-[9px] bg-[#E6FAF7] text-[#008375] px-2 py-0.5 rounded-md font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => onNavigate('portfolio')}
                      className="text-xs font-bold text-[#008375] hover:underline"
                    >
                      Case Study →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE TEZTECCH SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6FAF7] text-[#008375] text-xs font-black uppercase tracking-wider border border-teal-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A896]" />
              The Teztecch Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#004D44] tracking-tight">
              Why Choose <span className="underline decoration-[#00A896] decoration-4">Teztecch</span> for Graphic Designing?
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              We combine design thinking, behavioral psychology, and production-ready vector accuracy to give your brand an unfair advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.whyChooseUs.map((item, idx) => {
              const icons = [Palette, Sparkles, ShieldCheck, Zap, TrendingUp];
              const Icon = icons[idx % icons.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-3xl bg-white border border-neutral-200 hover:border-[#00A896] hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#E6FAF7] text-[#008375] group-hover:bg-[#008375] group-hover:text-[#FACC15] transition-colors flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#008375] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}

            {/* CTA Box inside grid with rich teal theme */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#004D44] via-[#00584D] to-[#003B34] text-white flex flex-col justify-between border border-teal-500/30 shadow-xl"
            >
              <div>
                <span className="text-[10px] font-black text-[#FACC15] uppercase tracking-wider">
                  Direct Agency Access
                </span>
                <h3 className="text-lg font-black text-white mt-2">
                  Have a custom requirement?
                </h3>
                <p className="text-xs text-teal-100/80 mt-2">
                  Talk directly with our senior visual designers in Nagpur.
                </p>
              </div>
              <div className="pt-6">
                <motion.button
                  onClick={onOpenPlanner}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full py-3 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Custom Proposal</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="py-20 bg-[#F0FDFB]/50 border-t border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
              Client Feedback
            </span>
            <h2 className="text-3xl font-black text-[#004D44]">
              Trusted by Ambitious Brands
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-teal-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#EAB308]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 italic leading-relaxed">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-teal-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900">{t.name}</h4>
                    <p className="text-[11px] text-teal-700">{t.role}, {t.company}</p>
                    <span className="text-[10px] text-[#004D44] font-bold bg-[#E6FAF7] px-1.5 py-0.5 rounded border border-teal-200">{t.service}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CONVERSION CTA SECTION */}
      <CTASection onNavigate={onNavigate} onOpenPlanner={onOpenPlanner} />
    </div>
  );
};

