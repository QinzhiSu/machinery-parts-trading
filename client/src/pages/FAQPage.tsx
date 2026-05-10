import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const { language } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    // 产品相关
    {
      category: 'products',
      question: language === 'en' ? 'What brands do you export?' : language === 'zh' ? '你们出口哪些品牌?' : language === 'ar' ? 'ما هي العلامات التجارية التي تصدرونها؟' : language === 'ru' ? 'Какие бренды вы экспортируете?' : language === 'fr' ? 'Quelles marques exportez-vous?' : language === 'pt' ? 'Que marcas você exporta?' : language === 'es' ? '¿Qué marcas exportan?' : 'Quali marchi esportate?',
      answer: language === 'en' ? 'We export Caterpillar, Shantui, XCMG, LiuGong, SANY, Komatsu, Isuzu, Shacman, Sinotruk, Toyota, Cummins, and Weichai.' : language === 'zh' ? '我们出口卡特、山推、徐工、柳工、三一、小松、五十铃、陕汽、中国重汽、丰田、康明斯、潍柴等全球知名品牌。' : language === 'ar' ? 'نصدر كاتربيلر وشانتوي وXCMG وليوجونج وساني وكوماتسو وإيسوزو وشاكمان وسينوتروك وتويوتا وكمينز وويتشاي.' : language === 'ru' ? 'Мы экспортируем Caterpillar, Shantui, XCMG, LiuGong, SANY, Komatsu, Isuzu, Shacman, Sinotruk, Toyota, Cummins и Weichai.' : language === 'fr' ? 'Nous exportons Caterpillar, Shantui, XCMG, LiuGong, SANY, Komatsu, Isuzu, Shacman, Sinotruk, Toyota, Cummins et Weichai.' : language === 'pt' ? 'Exportamos Caterpillar, Shantui, XCMG, LiuGong, SANY, Komatsu, Isuzu, Shacman, Sinotruk, Toyota, Cummins e Weichai.' : language === 'es' ? 'Exportamos Caterpillar, Shantui, XCMG, LiuGong, SANY, Komatsu, Isuzu, Shacman, Sinotruk, Toyota, Cummins y Weichai.' : 'Esportiamo Caterpillar, Shantui, XCMG, LiuGong, SANY, Komatsu, Isuzu, Shacman, Sinotruk, Toyota, Cummins e Weichai.',
    },
    {
      category: 'products',
      question: language === 'en' ? 'Do you export excavators?' : language === 'zh' ? '你们出口挖掘机吗?' : language === 'ar' ? 'هل تصدرون الحفارات؟' : language === 'ru' ? 'Вы экспортируете экскаваторы?' : language === 'fr' ? 'Exportez-vous des excavatrices?' : language === 'pt' ? 'Você exporta escavadeiras?' : language === 'es' ? '¿Exportan excavadoras?' : 'Esportate escavatori?',
      answer: language === 'en' ? 'Yes, we provide various excavator models including CAT 320, CAT 336, SANY SY365, XCMG XE360, and more.' : language === 'zh' ? '是的，我们提供各种型号的挖掘机，包括卡特320、卡特336、三一SY365、徐工XE360等。' : language === 'ar' ? 'نعم، نوفر نماذج حفارات مختلفة بما في ذلك CAT 320 و CAT 336 و SANY SY365 و XCMG XE360 وغيرها.' : language === 'ru' ? 'Да, мы предоставляем различные модели экскаваторов, включая CAT 320, CAT 336, SANY SY365, XCMG XE360 и другие.' : language === 'fr' ? 'Oui, nous fournissons différents modèles d\'excavatrices, notamment CAT 320, CAT 336, SANY SY365, XCMG XE360 et autres.' : language === 'pt' ? 'Sim, fornecemos vários modelos de escavadeiras, incluindo CAT 320, CAT 336, SANY SY365, XCMG XE360 e outros.' : language === 'es' ? 'Sí, proporcionamos varios modelos de excavadoras, incluidos CAT 320, CAT 336, SANY SY365, XCMG XE360 y otros.' : 'Sì, forniamo vari modelli di escavatori, inclusi CAT 320, CAT 336, SANY SY365, XCMG XE360 e altri.',
    },
    {
      category: 'products',
      question: language === 'en' ? 'Do you export loaders?' : language === 'zh' ? '你们出口装载机吗?' : language === 'ar' ? 'هل تصدرون المحملات؟' : language === 'ru' ? 'Вы экспортируете погрузчики?' : language === 'fr' ? 'Exportez-vous des chargeuses?' : language === 'pt' ? 'Você exporta carregadeiras?' : language === 'es' ? '¿Exportan cargadores?' : 'Esportate caricatori?',
      answer: language === 'en' ? 'Yes, we export various loader models including wheel loaders and track loaders from brands like Caterpillar, XCMG, LiuGong, and SANY.' : language === 'zh' ? '是的，我们出口各种装载机型号，包括轮式装载机和履带式装载机，来自卡特、徐工、柳工、三一等品牌。' : language === 'ar' ? 'نعم، نصدر نماذج محملات مختلفة بما في ذلك المحملات ذات العجلات والمحملات ذات الجنزير من علامات تجارية مثل Caterpillar و XCMG و LiuGong و SANY.' : language === 'ru' ? 'Да, мы экспортируем различные модели погрузчиков, включая колесные и гусеничные погрузчики от таких брендов, как Caterpillar, XCMG, LiuGong и SANY.' : language === 'fr' ? 'Oui, nous exportons différents modèles de chargeuses, notamment des chargeuses sur roues et des chargeuses sur chenilles de marques telles que Caterpillar, XCMG, LiuGong et SANY.' : language === 'pt' ? 'Sim, exportamos vários modelos de carregadeiras, incluindo carregadeiras de rodas e carregadeiras de esteiras de marcas como Caterpillar, XCMG, LiuGong e SANY.' : language === 'es' ? 'Sí, exportamos varios modelos de cargadores, incluidos cargadores de ruedas y cargadores de orugas de marcas como Caterpillar, XCMG, LiuGong y SANY.' : 'Sì, esportiamo vari modelli di caricatori, inclusi caricatori su ruote e caricatori su cingoli di marchi come Caterpillar, XCMG, LiuGong e SANY.',
    },
    {
      category: 'products',
      question: language === 'en' ? 'Do you export bulldozers?' : language === 'zh' ? '你们出口推土机吗?' : language === 'ar' ? 'هل تصدرون الجرافات؟' : language === 'ru' ? 'Вы экспортируете бульдозеры?' : language === 'fr' ? 'Exportez-vous des bouteurs?' : language === 'pt' ? 'Você exporta tratores de esteira?' : language === 'es' ? '¿Exportan topadoras?' : 'Esportate bulldozer?',
      answer: language === 'en' ? 'Yes, we export bulldozers from Shantui, Caterpillar, and other brands. Models include SD32, SD42, and more.' : language === 'zh' ? '是的，我们出口来自山推、卡特等品牌的推土机。型号包括SD32、SD42等。' : language === 'ar' ? 'نعم، نصدر الجرافات من Shantui و Caterpillar وعلامات تجارية أخرى. تشمل النماذج SD32 و SD42 وغيرها.' : language === 'ru' ? 'Да, мы экспортируем бульдозеры от Shantui, Caterpillar и других брендов. Модели включают SD32, SD42 и другие.' : language === 'fr' ? 'Oui, nous exportons des bouteurs de Shantui, Caterpillar et d\'autres marques. Les modèles incluent SD32, SD42 et autres.' : language === 'pt' ? 'Sim, exportamos tratores de esteira de Shantui, Caterpillar e outras marcas. Os modelos incluem SD32, SD42 e outros.' : language === 'es' ? 'Sí, exportamos topadoras de Shantui, Caterpillar y otras marcas. Los modelos incluyen SD32, SD42 y otros.' : 'Sì, esportiamo bulldozer da Shantui, Caterpillar e altri marchi. I modelli includono SD32, SD42 e altri.',
    },
    {
      category: 'products',
      question: language === 'en' ? 'Do you export spare parts?' : language === 'zh' ? '你们出口工程机械配件吗?' : language === 'ar' ? 'هل تصدرون قطع الغيار؟' : language === 'ru' ? 'Вы экспортируете запасные части?' : language === 'fr' ? 'Exportez-vous des pièces de rechange?' : language === 'pt' ? 'Você exporta peças sobressalentes?' : language === 'es' ? '¿Exportan piezas de repuesto?' : 'Esportate pezzi di ricambio?',
      answer: language === 'en' ? 'Yes, we export comprehensive spare parts including buckets, hydraulic filters, engine parts, bearings, and more for all brands.' : language === 'zh' ? '是的，我们出口全面的配件，包括铲斗、液压滤芯、发动机零件、轴承等，适用于所有品牌。' : language === 'ar' ? 'نعم، نصدر قطع غيار شاملة بما في ذلك الجرافات والمرشحات الهيدروليكية وأجزاء المحرك والمحامل والمزيد لجميع العلامات التجارية.' : language === 'ru' ? 'Да, мы экспортируем полный ассортимент запасных частей, включая ковши, гидравлические фильтры, детали двигателя, подшипники и многое другое для всех брендов.' : language === 'fr' ? 'Oui, nous exportons des pièces de rechange complètes, notamment des godets, des filtres hydrauliques, des pièces moteur, des roulements et bien d\'autres pour toutes les marques.' : language === 'pt' ? 'Sim, exportamos peças sobressalentes abrangentes, incluindo baldes, filtros hidráulicos, peças de motor, rolamentos e muito mais para todas as marcas.' : language === 'es' ? 'Sí, exportamos piezas de repuesto completas, incluidos cucharones, filtros hidráulicos, piezas del motor, rodamientos y más para todas las marcas.' : 'Sì, esportiamo pezzi di ricambio completi, inclusi secchi, filtri idraulici, parti del motore, cuscinetti e altro per tutti i marchi.',
    },

    // 地区相关
    {
      category: 'regions',
      question: language === 'en' ? 'Do you export to Africa?' : language === 'zh' ? '你们向非洲出口吗?' : language === 'ar' ? 'هل تصدرون إلى أفريقيا؟' : language === 'ru' ? 'Вы экспортируете в Африку?' : language === 'fr' ? 'Exportez-vous vers l\'Afrique?' : language === 'pt' ? 'Você exporta para a África?' : language === 'es' ? '¿Exportan a África?' : 'Esportate in Africa?',
      answer: language === 'en' ? 'Yes, we have offices in Guinea and Madagascar and serve the entire African market.' : language === 'zh' ? '是的，我们在几内亚和马达加斯加有办公室，服务整个非洲市场。' : language === 'ar' ? 'نعم، لدينا مكاتب في غينيا ومدغشقر ونخدم سوق أفريقيا بأكملها.' : language === 'ru' ? 'Да, у нас есть офисы в Гвинее и Мадагаскаре, и мы обслуживаем весь африканский рынок.' : language === 'fr' ? 'Oui, nous avons des bureaux en Guinée et à Madagascar et servons l\'ensemble du marché africain.' : language === 'pt' ? 'Sim, temos escritórios na Guiné e em Madagascar e servimos todo o mercado africano.' : language === 'es' ? 'Sí, tenemos oficinas en Guinea y Madagascar y servimos todo el mercado africano.' : 'Sì, abbiamo uffici in Guinea e Madagascar e serviamo l\'intero mercato africano.',
    },
    {
      category: 'regions',
      question: language === 'en' ? 'Do you export to the Middle East?' : language === 'zh' ? '你们向中东出口吗?' : language === 'ar' ? 'هل تصدرون إلى الشرق الأوسط؟' : language === 'ru' ? 'Вы экспортируете на Ближний Восток?' : language === 'fr' ? 'Exportez-vous vers le Moyen-Orient?' : language === 'pt' ? 'Você exporta para o Oriente Médio?' : language === 'es' ? '¿Exportan a Oriente Medio?' : 'Esportate in Medio Oriente?',
      answer: language === 'en' ? 'Yes, we export to Saudi Arabia, UAE, Iran, Iraq, Kuwait and other Middle Eastern countries.' : language === 'zh' ? '是的，我们向沙特、阿联酋、伊朗、伊拉克、科威特等中东国家出口。' : language === 'ar' ? 'نعم، نصدر إلى المملكة العربية السعودية والإمارات العربية المتحدة وإيران والعراق والكويت ودول الشرق الأوسط الأخرى.' : language === 'ru' ? 'Да, мы экспортируем в Саудовскую Аравию, ОАЭ, Иран, Ирак, Кувейт и другие страны Ближнего Востока.' : language === 'fr' ? 'Oui, nous exportons vers l\'Arabie saoudite, les Émirats arabes unis, l\'Iran, l\'Irak, le Koweït et d\'autres pays du Moyen-Orient.' : language === 'pt' ? 'Sim, exportamos para Arábia Saudita, EAU, Irã, Iraque, Kuwait e outros países do Oriente Médio.' : language === 'es' ? 'Sí, exportamos a Arabia Saudita, EAU, Irán, Irak, Kuwait y otros países de Oriente Medio.' : 'Sì, esportiamo in Arabia Saudita, Emirati Arabi Uniti, Iran, Iraq, Kuwait e altri paesi del Medio Oriente.',
    },
    {
      category: 'regions',
      question: language === 'en' ? 'Do you export to Russia?' : language === 'zh' ? '你们向俄罗斯出口吗?' : language === 'ar' ? 'هل تصدرون إلى روسيا؟' : language === 'ru' ? 'Вы экспортируете в Россию?' : language === 'fr' ? 'Exportez-vous vers la Russie?' : language === 'pt' ? 'Você exporta para a Rússia?' : language === 'es' ? '¿Exportan a Rusia?' : 'Esportate in Russia?',
      answer: language === 'en' ? 'Yes, we export to Russia, Belarus, Kazakhstan and other Central Asian countries.' : language === 'zh' ? '是的，我们向俄罗斯、白俄罗斯、哈萨克斯坦等中亚国家出口。' : language === 'ar' ? 'نعم، نصدر إلى روسيا وبيلاروس وكازاخستان ودول آسيا الوسطى الأخرى.' : language === 'ru' ? 'Да, мы экспортируем в Россию, Беларусь, Казахстан и другие страны Центральной Азии.' : language === 'fr' ? 'Oui, nous exportons vers la Russie, la Biélorussie, le Kazakhstan et d\'autres pays d\'Asie centrale.' : language === 'pt' ? 'Sim, exportamos para Rússia, Bielorrúsia, Cazaquistão e outros países da Ásia Central.' : language === 'es' ? 'Sí, exportamos a Rusia, Bielorrusia, Kazajstán y otros países de Asia Central.' : 'Sì, esportiamo in Russia, Bielorussia, Kazakistan e altri paesi dell\'Asia centrale.',
    },
    {
      category: 'regions',
      question: language === 'en' ? 'Do you export to South America?' : language === 'zh' ? '你们向南美出口吗?' : language === 'ar' ? 'هل تصدرون إلى أمريكا الجنوبية؟' : language === 'ru' ? 'Вы экспортируете в Южную Америку?' : language === 'fr' ? 'Exportez-vous vers l\'Amérique du Sud?' : language === 'pt' ? 'Você exporta para a América do Sul?' : language === 'es' ? '¿Exportan a América del Sur?' : 'Esportate in Sud America?',
      answer: language === 'en' ? 'Yes, we export to Brazil, Argentina, Peru, Chile and other South American countries.' : language === 'zh' ? '是的，我们向巴西、阿根廷、秘鲁、智利等南美国家出口。' : language === 'ar' ? 'نعم، نصدر إلى البرازيل والأرجنتين والبيرو وتشيلي ودول أمريكا الجنوبية الأخرى.' : language === 'ru' ? 'Да, мы экспортируем в Бразилию, Аргентину, Перу, Чили и другие страны Южной Америки.' : language === 'fr' ? 'Oui, nous exportons vers le Brésil, l\'Argentine, le Pérou, le Chili et d\'autres pays d\'Amérique du Sud.' : language === 'pt' ? 'Sim, exportamos para Brasil, Argentina, Peru, Chile e outros países da América do Sul.' : language === 'es' ? 'Sí, exportamos a Brasil, Argentina, Perú, Chile y otros países de América del Sur.' : 'Sì, esportiamo in Brasile, Argentina, Perù, Cile e altri paesi del Sud America.',
    },

    // 交易相关
    {
      category: 'trading',
      question: language === 'en' ? 'What are your payment terms?' : language === 'zh' ? '你们的支付方式是什么?' : language === 'ar' ? 'ما هي شروط الدفع الخاصة بك؟' : language === 'ru' ? 'Какие условия оплаты?' : language === 'fr' ? 'Quels sont vos conditions de paiement?' : language === 'pt' ? 'Quais são seus termos de pagamento?' : language === 'es' ? '¿Cuáles son sus términos de pago?' : 'Quali sono i vostri termini di pagamento?',
      answer: language === 'en' ? 'We accept wire transfer, letter of credit, 30% deposit + 70% before shipment, and other flexible payment methods.' : language === 'zh' ? '我们接受电汇、信用证、30%定金+70%见提单等灵活的支付方式。' : language === 'ar' ? 'نقبل التحويل البنكي وخطاب الاعتماد و 30٪ إيداع + 70٪ قبل الشحن وطرق دفع مرنة أخرى.' : language === 'ru' ? 'Мы принимаем банковский перевод, аккредитив, 30% предоплаты + 70% перед отправкой и другие гибкие способы оплаты.' : language === 'fr' ? 'Nous acceptons le virement bancaire, la lettre de crédit, 30% d\'acompte + 70% avant expédition et autres modes de paiement flexibles.' : language === 'pt' ? 'Aceitamos transferência bancária, carta de crédito, 30% de depósito + 70% antes do envio e outros métodos de pagamento flexíveis.' : language === 'es' ? 'Aceptamos transferencia bancaria, carta de crédito, 30% de depósito + 70% antes del envío y otros métodos de pago flexibles.' : 'Accettiamo bonifico bancario, lettera di credito, 30% deposito + 70% prima della spedizione e altri metodi di pagamento flessibili.',
    },
    {
      category: 'trading',
      question: language === 'en' ? 'What is the delivery time?' : language === 'zh' ? '交期是多久?' : language === 'ar' ? 'ما هو وقت التسليم؟' : language === 'ru' ? 'Какой срок доставки?' : language === 'fr' ? 'Quel est le délai de livraison?' : language === 'pt' ? 'Qual é o prazo de entrega?' : language === 'es' ? '¿Cuál es el plazo de entrega?' : 'Qual è il tempo di consegna?',
      answer: language === 'en' ? 'In-stock products ship immediately. Custom orders typically take 30-60 days depending on the product and quantity.' : language === 'zh' ? '现货产品可立即发货。定制产品通常需要30-60天，具体取决于产品和数量。' : language === 'ar' ? 'تُشحن المنتجات المتوفرة فوراً. عادة ما تستغرق الطلبات المخصصة 30-60 يوماً حسب المنتج والكمية.' : language === 'ru' ? 'Товары в наличии отправляются немедленно. Индивидуальные заказы обычно занимают 30-60 дней в зависимости от продукта и количества.' : language === 'fr' ? 'Les produits en stock sont expédiés immédiatement. Les commandes personnalisées prennent généralement 30 à 60 jours selon le produit et la quantité.' : language === 'pt' ? 'Os produtos em estoque são enviados imediatamente. Os pedidos personalizados geralmente levam 30-60 dias, dependendo do produto e da quantidade.' : language === 'es' ? 'Los productos en stock se envían inmediatamente. Los pedidos personalizados generalmente toman 30-60 días según el producto y la cantidad.' : 'I prodotti in stock vengono spediti immediatamente. Gli ordini personalizzati in genere richiedono 30-60 giorni a seconda del prodotto e della quantità.',
    },
    {
      category: 'trading',
      question: language === 'en' ? 'Do you provide technical support?' : language === 'zh' ? '你们提供技术支持吗?' : language === 'ar' ? 'هل تقدمون الدعم الفني؟' : language === 'ru' ? 'Вы предоставляете техническую поддержку?' : language === 'fr' ? 'Fournissez-vous un support technique?' : language === 'pt' ? 'Você fornece suporte técnico?' : language === 'es' ? '¿Proporcionan soporte técnico?' : 'Fornite supporto tecnico?',
      answer: language === 'en' ? 'Yes, we provide professional technical support for product selection, installation guidance, and troubleshooting.' : language === 'zh' ? '是的，我们提供专业的技术支持，包括产品选择、安装指导和故障排除。' : language === 'ar' ? 'نعم، نقدم دعماً فنياً احترافياً لاختيار المنتج والتوجيه التثبيت واستكشاف الأخطاء.' : language === 'ru' ? 'Да, мы предоставляем профессиональную техническую поддержку для выбора продукта, рекомендаций по установке и устранению неполадок.' : language === 'fr' ? 'Oui, nous fournissons un support technique professionnel pour la sélection de produits, les conseils d\'installation et le dépannage.' : language === 'pt' ? 'Sim, fornecemos suporte técnico profissional para seleção de produtos, orientação de instalação e solução de problemas.' : language === 'es' ? 'Sí, proporcionamos soporte técnico profesional para selección de productos, orientación de instalación y resolución de problemas.' : 'Sì, forniamo supporto tecnico professionale per la selezione dei prodotti, la guida all\'installazione e la risoluzione dei problemi.',
    },
  ];

  const categories = ['products', 'regions', 'trading'];
  const categoryTitles = {
    products: language === 'en' ? 'Products' : language === 'zh' ? '产品相关' : language === 'ar' ? 'المنتجات' : language === 'ru' ? 'Продукты' : language === 'fr' ? 'Produits' : language === 'pt' ? 'Produtos' : language === 'es' ? 'Productos' : 'Prodotti',
    regions: language === 'en' ? 'Regions' : language === 'zh' ? '地区相关' : language === 'ar' ? 'المناطق' : language === 'ru' ? 'Регионы' : language === 'fr' ? 'Régions' : language === 'pt' ? 'Regiões' : language === 'es' ? 'Regiones' : 'Regioni',
    trading: language === 'en' ? 'Trading' : language === 'zh' ? '交易相关' : language === 'ar' ? 'التداول' : language === 'ru' ? 'Торговля' : language === 'fr' ? 'Commerce' : language === 'pt' ? 'Comércio' : language === 'es' ? 'Comercio' : 'Commercio',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 md:py-20">
          <div className="container max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'en' ? 'Frequently Asked Questions' : language === 'zh' ? '常见问题' : language === 'ar' ? 'الأسئلة الشائعة' : language === 'ru' ? 'Часто задаваемые вопросы' : language === 'fr' ? 'Questions fréquemment posées' : language === 'pt' ? 'Perguntas Frequentes' : language === 'es' ? 'Preguntas Frecuentes' : 'Domande Frequenti'}
            </h1>
            <p className="text-lg text-slate-300">
              {language === 'en' ? 'Find answers to common questions about our products, services, and global operations.' : language === 'zh' ? '查找有关我们的产品、服务和全球运营的常见问题的答案。' : language === 'ar' ? 'ابحث عن إجابات للأسئلة الشائعة حول منتجاتنا وخدماتنا وعملياتنا العالمية.' : language === 'ru' ? 'Найдите ответы на часто задаваемые вопросы о наших продуктах, услугах и глобальных операциях.' : language === 'fr' ? 'Trouvez des réponses aux questions fréquemment posées sur nos produits, services et opérations mondiales.' : language === 'pt' ? 'Encontre respostas para perguntas frequentes sobre nossos produtos, serviços e operações globais.' : language === 'es' ? 'Encuentre respuestas a preguntas frecuentes sobre nuestros productos, servicios y operaciones globales.' : 'Trova risposte alle domande frequenti sui nostri prodotti, servizi e operazioni globali.'}
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-20">
          <div className="container max-w-4xl mx-auto px-4">
            {categories.map((category) => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                  {categoryTitles[category as keyof typeof categoryTitles]}
                </h2>

                <div className="space-y-4">
                  {faqs
                    .filter((faq) => faq.category === category)
                    .map((faq, index) => {
                      const id = `${category}-${index}`;
                      const isExpanded = expandedId === id;

                      return (
                        <div
                          key={id}
                          className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <button
                            onClick={() =>
                              setExpandedId(isExpanded ? null : id)
                            }
                            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-slate-900 text-left">
                              {faq.question}
                            </h3>
                            <ChevronDown
                              className={`w-5 h-5 text-orange-500 flex-shrink-0 ml-4 transition-transform ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                              <p className="text-slate-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 text-white py-12 md:py-16">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' ? 'Still have questions?' : language === 'zh' ? '还有其他问题吗?' : language === 'ar' ? 'هل لديك المزيد من الأسئلة؟' : language === 'ru' ? 'Все еще есть вопросы?' : language === 'fr' ? 'Vous avez d\'autres questions?' : language === 'pt' ? 'Ainda tem dúvidas?' : language === 'es' ? '¿Aún tienes preguntas?' : 'Hai ancora domande?'}
            </h2>
            <p className="text-slate-300 mb-8">
              {language === 'en' ? 'Contact us via WhatsApp or email for personalized assistance.' : language === 'zh' ? '通过WhatsApp或电子邮件与我们联系，获得个性化协助。' : language === 'ar' ? 'اتصل بنا عبر WhatsApp أو البريد الإلكتروني للحصول على مساعدة شخصية.' : language === 'ru' ? 'Свяжитесь с нами через WhatsApp или электронную почту для получения персональной помощи.' : language === 'fr' ? 'Contactez-nous via WhatsApp ou par e-mail pour une assistance personnalisée.' : language === 'pt' ? 'Entre em contato conosco via WhatsApp ou e-mail para assistência personalizada.' : language === 'es' ? 'Contáctenos a través de WhatsApp o correo electrónico para asistencia personalizada.' : 'Contattaci tramite WhatsApp o email per assistenza personalizzata.'}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
