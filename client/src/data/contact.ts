// Contact methods configuration for WhatsApp and WeChat
export const CONTACT_METHODS = {
  whatsapp: {
    phone: '+224 622 497 604',
    url: 'https://wa.me/224622497604?text=Hello%20VXZO',
  },
  wechat: {
    id: '0022462297604',
  },
  email: {
    address: 'info@vxzo.com',
  },
  phone: {
    number: '+224 622 497 604',
  },
};

// Generate WhatsApp message with part information
export function generateWhatsAppMessage(partName?: string, partNumber?: string): string {
  if (partName && partNumber) {
    return `Hi, I'm interested in the ${partName} (Part #: ${partNumber}). Could you provide more information?`;
  }
  return 'Hi, I\'m interested in your spare parts. Could you provide more information?';
}

// Generate WhatsApp URL with message
export function generateWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/224622497604?text=${encodedMessage}`;
}
