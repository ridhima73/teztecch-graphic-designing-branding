import React, { useState } from 'react';
import { 
  Sparkles, 
  Target, 
  Compass, 
  Heart, 
  CheckCircle2, 
  Lightbulb, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { TEAM_MEMBERS } from '../data/portfolioData';
import { CTASection } from '../components/CTASection';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanner: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const [auditChecklist, setAuditChecklist] = useState<Record<string, boolean>>({
    logo: true,
    colors: false,
    social: false,
    packaging: false,
    guidelines: false,
  });

  const toggleAudit = (key: string) => {
    setAuditChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const auditScore = Object.values(auditChecklist).filter(Boolean).length * 20;

  const corePillars = [
    {
      title: 'Communication',
      desc: 'Designs that deliver your exact brand message in under 3 seconds without noise or ambiguity.',
      icon: MessageSquare,
      color: '#008375',
    },
    {
      title: 'Perception',
      desc: 'Elevating consumer brand psychology to command premium pricing and institutional trust.',
      icon: Lightbulb,
      color: '#00A896',
    },
    {
      title: 'Connection',
      desc: 'Forging deep emotional resonance with your target audience through authentic visual storytelling.',
      icon: Heart,
      color: '#02B8A6',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Deep Discovery & Brand Audit',
      desc: 'We analyze your market, competitors, customer demographics, and brand positioning before opening any design canvas.',
    },
    {
      step: '02',
      title: 'Creative Strategy & Moodboarding',
      desc: 'Developing typographic pairings, color psychology palettes, and geometric concepts aligned with business targets.',
    },
    {
      step: '03',
      title: 'Vector Craftsmanship & Prototyping',
      desc: 'Iterating on pixel-perfect vector mathematics, packaging dielines, and responsive social media templates.',
    },
    {
      step: '04',
      title: 'Polishing & Real-World Testing',
      desc: 'Stress testing designs across print (CMYK), outdoor scale (hoardings), mobile Retina screens, and dark modes.',
    },
    {
      step: '05',
      title: 'Production Handover & Guidelines',
      desc: 'Delivering comprehensive vector source files (AI, SVG, EPS, PDF) along with strict brand usage documentation.',
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. HERO / BANNER WITH TEAL GRADIENT */}
      <section className="bg-gradient-to-b from-[#004D44] via-[#005B51] to-[#00433B] text-white py-16 lg:py-24 relative overflow-hidden border-b border-[#006055]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#008375]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#02B8A6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEFCE8] border border-[#FACC15] text-[#004D44] text-xs font-black uppercase tracking-wider shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#CA8A04]" />
            About Teztecch
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Who We <span className="text-[#FACC15]">Are</span> & What We <span className="text-white border-b-4 border-[#FACC15]">Believe</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-teal-100 leading-relaxed font-normal"
          >
            Teztecch is a dynamic IT, branding, and advertising company delivering creative and technology-driven solutions.
          </motion.p>
        </div>
      </section>

      {/* 2. WHO WE ARE & PHILOSOPHY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
                Our Identity & Philosophy
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#004D44] tracking-tight">
                Design Is More Than Aesthetics — It’s About Connection
              </h2>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                Teztecch is a dynamic IT, branding, and advertising company delivering creative and technology-driven solutions. Our graphic designing team combines creativity with strategy to produce designs that are not only visually appealing but also business-focused.
              </p>

              <div className="p-5 bg-[#E6FAF7] border-l-4 border-[#008375] rounded-r-2xl">
                <p className="text-xs sm:text-sm font-bold text-[#004D44] italic leading-relaxed">
                  &ldquo;We believe design is more than aesthetics — it’s about communication, perception, and connection.&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Headquartered in Nagpur, Maharashtra, our multidisciplinary collective works with startups, growing enterprises, and established retail brands across India to construct distinct visual identities.
              </p>

              <div className="pt-2 flex gap-3">
                <motion.button
                  onClick={onOpenPlanner}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-6 py-3.5 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-xs rounded-xl shadow-md transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={() => onNavigate('portfolio')}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-6 py-3.5 bg-[#F0FDFB] hover:bg-[#E6FAF7] text-[#004D44] font-bold text-xs rounded-xl border border-teal-200 transition-all shadow-sm"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>

            {/* 3 Core Pillars Cards */}
            <div className="lg:col-span-6 space-y-4">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-3xl bg-white border border-teal-100 hover:border-[#00A896] hover:shadow-lg transition-all flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#E6FAF7] text-[#008375] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#004D44]">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 3. VISION & MISSION CARDS */}
      <section className="py-16 bg-[#F0FDFB]/60 border-y border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-teal-100 shadow-sm relative overflow-hidden group hover:border-[#00A896] hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center mb-6 shadow-md">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
                Our Guiding Light
              </span>
              <h3 className="text-2xl font-black text-[#004D44] mt-1 mb-4">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
                &ldquo;To become a leading creative partner for businesses by delivering innovative and impactful design solutions.&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-teal-100 text-xs text-teal-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008375]" />
                <span>Empowering 500+ Indian & Global Brands</span>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-teal-100 shadow-sm relative overflow-hidden group hover:border-[#00A896] hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FACC15] text-[#004D44] flex items-center justify-center mb-6 shadow-md">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
                Our Everyday Commitment
              </span>
              <h3 className="text-2xl font-black text-[#004D44] mt-1 mb-4">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
                &ldquo;To help brands establish a strong visual identity through creative, consistent, and meaningful designs.&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-teal-100 text-xs text-teal-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008375]" />
                <span>Consistency Across All Print, Digital & Packaging Touchpoints</span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. CREATIVE PROCESS (5 STEPS) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
              Structured Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#004D44]">
              Our 5-Stage Creative Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              How we turn abstract ideas into memorable, market-winning visual systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 border border-teal-100 hover:border-[#00A896] hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <span className="text-2xl font-black text-teal-300 group-hover:text-[#008375] transition-colors font-mono">
                    {s.step}
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#008375]">
                    {s.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE BRAND HEALTH AUDIT */}
      <section className="py-16 bg-gradient-to-b from-[#004D44] to-[#003B34] text-white relative overflow-hidden border-t border-[#006055]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-gradient-to-br from-[#00554B] to-[#00433A] rounded-3xl p-8 sm:p-10 border border-teal-400/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-black uppercase tracking-wider text-[#FACC15]">
                  Interactive Self-Audit
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  How Strong Is Your Current Brand Presence?
                </h3>
                <p className="text-xs text-teal-100/90">
                  Select all the assets your brand currently has fully documented and standardized:
                </p>

                <div className="space-y-2 pt-2">
                  {[
                    { id: 'logo', label: 'Vector Master Logo (Scalable for both business cards & hoardings)' },
                    { id: 'colors', label: 'Documented Color Palette (HEX, RGB, CMYK & Pantone)' },
                    { id: 'social', label: 'Consistent Monthly Social Media Creative Templates' },
                    { id: 'packaging', label: 'Custom Packaging & 3D Shelf Mockups' },
                    { id: 'guidelines', label: 'Official Corporate Brand Guidelines & Usage Rules' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => toggleAudit(item.id)}
                      className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold flex items-center justify-between border transition-all ${
                        auditChecklist[item.id]
                          ? 'bg-[#FEFCE8] border-[#FACC15] text-[#004D44] font-bold shadow-sm'
                          : 'bg-[#003D35] border-teal-500/30 text-teal-100 hover:bg-[#004A40]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                        auditChecklist[item.id] ? 'bg-[#008375] text-[#FACC15]' : 'border border-teal-400/50'
                      }`}>
                        {auditChecklist[item.id] && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Audit Score Breakdown */}
              <div className="lg:col-span-5 text-center bg-[#003830] rounded-2xl p-6 border border-teal-500/30 space-y-4 shadow-inner">
                <div className="text-xs font-bold text-teal-200 uppercase">Brand Vitality Score</div>
                <div className="text-5xl font-black text-[#FACC15]">
                  {auditScore}%
                </div>
                <p className="text-xs text-teal-100/90">
                  {auditScore >= 80 
                    ? 'Outstanding! You have a robust brand framework.' 
                    : auditScore >= 60 
                    ? 'Good foundation, but gaps exist in consistency and guidelines.' 
                    : 'Your brand needs a dedicated visual transformation to stand out in 2026.'}
                </p>

                <motion.button
                  onClick={onOpenPlanner}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full py-3 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Full Brand Upgrade</span>
                </motion.button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. CREATIVE TEAM HIGHLIGHTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
              Creative Powerhouse
            </span>
            <h2 className="text-3xl font-black text-[#004D44]">
              Meet the Teztecch Design Collective
            </h2>
            <p className="text-xs text-neutral-600">
              Passionate visual strategists, packaging engineers, and UI graphic illustrators based in Nagpur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-6 border border-teal-100 shadow-sm hover:border-[#00A896] hover:shadow-lg transition-all text-center space-y-4"
              >
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-md border-2 border-teal-200">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900">{member.name}</h3>
                  <p className="text-xs font-bold text-[#008375] mt-0.5">{member.role}</p>
                  <p className="text-xs text-neutral-500 mt-1">{member.specialty}</p>
                </div>
                <div className="pt-3 border-t border-neutral-100">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#E6FAF7] text-[#008375]">
                    {member.experience}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <CTASection onNavigate={onNavigate} onOpenPlanner={onOpenPlanner} />
    </div>
  );
};

