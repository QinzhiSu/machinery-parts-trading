import { invokeLLM } from './_core/llm';
import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'client/src/data');

// 定义 10 种语言
const LANGUAGES = ['en', 'zh', 'es', 'fr', 'de', 'pt', 'ru', 'ja', 'ar', 'it'];

// 语言名称映射
const LANGUAGE_NAMES: Record<string, string> = {
  'en': 'English',
  'zh': 'Chinese',
  'es': 'Spanish',
  'fr': 'French',
  'de': 'German',
  'pt': 'Portuguese',
  'ru': 'Russian',
  'ja': 'Japanese',
  'ar': 'Arabic',
  'it': 'Italian',
};

// 基础描述
const baseDescriptions: Record<string, string> = {
  'Hydraulic Return Oil Filter': 'High-quality hydraulic return oil filter for construction machinery. Removes contaminants and extends hydraulic system life. Compatible with all major brands.',
  'Oil Filter': 'Premium engine oil filter for heavy machinery. Ensures clean oil circulation and optimal engine performance. Long service life and high filtration efficiency.',
  'Air Filter': 'Heavy-duty air filter for construction equipment. Protects engine from dust and contaminants. Easy installation and maintenance.',
  'Fuel Filter': 'Reliable fuel filter for diesel engines. Removes water and impurities from fuel. Improves fuel system efficiency and engine longevity.',
};

async function translateDescription(descriptionEn: string): Promise<Record<string, string>> {
  const translations: Record<string, string> = {
    en: descriptionEn,
  };

  // 为其他 9 种语言生成翻译
  const languagesToTranslate = ['zh', 'es', 'fr', 'de', 'pt', 'ru', 'ja', 'ar', 'it'];
  
  for (const lang of languagesToTranslate) {
    try {
      const response = await invokeLLM({
        messages: [
          {
            role: 'system',
            content: `You are a professional translator. Translate the following English text to ${LANGUAGE_NAMES[lang]}. Only provide the translation, nothing else.`,
          },
          {
            role: 'user',
            content: descriptionEn,
          },
        ],
      });

      if (response.choices && response.choices[0] && response.choices[0].message) {
        translations[lang] = response.choices[0].message.content as string;
      } else {
        translations[lang] = descriptionEn; // 如果翻译失败，使用英文
      }
    } catch (error) {
      console.error(`Error translating to ${lang}:`, error);
      translations[lang] = descriptionEn;
    }
  }

  return translations;
}

async function main() {
  console.log('Starting translation generation...');
  
  // 读取所有零件翻译文件
  const files = fs.readdirSync(dataDir)
    .filter(f => f.startsWith('sparePartsTranslations_') && f.endsWith('.ts'))
    .sort();

  console.log(`Found ${files.length} spare parts translation files`);

  // 为每个品牌生成描述翻译文件
  for (const file of files) {
    const brandName = file.replace('sparePartsTranslations_', '').replace('.ts', '');
    console.log(`\nProcessing ${brandName}...`);

    const filePath = path.join(dataDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // 提取所有零件名称
    const partMatches = content.match(/'([^']+)':\s*\{/g);
    if (!partMatches) {
      console.log(`  No parts found in ${file}`);
      continue;
    }

    const partNames = partMatches.map(m => m.replace(/'([^']+)':\s*\{/, '$1'));
    console.log(`  Found ${partNames.length} parts`);

    // 为每个零件生成翻译
    const descriptionLines: string[] = [];
    descriptionLines.push(`// Spare parts descriptions for ${brandName.charAt(0).toUpperCase() + brandName.slice(1)} - 10 languages`);
    descriptionLines.push('// DO NOT EDIT MANUALLY');
    descriptionLines.push('// Auto-generated from LLM translations');
    descriptionLines.push('');
    descriptionLines.push(`export const ${brandName}PartDescriptions: Record<string, Record<string, string>> = {`);

    for (const partName of partNames) {
      const descEn = baseDescriptions[partName] || 
        `High-quality ${partName.toLowerCase()} for construction machinery. Reliable performance and long service life.`;

      // 生成翻译
      const translations = await translateDescription(descEn);

      descriptionLines.push(`  '${partName}': {`);
      for (const lang of LANGUAGES) {
        const translation = translations[lang] || descEn;
        const escaped = translation.replace(/'/g, "\\'");
        descriptionLines.push(`    ${lang}: '${escaped}',`);
      }
      descriptionLines.push('  },');
    }

    descriptionLines.push('};');

    // 写入文件
    const descFilePath = path.join(dataDir, `sparePartsDescriptions_${brandName}.ts`);
    fs.writeFileSync(descFilePath, descriptionLines.join('\n'), 'utf-8');
    console.log(`  ✓ Created ${path.basename(descFilePath)}`);
  }

  console.log('\n✓ All spare parts description files created!');
}

main().catch(console.error);
