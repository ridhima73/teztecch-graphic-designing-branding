import React, { useState } from 'react';
import { 
  Package, 
  Sparkles, 
  ArrowRight, 
  Tag, 
  Box, 
  HelpCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { SERVICES } from '../data/servicesData';
import { CTASection } from '../components/CTASection';

interface PackagingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanner: () => void;
}

export const PackagingPage: React.FC<PackagingPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const service = SERVICES['packaging'];
  const [activeMockup, setActiveMockup] = useState<'box' | 'bottle' | 'pouch' | 'jar'>('box');

  const mockupTypes = {
    box: {
      title: 'Rigid Luxury Box & Folding Carton Packaging',
      desc: 'Engineered for premium cosmetics, electronics, and confectionery with magnetic closure, foil stamping, and spot UV accents.',
      img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      specs: 'Custom Dieline Blueprint • 3D Studio Lighting • Amazon/E-commerce White BG Renders',
    },
    bottle: {
      title: 'Glass & PET Bottle Labels (Beverages, Oils & Perfumes)',
      desc: 'Wrap-around and front/back waterproof label systems designed for cold-chain resistance and high shelf pop.',
      img: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
      specs: 'Metallic Foil Masks • Barcode Compliance • Moisture Proof Material Layout',
    },
    pouch: {
      title: 'Stand-Up Pouches & Matte Kraft Bags (FMCG & Snacks)',
      desc: 'Zip-lock and gusset pouch designs with front transparent viewing windows, nutritional fact tables, and FSSAI badges.',
      img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80',
      specs: 'Heat-Seal Dielines • Multi-Flavor Range Extensions • Shelf Hang-Holes',
    },
    jar: {
      title: 'Cosmetic & Gourmet Jars (Creams, Spices & Supplements)',
      desc: 'Lid stickers and perimeter label bands harmonized with brand color palettes and tactile paper textures.',
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      specs: 'Tamper-Evident Seals • Embossed Logo Tops • Batch & Expiry Markers',
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
              <Package className="w-4 h-4 text-[#CA8A04]" />
              Retail Shelf Dominance
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
            >
              Packaging & <span className="text-[#FACC15]">Label</span> Design
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-teal-100 font-bold"
            >
              &ldquo;Stand out on shelves with creative and functional packaging designs.&rdquo;
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-teal-100/90 leading-relaxed font-normal"
            >
              We design product packaging and labels that attract customers instantly, tell your brand story on the retail shelf, and turn unboxing into an unforgettable brand experience.
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
                id="packaging-planner-btn"
                onClick={onOpenPlanner}
                className="px-7 py-4 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <span>Request Packaging Dieline & 3D Render</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onNavigate('contact')}
                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-teal-200/30 transition-all backdrop-blur-sm"
              >
                Book Packaging Consultation
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
              Packaging Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#004D44] tracking-tight">
              What We Offer
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Creative packaging engineering aligned with manufacturer dieline specifications and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. Product Packaging Design */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Box className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#004D44]">
                1. Product Packaging Design
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Full-structure box packaging, outer cartons, mailer boxes, and luxury rigid gift sets engineered for durability, tactile pleasure, and shelf impact.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-2 pt-3 border-t border-teal-50">
                <li className="flex items-center gap-2">✓ Precision Dieline Cut & Fold Guides</li>
                <li className="flex items-center gap-2">✓ Special Finishing: Foil, Spot UV & Emboss</li>
                <li className="flex items-center gap-2">✓ Multi-SKU Flavor & Variant Extensions</li>
              </ul>
            </motion.div>

            {/* 2. Label Design */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Tag className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#004D44]">
                2. Label Design
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Bespoke bottle labels, pouch labels, jar stickers, shrink sleeves, and tamper-evident tags designed to communicate purity and quality instantly.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-2 pt-3 border-t border-teal-50">
                <li className="flex items-center gap-2">✓ Nutritional Facts & Ingredient Layout</li>
                <li className="flex items-center gap-2">✓ Barcode & FSSAI / ISO Compliance</li>
                <li className="flex items-center gap-2">✓ Transparent & Metallic Label Specs</li>
              </ul>
            </motion.div>

            {/* 3. Creative Concepts Aligned With Brand Identity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-[#00A896] shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center shadow-sm">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#004D44]">
                3. Creative Concepts Aligned with Brand Identity
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We ensure your physical packaging seamlessly harmonizes with your digital marketing, website, and retail displays for unified brand recall.
              </p>
              <ul className="text-xs text-[#004D44] font-medium space-y-2 pt-3 border-t border-teal-50">
                <li className="flex items-center gap-2">✓ 3-Second Shelf Psychology Focus</li>
                <li className="flex items-center gap-2">✓ Photorealistic 3D E-Commerce Renders</li>
                <li className="flex items-center gap-2">✓ Sustainable & Kraft Material Guidelines</li>
              </ul>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Interactive 3D Packaging Explorer */}
      <section className="py-16 bg-gradient-to-b from-[#00433B] to-[#003831] text-white border-t border-[#005B51]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#FACC15]">
              Interactive 3D Preview
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Packaging Format Showcase
            </h3>
          </div>

          <div className="bg-[#004D44]/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-teal-700/50 shadow-xl space-y-6">
            
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: 'box', label: 'Rigid Product Box' },
                { id: 'bottle', label: 'Bottle Label' },
                { id: 'pouch', label: 'Stand-Up Pouch' },
                { id: 'jar', label: 'Cosmetic Jar' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMockup(m.id as any)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeMockup === m.id
                      ? 'bg-[#FACC15] text-[#004D44] shadow-sm font-black'
                      : 'bg-white/10 text-teal-100 hover:bg-white/20'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
              <div className="lg:col-span-6 rounded-2xl overflow-hidden h-72 bg-[#003831] border border-teal-700/50 relative">
                <img
                  src={mockupTypes[activeMockup].img}
                  alt={mockupTypes[activeMockup].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase font-black px-3 py-1 rounded-full bg-black/70 text-[#FACC15]">
                    3D Studio Mockup
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <h4 className="text-xl font-bold text-white">
                  {mockupTypes[activeMockup].title}
                </h4>
                <p className="text-xs text-teal-100 leading-relaxed">
                  {mockupTypes[activeMockup].desc}
                </p>
                <div className="p-4 bg-[#003831] rounded-xl border border-teal-700/50 text-xs text-teal-100 space-y-1">
                  <div className="font-bold text-[#FACC15]">Production Deliverables:</div>
                  <p>{mockupTypes[activeMockup].specs}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenPlanner}
                  className="w-full py-3 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Estimate Packaging Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-black text-[#004D44] text-center mb-8">
            Packaging Design FAQs
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

