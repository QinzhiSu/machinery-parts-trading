import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';


// Translation map for machine and spare part descriptions
const machineDescriptionTranslations: Record<string, Record<string, string>> = {
  'Toyota 4Runner SUV. Premium off-road SUV for adventure and exploration. Engine: 4.0L V6 (215 kW). Transmission: Automatic. Seating: 7-8 passengers. Fuel Tank: 87L. Perfect for extreme terrain and family adventures.': {
    zh: '丰田 4Runner SUV。高端越野 SUV，适合冒险和探索。发动机：4.0L V6 (215 kW)。变速箱：自动。座位：7-8 人。油箱：87L。完美适合极端地形和家庭冒险。',
    es: 'Toyota 4Runner SUV. SUV todoterreno premium para aventura y exploración. Motor: V6 4.0L (215 kW). Transmisión: Automática. Asientos: 7-8 pasajeros. Tanque de combustible: 87L. Perfecto para terrenos extremos y aventuras familiares.',
    ar: 'تويوتا 4Runner SUV. سيارة دفع رباعي فاخرة للمغامرة والاستكشاف. المحرك: V6 4.0L (215 كيلوواط). ناقل الحركة: أوتوماتيكي. المقاعد: 7-8 ركاب. خزان الوقود: 87 لتر. مثالية للتضاريس القاسية والمغامرات العائلية.'
  },
  'Toyota Fortuner SUV. Mid-size SUV for family and commercial use. Engine: 2.8L Diesel (130 kW). Transmission: Automatic. Seating: 7 passengers. Fuel Tank: 80L. Ideal for Southeast Asian markets and rugged terrain.': {
    zh: '丰田 Fortuner SUV。中型 SUV，适合家庭和商业用途。发动机：2.8L 柴油 (130 kW)。变速箱：自动。座位：7 人。油箱：80L。理想适合东南亚市场和崎岖地形。',
    es: 'Toyota Fortuner SUV. SUV de tamaño medio para uso familiar y comercial. Motor: Diesel 2.8L (130 kW). Transmisión: Automática. Asientos: 7 pasajeros. Tanque de combustible: 80L. Ideal para mercados del sudeste asiático y terrenos accidentados.',
    ar: 'تويوتا Fortuner SUV. سيارة دفع رباعي متوسطة الحجم للاستخدام العائلي والتجاري. المحرك: ديزل 2.8L (130 كيلوواط). ناقل الحركة: أوتوماتيكي. المقاعد: 7 ركاب. خزان الوقود: 80 لتر. مثالية لأسواق جنوب شرق آسيا والتضاريس الوعرة.'
  },
  'Toyota Hilux 4×4 Pickup Truck. Heavy-duty pickup truck for construction and agriculture. Engine: 2.8L Diesel (130 kW). Transmission: Manual/Automatic. Payload: 1000 kg. Fuel Tank: 80L. Perfect for tough working conditions.': {
    zh: '丰田 Hilux 4×4 皮卡。重型皮卡，适合建筑和农业。发动机：2.8L 柴油 (130 kW)。变速箱：手动/自动。载重：1000 kg。油箱：80L。完美适合恶劣工作条件。',
    es: 'Toyota Hilux 4×4 Pickup Truck. Camión pickup resistente para construcción y agricultura. Motor: Diesel 2.8L (130 kW). Transmisión: Manual/Automática. Capacidad de carga: 1000 kg. Tanque de combustible: 80L. Perfecto para condiciones de trabajo difíciles.',
    ar: 'تويوتا Hilux 4×4 Pickup Truck. شاحنة بيك أب ثقيلة للبناء والزراعة. المحرك: ديزل 2.8L (130 كيلوواط). ناقل الحركة: يدوي/أوتوماتيكي. حمولة: 1000 كجم. خزان الوقود: 80 لتر. مثالية لظروف العمل الصعبة.'
  },
  'Toyota Land Cruiser 70 SUV. Classic off-road SUV with legendary reliability. Engine: 4.0L V6 (155 kW). Transmission: Manual. Seating: 5-7 passengers. Fuel Tank: 85L. Perfect for extreme off-road expeditions.': {
    zh: '丰田 Land Cruiser 70 SUV。经典越野 SUV，具有传奇可靠性。发动机：4.0L V6 (155 kW)。变速箱：手动。座位：5-7 人。油箱：85L。完美适合极端越野探险。',
    es: 'Toyota Land Cruiser 70 SUV. SUV todoterreno clásico con confiabilidad legendaria. Motor: V6 4.0L (155 kW). Transmisión: Manual. Asientos: 5-7 pasajeros. Tanque de combustible: 85L. Perfecto para expediciones extremas fuera de carretera.',
    ar: 'تويوتا Land Cruiser 70 SUV. سيارة دفع رباعي كلاسيكية بموثوقية أسطورية. المحرك: V6 4.0L (155 كيلوواط). ناقل الحركة: يدوي. المقاعد: 5-7 ركاب. خزان الوقود: 85 لتر. مثالية للرحلات الاستكشافية الشديدة خارج الطريق.'
  },
};

// Simple translation map for common spare part descriptions
const partDescriptionTranslations: Record<string, Record<string, string>> = {
  'CAT 零件。250-500小时随保养更换': {
    zh: 'CAT 零件。250-500小时随保养更换',
    en: 'CAT part. Replace every 250-500 hours during maintenance.',
    es: 'Pieza CAT. Reemplazar cada 250-500 horas durante el mantenimiento.',
    ar: 'قطعة CAT. استبدل كل 250-500 ساعة أثناء الصيانة.'
  },
  'CAT 零件。250-500小时或视油品': {
    zh: 'CAT 零件。250-500小时或视油品',
    en: 'CAT part. Replace every 250-500 hours or as needed based on fuel quality.',
    es: 'Pieza CAT. Reemplazar cada 250-500 horas o según sea necesario según la calidad del combustible.',
    ar: 'قطعة CAT. استبدل كل 250-500 ساعة أو حسب الحاجة بناءً على جودة الوقود.'
  },
  'CAT 零件。500-1000小时或视油液检测结果': {
    zh: 'CAT 零件。500-1000小时或视油液检测结果',
    en: 'CAT part. Replace every 500-1000 hours or based on fluid analysis results.',
    es: 'Pieza CAT. Reemplazar cada 500-1000 horas o según los resultados del análisis de fluidos.',
    ar: 'قطعة CAT. استبدل كل 500-1000 ساعة أو بناءً على نتائج تحليل السوائل.'
  },
  'CAT 零件。500-1000小时': {
    zh: 'CAT 零件。500-1000小时',
    en: 'CAT part. Replace every 500-1000 hours.',
    es: 'Pieza CAT. Reemplazar cada 500-1000 horas.',
    ar: 'قطعة CAT. استبدل كل 500-1000 ساعة.'
  },
  'CAT 零件。过热/渗漏时更换': {
    zh: 'CAT 零件。过热/渗漏时更换',
    en: 'CAT part. Replace if overheating or leaking.',
    es: 'Pieza CAT. Reemplazar si se sobrecalienta o tiene fugas.',
    ar: 'قطعة CAT. استبدل إذا كان هناك ارتفاع في درجة الحرارة أو تسرب.'
  },
  'CAT 零件。动力下降/异响/漏油时更换(大修类)': {
    zh: 'CAT 零件。动力下降/异响/漏油时更换(大修类)',
    en: 'CAT part. Replace when power drops, abnormal noise, or oil leaks occur (major repair).',
    es: 'Pieza CAT. Reemplazar cuando haya pérdida de potencia, ruido anormal o fugas de aceite (reparación mayor).',
    ar: 'قطعة CAT. استبدل عند انخفاض الطاقة أو الضوضاء غير الطبيعية أو تسرب الزيت (إصلاح رئيسي).'
  },
  'CAT 零件。履带松旷/磨损超限时更换(大修类高价件)': {
    zh: 'CAT 零件。履带松旷/磨损超限时更换(大修类高价件)',
    en: 'CAT part. Replace when track is loose or wear exceeds limit (major repair, high-cost part).',
    es: 'Pieza CAT. Reemplazar cuando la pista esté suelta o el desgaste exceda el límite (reparación mayor, pieza de alto costo).',
    ar: 'قطعة CAT. استبدل عند فقدان الجنزير أو تجاوز البلى الحد (إصلاح رئيسي، قطعة عالية التكلفة).'
  },
  'CAT 零件。漏油/磨损时更换': {
    zh: 'CAT 零件。漏油/磨损时更换',
    en: 'CAT part. Replace if leaking or worn.',
    es: 'Pieza CAT. Reemplazar si tiene fugas o está desgastada.',
    ar: 'قطعة CAT. استبدل إذا كان هناك تسرب أو بلى.'
  },
  'CAT 零件。磨损/异响时更换': {
    zh: 'CAT 零件。磨损/异响时更换',
    en: 'CAT part. Replace if worn or making abnormal noise.',
    es: 'Pieza CAT. Reemplazar si está desgastada o hace ruido anormal.',
    ar: 'قطعة CAT. استبدل إذا كان هناك بلى أو ضوضاء غير طبيعية.'
  },
  'CAT 零件。轮齿磨损/断齿时更换': {
    zh: 'CAT 零件。轮齿磨损/断齿时更换',
    en: 'CAT part. Replace when gear teeth are worn or broken.',
    es: 'Pieza CAT. Reemplazar cuando los dientes del engranaje estén desgastados o rotos.',
    ar: 'قطعة CAT. استبدل عند بلى أسنان التروس أو كسرها.'
  },
  'CAT 零件。磨损见底或断裂时更换,高频更换件': {
    zh: 'CAT 零件。磨损见底或断裂时更换,高频更换件',
    en: 'CAT part. Replace when worn to limit or cracked (high-frequency replacement part).',
    es: 'Pieza CAT. Reemplazar cuando esté desgastado al límite o agrietado (pieza de reemplazo de alta frecuencia).',
    ar: 'قطعة CAT. استبدل عند البلى الكامل أو التشقق (قطعة استبدال عالية التكرار).'
  },
  'CAT 零件。随斗齿更换,寿命长于斗齿本身': {
    zh: 'CAT 零件。随斗齿更换,寿命长于斗齿本身',
    en: 'CAT part. Replace with bucket teeth, longer lifespan than teeth themselves.',
    es: 'Pieza CAT. Reemplazar con dientes del cucharón, vida útil más larga que los dientes mismos.',
    ar: 'قطعة CAT. استبدل مع أسنان الجرافة، عمر أطول من الأسنان نفسها.'
  },
  'CAT 零件。每次换齿时同步更换': {
    zh: 'CAT 零件。每次换齿时同步更换',
    en: 'CAT part. Replace synchronously every time teeth are replaced.',
    es: 'Pieza CAT. Reemplazar sincrónicamente cada vez que se reemplacen los dientes.',
    ar: 'قطعة CAT. استبدل بشكل متزامن في كل مرة يتم استبدال الأسنان.'
  },
  'CAT 零件。异响/漏油/爬升无力时更换(大修类高价件)': {
    zh: 'CAT 零件。异响/漏油/爬升无力时更换(大修类高价件)',
    en: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair, high-cost part).',
    es: 'Pieza CAT. Reemplazar cuando haya ruido anormal, fugas de aceite o dificultad para subir (reparación mayor, pieza de alto costo).',
    ar: 'قطعة CAT. استبدل عند الضوضاء غير الطبيعية أو تسرب الزيت أو صعوبة الصعود (إصلاح رئيسي، قطعة عالية التكلفة).'
  },
  'CAT 零件。异响/爬坡无力时更换(大修类)': {
    zh: 'CAT 零件。异响/爬坡无力时更换(大修类)',
    en: 'CAT part. Replace when abnormal noise or climbing difficulty occurs (major repair).',
    es: 'Pieza CAT. Reemplazar cuando haya ruido anormal o dificultad para subir (reparación mayor).',
    ar: 'قطعة CAT. استبدل عند الضوضاء غير الطبيعية أو صعوبة الصعود (إصلاح رئيسي).'
  },
  'CAT 零件。转台异响/回转无力时更换(大修类)': {
    zh: 'CAT 零件。转台异响/回转无力时更换(大修类)',
    en: 'CAT part. Replace when turntable makes noise or rotation is weak (major repair).',
    es: 'Pieza CAT. Reemplazar cuando la torreta hace ruido o la rotación es débil (reparación mayor).',
    ar: 'قطعة CAT. استبدل عند إصدار الدوران ضوضاء أو ضعف الدوران (إصلاح رئيسي).'
  },
  'CAT 零件。随斗齿磨损检查,寿命长于斗齿本身': {
    zh: 'CAT 零件。随斗齿磨损检查,寿命长于斗齿本身',
    en: 'CAT part. Check with bucket teeth wear, longer lifespan than teeth themselves.',
    es: 'Pieza CAT. Verificar con desgaste de dientes del cucharón, vida útil más larga que los dientes mismos.',
    ar: 'قطعة CAT. تحقق من بلى أسنان الجرافة، عمر أطول من الأسنان نفسها.'
  },
  'CAT 零件。随斗齿磨损,推土机松土齿高频更换件': {
    zh: 'CAT 零件。随斗齿磨损,推土机松土齿高频更换件',
    en: 'CAT part. Replace with bucket teeth wear, high-frequency replacement for bulldozer ripping teeth.',
    es: 'Pieza CAT. Reemplazar con desgaste de dientes del cucharón, reemplazo de alta frecuencia para dientes de desgarrador de topadora.',
    ar: 'قطعة CAT. استبدل مع بلى أسنان الجرافة، استبدال عالي التكرار لأسنان الشق في الجرافة.'
  },
  'CAT 零件。漏油/密封老化时更换': {
    zh: 'CAT 零件。漏油/密封老化时更换',
    en: 'CAT part. Replace if leaking or seals are aged.',
    es: 'Pieza CAT. Reemplazar si tiene fugas o los sellos están envejecidos.',
    ar: 'قطعة CAT. استبدل إذا كان هناك تسرب أو تقادم الأختام.'
  },
  'CAT 零件。异响/间隙过大时更换,高频保养更换件': {
    zh: 'CAT 零件。异响/间隙过大时更换,高频保养更换件',
    en: 'CAT part. Replace if abnormal noise or excessive clearance (high-frequency maintenance part).',
    es: 'Pieza CAT. Reemplazar si hay ruido anormal o holgura excesiva (pieza de mantenimiento de alta frecuencia).',
    ar: 'قطعة CAT. استبدل إذا كان هناك ضوضاء غير طبيعية أو فجوة مفرطة (قطعة صيانة عالية التكرار).'
  },
  'CAT 零件。异响/间隙过大时更换': {
    zh: 'CAT 零件。异响/间隙过大时更换',
    en: 'CAT part. Replace if abnormal noise or excessive clearance.',
    es: 'Pieza CAT. Reemplazar si hay ruido anormal o holgura excesiva.',
    ar: 'قطعة CAT. استبدل إذا كان هناك ضوضاء غير طبيعية أو فجوة مفرطة.'
  },
  'Oil Filter': {
    en: 'Oil Filter',
    zh: '机油滤芯',
    es: "Filtro de aceite",
    ar: "فلتر الزيت",
    ru: "Масляный фильтр",
    fr: "Filtre a huile",
    pt: "Filtro de óleo",
    it: "Filtro olio"
  },
  'Oil Filter (New Model)': {
    en: 'Oil Filter (New Model)',
    zh: '机油滤芯(新款)',
    es: "Filtro de aceite (nuevo modelo)",
    ar: "فلتر الزيت (نموذج جديد)",
    ru: "Масляный фильтр (новая модель)",
    fr: "Filtre a huile (nouveau modele)",
    pt: "Filtro de óleo (novo modelo)",
    it: "Filtro olio (nuovo modello)"
  },
  'Fuel Filter (Secondary/Fine)': {
    en: 'Fuel Filter (Secondary/Fine)',
    zh: '燃油滤芯(二级/精滤)',
    es: "Filtro de combustible (secundario/fino)",
    ar: "فلتر الوقود (ثانوي/دقيق)",
    ru: "Топливный фильтр (вторичный/тонкий)",
    fr: "Filtre a carburant (secondaire/fin)",
    pt: "Filtro de combustível (secundário/fino)",
    it: "Filtro carburante (secondario/fine)"
  },
  'Hydraulic Oil Filter': {
    en: 'Hydraulic Oil Filter',
    zh: '液压油滤芯',
    es: "Filtro de aceite hidraulico",
    ar: "فلتر الزيت الهيدروليكي",
    ru: "Гидравлический масляный фильтр",
    fr: "Filtre a huile hydraulique",
    pt: "Filtro de óleo hidráulico",
    it: "Filtro olio idraulico"
  },
  'Hydraulic Oil Filter (New Model)': {
    en: 'Hydraulic Oil Filter (New Model)',
    zh: '液压油滤芯(新款)',
    es: "Filtro de aceite hidraulico (nuevo modelo)",
    ar: "فلتر الزيت الهيدروليكي (نموذج جديد)",
    ru: "Гидравлический масляный фильтр (новая модель)",
    fr: "Filtre a huile hydraulique (nouveau modele)",
    pt: "Filtro de óleo hidráulico (novo modelo)",
    it: "Filtro olio idraulico (nuovo modello)"
  },
  'Hydraulic Return Oil Filter': {
    en: 'Hydraulic Return Oil Filter',
    zh: '液压回油滤芯',
    es: "Filtro de retorno de aceite hidraulico",
    ar: "فلتر عودة الزيت الهيدروليكي",
    ru: "Фильтр возврата гидравлического масла",
    fr: "Filtre de retour d'huile hydraulique",
    pt: "Filtro de retorno de óleo hidráulico",
    it: "Filtro di ritorno olio idraulico"
  },
  'Air Filter (Outer Element)': {
    en: 'Air Filter (Outer Element)',
    zh: '空气滤芯(外芯)',
    es: "Filtro de aire (elemento exterior)",
    ar: "فلتر الهواء (العنصر الخارجي)",
    ru: "Воздушный фильтр (внешний элемент)",
    fr: "Filtre a air (element externe)",
    pt: "Filtro de ar (elemento externo)",
    it: "Filtro aria (elemento esterno)"
  },
  'Air Filter (Inner Element)': {
    en: 'Air Filter (Inner Element)',
    zh: '空气滤芯(内芯)',
    es: "Filtro de aire (elemento interior)",
    ar: "فلتر الهواء (العنصر الداخلي)",
    ru: "Воздушный фильтр (внутренний элемент)",
    fr: "Filtre a air (element interne)",
    pt: "Filtro de ar (elemento interno)",
    it: "Filtro aria (elemento interno)"
  },
  'Radiator Water Tank Assembly': {
    en: 'Radiator Water Tank Assembly',
    zh: '散热器水箱总成',
    es: "Conjunto de tanque de agua del radiador",
    ar: "مجموعة خزان المياه بالمشع",
    ru: "Сборка бака охлаждающей жидкости радиатора",
    fr: "Ensemble de réservoir d'eau du radiateur",
    pt: "Conjunto de tanque de água do radiador",
    it: "Assemblaggio serbatoio acqua radiatore"
  },
  'Turbocharger': {
    en: 'Turbocharger',
    zh: '涡轮增压器',
    es: "Turbocompresor",
    ar: "شاحن توربيني",
    ru: "Турбокомпрессор",
    fr: "Turbocompresseur",
    pt: "Turbocompressor",
    it: "Turbocompressore"
  },
  'Track Chain Assembly': {
    en: 'Track Chain Assembly',
    zh: '履带链条总成',
    es: "Conjunto de cadena de pista",
    ar: "مجموعة سلسلة المسار",
    ru: "Сборка цепи гусеницы",
    fr: "Ensemble de chaine de piste",
    pt: "Conjunto de corrente de pista",
    it: "Assemblaggio catena pista"
  },
  'Track Roller': {
    en: 'Track Roller',
    zh: '下托链轮(track roller)',
    es: 'Track Roller',
    ar: 'Track Roller',
    ru: 'Track Roller',
    fr: 'Track Roller',
    pt: 'Track Roller',
    it: 'Track Roller'
  },
  'Front Idler': {
    en: 'Front Idler',
    zh: '前导向轮(Front Idler)',
    es: 'Front Idler',
    ar: 'Front Idler',
    ru: 'Front Idler',
    fr: 'Front Idler',
    pt: 'Front Idler',
    it: 'Front Idler'
  },
  'Drive Sprocket': {
    en: 'Drive Sprocket',
    zh: '驱动链轮(Drive Sprocket)',
    es: "Piñón impulsor",
    ar: "رف القيادة",
    ru: "Ведущее колесо",
    fr: "Pignon moteur",
    pt: "Pinhão de acionamento",
    it: "Pignone motore"
  },
  'Carrier Roller': {
    en: 'Carrier Roller',
    zh: '上托轮(Carrier Roller)',
    es: 'Carrier Roller',
    ar: 'Carrier Roller',
    ru: 'Carrier Roller',
    fr: 'Carrier Roller',
    pt: 'Carrier Roller',
    it: 'Carrier Roller'
  },
  'Bucket Tooth (Universal J Series)': {
    en: 'Bucket Tooth (Universal J Series)',
    zh: '铲斗斗齿(通用J系列)',
    es: "Diente de cucharón (serie J universal)",
    ar: "سن الجرافة (سلسلة J عالمية)",
    ru: "Зуб ковша (универсальная серия J)",
    fr: "Dent de godet (serie J universelle)",
    pt: "Dente de caçamba (série J universal)",
    it: "Dente benna (serie J universale)"
  },
  'Bucket Tooth Adapter': {
    en: 'Bucket Tooth Adapter',
    zh: '斗齿适配器(Adapter)',
    es: "Adaptador de diente de cucharón",
    ar: "محول سن الجرافة",
    ru: "Адаптер зуба ковша",
    fr: "Adaptateur de dent de godet",
    pt: "Adaptador de dente de caçamba",
    it: "Adattatore dente benna"
  },
  'Bucket Tooth Pin/Lock Pin (G.E.T.)': {
    en: 'Bucket Tooth Pin/Lock Pin (G.E.T.)',
    zh: '斗齿销/锁定销(Pin-G.E.T.)',
    es: "Pasador de diente de cucharón/pasador de bloqueo (G.E.T.)",
    ar: "دبوس سن الجرافة/دبوس القفل (G.E.T.)",
    ru: "Штифт зуба ковша/стопорный штифт (G.E.T.)",
    fr: "Goupille de dent de godet/goupille de verrouillage (G.E.T.)",
    pt: "Pino de dente de caçamba/pino de travamento (G.E.T.)",
    it: "Spina dente benna/spina di blocco (G.E.T.)"
  },
  'Final Drive/Travel Reduction Gear Assembly': {
    en: 'Final Drive/Travel Reduction Gear Assembly',
    zh: '最终驱动/行走减速机总成',
    es: "Conjunto de engranaje de reducción de marcha final/viaje",
    ar: "مجموعة تروس التخفيض النهائي/السفر",
    ru: "Сборка редуктора окончательного привода/хода",
    fr: "Ensemble de reducteur de marche finale/voyage",
    pt: "Conjunto de engrenagem de redução de marcha final/viagem",
    it: "Assemblaggio riduttore marcia finale/viaggio"
  },
  'Travel (Track) Motor': {
    en: 'Travel (Track) Motor',
    zh: '行走(履带)马达',
    es: "Motor de viaje (pista)",
    ar: "محرك السفر (المسار)",
    ru: "Мотор хода (гусеница)",
    fr: "Moteur de voyage (piste)",
    pt: "Motor de viagem (pista)",
    it: "Motore di viaggio (pista)"
  },
  'Swing (Turntable) Motor and Reduction Gear': {
    en: 'Swing (Turntable) Motor and Reduction Gear',
    zh: '回转(转台)马达及减速机',
    es: "Motor de giro (torreta) y engranaje de reducción",
    ar: "محرك التأرجح (الدوران) وتروس التخفيض",
    ru: "Мотор поворота (поворотная платформа) и редуктор",
    fr: "Moteur de rotation (tourelle) et reducteur",
    pt: "Motor de giro (plataforma giratória) e engrenagem de redução",
    it: "Motore di rotazione (torretta) e riduttore"
  },
  'Bucket Tooth (J300 Series, V-Type)': {
    en: 'Bucket Tooth (J300 Series, V-Type)',
    zh: '斗齿(J300系列,V型)',
    es: "Diente de cucharón (serie J300, tipo V)",
    ar: "سن الجرافة (سلسلة J300، نوع V)",
    ru: "Зуб ковша (серия J300, V-образный)",
    fr: "Dent de godet (serie J300, type V)",
    pt: "Dente de caçamba (série J300, tipo V)",
    it: "Dente benna (serie J300, tipo V)"
  },
  'Bucket Tooth Adapter (J300 Side-Lock)': {
    en: 'Bucket Tooth Adapter (J300 Side-Lock)',
    zh: '斗齿适配器(J300侧销式)',
    es: "Adaptador de diente de cucharón (bloqueo lateral J300)",
    ar: "محول سن الجرافة (قفل جانبي J300)",
    ru: "Адаптер зуба ковша (боковой замок J300)",
    fr: "Adaptateur de dent de godet (verrouillage lateral J300)",
    pt: "Adaptador de dente de caçamba (travamento lateral J300)",
    it: "Adattatore dente benna (blocco laterale J300)"
  },
  'Bucket Tooth (J350 Series, HD Penetrating Type)': {
    en: 'Bucket Tooth (J350 Series, HD Penetrating Type)',
    zh: '斗齿(J350系列,HD穿透型)',
    es: 'Bucket Tooth (J350 Series, HD Penetrating Type)',
    ar: 'Bucket Tooth (J350 Series, HD Penetrating Type)',
    ru: 'Bucket Tooth (J350 Series, HD Penetrating Type)',
    fr: 'Bucket Tooth (J350 Series, HD Penetrating Type)',
    pt: 'Bucket Tooth (J350 Series, HD Penetrating Type)',
    it: 'Bucket Tooth (J350 Series, HD Penetrating Type)'
  },
  'Bucket Tooth (J350 Series, Universal Type)': {
    en: 'Bucket Tooth (J350 Series, Universal Type)',
    zh: '斗齿(J350系列,通用型)',
    es: "Diente de cucharón (serie J350, tipo universal)",
    ar: "سن الجرافة (سلسلة J350، نوع عالمي)",
    ru: "Зуб ковша (серия J350, универсальный тип)",
    fr: "Dent de godet (serie J350, type universel)",
    pt: "Dente de caçamba (série J350, tipo universal)",
    it: "Dente benna (serie J350, tipo universale)"
  },
  'Bucket Tooth (J350 Friction/Wear Type)': {
    en: 'Bucket Tooth (J350 Friction/Wear Type)',
    zh: '斗齿(J350摩擦磨损型)',
    es: 'Bucket Tooth (J350 Friction/Wear Type)',
    ar: 'Bucket Tooth (J350 Friction/Wear Type)',
    ru: 'Bucket Tooth (J350 Friction/Wear Type)',
    fr: 'Bucket Tooth (J350 Friction/Wear Type)',
    pt: 'Bucket Tooth (J350 Friction/Wear Type)',
    it: 'Bucket Tooth (J350 Friction/Wear Type)'
  },
  'Bucket Tooth (J400/J460 Series)': {
    en: 'Bucket Tooth (J400/J460 Series)',
    zh: '斗齿(J400/J460系列)',
    es: "Diente de cucharón (serie J400/J460)",
    ar: "سن الجرافة (سلسلة J400/J460)",
    ru: "Зуб ковша (серия J400/J460)",
    fr: "Dent de godet (serie J400/J460)",
    pt: "Dente de caçamba (série J400/J460)",
    it: "Dente benna (serie J400/J460)"
  },
  'Bucket Tooth (J300 Major Repair/Dozer Welded Adapter)': {
    en: 'Bucket Tooth (J300 Major Repair/Dozer Welded Adapter)',
    zh: '斗齿(J300大修/推土机焊接型适配器)',
    es: "Diente de cucharón (adaptador soldado de reparación mayor/topadora J300)",
    ar: "سن الجرافة (محول ملحوم بإصلاح رئيسي/جرافة J300)",
    ru: "Зуб ковша (адаптер сварной для капитального ремонта/бульдозер J300)",
    fr: "Dent de godet (adaptateur soude reparation majeure/bouteur J300)",
    pt: "Dente de caçamba (adaptador soldado reparo maior/escavadeira J300)",
    it: "Dente benna (adattatore saldato riparazione maggiore/bulldozer J300)"
  },
  'Boom Cylinder Seal Repair Kit': {
    en: 'Boom Cylinder Seal Repair Kit',
    zh: '斗杆油缸密封修理包',
    es: 'Boom Cylinder Seal Repair Kit',
    ar: 'Boom Cylinder Seal Repair Kit',
    ru: 'Boom Cylinder Seal Repair Kit',
    fr: 'Boom Cylinder Seal Repair Kit',
    pt: 'Boom Cylinder Seal Repair Kit',
    it: 'Boom Cylinder Seal Repair Kit'
  },
  'Bucket Cylinder Seal Repair Kit': {
    en: 'Bucket Cylinder Seal Repair Kit',
    zh: '铲斗油缸密封修理包',
    es: 'Bucket Cylinder Seal Repair Kit',
    ar: 'Bucket Cylinder Seal Repair Kit',
    ru: 'Bucket Cylinder Seal Repair Kit',
    fr: 'Bucket Cylinder Seal Repair Kit',
    pt: 'Bucket Cylinder Seal Repair Kit',
    it: 'Bucket Cylinder Seal Repair Kit'
  },
  'Bucket Cylinder Seal Kit (85mm Rod/125mm Bore)': {
    en: 'Bucket Cylinder Seal Kit (85mm Rod/125mm Bore)',
    zh: '铲斗油缸密封修理包(85mm杆/125mm缸)',
    es: 'Bucket Cylinder Seal Kit (85mm Rod/125mm Bore)',
    ar: 'Bucket Cylinder Seal Kit (85mm Rod/125mm Bore)',
    ru: 'Bucket Cylinder Seal Kit (85mm Rod/125mm Bore)',
    fr: 'Bucket Cylinder Seal Kit (85mm Rod/125mm Bore)',
    pt: 'Bucket Cylinder Seal Kit (85mm Rod/125mm Bore)',
    it: 'Bucket Cylinder Seal Kit (85mm Rod/125mm Bore)'
  },
  'Bucket Cylinder Seal Kit (65mm Rod, Old Model)': {
    en: 'Bucket Cylinder Seal Kit (65mm Rod, Old Model)',
    zh: '铲斗油缸密封修理包(65mm杆,旧款)',
    es: 'Bucket Cylinder Seal Kit (65mm Rod, Old Model)',
    ar: 'Bucket Cylinder Seal Kit (65mm Rod, Old Model)',
    ru: 'Bucket Cylinder Seal Kit (65mm Rod, Old Model)',
    fr: 'Bucket Cylinder Seal Kit (65mm Rod, Old Model)',
    pt: 'Bucket Cylinder Seal Kit (65mm Rod, Old Model)',
    it: 'Bucket Cylinder Seal Kit (65mm Rod, Old Model)'
  },
  'Bucket-Boom Connection Pin': {
    en: 'Bucket-Boom Connection Pin',
    zh: '斗杆连接销',
    es: 'Bucket-Boom Connection Pin',
    ar: 'Bucket-Boom Connection Pin',
    ru: 'Bucket-Boom Connection Pin',
    fr: 'Bucket-Boom Connection Pin',
    pt: 'Bucket-Boom Connection Pin',
    it: 'Bucket-Boom Connection Pin'
  },
  'Rod-Boom Connection Pin': {
    en: 'Rod-Boom Connection Pin',
    zh: '杆-斗杆连接销',
    es: 'Rod-Boom Connection Pin',
    ar: 'Rod-Boom Connection Pin',
    ru: 'Rod-Boom Connection Pin',
    fr: 'Rod-Boom Connection Pin',
    pt: 'Rod-Boom Connection Pin',
    it: 'Rod-Boom Connection Pin'
  },
  'Rod-Cylinder Connection Pin': {
    en: 'Rod-Cylinder Connection Pin',
    zh: '杆-油缸连接销',
    es: 'Rod-Cylinder Connection Pin',
    ar: 'Rod-Cylinder Connection Pin',
    ru: 'Rod-Cylinder Connection Pin',
    fr: 'Rod-Cylinder Connection Pin',
    pt: 'Rod-Cylinder Connection Pin',
    it: 'Rod-Cylinder Connection Pin'
  },
  'Rod-Boom Connection Bushing': {
    en: 'Rod-Boom Connection Bushing',
    zh: '斗杆连杆衬套',
    es: 'Rod-Boom Connection Bushing',
    ar: 'Rod-Boom Connection Bushing',
    ru: 'Rod-Boom Connection Bushing',
    fr: 'Rod-Boom Connection Bushing',
    pt: 'Rod-Boom Connection Bushing',
    it: 'Rod-Boom Connection Bushing'
  },
  'Bucket Bushing (Boom Position)': {
    en: 'Bucket Bushing (Boom Position)',
    zh: '斗一级支吊点连接销',
    es: 'Bucket Bushing (Boom Position)',
    ar: 'Bucket Bushing (Boom Position)',
    ru: 'Bucket Bushing (Boom Position)',
    fr: 'Bucket Bushing (Boom Position)',
    pt: 'Bucket Bushing (Boom Position)',
    it: 'Bucket Bushing (Boom Position)'
  },
  'CAT part. Replace during maintenance every 250-500 hours.': {
    en: 'CAT part. Replace during maintenance every 250-500 hours.',
    zh: 'CAT 零件。250-500小时随保养更换',
    es: 'CAT part. Replace during maintenance every 250-500 hours.',
    ar: 'CAT part. Replace during maintenance every 250-500 hours.',
    ru: 'CAT part. Replace during maintenance every 250-500 hours.',
    fr: 'CAT part. Replace during maintenance every 250-500 hours.',
    pt: 'CAT part. Replace during maintenance every 250-500 hours.',
    it: 'CAT part. Replace during maintenance every 250-500 hours.'
  },
  'CAT part. Replace every 250-500 hours or based on fuel quality.': {
    en: 'CAT part. Replace every 250-500 hours or based on fuel quality.',
    zh: 'CAT 零件。250-500小时或视油品',
    es: 'CAT part. Replace every 250-500 hours or based on fuel quality.',
    ar: 'CAT part. Replace every 250-500 hours or based on fuel quality.',
    ru: 'CAT part. Replace every 250-500 hours or based on fuel quality.',
    fr: 'CAT part. Replace every 250-500 hours or based on fuel quality.',
    pt: 'CAT part. Replace every 250-500 hours or based on fuel quality.',
    it: 'CAT part. Replace every 250-500 hours or based on fuel quality.'
  },
  'CAT part. Replace every 500-1000 hours or based on fluid analysis results.': {
    en: 'CAT part. Replace every 500-1000 hours or based on fluid analysis results.',
    zh: 'CAT 零件。500-1000小时或视油液检测结果',
    es: 'CAT part. Replace every 500-1000 hours or based on fluid analysis results.',
    ar: 'CAT part. Replace every 500-1000 hours or based on fluid analysis results.',
    ru: 'CAT part. Replace every 500-1000 hours or based on fluid analysis results.',
    fr: 'CAT part. Replace every 500-1000 hours or based on fluid analysis results.',
    pt: 'CAT part. Replace every 500-1000 hours or based on fluid analysis results.',
    it: 'CAT part. Replace every 500-1000 hours or based on fluid analysis results.'
  },
  'CAT part. Replace every 500-1000 hours.': {
    en: 'CAT part. Replace every 500-1000 hours.',
    zh: 'CAT 零件。500-1000小时',
    es: 'CAT part. Replace every 500-1000 hours.',
    ar: 'CAT part. Replace every 500-1000 hours.',
    ru: 'CAT part. Replace every 500-1000 hours.',
    fr: 'CAT part. Replace every 500-1000 hours.',
    pt: 'CAT part. Replace every 500-1000 hours.',
    it: 'CAT part. Replace every 500-1000 hours.'
  },
  'CAT part. Replace if overheating or leaking.': {
    en: 'CAT part. Replace if overheating or leaking.',
    zh: 'CAT 零件。过热/渗漏时更换',
    es: 'CAT part. Replace if overheating or leaking.',
    ar: 'CAT part. Replace if overheating or leaking.',
    ru: 'CAT part. Replace if overheating or leaking.',
    fr: 'CAT part. Replace if overheating or leaking.',
    pt: 'CAT part. Replace if overheating or leaking.',
    it: 'CAT part. Replace if overheating or leaking.'
  },
  'CAT part. Replace when power drops, abnormal noise, or oil leaks occur (major repair).': {
    en: 'CAT part. Replace when power drops, abnormal noise, or oil leaks occur (major repair).',
    zh: 'CAT 零件。动力下降/异响/漏油时更换(大修类)',
    es: 'CAT part. Replace when power drops, abnormal noise, or oil leaks occur (major repair).',
    ar: 'CAT part. Replace when power drops, abnormal noise, or oil leaks occur (major repair).',
    ru: 'CAT part. Replace when power drops, abnormal noise, or oil leaks occur (major repair).',
    fr: 'CAT part. Replace when power drops, abnormal noise, or oil leaks occur (major repair).',
    pt: 'CAT part. Replace when power drops, abnormal noise, or oil leaks occur (major repair).',
    it: 'CAT part. Replace when power drops, abnormal noise, or oil leaks occur (major repair).'
  },
  'CAT part. Replace when track is loose or wear exceeds limit (major repair, high-cost part).': {
    en: 'CAT part. Replace when track is loose or wear exceeds limit (major repair, high-cost part).',
    zh: 'CAT 零件。履带松旷/磨损超限时更换(大修类高价件)',
    es: 'CAT part. Replace when track is loose or wear exceeds limit (major repair, high-cost part).',
    ar: 'CAT part. Replace when track is loose or wear exceeds limit (major repair, high-cost part).',
    ru: 'CAT part. Replace when track is loose or wear exceeds limit (major repair, high-cost part).',
    fr: 'CAT part. Replace when track is loose or wear exceeds limit (major repair, high-cost part).',
    pt: 'CAT part. Replace when track is loose or wear exceeds limit (major repair, high-cost part).',
    it: 'CAT part. Replace when track is loose or wear exceeds limit (major repair, high-cost part).'
  },
  'CAT part. Replace if leaking or worn.': {
    en: 'CAT part. Replace if leaking or worn.',
    zh: 'CAT 零件。漏油/磨损时更换',
    es: 'CAT part. Replace if leaking or worn.',
    ar: 'CAT part. Replace if leaking or worn.',
    ru: 'CAT part. Replace if leaking or worn.',
    fr: 'CAT part. Replace if leaking or worn.',
    pt: 'CAT part. Replace if leaking or worn.',
    it: 'CAT part. Replace if leaking or worn.'
  },
  'CAT part. Replace if worn or making abnormal noise.': {
    en: 'CAT part. Replace if worn or making abnormal noise.',
    zh: 'CAT 零件。磨损/异响时更换',
    es: 'CAT part. Replace if worn or making abnormal noise.',
    ar: 'CAT part. Replace if worn or making abnormal noise.',
    ru: 'CAT part. Replace if worn or making abnormal noise.',
    fr: 'CAT part. Replace if worn or making abnormal noise.',
    pt: 'CAT part. Replace if worn or making abnormal noise.',
    it: 'CAT part. Replace if worn or making abnormal noise.'
  },
  'CAT part. Replace when gear teeth are worn or broken.': {
    en: 'CAT part. Replace when gear teeth are worn or broken.',
    zh: 'CAT 零件。轮齿磨损/断齿时更换',
    es: 'CAT part. Replace when gear teeth are worn or broken.',
    ar: 'CAT part. Replace when gear teeth are worn or broken.',
    ru: 'CAT part. Replace when gear teeth are worn or broken.',
    fr: 'CAT part. Replace when gear teeth are worn or broken.',
    pt: 'CAT part. Replace when gear teeth are worn or broken.',
    it: 'CAT part. Replace when gear teeth are worn or broken.'
  },
  'CAT part. Replace when worn to limit or cracked (high-frequency replacement part).': {
    en: 'CAT part. Replace when worn to limit or cracked (high-frequency replacement part).',
    zh: 'CAT 零件。磨损见底或断裂时更换,高频更换件',
    es: 'CAT part. Replace when worn to limit or cracked (high-frequency replacement part).',
    ar: 'CAT part. Replace when worn to limit or cracked (high-frequency replacement part).',
    ru: 'CAT part. Replace when worn to limit or cracked (high-frequency replacement part).',
    fr: 'CAT part. Replace when worn to limit or cracked (high-frequency replacement part).',
    pt: 'CAT part. Replace when worn to limit or cracked (high-frequency replacement part).',
    it: 'CAT part. Replace when worn to limit or cracked (high-frequency replacement part).'
  },
  'CAT part. Replace with bucket teeth, longer lifespan than teeth themselves.': {
    en: 'CAT part. Replace with bucket teeth, longer lifespan than teeth themselves.',
    zh: 'CAT 零件。随斗齿更换,寿命长于斗齿本身',
    es: 'CAT part. Replace with bucket teeth, longer lifespan than teeth themselves.',
    ar: 'CAT part. Replace with bucket teeth, longer lifespan than teeth themselves.',
    ru: 'CAT part. Replace with bucket teeth, longer lifespan than teeth themselves.',
    fr: 'CAT part. Replace with bucket teeth, longer lifespan than teeth themselves.',
    pt: 'CAT part. Replace with bucket teeth, longer lifespan than teeth themselves.',
    it: 'CAT part. Replace with bucket teeth, longer lifespan than teeth themselves.'
  },
  'CAT part. Replace synchronously every time teeth are replaced.': {
    en: 'CAT part. Replace synchronously every time teeth are replaced.',
    zh: 'CAT 零件。每次换齿时同步更换',
    es: 'CAT part. Replace synchronously every time teeth are replaced.',
    ar: 'CAT part. Replace synchronously every time teeth are replaced.',
    ru: 'CAT part. Replace synchronously every time teeth are replaced.',
    fr: 'CAT part. Replace synchronously every time teeth are replaced.',
    pt: 'CAT part. Replace synchronously every time teeth are replaced.',
    it: 'CAT part. Replace synchronously every time teeth are replaced.'
  },
  'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair, high-cost part).': {
    en: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair, high-cost part).',
    zh: 'CAT 零件。异响/漏油/爬升无力时更换(大修类高价件)',
    es: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair, high-cost part).',
    ar: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair, high-cost part).',
    ru: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair, high-cost part).',
    fr: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair, high-cost part).',
    pt: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair, high-cost part).',
    it: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair, high-cost part).'
  },
  'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair).': {
    en: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair).',
    zh: 'CAT 零件。异响/漏油/爬升无力时更换(大修类)',
    es: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair).',
    ar: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair).',
    ru: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair).',
    fr: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair).',
    pt: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair).',
    it: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair).'
  },
  'CAT part. Replace when turntable makes abnormal noise or swing is weak (major repair).': {
    en: 'CAT part. Replace when turntable makes abnormal noise or swing is weak (major repair).',
    zh: 'CAT 零件。转台异响/摇臂无力时更换(大修类)',
    es: 'CAT part. Replace when turntable makes abnormal noise or swing is weak (major repair).',
    ar: 'CAT part. Replace when turntable makes abnormal noise or swing is weak (major repair).',
    ru: 'CAT part. Replace when turntable makes abnormal noise or swing is weak (major repair).',
    fr: 'CAT part. Replace when turntable makes abnormal noise or swing is weak (major repair).',
    pt: 'CAT part. Replace when turntable makes abnormal noise or swing is weak (major repair).',
    it: 'CAT part. Replace when turntable makes abnormal noise or swing is weak (major repair).'
  },
  'CAT part. Check wear with bucket teeth; longer lifespan than teeth themselves.': {
    en: 'CAT part. Check wear with bucket teeth; longer lifespan than teeth themselves.',
    zh: 'CAT 零件。随斗齿磨损检查,寿命长于斗齿本身',
    es: 'CAT part. Check wear with bucket teeth; longer lifespan than teeth themselves.',
    ar: 'CAT part. Check wear with bucket teeth; longer lifespan than teeth themselves.',
    ru: 'CAT part. Check wear with bucket teeth; longer lifespan than teeth themselves.',
    fr: 'CAT part. Check wear with bucket teeth; longer lifespan than teeth themselves.',
    pt: 'CAT part. Check wear with bucket teeth; longer lifespan than teeth themselves.',
    it: 'CAT part. Check wear with bucket teeth; longer lifespan than teeth themselves.'
  },
  'CAT part. Check wear with bucket teeth; high-frequency replacement part for dozer loosening teeth.': {
    en: 'CAT part. Check wear with bucket teeth; high-frequency replacement part for dozer loosening teeth.',
    zh: 'CAT 零件。随斗齿磨损,推土机松土齿高频更换件',
    es: 'CAT part. Check wear with bucket teeth; high-frequency replacement part for dozer loosening teeth.',
    ar: 'CAT part. Check wear with bucket teeth; high-frequency replacement part for dozer loosening teeth.',
    ru: 'CAT part. Check wear with bucket teeth; high-frequency replacement part for dozer loosening teeth.',
    fr: 'CAT part. Check wear with bucket teeth; high-frequency replacement part for dozer loosening teeth.',
    pt: 'CAT part. Check wear with bucket teeth; high-frequency replacement part for dozer loosening teeth.',
    it: 'CAT part. Check wear with bucket teeth; high-frequency replacement part for dozer loosening teeth.'
  },
  'CAT part. Replace when leaking or seal aging occurs.': {
    en: 'CAT part. Replace when leaking or seal aging occurs.',
    zh: 'CAT 零件。渗漏/密封老化时更换',
    es: 'CAT part. Replace when leaking or seal aging occurs.',
    ar: 'CAT part. Replace when leaking or seal aging occurs.',
    ru: 'CAT part. Replace when leaking or seal aging occurs.',
    fr: 'CAT part. Replace when leaking or seal aging occurs.',
    pt: 'CAT part. Replace when leaking or seal aging occurs.',
    it: 'CAT part. Replace when leaking or seal aging occurs.'
  },
  'CAT part. Replace when abnormal noise or excessive clearance occurs (high-frequency maintenance replacement part).': {
    en: 'CAT part. Replace when abnormal noise or excessive clearance occurs (high-frequency maintenance replacement part).',
    zh: 'CAT 零件。异响/间隙过大时更换(高频保养更换件)',
    es: 'CAT part. Replace when abnormal noise or excessive clearance occurs (high-frequency maintenance replacement part).',
    ar: 'CAT part. Replace when abnormal noise or excessive clearance occurs (high-frequency maintenance replacement part).',
    ru: 'CAT part. Replace when abnormal noise or excessive clearance occurs (high-frequency maintenance replacement part).',
    fr: 'CAT part. Replace when abnormal noise or excessive clearance occurs (high-frequency maintenance replacement part).',
    pt: 'CAT part. Replace when abnormal noise or excessive clearance occurs (high-frequency maintenance replacement part).',
    it: 'CAT part. Replace when abnormal noise or excessive clearance occurs (high-frequency maintenance replacement part).'
  },
  'CAT part. Replace when abnormal noise or excessive clearance occurs.': {
    en: 'CAT part. Replace when abnormal noise or excessive clearance occurs.',
    zh: 'CAT 零件。异响/间隙过大时更换',
    es: 'CAT part. Replace when abnormal noise or excessive clearance occurs.',
    ar: 'CAT part. Replace when abnormal noise or excessive clearance occurs.',
    ru: 'CAT part. Replace when abnormal noise or excessive clearance occurs.',
    fr: 'CAT part. Replace when abnormal noise or excessive clearance occurs.',
    pt: 'CAT part. Replace when abnormal noise or excessive clearance occurs.',
    it: 'CAT part. Replace when abnormal noise or excessive clearance occurs.'
  },
  'CAT part. Replace with pin, high-frequency wear part.': {
    en: 'CAT part. Replace with pin, high-frequency wear part.',
    zh: 'CAT 零件。随销更换,高频磨损件',
    es: 'CAT part. Replace with pin, high-frequency wear part.',
    ar: 'CAT part. Replace with pin, high-frequency wear part.',
    ru: 'CAT part. Replace with pin, high-frequency wear part.',
    fr: 'CAT part. Replace with pin, high-frequency wear part.',
    pt: 'CAT part. Replace with pin, high-frequency wear part.',
    it: 'CAT part. Replace with pin, high-frequency wear part.'
  },
};

export function usePartTranslation() {
  const { language } = useLanguage();

  const translateMachineDescription = (description: string): string => {
    const translations = machineDescriptionTranslations[description];
    if (translations && translations[language]) {
      return translations[language];
    }
    
    return description;
  };

  const translateDescription = (description: string): string => {
    // Fallback to the local partDescriptionTranslations
    const translations = partDescriptionTranslations[description];
    
    if (translations && translations[language]) {
      return translations[language];
    }
    
    return description;
  };

  const translateCompatibleModels = (models: string[] | undefined): string[] => {
    if (!models || language === 'zh') return models || [];
    
    // For now, keep model names as-is since they are typically standardized
    // In a real application, you might want to translate model descriptions
    return models;
  };

  const categoryTranslations: Record<string, Record<string, string>> = {
    '保养/滤清系统': { en: 'Maintenance/Filtration', es: 'Mantenimiento/Filtración', ar: 'الصيانة/التصفية', ru: 'Техническое обслуживание/Фильтрация', fr: 'Entretien/Filtration', pt: 'Manutenção/Filtração', it: 'Manutenzione/Filtrazione' },
    '传动/皮带': { en: 'Drivetrain/Belts', es: 'Transmisión/Correas', ar: 'نظام الدفع/الأحزمة', ru: 'Трансмиссия/Ремни', fr: 'Transmission/Courroies', pt: 'Transmissão/Correias', it: 'Trasmissione/Cinghie' },
    '制动系统': { en: 'Braking System', es: 'Sistema de frenado', ar: 'نظام الفرامل', ru: 'Тормозная система', fr: 'Système de freinage', pt: 'Sistema de frenagem', it: 'Sistema frenante' },
    '悬挂系统': { en: 'Suspension System', es: 'Sistema de suspensión', ar: 'نظام التعليق', ru: 'Система подвески', fr: 'Système de suspension', pt: 'Sistema de suspensão', it: 'Sistema di sospensione' },
    '转向系统': { en: 'Steering System', es: 'Sistema de dirección', ar: 'نظام التوجيه', ru: 'Рулевая система', fr: 'Système de direction', pt: 'Sistema de direção', it: 'Sistema di sterzo' },
    '轮毂/传动轴': { en: 'Wheels/Driveshaft', es: 'Ruedas/Eje de transmisión', ar: 'العجلات/عمود الدفع', ru: 'Колеса/Карданный вал', fr: 'Roues/Arbre de transmission', pt: 'Rodas/Eixo de transmissão', it: 'Ruote/Albero di trasmissione' },
    '差速器/传动': { en: 'Differential/Transmission', es: 'Diferencial/Transmisión', ar: 'التفاضل/الناقل', ru: 'Дифференциал/Трансмиссия', fr: 'Différentiel/Transmission', pt: 'Diferencial/Transmissão', it: 'Differenziale/Trasmissione' },
    '冷却系统': { en: 'Cooling System', es: 'Sistema de refrigeración', ar: 'نظام التبريد', ru: 'Система охлаждения', fr: 'Système de refroidissement', pt: 'Sistema de resfriamento', it: 'Sistema di raffreddamento' },
  };

  const buttonTranslations: Record<string, Record<string, string>> = {
    '查看详情': { en: 'View Details', es: 'Ver detalles', ar: 'عرض التفاصيل', ru: 'Просмотр деталей', fr: 'Voir les détails', pt: 'Ver detalhes', it: 'Visualizza dettagli' },
    '询价': { en: 'Inquiry', es: 'Consulta', ar: 'استفسار', ru: 'Запрос', fr: 'Demande', pt: 'Consulta', it: 'Richiesta' },
  };

  const translatePartCategory = (category: string): string => {
    if (language === 'zh') return category;
    // Fallback to local categoryTranslations
    const translations = categoryTranslations[category];
    return translations ? (translations[language] || category) : category;
  };

  const translatePartButtonText = (text: string): string => {
    if (language === 'zh') return text;
    const translations = buttonTranslations[text];
    return translations ? (translations[language] || text) : text;
  };

  const translatePartName = (name: string): string => {
    // Use sparePartsTranslations to translate part names for all languages
    console.log('[DEBUG translatePartName] Input:', { name, language });
    console.log('[DEBUG translatePartName] Output:', { name, language });
    return name;
  };

  return {
    translateMachineDescription,
    translateDescription,
    translateCompatibleModels,
    translatePartCategory,
    translatePartButtonText,
    translatePartName
  };
}
