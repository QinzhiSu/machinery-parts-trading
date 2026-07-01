import { Heart, Trash2, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import { useAuth } from '@/_core/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useState } from 'react';
import { trpc } from '@/lib/trpc';

interface Favorite {
  partId: string;
  partName: string;
  brand: string;
  userId: number;
  createdAt: Date;
}

export default function FavoritesPage() {
  const [, navigate] = useLocation();
  const { user, loading: authLoading } = useAuth();
  const { t } = useLanguage();
  const [removingId, setRemovingId] = useState<string | null>(null);

  // Get favorites list - only query if user is authenticated
  const { data: favoritesList = [], isLoading: isLoadingFavorites, refetch } = trpc.favorites.list.useQuery(undefined, {
    enabled: !!user,
  });

  const removeMutation = trpc.favorites.remove.useMutation();

  const handleRemoveFavorite = async (partId: string) => {
    setRemovingId(partId);
    try {
      await removeMutation.mutateAsync({ partId });
      toast.success('Removed from favorites');
      // Refetch the list after removal
      refetch();
    } catch (error) {
      toast.error('Failed to remove from favorites');
      console.error('Failed to remove favorite:', error);
    } finally {
      setRemovingId(null);
    }
  };

  if (authLoading || isLoadingFavorites) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p>{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <Heart size={48} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-bold mb-2">Please log in</h2>
          <p className="text-gray-600 mb-6">Sign in to view and manage your favorite spare parts.</p>
          <Button
            onClick={() => navigate('/')}
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Heart size={32} className="text-orange-600 fill-orange-600" />
            My Favorites
          </h1>
          <p className="text-gray-600 mt-2">
            {favoritesList.length} {favoritesList.length === 1 ? 'part' : 'parts'} saved
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        {favoritesList.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <Heart size={48} className="mx-auto mb-4 text-gray-400" />
            <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
            <p className="text-gray-600 mb-6">
              Start adding spare parts to your favorites to keep track of items you're interested in.
            </p>
            <Button
              onClick={() => navigate('/construction')}
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              Browse Parts
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(favoritesList as Favorite[]).map((favorite) => (
              <div
                key={favorite.partId}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Part Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-sm uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                        {favorite.brand}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">{favorite.partId}</p>
                    </div>
                    <Heart size={20} className="text-orange-600 fill-orange-600" />
                  </div>

                  <p className="text-sm font-semibold mb-3" style={{ color: 'oklch(0.18 0.04 265)' }}>
                    {favorite.partName}
                  </p>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveFavorite(favorite.partId)}
                    disabled={removingId === favorite.partId}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 text-sm font-semibold text-red-600 hover:bg-red-50 rounded transition-colors border border-red-200 disabled:opacity-50"
                  >
                    <Trash2 size={14} />
                    {removingId === favorite.partId ? 'Removing...' : 'Remove'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
