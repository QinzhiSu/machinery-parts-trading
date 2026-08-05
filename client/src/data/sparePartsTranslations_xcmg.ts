// Auto-generated translations for XCMG spare parts
// DO NOT EDIT MANUALLY

export const xcmgNameTranslations = {
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
  'Air Filter(ZL50)': {
  },
  'Air Filter套装(内外芯)': {
  },
  'Braking System': {
  },
  'Hydraulic Oil Filter': {
  },
  'Hydraulic Oil Filter(变体)': {
  },
  'Hydraulic Oil Filter(型号2)': {
  },
  'Hydraulic Return Oil Filter': {
  },
  'Maintenance/Filtration System': {
  },
  'Oil Filter': {
  },
  'Oil Filter(带锁止阀)': {
  },
  '万向节联轴器': {
  },
  '传动/变速系统': {
  },
  '制动盘(刹车盘)': {
  },
  '刹车片(SOMA制动衬片)': {
  },
  '变速箱倒挡活塞': {
  },
  '变速箱总成(带变矩器)': {
  },
  '变速箱控制阀(变速阀)': {
  },
  '右侧斗齿': {
  },
  '唇形油封': {
  },
  '密封/传动件': {
  },
  '工作液压泵': {
  },
  '左侧斗齿': {
  },
  '手刹阀': {
  },
  '手刹鼓(制动鼓)': {
  },
  '挖掘属性/GET': {
  },
  '斗齿座(Tooth Holder)': {
  },
  '水温传感器': {
  },
  '液压系统': {
  },
  '溢流阀(继动阀)': {
  },
  '电气/传感器': {
  },
  '铲斗斗齿': {
  },
  '驱动桥半轴齿轮(差速器齿轮)': {
  },
  'Air Filter Assembly (Inner and Outer)': {
  },
  'Hydraulic Oil Filter (Variant)': {
  },
  'Air Filter (ZL50)': {
  },
  'Oil Filter (with Lock Valve)': {
  },
  'Hydraulic Oil Filter (Model 2)': {
  },
  'Water Temperature Sensor': {
  },
  'Bucket Teeth': {
  },
  'Right Bucket Tooth': {
  },
  'Left Bucket Tooth': {
  },
  'Bucket Tooth Seat': {
  },
  'Transmission Assembly': {
  },
  'Transmission Control Valve': {
  },
  'Transmission Reverse Piston': {
  },
  'Drive Axle Differential Gear': {
  },
  'Working Hydraulic Pump': {
  },
  'Brake Pads': {
  },
  'Brake Disc': {
  },
  'Parking Brake Valve': {
  },
  'Brake Drum': {
  },
  'Lip Seal Ring': {
  },
  'Universal Joint Coupling': {
  },
  'Relief Valve': {
  },
};

export function getTranslatedXcmgSparePartName(name: string, language: string = 'zh'): string {
  const translations = xcmgNameTranslations[name as keyof typeof xcmgNameTranslations];
  return translations?.[language as keyof typeof translations] || name;
}

export const xcmgDescriptionTranslations: Record<string, Record<string, string>> = {
  'XCMG part. Replace every 500-1000 hours or based on fluid analysis results.': {
    en: 'XCMG part. Replace every 500-1000 hours or based on fluid analysis results.',
    zh: '徐工零件。500-1000小时或视油液检测结果更换',
    es: 'Pieza XCMG. Reemplazar cada 500-1000 horas o según los resultados del análisis de fluidos.',
    fr: 'Pièce XCMG. Remplacer tous les 500-1000 heures ou selon les résultats de l\'analyse des fluides.',
    de: 'XCMG-Teil. Alle 500-1000 Stunden oder nach Fluidanalyse ersetzen.',
    pt: 'Peça XCMG. Substituir a cada 500-1000 horas ou com base nos resultados da análise de fluidos.',
    ru: 'Деталь XCMG. Заменяйте каждые 500-1000 часов или на основе результатов анализа жидкости.',
    ja: 'XCMG部品。500～1000時間ごと、または流体分析結果に基づいて交換してください。',
  },
  'XCMG part. Replace every 250-500 hours or based on dust environment.': {
  },
  'XCMG part. Replace every 500-1000 hours.': {
  },
  'XCMG part. Replace every 250-500 hours or based on fuel quality.': {
  },
  'XCMG part. Inspect every 500-1000 hours.': {
  },
  'XCMG part. Replace synchronously every time teeth are replaced.': {
  },
  'XCMG part. Replace when worn to bottom or broken.': {
  },
  'XCMG part. Replace when abnormal shifting occurs.': {
  },
  'XCMG part. Replace when shifting is difficult/slipping occurs.': {
  },
  'XCMG part. Replace during major repair or when abnormal noise occurs (major repair).': {
  },
  'XCMG part. Replace when abnormal noise, insufficient oil supply, or pressure drop (major repair, high-cost).': {
  },
  'XCMG part. Replace every 30,000-50,000 km or based on wear.': {
  },
};

export function getTranslatedXcmgSparePartDescription(description: string, language: string = 'zh'): string {
  const translations = xcmgDescriptionTranslations[description];
  if (translations && translations[language]) {
    return translations[language];
  }
  return description;
}
export const xcmgCategoryTranslations: Record<string, Record<string, string>> = {
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

export function getTranslatedXCMGSparePartCategory(category: string, language: string = 'zh'): string {
  const translations = xcmgCategoryTranslations[category];
  return translations?.[language as keyof typeof translations] || category;
}


