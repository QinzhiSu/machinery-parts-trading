// Design: Industrial Minimalism - WhatsApp floating button
// Fixed position bottom-right with orange accent, smooth animations
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = '224622497604'; // Guinea +224 622 497 604
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20VXZO%2C%20I%27m%20interested%20in%20your%20products`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Tooltip */}
      {isHovered && (
        <div
          className="absolute bottom-full right-0 mb-3 px-4 py-2 text-white text-xs font-semibold uppercase tracking-wider whitespace-nowrap animate-fade-in-up"
          style={{
            background: 'oklch(0.18 0.04 265)',
            fontFamily: 'var(--font-display)',
            borderRadius: '0.25rem',
            boxShadow: '0 4px 12px oklch(0 0 0 / 0.15)',
          }}
        >
          Chat with VXZO on WhatsApp
          {/* Arrow */}
          <div
            className="absolute top-full right-3 w-0 h-0"
            style={{
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '6px solid oklch(0.18 0.04 265)',
            }}
          />
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110"
        style={{
          background: 'oklch(0.68 0.18 42)',
          boxShadow: isHovered ? '0 8px 24px oklch(0.68 0.18 42 / 0.4)' : '0 4px 12px oklch(0 0 0 / 0.15)',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={24} className="text-white" />
      </a>

      {/* Pulse animation background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: 'oklch(0.68 0.18 42 / 0.2)',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }}
      />
    </div>
  );
}
