// Design: Industrial Minimalism - WeChat floating button
// Fixed position bottom-right with orange accent, smooth animations
import { useState } from 'react';

export default function WeChatButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // WeChat QR code image URL (placeholder - should be replaced with actual QR code)
  const wechatQRCode = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663644782615/Wp4u9iGenLAr7MSPhkcAHT/wechat-qr-code.png';

  return (
    <>
      {/* WeChat QR Code Modal */}
      {showQR && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowQR(false)}
        >
          <div
            className="bg-white rounded-lg p-6 shadow-2xl max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              Scan to add VXZO on WeChat
            </h3>
            <div className="bg-slate-100 p-4 rounded-lg mb-4 flex items-center justify-center min-h-64">
              <div className="text-center">
                <div className="text-4xl mb-2">微信</div>
                <p className="text-sm text-slate-600">
                  WeChat ID: vxzo_machinery
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Or scan the QR code with WeChat
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowQR(false)}
              className="w-full px-4 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* WeChat Button */}
      <div className="fixed bottom-24 right-6 z-40">
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
            Add VXZO on WeChat
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
        <button
          onClick={() => setShowQR(true)}
          className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110"
          style={{
            background: 'oklch(0.68 0.18 42)',
            boxShadow: isHovered ? '0 8px 24px oklch(0.68 0.18 42 / 0.4)' : '0 4px 12px oklch(0 0 0 / 0.15)',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          title="Add us on WeChat"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.5 13c-.828 0-1.5.672-1.5 1.5S7.672 16 8.5 16s1.5-.672 1.5-1.5S9.328 13 8.5 13zm7 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" />
            <path d="M12 2C6.48 2 2 5.58 2 10c0 2.54 1.19 4.85 3.15 6.37.1.88.35 1.75.75 2.55.1.2.05.45-.15.55-.2.1-.45.05-.55-.15-.5-1-.75-2.1-.75-3.2 0-.55.05-1.1.15-1.6-1.8-1.3-3-3.5-3-6.12 0-3.86 3.59-7 8-7s8 3.14 8 7c0 3.86-3.59 7-8 7-.55 0-1.1-.05-1.6-.15.1.45.15.9.15 1.35 0 1.1-.25 2.15-.7 3.1.45.05.9.1 1.35.1 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
          </svg>
        </button>

        {/* Pulse animation background */}
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: 'oklch(0.68 0.18 42 / 0.2)',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />
      </div>
    </>
  );
}
