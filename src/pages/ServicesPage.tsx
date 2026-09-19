import React, { useState } from 'react';
import { 
  Sparkles, 
  Crown, 
  Share2, 
  Megaphone, 
  Package, 
  Briefcase, 
  Layout, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { SERVICES, COMPANY_INFO } from '../data/servicesData';
import { CTASection } from '../components/CTASection';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanner: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const [filter, setFilter] = useState<'all' | 'branding' | 'digital' | 'print'>('all');

  const servicesList = [
    {
      ...SERVICES['logo-branding'],
      filterCat: 'branding',
      highlightBadge: 'Core Visual Identity',
      turnaround: '3-5 Days',
    },
    {
      ...SERVICES['social-media'],
      filterCat: 'digital',
      highlightBadge: 'Monthly Retainer',
      turnaround: '24-48 Hours',
    },
    {
      ...SERVICES['marketing-ads'],
      filterCat: 'print',
      highlightBadge: 'High-Impact Scale',
      turnaround: '2-4 Days',
    },
    {
      ...SERVICES['packaging'],
      filterCat: 'print',
      highlightBadge: 'Shelf Domination',
      turnaround: '4-7 Days',
    },
    {
      ...SERVICES['corporate-branding'],
      filterCat: 'branding',
      highlightBadge: 'B2B Authority',
      turnaround: '3-5 Days',
    },
    {
      ...SERVICES['ui-graphics'],
      filterCat: 'digital',
      highlightBadge: 'Retina Ready',
      turnaround: '4-6 Days',
    },
  ];

  const filteredServices = servicesList.filter((s) => {
    if (filter === 'all') return true;
    return s.filterCat === filter;
  });

  return (
    <div className="w-full bg-white">
      {/* Hero Header */}
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
            Complete Design Catalog
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Our Graphic <span className="text-[#FACC15]">Designing</span> Services
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-teal-100 leading-relaxed font-normal"
          >
            From logos to full-scale branding, from social media creatives to marketing materials — explore our complete suite of design solutions.
          </motion.p>

          {/* Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-2 flex flex-wrap justify-center gap-2"
          >
            {[
              { id: 'all', label: 'All Services (6)' },
              { id: 'branding', label: 'Brand & Corporate Identity' },
              { id: 'digital', label: 'Digital & Social Media' },
              { id: 'print', label: 'Print, Ads & Packaging' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === f.id
                    ? 'bg-[#FACC15] text-[#004D44] shadow-md'
                    : 'bg-white/10 text-teal-100 hover:bg-white/20'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services List Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const icons: Record<string, any> = {
                Crown,
                Share2,
                Megaphone,
                Package,
                Briefcase,
                Layout,
              };
              const Icon = icons[service.iconName] || Crown;

              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  id={`service-block-${service.id}`}
                  className="bg-white rounded-3xl p-8 sm:p-10 border border-teal-100 hover:border-[#00A896] hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Info Column (7 cols) */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-md">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-[#008375] uppercase tracking-wider">
                            {service.highlightBadge}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-black text-[#004D44]">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-700 font-normal leading-relaxed">
                        {service.shortDesc}
                      </p>

                      {/* What We Deliver List */}
                      <div className="space-y-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-800">
                          What We Deliver:
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.deliverables.slice(0, 4).map((d, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                              <CheckCircle2 className="w-4 h-4 text-[#008375] flex-shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="pt-3 flex flex-wrap gap-3">
                        <motion.button
                          onClick={() => onNavigate(service.id)}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="px-6 py-3 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-xs rounded-xl shadow-md transition-all flex items-center gap-2 active:scale-95"
                        >
                          <span>Full Service Deep Dive</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>

                        <motion.button
                          onClick={onOpenPlanner}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="px-5 py-3 bg-[#F0FDFB] hover:bg-[#E6FAF7] text-[#004D44] font-bold text-xs rounded-xl border border-teal-200 transition-all shadow-sm"
                        >
                          Estimate This Service
                        </motion.button>
                      </div>
                    </div>

                    {/* Right Quick Metrics (5 cols) */}
                    <div className="lg:col-span-5 bg-[#F0FDFB]/80 rounded-2xl p-6 border border-teal-100 shadow-sm space-y-4">
                      <h3 className="text-xs font-bold text-[#004D44] uppercase tracking-wider flex items-center justify-between">
                        <span>Service Specifications</span>
                        <span className="text-[#008375] font-bold flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#CA8A04]" />
                          {service.turnaround}
                        </span>
                      </h3>

                      <div className="grid grid-cols-2 gap-3 pt-1">
                        {service.stats.map((s, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-white border border-teal-100 shadow-xs">
                            <div className="text-xs text-neutral-500 font-medium">{s.label}</div>
                            <div className="text-sm font-black text-[#004D44] mt-0.5">{s.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#FEFCE8] border border-[#FACC15] text-xs text-[#004D44] flex items-center gap-2 font-bold">
                        <ShieldCheck className="w-4 h-4 flex-shrink-0 text-[#CA8A04]" />
                        <span>Commercial Vector Ownership & Print-Ready Files</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

        </div>
      </section>

      {/* Why Choose Section inside services page */}
      <section className="py-16 bg-[#F0FDFB]/60 border-t border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
              Quality Assurance
            </span>
            <h2 className="text-3xl font-black text-[#004D44]">
              Why Choose Teztecch for Graphic Designing?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {COMPANY_INFO.whyChooseUs.map((w, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-2xl border border-teal-100 text-center space-y-2 shadow-sm hover:border-[#00A896] hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] font-black text-xs flex items-center justify-center mx-auto shadow-sm">
                  {idx + 1}
                </div>
                <h3 className="text-xs font-bold text-[#004D44]">{w.title}</h3>
                <p className="text-[11px] text-neutral-600 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} onOpenPlanner={onOpenPlanner} />
    </div>
  );
};

