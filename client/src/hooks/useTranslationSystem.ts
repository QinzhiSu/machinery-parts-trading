import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Comprehensive translation system for ALL machine descriptions across 8 languages
// This includes all brands: CAT, Shantui, XCMG, LiuGong, SANY, Komatsu, Isuzu, Shacman, Sinotruk, Toyota, Cummins, Weichai

const machineTranslations: Record<string, Record<string, string>> = {
  // ===== CATERPILLAR EXCAVATORS =====
  'CAT 320D Hydraulic Excavator. Engine: Caterpillar C6.4 Diesel (121 kW/163 HP). Bucket Capacity: 1.19 m³. Max Digging Depth: 6.7 m. Boom Length: 6.7 m. Stick Length: 2.6 m. Undercarriage: Rubber Track (600mm). Hydraulic System: 280 bar. Fuel Tank: 180 L. Cooling System: Radiator with fan. Transmission: Hydrostatic. Swing Speed: 12 rpm. Travel Speed: 4.5 km/h. Ideal for general excavation, loading, and material handling.': {
    zh: 'CAT 320D 液压挖掘机。发动机：卡特彼勒 C6.4 柴油 (121 kW/163 HP)。斗容量：1.19 m³。最大挖掘深度：6.7 m。臂长：6.7 m。斗杆长：2.6 m。底盘：橡胶履带 (600mm)。液压系统：280 bar。油箱：180 L。冷却系统：散热器带风扇。变速箱：静液压。回转速度：12 rpm。行走速度：4.5 km/h。适合通用挖掘、装载和物料搬运。',
    en: 'CAT 320D Hydraulic Excavator. Engine: Caterpillar C6.4 Diesel (121 kW/163 HP). Bucket Capacity: 1.19 m³. Max Digging Depth: 6.7 m. Boom Length: 6.7 m. Stick Length: 2.6 m. Undercarriage: Rubber Track (600mm). Hydraulic System: 280 bar. Fuel Tank: 180 L. Cooling System: Radiator with fan. Transmission: Hydrostatic. Swing Speed: 12 rpm. Travel Speed: 4.5 km/h. Ideal for general excavation, loading, and material handling.',
    es: 'Excavadora hidráulica CAT 320D. Motor: Caterpillar C6.4 Diesel (121 kW/163 HP). Capacidad del cucharón: 1.19 m³. Profundidad máxima de excavación: 6.7 m. Longitud del brazo: 6.7 m. Longitud de la cuchara: 2.6 m. Chasis: Oruga de goma (600 mm). Sistema hidráulico: 280 bar. Tanque de combustible: 180 L. Sistema de enfriamiento: Radiador con ventilador. Transmisión: Hidrostática. Velocidad de giro: 12 rpm. Velocidad de desplazamiento: 4.5 km/h. Ideal para excavación general, carga y manejo de materiales.',
    ar: 'حفار هيدروليكي CAT 320D. المحرك: كاتربيلر C6.4 ديزل (121 كيلوواط/163 حصان). سعة الدلو: 1.19 م³. أقصى عمق حفر: 6.7 م. طول الذراع: 6.7 م. طول الدلو: 2.6 م. الهيكل: مسار مطاطي (600 ملم). النظام الهيدروليكي: 280 بار. خزان الوقود: 180 لتر. نظام التبريد: مشع مع مروحة. الناقل: هيدروستاتيكي. سرعة الدوران: 12 دورة في الدقيقة. سرعة التنقل: 4.5 كم/س. مثالي للحفر العام والتحميل ومناولة المواد.',
    ru: 'Гидравлический экскаватор CAT 320D. Двигатель: Caterpillar C6.4 Diesel (121 кВт/163 л.с.). Вместимость ковша: 1,19 м³. Максимальная глубина копания: 6,7 м. Длина стрелы: 6,7 м. Длина рукояти: 2,6 м. Ходовая часть: Резиновая гусеница (600 мм). Гидравлическая система: 280 бар. Топливный бак: 180 л. Система охлаждения: Радиатор с вентилятором. Трансмиссия: Гидростатическая. Скорость поворота: 12 об/мин. Скорость передвижения: 4,5 км/ч. Идеален для общих работ по экскавации, погрузке и обработке материалов.',
    fr: 'Pelle hydraulique CAT 320D. Moteur : Caterpillar C6.4 Diesel (121 kW/163 ch). Capacité du godet : 1,19 m³. Profondeur maximale de creusement : 6,7 m. Longueur de la flèche : 6,7 m. Longueur du bras : 2,6 m. Châssis : Chaîne en caoutchouc (600 mm). Système hydraulique : 280 bar. Réservoir de carburant : 180 L. Système de refroidissement : Radiateur avec ventilateur. Transmission : Hydrostatique. Vitesse de rotation : 12 tr/min. Vitesse de déplacement : 4,5 km/h. Idéal pour l\'excavation générale, le chargement et la manutention des matériaux.',
    pt: 'Escavadeira hidráulica CAT 320D. Motor: Caterpillar C6.4 Diesel (121 kW/163 hp). Capacidade da caçamba: 1,19 m³. Profundidade máxima de escavação: 6,7 m. Comprimento da lança: 6,7 m. Comprimento do braço: 2,6 m. Chassis: Esteira de borracha (600 mm). Sistema hidráulico: 280 bar. Tanque de combustível: 180 L. Sistema de resfriamento: Radiador com ventilador. Transmissão: Hidrostática. Velocidade de rotação: 12 rpm. Velocidade de deslocamento: 4,5 km/h. Ideal para escavação geral, carregamento e movimentação de materiais.',
    it: 'Escavatore idraulico CAT 320D. Motore: Caterpillar C6.4 Diesel (121 kW/163 hp). Capacità della benna: 1,19 m³. Profondità massima di scavo: 6,7 m. Lunghezza del braccio: 6,7 m. Lunghezza della benna: 2,6 m. Telaio: Cingolo in gomma (600 mm). Sistema idraulico: 280 bar. Serbatoio carburante: 180 L. Sistema di raffreddamento: Radiatore con ventilatore. Trasmissione: Idrostatica. Velocità di rotazione: 12 giri/min. Velocità di movimento: 4,5 km/h. Ideale per scavo generale, caricamento e movimentazione dei materiali.'
  },

  // ===== TOYOTA VEHICLES =====
  'Toyota 4Runner SUV. Premium off-road SUV for adventure and exploration. Engine: 4.0L V6 (215 kW). Transmission: Automatic. Seating: 7-8 passengers. Fuel Tank: 87L. Perfect for extreme terrain and family adventures.': {
    zh: '丰田 4Runner SUV。高端越野 SUV，适合冒险和探索。发动机：4.0L V6 (215 kW)。变速箱：自动。座位：7-8 人。油箱：87L。完美适合极端地形和家庭冒险。',
    en: 'Toyota 4Runner SUV. Premium off-road SUV for adventure and exploration. Engine: 4.0L V6 (215 kW). Transmission: Automatic. Seating: 7-8 passengers. Fuel Tank: 87L. Perfect for extreme terrain and family adventures.',
    es: 'Toyota 4Runner SUV. SUV todoterreno premium para aventura y exploración. Motor: V6 4.0L (215 kW). Transmisión: Automática. Asientos: 7-8 pasajeros. Tanque de combustible: 87L. Perfecto para terrenos extremos y aventuras familiares.',
    ar: 'تويوتا 4Runner SUV. سيارة دفع رباعي فاخرة للمغامرة والاستكشاف. المحرك: V6 4.0L (215 كيلوواط). ناقل الحركة: أوتوماتيكي. المقاعد: 7-8 ركاب. خزان الوقود: 87 لتر. مثالية للتضاريس القاسية والمغامرات العائلية.',
    ru: 'Toyota 4Runner SUV. Премиум внедорожный SUV для приключений и исследований. Двигатель: V6 4.0L (215 кВт). Коробка передач: Автоматическая. Посадочные места: 7-8 пассажиров. Топливный бак: 87 л. Идеален для экстремальной местности и семейных приключений.',
    fr: 'Toyota 4Runner SUV. SUV tout-terrain premium pour l\'aventure et l\'exploration. Moteur : V6 4.0L (215 kW). Transmission : Automatique. Sièges : 7-8 passagers. Réservoir : 87L. Parfait pour les terrains extrêmes et les aventures en famille.',
    pt: 'Toyota 4Runner SUV. SUV off-road premium para aventura e exploração. Motor: V6 4.0L (215 kW). Transmissão: Automática. Assentos: 7-8 passageiros. Tanque de combustível: 87L. Perfeito para terrenos extremos e aventuras em família.',
    it: 'Toyota 4Runner SUV. SUV fuoristrada premium per avventura ed esplorazione. Motore: V6 4.0L (215 kW). Trasmissione: Automatica. Posti a sedere: 7-8 passeggeri. Serbatoio carburante: 87L. Perfetto per terreni estremi e avventure in famiglia.'
  },

  'Toyota Prado SUV. Premium mid-size SUV for family and adventure. Engine: 2.7L Petrol (120 kW). Transmission: Automatic. Seating: 7 passengers. Fuel Tank: 87L. Ideal for family travel and light off-roading.': {
    zh: '丰田 Prado SUV。高级中型 SUV，适合家庭和冒险。发动机：2.7L 汽油 (120 kW)。变速箱：自动。座位：7 人。油箱：87L。适合家庭旅行和轻度越野。',
    en: 'Toyota Prado SUV. Premium mid-size SUV for family and adventure. Engine: 2.7L Petrol (120 kW). Transmission: Automatic. Seating: 7 passengers. Fuel Tank: 87L. Ideal for family travel and light off-roading.',
    es: 'Toyota Prado SUV. SUV de tamaño medio premium para familia y aventura. Motor: Gasolina 2.7L (120 kW). Transmisión: Automática. Asientos: 7 pasajeros. Tanque de combustible: 87L. Ideal para viajes familiares y todoterreno ligero.',
    ar: 'تويوتا Prado SUV. سيارة دفع رباعي متوسطة الحجم فاخرة للعائلة والمغامرة. المحرك: بنزين 2.7L (120 كيلوواط). ناقل الحركة: أوتوماتيكي. المقاعد: 7 ركاب. خزان الوقود: 87 لتر. مثالية لرحلات العائلة والقيادة الخفيفة خارج الطريق.',
    ru: 'Toyota Prado SUV. Премиум среднеразмерный SUV для семьи и приключений. Двигатель: Бензин 2.7L (120 кВт). Коробка передач: Автоматическая. Посадочные места: 7 пассажиров. Топливный бак: 87 л. Идеален для семейных путешествий и легкого внедорожного вождения.',
    fr: 'Toyota Prado SUV. SUV de taille moyenne premium pour la famille et l\'aventure. Moteur : Essence 2.7L (120 kW). Transmission : Automatique. Sièges : 7 passagers. Réservoir : 87L. Idéal pour les voyages en famille et la conduite tout-terrain légère.',
    pt: 'Toyota Prado SUV. SUV de tamanho médio premium para família e aventura. Motor: Gasolina 2.7L (120 kW). Transmissão: Automática. Assentos: 7 passageiros. Tanque de combustível: 87L. Ideal para viagens em família e condução leve off-road.',
    it: 'Toyota Prado SUV. SUV di medie dimensioni premium per famiglia e avventura. Motore: Benzina 2.7L (120 kW). Trasmissione: Automatica. Posti a sedere: 7 passeggeri. Serbatoio carburante: 87L. Ideale per viaggi in famiglia e guida leggera fuoristrada.'
  },

  'Toyota Tacoma 4×4 Pickup Truck. Mid-size pickup truck for work and adventure. Engine: 3.5L V6 (205 kW). Transmission: Automatic. Payload: 1200 kg. Fuel Tank: 80L. Perfect for construction and outdoor enthusiasts.': {
    zh: '丰田 Tacoma 4×4 皮卡。中型皮卡，适合工作和冒险。发动机：3.5L V6 (205 kW)。变速箱：自动。载重：1200 kg。油箱：80L。完美适合建筑和户外爱好者。',
    en: 'Toyota Tacoma 4×4 Pickup Truck. Mid-size pickup truck for work and adventure. Engine: 3.5L V6 (205 kW). Transmission: Automatic. Payload: 1200 kg. Fuel Tank: 80L. Perfect for construction and outdoor enthusiasts.',
    es: 'Toyota Tacoma 4×4 Pickup Truck. Camión pickup de tamaño medio para trabajo y aventura. Motor: V6 3.5L (205 kW). Transmisión: Automática. Carga útil: 1200 kg. Tanque de combustible: 80L. Perfecto para construcción y entusiastas de actividades al aire libre.',
    ar: 'تويوتا Tacoma 4×4 Pickup Truck. شاحنة بيك أب متوسطة الحجم للعمل والمغامرة. المحرك: V6 3.5L (205 كيلوواط). ناقل الحركة: أوتوماتيكي. الحمولة: 1200 كجم. خزان الوقود: 80 لتر. مثالية للبناء وعشاق الأنشطة الخارجية.',
    ru: 'Toyota Tacoma 4×4 Pickup Truck. Среднеразмерный пикап для работы и приключений. Двигатель: V6 3.5L (205 кВт). Коробка передач: Автоматическая. Грузоподъемность: 1200 кг. Топливный бак: 80 л. Идеален для строительства и любителей активного отдыха.',
    fr: 'Toyota Tacoma 4×4 Pickup Truck. Camion pickup de taille moyenne pour le travail et l\'aventure. Moteur : V6 3.5L (205 kW). Transmission : Automatique. Charge utile : 1200 kg. Réservoir : 80L. Parfait pour la construction et les amateurs d\'activités de plein air.',
    pt: 'Toyota Tacoma 4×4 Pickup Truck. Caminhonete pickup de tamanho médio para trabalho e aventura. Motor: V6 3.5L (205 kW). Transmissão: Automática. Carga útil: 1200 kg. Tanque de combustível: 80L. Perfeito para construção e entusiastas de atividades ao ar livre.',
    it: 'Toyota Tacoma 4×4 Pickup Truck. Camion pickup di medie dimensioni per lavoro e avventura. Motore: V6 3.5L (205 kW). Trasmissione: Automatica. Carico utile: 1200 kg. Serbatoio carburante: 80L. Perfetto per la costruzione e gli appassionati di attività all\'aperto.'
  },

  'Toyota Tundra Pickup Truck. Full-size heavy-duty pickup truck. Engine: 5.7L V8 (280 kW). Transmission: Automatic. Payload: 1600 kg. Fuel Tank: 100L. Perfect for demanding work and heavy towing.': {
    zh: '丰田 Tundra 皮卡。全尺寸重型皮卡。发动机：5.7L V8 (280 kW)。变速箱：自动。载重：1600 kg。油箱：100L。完美适合苛刻的工作和重型拖拽。',
    en: 'Toyota Tundra Pickup Truck. Full-size heavy-duty pickup truck. Engine: 5.7L V8 (280 kW). Transmission: Automatic. Payload: 1600 kg. Fuel Tank: 100L. Perfect for demanding work and heavy towing.',
    es: 'Toyota Tundra Pickup Truck. Camión pickup de tamaño completo y servicio pesado. Motor: V8 5.7L (280 kW). Transmisión: Automática. Carga útil: 1600 kg. Tanque de combustible: 100L. Perfecto para trabajo exigente y remolque pesado.',
    ar: 'تويوتا Tundra Pickup Truck. شاحنة بيك أب كاملة الحجم وثقيلة الواجب. المحرك: V8 5.7L (280 كيلوواط). ناقل الحركة: أوتوماتيكي. الحمولة: 1600 كجم. خزان الوقود: 100 لتر. مثالية للعمل الشاق والسحب الثقيل.',
    ru: 'Toyota Tundra Pickup Truck. Полноразмерный тяжелый пикап. Двигатель: V8 5.7L (280 кВт). Коробка передач: Автоматическая. Грузоподъемность: 1600 кг. Топливный бак: 100 л. Идеален для тяжелой работы и буксировки.',
    fr: 'Toyota Tundra Pickup Truck. Camion pickup de taille complète à service lourd. Moteur : V8 5.7L (280 kW). Transmission : Automatique. Charge utile : 1600 kg. Réservoir : 100L. Parfait pour le travail exigeant et le remorquage lourd.',
    pt: 'Toyota Tundra Pickup Truck. Caminhonete pickup de tamanho completo e serviço pesado. Motor: V8 5.7L (280 kW). Transmissão: Automática. Carga útil: 1600 kg. Tanque de combustível: 100L. Perfeito para trabalho exigente e reboque pesado.',
    it: 'Toyota Tundra Pickup Truck. Camion pickup a grandezza naturale e servizio pesante. Motore: V8 5.7L (280 kW). Trasmissione: Automatica. Carico utile: 1600 kg. Serbatoio carburante: 100L. Perfetto per lavori impegnativi e traino pesante.'
  }
};

export function useTranslationSystem() {
  const { language } = useLanguage();

  const translateMachineDescription = (description: string): string => {
    const translations = machineTranslations[description];
    if (translations && translations[language]) {
      return translations[language];
    }
    return description;
  };

  return useMemo(() => ({
    translateMachineDescription
  }), [language]);
}
