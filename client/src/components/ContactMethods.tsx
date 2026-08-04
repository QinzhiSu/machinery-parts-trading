import { MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactMethodsProps {
  partName?: string;
  partNumber?: string;
  compact?: boolean;
}

export default function ContactMethods({ partName, partNumber, compact = false }: ContactMethodsProps) {
  const whatsappNumber = '+224622497604';
  const wechatId = '0022462297604';
  const whatsappMessage = partName 
    ? `Hi, I'm interested in the ${partName} (Part #: ${partNumber}). Could you provide more information?`
    : 'Hi, I\'m interested in your spare parts. Could you provide more information?';

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  if (compact) {
    return (
      <div className="flex gap-2 flex-wrap">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold text-sm"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

        {/* WeChat Button */}
        <button
          onClick={() => {
            // Show WeChat QR code or contact info
            alert(`WeChat ID: ${wechatId}\n\nPlease scan the QR code or search for this ID in WeChat.`);
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
        >
          <MessageCircle size={18} />
          WeChat
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 border border-border rounded-lg p-6">
      <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
      
      <div className="space-y-3">
        {/* WhatsApp */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
            <MessageCircle size={20} />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-sm">WhatsApp</div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 text-sm break-all"
            >
              {whatsappNumber}
            </a>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-green-500 hover:bg-green-600"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Chat
            </a>
          </Button>
        </div>

        {/* WeChat */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
            <MessageCircle size={20} />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-sm">WeChat</div>
            <div className="text-gray-600 text-sm">{wechatId}</div>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              navigator.clipboard.writeText(wechatId);
              alert('WeChat ID copied to clipboard!');
            }}
          >
            Copy ID
          </Button>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
            <Mail size={20} />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-sm">Email</div>
            <a
              href="mailto:info@machinery-parts.com"
              className="text-blue-600 hover:text-blue-700 text-sm"
            >
              info@machinery-parts.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
            <Phone size={20} />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-sm">Phone</div>
            <a
              href="tel:+224622497604"
              className="text-orange-600 hover:text-orange-700 text-sm"
            >
              +224 622 497 604
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
        <p className="font-semibold mb-1">Response Time:</p>
        <p>WhatsApp & WeChat: Within 2 hours</p>
        <p>Email: Within 24 hours</p>
      </div>
    </div>
  );
}
