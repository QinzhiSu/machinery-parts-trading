// Design: Industrial Minimalism - Quick Inquiry Dialog
// Modal form with auto-filled product information
import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { toast } from 'sonner';

interface QuickInquiryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  productInfo: {
    model: string;
    name: string;
    specs?: string;
    type: 'machine' | 'spare-part';
  };
}

export default function QuickInquiryDialog({ isOpen, onClose, productInfo }: QuickInquiryDialogProps) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '1',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Inquiry sent successfully! We will reply within 24 hours.');
    setForm({ name: '', company: '', email: '', phone: '', quantity: '1', message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: 'fadeIn 0.2s ease-out' }}
      />

      {/* Dialog */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ animation: 'slideUp 0.3s ease-out' }}
      >
        <div
          className="w-full max-w-2xl bg-white shadow-2xl relative"
          style={{ borderRadius: '0.5rem' }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between p-6 border-b"
            style={{
              background: 'oklch(0.18 0.04 265)',
              borderColor: 'oklch(0.88 0.008 90)',
            }}
          >
            <div>
              <h2
                className="text-xl font-bold uppercase tracking-wide text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Quick Inquiry
              </h2>
              <p className="text-xs mt-1" style={{ color: 'oklch(0.6 0.02 265)' }}>
                {productInfo.type === 'machine' ? 'Machinery' : 'Spare Part'} ·{' '}
                <span style={{ color: 'oklch(0.68 0.18 42)' }} className="font-semibold">
                  {productInfo.model}
                </span>
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 transition-colors rounded"
              style={{ color: 'oklch(0.75 0.01 265)' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
            {/* Product Summary */}
            <div
              className="mb-6 p-4 border-l-4"
              style={{
                background: 'oklch(0.97 0.005 90)',
                borderLeftColor: 'oklch(0.68 0.18 42)',
              }}
            >
              <div className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: 'oklch(0.68 0.18 42)', fontFamily: 'var(--font-display)' }}>
                Product Information
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-xs" style={{ color: 'oklch(0.5 0.02 265)' }}>Model</div>
                  <div className="font-semibold mt-0.5" style={{ color: 'oklch(0.18 0.04 265)', fontFamily: 'var(--font-mono)' }}>
                    {productInfo.model}
                  </div>
                </div>
                <div>
                  <div className="text-xs" style={{ color: 'oklch(0.5 0.02 265)' }}>Product</div>
                  <div className="font-semibold mt-0.5" style={{ color: 'oklch(0.18 0.04 265)' }}>
                    {productInfo.name}
                  </div>
                </div>
                {productInfo.specs && (
                  <div className="col-span-2">
                    <div className="text-xs" style={{ color: 'oklch(0.5 0.02 265)' }}>Specifications</div>
                    <div className="text-xs mt-0.5 font-mono" style={{ color: 'oklch(0.35 0.02 265)' }}>
                      {productInfo.specs}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border focus:outline-none focus:border-orange-400 transition-colors"
                    style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    className="w-full px-3 py-2 text-sm border focus:outline-none focus:border-orange-400 transition-colors"
                    style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm border focus:outline-none focus:border-orange-400 transition-colors"
                    style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm border focus:outline-none focus:border-orange-400 transition-colors"
                    style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  value={form.quantity}
                  onChange={e => setForm({ ...form, quantity: e.target.value })}
                  className="w-full px-3 py-2 text-sm border focus:outline-none focus:border-orange-400 transition-colors"
                  style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                  placeholder="1"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: 'oklch(0.35 0.02 265)', fontFamily: 'var(--font-display)' }}>
                  Additional Requirements
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border focus:outline-none focus:border-orange-400 transition-colors resize-none"
                  style={{ borderColor: 'oklch(0.88 0.008 90)', color: 'oklch(0.18 0.04 265)' }}
                  placeholder="e.g., Delivery location, payment terms, special requirements..."
                />
              </div>
            </form>
          </div>

          {/* Footer */}
          <div
            className="flex items-center justify-end gap-3 p-6 border-t"
            style={{ borderColor: 'oklch(0.88 0.008 90)' }}
          >
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors"
              style={{
                color: 'oklch(0.35 0.02 265)',
                background: 'oklch(0.97 0.005 90)',
                fontFamily: 'var(--font-display)',
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-6 py-2.5 text-white font-semibold uppercase tracking-wider transition-all hover:opacity-90"
              style={{
                background: 'oklch(0.68 0.18 42)',
                fontFamily: 'var(--font-display)',
              }}
            >
              <Send size={16} />
              Send Inquiry
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
