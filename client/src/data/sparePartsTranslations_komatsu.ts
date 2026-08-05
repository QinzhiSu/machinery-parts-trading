// Auto-generated translations for Komatsu spare parts
// DO NOT EDIT MANUALLY

export const komatsuNameTranslations = {
  'Air Filter(内芯)': {
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
  'Air Filter(外芯)': {
  },
  'Diesel Filter': {
  },
  'Diesel Filter(新款7/8系)': {
  },
  'Diesel Filter(通用型)': {
  },
  'Hydraulic Oil Filter': {
  },
  'Maintenance/Filtration System': {
  },
  'Oil Filter': {
  },
  'Oil Filter(6D102发动机)': {
  },
  '上托轮(Carrier Roller,PC400-7参考)': {
  },
  '下托链轮(Track Roller,PC300-7参考)': {
  },
  '主液压泵(型号2)': {
  },
  '主液压泵总成': {
  },
  '先导液压滤芯': {
  },
  '回转(转台)马达总成': {
  },
  '安全阀(溢流阀)': {
  },
  '履带板总成': {
  },
  '底盘/履带系统': {
  },
  '挖掘属性/GET': {
  },
  '斗齿锁定销': {
  },
  '液压系统': {
  },
  '点火钥匙开关(老款)': {
  },
  '点火钥匙开关总成': {
  },
  '电气系统': {
  },
  '铲斗斗齿(K25系列)': {
  },
  '驱动链轮(7/8系)': {
  },
  '驱动链轮(旧款)': {
  },
  '柴油滤芯': {
  },
  '空气滤芯(外芯)': {
  },
  '空气滤芯(内芯)': {
  },
  '柴油滤芯(新款7/8系)': {
  },
  '柴油滤芯(通用型)': {
  },
  '机油滤芯(6D102发动机)': {
  },
};

export function getTranslatedKomatsuSparePartName(name: string, language: string = 'zh'): string {
  const translations = komatsuNameTranslations[name as keyof typeof komatsuNameTranslations];
  return translations?.[language as keyof typeof translations] || name;
}

export const komatsuDescriptionTranslations: Record<string, Record<string, string>> = {
  'Komatsu part. Replace every 500-1000 hours or based on fluid analysis results.': {
    en: 'Komatsu part. Replace every 500-1000 hours or based on fluid analysis results.',
    zh: '小松零件。500-1000小时或视油液检测结果更换',
    ar: 'Komatsu part. Replace every 500-1000 hours or based on fluid analysis results.',
    it: 'Komatsu part. Replace every 500-1000 hours or based on fluid analysis results.',
    es: 'Pieza Komatsu. Reemplazar cada 500-1000 horas o según los resultados del análisis de fluidos.',
    fr: 'Pièce Komatsu. Remplacer tous les 500-1000 heures ou selon les résultats de l\'analyse des fluides.',
    de: 'Komatsu-Teil. Alle 500-1000 Stunden oder nach Fluidanalyse ersetzen.',
    pt: 'Peça Komatsu. Substituir a cada 500-1000 horas ou com base nos resultados da análise de fluidos.',
    ru: 'Деталь Komatsu. Заменяйте каждые 500-1000 часов или на основе результатов анализа жидкости.',
    ja: 'Komatsu部品。500～1000時間ごと、または流体分析結果に基づいて交換してください。',
  },
  'KOMATSU 零件。250-500小时随保养更换': {
  },
  'KOMATSU 零件。250-500小时或视油品': {
  },
  'KOMATSU 零件。250-500小时或视灰尘环境': {
  },
  'KOMATSU 零件。随外芯周期同步更换': {
  },
  'KOMATSU 零件。500-1000小时或视油液检测': {
  },
  'KOMATSU 零件。500-1000小时': {
  },
  'KOMATSU 零件。250-500小时': {
  },
  'KOMATSU 零件。轮齿磨损/断齿时更换(大修类高价件)': {
  },
  'KOMATSU 零件。磨损/断裂时更换(大修类高价件)': {
  },
  'KOMATSU 零件。漏油/磨损时更换': {
  },
  'KOMATSU 零件。磨损见底或断裂时更换,高频更换件': {
  },
  'KOMATSU 零件。随斗齿更换时同步更换': {
  },
  'KOMATSU 零件。异响/供油不足/压力下降时更换(大修类高价件)': {
  },
  'KOMATSU 零件。异响/供油不足时更换(大修类)': {
  },
  'KOMATSU 零件。转台异响/回转无力时更换(大修类高价件)': {
  },
  'KOMATSU 零件。液压异常/压力不稳时更换': {
  },
  'KOMATSU 零件。钥匙磨损/开关失效时更换': {
  },
};

export function getTranslatedKomatsuSparePartDescription(description: string, language: string = 'zh'): string {
  const translations = komatsuDescriptionTranslations[description];
  if (translations && translations[language]) {
    return translations[language];
  }
  return description;
}
export const komatsuCategoryTranslations: Record<string, Record<string, string>> = {
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

export function getTranslatedKomatsuSparePartCategory(category: string, language: string = 'zh'): string {
  const translations = komatsuCategoryTranslations[category];
  return translations?.[language as keyof typeof translations] || category;
}


