import type { Language } from './translations';

type AboutPageCopy = {
  companyHeading: string;
  portfolio: string;
  customers: string;
  stats: Array<{ title: string; sub: string }>;
  offices: Record<'beijing' | 'conakry' | 'antananarivo' | 'hongkong' | 'shandong', string>;
};

export const aboutPageTranslations: Record<Language, AboutPageCopy> = {
  en: {
    companyHeading: 'VXZO: Global\nMachinery Trading',
    portfolio: 'Our product portfolio covers construction and transport needs — from CAT and Komatsu excavators to Sinotruk HOWO dump trucks, from Cummins engines to Weichai power units. We supply complete machines, wear parts, and components.',
    customers: 'Our customers span more than 50 countries across Africa, the Middle East, Southeast Asia, South America, and Central Asia. We support business growth with competitive pricing, reliable quality, and professional service.',
    stats: [{ title: '50+ Countries', sub: 'Global export reach across 5 continents' }, { title: 'OEM Quality', sub: 'Genuine and certified aftermarket parts' }, { title: '10+ Years', sub: 'Experience in machinery export' }, { title: '500+ Models', sub: 'Comprehensive product catalog' }],
    offices: { beijing: 'Beijing, China', conakry: 'Conakry, Guinea', antananarivo: 'Antananarivo, Madagascar', hongkong: 'Hong Kong', shandong: 'Shandong Province, China' },
  },
  zh: {
    companyHeading: 'VXZO：全球\n工程机械贸易',
    portfolio: '我们的产品组合覆盖工程和运输领域的全方位需求——从卡特彼勒和小松挖掘机，到中国重汽 HOWO 自卸车；从康明斯发动机到潍柴动力总成。我们供应整机、易损件和各类部件。',
    customers: '我们的客户遍及非洲、中东、东南亚、南美和中亚等地区的 50 多个国家。我们以具有竞争力的价格、可靠的质量和专业服务支持您的业务发展。',
    stats: [{ title: '50+ 个国家', sub: '业务覆盖全球五大洲' }, { title: 'OEM 品质', sub: '正品及认证售后配件' }, { title: '10+ 年', sub: '工程机械出口经验' }, { title: '500+ 个型号', sub: '完善的产品目录' }],
    offices: { beijing: '中国北京', conakry: '几内亚科纳克里', antananarivo: '马达加斯加塔那那利佛', hongkong: '中国香港', shandong: '中国山东省' },
  },
  es: {
    companyHeading: 'VXZO: Comercio Global de\nMaquinaria',
    portfolio: 'Nuestra cartera cubre las necesidades de construcción y transporte: desde excavadoras CAT y Komatsu hasta volquetes Sinotruk HOWO, y desde motores Cummins hasta unidades de potencia Weichai. Suministramos máquinas completas, piezas de desgaste y componentes.',
    customers: 'Nuestros clientes se encuentran en más de 50 países de África, Oriente Medio, Sudeste Asiático, Sudamérica y Asia Central. Apoyamos el crecimiento de su negocio con precios competitivos, calidad fiable y servicio profesional.',
    stats: [{ title: '50+ países', sub: 'Alcance de exportación en 5 continentes' }, { title: 'Calidad OEM', sub: 'Piezas genuinas y certificadas de posventa' }, { title: '10+ años', sub: 'Experiencia en exportación de maquinaria' }, { title: '500+ modelos', sub: 'Catálogo integral de productos' }],
    offices: { beijing: 'Pekín, China', conakry: 'Conakry, Guinea', antananarivo: 'Antananarivo, Madagascar', hongkong: 'Hong Kong', shandong: 'Provincia de Shandong, China' },
  },
  fr: {
    companyHeading: 'VXZO : Commerce Mondial de\nMachines',
    portfolio: 'Notre portefeuille couvre les besoins de construction et de transport, des excavatrices CAT et Komatsu aux bennes Sinotruk HOWO, des moteurs Cummins aux groupes motopropulseurs Weichai. Nous fournissons des machines complètes, des pièces d’usure et des composants.',
    customers: 'Nos clients sont présents dans plus de 50 pays en Afrique, au Moyen-Orient, en Asie du Sud-Est, en Amérique du Sud et en Asie centrale. Nous soutenons leur croissance avec des prix compétitifs, une qualité fiable et un service professionnel.',
    stats: [{ title: '50+ pays', sub: 'Exportation sur 5 continents' }, { title: 'Qualité OEM', sub: 'Pièces d’origine et de rechange certifiées' }, { title: '10+ ans', sub: 'Expérience en exportation de machines' }, { title: '500+ modèles', sub: 'Catalogue produits complet' }],
    offices: { beijing: 'Pékin, Chine', conakry: 'Conakry, Guinée', antananarivo: 'Antananarivo, Madagascar', hongkong: 'Hong Kong', shandong: 'Province du Shandong, Chine' },
  },
  de: {
    companyHeading: 'VXZO: Globaler Handel mit\nBaumaschinen',
    portfolio: 'Unser Portfolio deckt den Bau- und Transportbedarf ab — von CAT- und Komatsu-Baggern bis zu Sinotruk-HOWO-Kippern, von Cummins-Motoren bis zu Weichai-Antriebseinheiten. Wir liefern komplette Maschinen, Verschleißteile und Komponenten.',
    customers: 'Unsere Kunden befinden sich in mehr als 50 Ländern in Afrika, dem Nahen Osten, Südostasien, Südamerika und Zentralasien. Mit wettbewerbsfähigen Preisen, zuverlässiger Qualität und professionellem Service unterstützen wir ihr Wachstum.',
    stats: [{ title: '50+ Länder', sub: 'Exportreichweite auf 5 Kontinenten' }, { title: 'OEM-Qualität', sub: 'Originale und zertifizierte Ersatzteile' }, { title: '10+ Jahre', sub: 'Erfahrung im Maschinenexport' }, { title: '500+ Modelle', sub: 'Umfassender Produktkatalog' }],
    offices: { beijing: 'Peking, China', conakry: 'Conakry, Guinea', antananarivo: 'Antananarivo, Madagaskar', hongkong: 'Hongkong', shandong: 'Provinz Shandong, China' },
  },
  pt: {
    companyHeading: 'VXZO: Comércio Global de\nMáquinas',
    portfolio: 'Nosso portfólio cobre necessidades de construção e transporte — de escavadeiras CAT e Komatsu a caminhões basculantes Sinotruk HOWO, de motores Cummins a unidades de potência Weichai. Fornecemos máquinas completas, peças de desgaste e componentes.',
    customers: 'Nossos clientes estão em mais de 50 países na África, Oriente Médio, Sudeste Asiático, América do Sul e Ásia Central. Apoiamos o crescimento de seus negócios com preços competitivos, qualidade confiável e serviço profissional.',
    stats: [{ title: '50+ países', sub: 'Alcance de exportação em 5 continentes' }, { title: 'Qualidade OEM', sub: 'Peças genuínas e certificadas de reposição' }, { title: '10+ anos', sub: 'Experiência em exportação de máquinas' }, { title: '500+ modelos', sub: 'Catálogo abrangente de produtos' }],
    offices: { beijing: 'Pequim, China', conakry: 'Conacri, Guiné', antananarivo: 'Antananarivo, Madagáscar', hongkong: 'Hong Kong', shandong: 'Província de Shandong, China' },
  },
  ru: {
    companyHeading: 'VXZO: Мировая торговля\nтехникой',
    portfolio: 'Наш ассортимент охватывает потребности строительства и транспорта: от экскаваторов CAT и Komatsu до самосвалов Sinotruk HOWO, от двигателей Cummins до силовых агрегатов Weichai. Мы поставляем готовые машины, быстроизнашивающиеся детали и компоненты.',
    customers: 'Наши клиенты представлены более чем в 50 странах Африки, Ближнего Востока, Юго-Восточной Азии, Южной Америки и Центральной Азии. Мы поддерживаем их рост конкурентными ценами, надёжным качеством и профессиональным сервисом.',
    stats: [{ title: '50+ стран', sub: 'Экспорт на 5 континентов' }, { title: 'Качество OEM', sub: 'Оригинальные и сертифицированные запчасти' }, { title: '10+ лет', sub: 'Опыт экспорта техники' }, { title: '500+ моделей', sub: 'Полный каталог продукции' }],
    offices: { beijing: 'Пекин, Китай', conakry: 'Конакри, Гвинея', antananarivo: 'Антананариву, Мадагаскар', hongkong: 'Гонконг', shandong: 'Провинция Шаньдун, Китай' },
  },
  ja: {
    companyHeading: 'VXZO：グローバル\n建設機械貿易',
    portfolio: '当社の製品群は、CAT・小松の油圧ショベルからSinotruk HOWOのダンプトラック、CumminsエンジンからWeichaiの動力装置まで、建設・輸送分野の幅広いニーズを網羅しています。完成機、消耗部品、各種コンポーネントを供給しています。',
    customers: '当社のお客様は、アフリカ、中東、東南アジア、南米、中央アジアの50か国以上に広がっています。競争力のある価格、信頼できる品質、専門的なサービスで事業成長を支援します。',
    stats: [{ title: '50か国以上', sub: '5大陸を結ぶ輸出ネットワーク' }, { title: 'OEM品質', sub: '純正・認定アフターマーケット部品' }, { title: '10年以上', sub: '機械輸出の経験' }, { title: '500以上のモデル', sub: '包括的な製品カタログ' }],
    offices: { beijing: '中国・北京', conakry: 'ギニア・コナクリ', antananarivo: 'マダガスカル・アンタナナリボ', hongkong: '香港', shandong: '中国・山東省' },
  },
  ar: {
    companyHeading: 'VXZO: تجارة عالمية في\nالمعدات',
    portfolio: 'تغطي محفظة منتجاتنا احتياجات البناء والنقل، من حفارات CAT وKomatsu إلى شاحنات Sinotruk HOWO القلابة، ومن محركات Cummins إلى وحدات طاقة Weichai. نوفر المعدات الكاملة وقطع الاستهلاك والمكونات.',
    customers: 'ينتشر عملاؤنا في أكثر من 50 دولة في أفريقيا والشرق الأوسط وجنوب شرق آسيا وأمريكا الجنوبية وآسيا الوسطى. ندعم نمو أعمالهم بأسعار تنافسية وجودة موثوقة وخدمة احترافية.',
    stats: [{ title: 'أكثر من 50 دولة', sub: 'تغطية تصدير عبر 5 قارات' }, { title: 'جودة OEM', sub: 'قطع أصلية وبديلة معتمدة' }, { title: 'أكثر من 10 سنوات', sub: 'خبرة في تصدير المعدات' }, { title: 'أكثر من 500 طراز', sub: 'كتالوج منتجات شامل' }],
    offices: { beijing: 'بكين، الصين', conakry: 'كوناكري، غينيا', antananarivo: 'أنتاناناريفو، مدغشقر', hongkong: 'هونغ كونغ', shandong: 'مقاطعة شاندونغ، الصين' },
  },
  it: {
    companyHeading: 'VXZO: Commercio Globale di\nMacchinari',
    portfolio: 'Il nostro portafoglio copre le esigenze di costruzione e trasporto: dagli escavatori CAT e Komatsu agli autocarri ribaltabili Sinotruk HOWO, dai motori Cummins alle unità di potenza Weichai. Forniamo macchine complete, parti soggette a usura e componenti.',
    customers: 'I nostri clienti sono presenti in oltre 50 paesi in Africa, Medio Oriente, Sud-est asiatico, Sud America e Asia centrale. Sosteniamo la loro crescita con prezzi competitivi, qualità affidabile e servizio professionale.',
    stats: [{ title: '50+ paesi', sub: 'Copertura export in 5 continenti' }, { title: 'Qualità OEM', sub: 'Ricambi originali e aftermarket certificati' }, { title: '10+ anni', sub: 'Esperienza nell’esportazione di macchinari' }, { title: '500+ modelli', sub: 'Catalogo prodotti completo' }],
    offices: { beijing: 'Pechino, Cina', conakry: 'Conakry, Guinea', antananarivo: 'Antananarivo, Madagascar', hongkong: 'Hong Kong', shandong: 'Provincia dello Shandong, Cina' },
  },
};
