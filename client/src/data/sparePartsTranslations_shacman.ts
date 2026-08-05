// Auto-generated translations for Shacman spare parts
// DO NOT EDIT MANUALLY

export const shacmanNameTranslations = {
  'Air Filter': {
    en: 'Air Filter',
    es: 'Filtro de Aire',
    fr: 'Filtre à Air',
    de: 'Luftfilter',
    pt: 'Filtro de Ar',
    ru: 'Воздушный фильтр',
    ja: 'エアフィルター',
    zh: 'Air Filter',
    ar: 'مرشح الهواء',
    it: 'Filtro dell\'aria',
  },
  'Cooling System': {
  },
  'Diesel Filter': {
  },
  'Maintenance/Filtration System': {
  },
  'Oil Filter': {
  },
  'Turbocharger总成': {
  },
  'Turbocharger进气管': {
  },
  '传动/万向节': {
  },
  '传动/离合器': {
  },
  '传动轴总成(F3000)': {
  },
  '侧倾/横向减震器': {
  },
  '制动气室(前/后桥)': {
  },
  '制动系统': {
  },
  '刹车蹄片弹簧': {
  },
  '前轮毂总成': {
  },
  '前轮轴承维修包': {
  },
  '前钢板弹簧总成(带支架/吊耳)': {
  },
  '前雨刮片': {
  },
  '发电机总成': {
  },
  '右前大灯总成': {
  },
  '后悬挂减震器': {
  },
  '增压/进气': {
  },
  '左前大灯总成': {
  },
  '悬挂减震': {
  },
  '悬挂系统': {
  },
  '排气制动蝶阀': {
  },
  '水泵总成': {
  },
  '燃油粗滤器(油水分离器)': {
  },
  '电气/启动': {
  },
  '离合器总泵及油壶总成': {
  },
  '离合器片总成': {
  },
  '起动机总成': {
  },
  '车身/电气': {
  },
  '车身/雨刮': {
  },
  '转向主销(king pin)总成': {
  },
  '转向系统': {
  },
  '转向节臂/横拉杆(转向梯形臂)': {
  },
  '轮毂/传动': {
  },
  '轮毂/传动轴': {
  },
  '进气/增压': {
  },
  '雨刮臂(SWF)': {
  },
  '雨刮连杆总成(带电机)': {
  },
  '驱动桥空气弹簧(气囊)': {
  },
  '驱动轴节叉': {
  },
  '驾驶室后减震器': {
  },
  '高度阀(空气悬挂)': {
  },
  '柴油滤芯': {
  },
  '空气滤芯': {
  },
  '涡轮增压器进气管': {
  },
  '涡轮增压器总成': {
  },
};

export function getTranslatedShacmanSparePartName(name: string, language: string = 'zh'): string {
  const translations = shacmanNameTranslations[name as keyof typeof shacmanNameTranslations];
  return translations?.[language as keyof typeof translations] || name;
}

export const shacmanDescriptionTranslations: Record<string, Record<string, string>> = {
  'Shacman part. Replace every 500-1000 hours or based on fluid analysis results.': {
    en: 'Shacman part. Replace every 500-1000 hours or based on fluid analysis results.',
    zh: '陕汽零件。500-1000小时或视油液检测结果更换',
    ar: 'Shacman part. Replace every 500-1000 hours or based on fluid analysis results.',
    it: 'Shacman part. Replace every 500-1000 hours or based on fluid analysis results.',
    es: 'Pieza Shacman. Reemplazar cada 500-1000 horas o según los resultados del análisis de fluidos.',
    fr: 'Pièce Shacman. Remplacer tous les 500-1000 heures ou selon les résultats de l\'analyse des fluides.',
    de: 'Shacman-Teil. Alle 500-1000 Stunden oder nach Fluidanalyse ersetzen.',
    pt: 'Peça Shacman. Substituir a cada 500-1000 horas ou com base nos resultados da análise de fluidos.',
    ru: 'Деталь Shacman. Заменяйте каждые 500-1000 часов или на основе результатов анализа жидкости.',
    ja: 'Shacman部品。500～1000時間ごと、または流体分析結果に基づいて交換してください。',
  },
};

export function getTranslatedShacmanSparePartDescription(description: string, language: string = 'zh'): string {
  const translations = shacmanDescriptionTranslations[description];
  if (translations && translations[language]) {
    return translations[language];
  }
  return description;
}
export const shacmanCategoryTranslations: Record<string, Record<string, string>> = {
  'Maintenance/Filtration System': {
    en: 'Maintenance/Filtration System',
    es: 'Sistema de Mantenimiento/Filtración',
    fr: 'Système de Maintenance/Filtration',
    de: 'Wartungs-/Filtersystem',
    pt: 'Sistema de Manutenção/Filtração',
    ru: 'Система обслуживания/фильтрации',
    ja: 'メンテナンス/フィルトレーションシステム',
    zh: '维护/过滤系统',
    it: 'Sistema di manutenzione/filtrazione',
    ar: 'نظام الصيانة/الترشيح',
  },
  'Cooling System': {
  },
  'Turbocharging/Intake System': {
  },
  'Chassis/Track System': {
  },
  'Excavation/GET': {
  },
  'Excavation/GET (Small)': {
  },
  'Excavation/GET (Medium)': {
  },
  'Excavation/GET (Large)': {
  },
  'Transmission System': {
  },
  'Boom Pin/Bushing System': {
  },
  'Hydraulic Cylinder/Seals': {
  },
};

export function getTranslatedShacmanSparePartCategory(category: string, language: string = 'zh'): string {
  const translations = shacmanCategoryTranslations[category];
  return translations?.[language as keyof typeof translations] || category;
}


