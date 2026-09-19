import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  MessageSquare, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Building
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/servicesData';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanner: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'Logo & Brand Identity',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Teztecch! I am submitting an inquiry from your website contact page.\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `🏢 Brand/Company: ${formData.company || 'N/A'}\n` +
      `🎨 Service Interested: ${formData.service}\n` +
      `💬 Message: ${formData.message || 'I would like to discuss design requirements.'}`
    );
  };

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
            Let’s Design Your Success Story
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
          >
            Connect With <span className="text-[#FACC15]">Teztecch</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-teal-100 font-bold"
          >
            Looking for creative designs that elevate your brand?
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-teal-100/90 leading-relaxed font-normal"
          >
            Ready to Transform Your Brand Visually? Connect with Teztecch today and let creativity take your business to the next level.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Information Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-teal-100 shadow-sm space-y-6 hover:border-[#00A896] hover:shadow-lg transition-all"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
                    Headquarters
                  </span>
                  <h3 className="text-2xl font-black text-[#004D44] mt-1">
                    Teztecch Agency Office
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    IT, Branding & Advertising Company
                  </p>
                </div>

                <div className="space-y-4 text-xs text-neutral-700">
                  {/* Address */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F0FDFB] border border-teal-100">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-[#004D44] block font-bold mb-0.5">Address:</strong>
                      <p className="text-neutral-600 leading-relaxed">
                        Teztecch – IT, Branding & Advertising Company<br />
                        Nagpur, Maharashtra, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F0FDFB] border border-teal-100">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-[#004D44] block font-bold mb-0.5">Direct Phone Lines:</strong>
                      <div className="flex flex-col gap-1 font-semibold text-[#004D44]">
                        <a href={`tel:${COMPANY_INFO.phoneRaw[0]}`} className="hover:underline">
                          +91-9822278791
                        </a>
                        <a href={`tel:${COMPANY_INFO.phoneRaw[1]}`} className="hover:underline">
                          +91-8956610799
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F0FDFB] border border-teal-100">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-[#004D44] block font-bold mb-0.5">Official Email:</strong>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#004D44] font-semibold hover:underline">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F0FDFB] border border-teal-100">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-[#004D44] block font-bold mb-0.5">Official Website:</strong>
                      <a href="https://www.teztecch.com" target="_blank" rel="noreferrer" className="text-[#004D44] font-semibold hover:underline">
                        {COMPANY_INFO.website}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F0FDFB] border border-teal-100">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#004D44] to-[#006E62] text-[#FACC15] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-[#004D44] block font-bold mb-0.5">Working Hours:</strong>
                      <p className="text-neutral-600 font-medium">
                        Monday – Saturday | 10:00 AM – 7:00 PM
                      </p>
                      <span className="text-[10px] text-teal-600 font-bold">Sunday Closed</span>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Card */}
                <div className="pt-2">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/919822278791?text=${encodeURIComponent('Hello Teztecch! I want to discuss graphic design & branding services.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp Consultation</span>
                  </motion.a>
                </div>
              </motion.div>

            </div>

            {/* Right Interactive Consultation Form (7 cols) */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-teal-100 shadow-sm relative hover:border-[#00A896] hover:shadow-xl transition-all"
              >
                
                <div className="mb-6 space-y-1">
                  <span className="text-xs font-black uppercase tracking-wider text-[#008375]">
                    Direct Inquiry Form
                  </span>
                  <h3 className="text-2xl font-black text-[#004D44]">
                    Send Us Your Design Requirements
                  </h3>
                  <p className="text-xs text-neutral-600">
                    Fill in your project details and our senior brand strategist will contact you within 2 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#FEFCE8] text-[#CA8A04] border border-[#FACC15] rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-black text-[#004D44]">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs text-neutral-600 max-w-md mx-auto">
                      Thank you <strong className="text-[#004D44]">{formData.name}</strong>. Our graphic design lead from Nagpur will review your message and connect with you shortly.
                    </p>
                    <div className="pt-4 flex justify-center gap-3">
                      <a
                        href={`https://wa.me/919822278791?text=${getWhatsAppMessage()}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-[#25D366] text-white font-bold text-xs rounded-xl inline-flex items-center gap-2 shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Send Copy to WhatsApp
                      </a>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 bg-[#F0FDFB] hover:bg-[#E6FAF7] text-[#004D44] font-bold text-xs rounded-xl border border-teal-200"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#004D44] mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-teal-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#008375] bg-[#F0FDFB]/50 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#004D44] mb-1">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98222..."
                          className="w-full px-4 py-3 rounded-xl border border-teal-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#008375] bg-[#F0FDFB]/50 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#004D44] mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@brand.com"
                          className="w-full px-4 py-3 rounded-xl border border-teal-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#008375] bg-[#F0FDFB]/50 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#004D44] mb-1">Company / Brand Name</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Zenith Enterprises"
                          className="w-full px-4 py-3 rounded-xl border border-teal-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#008375] bg-[#F0FDFB]/50 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#004D44] mb-1">Select Primary Service Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-teal-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#008375] bg-[#F0FDFB]/50 focus:bg-white transition-colors"
                      >
                        <option value="Logo & Brand Identity">Logo & Brand Identity Design</option>
                        <option value="Social Media Creatives">Social Media Creatives (Monthly Retainer)</option>
                        <option value="Marketing & Advertising">Marketing & Advertising (Hoardings, Brochures)</option>
                        <option value="Packaging & Labels">Packaging & Label Design (3D Mockups)</option>
                        <option value="Corporate Branding">Corporate Branding (Stationery, Pitch Decks)</option>
                        <option value="UI Graphics & Visual Assets">UI Graphics & Visual Assets (Web/App)</option>
                        <option value="Complete Brand Overhaul">Full-Scale End-to-End Brand Overhaul</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#004D44] mb-1">Describe Your Project & Goals</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your brand vision, target timeline, and specific design deliverables..."
                        className="w-full px-4 py-3 rounded-xl border border-teal-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#008375] bg-[#F0FDFB]/50 focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full sm:w-auto px-8 py-4 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                      >
                        <span>Send Design Inquiry</span>
                        <Send className="w-4 h-4" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="button"
                        onClick={onOpenPlanner}
                        className="w-full sm:w-auto px-6 py-4 bg-[#F0FDFB] hover:bg-[#E6FAF7] text-[#004D44] font-bold text-xs rounded-xl border border-teal-200 transition-all flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Sparkles className="w-4 h-4 text-[#CA8A04]" />
                        <span>Interactive Cost Estimator</span>
                      </motion.button>
                    </div>

                  </form>
                )}

              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* Nagpur Location & Coverage Banner */}
      <section className="py-12 bg-[#F0FDFB]/70 border-t border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black text-[#004D44] uppercase tracking-wider">
            <Building className="w-4 h-4 text-[#008375]" />
            Central India’s Premier Creative Agency
          </div>
          <h3 className="text-xl font-black text-[#004D44]">
            Serving Nagpur, Maharashtra & Global Clients
          </h3>
          <p className="text-xs text-neutral-600 max-w-xl mx-auto">
            From local business rebranding in Nagpur to pan-India advertising and international digital identity kits, our vector design standards ensure uncompromising quality.
          </p>
        </div>
      </section>
    </div>
  );
};

