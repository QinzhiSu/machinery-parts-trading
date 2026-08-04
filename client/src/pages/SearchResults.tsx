import { useEffect, useState, useMemo } from 'react';
import { trpc } from '@/lib/trpc';
import { Link, useSearch } from 'wouter';
import { ChevronLeft } from 'lucide-react';
import SparePartDetailModal from '@/components/SparePartDetailModal';
import CategoryFilter from '@/components/CategoryFilter';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslatedSparePartName } from '@/data/sparePartsTranslations';

export default function SearchResults() {
  const { t, language } = useLanguage();
  const search = useSearch();
  const params = new URLSearchParams(search);
  const query = params.get('q') || '';
  const [selectedPart, setSelectedPart] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const searchQuery = trpc.search.searchParts.useQuery(
    { query, limit: 50 },
    { enabled: query.length > 0 }
  );

  const filteredResults = useMemo(() => {
    if (!searchQuery.data) return [];
    if (selectedCategories.length === 0) return searchQuery.data.results;
    return searchQuery.data.results.filter((part) => selectedCategories.includes(part.category));
  }, [searchQuery.data, selectedCategories]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-background py-8 border-b">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ChevronLeft size={16} />
            {t('common.backHome')}
          </Link>
          <h1 className="text-3xl font-bold mb-2">搜索结果</h1>
          <p className="text-muted-foreground">
            {query ? `搜索结果: "${query}"` : '输入搜索词'}
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 container py-8">
        {searchQuery.isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-muted-foreground">搜索中...</div>
          </div>
        ) : searchQuery.data && searchQuery.data.results.length > 0 ? (
          <div>
            <p className="text-sm text-muted-foreground mb-6">
              找到 {searchQuery.data.results.length} 个结果
            </p>

            <CategoryFilter
              parts={searchQuery.data.results}
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
              isExpanded={true}
            />

            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResults.map((part) => (
                  <div
                    key={part.id}
                    className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedPart(part)}
                  >
                    <img
                      src={part.image}
                      alt={getTranslatedSparePartName(part.name, language)}
                      className="w-full h-48 object-cover bg-muted"
                    />
                    <div className="p-4">
                      <div className="text-xs font-semibold text-orange-600 mb-1">
                        {part.brandName}
                      </div>
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                        {part.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3">
                        Part #: {part.partNumber}
                      </p>
                      <button
                        className="w-full px-3 py-2 bg-orange-600 text-white text-sm font-semibold rounded hover:bg-orange-700 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPart(part);
                          setIsModalOpen(true);
                        }}
                      >
                        查看详情
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    所选分类中没有找到配件
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : query ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                没有找到匹配的配件
              </p>
              <Link href="/" className="text-orange-600 hover:text-orange-700 font-semibold">
                {t('common.backHome')}
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center py-12">
            <div className="text-muted-foreground">
              Use the search box to find parts
            </div>
          </div>
        )}
      </div>

      {/* Detail modal */}
      {selectedPart && (
        <SparePartDetailModal
          part={selectedPart}
          isOpen={true}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPart(null);
          }}
          onInquiry={() => {
            // Handle inquiry
            setIsModalOpen(false);
          }}
          brandName={selectedPart.brandName}
          brandColor="#E53935"
        />
      )}
    </div>
  );
}
