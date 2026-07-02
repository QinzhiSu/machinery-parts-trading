import { useState, useCallback, useEffect } from 'react';

interface LocalFavorite {
  partId: string;
  partName: string;
  brand: string;
  addedAt: number;
}

const FAVORITES_STORAGE_KEY = 'machinery_favorites';

export function useFavoritesLocal() {
  const [favorites, setFavorites] = useState<LocalFavorite[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setFavorites(Array.isArray(parsed) ? parsed : []);
      }
    } catch (error) {
      console.error('Failed to load favorites from localStorage:', error);
      setFavorites([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error('Failed to save favorites to localStorage:', error);
      }
    }
  }, [favorites, isLoading]);

  const addFavorite = useCallback((partId: string, partName: string, brand: string) => {
    setFavorites((prev) => {
      // Check if already exists
      if (prev.some((fav) => fav.partId === partId)) {
        return prev;
      }
      return [
        ...prev,
        {
          partId,
          partName,
          brand,
          addedAt: Date.now(),
        },
      ];
    });
  }, []);

  const removeFavorite = useCallback((partId: string) => {
    setFavorites((prev) => prev.filter((fav) => fav.partId !== partId));
  }, []);

  const isFavorite = useCallback(
    (partId: string) => {
      return favorites.some((fav) => fav.partId === partId);
    },
    [favorites]
  );

  const getFavoritesCount = useCallback(() => {
    return favorites.length;
  }, [favorites]);

  return {
    favorites,
    favoritesCount: favorites.length,
    isLoading,
    addFavorite,
    removeFavorite,
    isFavorite,
    getFavoritesCount,
  };
}
