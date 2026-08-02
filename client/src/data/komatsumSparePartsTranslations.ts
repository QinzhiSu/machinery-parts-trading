// Komatsu Spare Parts Translations
// Supports: Chinese, English, Spanish, Arabic, Russian, French, Portuguese, Italian

// Spare parts category translations
export const komatsumSparePartCategoryTranslations: Record<string, Record<string, string>> = {
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
  '底盘/履带系统': {
    zh: '底盘/履带系统',
    en: 'Chassis/Track System',
    es: 'Chasis/Sistema de Orugas',
    ar: 'الهيكل/نظام المسار',
    ru: 'Шасси/Система гусениц',
    fr: 'Châssis/Système de chenilles',
    pt: 'Chassi/Sistema de Esteiras',
    it: 'Telaio/Sistema di Cingoli'
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
  '液压系统': {
    zh: '液压系统',
    en: 'Hydraulic System',
    es: 'Sistema Hidráulico',
    ar: 'النظام الهيدروليكي',
    ru: 'Гидравлическая система',
    fr: 'Système hydraulique',
    pt: 'Sistema Hidráulico',
    it: 'Sistema Idraulico'
  },
  '电气系统': {
    zh: '电气系统',
    en: 'Electrical System',
    es: 'Sistema Eléctrico',
    ar: 'النظام الكهربائي',
    ru: 'Электрическая система',
    fr: 'Système électrique',
    pt: 'Sistema Elétrico',
    it: 'Sistema Elettrico'
  }
};

// Spare parts translations
export const komatsumSpareParts: Record<string, Record<string, { name: string; description: string }>> = {
  'komatsu-sp-1': {
    zh: { name: '液压油滤芯', description: 'KOMATSU 液压油滤芯。250-500小时或视液压油质量。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Hydraulic Oil Filter', description: 'KOMATSU hydraulic oil filter element. Replace every 250-500 hours or based on oil quality. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Filtro de Aceite Hidráulico', description: 'Elemento de filtro de aceite hidráulico KOMATSU. Reemplazar cada 250-500 horas o según la calidad del aceite. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'فلتر زيت هيدروليكي', description: 'عنصر فلتر الزيت الهيدروليكي KOMATSU. استبدل كل 250-500 ساعة أو حسب جودة الزيت. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Фильтр гидравлического масла', description: 'Элемент фильтра гидравлического масла KOMATSU. Заменяйте каждые 250-500 часов или в зависимости от качества масла. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Filtre à Huile Hydraulique', description: 'Élément de filtre à huile hydraulique KOMATSU. À remplacer tous les 250-500 heures ou selon la qualité de l\'huile. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Filtro de Óleo Hidráulico', description: 'Elemento de filtro de óleo hidráulico KOMATSU. Substituir a cada 250-500 horas ou conforme a qualidade do óleo. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Filtro Olio Idraulico', description: 'Elemento filtro olio idraulico KOMATSU. Sostituire ogni 250-500 ore o in base alla qualità dell\'olio. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-2': {
    zh: { name: '空气滤芯', description: 'KOMATSU 空气滤芯。500-1000小时或视空气质量。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Air Filter Element', description: 'KOMATSU air filter element. Replace every 500-1000 hours or based on air quality. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Elemento de Filtro de Aire', description: 'Elemento de filtro de aire KOMATSU. Reemplazar cada 500-1000 horas o según la calidad del aire. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'عنصر فلتر الهواء', description: 'عنصر فلتر الهواء KOMATSU. استبدل كل 500-1000 ساعة أو حسب جودة الهواء. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Элемент воздушного фильтра', description: 'Элемент воздушного фильтра KOMATSU. Заменяйте каждые 500-1000 часов или в зависимости от качества воздуха. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Élément Filtre à Air', description: 'Élément de filtre à air KOMATSU. À remplacer tous les 500-1000 heures ou selon la qualité de l\'air. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Elemento de Filtro de Ar', description: 'Elemento de filtro de ar KOMATSU. Substituir a cada 500-1000 horas ou conforme a qualidade do ar. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Elemento Filtro Aria', description: 'Elemento filtro aria KOMATSU. Sostituire ogni 500-1000 ore o in base alla qualità dell\'aria. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-3': {
    zh: { name: '机油滤芯', description: 'KOMATSU 机油滤芯。250-500小时或随保养更换。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Oil Filter Element', description: 'KOMATSU oil filter element. Replace every 250-500 hours or during maintenance. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Elemento de Filtro de Aceite', description: 'Elemento de filtro de aceite KOMATSU. Reemplazar cada 250-500 horas o durante el mantenimiento. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'عنصر فلتر الزيت', description: 'عنصر فلتر الزيت KOMATSU. استبدل كل 250-500 ساعة أو أثناء الصيانة. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Элемент масляного фильтра', description: 'Элемент масляного фильтра KOMATSU. Заменяйте каждые 250-500 часов или во время обслуживания. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Élément Filtre à Huile', description: 'Élément de filtre à huile KOMATSU. À remplacer tous les 250-500 heures ou pendant l\'entretien. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Elemento de Filtro de Óleo', description: 'Elemento de filtro de óleo KOMATSU. Substituir a cada 250-500 horas ou durante a manutenção. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Elemento Filtro Olio', description: 'Elemento filtro olio KOMATSU. Sostituire ogni 250-500 ore o durante la manutenzione. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-4': {
    zh: { name: '液压回油滤芯', description: 'KOMATSU 液压回油滤芯。500-1000小时。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Hydraulic Return Oil Filter', description: 'KOMATSU hydraulic return oil filter element. Replace every 500-1000 hours. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Filtro de Aceite de Retorno Hidráulico', description: 'Elemento de filtro de aceite de retorno hidráulico KOMATSU. Reemplazar cada 500-1000 horas. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'فلتر زيت العودة الهيدروليكي', description: 'عنصر فلتر زيت العودة الهيدروليكي KOMATSU. استبدل كل 500-1000 ساعة. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Фильтр гидравлического масла возврата', description: 'Элемент фильтра гидравлического масла возврата KOMATSU. Заменяйте каждые 500-1000 часов. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Filtre à Huile de Retour Hydraulique', description: 'Élément de filtre à huile de retour hydraulique KOMATSU. À remplacer tous les 500-1000 heures. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Filtro de Óleo de Retorno Hidráulico', description: 'Elemento de filtro de óleo de retorno hidráulico KOMATSU. Substituir a cada 500-1000 horas. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Filtro Olio Ritorno Idraulico', description: 'Elemento filtro olio ritorno idraulico KOMATSU. Sostituire ogni 500-1000 ore. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-5': {
    zh: { name: '先导液压滤芯', description: 'KOMATSU 先导液压滤芯。500-1000小时。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Pilot Hydraulic Filter', description: 'KOMATSU pilot hydraulic filter element. Replace every 500-1000 hours. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Filtro Hidráulico Piloto', description: 'Elemento de filtro hidráulico piloto KOMATSU. Reemplazar cada 500-1000 horas. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'فلتر هيدروليكي توجيهي', description: 'عنصر فلتر هيدروليكي توجيهي KOMATSU. استبدل كل 500-1000 ساعة. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Фильтр гидравлический пилотный', description: 'Элемент пилотного гидравлического фильтра KOMATSU. Заменяйте каждые 500-1000 часов. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Filtre Hydraulique Pilote', description: 'Élément de filtre hydraulique pilote KOMATSU. À remplacer tous les 500-1000 heures. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Filtro Hidráulico Piloto', description: 'Elemento de filtro hidráulico piloto KOMATSU. Substituir a cada 500-1000 horas. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Filtro Idraulico Pilota', description: 'Elemento filtro idraulico pilota KOMATSU. Sostituire ogni 500-1000 ore. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-6': {
    zh: { name: '先导液压滤芯', description: 'KOMATSU 先导液压滤芯。500-1000小时。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Pilot Hydraulic Filter Element', description: 'KOMATSU pilot hydraulic filter element. Replace every 500-1000 hours. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Elemento de Filtro Hidráulico Piloto', description: 'Elemento de filtro hidráulico piloto KOMATSU. Reemplazar cada 500-1000 horas. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'عنصر فلتر هيدروليكي توجيهي', description: 'عنصر فلتر هيدروليكي توجيهي KOMATSU. استبدل كل 500-1000 ساعة. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Элемент пилотного гидравлического фильтра', description: 'Элемент пилотного гидравлического фильтра KOMATSU. Заменяйте каждые 500-1000 часов. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Élément de Filtre Hydraulique Pilote', description: 'Élément de filtre hydraulique pilote KOMATSU. À remplacer tous les 500-1000 heures. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Elemento de Filtro Hidráulico Piloto', description: 'Elemento de filtro hidráulico piloto KOMATSU. Substituir a cada 500-1000 horas. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Elemento Filtro Idraulico Pilota', description: 'Elemento filtro idraulico pilota KOMATSU. Sostituire ogni 500-1000 ore. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-7': {
    zh: { name: '柴油滤芯(新款7/8系)', description: 'KOMATSU 柴油滤芯。250-500小时。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Diesel Filter (New 7/8 Series)', description: 'KOMATSU diesel filter element. Replace every 250-500 hours. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Filtro Diésel (Nueva Serie 7/8)', description: 'Elemento de filtro diésel KOMATSU. Reemplazar cada 250-500 horas. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'فلتر الديزل (سلسلة 7/8 جديدة)', description: 'عنصر فلتر الديزل KOMATSU. استبدل كل 250-500 ساعة. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Фильтр дизеля (новая серия 7/8)', description: 'Элемент фильтра дизеля KOMATSU. Заменяйте каждые 250-500 часов. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Filtre Diesel (Nouvelle Série 7/8)', description: 'Élément de filtre diesel KOMATSU. À remplacer tous les 250-500 heures. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Filtro Diesel (Nova Série 7/8)', description: 'Elemento de filtro diesel KOMATSU. Substituir a cada 250-500 horas. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Filtro Diesel (Nuova Serie 7/8)', description: 'Elemento filtro diesel KOMATSU. Sostituire ogni 250-500 ore. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-8': {
    zh: { name: '柴油滤芯(通用型)', description: 'KOMATSU 柴油滤芯。250-500小时。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Diesel Filter (Universal Type)', description: 'KOMATSU diesel filter element. Replace every 250-500 hours. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Filtro Diésel (Tipo Universal)', description: 'Elemento de filtro diésel KOMATSU. Reemplazar cada 250-500 horas. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'فلتر الديزل (نوع عام)', description: 'عنصر فلتر الديزل KOMATSU. استبدل كل 250-500 ساعة. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Фильтр дизеля (универсальный тип)', description: 'Элемент фильтра дизеля KOMATSU. Заменяйте каждые 250-500 часов. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Filtre Diesel (Type Universel)', description: 'Élément de filtre diesel KOMATSU. À remplacer tous les 250-500 heures. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Filtro Diesel (Tipo Universal)', description: 'Elemento de filtro diesel KOMATSU. Substituir a cada 250-500 horas. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Filtro Diesel (Tipo Universale)', description: 'Elemento filtro diesel KOMATSU. Sostituire ogni 250-500 ore. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-9': {
    zh: { name: '机油滤芯(6D102发动机)', description: 'KOMATSU 机油滤芯。250-500小时随保养更换。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Oil Filter (6D102 Engine)', description: 'KOMATSU oil filter element. Replace every 250-500 hours during maintenance. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Filtro de Aceite (Motor 6D102)', description: 'Elemento de filtro de aceite KOMATSU. Reemplazar cada 250-500 horas durante el mantenimiento. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'فلتر الزيت (محرك 6D102)', description: 'عنصر فلتر الزيت KOMATSU. استبدل كل 250-500 ساعة أثناء الصيانة. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Масляный фильтр (двигатель 6D102)', description: 'Элемент масляного фильтра KOMATSU. Заменяйте каждые 250-500 часов во время обслуживания. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Filtre à Huile (Moteur 6D102)', description: 'Élément de filtre à huile KOMATSU. À remplacer tous les 250-500 heures pendant l\'entretien. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Filtro de Óleo (Motor 6D102)', description: 'Elemento de filtro de óleo KOMATSU. Substituir a cada 250-500 horas durante a manutenção. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Filtro Olio (Motore 6D102)', description: 'Elemento filtro olio KOMATSU. Sostituire ogni 250-500 ore durante la manutenzione. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-10': {
    zh: { name: '驱动链轮(旧款)', description: 'KOMATSU 驱动链轮。轮齿磨损/断齿时更换(大修类高价件)。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Drive Sprocket (Old Model)', description: 'KOMATSU drive sprocket. Replace when teeth are worn or broken (major overhaul, high-value part). Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Piñón de Accionamiento (Modelo Antiguo)', description: 'Piñón de accionamiento KOMATSU. Reemplazar cuando los dientes estén desgastados o rotos (revisión mayor, pieza de alto valor). Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'رف القيادة (نموذج قديم)', description: 'رف القيادة KOMATSU. استبدل عند تآكل الأسنان أو كسرها (إصلاح رئيسي، جزء عالي القيمة). متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Ведущая звездочка (старая модель)', description: 'Ведущая звездочка KOMATSU. Заменяйте при износе или поломке зубьев (капитальный ремонт, дорогостоящая деталь). Совместима с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Pignon de Commande (Ancien Modèle)', description: 'Pignon de commande KOMATSU. À remplacer lorsque les dents sont usées ou cassées (révision majeure, pièce de grande valeur). Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Pinhão de Acionamento (Modelo Antigo)', description: 'Pinhão de acionamento KOMATSU. Substituir quando os dentes estão desgastados ou quebrados (revisão maior, peça de alto valor). Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Pignone di Azionamento (Modello Vecchio)', description: 'Pignone di azionamento KOMATSU. Sostituire quando i denti sono usurati o rotti (revisione maggiore, pezzo di alto valore). Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-11': {
    zh: { name: '驱动链轮(7/8系)', description: 'KOMATSU 驱动链轮。轮齿磨损/断齿时更换(大修类高价件)。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Drive Sprocket (7/8 Series)', description: 'KOMATSU drive sprocket. Replace when teeth are worn or broken (major overhaul, high-value part). Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Piñón de Accionamiento (Serie 7/8)', description: 'Piñón de accionamiento KOMATSU. Reemplazar cuando los dientes estén desgastados o rotos (revisión mayor, pieza de alto valor). Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'رف القيادة (سلسلة 7/8)', description: 'رف القيادة KOMATSU. استبدل عند تآكل الأسنان أو كسرها (إصلاح رئيسي، جزء عالي القيمة). متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Ведущая звездочка (серия 7/8)', description: 'Ведущая звездочка KOMATSU. Заменяйте при износе или поломке зубьев (капитальный ремонт, дорогостоящая деталь). Совместима с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Pignon de Commande (Série 7/8)', description: 'Pignon de commande KOMATSU. À remplacer lorsque les dents sont usées ou cassées (révision majeure, pièce de grande valeur). Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Pinhão de Acionamento (Série 7/8)', description: 'Pinhão de acionamento KOMATSU. Substituir quando os dentes estão desgastados ou quebrados (revisão maior, peça de alto valor). Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Pignone di Azionamento (Serie 7/8)', description: 'Pignone di azionamento KOMATSU. Sostituire quando i denti sono usurati o rotti (revisione maggiore, pezzo di alto valore). Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-12': {
    zh: { name: '履带板总成', description: 'KOMATSU 履带板总成。磨损/断裂时更换(大修类高价件)。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Track Shoe Assembly', description: 'KOMATSU track shoe assembly. Replace when worn or broken (major overhaul, high-value part). Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Conjunto de Zapata de Oruga', description: 'Conjunto de zapata de oruga KOMATSU. Reemplazar cuando esté desgastado o roto (revisión mayor, pieza de alto valor). Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'مجموعة حذاء المسار', description: 'مجموعة حذاء المسار KOMATSU. استبدل عند البلى أو الكسر (إصلاح رئيسي، جزء عالي القيمة). متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Сборка гусеничного башмака', description: 'Сборка гусеничного башмака KOMATSU. Заменяйте при износе или поломке (капитальный ремонт, дорогостоящая деталь). Совместима с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Ensemble Chaîne de Chenille', description: 'Ensemble chaîne de chenille KOMATSU. À remplacer lorsqu\'usé ou cassé (révision majeure, pièce de grande valeur). Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Conjunto de Sapata de Esteira', description: 'Conjunto de sapata de esteira KOMATSU. Substituir quando desgastado ou quebrado (revisão maior, peça de alto valor). Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Insieme Pattino Cingolo', description: 'Insieme pattino cingolo KOMATSU. Sostituire quando usurato o rotto (revisione maggiore, pezzo di alto valore). Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-13': {
    zh: { name: '下托链轮(Track Roller,PC300-7参考)', description: 'KOMATSU 下托链轮。漏油/磨损时更换。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Lower Track Roller (PC300-7 Reference)', description: 'KOMATSU lower track roller. Replace when leaking or worn. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Rodillo de Oruga Inferior (Referencia PC300-7)', description: 'Rodillo de oruga inferior KOMATSU. Reemplazar cuando hay fugas o desgaste. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'بكرة المسار السفلية (مرجع PC300-7)', description: 'بكرة المسار السفلية KOMATSU. استبدل عند التسريب أو البلى. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Нижний каток гусеницы (ссылка PC300-7)', description: 'Нижний каток гусеницы KOMATSU. Заменяйте при утечке или износе. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Galet de Chenille Inférieur (Référence PC300-7)', description: 'Galet de chenille inférieur KOMATSU. À remplacer en cas de fuite ou d\'usure. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Rolo de Esteira Inferior (Referência PC300-7)', description: 'Rolo de esteira inferior KOMATSU. Substituir quando há vazamento ou desgaste. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Rullo Cingolo Inferiore (Riferimento PC300-7)', description: 'Rullo cingolo inferiore KOMATSU. Sostituire in caso di perdita o usura. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-14': {
    zh: { name: '上托轮(Carrier Roller,PC400-7参考)', description: 'KOMATSU 上托轮。漏油/磨损时更换。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Upper Carrier Roller (PC400-7 Reference)', description: 'KOMATSU upper carrier roller. Replace when leaking or worn. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Rodillo Portador Superior (Referencia PC400-7)', description: 'Rodillo portador superior KOMATSU. Reemplazar cuando hay fugas o desgaste. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'بكرة الناقل العلوية (مرجع PC400-7)', description: 'بكرة الناقل العلوية KOMATSU. استبدل عند التسريب أو البلى. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Верхний каток-опора (ссылка PC400-7)', description: 'Верхний каток-опора KOMATSU. Заменяйте при утечке или износе. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Galet Porteur Supérieur (Référence PC400-7)', description: 'Galet porteur supérieur KOMATSU. À remplacer en cas de fuite ou d\'usure. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Rolo Portador Superior (Referência PC400-7)', description: 'Rolo portador superior KOMATSU. Substituir quando há vazamento ou desgaste. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Rullo Portatore Superiore (Riferimento PC400-7)', description: 'Rullo portatore superiore KOMATSU. Sostituire in caso di perdita o usura. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-15': {
    zh: { name: '铲斗斗齿(K25系列)', description: 'KOMATSU 铲斗斗齿。磨损见底或断裂时更换,高频更换件。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Bucket Teeth (K25 Series)', description: 'KOMATSU bucket teeth. Replace when worn to the bottom or broken, high-frequency replacement part. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Dientes de Cucharón (Serie K25)', description: 'Dientes de cucharón KOMATSU. Reemplazar cuando se desgasten hasta el fondo o se rompan, pieza de reemplazo de alta frecuencia. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'أسنان الدلو (سلسلة K25)', description: 'أسنان الدلو KOMATSU. استبدل عند البلى إلى الأسفل أو الكسر، جزء استبدال عالي التكرار. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Зубья ковша (серия K25)', description: 'Зубья ковша KOMATSU. Заменяйте при износе до дна или поломке, часто заменяемая деталь. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Dents de Godet (Série K25)', description: 'Dents de godet KOMATSU. À remplacer lorsque usées jusqu\'au fond ou cassées, pièce de remplacement haute fréquence. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Dentes da Caçamba (Série K25)', description: 'Dentes da caçamba KOMATSU. Substituir quando desgastados até o fundo ou quebrados, peça de substituição de alta frequência. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Denti della Benna (Serie K25)', description: 'Denti della benna KOMATSU. Sostituire quando usurati fino al fondo o rotti, pezzo di sostituzione ad alta frequenza. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-16': {
    zh: { name: '斗齿锁定销', description: 'KOMATSU 斗齿锁定销。随斗齿更换时同步更换。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Bucket Tooth Locking Pin', description: 'KOMATSU bucket tooth locking pin. Replace synchronously when replacing bucket teeth. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Pasador de Bloqueo de Diente de Cucharón', description: 'Pasador de bloqueo de diente de cucharón KOMATSU. Reemplazar simultáneamente al reemplazar dientes de cucharón. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'دبوس تثبيت أسنان الدلو', description: 'دبوس تثبيت أسنان الدلو KOMATSU. استبدل بشكل متزامن عند استبدال أسنان الدلو. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Стопорный штифт зуба ковша', description: 'Стопорный штифт зуба ковша KOMATSU. Заменяйте одновременно при замене зубьев ковша. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Goupille de Verrouillage de Dent de Godet', description: 'Goupille de verrouillage de dent de godet KOMATSU. À remplacer simultanément lors du remplacement des dents de godet. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Pino de Travamento de Dente da Caçamba', description: 'Pino de travamento de dente da caçamba KOMATSU. Substituir simultaneamente ao substituir dentes da caçamba. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Spina di Bloccaggio Dente Benna', description: 'Spina di bloccaggio dente benna KOMATSU. Sostituire contemporaneamente quando si sostituiscono i denti della benna. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-17': {
    zh: { name: '主液压泵总成', description: 'KOMATSU 主液压泵总成。异响/供油不足/压力下降时更换(大修类高价件)。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Main Hydraulic Pump Assembly', description: 'KOMATSU main hydraulic pump assembly. Replace when abnormal noise, insufficient oil supply, or pressure drop occurs (major overhaul, high-value part). Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Conjunto de Bomba Hidráulica Principal', description: 'Conjunto de bomba hidráulica principal KOMATSU. Reemplazar cuando hay ruido anormal, suministro insuficiente de aceite o caída de presión (revisión mayor, pieza de alto valor). Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'مجموعة مضخة هيدروليكية رئيسية', description: 'مجموعة مضخة هيدروليكية رئيسية KOMATSU. استبدل عند وجود ضوضاء غير طبيعية أو عدم كفاية إمداد الزيت أو انخفاض الضغط (إصلاح رئيسي، جزء عالي القيمة). متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Сборка главного гидравлического насоса', description: 'Сборка главного гидравлического насоса KOMATSU. Заменяйте при ненормальном шуме, недостаточной подаче масла или снижении давления (капитальный ремонт, дорогостоящая деталь). Совместима с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Ensemble Pompe Hydraulique Principale', description: 'Ensemble pompe hydraulique principale KOMATSU. À remplacer en cas de bruit anormal, d\'approvisionnement insuffisant en huile ou de chute de pression (révision majeure, pièce de grande valeur). Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Conjunto de Bomba Hidráulica Principal', description: 'Conjunto de bomba hidráulica principal KOMATSU. Substituir quando há ruído anormal, abastecimento insuficiente de óleo ou queda de pressão (revisão maior, peça de alto valor). Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Insieme Pompa Idraulica Principale', description: 'Insieme pompa idraulica principale KOMATSU. Sostituire in caso di rumore anormale, insufficiente fornitura di olio o calo di pressione (revisione maggiore, pezzo di alto valore). Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-18': {
    zh: { name: '主液压泵(型号2)', description: 'KOMATSU 主液压泵。异响/供油不足时更换(大修类)。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Main Hydraulic Pump (Model 2)', description: 'KOMATSU main hydraulic pump. Replace when abnormal noise or insufficient oil supply occurs (major overhaul). Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Bomba Hidráulica Principal (Modelo 2)', description: 'Bomba hidráulica principal KOMATSU. Reemplazar cuando hay ruido anormal o suministro insuficiente de aceite (revisión mayor). Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'مضخة هيدروليكية رئيسية (نموذج 2)', description: 'مضخة هيدروليكية رئيسية KOMATSU. استبدل عند وجود ضوضاء غير طبيعية أو عدم كفاية إمداد الزيت (إصلاح رئيسي). متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Главный гидравлический насос (модель 2)', description: 'Главный гидравлический насос KOMATSU. Заменяйте при ненормальном шуме или недостаточной подаче масла (капитальный ремонт). Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Pompe Hydraulique Principale (Modèle 2)', description: 'Pompe hydraulique principale KOMATSU. À remplacer en cas de bruit anormal ou d\'approvisionnement insuffisant en huile (révision majeure). Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Bomba Hidráulica Principal (Modelo 2)', description: 'Bomba hidráulica principal KOMATSU. Substituir quando há ruído anormal ou abastecimento insuficiente de óleo (revisão maior). Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Pompa Idraulica Principale (Modello 2)', description: 'Pompa idraulica principale KOMATSU. Sostituire in caso di rumore anormale o insufficiente fornitura di olio (revisione maggiore). Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-19': {
    zh: { name: '回转(转台)马达总成', description: 'KOMATSU 回转马达总成。转台异响/回转无力时更换(大修类高价件)。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Slew (Swing) Motor Assembly', description: 'KOMATSU slew motor assembly. Replace when abnormal noise or weak slew rotation occurs (major overhaul, high-value part). Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Conjunto de Motor de Giro', description: 'Conjunto de motor de giro KOMATSU. Reemplazar cuando hay ruido anormal o giro débil (revisión mayor, pieza de alto valor). Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'مجموعة محرك الدوران', description: 'مجموعة محرك الدوران KOMATSU. استبدل عند وجود ضوضاء غير طبيعية أو ضعف الدوران (إصلاح رئيسي، جزء عالي القيمة). متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Сборка поворотного мотора', description: 'Сборка поворотного мотора KOMATSU. Заменяйте при ненормальном шуме или слабом повороте (капитальный ремонт, дорогостоящая деталь). Совместима с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Ensemble Moteur de Rotation', description: 'Ensemble moteur de rotation KOMATSU. À remplacer en cas de bruit anormal ou de rotation faible (révision majeure, pièce de grande valeur). Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Conjunto de Motor de Rotação', description: 'Conjunto de motor de rotação KOMATSU. Substituir quando há ruído anormal ou rotação fraca (revisão maior, peça de alto valor). Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Insieme Motore di Rotazione', description: 'Insieme motore di rotazione KOMATSU. Sostituire in caso di rumore anormale o rotazione debole (revisione maggiore, pezzo di alto valore). Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-20': {
    zh: { name: '安全阀(溢流阀)', description: 'KOMATSU 安全阀。液压异常/压力不稳时更换。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Safety Valve (Relief Valve)', description: 'KOMATSU safety valve. Replace when hydraulic abnormality or pressure instability occurs. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Válvula de Seguridad (Válvula de Alivio)', description: 'Válvula de seguridad KOMATSU. Reemplazar cuando hay anomalía hidráulica o inestabilidad de presión. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'صمام الأمان (صمام التخفيف)', description: 'صمام الأمان KOMATSU. استبدل عند وجود شذوذ هيدروليكي أو عدم استقرار الضغط. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Предохранительный клапан (клапан сброса)', description: 'Предохранительный клапан KOMATSU. Заменяйте при гидравлических аномалиях или нестабильности давления. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Soupape de Sécurité (Soupape de Décharge)', description: 'Soupape de sécurité KOMATSU. À remplacer en cas d\'anomalie hydraulique ou d\'instabilité de pression. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Válvula de Segurança (Válvula de Alívio)', description: 'Válvula de segurança KOMATSU. Substituir quando há anomalia hidráulica ou instabilidade de pressão. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Valvola di Sicurezza (Valvola di Scarico)', description: 'Valvola di sicurezza KOMATSU. Sostituire in caso di anomalia idraulica o instabilità di pressione. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-21': {
    zh: { name: '点火钥匙开关总成', description: 'KOMATSU 点火钥匙开关总成。钥匙磨损/开关失效时更换。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Ignition Key Switch Assembly', description: 'KOMATSU ignition key switch assembly. Replace when key is worn or switch fails. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Conjunto de Interruptor de Llave de Encendido', description: 'Conjunto de interruptor de llave de encendido KOMATSU. Reemplazar cuando la llave está desgastada o el interruptor falla. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'مجموعة مفتاح الإشعال', description: 'مجموعة مفتاح الإشعال KOMATSU. استبدل عند تآكل المفتاح أو فشل المفتاح. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Сборка выключателя зажигания', description: 'Сборка выключателя зажигания KOMATSU. Заменяйте при износе ключа или отказе переключателя. Совместима с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Ensemble Interrupteur de Clé d\'Allumage', description: 'Ensemble interrupteur de clé d\'allumage KOMATSU. À remplacer lorsque la clé est usée ou l\'interrupteur défaillant. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Conjunto de Interruptor de Chave de Ignição', description: 'Conjunto de interruptor de chave de ignição KOMATSU. Substituir quando a chave está desgastada ou o interruptor falha. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Insieme Interruttore Chiave Accensione', description: 'Insieme interruttore chiave accensione KOMATSU. Sostituire quando la chiave è usurata o l\'interruttore non funziona. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  },
  'komatsu-sp-22': {
    zh: { name: '点火钥匙开关(老款)', description: 'KOMATSU 点火钥匙开关。钥匙磨损/开关失效时更换。适用于 Komatsu PC200、PC200-8 等挖掘机。' },
    en: { name: 'Ignition Key Switch (Old Model)', description: 'KOMATSU ignition key switch. Replace when key is worn or switch fails. Compatible with Komatsu PC200, PC200-8 excavators.' },
    es: { name: 'Interruptor de Llave de Encendido (Modelo Antiguo)', description: 'Interruptor de llave de encendido KOMATSU. Reemplazar cuando la llave está desgastada o el interruptor falla. Compatible con excavadoras Komatsu PC200, PC200-8.' },
    ar: { name: 'مفتاح الإشعال (نموذج قديم)', description: 'مفتاح الإشعال KOMATSU. استبدل عند تآكل المفتاح أو فشل المفتاح. متوافق مع حفارات Komatsu PC200 و PC200-8.' },
    ru: { name: 'Выключатель зажигания (старая модель)', description: 'Выключатель зажигания KOMATSU. Заменяйте при износе ключа или отказе переключателя. Совместим с экскаваторами Komatsu PC200, PC200-8.' },
    fr: { name: 'Interrupteur de Clé d\'Allumage (Ancien Modèle)', description: 'Interrupteur de clé d\'allumage KOMATSU. À remplacer lorsque la clé est usée ou l\'interrupteur défaillant. Compatible avec les excavatrices Komatsu PC200, PC200-8.' },
    pt: { name: 'Interruptor de Chave de Ignição (Modelo Antigo)', description: 'Interruptor de chave de ignição KOMATSU. Substituir quando a chave está desgastada ou o interruptor falha. Compatível com escavadeiras Komatsu PC200, PC200-8.' },
    it: { name: 'Interruttore Chiave Accensione (Modello Vecchio)', description: 'Interruttore chiave accensione KOMATSU. Sostituire quando la chiave è usurata o l\'interruttore non funziona. Compatibile con escavatori Komatsu PC200, PC200-8.' }
  }
};

// Translation helper functions
export function getTranslatedKomatsumSparePart(partId: string, language: string): { name: string; description: string } {
  const part = komatsumSpareParts[partId];
  if (!part) return { name: '', description: '' };
  
  const translation = part[language] || part['en'];
  return translation || { name: '', description: '' };
}

export function getTranslatedKomatsumSparePartCategory(category: string, language: string): string {
  const translations = komatsumSparePartCategoryTranslations[category];
  if (!translations) return category;
  return translations[language] || translations['en'] || category;
}
