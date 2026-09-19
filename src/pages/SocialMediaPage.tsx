import React from 'react';
import { 
  Share2, 
  Sparkles, 
  ArrowRight, 
  Instagram, 
  Calendar, 
  TrendingUp, 
  HelpCircle,
  Image as ImageIcon
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { SERVICES } from '../data/servicesData';
import { CTASection } from '../components/CTASection';

interface SocialMediaPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanner: () => void;
}

export const SocialMediaPage: React.FC<SocialMediaPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const service = SERVICES['social-media'];

  const gridTiles = [
    { title: 'Brand Launch Announcement', tag: 'Product', color: '#00A896', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80' },
    { title: 'Behind The Scenes Craft', tag: 'Culture', color: '#004D44', img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80' },
    { title: '5 Tips To Elevate Identity', tag: 'Carousel', color: '#F59E0B', img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=400&q=80' },
    { title: 'Client Milestone 100K+', tag: 'Proof', color: '#008375', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80' },
    { title: 'Happy Diwali Greetings', tag: 'Festival', color: '#D97706', img: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=400&q=80' },
    { title: 'Flash 48h Offer Creative', tag: 'Ad Promo', color: '#003831', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80' },
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
              <Share2 className="w-4 h-4 text-[#CA8A04]" />
              Digital Engagement & Reach
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
            >
              Social Media <span className="text-[#FACC15]">Creatives</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-teal-100 font-bold"
            >
              &ldquo;Engage your audience with eye-catching social media designs.&rdquo;
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-teal-100/90 leading-relaxed font-normal"
            >
              We design scroll-stopping feeds, high-converting Meta and Google ad creatives, interactive stories, and festival graphics that boost visibility and interaction.
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
                id="social-planner-btn"
                onClick={onOpenPlanner}
                className="px-7 py-4 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <span>Book Monthly Creative Package</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onNavigate('contact')}
                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-teal-200/30 transition-all backdrop-blur-sm"
              >
                Request Social Media Audit
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Deliverables / Includes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
              Content Types & Formats
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#004D44] tracking-tight">
              What Our Service Includes
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Complete creative coverage engineered for Meta (Instagram & Facebook), LinkedIn, YouTube & X.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Instagram & Facebook posts */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                Instagram & Facebook Posts
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Seamless multi-slide swipe carousels, 1:1 square feeds, and 4:5 vertical portrait posts that maximize feed real estate and engagement.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ 4:5 High-Screen Ratio</li>
                <li className="flex items-center gap-1.5">✓ Multi-slide Educational Carousels</li>
                <li className="flex items-center gap-1.5">✓ Zero Compression Blur</li>
              </ul>
            </motion.div>

            {/* 2. Stories & Banners */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                Stories & Banners
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Full-bleed 9:16 vertical stories, animated polls templates, highlight covers, and cross-platform header banners for Facebook & LinkedIn.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ 9:16 Vertical Story Format</li>
                <li className="flex items-center gap-1.5">✓ Cohesive Highlight Icons</li>
                <li className="flex items-center gap-1.5">✓ Page & Group Cover Banners</li>
              </ul>
            </motion.div>

            {/* 3. Ad Creatives */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                Ad Creatives (Paid Campaigns)
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                High-ROI ad visual variations with psychological conversion hooks, strong typography, discount badges, and CTA button callouts.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ A/B Testing Variations</li>
                <li className="flex items-center gap-1.5">✓ Meta 20% Text Safe Rules</li>
                <li className="flex items-center gap-1.5">✓ High Click-Through Rates</li>
              </ul>
            </motion.div>

            {/* 4. Festival & Promotional Creatives */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004D44]">
                Festival & Promotional Creatives
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Culturally resonant Diwali, Holi, Eid, Independence Day, New Year, and flash sale graphics customized with your brand identity and logo.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-1.5 pt-2 border-t border-teal-50">
                <li className="flex items-center gap-1.5">✓ Timely Event Delivery</li>
                <li className="flex items-center gap-1.5">✓ Flash Sale & Discount Posters</li>
                <li className="flex items-center gap-1.5">✓ National & Regional Celebrations</li>
              </ul>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Interactive Social Grid Simulator */}
      <section className="py-16 bg-gradient-to-b from-[#00433B] to-[#003831] text-white border-t border-[#005B51]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#FACC15]">
              Visual Grid Storytelling
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Preview a Cohesive Brand Grid Layout
            </h3>
            <p className="text-xs text-teal-200">
              We design entire feeds with harmonious rhythm, alternating product highlights, quotes, carousels, and festive creatives.
            </p>
          </div>

          <div className="bg-[#004D44]/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-teal-700/50 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {gridTiles.map((tile, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl overflow-hidden relative group aspect-square bg-[#003831] border border-teal-600/40 shadow-sm"
                >
                  <img 
                    src={tile.img} 
                    alt={tile.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003831]/90 via-[#004D44]/40 to-transparent p-3.5 flex flex-col justify-between">
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-black/60 text-[#FACC15] w-fit">
                      {tile.tag}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white drop-shadow">
                        {tile.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-teal-700/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-100">
              <span className="flex items-center gap-2 text-teal-100 font-medium">
                <Sparkles className="w-4 h-4 text-[#FACC15]" />
                Monthly plans available in 15, 30, and 60 post packages.
              </span>
              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenPlanner}
                className="px-4 py-2 rounded-xl bg-[#FACC15] text-[#004D44] font-black text-xs hover:bg-[#EAB308] transition-colors shadow-sm"
              >
                Configure Monthly Retainer →
              </motion.button>
            </div>
          </div>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-black text-[#004D44] text-center mb-8">
            Social Media Design FAQs
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

