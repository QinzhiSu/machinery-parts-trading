// Auto-generated translations for Cummins spare parts
// DO NOT EDIT MANUALLY

export const cumminsNameTranslations = {
  'Connecting Rod Bearing': {
    en: 'Connecting Rod',
    es: 'Biela',
    fr: 'Bielle',
    de: 'Pleuelstange',
    pt: 'Biela',
    ru: 'Шатун',
    ja: 'コネクティングロッド',
    zh: 'Connecting Rod',
    ar: 'Connecting Rod Bearing',
    it: 'Connecting Rod Bearing',
  },
  'Connecting Rod Bolt': {
  },
  'Cooling System': {
  },
  'Engine System': {
  },
  'Fuel System': {
  },
  'Lubrication System': {
  },
  'Piston冷却喷嘴': {
  },
  'Piston组件': {
  },
  'Turbocharger软管': {
  },
  '主轴承套件': {
  },
  '主轴瓦': {
  },
  '前油封': {
  },
  '排气门推杆': {
  },
  '机油冷却器芯': {
  },
  '机油压力传感器': {
  },
  '机油泵': {
  },
  '机油滤清器': {
  },
  '止推片': {
  },
  '水泵密封圈': {
  },
  '水泵总成': {
  },
  '汽缸垫': {
  },
  '油底壳垫片': {
  },
  '熄火电磁阀': {
  },
  '燃油泵垫片': {
  },
  '燃油溢流阀': {
  },
  '燃油管': {
  },
  '皮带张紧器': {
  },
  '缸盖螺栓': {
  },
  '进气垫片': {
  },
  '进气管垫片': {
  },
  '进气门': {
  },
  '连杆总成': {
  },
  '风扇皮带': {
  },
  '高压油管': {
  },
};

export function getTranslatedCumminsSparePartName(name: string, language: string = 'zh'): string {
  const translations = cumminsNameTranslations[name as keyof typeof cumminsNameTranslations];
  return translations?.[language as keyof typeof translations] || name;
}

export const cumminsDescriptionTranslations: Record<string, Record<string, string>> = {
  'Cummins part. Replace every 500-1000 hours or based on fluid analysis results.': {
    en: 'Cummins part. Replace every 500-1000 hours or based on fluid analysis results.',
    zh: '康明斯零件。500-1000小时或视油液检测结果更换',
    ar: 'Cummins part. Replace every 500-1000 hours or based on fluid analysis results.',
    it: 'Cummins part. Replace every 500-1000 hours or based on fluid analysis results.',
    es: 'Pieza Cummins. Reemplazar cada 500-1000 horas o según los resultados del análisis de fluidos.',
    fr: 'Pièce Cummins. Remplacer tous les 500-1000 heures ou selon les résultats de l\'analyse des fluides.',
    de: 'Cummins-Teil. Alle 500-1000 Stunden oder nach Fluidanalyse ersetzen.',
    pt: 'Peça Cummins. Substituir a cada 500-1000 horas ou com base nos resultados da análise de fluidos.',
    ru: 'Деталь Cummins. Заменяйте каждые 500-1000 часов или на основе результатов анализа жидкости.',
    ja: 'Cummins部品。500～1000時間ごと、または流体分析結果に基づいて交換してください。',
  },
};

export function getTranslatedCumminsSparePartDescription(description: string, language: string = 'zh'): string {
  const translations = cumminsDescriptionTranslations[description];
  if (translations && translations[language]) {
    return translations[language];
  }
  return description;
}
export const cumminsCategoryTranslations: Record<string, Record<string, string>> = {
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

export function getTranslatedCumminsSparePartCategory(category: string, language: string = 'zh'): string {
  const translations = cumminsCategoryTranslations[category];
  return translations?.[language as keyof typeof translations] || category;
}


