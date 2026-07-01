import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { useLocation } from 'wouter';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchResult {
  id: string;
  partNumber: string;
  name: string;
  image: string;
  brandId: string;
  brandName: string;
}

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [, navigate] = useLocation();

  const searchQuery = trpc.search.searchParts.useQuery(
    { query, limit: 20 },
    { enabled: query.length > 0 }
  );

  const suggestionsQuery = trpc.search.getSuggestions.useQuery(
    { query, limit: 5 },
    { enabled: query.length > 0 }
  );

  // Update results when search query changes
  useEffect(() => {
    if (searchQuery.data) {
      setResults(searchQuery.data.results);
    }
  }, [searchQuery.data]);

  // Update suggestions when suggestions query changes
  useEffect(() => {
    if (suggestionsQuery.data) {
      setSuggestions(suggestionsQuery.data.suggestions);
      setShowSuggestions(true);
    }
  }, [suggestionsQuery.data]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to search results page
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    // Navigate to the brand page and scroll to the specific part
    navigate(`/brand/${result.brandId}?partId=${result.id}`);
    setIsOpen(false);
    setQuery('');
  };

  const handleSuggestionClick = (suggestion: any) => {
    setQuery(suggestion.value);
    setShowSuggestions(false);
  };

  // Keyboard shortcut: Ctrl+K or Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Search button in navbar */}
      <button
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => searchInputRef.current?.focus(), 100);
        }}
        className="hidden md:flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border hover:bg-accent transition-colors"
        title="Search parts (Ctrl+K)"
      >
        <Search size={16} />
        <span className="text-muted-foreground">Search...</span>
        <kbd className="ml-auto text-xs font-semibold text-muted-foreground">⌘K</kbd>
      </button>

      {/* Mobile search button */}
      <button
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => searchInputRef.current?.focus(), 100);
        }}
        className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
      >
        <Search size={20} />
      </button>

      {/* Search dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Search Spare Parts</DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-hidden flex flex-col">
            {/* Search input */}
            <form onSubmit={handleSearch} className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  ref={searchInputRef}
                  placeholder="Search by part number or name (e.g., 8-97602-428-0 or 机油滤清器)"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  className="pl-10"
                  autoFocus
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('');
                      setResults([]);
                      setSuggestions([]);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            </form>

            {/* Suggestions dropdown */}
            {showSuggestions && suggestions.length > 0 && query.length > 0 && (
              <div className="mb-4 p-3 border border-border rounded-lg bg-muted/50">
                <p className="text-xs font-semibold text-muted-foreground mb-2">Suggestions</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-2 py-1 text-sm bg-background border border-border rounded hover:bg-accent transition-colors"
                    >
                      {suggestion.value}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search results */}
            <div className="flex-1 overflow-y-auto">
              {searchQuery.isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="text-muted-foreground">Searching...</div>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-2">
                  {results.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      className="w-full flex gap-3 p-3 border border-border rounded-lg hover:bg-accent transition-colors text-left"
                    >
                      <img
                        src={result.image}
                        alt={result.name}
                        className="w-16 h-16 object-cover rounded border border-border"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm truncate">{result.name}</div>
                        <div className="text-xs text-muted-foreground">
                          Part #: {result.partNumber}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Brand: {result.brandName}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : query.length > 0 ? (
                <div className="flex items-center justify-center py-8">
                  <div className="text-muted-foreground">No parts found matching "{query}"</div>
                </div>
              ) : (
                <div className="flex items-center justify-center py-8">
                  <div className="text-muted-foreground">Start typing to search for parts</div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
