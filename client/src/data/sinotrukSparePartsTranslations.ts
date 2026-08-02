// Sinotruk Spare Parts Translations
// Supports: Chinese, English, Spanish, Arabic, Russian, French, Portuguese, Italian

const sinotrukSparePartNames: Record<string, Record<string, string>> = {
  'sinotruk-sp-1': {
    zh: '机油滤清器',
    en: 'Oil Filter',
    es: 'Filtro de Aceite',
    ar: 'مرشح الزيت',
    ru: 'Масляный фильтр',
    fr: 'Filtre à Huile',
    pt: 'Filtro de Óleo',
    it: 'Filtro dell\'Olio'
  },
  'sinotruk-sp-2': {
    zh: '空气滤芯总成',
    en: 'Air Filter Assembly',
    es: 'Conjunto de Filtro de Aire',
    ar: 'مجموعة مرشح الهواء',
    ru: 'Воздушный фильтр в сборе',
    fr: 'Ensemble Filtre à Air',
    pt: 'Conjunto de Filtro de Ar',
    it: 'Insieme Filtro Aria'
  },
  'sinotruk-sp-3': {
    zh: '柴油粗滤器(油水分离器)',
    en: 'Diesel Fuel Coarse Filter (Water Separator)',
    es: 'Filtro Grueso de Combustible Diésel (Separador de Agua)',
    ar: 'مرشح الوقود الخشن (فاصل الماء)',
    ru: 'Грубый фильтр дизельного топлива (сепаратор воды)',
    fr: 'Filtre Carburant Diesel Grossier (Séparateur d\'Eau)',
    pt: 'Filtro Diesel Grosso (Separador de Água)',
    it: 'Filtro Carburante Diesel Grossolano (Separatore Acqua)'
  },
  'sinotruk-sp-4': {
    zh: '柴油精滤器',
    en: 'Diesel Fine Filter',
    es: 'Filtro Fino de Combustible Diésel',
    ar: 'مرشح الوقود الدقيق',
    ru: 'Тонкий фильтр дизельного топлива',
    fr: 'Filtre Carburant Diesel Fin',
    pt: 'Filtro Diesel Fino',
    it: 'Filtro Carburante Diesel Fine'
  },
  'sinotruk-sp-5': {
    zh: '发电机(28V/70A)',
    en: 'Alternator (28V/70A)',
    es: 'Alternador (28V/70A)',
    ar: 'مولد كهربائي (28V/70A)',
    ru: 'Генератор (28V/70A)',
    fr: 'Alternateur (28V/70A)',
    pt: 'Alternador (28V/70A)',
    it: 'Alternatore (28V/70A)'
  },
  'sinotruk-sp-6': {
    zh: '起动机总成',
    en: 'Starter Motor Assembly',
    es: 'Conjunto de Motor de Arranque',
    ar: 'مجموعة محرك البداية',
    ru: 'Стартер в сборе',
    fr: 'Ensemble Moteur de Démarrage',
    pt: 'Conjunto de Motor de Partida',
    it: 'Insieme Motore di Avviamento'
  },
  'sinotruk-sp-7': {
    zh: '空气压缩机(双缸水冷)',
    en: 'Air Compressor (Twin Cylinder Water Cooled)',
    es: 'Compresor de Aire (Doble Cilindro Enfriado por Agua)',
    ar: 'ضاغط الهواء (أسطوانة مزدوجة مبردة بالماء)',
    ru: 'Воздушный компрессор (двухцилиндровый водяного охлаждения)',
    fr: 'Compresseur d\'Air (Double Cylindre Refroidi par Eau)',
    pt: 'Compressor de Ar (Duplo Cilindro Refrigerado por Água)',
    it: 'Compressore Aria (Doppio Cilindro Raffreddato ad Acqua)'
  },
  'sinotruk-sp-8': {
    zh: '前刹车蹄片总成',
    en: 'Front Brake Shoe Assembly',
    es: 'Conjunto de Zapata de Freno Delantero',
    ar: 'مجموعة حذاء الفرامل الأمامي',
    ru: 'Передняя тормозная колодка в сборе',
    fr: 'Ensemble Sabot de Frein Avant',
    pt: 'Conjunto de Sapata de Freio Dianteiro',
    it: 'Insieme Ceppo Freno Anteriore'
  },
  'sinotruk-sp-9': {
    zh: '后刹车蹄片(带摩擦片)',
    en: 'Rear Brake Shoe (With Friction Pad)',
    es: 'Zapata de Freno Trasero (Con Pastilla de Fricción)',
    ar: 'حذاء الفرامل الخلفي (مع وسادة احتكاك)',
    ru: 'Задняя тормозная колодка (с фрикционной накладкой)',
    fr: 'Sabot de Frein Arrière (Avec Plaquette de Friction)',
    pt: 'Sapata de Freio Traseiro (Com Pastilha de Fricção)',
    it: 'Ceppo Freno Posteriore (Con Pastiglia Frizione)'
  },
  'sinotruk-sp-10': {
    zh: '制动凸轮轴(左)',
    en: 'Brake Camshaft (Left)',
    es: 'Árbol de Levas de Freno (Izquierdo)',
    ar: 'عمود الكامات للفرامل (يسار)',
    ru: 'Тормозной распределительный вал (левый)',
    fr: 'Arbre à Cames de Frein (Gauche)',
    pt: 'Comando de Válvulas de Freio (Esquerdo)',
    it: 'Albero a Camme Freno (Sinistro)'
  },
  'sinotruk-sp-11': {
    zh: '刹车间隙自动调整臂',
    en: 'Automatic Brake Clearance Adjustment Arm',
    es: 'Brazo de Ajuste Automático de Holgura de Freno',
    ar: 'ذراع ضبط الخلوص التلقائي للفرامل',
    ru: 'Рычаг автоматической регулировки зазора тормоза',
    fr: 'Bras d\'Ajustement Automatique du Jeu de Frein',
    pt: 'Braço de Ajuste Automático de Folga de Freio',
    it: 'Braccio di Regolazione Automatica Gioco Freno'
  },
  'sinotruk-sp-12': {
    zh: '制动气室(前桥)',
    en: 'Brake Air Chamber (Front Axle)',
    es: 'Cámara de Aire de Freno (Eje Delantero)',
    ar: 'غرفة الهواء للفرامل (المحور الأمامي)',
    ru: 'Тормозная пневматическая камера (передняя ось)',
    fr: 'Chambre d\'Air de Frein (Essieu Avant)',
    pt: 'Câmara de Ar de Freio (Eixo Dianteiro)',
    it: 'Camera Aria Freno (Assale Anteriore)'
  },
  'sinotruk-sp-13': {
    zh: '刹车盘',
    en: 'Brake Disc',
    es: 'Disco de Freno',
    ar: 'قرص الفرامل',
    ru: 'Тормозной диск',
    fr: 'Disque de Frein',
    pt: 'Disco de Freio',
    it: 'Disco Freno'
  },
  'sinotruk-sp-14': {
    zh: '离合器压盘总成',
    en: 'Clutch Pressure Plate Assembly',
    es: 'Conjunto de Plato de Presión de Embrague',
    ar: 'مجموعة صفيحة ضغط القابض',
    ru: 'Нажимной диск сцепления в сборе',
    fr: 'Ensemble Plateau de Pression d\'Embrayage',
    pt: 'Conjunto de Placa de Pressão de Embreagem',
    it: 'Insieme Disco di Pressione Frizione'
  },
  'sinotruk-sp-15': {
    zh: '离合器分离轴承(助力泵)',
    en: 'Clutch Release Bearing (With Power Pump)',
    es: 'Rodamiento de Desembrague (Con Bomba de Potencia)',
    ar: 'محمل فك القابض (مع مضخة الطاقة)',
    ru: 'Подшипник выключения сцепления (с гидравлическим насосом)',
    fr: 'Roulement de Débrayage (Avec Pompe d\'Assistance)',
    pt: 'Rolamento de Desembreagem (Com Bomba de Potência)',
    it: 'Cuscinetto Rilascio Frizione (Con Pompa Idraulica)'
  },
  'sinotruk-sp-16': {
    zh: 'V型推力杆(稳定杆连杆)',
    en: 'V-Type Thrust Rod (Stabilizer Link)',
    es: 'Varilla de Empuje Tipo V (Enlace Estabilizador)',
    ar: 'قضيب الدفع من النوع V (رابط المثبت)',
    ru: 'V-образный тяговый стержень (стабилизирующая тяга)',
    fr: 'Tige de Poussée Type V (Lien Stabilisateur)',
    pt: 'Haste de Empuxo Tipo V (Elo Estabilizador)',
    it: 'Asta Spinta Tipo V (Collegamento Stabilizzatore)'
  },
  'sinotruk-sp-17': {
    zh: '转向节臂/羊角(左)',
    en: 'Steering Knuckle Arm (Left)',
    es: 'Brazo de Nudo de Dirección (Izquierdo)',
    ar: 'ذراع مفصل التوجيه (يسار)',
    ru: 'Рычаг поворотного кулака (левый)',
    fr: 'Bras de Fusée de Direction (Gauche)',
    pt: 'Braço de Nó de Direção (Esquerdo)',
    it: 'Braccio Nocca Sterzo (Sinistro)'
  },
  'sinotruk-sp-18': {
    zh: '前钢板弹簧卷耳销',
    en: 'Front Leaf Spring Eye Pin',
    es: 'Pasador de Ojo de Resorte de Hoja Delantero',
    ar: 'دبوس عين الزنبرك الورقي الأمامي',
    ru: 'Палец ушка передней листовой рессоры',
    fr: 'Goupille d\'Oeil de Ressort à Lames Avant',
    pt: 'Pino de Olho de Mola de Lâmina Dianteira',
    it: 'Spina Occhio Molla a Balestra Anteriore'
  },
  'sinotruk-sp-19': {
    zh: '前钢板弹簧吊耳',
    en: 'Front Leaf Spring Hanger',
    es: 'Soporte de Resorte de Hoja Delantero',
    ar: 'معلق الزنبرك الورقي الأمامي',
    ru: 'Кронштейн передней листовой рессоры',
    fr: 'Étrier de Ressort à Lames Avant',
    pt: 'Suporte de Mola de Lâmina Dianteira',
    it: 'Staffa Molla a Balestra Anteriore'
  },
  'sinotruk-sp-20': {
    zh: 'king pin主销衬套',
    en: 'King Pin Bushing',
    es: 'Casquillo de Pasador Principal',
    ar: 'بوشة الدبوس الرئيسي',
    ru: 'Втулка шкворня',
    fr: 'Bague de Pivot Principal',
    pt: 'Bucha de Pino Mestre',
    it: 'Boccola Perno Principale'
  },
  'sinotruk-sp-21': {
    zh: '前悬挂减震器总成',
    en: 'Front Suspension Shock Absorber Assembly',
    es: 'Conjunto de Amortiguador de Suspensión Delantero',
    ar: 'مجموعة ممص الصدمات الأمامي',
    ru: 'Передний амортизатор подвески в сборе',
    fr: 'Ensemble Amortisseur de Suspension Avant',
    pt: 'Conjunto de Amortecedor de Suspensão Dianteiro',
    it: 'Insieme Ammortizzatore Sospensione Anteriore'
  },
  'sinotruk-sp-22': {
    zh: '后悬挂减震器总成',
    en: 'Rear Suspension Shock Absorber Assembly',
    es: 'Conjunto de Amortiguador de Suspensión Trasero',
    ar: 'مجموعة ممص الصدمات الخلفي',
    ru: 'Задний амортизатор подвески в сборе',
    fr: 'Ensemble Amortisseur de Suspension Arrière',
    pt: 'Conjunto de Amortecedor de Suspensão Traseiro',
    it: 'Insieme Ammortizzatore Sospensione Posteriore'
  },
  'sinotruk-sp-23': {
    zh: '后钢板弹簧总成',
    en: 'Rear Leaf Spring Assembly',
    es: 'Conjunto de Resorte de Hoja Trasero',
    ar: 'مجموعة الزنبرك الورقي الخلفي',
    ru: 'Задняя листовая рессора в сборе',
    fr: 'Ensemble Ressort à Lames Arrière',
    pt: 'Conjunto de Mola de Lâmina Traseira',
    it: 'Insieme Molla a Balestra Posteriore'
  },
  'sinotruk-sp-24': {
    zh: '钢板弹簧U型螺栓压板',
    en: 'Leaf Spring U-Bolt Clamp Plate',
    es: 'Placa de Abrazadera de Perno en U de Resorte de Hoja',
    ar: 'لوحة مشبك برغي U للزنبرك الورقي',
    ru: 'Зажимная пластина U-образного болта листовой рессоры',
    fr: 'Plaque de Serrage Boulon en U de Ressort à Lames',
    pt: 'Placa de Presilha de Parafuso U de Mola de Lâmina',
    it: 'Piastra Morsetto Bullone U Molla a Balestra'
  },
  'sinotruk-sp-25': {
    zh: '后桥半轴(右)',
    en: 'Rear Axle Half Shaft (Right)',
    es: 'Semieje del Eje Trasero (Derecho)',
    ar: 'نصف محور المحور الخلفي (يمين)',
    ru: 'Полуось заднего моста (правая)',
    fr: 'Demi-Arbre de l\'Essieu Arrière (Droit)',
    pt: 'Semieixo do Eixo Traseiro (Direito)',
    it: 'Semiasse Assale Posteriore (Destro)'
  },
  'sinotruk-sp-26': {
    zh: '万向节十字轴总成',
    en: 'Universal Joint Cross Shaft Assembly',
    es: 'Conjunto de Árbol Cruzado de Junta Universal',
    ar: 'مجموعة عمود الصليب المفصل العام',
    ru: 'Крестовина карданного вала в сборе',
    fr: 'Ensemble Arbre Croisé de Joint Universel',
    pt: 'Conjunto de Eixo Cruzado de Junta Universal',
    it: 'Insieme Albero Croce Giunto Universale'
  },
  'sinotruk-sp-27': {
    zh: '传动轴总成(变速箱至驱动桥)',
    en: 'Driveshaft Assembly (Transmission to Drive Axle)',
    es: 'Conjunto de Árbol de Transmisión (Transmisión a Eje Motriz)',
    ar: 'مجموعة عمود الدفع (ناقل الحركة إلى محور القيادة)',
    ru: 'Карданный вал в сборе (коробка передач к ведущему мосту)',
    fr: 'Ensemble Arbre de Transmission (Boîte de Vitesses à Essieu Moteur)',
    pt: 'Conjunto de Eixo de Transmissão (Transmissão para Eixo Motriz)',
    it: 'Insieme Albero di Trasmissione (Cambio a Assale Motore)'
  },
  'sinotruk-sp-28': {
    zh: '水泵总成',
    en: 'Water Pump Assembly',
    es: 'Conjunto de Bomba de Agua',
    ar: 'مجموعة مضخة المياه',
    ru: 'Водяной насос в сборе',
    fr: 'Ensemble Pompe à Eau',
    pt: 'Conjunto de Bomba de Água',
    it: 'Insieme Pompa Acqua'
  },
  'sinotruk-sp-29': {
    zh: '散热器护罩/水箱罩',
    en: 'Radiator Shroud / Water Tank Cover',
    es: 'Cubierta del Radiador / Tapa del Tanque de Agua',
    ar: 'غطاء المبرد / غطاء خزان المياه',
    ru: 'Кожух радиатора / Крышка бака охлаждающей жидкости',
    fr: 'Carénage du Radiateur / Couvercle du Réservoir d\'Eau',
    pt: 'Protetor do Radiador / Tampa do Tanque de Água',
    it: 'Copertura Radiatore / Coperchio Serbatoio Acqua'
  },
  'sinotruk-sp-30': {
    zh: '涡轮增压器总成',
    en: 'Turbocharger Assembly',
    es: 'Conjunto de Turbocompresor',
    ar: 'مجموعة الشاحن التوربيني',
    ru: 'Турбокомпрессор в сборе',
    fr: 'Ensemble Turbocompresseur',
    pt: 'Conjunto de Turbocompressor',
    it: 'Insieme Turbocompressore'
  },
  'sinotruk-sp-31': {
    zh: '消声器(排气筒)总成',
    en: 'Muffler (Exhaust Pipe) Assembly',
    es: 'Conjunto de Silenciador (Tubo de Escape)',
    ar: 'مجموعة كاتم الصوت (أنبوب العادم)',
    ru: 'Глушитель (выхлопная труба) в сборе',
    fr: 'Ensemble Silencieux (Tuyau d\'Échappement)',
    pt: 'Conjunto de Silenciador (Tubo de Escape)',
    it: 'Insieme Silenziatore (Tubo Scarico)'
  },
  'sinotruk-sp-32': {
    zh: '动力转向助力泵',
    en: 'Power Steering Pump',
    es: 'Bomba de Dirección Asistida',
    ar: 'مضخة التوجيه بمساعدة الطاقة',
    ru: 'Насос гидроусилителя рулевого управления',
    fr: 'Pompe de Direction Assistée',
    pt: 'Bomba de Direção Assistida',
    it: 'Pompa Sterzo Assistito'
  },
  'sinotruk-sp-33': {
    zh: '离合器从动盘(摩擦片)',
    en: 'Clutch Driven Disc (Friction Plate)',
    es: 'Disco Conducido de Embrague (Placa de Fricción)',
    ar: 'قرص القابض المدفوع (لوحة احتكاك)',
    ru: 'Ведомый диск сцепления (фрикционная накладка)',
    fr: 'Disque Mené d\'Embrayage (Plaque de Friction)',
    pt: 'Disco Conduzido de Embreagem (Placa de Fricção)',
    it: 'Disco Condotto Frizione (Piastra Frizione)'
  },
  'sinotruk-sp-34': {
    zh: '离合器助力缸(分离缸)',
    en: 'Clutch Booster Cylinder (Release Cylinder)',
    es: 'Cilindro Auxiliar de Embrague (Cilindro de Desembrague)',
    ar: 'اسطوانة معزز القابض (اسطوانة الفك)',
    ru: 'Цилиндр усилителя сцепления (цилиндр выключения)',
    fr: 'Cylindre Auxiliaire d\'Embrayage (Cylindre de Débrayage)',
    pt: 'Cilindro Auxiliar de Embreagem (Cilindro de Desembreagem)',
    it: 'Cilindro Ausiliario Frizione (Cilindro Rilascio)'
  },
  'sinotruk-sp-35': {
    zh: '前刹车摩擦片(内衬)',
    en: 'Front Brake Friction Pad (Inner Lining)',
    es: 'Pastilla de Fricción de Freno Delantero (Forro Interior)',
    ar: 'وسادة احتكاك الفرامل الأمامية (بطانة داخلية)',
    ru: 'Передняя тормозная фрикционная накладка (внутренняя облицовка)',
    fr: 'Plaquette de Friction de Frein Avant (Doublure Intérieure)',
    pt: 'Pastilha de Fricção de Freio Dianteiro (Forro Interior)',
    it: 'Pastiglia Frizione Freno Anteriore (Rivestimento Interno)'
  },
  'sinotruk-sp-36': {
    zh: '刹车蹄片总成(带内衬)',
    en: 'Brake Shoe Assembly (With Inner Lining)',
    es: 'Conjunto de Zapata de Freno (Con Forro Interior)',
    ar: 'مجموعة حذاء الفرامل (مع بطانة داخلية)',
    ru: 'Тормозная колодка в сборе (с внутренней облицовкой)',
    fr: 'Ensemble Sabot de Frein (Avec Doublure Intérieure)',
    pt: 'Conjunto de Sapata de Freio (Com Forro Interior)',
    it: 'Insieme Ceppo Freno (Con Rivestimento Interno)'
  },
  'sinotruk-sp-37': {
    zh: '驻车/手刹阀',
    en: 'Parking / Hand Brake Valve',
    es: 'Válvula de Freno de Estacionamiento / Mano',
    ar: 'صمام الفرامل الثابتة / اليد',
    ru: 'Клапан стояночного / ручного тормоза',
    fr: 'Soupape de Frein de Stationnement / Main',
    pt: 'Válvula de Freio de Estacionamento / Mão',
    it: 'Valvola Freno di Parcheggio / Mano'
  },
  'sinotruk-sp-38': {
    zh: '排气制动阀',
    en: 'Engine Brake Valve',
    es: 'Válvula de Freno del Motor',
    ar: 'صمام فرامل المحرك',
    ru: 'Клапан тормоза двигателя',
    fr: 'Soupape de Frein Moteur',
    pt: 'Válvula de Freio do Motor',
    it: 'Valvola Freno Motore'
  },
  'sinotruk-sp-39': {
    zh: '输入轴转速传感器',
    en: 'Input Shaft Speed Sensor',
    es: 'Sensor de Velocidad del Eje de Entrada',
    ar: 'مستشعر سرعة عمود الإدخال',
    ru: 'Датчик скорости входного вала',
    fr: 'Capteur de Vitesse d\'Arbre d\'Entrée',
    pt: 'Sensor de Velocidade do Eixo de Entrada',
    it: 'Sensore Velocità Albero Ingresso'
  },
  'sinotruk-sp-40': {
    zh: '四回路气压保护阀',
    en: 'Four-Circuit Air Pressure Protection Valve',
    es: 'Válvula de Protección de Presión de Aire de Cuatro Circuitos',
    ar: 'صمام حماية ضغط الهواء رباعي الدوائر',
    ru: 'Четырехконтурный клапан защиты давления воздуха',
    fr: 'Soupape de Protection de Pression d\'Air Quatre Circuits',
    pt: 'Válvula de Proteção de Pressão de Ar de Quatro Circuitos',
    it: 'Valvola Protezione Pressione Aria Quattro Circuiti'
  },
  'sinotruk-sp-41': {
    zh: '车门玻璃升降器(左/右)',
    en: 'Door Window Regulator (Left/Right)',
    es: 'Regulador de Ventana de Puerta (Izquierdo/Derecho)',
    ar: 'منظم نافذة الباب (يسار / يمين)',
    ru: 'Регулятор стекла двери (левый / правый)',
    fr: 'Régulateur de Vitre de Porte (Gauche/Droite)',
    pt: 'Regulador de Vidro da Porta (Esquerdo/Direito)',
    it: 'Regolatore Vetro Porta (Sinistro/Destro)'
  },
  'sinotruk-sp-42': {
    zh: '驱动轴节叉(万向节叉)',
    en: 'Drive Shaft Yoke (Universal Joint Yoke)',
    es: 'Horquilla de Árbol de Transmisión (Horquilla de Junta Universal)',
    ar: 'شوكة عمود الدفع (شوكة المفصل العام)',
    ru: 'Вилка карданного вала (вилка карданного шарнира)',
    fr: 'Fourchette d\'Arbre de Transmission (Fourchette de Joint Universel)',
    pt: 'Garfo de Eixo de Transmissão (Garfo de Junta Universal)',
    it: 'Forcella Albero Trasmissione (Forcella Giunto Universale)'
  },
  'sinotruk-sp-43': {
    zh: '液压油泵(举升系统)',
    en: 'Hydraulic Oil Pump (Lifting System)',
    es: 'Bomba de Aceite Hidráulico (Sistema de Elevación)',
    ar: 'مضخة الزيت الهيدروليكي (نظام الرفع)',
    ru: 'Гидравлический масляный насос (система подъема)',
    fr: 'Pompe d\'Huile Hydraulique (Système de Levage)',
    pt: 'Bomba de Óleo Hidráulico (Sistema de Elevação)',
    it: 'Pompa Olio Idraulico (Sistema Sollevamento)'
  }
};

const sinotrukSparePartCategories: Record<string, Record<string, string>> = {
  '保养/滤清系统': {
    zh: '保养/滤清系统',
    en: 'Maintenance / Filtration System',
    es: 'Mantenimiento / Sistema de Filtración',
    ar: 'الصيانة / نظام التصفية',
    ru: 'Техническое обслуживание / Система фильтрации',
    fr: 'Entretien / Système de Filtration',
    pt: 'Manutenção / Sistema de Filtração',
    it: 'Manutenzione / Sistema Filtrazione'
  },
  '电气/启动': {
    zh: '电气/启动',
    en: 'Electrical / Starting',
    es: 'Eléctrico / Arranque',
    ar: 'كهربائي / بدء',
    ru: 'Электрическое / Запуск',
    fr: 'Électrique / Démarrage',
    pt: 'Elétrico / Partida',
    it: 'Elettrico / Avviamento'
  },
  '进气/增压': {
    zh: '进气/增压',
    en: 'Air Intake / Supercharging',
    es: 'Entrada de Aire / Sobrealimentación',
    ar: 'تناول الهواء / الشحن الفائق',
    ru: 'Впуск воздуха / Наддув',
    fr: 'Admission d\'Air / Suralimentation',
    pt: 'Admissão de Ar / Sobrealimentação',
    it: 'Aspirazione Aria / Sovralimentazione'
  },
  '制动系统': {
    zh: '制动系统',
    en: 'Braking System',
    es: 'Sistema de Frenado',
    ar: 'نظام الفرامل',
    ru: 'Тормозная система',
    fr: 'Système de Freinage',
    pt: 'Sistema de Frenagem',
    it: 'Sistema Frenante'
  },
  '传动/离合器': {
    zh: '传动/离合器',
    en: 'Transmission / Clutch',
    es: 'Transmisión / Embrague',
    ar: 'الإرسال / القابض',
    ru: 'Трансмиссия / Сцепление',
    fr: 'Transmission / Embrayage',
    pt: 'Transmissão / Embreagem',
    it: 'Trasmissione / Frizione'
  },
  '转向/悬挂': {
    zh: '转向/悬挂',
    en: 'Steering / Suspension',
    es: 'Dirección / Suspensión',
    ar: 'التوجيه / التعليق',
    ru: 'Рулевое управление / Подвеска',
    fr: 'Direction / Suspension',
    pt: 'Direção / Suspensão',
    it: 'Sterzo / Sospensione'
  },
  '悬挂减震': {
    zh: '悬挂减震',
    en: 'Suspension Damping',
    es: 'Amortiguación de Suspensión',
    ar: 'تخفيف الصدمات في التعليق',
    ru: 'Амортизация подвески',
    fr: 'Amortissement de Suspension',
    pt: 'Amortecimento de Suspensão',
    it: 'Smorzamento Sospensione'
  },
  '车身/雨刮': {
    zh: '车身/雨刮',
    en: 'Body / Wipers',
    es: 'Carrocería / Limpiaparabrisas',
    ar: 'الهيكل / المساحات',
    ru: 'Кузов / Стеклоочистители',
    fr: 'Carrosserie / Essuie-Glaces',
    pt: 'Carroceria / Limpadores',
    it: 'Carrozzeria / Tergicristalli'
  },
  '传动/万向节': {
    zh: '传动/万向节',
    en: 'Transmission / Universal Joint',
    es: 'Transmisión / Junta Universal',
    ar: 'الإرسال / المفصل العام',
    ru: 'Трансмиссия / Карданный шарнир',
    fr: 'Transmission / Joint Universel',
    pt: 'Transmissão / Junta Universal',
    it: 'Trasmissione / Giunto Universale'
  },
  '冷却系统': {
    zh: '冷却系统',
    en: 'Cooling System',
    es: 'Sistema de Refrigeración',
    ar: 'نظام التبريد',
    ru: 'Система охлаждения',
    fr: 'Système de Refroidissement',
    pt: 'Sistema de Resfriamento',
    it: 'Sistema Raffreddamento'
  },
  '排气系统': {
    zh: '排气系统',
    en: 'Exhaust System',
    es: 'Sistema de Escape',
    ar: 'نظام العادم',
    ru: 'Выхлопная система',
    fr: 'Système d\'Échappement',
    pt: 'Sistema de Escape',
    it: 'Sistema Scarico'
  },
  '转向系统': {
    zh: '转向系统',
    en: 'Steering System',
    es: 'Sistema de Dirección',
    ar: 'نظام التوجيه',
    ru: 'Система рулевого управления',
    fr: 'Système de Direction',
    pt: 'Sistema de Direção',
    it: 'Sistema Sterzo'
  },
  '电气/传感器': {
    zh: '电气/传感器',
    en: 'Electrical / Sensors',
    es: 'Eléctrico / Sensores',
    ar: 'كهربائي / مستشعرات',
    ru: 'Электрическое / Датчики',
    fr: 'Électrique / Capteurs',
    pt: 'Elétrico / Sensores',
    it: 'Elettrico / Sensori'
  },
  '车身/驾驶室': {
    zh: '车身/驾驶室',
    en: 'Body / Cabin',
    es: 'Carrocería / Cabina',
    ar: 'الهيكل / المقصورة',
    ru: 'Кузов / Кабина',
    fr: 'Carrosserie / Cabine',
    pt: 'Carroceria / Cabine',
    it: 'Carrozzeria / Cabina'
  },
  '轮毂/传动轴': {
    zh: '轮毂/传动轴',
    en: 'Hub / Driveshaft',
    es: 'Cubo / Árbol de Transmisión',
    ar: 'المحور / عمود الدفع',
    ru: 'Ступица / Карданный вал',
    fr: 'Moyeu / Arbre de Transmission',
    pt: 'Cubo / Eixo de Transmissão',
    it: 'Mozzo / Albero Trasmissione'
  },
  '液压/取力': {
    zh: '液压/取力',
    en: 'Hydraulic / PTO',
    es: 'Hidráulico / TDP',
    ar: 'هيدروليكي / PTO',
    ru: 'Гидравлический / ВОМ',
    fr: 'Hydraulique / PTA',
    pt: 'Hidráulico / TDP',
    it: 'Idraulico / PTO'
  }
};

const sinotrukSparePartDescriptions: Record<string, Record<string, string>> = {
  'sinotruk-sp-1': {
    zh: '机油滤清器。5,000-10,000km随保养更换',
    en: 'Oil Filter. Replace during maintenance every 5,000-10,000 km',
    es: 'Filtro de Aceite. Reemplazar durante el mantenimiento cada 5,000-10,000 km',
    ar: 'مرشح الزيت. استبدل أثناء الصيانة كل 5000-10000 كم',
    ru: 'Масляный фильтр. Заменять при техническом обслуживании каждые 5000-10000 км',
    fr: 'Filtre à Huile. Remplacer lors de l\'entretien tous les 5 000-10 000 km',
    pt: 'Filtro de Óleo. Substituir durante a manutenção a cada 5.000-10.000 km',
    it: 'Filtro dell\'Olio. Sostituire durante la manutenzione ogni 5.000-10.000 km'
  },
  'sinotruk-sp-2': {
    zh: '空气滤芯总成。视路况10,000-20,000km',
    en: 'Air Filter Assembly. Replace every 10,000-20,000 km depending on road conditions',
    es: 'Conjunto de Filtro de Aire. Reemplazar cada 10,000-20,000 km según las condiciones del camino',
    ar: 'مجموعة مرشح الهواء. استبدل كل 10000-20000 كم حسب ظروف الطريق',
    ru: 'Воздушный фильтр в сборе. Заменять каждые 10000-20000 км в зависимости от условий дороги',
    fr: 'Ensemble Filtre à Air. Remplacer tous les 10 000-20 000 km selon les conditions de la route',
    pt: 'Conjunto de Filtro de Ar. Substituir a cada 10.000-20.000 km dependendo das condições da estrada',
    it: 'Insieme Filtro Aria. Sostituire ogni 10.000-20.000 km a seconda delle condizioni stradali'
  },
  'sinotruk-sp-3': {
    zh: '柴油粗滤器(油水分离器)。5,000-10,000km,雨季/劣质油品缩短周期',
    en: 'Diesel Fuel Coarse Filter (Water Separator). Replace every 5,000-10,000 km, shorten cycle during rainy season or poor fuel quality',
    es: 'Filtro Grueso de Combustible Diésel (Separador de Agua). Reemplazar cada 5,000-10,000 km, acortar el ciclo en temporada de lluvias o con combustible de mala calidad',
    ar: 'مرشح الوقود الخشن (فاصل الماء). استبدل كل 5000-10000 كم، قصر الدورة في موسم الأمطار أو وقود رديء الجودة',
    ru: 'Грубый фильтр дизельного топлива (сепаратор воды). Заменять каждые 5000-10000 км, сокращать цикл в сезон дождей или при низком качестве топлива',
    fr: 'Filtre Carburant Diesel Grossier (Séparateur d\'Eau). Remplacer tous les 5 000-10 000 km, raccourcir le cycle en saison des pluies ou avec un carburant de mauvaise qualité',
    pt: 'Filtro Diesel Grosso (Separador de Água). Substituir a cada 5.000-10.000 km, encurtar o ciclo durante a estação chuvosa ou com combustível de má qualidade',
    it: 'Filtro Carburante Diesel Grossolano (Separatore Acqua). Sostituire ogni 5.000-10.000 km, accorciare il ciclo durante la stagione delle piogge o con carburante di scarsa qualità'
  },
  'sinotruk-sp-4': {
    zh: '柴油精滤器。与粗滤器同步更换',
    en: 'Diesel Fine Filter. Replace in sync with coarse filter',
    es: 'Filtro Fino de Combustible Diésel. Reemplazar sincronizado con el filtro grueso',
    ar: 'مرشح الوقود الدقيق. استبدل بالتزامن مع المرشح الخشن',
    ru: 'Тонкий фильтр дизельного топлива. Заменять одновременно с грубым фильтром',
    fr: 'Filtre Carburant Diesel Fin. Remplacer en synchronisation avec le filtre grossier',
    pt: 'Filtro Diesel Fino. Substituir em sincronia com o filtro grosso',
    it: 'Filtro Carburante Diesel Fine. Sostituire in sincronia con il filtro grossolano'
  },
  'sinotruk-sp-5': {
    zh: '发电机(28V/70A)。发电异常/异响时检修更换',
    en: 'Alternator (28V/70A). Inspect and replace if abnormal charging or noise occurs',
    es: 'Alternador (28V/70A). Inspeccionar y reemplazar si ocurren carga anormal o ruido',
    ar: 'مولد كهربائي (28V/70A). افحص واستبدل إذا حدثت شحنة غير طبيعية أو ضوضاء',
    ru: 'Генератор (28V/70A). Проверить и заменить при возникновении аномальной зарядки или шума',
    fr: 'Alternateur (28V/70A). Inspecter et remplacer en cas de charge anormale ou de bruit',
    pt: 'Alternador (28V/70A). Inspecionar e substituir se ocorrer carga anormal ou ruído',
    it: 'Alternatore (28V/70A). Ispezionare e sostituire se si verificano carica anomala o rumore'
  },
  'sinotruk-sp-6': {
    zh: '起动机总成。启动无力/异响时更换',
    en: 'Starter Motor Assembly. Replace if weak starting or abnormal noise occurs',
    es: 'Conjunto de Motor de Arranque. Reemplazar si hay arranque débil o ruido anormal',
    ar: 'مجموعة محرك البداية. استبدل إذا حدث بدء ضعيف أو ضوضاء غير طبيعية',
    ru: 'Стартер в сборе. Заменить при слабом запуске или аномальном шуме',
    fr: 'Ensemble Moteur de Démarrage. Remplacer en cas de démarrage faible ou de bruit anormal',
    pt: 'Conjunto de Motor de Partida. Substituir se houver partida fraca ou ruído anormal',
    it: 'Insieme Motore di Avviamento. Sostituire se si verifica avviamento debole o rumore anomalo'
  },
  'sinotruk-sp-7': {
    zh: '空气压缩机(双缸水冷)。刹车气压不足/异响时更换',
    en: 'Air Compressor (Twin Cylinder Water Cooled). Replace if brake air pressure is insufficient or abnormal noise occurs',
    es: 'Compresor de Aire (Doble Cilindro Enfriado por Agua). Reemplazar si la presión del aire de freno es insuficiente o hay ruido anormal',
    ar: 'ضاغط الهواء (أسطوانة مزدوجة مبردة بالماء). استبدل إذا كان ضغط الهواء في الفرامل غير كافٍ أو حدثت ضوضاء غير طبيعية',
    ru: 'Воздушный компрессор (двухцилиндровый водяного охлаждения). Заменить при недостаточном давлении воздуха тормоза или аномальном шуме',
    fr: 'Compresseur d\'Air (Double Cylindre Refroidi par Eau). Remplacer si la pression d\'air de frein est insuffisante ou si un bruit anormal se produit',
    pt: 'Compressor de Ar (Duplo Cilindro Refrigerado por Água). Substituir se a pressão do ar de freio for insuficiente ou se houver ruído anormal',
    it: 'Compressore Aria (Doppio Cilindro Raffreddato ad Acqua). Sostituire se la pressione dell\'aria del freno è insufficiente o si verifica rumore anomalo'
  },
  'sinotruk-sp-8': {
    zh: '前刹车蹄片总成。30,000-50,000km或视磨损',
    en: 'Front Brake Shoe Assembly. Replace every 30,000-50,000 km or as wear indicates',
    es: 'Conjunto de Zapata de Freno Delantero. Reemplazar cada 30,000-50,000 km o según el desgaste',
    ar: 'مجموعة حذاء الفرامل الأمامي. استبدل كل 30000-50000 كم أو حسب البلى',
    ru: 'Передняя тормозная колодка в сборе. Заменять каждые 30000-50000 км или по мере износа',
    fr: 'Ensemble Sabot de Frein Avant. Remplacer tous les 30 000-50 000 km ou selon l\'usure',
    pt: 'Conjunto de Sapata de Freio Dianteiro. Substituir a cada 30.000-50.000 km ou conforme o desgaste',
    it: 'Insieme Ceppo Freno Anteriore. Sostituire ogni 30.000-50.000 km o secondo l\'usura'
  },
  'sinotruk-sp-9': {
    zh: '后刹车蹄片(带摩擦片)。与前片同步检查,重载车型更频繁',
    en: 'Rear Brake Shoe (With Friction Pad). Check in sync with front shoes, more frequent for heavy-load vehicles',
    es: 'Zapata de Freno Trasero (Con Pastilla de Fricción). Verificar sincronizado con las zapatas delanteras, más frecuente para vehículos de carga pesada',
    ar: 'حذاء الفرامل الخلفي (مع وسادة احتكاك). تحقق بالتزامن مع الأحذية الأمامية، أكثر تكرارًا للمركبات الثقيلة الحمل',
    ru: 'Задняя тормозная колодка (с фрикционной накладкой). Проверять одновременно с передними колодками, чаще для тяжелонагруженных автомобилей',
    fr: 'Sabot de Frein Arrière (Avec Plaquette de Friction). Vérifier en synchronisation avec les sabots avant, plus fréquent pour les véhicules lourdement chargés',
    pt: 'Sapata de Freio Traseiro (Com Pastilha de Fricção). Verificar em sincronia com as sapatas dianteiras, mais frequente para veículos pesados',
    it: 'Ceppo Freno Posteriore (Con Pastiglia Frizione). Verificare in sincronia con i ceppi anteriori, più frequente per i veicoli pesanti'
  },
  'sinotruk-sp-10': {
    zh: '制动凸轮轴(左)。随刹车蹄片检查',
    en: 'Brake Camshaft (Left). Check with brake shoes',
    es: 'Árbol de Levas de Freno (Izquierdo). Verificar con las zapatas de freno',
    ar: 'عمود الكامات للفرامل (يسار). تحقق مع أحذية الفرامل',
    ru: 'Тормозной распределительный вал (левый). Проверять с тормозными колодками',
    fr: 'Arbre à Cames de Frein (Gauche). Vérifier avec les sabots de frein',
    pt: 'Comando de Válvulas de Freio (Esquerdo). Verificar com as sapatas de freio',
    it: 'Albero a Camme Freno (Sinistro). Verificare con i ceppi freno'
  },
  'sinotruk-sp-11': {
    zh: '刹车间隙自动调整臂。制动异响/行程异常时更换',
    en: 'Automatic Brake Clearance Adjustment Arm. Replace if brake noise or abnormal travel occurs',
    es: 'Brazo de Ajuste Automático de Holgura de Freno. Reemplazar si hay ruido de freno o recorrido anormal',
    ar: 'ذراع ضبط الخلوص التلقائي للفرامل. استبدل إذا حدثت ضوضاء الفرامل أو سفر غير طبيعي',
    ru: 'Рычаг автоматической регулировки зазора тормоза. Заменить при шуме тормоза или аномальном ходе',
    fr: 'Bras d\'Ajustement Automatique du Jeu de Frein. Remplacer en cas de bruit de frein ou de course anormale',
    pt: 'Braço de Ajuste Automático de Folga de Freio. Substituir se houver ruído de freio ou curso anormal',
    it: 'Braccio di Regolazione Automatica Gioco Freno. Sostituire se si verifica rumore freno o corsa anomala'
  },
  'sinotruk-sp-12': {
    zh: '制动气室(前桥)。刹车异响/漏气时更换',
    en: 'Brake Air Chamber (Front Axle). Replace if brake noise or air leakage occurs',
    es: 'Cámara de Aire de Freno (Eje Delantero). Reemplazar si hay ruido de freno o fugas de aire',
    ar: 'غرفة الهواء للفرامل (المحور الأمامي). استبدل إذا حدثت ضوضاء الفرامل أو تسرب الهواء',
    ru: 'Тормозная пневматическая камера (передняя ось). Заменить при шуме тормоза или утечке воздуха',
    fr: 'Chambre d\'Air de Frein (Essieu Avant). Remplacer en cas de bruit de frein ou de fuite d\'air',
    pt: 'Câmara de Ar de Freio (Eixo Dianteiro). Substituir se houver ruído de freio ou vazamento de ar',
    it: 'Camera Aria Freno (Assale Anteriore). Sostituire se si verifica rumore freno o perdita d\'aria'
  },
  'sinotruk-sp-13': {
    zh: '刹车盘。盘面磨损/异响时更换',
    en: 'Brake Disc. Replace if disc surface wear or abnormal noise occurs',
    es: 'Disco de Freno. Reemplazar si hay desgaste de la superficie del disco o ruido anormal',
    ar: 'قرص الفرامل. استبدل إذا حدث تآكل سطح القرص أو ضوضاء غير طبيعية',
    ru: 'Тормозной диск. Заменить при износе поверхности диска или аномальном шуме',
    fr: 'Disque de Frein. Remplacer en cas d\'usure de la surface du disque ou de bruit anormal',
    pt: 'Disco de Freio. Substituir se houver desgaste da superfície do disco ou ruído anormal',
    it: 'Disco Freno. Sostituire se si verifica usura della superficie del disco o rumore anomalo'
  },
  'sinotruk-sp-14': {
    zh: '离合器压盘总成。离合器打滑/异响时更换',
    en: 'Clutch Pressure Plate Assembly. Replace if clutch slipping or abnormal noise occurs',
    es: 'Conjunto de Plato de Presión de Embrague. Reemplazar si hay deslizamiento de embrague o ruido anormal',
    ar: 'مجموعة صفيحة ضغط القابض. استبدل إذا حدث انزلاق القابض أو ضوضاء غير طبيعية',
    ru: 'Нажимной диск сцепления в сборе. Заменить при пробуксовке сцепления или аномальном шуме',
    fr: 'Ensemble Plateau de Pression d\'Embrayage. Remplacer en cas de patinage d\'embrayage ou de bruit anormal',
    pt: 'Conjunto de Placa de Pressão de Embreagem. Substituir se houver patinagem de embreagem ou ruído anormal',
    it: 'Insieme Disco di Pressione Frizione. Sostituire se si verifica slittamento frizione o rumore anomalo'
  },
  'sinotruk-sp-15': {
    zh: '离合器分离轴承(助力泵)。离合器异响/踩踏沉重时更换',
    en: 'Clutch Release Bearing (With Power Pump). Replace if clutch noise or heavy pedal occurs',
    es: 'Rodamiento de Desembrague (Con Bomba de Potencia). Reemplazar si hay ruido de embrague o pedal pesado',
    ar: 'محمل فك القابض (مع مضخة الطاقة). استبدل إذا حدثت ضوضاء القابض أو ثقل الدواسة',
    ru: 'Подшипник выключения сцепления (с гидравлическим насосом). Заменить при шуме сцепления или тяжелой педали',
    fr: 'Roulement de Débrayage (Avec Pompe d\'Assistance). Remplacer en cas de bruit d\'embrayage ou de pédale lourde',
    pt: 'Rolamento de Desembreagem (Com Bomba de Potência). Substituir se houver ruído de embreagem ou pedal pesado',
    it: 'Cuscinetto Rilascio Frizione (Con Pompa Idraulica). Sostituire se si verifica rumore frizione o pedale pesante'
  },
  'sinotruk-sp-16': {
    zh: 'V型推力杆(稳定杆连杆)。悬挂异响/跑偏时检查更换',
    en: 'V-Type Thrust Rod (Stabilizer Link). Inspect and replace if suspension noise or vehicle drift occurs',
    es: 'Varilla de Empuje Tipo V (Enlace Estabilizador). Inspeccionar y reemplazar si hay ruido de suspensión o desviación del vehículo',
    ar: 'قضيب الدفع من النوع V (رابط المثبت). افحص واستبدل إذا حدثت ضوضاء التعليق أو انجراف المركبة',
    ru: 'V-образный тяговый стержень (стабилизирующая тяга). Проверить и заменить при шуме подвески или дрейфе автомобиля',
    fr: 'Tige de Poussée Type V (Lien Stabilisateur). Inspecter et remplacer en cas de bruit de suspension ou de dérive du véhicule',
    pt: 'Haste de Empuxo Tipo V (Elo Estabilizador). Inspecionar e substituir se houver ruído de suspensão ou deriva do veículo',
    it: 'Asta Spinta Tipo V (Collegamento Stabilizzatore). Ispezionare e sostituire se si verifica rumore sospensione o deriva del veicolo'
  },
  'sinotruk-sp-17': {
    zh: '转向节臂/羊角(左)。转向异响/精度下降时',
    en: 'Steering Knuckle Arm (Left). Replace if steering noise or reduced precision occurs',
    es: 'Brazo de Nudo de Dirección (Izquierdo). Reemplazar si hay ruido de dirección o pérdida de precisión',
    ar: 'ذراع مفصل التوجيه (يسار). استبدل إذا حدثت ضوضاء التوجيه أو انخفاض الدقة',
    ru: 'Рычаг поворотного кулака (левый). Заменить при шуме рулевого управления или снижении точности',
    fr: 'Bras de Fusée de Direction (Gauche). Remplacer en cas de bruit de direction ou de perte de précision',
    pt: 'Braço de Nó de Direção (Esquerdo). Substituir se houver ruído de direção ou perda de precisão',
    it: 'Braccio Nocca Sterzo (Sinistro). Sostituire se si verifica rumore sterzo o perdita di precisione'
  },
  'sinotruk-sp-18': {
    zh: '前钢板弹簧卷耳销。钢板弹簧异响/松旷时更换',
    en: 'Front Leaf Spring Eye Pin. Replace if leaf spring noise or looseness occurs',
    es: 'Pasador de Ojo de Resorte de Hoja Delantero. Reemplazar si hay ruido de resorte de hoja o holgura',
    ar: 'دبوس عين الزنبرك الورقي الأمامي. استبدل إذا حدثت ضوضاء الزنبرك الورقي أو ارتخاء',
    ru: 'Палец ушка передней листовой рессоры. Заменить при шуме листовой рессоры или люфте',
    fr: 'Goupille d\'Oeil de Ressort à Lames Avant. Remplacer en cas de bruit de ressort à lames ou de jeu',
    pt: 'Pino de Olho de Mola de Lâmina Dianteira. Substituir se houver ruído de mola de lâmina ou folga',
    it: 'Spina Occhio Molla a Balestra Anteriore. Sostituire se si verifica rumore molla a balestra o gioco'
  },
  'sinotruk-sp-19': {
    zh: '前钢板弹簧吊耳。与销/衬套同步更换',
    en: 'Front Leaf Spring Hanger. Replace in sync with pins/bushings',
    es: 'Soporte de Resorte de Hoja Delantero. Reemplazar sincronizado con pasadores/casquillos',
    ar: 'معلق الزنبرك الورقي الأمامي. استبدل بالتزامن مع الدبابيس / البوشات',
    ru: 'Кронштейн передней листовой рессоры. Заменять одновременно с пальцами/втулками',
    fr: 'Étrier de Ressort à Lames Avant. Remplacer en synchronisation avec les goupilles/bagues',
    pt: 'Suporte de Mola de Lâmina Dianteira. Substituir em sincronia com pinos/buchas',
    it: 'Staffa Molla a Balestra Anteriore. Sostituire in sincronia con spine/boccole'
  },
  'sinotruk-sp-20': {
    zh: 'king pin主销衬套。转向异响/间隙过大时更换',
    en: 'King Pin Bushing. Replace if steering noise or excessive clearance occurs',
    es: 'Casquillo de Pasador Principal. Reemplazar si hay ruido de dirección o holgura excesiva',
    ar: 'بوشة الدبوس الرئيسي. استبدل إذا حدثت ضوضاء التوجيه أو خلوص مفرط',
    ru: 'Втулка шкворня. Заменить при шуме рулевого управления или чрезмерном люфте',
    fr: 'Bague de Pivot Principal. Remplacer en cas de bruit de direction ou de jeu excessif',
    pt: 'Bucha de Pino Mestre. Substituir se houver ruído de direção ou folga excessiva',
    it: 'Boccola Perno Principale. Sostituire se si verifica rumore sterzo o gioco eccessivo'
  },
  'sinotruk-sp-21': {
    zh: '前悬挂减震器总成。异响/漏油时更换',
    en: 'Front Suspension Shock Absorber Assembly. Replace if abnormal noise or oil leakage occurs',
    es: 'Conjunto de Amortiguador de Suspensión Delantero. Reemplazar si hay ruido anormal o fugas de aceite',
    ar: 'مجموعة ممص الصدمات الأمامي. استبدل إذا حدثت ضوضاء غير طبيعية أو تسرب الزيت',
    ru: 'Передний амортизатор подвески в сборе. Заменить при аномальном шуме или утечке масла',
    fr: 'Ensemble Amortisseur de Suspension Avant. Remplacer en cas de bruit anormal ou de fuite d\'huile',
    pt: 'Conjunto de Amortecedor de Suspensão Dianteiro. Substituir se houver ruído anormal ou vazamento de óleo',
    it: 'Insieme Ammortizzatore Sospensione Anteriore. Sostituire se si verifica rumore anomalo o perdita olio'
  },
  'sinotruk-sp-22': {
    zh: '后悬挂减震器总成。异响/漏油时更换',
    en: 'Rear Suspension Shock Absorber Assembly. Replace if abnormal noise or oil leakage occurs',
    es: 'Conjunto de Amortiguador de Suspensión Trasero. Reemplazar si hay ruido anormal o fugas de aceite',
    ar: 'مجموعة ممص الصدمات الخلفي. استبدل إذا حدثت ضوضاء غير طبيعية أو تسرب الزيت',
    ru: 'Задний амортизатор подвески в сборе. Заменить при аномальном шуме или утечке масла',
    fr: 'Ensemble Amortisseur de Suspension Arrière. Remplacer en cas de bruit anormal ou de fuite d\'huile',
    pt: 'Conjunto de Amortecedor de Suspensão Traseiro. Substituir se houver ruído anormal ou vazamento de óleo',
    it: 'Insieme Ammortizzatore Sospensione Posteriore. Sostituire se si verifica rumore anomalo o perdita olio'
  },
  'sinotruk-sp-23': {
    zh: '后钢板弹簧总成。下沉/断裂时更换',
    en: 'Rear Leaf Spring Assembly. Replace if sagging or cracking occurs',
    es: 'Conjunto de Resorte de Hoja Trasero. Reemplazar si hay hundimiento o grietas',
    ar: 'مجموعة الزنبرك الورقي الخلفي. استبدل إذا حدث الترهل أو الكسر',
    ru: 'Задняя листовая рессора в сборе. Заменить при проседании или трещинах',
    fr: 'Ensemble Ressort à Lames Arrière. Remplacer en cas d\'affaissement ou de fissures',
    pt: 'Conjunto de Mola de Lâmina Traseira. Substituir se houver flecha ou rachaduras',
    it: 'Insieme Molla a Balestra Posteriore. Sostituire se si verifica cedimento o crepe'
  },
  'sinotruk-sp-24': {
    zh: '钢板弹簧U型螺栓压板。随弹簧检查更换',
    en: 'Leaf Spring U-Bolt Clamp Plate. Check and replace with spring inspection',
    es: 'Placa de Abrazadera de Perno en U de Resorte de Hoja. Verificar y reemplazar con inspección de resorte',
    ar: 'لوحة مشبك برغي U للزنبرك الورقي. تحقق واستبدل مع فحص الزنبرك',
    ru: 'Зажимная пластина U-образного болта листовой рессоры. Проверять и заменять при проверке рессоры',
    fr: 'Plaque de Serrage Boulon en U de Ressort à Lames. Vérifier et remplacer avec inspection du ressort',
    pt: 'Placa de Presilha de Parafuso U de Mola de Lâmina. Verificar e substituir com inspeção de mola',
    it: 'Piastra Morsetto Bullone U Molla a Balestra. Verificare e sostituire con ispezione molla'
  },
  'sinotruk-sp-25': {
    zh: '后桥半轴(右)。异响/断裂时更换(大修类)',
    en: 'Rear Axle Half Shaft (Right). Replace if noise or breakage occurs (major overhaul)',
    es: 'Semieje del Eje Trasero (Derecho). Reemplazar si hay ruido o ruptura (revisión mayor)',
    ar: 'نصف محور المحور الخلفي (يمين). استبدل إذا حدثت ضوضاء أو كسر (إصلاح شامل)',
    ru: 'Полуось заднего моста (правая). Заменить при шуме или разрыве (капитальный ремонт)',
    fr: 'Demi-Arbre de l\'Essieu Arrière (Droit). Remplacer en cas de bruit ou de rupture (révision majeure)',
    pt: 'Semieixo do Eixo Traseiro (Direito). Substituir se houver ruído ou ruptura (revisão geral)',
    it: 'Semiasse Assale Posteriore (Destro). Sostituire se si verifica rumore o rottura (revisione generale)'
  },
  'sinotruk-sp-26': {
    zh: '万向节十字轴总成。传动轴异响/抖动时更换',
    en: 'Universal Joint Cross Shaft Assembly. Replace if driveshaft noise or vibration occurs',
    es: 'Conjunto de Árbol Cruzado de Junta Universal. Reemplazar si hay ruido o vibración del árbol de transmisión',
    ar: 'مجموعة عمود الصليب المفصل العام. استبدل إذا حدثت ضوضاء أو اهتزاز عمود الدفع',
    ru: 'Крестовина карданного вала в сборе. Заменить при шуме или вибрации карданного вала',
    fr: 'Ensemble Arbre Croisé de Joint Universel. Remplacer en cas de bruit ou de vibration de l\'arbre de transmission',
    pt: 'Conjunto de Eixo Cruzado de Junta Universal. Substituir se houver ruído ou vibração do eixo de transmissão',
    it: 'Insieme Albero Croce Giunto Universale. Sostituire se si verifica rumore o vibrazione albero trasmissione'
  },
  'sinotruk-sp-27': {
    zh: '传动轴总成(变速箱至驱动桥)。异响/抖动/大修时更换',
    en: 'Driveshaft Assembly (Transmission to Drive Axle). Replace if noise, vibration or major overhaul needed',
    es: 'Conjunto de Árbol de Transmisión (Transmisión a Eje Motriz). Reemplazar si hay ruido, vibración o se necesita revisión mayor',
    ar: 'مجموعة عمود الدفع (ناقل الحركة إلى محور القيادة). استبدل إذا حدثت ضوضاء أو اهتزاز أو كان هناك حاجة لإصلاح شامل',
    ru: 'Карданный вал в сборе (коробка передач к ведущему мосту). Заменить при шуме, вибрации или необходимости капитального ремонта',
    fr: 'Ensemble Arbre de Transmission (Boîte de Vitesses à Essieu Moteur). Remplacer en cas de bruit, vibration ou besoin de révision majeure',
    pt: 'Conjunto de Eixo de Transmissão (Transmissão para Eixo Motriz). Substituir se houver ruído, vibração ou necessidade de revisão geral',
    it: 'Insieme Albero di Trasmissione (Cambio a Assale Motore). Sostituire se si verifica rumore, vibrazione o necessità di revisione generale'
  },
  'sinotruk-sp-28': {
    zh: '水泵总成。冷却液渗漏/异响时更换',
    en: 'Water Pump Assembly. Replace if coolant leakage or abnormal noise occurs',
    es: 'Conjunto de Bomba de Agua. Reemplazar si hay fugas de refrigerante o ruido anormal',
    ar: 'مجموعة مضخة المياه. استبدل إذا حدث تسرب سائل التبريد أو ضوضاء غير طبيعية',
    ru: 'Водяной насос в сборе. Заменить при утечке охлаждающей жидкости или аномальном шуме',
    fr: 'Ensemble Pompe à Eau. Remplacer en cas de fuite de liquide de refroidissement ou de bruit anormal',
    pt: 'Conjunto de Bomba de Água. Substituir se houver vazamento de refrigerante ou ruído anormal',
    it: 'Insieme Pompa Acqua. Sostituire se si verifica perdita refrigerante o rumore anomalo'
  },
  'sinotruk-sp-29': {
    zh: '散热器护罩/水箱罩。碰撞/老化开裂时更换',
    en: 'Radiator Shroud / Water Tank Cover. Replace if collision damage or age-related cracking occurs',
    es: 'Cubierta del Radiador / Tapa del Tanque de Agua. Reemplazar si hay daño por colisión o grietas por envejecimiento',
    ar: 'غطاء المبرد / غطاء خزان المياه. استبدل إذا حدث ضرر من التصادم أو تشقق بسبب الشيخوخة',
    ru: 'Кожух радиатора / Крышка бака охлаждающей жидкости. Заменить при повреждении от столкновения или трещинах от старения',
    fr: 'Carénage du Radiateur / Couvercle du Réservoir d\'Eau. Remplacer en cas de dommages de collision ou de fissures dues à l\'âge',
    pt: 'Protetor do Radiador / Tampa do Tanque de Água. Substituir se houver dano de colisão ou rachaduras relacionadas à idade',
    it: 'Copertura Radiatore / Coperchio Serbatoio Acqua. Sostituire se si verifica danno da collisione o crepe dovute all\'invecchiamento'
  },
  'sinotruk-sp-30': {
    zh: '涡轮增压器总成。动力下降/异响/漏油时更换(大修类)',
    en: 'Turbocharger Assembly. Replace if power loss, abnormal noise or oil leakage occurs (major overhaul)',
    es: 'Conjunto de Turbocompresor. Reemplazar si hay pérdida de potencia, ruido anormal o fugas de aceite (revisión mayor)',
    ar: 'مجموعة الشاحن التوربيني. استبدل إذا حدث فقدان الطاقة أو ضوضاء غير طبيعية أو تسرب الزيت (إصلاح شامل)',
    ru: 'Турбокомпрессор в сборе. Заменить при потере мощности, аномальном шуме или утечке масла (капитальный ремонт)',
    fr: 'Ensemble Turbocompresseur. Remplacer en cas de perte de puissance, de bruit anormal ou de fuite d\'huile (révision majeure)',
    pt: 'Conjunto de Turbocompressor. Substituir se houver perda de potência, ruído anormal ou vazamento de óleo (revisão geral)',
    it: 'Insieme Turbocompressore. Sostituire se si verifica perdita di potenza, rumore anomalo o perdita olio (revisione generale)'
  },
  'sinotruk-sp-31': {
    zh: '消声器(排气筒)总成。排气异响/锈蚀穿孔时更换',
    en: 'Muffler (Exhaust Pipe) Assembly. Replace if exhaust noise or rust perforation occurs',
    es: 'Conjunto de Silenciador (Tubo de Escape). Reemplazar si hay ruido de escape o perforación por corrosión',
    ar: 'مجموعة كاتم الصوت (أنبوب العادم). استبدل إذا حدثت ضوضاء العادم أو ثقب الصدأ',
    ru: 'Глушитель (выхлопная труба) в сборе. Заменить при шуме выхлопа или перфорации от ржавчины',
    fr: 'Ensemble Silencieux (Tuyau d\'Échappement). Remplacer en cas de bruit d\'échappement ou de perforation par corrosion',
    pt: 'Conjunto de Silenciador (Tubo de Escape). Substituir se houver ruído de escape ou perfuração por corrosão',
    it: 'Insieme Silenziatore (Tubo Scarico). Sostituire se si verifica rumore scarico o perforazione da ruggine'
  },
  'sinotruk-sp-32': {
    zh: '动力转向助力泵。转向沉重/异响时更换',
    en: 'Power Steering Pump. Replace if steering heaviness or abnormal noise occurs',
    es: 'Bomba de Dirección Asistida. Reemplazar si hay pesadez de dirección o ruido anormal',
    ar: 'مضخة التوجيه بمساعدة الطاقة. استبدل إذا حدثت ثقل التوجيه أو ضوضاء غير طبيعية',
    ru: 'Насос гидроусилителя рулевого управления. Заменить при тяжести рулевого управления или аномальном шуме',
    fr: 'Pompe de Direction Assistée. Remplacer en cas de lourdeur de direction ou de bruit anormal',
    pt: 'Bomba de Direção Assistida. Substituir se houver peso de direção ou ruído anormal',
    it: 'Pompa Sterzo Assistito. Sostituire se si verifica pesantezza sterzo o rumore anomalo'
  },
  'sinotruk-sp-33': {
    zh: '离合器从动盘(摩擦片)。离合器打滑/异响时更换',
    en: 'Clutch Driven Disc (Friction Plate). Replace if clutch slipping or abnormal noise occurs',
    es: 'Disco Conducido de Embrague (Placa de Fricción). Reemplazar si hay deslizamiento de embrague o ruido anormal',
    ar: 'قرص القابض المدفوع (لوحة احتكاك). استبدل إذا حدث انزلاق القابض أو ضوضاء غير طبيعية',
    ru: 'Ведомый диск сцепления (фрикционная накладка). Заменить при пробуксовке сцепления или аномальном шуме',
    fr: 'Disque Mené d\'Embrayage (Plaque de Friction). Remplacer en cas de patinage d\'embrayage ou de bruit anormal',
    pt: 'Disco Conduzido de Embreagem (Placa de Fricção). Substituir se houver patinagem de embreagem ou ruído anormal',
    it: 'Disco Condotto Frizione (Piastra Frizione). Sostituire se si verifica slittamento frizione o rumore anomalo'
  },
  'sinotruk-sp-34': {
    zh: '离合器助力缸(分离缸)。离合器踩踏沉重/异响时更换',
    en: 'Clutch Booster Cylinder (Release Cylinder). Replace if clutch pedal heaviness or abnormal noise occurs',
    es: 'Cilindro Auxiliar de Embrague (Cilindro de Desembrague). Reemplazar si hay pesadez de pedal de embrague o ruido anormal',
    ar: 'اسطوانة معزز القابض (اسطوانة الفك). استبدل إذا حدثت ثقل دواسة القابض أو ضوضاء غير طبيعية',
    ru: 'Цилиндр усилителя сцепления (цилиндр выключения). Заменить при тяжести педали сцепления или аномальном шуме',
    fr: 'Cylindre Auxiliaire d\'Embrayage (Cylindre de Débrayage). Remplacer en cas de lourdeur de pédale d\'embrayage ou de bruit anormal',
    pt: 'Cilindro Auxiliar de Embreagem (Cilindro de Desembreagem). Substituir se houver peso de pedal de embreagem ou ruído anormal',
    it: 'Cilindro Ausiliario Frizione (Cilindro Rilascio). Sostituire se si verifica pesantezza pedale frizione o rumore anomalo'
  },
  'sinotruk-sp-35': {
    zh: '前刹车摩擦片(内衬)。随蹄片检查更换',
    en: 'Front Brake Friction Pad (Inner Lining). Check and replace with brake shoes',
    es: 'Pastilla de Fricción de Freno Delantero (Forro Interior). Verificar y reemplazar con zapatas de freno',
    ar: 'وسادة احتكاك الفرامل الأمامية (بطانة داخلية). تحقق واستبدل مع أحذية الفرامل',
    ru: 'Передняя тормозная фрикционная накладка (внутренняя облицовка). Проверять и заменять с тормозными колодками',
    fr: 'Plaquette de Friction de Frein Avant (Doublure Intérieure). Vérifier et remplacer avec les sabots de frein',
    pt: 'Pastilha de Fricção de Freio Dianteiro (Forro Interior). Verificar e substituir com sapatas de freio',
    it: 'Pastiglia Frizione Freno Anteriore (Rivestimento Interno). Verificare e sostituire con ceppi freno'
  },
  'sinotruk-sp-36': {
    zh: '刹车蹄片总成(带内衬)。30,000-50,000km或视磨损',
    en: 'Brake Shoe Assembly (With Inner Lining). Replace every 30,000-50,000 km or as wear indicates',
    es: 'Conjunto de Zapata de Freno (Con Forro Interior). Reemplazar cada 30,000-50,000 km o según el desgaste',
    ar: 'مجموعة حذاء الفرامل (مع بطانة داخلية). استبدل كل 30000-50000 كم أو حسب البلى',
    ru: 'Тормозная колодка в сборе (с внутренней облицовкой). Заменять каждые 30000-50000 км или по мере износа',
    fr: 'Ensemble Sabot de Frein (Avec Doublure Intérieure). Remplacer tous les 30 000-50 000 km ou selon l\'usure',
    pt: 'Conjunto de Sapata de Freio (Com Forro Interior). Substituir a cada 30.000-50.000 km ou conforme o desgaste',
    it: 'Insieme Ceppo Freno (Con Rivestimento Interno). Sostituire ogni 30.000-50.000 km o secondo l\'usura'
  },
  'sinotruk-sp-37': {
    zh: '驻车/手刹阀。驻车异响/失效时检修更换',
    en: 'Parking / Hand Brake Valve. Inspect and replace if parking brake noise or failure occurs',
    es: 'Válvula de Freno de Estacionamiento / Mano. Inspeccionar y reemplazar si hay ruido o fallo del freno de estacionamiento',
    ar: 'صمام الفرامل الثابتة / اليد. افحص واستبدل إذا حدثت ضوضاء أو فشل الفرامل الثابتة',
    ru: 'Клапан стояночного / ручного тормоза. Проверить и заменить при шуме или отказе стояночного тормоза',
    fr: 'Soupape de Frein de Stationnement / Main. Inspecter et remplacer en cas de bruit ou de panne du frein de stationnement',
    pt: 'Válvula de Freio de Estacionamento / Mão. Inspecionar e substituir se houver ruído ou falha do freio de estacionamento',
    it: 'Valvola Freno di Parcheggio / Mano. Ispezionare e sostituire se si verifica rumore o guasto freno di parcheggio'
  },
  'sinotruk-sp-38': {
    zh: '排气制动阀。制动效果下降时检修更换',
    en: 'Engine Brake Valve. Inspect and replace if braking effect decreases',
    es: 'Válvula de Freno del Motor. Inspeccionar y reemplazar si el efecto de frenado disminuye',
    ar: 'صمام فرامل المحرك. افحص واستبدل إذا انخفض تأثير الفرملة',
    ru: 'Клапан тормоза двигателя. Проверить и заменить при снижении эффективности торможения',
    fr: 'Soupape de Frein Moteur. Inspecter et remplacer si l\'effet de freinage diminue',
    pt: 'Válvula de Freio do Motor. Inspecionar e substituir se o efeito de frenagem diminuir',
    it: 'Valvola Freno Motore. Ispezionare e sostituire se l\'effetto frenante diminuisce'
  },
  'sinotruk-sp-39': {
    zh: '输入轴转速传感器。变速箱换挡异常时检修更换',
    en: 'Input Shaft Speed Sensor. Inspect and replace if abnormal transmission shifting occurs',
    es: 'Sensor de Velocidad del Eje de Entrada. Inspeccionar y reemplazar si hay cambios de transmisión anormales',
    ar: 'مستشعر سرعة عمود الإدخال. افحص واستبدل إذا حدث تحول غير طبيعي في ناقل الحركة',
    ru: 'Датчик скорости входного вала. Проверить и заменить при аномальном переключении коробки передач',
    fr: 'Capteur de Vitesse d\'Arbre d\'Entrée. Inspecter et remplacer en cas de changement de transmission anormal',
    pt: 'Sensor de Velocidade do Eixo de Entrada. Inspecionar e substituir se houver mudança de transmissão anormal',
    it: 'Sensore Velocità Albero Ingresso. Ispezionare e sostituire se si verifica cambio trasmissione anomalo'
  },
  'sinotruk-sp-40': {
    zh: '四回路气压保护阀。气压异常/制动不良时更换',
    en: 'Four-Circuit Air Pressure Protection Valve. Replace if air pressure abnormality or poor braking occurs',
    es: 'Válvula de Protección de Presión de Aire de Cuatro Circuitos. Reemplazar si hay anomalía de presión de aire o frenado deficiente',
    ar: 'صمام حماية ضغط الهواء رباعي الدوائر. استبدل إذا حدثت شذوذ ضغط الهواء أو فرملة سيئة',
    ru: 'Четырехконтурный клапан защиты давления воздуха. Заменить при аномалии давления воздуха или плохом торможении',
    fr: 'Soupape de Protection de Pression d\'Air Quatre Circuits. Remplacer en cas d\'anomalie de pression d\'air ou de freinage déficient',
    pt: 'Válvula de Proteção de Pressão de Ar de Quatro Circuitos. Substituir se houver anomalia de pressão de ar ou frenagem deficiente',
    it: 'Valvola Protezione Pressione Aria Quattro Circuiti. Sostituire se si verifica anomalia pressione aria o frenatura scarsa'
  },
  'sinotruk-sp-41': {
    zh: '车门玻璃升降器(左/右)。升降失灵时更换',
    en: 'Door Window Regulator (Left/Right). Replace if window operation fails',
    es: 'Regulador de Ventana de Puerta (Izquierdo/Derecho). Reemplazar si falla la operación de la ventana',
    ar: 'منظم نافذة الباب (يسار / يمين). استبدل إذا فشلت عملية النافذة',
    ru: 'Регулятор стекла двери (левый / правый). Заменить при отказе механизма стекла',
    fr: 'Régulateur de Vitre de Porte (Gauche/Droite). Remplacer en cas de défaillance du fonctionnement de la vitre',
    pt: 'Regulador de Vidro da Porta (Esquerdo/Direito). Substituir se a operação da janela falhar',
    it: 'Regolatore Vetro Porta (Sinistro/Destro). Sostituire se il funzionamento del vetro non riesce'
  },
  'sinotruk-sp-42': {
    zh: '驱动轴节叉(万向节叉)。传动轴异响时更换',
    en: 'Drive Shaft Yoke (Universal Joint Yoke). Replace if driveshaft noise occurs',
    es: 'Horquilla de Árbol de Transmisión (Horquilla de Junta Universal). Reemplazar si hay ruido del árbol de transmisión',
    ar: 'شوكة عمود الدفع (شوكة المفصل العام). استبدل إذا حدثت ضوضاء عمود الدفع',
    ru: 'Вилка карданного вала (вилка карданного шарнира). Заменить при шуме карданного вала',
    fr: 'Fourchette d\'Arbre de Transmission (Fourchette de Joint Universel). Remplacer en cas de bruit de l\'arbre de transmission',
    pt: 'Garfo de Eixo de Transmissão (Garfo de Junta Universal). Substituir se houver ruído do eixo de transmissão',
    it: 'Forcella Albero Trasmissione (Forcella Giunto Universale). Sostituire se si verifica rumore albero trasmissione'
  },
  'sinotruk-sp-43': {
    zh: '液压油泵(举升系统)。举升无力/异响时检修更换',
    en: 'Hydraulic Oil Pump (Lifting System). Inspect and replace if lifting weakness or abnormal noise occurs',
    es: 'Bomba de Aceite Hidráulico (Sistema de Elevación). Inspeccionar y reemplazar si hay debilidad de elevación o ruido anormal',
    ar: 'مضخة الزيت الهيدروليكي (نظام الرفع). افحص واستبدل إذا حدث ضعف الرفع أو ضوضاء غير طبيعية',
    ru: 'Гидравлический масляный насос (система подъема). Проверить и заменить при слабости подъема или аномальном шуме',
    fr: 'Pompe d\'Huile Hydraulique (Système de Levage). Inspecter et remplacer en cas de faiblesse de levage ou de bruit anormal',
    pt: 'Bomba de Óleo Hidráulico (Sistema de Elevação). Inspecionar e substituir se houver fraqueza de elevação ou ruído anormal',
    it: 'Pompa Olio Idraulico (Sistema Sollevamento). Ispezionare e sostituire se si verifica debolezza sollevamento o rumore anomalo'
  }
};

export function getTranslatedSinotrukSparePart(partId: string, language: string = 'en'): string {
  return sinotrukSparePartNames[partId]?.[language] || sinotrukSparePartNames[partId]?.['en'] || partId;
}

export function getTranslatedSinotrukSparePartCategory(category: string, language: string = 'en'): string {
  return sinotrukSparePartCategories[category]?.[language] || sinotrukSparePartCategories[category]?.['en'] || category;
}

export function getTranslatedSinotrukSparePartDescription(partId: string, language: string = 'en'): string {
  return sinotrukSparePartDescriptions[partId]?.[language] || sinotrukSparePartDescriptions[partId]?.['en'] || '';
}
