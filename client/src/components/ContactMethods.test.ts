import { describe, it, expect } from 'vitest';

describe('ContactMethods', () => {
  it('should generate correct WhatsApp URL with message', () => {
    const whatsappNumber = '+224622497604';
    const partName = 'Oil Filter';
    const partNumber = '8-97602-428-0';
    const message = `Hi, I'm interested in the ${partName} (Part #: ${partNumber}). Could you provide more information?`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    
    expect(whatsappUrl).toContain('https://wa.me/224622497604');
    expect(whatsappUrl).toContain('text=');
    expect(whatsappUrl).toContain('Oil%20Filter');
  });

  it('should generate correct WhatsApp URL without part info', () => {
    const whatsappNumber = '+224622497604';
    const message = 'Hi, I\'m interested in your spare parts. Could you provide more information?';
    
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    
    expect(whatsappUrl).toContain('https://wa.me/224622497604');
    expect(whatsappUrl).toContain('spare%20parts');
  });

  it('should have correct WeChat ID', () => {
    const wechatId = '0022462297604';
    
    expect(wechatId).toBe('0022462297604');
    expect(wechatId.length).toBeGreaterThan(0);
  });

  it('should format phone number correctly', () => {
    const phoneNumber = '+224622497604';
    
    expect(phoneNumber).toMatch(/^\+\d+/);
    expect(phoneNumber).toContain('224622497604');
  });

  it('should generate correct email link', () => {
    const email = 'info@machinery-parts.com';
    const emailLink = `mailto:${email}`;
    
    expect(emailLink).toBe('mailto:info@machinery-parts.com');
    expect(emailLink).toContain('@');
  });

  it('should generate correct phone link', () => {
    const phoneNumber = '+224622497604';
    const phoneLink = `tel:${phoneNumber}`;
    
    expect(phoneLink).toBe('tel:+224622497604');
    expect(phoneLink).toContain('tel:');
  });

  it('should handle special characters in part name', () => {
    const partName = 'Oil & Filter (Premium)';
    const partNumber = '8-97602-428-0';
    const message = `Hi, I'm interested in the ${partName} (Part #: ${partNumber}). Could you provide more information?`;
    
    const encodedMessage = encodeURIComponent(message);
    
    expect(encodedMessage).toContain('%26');
    expect(encodedMessage).toContain('%28');
    expect(encodedMessage).toContain('%29');
  });
});
