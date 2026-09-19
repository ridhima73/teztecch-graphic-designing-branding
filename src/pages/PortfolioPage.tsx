import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  X, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId, PortfolioProject } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { CTASection } from '../components/CTASection';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanner: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<PortfolioProject | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'logo-branding', label: 'Logo & Identity' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'marketing-ads', label: 'Marketing & Ads' },
    { id: 'packaging', label: 'Packaging & Labels' },
    { id: 'corporate-branding', label: 'Corporate Branding' },
    { id: 'ui-graphics', label: 'UI Graphics' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-white">
      {/* Hero */}
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
            Proof of Craftsmanship
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Client <span className="text-[#FACC15]">Portfolio</span> & Case Studies
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-teal-100 leading-relaxed font-normal"
          >
            Explore how Teztecch transforms business visions into award-winning logos, high-ROI social campaigns, retail packaging, and executive corporate identities.
          </motion.p>

          {/* Search & Category Filter */}
          <div className="pt-4 max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-teal-300 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by brand, category, or design tag..."
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#003B34]/80 border border-teal-500/40 text-white placeholder-teal-200/60 text-xs focus:outline-none focus:ring-2 focus:ring-[#FACC15] shadow-inner"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === c.id
                      ? 'bg-[#FACC15] text-[#004D44] shadow-md'
                      : 'bg-white/10 text-teal-100 hover:bg-white/20'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-[#F0FDFB]/60 rounded-3xl border border-teal-100">
              <p className="text-sm font-bold text-[#004D44]">No projects match your filter query.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs text-[#008375] font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-3xl overflow-hidden border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                    onClick={() => setActiveProjectModal(project)}
                  >
                    <div className="relative h-64 overflow-hidden bg-neutral-100">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#004D44]/90 backdrop-blur-sm text-white shadow-sm">
                          {project.categoryLabel}
                        </span>
                      </div>
                      {project.metrics && (
                        <div className="absolute bottom-4 right-4">
                          <span className="text-[11px] font-black px-3 py-1 rounded-full bg-[#FACC15] text-[#004D44] shadow-sm">
                            {project.metrics}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="text-xs text-teal-700 font-semibold">{project.client} • {project.year}</div>
                        <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#008375] transition-colors mt-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-neutral-600 line-clamp-2 mt-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-teal-50 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 2).map((t, index) => (
                            <span key={index} className="text-[10px] bg-[#E6FAF7] text-[#008375] px-2 py-0.5 rounded font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs font-bold text-[#008375] group-hover:underline flex items-center gap-1">
                          View Study →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-teal-200 flex flex-col max-h-[90vh]"
            >
              
              <div className="relative h-64 sm:h-72 bg-neutral-900 overflow-hidden">
                <img
                  src={activeProjectModal.imageUrl}
                  alt={activeProjectModal.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#004D44]/80 text-white hover:bg-[#004D44] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#004D44] text-white">
                    {activeProjectModal.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
                <div>
                  <span className="text-xs text-[#008375] font-bold uppercase">{activeProjectModal.client} • {activeProjectModal.year}</span>
                  <h3 className="text-2xl font-black text-[#004D44] mt-1">
                    {activeProjectModal.title}
                  </h3>
                </div>

                <div className="space-y-4 text-xs leading-relaxed text-neutral-700">
                  <div className="p-4 rounded-2xl bg-[#F0FDFB] border border-teal-100">
                    <strong className="text-[#004D44] block text-xs uppercase mb-1">Challenge:</strong>
                    <p>{activeProjectModal.challenge}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FEFCE8] border border-[#FACC15]/40">
                    <strong className="text-[#854D0E] block text-xs uppercase mb-1">Teztecch Design Solution:</strong>
                    <p>{activeProjectModal.solution}</p>
                  </div>

                  {activeProjectModal.metrics && (
                    <div className="p-4 rounded-2xl bg-[#E6FAF7] border border-teal-200">
                      <strong className="text-[#004D44] block text-xs uppercase mb-1">Business Impact:</strong>
                      <p className="font-bold text-[#004D44]">{activeProjectModal.metrics}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {activeProjectModal.tags.map((t, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-[#E6FAF7] text-[#008375] font-medium">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-neutral-100 flex gap-3">
                  <motion.button
                    onClick={() => {
                      setActiveProjectModal(null);
                      onOpenPlanner();
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Request Similar Project Scope</span>
                  </motion.button>
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-5 py-3 bg-neutral-100 text-neutral-700 font-bold text-xs rounded-xl hover:bg-neutral-200"
                  >
                    Close
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CTASection onNavigate={onNavigate} onOpenPlanner={onOpenPlanner} />
    </div>
  );
};

