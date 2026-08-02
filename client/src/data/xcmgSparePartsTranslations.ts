// XCMG Spare Parts Translations
// Supports: Chinese, English, Spanish, Arabic, Russian, French, Portuguese, Italian

// Spare parts category translations
export const xcmgSparePartCategoryTranslations: Record<string, Record<string, string>> = {
  '保养/滤清系统': {
    zh: '保养/滤清系统',
    en: 'Maintenance/Filter System',
    es: 'Mantenimiento/Sistema de Filtración',
    ar: 'الصيانة/نظام الفلترة',
    ru: 'Обслуживание/Система фильтрации',
    fr: 'Entretien/Système de filtration',
    pt: 'Manutenção/Sistema de Filtração',
    it: 'Manutenzione/Sistema di Filtrazione'
  },
  '电气/传感器': {
    zh: '电气/传感器',
    en: 'Electrical/Sensors',
    es: 'Eléctrico/Sensores',
    ar: 'كهربائي/أجهزة استشعار',
    ru: 'Электрический/Датчики',
    fr: 'Électrique/Capteurs',
    pt: 'Elétrico/Sensores',
    it: 'Elettrico/Sensori'
  },
  '挖掘属性/GET': {
    zh: '挖掘属性/GET',
    en: 'Excavation/Bucket Teeth',
    es: 'Excavación/Dientes de Cucharón',
    ar: 'التنقيب/أسنان الدلو',
    ru: 'Экскавация/Зубья ковша',
    fr: 'Excavation/Dents de Godet',
    pt: 'Escavação/Dentes da Caçamba',
    it: 'Scavo/Denti della Benna'
  },
  '传动/变速系统': {
    zh: '传动/变速系统',
    en: 'Transmission/Gearbox System',
    es: 'Sistema de Transmisión/Caja de Cambios',
    ar: 'نظام النقل/علبة التروس',
    ru: 'Система передачи/коробка передач',
    fr: 'Système de Transmission/Boîte de Vitesses',
    pt: 'Sistema de Transmissão/Caixa de Câmbio',
    it: 'Sistema Trasmissione/Cambio'
  },
  '液压系统': {
    zh: '液压系统',
    en: 'Hydraulic System',
    es: 'Sistema Hidráulico',
    ar: 'النظام الهيدروليكي',
    ru: 'Гидравлическая система',
    fr: 'Système Hydraulique',
    pt: 'Sistema Hidráulico',
    it: 'Sistema Idraulico'
  },
  '制动系统': {
    zh: '制动系统',
    en: 'Braking System',
    es: 'Sistema de Frenos',
    ar: 'نظام الفرامل',
    ru: 'Тормозная система',
    fr: 'Système de Freinage',
    pt: 'Sistema de Freios',
    it: 'Sistema Frenante'
  },
  '密封/传动件': {
    zh: '密封/传动件',
    en: 'Seals/Drive Components',
    es: 'Sellos/Componentes de Transmisión',
    ar: 'الأختام/مكونات النقل',
    ru: 'Уплотнения/компоненты передачи',
    fr: 'Joints/Composants de Transmission',
    pt: 'Vedações/Componentes de Transmissão',
    it: 'Sigilli/Componenti di Trasmissione'
  }
};

// Spare parts name and description translations
export const xcmgSparePartsTranslations: Record<string, Record<string, { name: string; description: string }>> = {
  'xcmg-sp-1': {
    zh: { name: '液压油滤芯', description: 'XCMG 液压油滤芯。500-1000小时或视油液检测情况更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Hydraulic Oil Filter', description: 'XCMG hydraulic oil filter element. Replace every 500-1000 hours or based on oil analysis. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Filtro de Aceite Hidráulico', description: 'Elemento de filtro de aceite hidráulico XCMG. Reemplazar cada 500-1000 horas o según análisis de aceite. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'فلتر الزيت الهيدروليكي', description: 'عنصر فلتر الزيت الهيدروليكي XCMG. استبدل كل 500-1000 ساعة أو بناءً على تحليل الزيت. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Фильтр гидравлического масла', description: 'Элемент фильтра гидравлического масла XCMG. Заменяйте каждые 500-1000 часов или на основе анализа масла. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Filtre à Huile Hydraulique', description: 'Élément de filtre à huile hydraulique XCMG. À remplacer tous les 500-1000 heures ou selon l\'analyse d\'huile. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Filtro de Óleo Hidráulico', description: 'Elemento de filtro de óleo hidráulico XCMG. Substituir a cada 500-1000 horas ou com base na análise de óleo. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Filtro Olio Idraulico', description: 'Elemento filtro olio idraulico XCMG. Sostituire ogni 500-1000 ore o in base all\'analisi dell\'olio. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-2': {
    zh: { name: '空气滤芯', description: 'XCMG 空气滤芯。250-500小时或视灰尘环境更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Air Filter Element', description: 'XCMG air filter element. Replace every 250-500 hours or based on dust environment. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Elemento de Filtro de Aire', description: 'Elemento de filtro de aire XCMG. Reemplazar cada 250-500 horas o según el ambiente polvoriento. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'عنصر فلتر الهواء', description: 'عنصر فلتر الهواء XCMG. استبدل كل 250-500 ساعة أو بناءً على بيئة الغبار. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Элемент воздушного фильтра', description: 'Элемент воздушного фильтра XCMG. Заменяйте каждые 250-500 часов или в зависимости от пыльной среды. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Élément de Filtre à Air', description: 'Élément de filtre à air XCMG. À remplacer tous les 250-500 heures ou selon l\'environnement poussiéreux. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Elemento de Filtro de Ar', description: 'Elemento de filtro de ar XCMG. Substituir a cada 250-500 horas ou com base no ambiente poeirento. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Elemento Filtro Aria', description: 'Elemento filtro aria XCMG. Sostituire ogni 250-500 ore o in base all\'ambiente polveroso. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-3': {
    zh: { name: '液压回油滤芯', description: 'XCMG 液压回油滤芯。500-1000小时更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Hydraulic Return Oil Filter', description: 'XCMG hydraulic return oil filter element. Replace every 500-1000 hours. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Filtro de Aceite de Retorno Hidráulico', description: 'Elemento de filtro de aceite de retorno hidráulico XCMG. Reemplazar cada 500-1000 horas. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'فلتر الزيت الهيدروليكي العائد', description: 'عنصر فلتر الزيت الهيدروليكي العائد XCMG. استبدل كل 500-1000 ساعة. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Фильтр гидравлического масла обратного потока', description: 'Элемент фильтра гидравлического масла обратного потока XCMG. Заменяйте каждые 500-1000 часов. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Filtre à Huile Hydraulique de Retour', description: 'Élément de filtre à huile hydraulique de retour XCMG. À remplacer tous les 500-1000 heures. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Filtro de Óleo Hidráulico de Retorno', description: 'Elemento de filtro de óleo hidráulico de retorno XCMG. Substituir a cada 500-1000 horas. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Filtro Olio Idraulico di Ritorno', description: 'Elemento filtro olio idraulico di ritorno XCMG. Sostituire ogni 500-1000 ore. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-4': {
    zh: { name: '空气滤芯套装(内外芯)', description: 'XCMG 空气滤芯套装。随外芯周期同步更换内芯。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Air Filter Kit (Inner & Outer)', description: 'XCMG air filter kit with inner and outer elements. Replace inner element synchronously with outer element cycle. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Kit de Filtro de Aire (Interior y Exterior)', description: 'Kit de filtro de aire XCMG con elementos interior y exterior. Reemplazar elemento interior sincronizado con ciclo de elemento exterior. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'مجموعة فلتر الهواء (داخلي وخارجي)', description: 'مجموعة فلتر الهواء XCMG مع عناصر داخلية وخارجية. استبدل العنصر الداخلي بالتزامن مع دورة العنصر الخارجي. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Комплект воздушного фильтра (внутренний и внешний)', description: 'Комплект воздушного фильтра XCMG с внутренним и внешним элементами. Заменяйте внутренний элемент синхронно с циклом внешнего элемента. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Kit de Filtre à Air (Intérieur et Extérieur)', description: 'Kit de filtre à air XCMG avec éléments intérieur et extérieur. Remplacer l\'élément intérieur de manière synchrone avec le cycle de l\'élément extérieur. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Kit de Filtro de Ar (Interior e Exterior)', description: 'Kit de filtro de ar XCMG com elementos interior e exterior. Substituir elemento interior sincronizado com ciclo de elemento exterior. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Kit Filtro Aria (Interno ed Esterno)', description: 'Kit filtro aria XCMG con elementi interno ed esterno. Sostituire elemento interno sincronizzato con ciclo elemento esterno. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-5': {
    zh: { name: '液压油滤芯(变体)', description: 'XCMG 液压油滤芯变体版本。500-1000小时更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Hydraulic Oil Filter (Variant)', description: 'XCMG hydraulic oil filter element variant version. Replace every 500-1000 hours. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Filtro de Aceite Hidráulico (Variante)', description: 'Elemento de filtro de aceite hidráulico XCMG versión variante. Reemplazar cada 500-1000 horas. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'فلتر الزيت الهيدروليكي (متغير)', description: 'عنصر فلتر الزيت الهيدروليكي XCMG نسخة متغيرة. استبدل كل 500-1000 ساعة. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Фильтр гидравлического масла (вариант)', description: 'Элемент фильтра гидравлического масла XCMG вариант версии. Заменяйте каждые 500-1000 часов. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Filtre à Huile Hydraulique (Variante)', description: 'Élément de filtre à huile hydraulique XCMG version variante. À remplacer tous les 500-1000 heures. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Filtro de Óleo Hidráulico (Variante)', description: 'Elemento de filtro de óleo hidráulico XCMG versão variante. Substituir a cada 500-1000 horas. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Filtro Olio Idraulico (Variante)', description: 'Elemento filtro olio idraulico XCMG versione variante. Sostituire ogni 500-1000 ore. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-6': {
    zh: { name: '机油滤芯', description: 'XCMG 机油滤芯。250-500小时随保养更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Oil Filter', description: 'XCMG oil filter element. Replace every 250-500 hours during maintenance. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Filtro de Aceite', description: 'Elemento de filtro de aceite XCMG. Reemplazar cada 250-500 horas durante el mantenimiento. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'فلتر الزيت', description: 'عنصر فلتر الزيت XCMG. استبدل كل 250-500 ساعة أثناء الصيانة. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Масляный фильтр', description: 'Элемент масляного фильтра XCMG. Заменяйте каждые 250-500 часов во время обслуживания. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Filtre à Huile', description: 'Élément de filtre à huile XCMG. À remplacer tous les 250-500 heures lors de l\'entretien. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Filtro de Óleo', description: 'Elemento de filtro de óleo XCMG. Substituir a cada 250-500 horas durante a manutenção. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Filtro Olio', description: 'Elemento filtro olio XCMG. Sostituire ogni 250-500 ore durante la manutenzione. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-7': {
    zh: { name: '空气滤芯(ZL50)', description: 'XCMG ZL50 专用空气滤芯。250-500小时更换。适用于 XCMG ZL50G、ZL50GN 装载机。' },
    en: { name: 'Air Filter Element (ZL50)', description: 'XCMG ZL50 specific air filter element. Replace every 250-500 hours. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Elemento de Filtro de Aire (ZL50)', description: 'Elemento de filtro de aire específico XCMG ZL50. Reemplazar cada 250-500 horas. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'عنصر فلتر الهواء (ZL50)', description: 'عنصر فلتر الهواء المحدد XCMG ZL50. استبدل كل 250-500 ساعة. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Элемент воздушного фильтра (ZL50)', description: 'Специфический элемент воздушного фильтра XCMG ZL50. Заменяйте каждые 250-500 часов. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Élément de Filtre à Air (ZL50)', description: 'Élément de filtre à air spécifique XCMG ZL50. À remplacer tous les 250-500 heures. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Elemento de Filtro de Ar (ZL50)', description: 'Elemento de filtro de ar específico XCMG ZL50. Substituir a cada 250-500 horas. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Elemento Filtro Aria (ZL50)', description: 'Elemento filtro aria specifico XCMG ZL50. Sostituire ogni 250-500 ore. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-8': {
    zh: { name: '机油滤芯(带锁止阀)', description: 'XCMG 机油滤芯带锁止阀。250-500小时更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Oil Filter (With Anti-Drainback Valve)', description: 'XCMG oil filter element with anti-drainback valve. Replace every 250-500 hours. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Filtro de Aceite (Con Válvula Antidrenaje)', description: 'Elemento de filtro de aceite XCMG con válvula antidrenaje. Reemplazar cada 250-500 horas. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'فلتر الزيت (مع صمام منع التصريف)', description: 'عنصر فلتر الزيت XCMG مع صمام منع التصريف. استبدل كل 250-500 ساعة. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Масляный фильтр (с обратным клапаном)', description: 'Элемент масляного фильтра XCMG с обратным клапаном. Заменяйте каждые 250-500 часов. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Filtre à Huile (Avec Clapet Anti-Vidange)', description: 'Élément de filtre à huile XCMG avec clapet anti-vidange. À remplacer tous les 250-500 heures. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Filtro de Óleo (Com Válvula Anti-Drenagem)', description: 'Elemento de filtro de óleo XCMG com válvula anti-drenagem. Substituir a cada 250-500 horas. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Filtro Olio (Con Valvola Anti-Scarico)', description: 'Elemento filtro olio XCMG con valvola anti-scarico. Sostituire ogni 250-500 ore. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-9': {
    zh: { name: '液压油滤芯(型号2)', description: 'XCMG 液压油滤芯型号2版本。500-1000小时更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Hydraulic Oil Filter (Model 2)', description: 'XCMG hydraulic oil filter element model 2 version. Replace every 500-1000 hours. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Filtro de Aceite Hidráulico (Modelo 2)', description: 'Elemento de filtro de aceite hidráulico XCMG modelo 2. Reemplazar cada 500-1000 horas. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'فلتر الزيت الهيدروليكي (موديل 2)', description: 'عنصر فلتر الزيت الهيدروليكي XCMG موديل 2. استبدل كل 500-1000 ساعة. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Фильтр гидравлического масла (модель 2)', description: 'Элемент фильтра гидравлического масла XCMG модель 2. Заменяйте каждые 500-1000 часов. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Filtre à Huile Hydraulique (Modèle 2)', description: 'Élément de filtre à huile hydraulique XCMG modèle 2. À remplacer tous les 500-1000 heures. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Filtro de Óleo Hidráulico (Modelo 2)', description: 'Elemento de filtro de óleo hidráulico XCMG modelo 2. Substituir a cada 500-1000 horas. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Filtro Olio Idraulico (Modello 2)', description: 'Elemento filtro olio idraulico XCMG modello 2. Sostituire ogni 500-1000 ore. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-10': {
    zh: { name: '水温传感器', description: 'XCMG 水温传感器。水温异常报警时更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Water Temperature Sensor', description: 'XCMG water temperature sensor. Replace when water temperature alarm triggers. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Sensor de Temperatura del Agua', description: 'Sensor de temperatura del agua XCMG. Reemplazar cuando se activa la alarma de temperatura del agua. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'مستشعر درجة حرارة الماء', description: 'مستشعر درجة حرارة الماء XCMG. استبدل عند تفعيل إنذار درجة حرارة الماء. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Датчик температуры воды', description: 'Датчик температуры воды XCMG. Заменяйте при срабатывании сигнала тревоги температуры воды. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Capteur de Température d\'Eau', description: 'Capteur de température d\'eau XCMG. À remplacer lors du déclenchement de l\'alarme de température d\'eau. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Sensor de Temperatura da Água', description: 'Sensor de temperatura da água XCMG. Substituir quando o alarme de temperatura da água for acionado. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Sensore Temperatura Acqua', description: 'Sensore temperatura acqua XCMG. Sostituire quando si attiva l\'allarme di temperatura dell\'acqua. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-11': {
    zh: { name: '铲斗斗齿', description: 'XCMG 铲斗斗齿。磨损见底或断裂时更换，高频更换件。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Bucket Teeth', description: 'XCMG bucket teeth. Replace when worn to the bottom or broken, high-frequency replacement part. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Dientes de Cucharón', description: 'Dientes de cucharón XCMG. Reemplazar cuando se desgasten hasta el fondo o se rompan, pieza de reemplazo de alta frecuencia. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'أسنان الدلو', description: 'أسنان الدلو XCMG. استبدل عند البلى إلى الأسفل أو الكسر، جزء استبدال عالي التكرار. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Зубья ковша', description: 'Зубья ковша XCMG. Заменяйте при износе до дна или поломке, часто заменяемая деталь. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Dents de Godet', description: 'Dents de godet XCMG. À remplacer lorsque usées jusqu\'au fond ou cassées, pièce de remplacement haute fréquence. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Dentes da Caçamba', description: 'Dentes da caçamba XCMG. Substituir quando desgastados até o fundo ou quebrados, peça de substituição de alta frequência. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Denti della Benna', description: 'Denti della benna XCMG. Sostituire quando usurati fino al fondo o rotti, pezzo di sostituzione ad alta frequenza. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-12': {
    zh: { name: '右侧斗齿', description: 'XCMG 右侧斗齿。磨损见底或断裂时更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Right Side Bucket Tooth', description: 'XCMG right side bucket tooth. Replace when worn to the bottom or broken. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Diente de Cucharón Lado Derecho', description: 'Diente de cucharón lado derecho XCMG. Reemplazar cuando se desgaste hasta el fondo o se rompa. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'سن الدلو الجانب الأيمن', description: 'سن الدلو الجانب الأيمن XCMG. استبدل عند البلى إلى الأسفل أو الكسر. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Зуб ковша правой стороны', description: 'Зуб ковша правой стороны XCMG. Заменяйте при износе до дна или поломке. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Dent de Godet Côté Droit', description: 'Dent de godet côté droit XCMG. À remplacer lorsqu\'usée jusqu\'au fond ou cassée. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Dente da Caçamba Lado Direito', description: 'Dente da caçamba lado direito XCMG. Substituir quando desgastado até o fundo ou quebrado. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Dente della Benna Lato Destro', description: 'Dente della benna lato destro XCMG. Sostituire quando usurato fino al fondo o rotto. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-13': {
    zh: { name: '左侧斗齿', description: 'XCMG 左侧斗齿。磨损见底或断裂时更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Left Side Bucket Tooth', description: 'XCMG left side bucket tooth. Replace when worn to the bottom or broken. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Diente de Cucharón Lado Izquierdo', description: 'Diente de cucharón lado izquierdo XCMG. Reemplazar cuando se desgaste hasta el fondo o se rompa. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'سن الدلو الجانب الأيسر', description: 'سن الدلو الجانب الأيسر XCMG. استبدل عند البلى إلى الأسفل أو الكسر. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Зуб ковша левой стороны', description: 'Зуб ковша левой стороны XCMG. Заменяйте при износе до дна или поломке. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Dent de Godet Côté Gauche', description: 'Dent de godet côté gauche XCMG. À remplacer lorsqu\'usée jusqu\'au fond ou cassée. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Dente da Caçamba Lado Esquerdo', description: 'Dente da caçamba lado esquerdo XCMG. Substituir quando desgastado até o fundo ou quebrado. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Dente della Benna Lato Sinistro', description: 'Dente della benna lato sinistro XCMG. Sostituire quando usurato fino al fondo o rotto. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-14': {
    zh: { name: '斗齿座(Tooth Holder)', description: 'XCMG 斗齿座。随斗齿更换，寿命长于斗齿本身。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Tooth Holder', description: 'XCMG tooth holder. Replace with bucket teeth, longer lifespan than teeth themselves. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Portador de Diente', description: 'Portador de diente XCMG. Reemplazar con dientes de cucharón, vida útil más larga que los dientes. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'حامل السن', description: 'حامل السن XCMG. استبدل مع أسنان الدلو، عمر أطول من الأسنان نفسها. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Держатель зуба', description: 'Держатель зуба XCMG. Заменяйте вместе с зубьями ковша, более длительный срок службы. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Support de Dent', description: 'Support de dent XCMG. À remplacer avec les dents de godet, durée de vie plus longue. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Suporte de Dente', description: 'Suporte de dente XCMG. Substituir com dentes da caçamba, vida útil mais longa. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Supporto Dente', description: 'Supporto dente XCMG. Sostituire con denti della benna, durata più lunga. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-15': {
    zh: { name: '变速箱总成(带变矩器)', description: 'XCMG 变速箱总成。异响/传动效率下降时更换（大修类高价件）。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Transmission Assembly (with Torque Converter)', description: 'XCMG transmission assembly. Replace when abnormal noise/reduced transmission efficiency (major overhaul high-value part). Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Conjunto de Transmisión (con Convertidor de Torque)', description: 'Conjunto de transmisión XCMG. Reemplazar cuando hay ruido anormal/eficiencia de transmisión reducida (pieza de alto valor de revisión mayor). Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'مجموعة ناقل الحركة (مع محول عزم الدوران)', description: 'مجموعة ناقل الحركة XCMG. استبدل عند وجود ضوضاء غير طبيعية/كفاءة نقل منخفضة (جزء عالي القيمة من الإصلاح الشامل). متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Коробка передач в сборе (с гидротрансформатором)', description: 'Коробка передач XCMG в сборе. Заменяйте при аномальном шуме/снижении эффективности передачи (дорогостоящая деталь капитального ремонта). Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Ensemble de Transmission (avec Convertisseur de Couple)', description: 'Ensemble de transmission XCMG. À remplacer en cas de bruit anormal/efficacité de transmission réduite (pièce de valeur élevée de révision majeure). Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Conjunto de Transmissão (com Conversor de Torque)', description: 'Conjunto de transmissão XCMG. Substituir quando há ruído anormal/eficiência de transmissão reduzida (peça de alto valor de revisão completa). Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Gruppo Trasmissione (con Convertitore di Coppia)', description: 'Gruppo trasmissione XCMG. Sostituire quando rumore anomalo/efficienza trasmissione ridotta (pezzo di alto valore revisione completa). Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-16': {
    zh: { name: '变速箱控制阀(变速阀)', description: 'XCMG 变速箱控制阀。换挡异常时更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Transmission Control Valve (Shift Valve)', description: 'XCMG transmission control valve. Replace when shifting abnormality occurs. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Válvula de Control de Transmisión (Válvula de Cambio)', description: 'Válvula de control de transmisión XCMG. Reemplazar cuando ocurre anomalía en el cambio. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'صمام التحكم في ناقل الحركة (صمام التحويل)', description: 'صمام التحكم في ناقل الحركة XCMG. استبدل عند حدوث شذوذ في التحويل. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Клапан управления коробкой передач (клапан переключения)', description: 'Клапан управления коробкой передач XCMG. Заменяйте при аномалии переключения. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Clapet de Commande de Transmission (Clapet de Changement)', description: 'Clapet de commande de transmission XCMG. À remplacer en cas d\'anomalie de changement. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Válvula de Controle de Transmissão (Válvula de Câmbio)', description: 'Válvula de controle de transmissão XCMG. Substituir quando ocorre anomalia de câmbio. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Valvola di Controllo Trasmissione (Valvola di Cambio)', description: 'Valvola di controllo trasmissione XCMG. Sostituire quando si verifica anomalia di cambio. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-17': {
    zh: { name: '变速箱倒挡活塞', description: 'XCMG 变速箱倒挡活塞。换挡不畅/打滑时更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Transmission Reverse Piston', description: 'XCMG transmission reverse piston. Replace when shifting is sluggish/slipping. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Pistón de Marcha Atrás de Transmisión', description: 'Pistón de marcha atrás de transmisión XCMG. Reemplazar cuando el cambio es lento/hay deslizamiento. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'مكبس الرجوع للخلف في ناقل الحركة', description: 'مكبس الرجوع للخلف XCMG. استبدل عند بطء التحويل/الانزلاق. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Поршень заднего хода коробки передач', description: 'Поршень заднего хода XCMG. Заменяйте при вялом переключении/пробуксовке. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Piston de Marche Arrière de Transmission', description: 'Piston de marche arrière XCMG. À remplacer en cas de changement lent/glissement. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Pistão de Marcha Ré da Transmissão', description: 'Pistão de marcha ré XCMG. Substituir quando câmbio lento/escorregamento. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Pistone Retromarcia Trasmissione', description: 'Pistone retromarcia XCMG. Sostituire quando cambio lento/slittamento. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-18': {
    zh: { name: '驱动桥半轴齿轮(差速器齿轮)', description: 'XCMG 驱动桥半轴齿轮。大修/异响时更换（大修类）。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Drive Axle Half-Shaft Gear (Differential Gear)', description: 'XCMG drive axle half-shaft gear. Replace during major overhaul/abnormal noise (major overhaul class). Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Engranaje de Semieje de Eje Motriz (Engranaje Diferencial)', description: 'Engranaje de semieje de eje motriz XCMG. Reemplazar durante revisión mayor/ruido anormal (clase de revisión mayor). Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'تروس نصف المحور للمحور الرئيسي (تروس التفاضل)', description: 'تروس نصف المحور XCMG. استبدل أثناء الإصلاح الشامل/الضوضاء غير الطبيعية (فئة الإصلاح الشامل). متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Шестерня полуоси ведущего моста (шестерня дифференциала)', description: 'Шестерня полуоси XCMG. Заменяйте при капитальном ремонте/аномальном шуме (класс капитального ремонта). Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Engrenage de Demi-Arbre d\'Essieu Moteur (Engrenage Différentiel)', description: 'Engrenage de demi-arbre XCMG. À remplacer lors de révision majeure/bruit anormal (classe révision majeure). Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Engrenagem de Semieixo do Eixo Motriz (Engrenagem Diferencial)', description: 'Engrenagem de semieixo XCMG. Substituir durante revisão completa/ruído anormal (classe revisão completa). Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Ingranaggio Semiasse Assale Motore (Ingranaggio Differenziale)', description: 'Ingranaggio semiasse XCMG. Sostituire durante revisione completa/rumore anomalo (classe revisione completa). Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-19': {
    zh: { name: '工作液压泵', description: 'XCMG 工作液压泵。异响/供油不足/压力下降时更换（大修类高价件）。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Main Hydraulic Pump', description: 'XCMG main hydraulic pump. Replace when abnormal noise/insufficient oil supply/pressure drop (major overhaul high-value part). Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Bomba Hidráulica Principal', description: 'Bomba hidráulica principal XCMG. Reemplazar cuando hay ruido anormal/suministro insuficiente de aceite/caída de presión (pieza de alto valor de revisión mayor). Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'مضخة هيدروليكية رئيسية', description: 'مضخة هيدروليكية XCMG الرئيسية. استبدل عند وجود ضوضاء غير طبيعية/إمداد زيت غير كافي/انخفاض الضغط (جزء عالي القيمة من الإصلاح الشامل). متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Основной гидравлический насос', description: 'Основной гидравлический насос XCMG. Заменяйте при аномальном шуме/недостаточной подаче масла/падении давления (дорогостоящая деталь капитального ремонта). Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Pompe Hydraulique Principale', description: 'Pompe hydraulique principale XCMG. À remplacer en cas de bruit anormal/alimentation insuffisante en huile/chute de pression (pièce de valeur élevée de révision majeure). Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Bomba Hidráulica Principal', description: 'Bomba hidráulica principal XCMG. Substituir quando há ruído anormal/suprimento insuficiente de óleo/queda de pressão (peça de alto valor de revisão completa). Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Pompa Idraulica Principale', description: 'Pompa idraulica principale XCMG. Sostituire quando rumore anomalo/insufficiente fornitura di olio/calo di pressione (pezzo di alto valore revisione completa). Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-20': {
    zh: { name: '刹车片(SOMA制动衬片)', description: 'XCMG 刹车片。30,000-50,000km或视磨损情况更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Brake Pad (SOMA Brake Lining)', description: 'XCMG brake pad. Replace every 30,000-50,000 km or based on wear. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Pastilla de Freno (Forro de Freno SOMA)', description: 'Pastilla de freno XCMG. Reemplazar cada 30,000-50,000 km o según el desgaste. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'وسادة الفرامل (بطانة الفرامل SOMA)', description: 'وسادة الفرامل XCMG. استبدل كل 30,000-50,000 كم أو بناءً على التآكل. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Тормозная колодка (тормозная накладка SOMA)', description: 'Тормозная колодка XCMG. Заменяйте каждые 30,000-50,000 км или в зависимости от износа. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Plaquette de Frein (Garniture de Frein SOMA)', description: 'Plaquette de frein XCMG. À remplacer tous les 30,000-50,000 km ou selon l\'usure. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Pastilha de Freio (Forro de Freio SOMA)', description: 'Pastilha de freio XCMG. Substituir a cada 30,000-50,000 km ou com base no desgaste. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Pastiglie Freno (Rivestimento Freno SOMA)', description: 'Pastiglie freno XCMG. Sostituire ogni 30,000-50,000 km o in base all\'usura. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-21': {
    zh: { name: '制动盘(刹车盘)', description: 'XCMG 制动盘。盘面磨损/异响时更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Brake Disc (Rotor)', description: 'XCMG brake disc. Replace when disc surface worn/abnormal noise. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Disco de Freno (Rotor)', description: 'Disco de freno XCMG. Reemplazar cuando la superficie del disco está desgastada/hay ruido anormal. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'قرص الفرامل (الدوار)', description: 'قرص الفرامل XCMG. استبدل عند تآكل سطح القرص/ضوضاء غير طبيعية. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Тормозной диск (ротор)', description: 'Тормозной диск XCMG. Заменяйте при износе поверхности диска/аномальном шуме. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Disque de Frein (Rotor)', description: 'Disque de frein XCMG. À remplacer lorsque la surface du disque est usée/bruit anormal. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Disco de Freio (Rotor)', description: 'Disco de freio XCMG. Substituir quando superfície do disco desgastada/ruído anormal. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Disco Freno (Rotore)', description: 'Disco freno XCMG. Sostituire quando superficie disco usurata/rumore anomalo. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-22': {
    zh: { name: '手刹阀', description: 'XCMG 手刹阀。驻车异响/失效时检修更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Parking Brake Valve', description: 'XCMG parking brake valve. Inspect and replace when parking abnormal noise/failure. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Válvula de Freno de Estacionamiento', description: 'Válvula de freno de estacionamiento XCMG. Inspeccionar y reemplazar cuando hay ruido anormal de estacionamiento/falla. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'صمام فرامل الانتظار', description: 'صمام فرامل الانتظار XCMG. افحص واستبدل عند وجود ضوضاء غير طبيعية في الانتظار/فشل. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Клапан стояночного тормоза', description: 'Клапан стояночного тормоза XCMG. Проверяйте и заменяйте при аномальном шуме парковки/отказе. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Clapet de Frein de Stationnement', description: 'Clapet de frein de stationnement XCMG. Inspecter et remplacer en cas de bruit anormal de stationnement/défaillance. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Válvula de Freio de Estacionamento', description: 'Válvula de freio de estacionamento XCMG. Inspecionar e substituir quando há ruído anormal de estacionamento/falha. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Valvola Freno di Stazionamento', description: 'Valvola freno di stazionamento XCMG. Ispezionare e sostituire quando rumore anormale di stazionamento/guasto. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-23': {
    zh: { name: '手刹鼓(制动鼓)', description: 'XCMG 手刹鼓。制动效果下降/异响时更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Parking Brake Drum (Brake Drum)', description: 'XCMG parking brake drum. Replace when braking effect reduced/abnormal noise. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Tambor de Freno de Estacionamiento (Tambor de Freno)', description: 'Tambor de freno de estacionamiento XCMG. Reemplazar cuando el efecto de frenado se reduce/hay ruido anormal. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'أسطوانة فرامل الانتظار (أسطوانة الفرامل)', description: 'أسطوانة فرامل الانتظار XCMG. استبدل عند تقليل تأثير الفرامل/ضوضاء غير طبيعية. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Барабан стояночного тормоза (тормозной барабан)', description: 'Барабан стояночного тормоза XCMG. Заменяйте при снижении эффекта торможения/аномальном шуме. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Tambour de Frein de Stationnement (Tambour de Frein)', description: 'Tambour de frein de stationnement XCMG. À remplacer en cas de réduction de l\'effet de freinage/bruit anormal. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Tambor de Freio de Estacionamento (Tambor de Freio)', description: 'Tambor de freio de estacionamento XCMG. Substituir quando efeito de frenagem reduzido/ruído anormal. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Tamburo Freno di Stazionamento (Tamburo Freno)', description: 'Tamburo freno di stazionamento XCMG. Sostituire quando effetto frenatura ridotto/rumore anomalo. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-24': {
    zh: { name: '唇形油封', description: 'XCMG 唇形油封。漏油时更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Lip Seal', description: 'XCMG lip seal. Replace when oil leakage occurs. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Sello de Labio', description: 'Sello de labio XCMG. Reemplazar cuando ocurre fuga de aceite. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'ختم الشفاه', description: 'ختم الشفاه XCMG. استبدل عند حدوث تسرب زيت. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Уплотнение губ', description: 'Уплотнение губ XCMG. Заменяйте при утечке масла. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Joint à Lèvre', description: 'Joint à lèvre XCMG. À remplacer en cas de fuite d\'huile. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Vedação de Lábio', description: 'Vedação de lábio XCMG. Substituir quando ocorre vazamento de óleo. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Guarnizione Labbro', description: 'Guarnizione labbro XCMG. Sostituire quando si verifica perdita di olio. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-25': {
    zh: { name: '万向节联轴器', description: 'XCMG 万向节联轴器。异响/抖动时更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Universal Joint Coupling', description: 'XCMG universal joint coupling. Replace when abnormal noise/vibration occurs. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Acoplamiento de Junta Universal', description: 'Acoplamiento de junta universal XCMG. Reemplazar cuando ocurre ruido anormal/vibración. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'اقتران المفصل العام', description: 'اقتران المفصل العام XCMG. استبدل عند حدوث ضوضاء غير طبيعية/اهتزاز. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Муфта карданного шарнира', description: 'Муфта карданного шарнира XCMG. Заменяйте при аномальном шуме/вибрации. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Accouplement à Joint Universel', description: 'Accouplement à joint universel XCMG. À remplacer en cas de bruit anormal/vibration. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Acoplamento de Junta Universal', description: 'Acoplamento de junta universal XCMG. Substituir quando ocorre ruído anormal/vibração. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Accoppiamento Giunto Universale', description: 'Accoppiamento giunto universale XCMG. Sostituire quando rumore anomalo/vibrazione. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  },
  'xcmg-sp-26': {
    zh: { name: '溢流阀(继动阀)', description: 'XCMG 溢流阀。液压异常/压力不稳时更换。适用于 XCMG ZL50G、ZL50GN 等装载机。' },
    en: { name: 'Relief Valve (Pilot Valve)', description: 'XCMG relief valve. Replace when hydraulic abnormality/unstable pressure occurs. Compatible with XCMG ZL50G, ZL50GN loaders.' },
    es: { name: 'Válvula de Alivio (Válvula Piloto)', description: 'Válvula de alivio XCMG. Reemplazar cuando ocurre anomalía hidráulica/presión inestable. Compatible con cargadores XCMG ZL50G, ZL50GN.' },
    ar: { name: 'صمام الإغاثة (صمام التحكم)', description: 'صمام الإغاثة XCMG. استبدل عند حدوث شذوذ هيدروليكي/ضغط غير مستقر. متوافق مع محملات XCMG ZL50G و ZL50GN.' },
    ru: { name: 'Предохранительный клапан (пилотный клапан)', description: 'Предохранительный клапан XCMG. Заменяйте при гидравлической аномалии/нестабильном давлении. Совместим с погрузчиками XCMG ZL50G, ZL50GN.' },
    fr: { name: 'Clapet de Décharge (Clapet Pilote)', description: 'Clapet de décharge XCMG. À remplacer en cas d\'anomalie hydraulique/pression instable. Compatible avec les chargeuses XCMG ZL50G, ZL50GN.' },
    pt: { name: 'Válvula de Alívio (Válvula Piloto)', description: 'Válvula de alívio XCMG. Substituir quando anomalia hidráulica/pressão instável. Compatível com carregadeiras XCMG ZL50G, ZL50GN.' },
    it: { name: 'Valvola di Scarico (Valvola Pilota)', description: 'Valvola di scarico XCMG. Sostituire quando anomalia idraulica/pressione instabile. Compatibile con caricatori XCMG ZL50G, ZL50GN.' }
  }
};

// Translation functions
export function getTranslatedXCMGSparePartCategory(category: string, language: string = 'en'): string {
  const translations = xcmgSparePartCategoryTranslations[category];
  if (!translations) return category;
  return translations[language] || translations['en'] || category;
}

export function getTranslatedXCMGSparePart(partId: string, language: string = 'en'): { name: string; description: string } {
  const part = xcmgSparePartsTranslations[partId];
  if (!part) return { name: '', description: '' };
  const translation = part[language] || part['en'];
  return translation || { name: '', description: '' };
}
