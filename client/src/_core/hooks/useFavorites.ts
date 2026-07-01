import { useState, useCallback, useEffect } from 'react';
import { trpc } from '@/lib/trpc';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoritesCount, setFavoritesCount] = useState(0);

  // Query favorites
  const { data: favoritesList, isLoading } = trpc.favorites.list.useQuery(undefined, {
    enabled: true,
  });

  // Query favorites count
  const { data: count } = trpc.favorites.count.useQuery(undefined, {
    enabled: true,
  });

  // Mutations
  const addMutation = trpc.favorites.add.useMutation();
  const removeMutation = trpc.favorites.remove.useMutation();

  // Update local state when data changes
  useEffect(() => {
    if (favoritesList) {
      setFavorites(favoritesList.map(fav => fav.partId));
    }
  }, [favoritesList]);

  useEffect(() => {
    if (count !== undefined) {
      setFavoritesCount(count);
    }
  }, [count]);

  const addFavorite = useCallback(
    async (partId: string, partName: string, brand: string) => {
      try {
        await addMutation.mutateAsync({
          partId,
          partName,
          brand,
        });
        setFavorites(prev => [...prev, partId]);
        setFavoritesCount(prev => prev + 1);
      } catch (error) {
        console.error('Failed to add favorite:', error);
        throw error;
      }
    },
    [addMutation]
  );

  const removeFavorite = useCallback(
    async (partId: string) => {
      try {
        await removeMutation.mutateAsync({ partId });
        setFavorites(prev => prev.filter(id => id !== partId));
        setFavoritesCount(prev => Math.max(0, prev - 1));
      } catch (error) {
        console.error('Failed to remove favorite:', error);
        throw error;
      }
    },
    [removeMutation]
  );

  const checkIsFavorite = useCallback(
    (partId: string) => {
      return favorites.includes(partId);
    },
    [favorites]
  );

  return {
    favorites,
    favoritesCount,
    isLoading,
    addFavorite,
    removeFavorite,
    checkIsFavorite,
    isFavorite: (partId: string) => favorites.includes(partId),
  };
}
