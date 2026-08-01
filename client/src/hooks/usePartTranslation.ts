import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Simple translation map for common spare part descriptions
const partDescriptionTranslations: Record<string, Record<string, string>> = {
  'CAT 零件。250-500小时随保养更换': {
    en: 'CAT part. Replace every 250-500 hours during maintenance.',
    es: 'Pieza CAT. Reemplazar cada 250-500 horas durante el mantenimiento.',
    ar: 'قطعة CAT. استبدل كل 250-500 ساعة أثناء الصيانة.'
  },
  'CAT 零件。250-500小时或视油品': {
    en: 'CAT part. Replace every 250-500 hours or as needed based on fuel quality.',
    es: 'Pieza CAT. Reemplazar cada 250-500 horas o según sea necesario según la calidad del combustible.',
    ar: 'قطعة CAT. استبدل كل 250-500 ساعة أو حسب الحاجة بناءً على جودة الوقود.'
  },
  'CAT 零件。500-1000小时或视油液检测结果': {
    en: 'CAT part. Replace every 500-1000 hours or based on fluid analysis results.',
    es: 'Pieza CAT. Reemplazar cada 500-1000 horas o según los resultados del análisis de fluidos.',
    ar: 'قطعة CAT. استبدل كل 500-1000 ساعة أو بناءً على نتائج تحليل السوائل.'
  },
  'CAT 零件。500-1000小时': {
    en: 'CAT part. Replace every 500-1000 hours.',
    es: 'Pieza CAT. Reemplazar cada 500-1000 horas.',
    ar: 'قطعة CAT. استبدل كل 500-1000 ساعة.'
  },
  'CAT 零件。过热/渗漏时更换': {
    en: 'CAT part. Replace if overheating or leaking.',
    es: 'Pieza CAT. Reemplazar si se sobrecalienta o tiene fugas.',
    ar: 'قطعة CAT. استبدل إذا كان هناك ارتفاع في درجة الحرارة أو تسرب.'
  },
  'CAT 零件。动力下降/异响/漏油时更换(大修类)': {
    en: 'CAT part. Replace when power drops, abnormal noise, or oil leaks occur (major repair).',
    es: 'Pieza CAT. Reemplazar cuando haya pérdida de potencia, ruido anormal o fugas de aceite (reparación mayor).',
    ar: 'قطعة CAT. استبدل عند انخفاض الطاقة أو الضوضاء غير الطبيعية أو تسرب الزيت (إصلاح رئيسي).'
  },
  'CAT 零件。履带松旷/磨损超限时更换(大修类高价件)': {
    en: 'CAT part. Replace when track is loose or wear exceeds limit (major repair, high-cost part).',
    es: 'Pieza CAT. Reemplazar cuando la pista esté suelta o el desgaste exceda el límite (reparación mayor, pieza de alto costo).',
    ar: 'قطعة CAT. استبدل عند فقدان الجنزير أو تجاوز البلى الحد (إصلاح رئيسي، قطعة عالية التكلفة).'
  },
  'CAT 零件。漏油/磨损时更换': {
    en: 'CAT part. Replace if leaking or worn.',
    es: 'Pieza CAT. Reemplazar si tiene fugas o está desgastada.',
    ar: 'قطعة CAT. استبدل إذا كان هناك تسرب أو بلى.'
  },
  'CAT 零件。磨损/异响时更换': {
    en: 'CAT part. Replace if worn or making abnormal noise.',
    es: 'Pieza CAT. Reemplazar si está desgastada o hace ruido anormal.',
    ar: 'قطعة CAT. استبدل إذا كان هناك بلى أو ضوضاء غير طبيعية.'
  },
  'CAT 零件。轮齿磨损/断齿时更换': {
    en: 'CAT part. Replace when gear teeth are worn or broken.',
    es: 'Pieza CAT. Reemplazar cuando los dientes del engranaje estén desgastados o rotos.',
    ar: 'قطعة CAT. استبدل عند بلى أسنان التروس أو كسرها.'
  },
  'CAT 零件。磨损见底或断裂时更换,高频更换件': {
    en: 'CAT part. Replace when worn to limit or cracked (high-frequency replacement part).',
    es: 'Pieza CAT. Reemplazar cuando esté desgastado al límite o agrietado (pieza de reemplazo de alta frecuencia).',
    ar: 'قطعة CAT. استبدل عند البلى الكامل أو التشقق (قطعة استبدال عالية التكرار).'
  },
  'CAT 零件。随斗齿更换,寿命长于斗齿本身': {
    en: 'CAT part. Replace with bucket teeth, longer lifespan than teeth themselves.',
    es: 'Pieza CAT. Reemplazar con dientes del cucharón, vida útil más larga que los dientes mismos.',
    ar: 'قطعة CAT. استبدل مع أسنان الجرافة، عمر أطول من الأسنان نفسها.'
  },
  'CAT 零件。每次换齿时同步更换': {
    en: 'CAT part. Replace synchronously every time teeth are replaced.',
    es: 'Pieza CAT. Reemplazar sincrónicamente cada vez que se reemplacen los dientes.',
    ar: 'قطعة CAT. استبدل بشكل متزامن في كل مرة يتم استبدال الأسنان.'
  },
  'CAT 零件。异响/漏油/爬升无力时更换(大修类高价件)': {
    en: 'CAT part. Replace when abnormal noise, oil leaks, or climbing difficulty occurs (major repair, high-cost part).',
    es: 'Pieza CAT. Reemplazar cuando haya ruido anormal, fugas de aceite o dificultad para subir (reparación mayor, pieza de alto costo).',
    ar: 'قطعة CAT. استبدل عند الضوضاء غير الطبيعية أو تسرب الزيت أو صعوبة الصعود (إصلاح رئيسي، قطعة عالية التكلفة).'
  },
  'CAT 零件。异响/爬坡无力时更换(大修类)': {
    en: 'CAT part. Replace when abnormal noise or climbing difficulty occurs (major repair).',
    es: 'Pieza CAT. Reemplazar cuando haya ruido anormal o dificultad para subir (reparación mayor).',
    ar: 'قطعة CAT. استبدل عند الضوضاء غير الطبيعية أو صعوبة الصعود (إصلاح رئيسي).'
  },
  'CAT 零件。转台异响/回转无力时更换(大修类)': {
    en: 'CAT part. Replace when turntable makes noise or rotation is weak (major repair).',
    es: 'Pieza CAT. Reemplazar cuando la torreta hace ruido o la rotación es débil (reparación mayor).',
    ar: 'قطعة CAT. استبدل عند إصدار الدوران ضوضاء أو ضعف الدوران (إصلاح رئيسي).'
  },
  'CAT 零件。随斗齿磨损检查,寿命长于斗齿本身': {
    en: 'CAT part. Check with bucket teeth wear, longer lifespan than teeth themselves.',
    es: 'Pieza CAT. Verificar con desgaste de dientes del cucharón, vida útil más larga que los dientes mismos.',
    ar: 'قطعة CAT. تحقق من بلى أسنان الجرافة، عمر أطول من الأسنان نفسها.'
  },
  'CAT 零件。随斗齿磨损,推土机松土齿高频更换件': {
    en: 'CAT part. Replace with bucket teeth wear, high-frequency replacement for bulldozer ripping teeth.',
    es: 'Pieza CAT. Reemplazar con desgaste de dientes del cucharón, reemplazo de alta frecuencia para dientes de desgarrador de topadora.',
    ar: 'قطعة CAT. استبدل مع بلى أسنان الجرافة، استبدال عالي التكرار لأسنان الشق في الجرافة.'
  },
  'CAT 零件。漏油/密封老化时更换': {
    en: 'CAT part. Replace if leaking or seals are aged.',
    es: 'Pieza CAT. Reemplazar si tiene fugas o los sellos están envejecidos.',
    ar: 'قطعة CAT. استبدل إذا كان هناك تسرب أو تقادم الأختام.'
  },
  'CAT 零件。异响/间隙过大时更换,高频保养更换件': {
    en: 'CAT part. Replace if abnormal noise or excessive clearance (high-frequency maintenance part).',
    es: 'Pieza CAT. Reemplazar si hay ruido anormal o holgura excesiva (pieza de mantenimiento de alta frecuencia).',
    ar: 'قطعة CAT. استبدل إذا كان هناك ضوضاء غير طبيعية أو فجوة مفرطة (قطعة صيانة عالية التكرار).'
  },
  'CAT 零件。异响/间隙过大时更换': {
    en: 'CAT part. Replace if abnormal noise or excessive clearance.',
    es: 'Pieza CAT. Reemplazar si hay ruido anormal o holgura excesiva.',
    ar: 'قطعة CAT. استبدل إذا كان هناك ضوضاء غير طبيعية أو فجوة مفرطة.'
  }
};

export function usePartTranslation() {
  const { language } = useLanguage();

  const translateDescription = (description: string): string => {
    if (language === 'zh') return description;
    
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

  return {
    translateDescription,
    translateCompatibleModels
  };
}
