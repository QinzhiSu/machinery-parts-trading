// Auto-generated translations for Sany spare parts
// DO NOT EDIT MANUALLY

export const sanyNameTranslations = {
  'Generator Assembly': {
    en: 'Generator Assembly',
    es: 'Generator Assembly',
    fr: 'Generator Assembly',
    de: 'Generator Assembly',
    pt: 'Generator Assembly',
    ru: 'Generator Assembly',
    ja: 'Generator Assembly',
    zh: 'Generator Assembly',
    ar: 'مجموعة المولد',
    it: 'Gruppo generatore',
  },
  'Maintenance/Filtration System': {
  },
  'Oil Filter': {
  },
  'Oil Filter(SY215C/225C系列)': {
  },
  'Starter Motor Assembly': {
  },
  'Turbocharger': {
  },
  '上托轮(Top Roller/Carrier Roller)': {
  },
  '下托链轮(Bottom Roller)': {
  },
  '主液压泵(Rexroth型)': {
  },
  '前导向轮': {
  },
  '发动机系统': {
  },
  '回转(转台)马达及减速机': {
  },
  '履带板/track shoe': {
  },
  '履带链条总成': {
  },
  '底盘/履带系统': {
  },
  '挖掘属性/GET': {
  },
  '液压系统': {
  },
  '液压缸/密封件': {
  },
  '燃油滤芯': {
  },
  '燃油滤芯(SY215C/225C新款)': {
  },
  '燃油滤芯(新款9系)': {
  },
  '燃油滤芯(替代号)': {
  },
  '燃油滤芯(老款)': {
  },
  '行走(履带)马达/最终驱动总成': {
  },
  '铲斗斗齿': {
  },
  '铲斗油缸密封修理包': {
  },
  '驱动链轮': {
  },
  '机油滤芯(SY215C/225C系列)': {
  },
};

export function getTranslatedSanySparePartName(name: string, language: string = 'zh'): string {
  const translations = sanyNameTranslations[name as keyof typeof sanyNameTranslations];
  return translations?.[language as keyof typeof translations] || name;
}

export const sanyDescriptionTranslations: Record<string, Record<string, string>> = {
  'SANY part. Replace every 500-1000 hours or based on fluid analysis results.': {
    en: 'SANY part. Replace every 500-1000 hours or based on fluid analysis results.',
    zh: '三一零件。500-1000小时或视油液检测结果更换',
    ar: 'SANY part. Replace every 500-1000 hours or based on fluid analysis results.',
    it: 'SANY part. Replace every 500-1000 hours or based on fluid analysis results.',
    es: 'Pieza SANY. Reemplazar cada 500-1000 horas o según los resultados del análisis de fluidos.',
    fr: 'Pièce SANY. Remplacer tous les 500-1000 heures ou selon les résultats de l\'analyse des fluides.',
    de: 'SANY-Teil. Alle 500-1000 Stunden oder nach Fluidanalyse ersetzen.',
    pt: 'Peça SANY. Substituir a cada 500-1000 horas ou com base nos resultados da análise de fluidos.',
    ru: 'Деталь SANY. Заменяйте каждые 500-1000 часов или на основе результатов анализа жидкости.',
    ja: 'SANY部品。500～1000時間ごと、または流体分析結果に基づいて交換してください。',
  },
  'SANY 零件。250-500小时随保养更换': {
  },
  'SANY 零件。250-500小时': {
  },
  'SANY 零件。磨损/断裂时更换': {
  },
  'SANY 零件。异响/供油不足/压力下降时更换(大修类高价件)': {
  },
  'SANY 零件。转台异响/回转无力时更换(大修类)': {
  },
  'SANY 零件。动力下降/异响/漏油时更换(大修类)': {
  },
};

export function getTranslatedSanySparePartDescription(description: string, language: string = 'zh'): string {
  const translations = sanyDescriptionTranslations[description];
  if (translations && translations[language]) {
    return translations[language];
  }
  return description;
}
export const sanyCategoryTranslations: Record<string, Record<string, string>> = {
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

export function getTranslatedSANYSparePartCategory(category: string, language: string = 'zh'): string {
  const translations = sanyCategoryTranslations[category];
  return translations?.[language as keyof typeof translations] || category;
}


