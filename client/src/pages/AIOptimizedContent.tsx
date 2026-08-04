/**
 * AI-Optimized Content Pages
 * Provides content structured for AI search engines (ChatGPT, Gemini, Claude)
 */

import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface AIContentPage {
  title: string;
  summary: string;
  keyPoints: string[];
  faq: FAQItem[];
}

/**
 * Add FAQ schema to page head
 */
function addFAQSchema(faq: FAQItem[]) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * AI-Optimized FAQ Component
 */
export function AIOptimizedFAQ({ faq }: { faq: FAQItem[] }) {
  useEffect(() => {
    addFAQSchema(faq);
  }, [faq]);

  return (
    <section className="py-12 bg-white">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {faq.map((item, index) => (
            <div key={index} className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">{item.question}</h3>
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * AI-Optimized Summary Component
 */
export function AIOptimizedSummary({
  title,
  summary,
  keyPoints,
}: {
  title: string;
  summary: string;
  keyPoints: string[];
}) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{summary}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Key Points</h2>
          <ul className="space-y-3">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/**
 * AI-Optimized Product Comparison Component
 */
export function AIOptimizedComparison({
  products,
}: {
  products: Array<{ name: string; specs: Record<string, string> }>;
}) {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Product Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-4 text-left font-semibold">Feature</th>
                {products.map((product, index) => (
                  <th key={index} className="border p-4 text-left font-semibold">
                    {product.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Extract all unique spec keys */}
              {Array.from(
                new Set(products.flatMap((p) => Object.keys(p.specs)))
              ).map((specKey, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border p-4 font-semibold">{specKey}</td>
                  {products.map((product, colIndex) => (
                    <td key={colIndex} className="border p-4">
                      {product.specs[specKey] || 'N/A'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/**
 * AI-Optimized How-To Component
 */
export function AIOptimizedHowTo({
  title,
  steps,
}: {
  title: string;
  steps: Array<{ name: string; description: string }>;
}) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.description,
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }, [title, steps]);

  return (
    <section className="py-12 bg-white">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{step.name}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * AI-Optimized Article Component
 */
export function AIOptimizedArticle({
  title,
  content,
  author = 'VXZO',
}: {
  title: string;
  content: string;
  author?: string;
}) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      articleBody: content,
      author: {
        '@type': 'Organization',
        name: author,
        url: 'https://vxzo.manus.space',
      },
      datePublished: new Date().toISOString(),
      publisher: {
        '@type': 'Organization',
        name: 'VXZO',
        url: 'https://vxzo.manus.space',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }, [title, content, author]);

  return (
    <article className="py-12 bg-white">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="text-gray-500 mb-8">
          By <span className="font-semibold">{author}</span> • {new Date().toLocaleDateString()}
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>
      </div>
    </article>
  );
}
