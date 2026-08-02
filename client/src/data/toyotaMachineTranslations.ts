// Toyota Machine Translations
// Supports: Chinese, English, Spanish, Arabic, Russian, French, Portuguese, Italian

export const toyotaMachineTranslations = {
  // Machine Names
  names: {
    'SUV': {
      'zh': '越野车',
      'en': 'SUV',
      'es': 'SUV',
      'ar': 'سيارة رياضية متعددة الاستخدامات',
      'ru': 'Внедорожник',
      'fr': 'VUS',
      'pt': 'SUV',
      'it': 'SUV'
    },
    'Pickup Truck': {
      'zh': '皮卡车',
      'en': 'Pickup Truck',
      'es': 'Camioneta',
      'ar': 'شاحنة بيك آب',
      'ru': 'Пикап',
      'fr': 'Camionnette',
      'pt': 'Caminhonete',
      'it': 'Pickup'
    }
  },

  // Machine Types (for display)
  types: {
    'SUV': {
      'zh': '越野车',
      'en': 'SUV',
      'es': 'SUV',
      'ar': 'سيارة رياضية',
      'ru': 'Внедорожник',
      'fr': 'VUS',
      'pt': 'SUV',
      'it': 'SUV'
    },
    'Pickup Truck': {
      'zh': '皮卡车',
      'en': 'Pickup Truck',
      'es': 'Camioneta',
      'ar': 'شاحنة',
      'ru': 'Пикап',
      'fr': 'Camionnette',
      'pt': 'Caminhonete',
      'it': 'Pickup'
    }
  },

  // Specific machine translations
  machines: {
    'toyota-4runner': {
      'zh': '丰田 4Runner 越野车',
      'en': 'Toyota 4Runner SUV',
      'es': 'Toyota 4Runner SUV',
      'ar': 'تويوتا 4Runner سيارة رياضية',
      'ru': 'Toyota 4Runner Внедорожник',
      'fr': 'Toyota 4Runner VUS',
      'pt': 'Toyota 4Runner SUV',
      'it': 'Toyota 4Runner SUV'
    },
    'toyota-fortuner': {
      'zh': '丰田 Fortuner 越野车',
      'en': 'Toyota Fortuner SUV',
      'es': 'Toyota Fortuner SUV',
      'ar': 'تويوتا Fortuner سيارة رياضية',
      'ru': 'Toyota Fortuner Внедорожник',
      'fr': 'Toyota Fortuner VUS',
      'pt': 'Toyota Fortuner SUV',
      'it': 'Toyota Fortuner SUV'
    },
    'toyota-hilux-4x4': {
      'zh': '丰田 Hilux 4×4 皮卡车',
      'en': 'Toyota Hilux 4×4 Pickup Truck',
      'es': 'Toyota Hilux 4×4 Camioneta',
      'ar': 'تويوتا Hilux 4×4 شاحنة',
      'ru': 'Toyota Hilux 4×4 Пикап',
      'fr': 'Toyota Hilux 4×4 Camionnette',
      'pt': 'Toyota Hilux 4×4 Caminhonete',
      'it': 'Toyota Hilux 4×4 Pickup'
    },
    'toyota-lc70': {
      'zh': '丰田 Land Cruiser 70 越野车',
      'en': 'Toyota Land Cruiser 70 SUV',
      'es': 'Toyota Land Cruiser 70 SUV',
      'ar': 'تويوتا Land Cruiser 70 سيارة رياضية',
      'ru': 'Toyota Land Cruiser 70 Внедорожник',
      'fr': 'Toyota Land Cruiser 70 VUS',
      'pt': 'Toyota Land Cruiser 70 SUV',
      'it': 'Toyota Land Cruiser 70 SUV'
    },
    'toyota-prado': {
      'zh': '丰田 Prado 越野车',
      'en': 'Toyota Prado SUV',
      'es': 'Toyota Prado SUV',
      'ar': 'تويوتا Prado سيارة رياضية',
      'ru': 'Toyota Prado Внедорожник',
      'fr': 'Toyota Prado VUS',
      'pt': 'Toyota Prado SUV',
      'it': 'Toyota Prado SUV'
    },
    'toyota-tacoma-4x4': {
      'zh': '丰田 Tacoma 4×4 皮卡车',
      'en': 'Toyota Tacoma 4×4 Pickup Truck',
      'es': 'Toyota Tacoma 4×4 Camioneta',
      'ar': 'تويوتا Tacoma 4×4 شاحنة',
      'ru': 'Toyota Tacoma 4×4 Пикап',
      'fr': 'Toyota Tacoma 4×4 Camionnette',
      'pt': 'Toyota Tacoma 4×4 Caminhonete',
      'it': 'Toyota Tacoma 4×4 Pickup'
    },
    'toyota-tundra': {
      'zh': '丰田 Tundra 皮卡车',
      'en': 'Toyota Tundra Pickup Truck',
      'es': 'Toyota Tundra Camioneta',
      'ar': 'تويوتا Tundra شاحنة',
      'ru': 'Toyota Tundra Пикап',
      'fr': 'Toyota Tundra Camionnette',
      'pt': 'Toyota Tundra Caminhonete',
      'it': 'Toyota Tundra Pickup'
    }
  }
};

export function getTranslatedToyotaMachineName(machineId: string, language: string = 'en'): string {
  const translation = toyotaMachineTranslations.machines[machineId as keyof typeof toyotaMachineTranslations.machines];
  if (!translation) return machineId;
  return translation[language as keyof typeof translation] || translation['en'];
}

export function getTranslatedToyotaMachineType(machineType: string, language: string = 'en'): string {
  const translation = toyotaMachineTranslations.types[machineType as keyof typeof toyotaMachineTranslations.types];
  if (!translation) return machineType;
  return translation[language as keyof typeof translation] || translation['en'];
}

export function getTranslatedToyotaMachineShortDesc(machineId: string, language: string = 'en'): string {
  // Return short description based on machine type
  const machineType = getMachineTypeById(machineId);
  if (machineType === 'SUV') {
    const descriptions: Record<string, Record<string, string>> = {
      'zh': { 'SUV': '高性能越野车，适合极端地形和家庭冒险' },
      'en': { 'SUV': 'High-performance SUV for extreme terrain and family adventures' },
      'es': { 'SUV': 'SUV de alto rendimiento para terrenos extremos y aventuras familiares' },
      'ar': { 'SUV': 'سيارة رياضية عالية الأداء للتضاريس القاسية والمغامرات العائلية' },
      'ru': { 'SUV': 'Высокопроизводительный внедорожник для экстремальной местности и семейных приключений' },
      'fr': { 'SUV': 'VUS haute performance pour terrains extrêmes et aventures familiales' },
      'pt': { 'SUV': 'SUV de alto desempenho para terrenos extremos e aventuras familiares' },
      'it': { 'SUV': 'SUV ad alte prestazioni per terreni estremi e avventure familiari' }
    };
    return descriptions[language]?.['SUV'] || descriptions['en']['SUV'];
  } else if (machineType === 'Pickup Truck') {
    const descriptions: Record<string, Record<string, string>> = {
      'zh': { 'Pickup Truck': '重型皮卡车，适合建筑和农业工作' },
      'en': { 'Pickup Truck': 'Heavy-duty pickup truck for construction and agriculture' },
      'es': { 'Pickup Truck': 'Camioneta de servicio pesado para construcción y agricultura' },
      'ar': { 'Pickup Truck': 'شاحنة بيك آب ثقيلة للبناء والزراعة' },
      'ru': { 'Pickup Truck': 'Тяжелый пикап для строительства и сельского хозяйства' },
      'fr': { 'Pickup Truck': 'Camionnette de service lourd pour la construction et l\'agriculture' },
      'pt': { 'Pickup Truck': 'Caminhonete de serviço pesado para construção e agricultura' },
      'it': { 'Pickup Truck': 'Pickup di servizio pesante per costruzione e agricoltura' }
    };
    return descriptions[language]?.['Pickup Truck'] || descriptions['en']['Pickup Truck'];
  }
  return '';
}

export function getTranslatedToyotaMachineDescription(machineId: string, language: string = 'en'): string {
  // Return full description based on machine ID
  const descriptions: Record<string, Record<string, string>> = {
    'toyota-4runner': {
      'zh': '丰田 4Runner 越野车。高级越野车，适合冒险和探险。发动机：4.0L V6（215 kW）。变速箱：自动。座位：7-8人。油箱：87L。完美适合极端地形和家庭冒险。',
      'en': 'Toyota 4Runner SUV. Premium off-road SUV for adventure and exploration. Engine: 4.0L V6 (215 kW). Transmission: Automatic. Seating: 7-8 passengers. Fuel Tank: 87L. Perfect for extreme terrain and family adventures.',
      'es': 'Toyota 4Runner SUV. SUV todoterreno premium para aventura y exploración. Motor: V6 de 4.0L (215 kW). Transmisión: Automática. Asientos: 7-8 pasajeros. Tanque de combustible: 87L. Perfecto para terrenos extremos y aventuras familiares.',
      'ar': 'تويوتا 4Runner سيارة رياضية. سيارة رياضية فاخرة للطرق الوعرة للمغامرة والاستكشاف. المحرك: V6 بسعة 4.0 لتر (215 كيلو واط). ناقل الحركة: أوتوماتيكي. المقاعد: 7-8 ركاب. خزان الوقود: 87 لتر. مثالي للتضاريس القاسية والمغامرات العائلية.',
      'ru': 'Toyota 4Runner Внедорожник. Премиум внедорожник для приключений и исследований. Двигатель: V6 объемом 4,0 л (215 кВт). Коробка передач: Автоматическая. Посадка: 7-8 пассажиров. Топливный бак: 87 л. Идеален для экстремальной местности и семейных приключений.',
      'fr': 'Toyota 4Runner VUS. VUS haut de gamme tout-terrain pour l\'aventure et l\'exploration. Moteur: V6 4.0L (215 kW). Transmission: Automatique. Sièges: 7-8 passagers. Réservoir de carburant: 87L. Parfait pour les terrains extrêmes et les aventures familiales.',
      'pt': 'Toyota 4Runner SUV. SUV premium para aventura e exploração. Motor: V6 de 4.0L (215 kW). Transmissão: Automática. Assentos: 7-8 passageiros. Tanque de combustível: 87L. Perfeito para terrenos extremos e aventuras familiares.',
      'it': 'Toyota 4Runner SUV. SUV premium fuoristrada per avventura ed esplorazione. Motore: V6 4.0L (215 kW). Trasmissione: Automatica. Posti a sedere: 7-8 passeggeri. Serbatoio carburante: 87L. Perfetto per terreni estremi e avventure familiari.'
    },
    'toyota-fortuner': {
      'zh': '丰田 Fortuner 越野车。中型越野车，适合家庭和商业用途。发动机：2.8L 柴油（130 kW）。变速箱：自动。座位：7人。油箱：80L。适合东南亚市场和崎岖地形。',
      'en': 'Toyota Fortuner SUV. Mid-size SUV for family and commercial use. Engine: 2.8L Diesel (130 kW). Transmission: Automatic. Seating: 7 passengers. Fuel Tank: 80L. Ideal for Southeast Asian markets and rugged terrain.',
      'es': 'Toyota Fortuner SUV. SUV de tamaño medio para uso familiar y comercial. Motor: Diésel de 2.8L (130 kW). Transmisión: Automática. Asientos: 7 pasajeros. Tanque de combustible: 80L. Ideal para mercados del sudeste asiático y terrenos accidentados.',
      'ar': 'تويوتا Fortuner سيارة رياضية. سيارة رياضية متوسطة الحجم للاستخدام العائلي والتجاري. المحرك: ديزل بسعة 2.8 لتر (130 كيلو واط). ناقل الحركة: أوتوماتيكي. المقاعد: 7 ركاب. خزان الوقود: 80 لتر. مثالي لأسواق جنوب شرق آسيا والتضاريس الوعرة.',
      'ru': 'Toyota Fortuner Внедорожник. Среднеразмерный внедорожник для семьи и коммерческого использования. Двигатель: Дизель объемом 2,8 л (130 кВт). Коробка передач: Автоматическая. Посадка: 7 пассажиров. Топливный бак: 80 л. Идеален для рынков Юго-Восточной Азии и пересеченной местности.',
      'fr': 'Toyota Fortuner VUS. VUS de taille moyenne pour usage familial et commercial. Moteur: Diesel 2.8L (130 kW). Transmission: Automatique. Sièges: 7 passagers. Réservoir de carburant: 80L. Idéal pour les marchés d\'Asie du Sud-Est et les terrains accidentés.',
      'pt': 'Toyota Fortuner SUV. SUV de tamanho médio para uso familiar e comercial. Motor: Diesel de 2.8L (130 kW). Transmissão: Automática. Assentos: 7 passageiros. Tanque de combustível: 80L. Ideal para mercados do Sudeste Asiático e terrenos acidentados.',
      'it': 'Toyota Fortuner SUV. SUV di medie dimensioni per uso familiare e commerciale. Motore: Diesel 2.8L (130 kW). Trasmissione: Automatica. Posti a sedere: 7 passeggeri. Serbatoio carburante: 80L. Ideale per i mercati del Sud-Est asiatico e terreni accidentati.'
    },
    'toyota-hilux-4x4': {
      'zh': '丰田 Hilux 4×4 皮卡车。重型皮卡车，适合建筑和农业。发动机：2.8L 柴油（130 kW）。变速箱：手动/自动。载重：1000 kg。油箱：80L。完美适合恶劣工作条件。',
      'en': 'Toyota Hilux 4×4 Pickup Truck. Heavy-duty pickup truck for construction and agriculture. Engine: 2.8L Diesel (130 kW). Transmission: Manual/Automatic. Payload: 1000 kg. Fuel Tank: 80L. Perfect for tough working conditions.',
      'es': 'Toyota Hilux 4×4 Camioneta. Camioneta de servicio pesado para construcción y agricultura. Motor: Diésel de 2.8L (130 kW). Transmisión: Manual/Automática. Carga útil: 1000 kg. Tanque de combustible: 80L. Perfecto para condiciones de trabajo difíciles.',
      'ar': 'تويوتا Hilux 4×4 شاحنة. شاحنة بيك آب ثقيلة للبناء والزراعة. المحرك: ديزل بسعة 2.8 لتر (130 كيلو واط). ناقل الحركة: يدوي/أوتوماتيكي. الحمولة: 1000 كجم. خزان الوقود: 80 لتر. مثالي للظروف العملية الصعبة.',
      'ru': 'Toyota Hilux 4×4 Пикап. Тяжелый пикап для строительства и сельского хозяйства. Двигатель: Дизель объемом 2,8 л (130 кВт). Коробка передач: Механическая/Автоматическая. Грузоподъемность: 1000 кг. Топливный бак: 80 л. Идеален для сложных рабочих условий.',
      'fr': 'Toyota Hilux 4×4 Camionnette. Camionnette de service lourd pour la construction et l\'agriculture. Moteur: Diesel 2.8L (130 kW). Transmission: Manuelle/Automatique. Charge utile: 1000 kg. Réservoir de carburant: 80L. Parfait pour les conditions de travail difficiles.',
      'pt': 'Toyota Hilux 4×4 Caminhonete. Caminhonete de serviço pesado para construção e agricultura. Motor: Diesel de 2.8L (130 kW). Transmissão: Manual/Automática. Carga útil: 1000 kg. Tanque de combustível: 80L. Perfeito para condições de trabalho difíceis.',
      'it': 'Toyota Hilux 4×4 Pickup. Pickup di servizio pesante per costruzione e agricoltura. Motore: Diesel 2.8L (130 kW). Trasmissione: Manuale/Automatica. Carico utile: 1000 kg. Serbatoio carburante: 80L. Perfetto per condizioni di lavoro difficili.'
    },
    'toyota-lc70': {
      'zh': '丰田 Land Cruiser 70 越野车。经典越野车，具有传奇般的可靠性。发动机：4.0L V6（155 kW）。变速箱：手动。座位：5-7人。油箱：85L。完美适合极端越野探险。',
      'en': 'Toyota Land Cruiser 70 SUV. Classic off-road SUV with legendary reliability. Engine: 4.0L V6 (155 kW). Transmission: Manual. Seating: 5-7 passengers. Fuel Tank: 85L. Perfect for extreme off-road expeditions.',
      'es': 'Toyota Land Cruiser 70 SUV. SUV todoterreno clásico con confiabilidad legendaria. Motor: V6 de 4.0L (155 kW). Transmisión: Manual. Asientos: 5-7 pasajeros. Tanque de combustible: 85L. Perfecto para expediciones todoterreno extremas.',
      'ar': 'تويوتا Land Cruiser 70 سيارة رياضية. سيارة رياضية كلاسيكية للطرق الوعرة بموثوقية أسطورية. المحرك: V6 بسعة 4.0 لتر (155 كيلو واط). ناقل الحركة: يدوي. المقاعد: 5-7 ركاب. خزان الوقود: 85 لتر. مثالي للحملات الاستكشافية الوعرة القاسية.',
      'ru': 'Toyota Land Cruiser 70 Внедорожник. Классический внедорожник с легендарной надежностью. Двигатель: V6 объемом 4,0 л (155 кВт). Коробка передач: Механическая. Посадка: 5-7 пассажиров. Топливный бак: 85 л. Идеален для экстремальных внедорожных экспедиций.',
      'fr': 'Toyota Land Cruiser 70 VUS. VUS tout-terrain classique avec fiabilité légendaire. Moteur: V6 4.0L (155 kW). Transmission: Manuelle. Sièges: 5-7 passagers. Réservoir de carburant: 85L. Parfait pour les expéditions tout-terrain extrêmes.',
      'pt': 'Toyota Land Cruiser 70 SUV. SUV clássico para aventura com confiabilidade lendária. Motor: V6 de 4.0L (155 kW). Transmissão: Manual. Assentos: 5-7 passageiros. Tanque de combustível: 85L. Perfeito para expedições extremas para aventura.',
      'it': 'Toyota Land Cruiser 70 SUV. SUV fuoristrada classico con affidabilità leggendaria. Motore: V6 4.0L (155 kW). Trasmissione: Manuale. Posti a sedere: 5-7 passeggeri. Serbatoio carburante: 85L. Perfetto per spedizioni fuoristrada estreme.'
    },
    'toyota-prado': {
      'zh': '丰田 Prado 越野车。高级中型越野车，适合家庭和冒险。发动机：2.7L 汽油（120 kW）。变速箱：自动。座位：7人。油箱：87L。适合家庭旅行和轻度越野。',
      'en': 'Toyota Prado SUV. Premium mid-size SUV for family and adventure. Engine: 2.7L Petrol (120 kW). Transmission: Automatic. Seating: 7 passengers. Fuel Tank: 87L. Ideal for family travel and light off-roading.',
      'es': 'Toyota Prado SUV. SUV de tamaño medio premium para familia y aventura. Motor: Gasolina de 2.7L (120 kW). Transmisión: Automática. Asientos: 7 pasajeros. Tanque de combustible: 87L. Ideal para viajes familiares y aventura ligera.',
      'ar': 'تويوتا Prado سيارة رياضية. سيارة رياضية فاخرة متوسطة الحجم للعائلة والمغامرة. المحرك: بنزين بسعة 2.7 لتر (120 كيلو واط). ناقل الحركة: أوتوماتيكي. المقاعد: 7 ركاب. خزان الوقود: 87 لتر. مثالي لرحلات العائلة والمغامرة الخفيفة.',
      'ru': 'Toyota Prado Внедорожник. Премиум среднеразмерный внедорожник для семьи и приключений. Двигатель: Бензин объемом 2,7 л (120 кВт). Коробка передач: Автоматическая. Посадка: 7 пассажиров. Топливный бак: 87 л. Идеален для семейных путешествий и легкого внедорожья.',
      'fr': 'Toyota Prado VUS. VUS de taille moyenne haut de gamme pour famille et aventure. Moteur: Essence 2.7L (120 kW). Transmission: Automatique. Sièges: 7 passagers. Réservoir de carburant: 87L. Idéal pour les voyages en famille et l\'aventure légère.',
      'pt': 'Toyota Prado SUV. SUV premium de tamanho médio para família e aventura. Motor: Gasolina de 2.7L (120 kW). Transmissão: Automática. Assentos: 7 passageiros. Tanque de combustível: 87L. Ideal para viagens familiares e aventura leve.',
      'it': 'Toyota Prado SUV. SUV premium di medie dimensioni per famiglia e avventura. Motore: Benzina 2.7L (120 kW). Trasmissione: Automatica. Posti a sedere: 7 passeggeri. Serbatoio carburante: 87L. Ideale per viaggi familiari e avventura leggera.'
    },
    'toyota-tacoma-4x4': {
      'zh': '丰田 Tacoma 4×4 皮卡车。中型皮卡车，适合工作和冒险。发动机：3.5L V6（205 kW）。变速箱：自动。载重：1200 kg。油箱：80L。完美适合建筑和户外爱好者。',
      'en': 'Toyota Tacoma 4×4 Pickup Truck. Mid-size pickup truck for work and adventure. Engine: 3.5L V6 (205 kW). Transmission: Automatic. Payload: 1200 kg. Fuel Tank: 80L. Perfect for construction and outdoor enthusiasts.',
      'es': 'Toyota Tacoma 4×4 Camioneta. Camioneta de tamaño medio para trabajo y aventura. Motor: V6 de 3.5L (205 kW). Transmisión: Automática. Carga útil: 1200 kg. Tanque de combustible: 80L. Perfecto para construcción y entusiastas del aire libre.',
      'ar': 'تويوتا Tacoma 4×4 شاحنة. شاحنة بيك آب متوسطة الحجم للعمل والمغامرة. المحرك: V6 بسعة 3.5 لتر (205 كيلو واط). ناقل الحركة: أوتوماتيكي. الحمولة: 1200 كجم. خزان الوقود: 80 لتر. مثالي للبناء وعشاق الأنشطة الخارجية.',
      'ru': 'Toyota Tacoma 4×4 Пикап. Среднеразмерный пикап для работы и приключений. Двигатель: V6 объемом 3,5 л (205 кВт). Коробка передач: Автоматическая. Грузоподъемность: 1200 кг. Топливный бак: 80 л. Идеален для строительства и любителей активного отдыха.',
      'fr': 'Toyota Tacoma 4×4 Camionnette. Camionnette de taille moyenne pour le travail et l\'aventure. Moteur: V6 3.5L (205 kW). Transmission: Automatique. Charge utile: 1200 kg. Réservoir de carburant: 80L. Parfait pour la construction et les amateurs de plein air.',
      'pt': 'Toyota Tacoma 4×4 Caminhonete. Caminhonete de tamanho médio para trabalho e aventura. Motor: V6 de 3.5L (205 kW). Transmissão: Automática. Carga útil: 1200 kg. Tanque de combustível: 80L. Perfeito para construção e entusiastas do ar livre.',
      'it': 'Toyota Tacoma 4×4 Pickup. Pickup di medie dimensioni per lavoro e avventura. Motore: V6 3.5L (205 kW). Trasmissione: Automatica. Carico utile: 1200 kg. Serbatoio carburante: 80L. Perfetto per la costruzione e gli appassionati di attività all\'aperto.'
    },
    'toyota-tundra': {
      'zh': '丰田 Tundra 皮卡车。全尺寸重型皮卡车。发动机：5.7L V8（280 kW）。变速箱：自动。载重：1600 kg。油箱：100L。完美适合要求苛刻的工作和重型拖曳。',
      'en': 'Toyota Tundra Pickup Truck. Full-size heavy-duty pickup truck. Engine: 5.7L V8 (280 kW). Transmission: Automatic. Payload: 1600 kg. Fuel Tank: 100L. Perfect for demanding work and heavy towing.',
      'es': 'Toyota Tundra Camioneta. Camioneta de servicio pesado de tamaño completo. Motor: V8 de 5.7L (280 kW). Transmisión: Automática. Carga útil: 1600 kg. Tanque de combustible: 100L. Perfecto para trabajo exigente y remolque pesado.',
      'ar': 'تويوتا Tundra شاحنة. شاحنة بيك آب ثقيلة بحجم كامل. المحرك: V8 بسعة 5.7 لتر (280 كيلو واط). ناقل الحركة: أوتوماتيكي. الحمولة: 1600 كجم. خزان الوقود: 100 لتر. مثالي للعمل المتطلب والسحب الثقيل.',
      'ru': 'Toyota Tundra Пикап. Полноразмерный тяжелый пикап. Двигатель: V8 объемом 5,7 л (280 кВт). Коробка передач: Автоматическая. Грузоподъемность: 1600 кг. Топливный бак: 100 л. Идеален для сложной работы и тяжелого буксирования.',
      'fr': 'Toyota Tundra Camionnette. Camionnette de service lourd de taille complète. Moteur: V8 5.7L (280 kW). Transmission: Automatique. Charge utile: 1600 kg. Réservoir de carburant: 100L. Parfait pour le travail exigeant et le remorquage lourd.',
      'pt': 'Toyota Tundra Caminhonete. Caminhonete de serviço pesado de tamanho completo. Motor: V8 de 5.7L (280 kW). Transmissão: Automática. Carga útil: 1600 kg. Tanque de combustível: 100L. Perfeito para trabalho exigente e reboque pesado.',
      'it': 'Toyota Tundra Pickup. Pickup di servizio pesante a grandezza naturale. Motore: V8 5.7L (280 kW). Trasmissione: Automatica. Carico utile: 1600 kg. Serbatoio carburante: 100L. Perfetto per lavoro impegnativo e traino pesante.'
    }
  };
  const translation = descriptions[machineId as keyof typeof descriptions];
  if (!translation) return '';
  return translation[language as keyof typeof translation] || translation['en'];
}

function getMachineTypeById(machineId: string): string {
  const typeMap: Record<string, string> = {
    'toyota-4runner': 'SUV',
    'toyota-fortuner': 'SUV',
    'toyota-hilux-4x4': 'Pickup Truck',
    'toyota-lc70': 'SUV',
    'toyota-prado': 'SUV',
    'toyota-tacoma-4x4': 'Pickup Truck',
    'toyota-tundra': 'Pickup Truck'
  };
  return typeMap[machineId] || 'Vehicle';
}
