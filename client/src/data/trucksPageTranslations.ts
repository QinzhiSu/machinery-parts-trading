import type { Language } from './translations';

type TrucksPageBrandId = 'isuzu' | 'shacman' | 'sinotruk' | 'toyota' | 'cummins' | 'weichai';

export const trucksPageBrandDescriptions: Record<Language, Record<TrucksPageBrandId, string>> = {
  en: {
    isuzu: 'Japanese commercial vehicle manufacturer known for reliable trucks and diesel engines.',
    shacman: 'Leading Chinese heavy-duty truck manufacturer producing commercial vehicles for construction and logistics.',
    sinotruk: 'Leading Chinese heavy-duty truck manufacturer producing HOWO and other commercial vehicle brands.',
    toyota: 'Japanese automotive manufacturer known for reliable trucks and commercial vehicles.',
    cummins: 'Leading manufacturer of diesel and natural-gas engines for construction, mining, and power generation.',
    weichai: 'Leading Chinese diesel engine manufacturer for construction, mining, and power generation.',
  },
  zh: {
    isuzu: '日本商用车制造商，以可靠的卡车和柴油发动机著称。',
    shacman: '中国领先的重型卡车制造商，为工程和物流领域生产商用车辆。',
    sinotruk: '中国领先的重型卡车制造商，生产 HOWO 等商用车品牌。',
    toyota: '日本汽车制造商，以可靠的卡车和商用车著称。',
    cummins: '面向工程、采矿和发电领域的领先柴油及天然气发动机制造商。',
    weichai: '中国领先的柴油发动机制造商，服务于工程、采矿和发电领域。',
  },
  es: {
    isuzu: 'Fabricante japonés de vehículos comerciales, conocido por sus camiones y motores diésel fiables.',
    shacman: 'Fabricante chino líder de camiones pesados para construcción y logística.',
    sinotruk: 'Fabricante chino líder de camiones pesados que produce HOWO y otras marcas de vehículos comerciales.',
    toyota: 'Fabricante japonés de automóviles conocido por sus camiones y vehículos comerciales fiables.',
    cummins: 'Fabricante líder de motores diésel y de gas natural para construcción, minería y generación eléctrica.',
    weichai: 'Fabricante chino líder de motores diésel para construcción, minería y generación eléctrica.',
  },
  fr: {
    isuzu: 'Constructeur japonais de véhicules commerciaux, réputé pour ses camions et moteurs diesel fiables.',
    shacman: 'Fabricant chinois majeur de poids lourds pour la construction et la logistique.',
    sinotruk: 'Fabricant chinois majeur de poids lourds produisant HOWO et d’autres marques de véhicules commerciaux.',
    toyota: 'Constructeur automobile japonais réputé pour ses camions et véhicules commerciaux fiables.',
    cummins: 'Fabricant de premier plan de moteurs diesel et au gaz naturel pour la construction, les mines et la production d’énergie.',
    weichai: 'Fabricant chinois majeur de moteurs diesel pour la construction, les mines et la production d’énergie.',
  },
  de: {
    isuzu: 'Japanischer Hersteller von Nutzfahrzeugen, bekannt für zuverlässige Lastkraftwagen und Dieselmotoren.',
    shacman: 'Führender chinesischer Hersteller schwerer Lastkraftwagen für Bau und Logistik.',
    sinotruk: 'Führender chinesischer Hersteller schwerer Lastkraftwagen, der HOWO und weitere Nutzfahrzeugmarken produziert.',
    toyota: 'Japanischer Automobilhersteller, bekannt für zuverlässige Lastkraftwagen und Nutzfahrzeuge.',
    cummins: 'Führender Hersteller von Diesel- und Erdgasmotoren für Bau, Bergbau und Energieerzeugung.',
    weichai: 'Führender chinesischer Hersteller von Dieselmotoren für Bau, Bergbau und Energieerzeugung.',
  },
  pt: {
    isuzu: 'Fabricante japonês de veículos comerciais, conhecido por caminhões e motores diesel confiáveis.',
    shacman: 'Fabricante chinês líder de caminhões pesados para construção e logística.',
    sinotruk: 'Fabricante chinês líder de caminhões pesados que produz HOWO e outras marcas de veículos comerciais.',
    toyota: 'Fabricante japonês de automóveis conhecido por caminhões e veículos comerciais confiáveis.',
    cummins: 'Fabricante líder de motores a diesel e gás natural para construção, mineração e geração de energia.',
    weichai: 'Fabricante chinês líder de motores a diesel para construção, mineração e geração de energia.',
  },
  ru: {
    isuzu: 'Японский производитель коммерческих автомобилей, известный надёжными грузовиками и дизельными двигателями.',
    shacman: 'Ведущий китайский производитель тяжёлых грузовиков для строительства и логистики.',
    sinotruk: 'Ведущий китайский производитель тяжёлых грузовиков, выпускающий HOWO и другие марки коммерческих автомобилей.',
    toyota: 'Японский автопроизводитель, известный надёжными грузовиками и коммерческими автомобилями.',
    cummins: 'Ведущий производитель дизельных и газовых двигателей для строительства, горнодобывающей промышленности и энергетики.',
    weichai: 'Ведущий китайский производитель дизельных двигателей для строительства, горнодобывающей промышленности и энергетики.',
  },
  ja: {
    isuzu: '信頼性の高いトラックとディーゼルエンジンで知られる日本の商用車メーカーです。',
    shacman: '建設・物流向けの大型トラックを製造する中国有数のメーカーです。',
    sinotruk: 'HOWO をはじめとする商用車ブランドを製造する中国有数の大型トラックメーカーです。',
    toyota: '信頼性の高いトラックと商用車で知られる日本の自動車メーカーです。',
    cummins: '建設、鉱山、発電向けのディーゼル・天然ガスエンジンの有力メーカーです。',
    weichai: '建設、鉱山、発電向けのディーゼルエンジンを製造する中国有数のメーカーです。',
  },
  ar: {
    isuzu: 'شركة يابانية لصناعة المركبات التجارية، معروفة بشاحناتها ومحركات الديزل الموثوقة.',
    shacman: 'شركة صينية رائدة في تصنيع الشاحنات الثقيلة للبناء والخدمات اللوجستية.',
    sinotruk: 'شركة صينية رائدة في تصنيع الشاحنات الثقيلة، تنتج HOWO وغيرها من علامات المركبات التجارية.',
    toyota: 'شركة سيارات يابانية معروفة بشاحناتها ومركباتها التجارية الموثوقة.',
    cummins: 'شركة رائدة في تصنيع محركات الديزل والغاز الطبيعي للبناء والتعدين وتوليد الطاقة.',
    weichai: 'شركة صينية رائدة في تصنيع محركات الديزل للبناء والتعدين وتوليد الطاقة.',
  },
  it: {
    isuzu: 'Produttore giapponese di veicoli commerciali, noto per camion e motori diesel affidabili.',
    shacman: 'Produttore cinese leader di camion pesanti per edilizia e logistica.',
    sinotruk: 'Produttore cinese leader di camion pesanti che realizza HOWO e altri marchi di veicoli commerciali.',
    toyota: 'Produttore automobilistico giapponese noto per camion e veicoli commerciali affidabili.',
    cummins: 'Produttore leader di motori diesel e a gas naturale per edilizia, estrazione mineraria e generazione di energia.',
    weichai: 'Produttore cinese leader di motori diesel per edilizia, estrazione mineraria e generazione di energia.',
  },
};

export function getTranslatedTrucksPageBrandDescription(brandId: string, language: Language, fallback: string) {
  return trucksPageBrandDescriptions[language][brandId as TrucksPageBrandId] ?? fallback;
}
