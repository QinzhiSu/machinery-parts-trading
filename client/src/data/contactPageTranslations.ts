import type { Language } from './translations';

type ContactPageCopy = {
  namePlaceholder: string;
  companyPlaceholder: string;
  phonePlaceholder: string;
  subjectPlaceholder: string;
  success: string;
  exportMarketsLabel: string;
  markets: string;
};

export const contactPageTranslations: Record<Language, ContactPageCopy> = {
  en: { namePlaceholder: 'Your full name', companyPlaceholder: 'Your company name', phonePlaceholder: '+1 234 567 8900', subjectPlaceholder: 'e.g. CAT 320 excavator inquiry or Komatsu filter parts', success: 'Message sent! We will reply within 24 hours.', exportMarketsLabel: 'Export Markets', markets: 'Africa · Middle East · Southeast Asia · Americas' },
  zh: { namePlaceholder: '请输入您的姓名', companyPlaceholder: '请输入您的公司名称', phonePlaceholder: '+1 234 567 8900', subjectPlaceholder: '例如：CAT 320 挖掘机询盘或小松滤清器配件', success: '信息已发送！我们将在 24 小时内回复。', exportMarketsLabel: '出口市场', markets: '非洲 · 中东 · 东南亚 · 美洲' },
  es: { namePlaceholder: 'Su nombre completo', companyPlaceholder: 'Nombre de su empresa', phonePlaceholder: '+1 234 567 8900', subjectPlaceholder: 'Ej.: consulta sobre excavadora CAT 320 o filtros Komatsu', success: '¡Mensaje enviado! Le responderemos en 24 horas.', exportMarketsLabel: 'Mercados de exportación', markets: 'África · Oriente Medio · Sudeste Asiático · Américas' },
  fr: { namePlaceholder: 'Votre nom complet', companyPlaceholder: 'Nom de votre entreprise', phonePlaceholder: '+1 234 567 8900', subjectPlaceholder: 'Ex. : demande sur une excavatrice CAT 320 ou des filtres Komatsu', success: 'Message envoyé ! Nous vous répondrons sous 24 heures.', exportMarketsLabel: 'Marchés d’exportation', markets: 'Afrique · Moyen-Orient · Asie du Sud-Est · Amériques' },
  de: { namePlaceholder: 'Ihr vollständiger Name', companyPlaceholder: 'Name Ihres Unternehmens', phonePlaceholder: '+1 234 567 8900', subjectPlaceholder: 'z. B. Anfrage zu CAT-320-Bagger oder Komatsu-Filtern', success: 'Nachricht gesendet! Wir antworten innerhalb von 24 Stunden.', exportMarketsLabel: 'Exportmärkte', markets: 'Afrika · Naher Osten · Südostasien · Amerika' },
  pt: { namePlaceholder: 'Seu nome completo', companyPlaceholder: 'Nome da sua empresa', phonePlaceholder: '+1 234 567 8900', subjectPlaceholder: 'Ex.: consulta sobre escavadeira CAT 320 ou filtros Komatsu', success: 'Mensagem enviada! Responderemos em até 24 horas.', exportMarketsLabel: 'Mercados de exportação', markets: 'África · Oriente Médio · Sudeste Asiático · Américas' },
  ru: { namePlaceholder: 'Ваше полное имя', companyPlaceholder: 'Название вашей компании', phonePlaceholder: '+1 234 567 8900', subjectPlaceholder: 'Напр.: запрос по экскаватору CAT 320 или фильтрам Komatsu', success: 'Сообщение отправлено! Мы ответим в течение 24 часов.', exportMarketsLabel: 'Экспортные рынки', markets: 'Африка · Ближний Восток · Юго-Восточная Азия · Америка' },
  ja: { namePlaceholder: '氏名を入力してください', companyPlaceholder: '会社名を入力してください', phonePlaceholder: '+1 234 567 8900', subjectPlaceholder: '例：CAT 320油圧ショベルまたは小松フィルター部品に関するお問い合わせ', success: 'メッセージを送信しました。24時間以内に返信します。', exportMarketsLabel: '輸出市場', markets: 'アフリカ · 中東 · 東南アジア · 南北アメリカ' },
  ar: { namePlaceholder: 'الاسم الكامل', companyPlaceholder: 'اسم الشركة', phonePlaceholder: '+1 234 567 8900', subjectPlaceholder: 'مثال: استفسار عن حفارة CAT 320 أو فلاتر Komatsu', success: 'تم إرسال الرسالة! سنرد خلال 24 ساعة.', exportMarketsLabel: 'أسواق التصدير', markets: 'أفريقيا · الشرق الأوسط · جنوب شرق آسيا · الأمريكتان' },
  it: { namePlaceholder: 'Il suo nome completo', companyPlaceholder: 'Nome della sua azienda', phonePlaceholder: '+1 234 567 8900', subjectPlaceholder: 'Es.: richiesta su escavatore CAT 320 o filtri Komatsu', success: 'Messaggio inviato! Risponderemo entro 24 ore.', exportMarketsLabel: 'Mercati di esportazione', markets: 'Africa · Medio Oriente · Sud-est asiatico · Americhe' },
};
