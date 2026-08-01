import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Comprehensive translation map for machine descriptions in all 8 languages
const machineDescriptionTranslations: Record<string, Record<string, string>> = {
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
  'Toyota Fortuner SUV. Mid-size SUV for family and commercial use. Engine: 2.8L Diesel (130 kW). Transmission: Automatic. Seating: 7 passengers. Fuel Tank: 80L. Ideal for Southeast Asian markets and rugged terrain.': {
    zh: '丰田 Fortuner SUV。中型 SUV，适合家庭和商业用途。发动机：2.8L 柴油 (130 kW)。变速箱：自动。座位：7 人。油箱：80L。理想适合东南亚市场和崎岖地形。',
    en: 'Toyota Fortuner SUV. Mid-size SUV for family and commercial use. Engine: 2.8L Diesel (130 kW). Transmission: Automatic. Seating: 7 passengers. Fuel Tank: 80L. Ideal for Southeast Asian markets and rugged terrain.',
    es: 'Toyota Fortuner SUV. SUV de tamaño medio para uso familiar y comercial. Motor: Diesel 2.8L (130 kW). Transmisión: Automática. Asientos: 7 pasajeros. Tanque de combustible: 80L. Ideal para mercados del sudeste asiático y terrenos accidentados.',
    ar: 'تويوتا Fortuner SUV. سيارة دفع رباعي متوسطة الحجم للاستخدام العائلي والتجاري. المحرك: ديزل 2.8L (130 كيلوواط). ناقل الحركة: أوتوماتيكي. المقاعد: 7 ركاب. خزان الوقود: 80 لتر. مثالية لأسواق جنوب شرق آسيا والتضاريس الوعرة.',
    ru: 'Toyota Fortuner SUV. Среднеразмерный SUV для семейного и коммерческого использования. Двигатель: Дизель 2.8L (130 кВт). Коробка передач: Автоматическая. Посадочные места: 7 пассажиров. Топливный бак: 80 л. Идеален для рынков Юго-Восточной Азии и пересеченной местности.',
    fr: 'Toyota Fortuner SUV. SUV de taille moyenne pour usage familial et commercial. Moteur : Diesel 2.8L (130 kW). Transmission : Automatique. Sièges : 7 passagers. Réservoir : 80L. Idéal pour les marchés d\'Asie du Sud-Est et les terrains accidentés.',
    pt: 'Toyota Fortuner SUV. SUV de tamanho médio para uso familiar e comercial. Motor: Diesel 2.8L (130 kW). Transmissão: Automática. Assentos: 7 passageiros. Tanque de combustível: 80L. Ideal para mercados do Sudeste Asiático e terrenos acidentados.',
    it: 'Toyota Fortuner SUV. SUV di medie dimensioni per uso familiare e commerciale. Motore: Diesel 2.8L (130 kW). Trasmissione: Automatica. Posti a sedere: 7 passeggeri. Serbatoio carburante: 80L. Ideale per i mercati del sud-est asiatico e i terreni accidentati.'
  },
  'Toyota Hilux 4×4 Pickup Truck. Heavy-duty pickup truck for construction and agriculture. Engine: 2.8L Diesel (130 kW). Transmission: Manual/Automatic. Payload: 1000 kg. Fuel Tank: 80L. Perfect for tough working conditions.': {
    zh: '丰田 Hilux 4×4 皮卡。重型皮卡，适合建筑和农业。发动机：2.8L 柴油 (130 kW)。变速箱：手动/自动。载重：1000 kg。油箱：80L。完美适合恶劣工作条件。',
    en: 'Toyota Hilux 4×4 Pickup Truck. Heavy-duty pickup truck for construction and agriculture. Engine: 2.8L Diesel (130 kW). Transmission: Manual/Automatic. Payload: 1000 kg. Fuel Tank: 80L. Perfect for tough working conditions.',
    es: 'Toyota Hilux 4×4 Pickup Truck. Camión pickup resistente para construcción y agricultura. Motor: Diesel 2.8L (130 kW). Transmisión: Manual/Automática. Capacidad de carga: 1000 kg. Tanque de combustible: 80L. Perfecto para condiciones de trabajo difíciles.',
    ar: 'تويوتا Hilux 4×4 Pickup Truck. شاحنة بيك أب ثقيلة للبناء والزراعة. المحرك: ديزل 2.8L (130 كيلوواط). ناقل الحركة: يدوي/أوتوماتيكي. حمولة: 1000 كجم. خزان الوقود: 80 لتر. مثالية لظروف العمل الصعبة.',
    ru: 'Toyota Hilux 4×4 Pickup Truck. Тяжелый пикап для строительства и сельского хозяйства. Двигатель: Дизель 2.8L (130 кВт). Коробка передач: Механическая/Автоматическая. Грузоподъемность: 1000 кг. Топливный бак: 80 л. Идеален для тяжелых условий работы.',
    fr: 'Toyota Hilux 4×4 Pickup Truck. Camion pickup robuste pour la construction et l\'agriculture. Moteur : Diesel 2.8L (130 kW). Transmission : Manuelle/Automatique. Charge utile : 1000 kg. Réservoir : 80L. Parfait pour les conditions de travail difficiles.',
    pt: 'Toyota Hilux 4×4 Pickup Truck. Caminhonete pickup pesada para construção e agricultura. Motor: Diesel 2.8L (130 kW). Transmissão: Manual/Automática. Carga útil: 1000 kg. Tanque de combustível: 80L. Perfeito para condições de trabalho difíceis.',
    it: 'Toyota Hilux 4×4 Pickup Truck. Camion pickup robusto per edilizia e agricoltura. Motore: Diesel 2.8L (130 kW). Trasmissione: Manuale/Automatica. Carico utile: 1000 kg. Serbatoio carburante: 80L. Perfetto per condizioni di lavoro difficili.'
  },
  'Toyota Land Cruiser 70 SUV. Classic off-road SUV with legendary reliability. Engine: 4.0L V6 (155 kW). Transmission: Manual. Seating: 5-7 passengers. Fuel Tank: 85L. Perfect for extreme off-road expeditions.': {
    zh: '丰田 Land Cruiser 70 SUV。经典越野 SUV，具有传奇可靠性。发动机：4.0L V6 (155 kW)。变速箱：手动。座位：5-7 人。油箱：85L。完美适合极端越野探险。',
    en: 'Toyota Land Cruiser 70 SUV. Classic off-road SUV with legendary reliability. Engine: 4.0L V6 (155 kW). Transmission: Manual. Seating: 5-7 passengers. Fuel Tank: 85L. Perfect for extreme off-road expeditions.',
    es: 'Toyota Land Cruiser 70 SUV. SUV todoterreno clásico con confiabilidad legendaria. Motor: V6 4.0L (155 kW). Transmisión: Manual. Asientos: 5-7 pasajeros. Tanque de combustible: 85L. Perfecto para expediciones extremas fuera de carretera.',
    ar: 'تويوتا Land Cruiser 70 SUV. سيارة دفع رباعي كلاسيكية بموثوقية أسطورية. المحرك: V6 4.0L (155 كيلوواط). ناقل الحركة: يدوي. المقاعد: 5-7 ركاب. خزان الوقود: 85 لتر. مثالية للرحلات الاستكشافية الشديدة خارج الطريق.',
    ru: 'Toyota Land Cruiser 70 SUV. Классический внедорожный SUV с легендарной надежностью. Двигатель: V6 4.0L (155 кВт). Коробка передач: Механическая. Посадочные места: 5-7 пассажиров. Топливный бак: 85 л. Идеален для экстремальных внедорожных экспедиций.',
    fr: 'Toyota Land Cruiser 70 SUV. SUV tout-terrain classique avec fiabilité légendaire. Moteur : V6 4.0L (155 kW). Transmission : Manuelle. Sièges : 5-7 passagers. Réservoir : 85L. Parfait pour les expéditions tout-terrain extrêmes.',
    pt: 'Toyota Land Cruiser 70 SUV. SUV off-road clássico com confiabilidade lendária. Motor: V6 4.0L (155 kW). Transmissão: Manual. Assentos: 5-7 passageiros. Tanque de combustível: 85L. Perfeito para expedições off-road extremas.',
    it: 'Toyota Land Cruiser 70 SUV. SUV fuoristrada classico con affidabilità leggendaria. Motore: V6 4.0L (155 kW). Trasmissione: Manuale. Posti a sedere: 5-7 passeggeri. Serbatoio carburante: 85L. Perfetto per spedizioni fuoristrada estreme.'
  }
};

export function useFullTranslation() {
  const { language } = useLanguage();

  const translateMachineDescription = (description: string): string => {
    const translations = machineDescriptionTranslations[description];
    if (translations && translations[language]) {
      return translations[language];
    }
    return description;
  };

  return useMemo(() => ({
    translateMachineDescription
  }), [language]);
}
