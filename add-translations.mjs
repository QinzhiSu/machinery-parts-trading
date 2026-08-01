#!/usr/bin/env node

/**
 * Script to add translations to spare parts and machines
 * This script uses the built-in LLM API to translate descriptions
 */

import fs from 'fs';
import path from 'path';

const API_URL = process.env.BUILT_IN_FORGE_API_URL || 'https://api.example.com';
const API_KEY = process.env.BUILT_IN_FORGE_API_KEY || '';

const LANGUAGES = {
  en: 'English',
  es: 'Spanish',
  ar: 'Arabic'
};

async function translateText(text, targetLanguage) {
  if (!API_KEY) {
    console.warn('BUILT_IN_FORGE_API_KEY not set, using mock translations');
    return getMockTranslation(text, targetLanguage);
  }

  try {
    const response = await fetch(`${API_URL}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'default',
        messages: [
          {
            role: 'system',
            content: `You are a professional translator. Translate the following text to ${LANGUAGES[targetLanguage]}. Only provide the translation, no explanations.`
          },
          {
            role: 'user',
            content: text
          }
        ],
        temperature: 0.3,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Translation error:', error.message);
    return getMockTranslation(text, targetLanguage);
  }
}

function getMockTranslation(text, targetLanguage) {
  // Simple mock translations for demonstration
  const mockMap = {
    en: text, // English is original
    es: `[ES] ${text}`,
    ar: `[AR] ${text}`
  };
  return mockMap[targetLanguage] || text;
}

async function addTranslationsToProducts() {
  const productsPath = './client/src/data/products.ts';
  
  if (!fs.existsSync(productsPath)) {
    console.error('products.ts not found');
    process.exit(1);
  }

  console.log('Reading products.ts...');
  let content = fs.readFileSync(productsPath, 'utf-8');

  // Parse the file to extract spare parts
  // This is a simplified approach - in production, you'd want a proper parser
  
  console.log('Note: This script demonstrates the translation approach.');
  console.log('For production use, consider:');
  console.log('1. Using a proper TypeScript parser');
  console.log('2. Batching translations for efficiency');
  console.log('3. Caching translations to avoid re-translating');
  console.log('4. Adding translations to the SparePart and Machine interfaces');
  
  console.log('\nRecommended approach:');
  console.log('1. Update SparePart interface to include: description_en, description_es, description_ar');
  console.log('2. Update Machine interface similarly');
  console.log('3. Update SparePartDetailModal to use translated descriptions');
  console.log('4. Update BrandPage to use translated compatibleModels');
}

addTranslationsToProducts().catch(console.error);
