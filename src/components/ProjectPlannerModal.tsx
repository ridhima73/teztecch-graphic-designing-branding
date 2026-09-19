import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Crown, 
  Share2, 
  Megaphone, 
  Package, 
  Briefcase, 
  Layout, 
  Calculator,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_INFO } from '../data/servicesData';

interface ProjectPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ServiceOption {
  id: string;
  name: string;
  icon: any;
  basePrice: number;
  timeEstimate: string;
  popular?: boolean;
}

export const ProjectPlannerModal: React.FC<ProjectPlannerModalProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['logo']);
  const [timeline, setTimeline] = useState<'standard' | 'express' | 'urgent'>('standard');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [brandName, setBrandName] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const servicesList: ServiceOption[] = [
    { id: 'logo', name: 'Logo & Brand Identity Kit', icon: Crown, basePrice: 8500, timeEstimate: '3-5 days', popular: true },
    { id: 'social', name: 'Social Media Monthly Pack (30 Posts)', icon: Share2, basePrice: 12000, timeEstimate: 'Monthly Retainer' },
    { id: 'marketing', name: 'Marketing Ads & Hoardings', icon: Megaphone, basePrice: 6500, timeEstimate: '2-4 days' },
    { id: 'packaging', name: 'Packaging & 3D Label Design', icon: Package, basePrice: 9500, timeEstimate: '4-7 days', popular: true },
    { id: 'corporate', name: 'Corporate Stationery & Pitch Deck', icon: Briefcase, basePrice: 7500, timeEstimate: '3-5 days' },
    { id: 'ui', name: 'UI Graphics & Iconography System', icon: Layout, basePrice: 11000, timeEstimate: '5-8 days' },
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const rawSubtotal = selectedServices.reduce((sum, serviceId) => {
    const item = servicesList.find((s) => s.id === serviceId);
    return sum + (item ? item.basePrice : 0);
  }, 0);

  // Bundle discount if 2 or more services selected
  const bundleDiscountPercent = selectedServices.length >= 3 ? 15 : selectedServices.length === 2 ? 10 : 0;
  const discountAmount = Math.round((rawSubtotal * bundleDiscountPercent) / 100);
  
  // Timeline multiplier
  const timelineMultiplier = timeline === 'urgent' ? 1.25 : timeline === 'express' ? 1.1 : 1.0;
  const estimatedTotal = Math.round((rawSubtotal - discountAmount) * timelineMultiplier);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const selectedNames = selectedServices
      .map((s) => servicesList.find((item) => item.id === s)?.name)
      .join(', ');
    return encodeURIComponent(
      `Hello Teztecch! I used your Interactive Design Estimator.\n\n` +
      `👤 Name: ${clientName || 'Client'}\n` +
      `🏢 Brand: ${brandName || 'New Venture'}\n` +
      `🎨 Services: ${selectedNames}\n` +
      `⏱️ Timeline: ${timeline.toUpperCase()}\n` +
      `💰 Indicative Estimate: ₹${estimatedTotal.toLocaleString('en-IN')}\n` +
      `📝 Note: ${notes || 'Looking forward to discussing next steps!'}`
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ scale: 0.92, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden border border-teal-100 flex flex-col max-h-[90vh]"
      >
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#004D44] via-[#006055] to-[#004D44] text-white px-6 py-5 flex items-center justify-between relative border-b border-[#006E62]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00A896] to-[#007A6E] border border-teal-300/40 flex items-center justify-center text-white font-black shadow-md">
              <Calculator className="w-5 h-5 text-[#FACC15]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                Interactive Design Project Estimator
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FEFCE8] text-[#004D44] font-black uppercase tracking-wider">
                  Instant
                </span>
              </h3>
              <p className="text-xs text-teal-100/80">
                Customize your requirements and receive transparent scope & timing estimates.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-teal-100 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1 bg-white">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-4"
            >
              <div className="w-16 h-16 bg-[#E6FAF7] text-[#008375] border border-teal-300 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-[#00A896]" />
              </div>
              <h4 className="text-2xl font-black text-[#004D44]">
                Inquiry Received!
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
                Thank you <span className="font-bold text-[#004D44]">{clientName || 'Partner'}</span>. Our creative director from Teztecch (Nagpur) will review your design brief and contact you within 2 hours.
              </p>

              <div className="bg-[#F0FDFB] p-4 rounded-2xl border border-teal-100 max-w-md mx-auto text-left text-xs space-y-1.5 text-neutral-700">
                <p><strong className="text-[#004D44] font-bold">Brand:</strong> {brandName || 'Custom Project'}</p>
                <p><strong className="text-[#004D44] font-bold">Estimated Budget:</strong> ₹{estimatedTotal.toLocaleString('en-IN')}</p>
                <p><strong className="text-[#004D44] font-bold">Direct Office Line:</strong> +91-9822278791</p>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <a
                  href={`https://wa.me/919822278791?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-[#008375] hover:bg-[#006D62] text-white font-bold text-xs rounded-xl inline-flex items-center gap-2 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  Connect on WhatsApp Now
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-xs rounded-xl transition-all"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Select Deliverables */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#006055] mb-3 flex items-center justify-between">
                  <span>1. Select Required Design Services</span>
                  <span className="text-[#004D44] normal-case text-xs font-bold bg-[#E6FAF7] px-2.5 py-0.5 rounded-full border border-teal-200">
                    {selectedServices.length} Selected ({bundleDiscountPercent > 0 ? `${bundleDiscountPercent}% Bundle Discount Active` : 'Select 2+ for discount'})
                  </span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {servicesList.map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    const Icon = service.icon;
                    return (
                      <motion.button
                        type="button"
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex items-start justify-between relative group ${
                          isSelected
                            ? 'bg-[#E6FAF7] border-[#00A896] ring-1 ring-[#00A896] shadow-sm'
                            : 'bg-white hover:bg-[#F0FDFB] border-neutral-200'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-xl transition-colors ${
                            isSelected ? 'bg-[#008375] text-[#FACC15]' : 'bg-[#E6FAF7] text-[#008375]'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                              {service.name}
                              {service.popular && (
                                <span className="text-[9px] bg-[#FACC15] text-[#004D44] px-1.5 py-0.2 rounded font-black uppercase">
                                  Popular
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-teal-700/80 mt-0.5">
                              Approx: {service.timeEstimate}
                            </div>
                          </div>
                        </div>

                        <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                          isSelected ? 'bg-[#008375] border-[#008375] text-white' : 'border-neutral-300'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Timeline Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#006055] mb-2">
                  2. Desired Delivery Timeline
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'standard', title: 'Standard Sprint', sub: 'Standard agency pacing' },
                    { id: 'express', title: 'Express Speed', sub: '+10% priority focus' },
                    { id: 'urgent', title: 'Urgent 48-72h', sub: 'Dedicated sprint' },
                  ].map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setTimeline(t.id as any)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        timeline === t.id
                          ? 'bg-[#E6FAF7] border-[#00A896] text-[#004D44] font-bold ring-1 ring-[#00A896]'
                          : 'bg-white border-neutral-200 text-neutral-700 hover:bg-[#F0FDFB]'
                      }`}
                    >
                      <div className="text-xs font-bold">{t.title}</div>
                      <div className="text-[10px] text-neutral-500 mt-0.5">{t.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Client Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-neutral-100">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Company / Brand Name</label>
                  <input
                    type="text"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Acme Botanicals"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+91 98222..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Specific Design Goals / Notes</label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about your brand vision, target audience, color preferences, or specific deliverables..."
                    className="w-full px-3.5 py-2 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                  />
                </div>
              </div>

              {/* Estimate Summary Box */}
              <div className="bg-gradient-to-br from-[#004D44] to-[#006055] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-teal-500/40 shadow-lg">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#FACC15] font-black">
                    Estimated Project Indicative Range
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white flex items-baseline gap-2">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                    <span className="text-xs text-teal-200 font-normal">
                      (+GST, includes vector source files)
                    </span>
                  </div>
                  {bundleDiscountPercent > 0 && (
                    <p className="text-[11px] text-[#FACC15] mt-0.5 font-bold">
                      ✓ Saved ₹{discountAmount.toLocaleString('en-IN')} with multi-service bundle discount!
                    </p>
                  )}
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 sm:flex-initial px-6 py-3 bg-[#FACC15] hover:bg-[#EAB308] text-[#004D44] font-black text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>Submit Design Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>

            </form>
          )}
        </div>

      </motion.div>
    </div>
  );
};

