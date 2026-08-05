// Auto-generated translations for Toyota spare parts
// DO NOT EDIT MANUALLY

export const toyotaNameTranslations = {
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
  'Braking System': {
  },
  'Cooling System': {
  },
  'Diesel Filter(前置)': {
  },
  'Front Wiper Blade(副驾驶侧)': {
  },
  'Front Wiper Blade(右舵车驾驶侧)': {
  },
  'Front Wiper Blade(通用参考号)': {
  },
  'Fuel System': {
  },
  'Hub/Transmission轴': {
  },
  'Maintenance/Filtration System': {
  },
  'Oil Filter': {
  },
  'Steering Knuckle Arm(早期Vigo)': {
  },
  'Steering Knuckle Arm(羊角臂)': {
  },
  'Steering System': {
  },
  'Suspension System': {
  },
  'Water Pump Assembly': {
  },
  '中冷器总成': {
  },
  '传动/皮带': {
  },
  '传动轴': {
  },
  '传动轴十字节(万向节)': {
  },
  '减震器上支座(顶胶)': {
  },
  '刹车分泵总成(后)': {
  },
  '刹车分泵缸体(前)': {
  },
  '前CV等速万向节': {
  },
  '前下摆臂衬套': {
  },
  '前减震器': {
  },
  '前刹车片': {
  },
  '前差速器壳体': {
  },
  '前稳定杆连杆(右)': {
  },
  '前稳定杆连杆(左)': {
  },
  '前轮轴承总成': {
  },
  '后减震器': {
  },
  '后刹车蹄片': {
  },
  '后轮轴承总成(含ABS环)': {
  },
  '后钢板弹簧吊耳衬套': {
  },
  '差速器/传动': {
  },
  '差速器齿轮总成': {
  },
  '散热器总成(参考)': {
  },
  '散热器风扇罩': {
  },
  '曲轴正时齿轮': {
  },
  '正时链条导轨': {
  },
  '正时链条组件(非皮带)': {
  },
  '氧传感器': {
  },
  '水路旁通管': {
  },
  '点火/预热系统': {
  },
  '燃油喷油器(1GD)': {
  },
  '燃油喷油器(2GD)': {
  },
  '燃油泵SCV阀': {
  },
  '空调/花粉滤芯': {
  },
  '空调冷凝器总成': {
  },
  '空调压缩机总成': {
  },
  '空调系统': {
  },
  '节气门总成': {
  },
  '转向拉杆球头': {
  },
  '转向机拉杆端': {
  },
  '进气/涡轮增压': {
  },
  '雨刮/电气': {
  },
  '预热塞(老款2L/3L柴油机)': {
  },
  '风扇/发电机V带': {
  },
  '空气滤芯': {
  },
  '柴油滤芯(前置)': {
  },
  '转向节臂(羊角臂)': {
  },
  '水泵总成': {
  },
};

export function getTranslatedToyotaSparePartName(name: string, language: string = 'zh'): string {
  const translations = toyotaNameTranslations[name as keyof typeof toyotaNameTranslations];
  return translations?.[language as keyof typeof translations] || name;
}

export const toyotaDescriptionTranslations: Record<string, Record<string, string>> = {
  'Toyota part. Replace every 500-1000 hours or based on fluid analysis results.': {
    en: 'Toyota part. Replace every 500-1000 hours or based on fluid analysis results.',
    zh: '丰田零件。500-1000小时或视油液检测结果更换',
    ar: 'Toyota part. Replace every 500-1000 hours or based on fluid analysis results.',
    it: 'Toyota part. Replace every 500-1000 hours or based on fluid analysis results.',
    es: 'Pieza Toyota. Reemplazar cada 500-1000 horas o según los resultados del análisis de fluidos.',
    fr: 'Pièce Toyota. Remplacer tous les 500-1000 heures ou selon les résultats de l\'analyse des fluides.',
    de: 'Toyota-Teil. Alle 500-1000 Stunden oder nach Fluidanalyse ersetzen.',
    pt: 'Peça Toyota. Substituir a cada 500-1000 horas ou com base nos resultados da análise de fluidos.',
    ru: 'Деталь Toyota. Заменяйте каждые 500-1000 часов или на основе результатов анализа жидкости.',
    ja: 'Toyota部品。500～1000時間ごと、または流体分析結果に基づいて交換してください。',
  },
};

export function getTranslatedToyotaSparePartDescription(description: string, language: string = 'zh'): string {
  const translations = toyotaDescriptionTranslations[description];
  if (translations && translations[language]) {
    return translations[language];
  }
  return description;
}
export const toyotaCategoryTranslations: Record<string, Record<string, string>> = {
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

export function getTranslatedToyotaSparePartCategory(category: string, language: string = 'zh'): string {
  const translations = toyotaCategoryTranslations[category];
  return translations?.[language as keyof typeof translations] || category;
}


