import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFavoritesLocal } from './useFavoritesLocal';

describe('useFavoritesLocal Hook', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should initialize with empty favorites', () => {
    const { result } = renderHook(() => useFavoritesLocal());
    
    expect(result.current.favorites).toEqual([]);
    expect(result.current.favoritesCount).toBe(0);
  });

  it('should add a favorite', () => {
    const { result } = renderHook(() => useFavoritesLocal());
    
    act(() => {
      result.current.addFavorite('part-1', 'Oil Filter', 'Isuzu');
    });

    expect(result.current.favorites).toHaveLength(1);
    expect(result.current.favoritesCount).toBe(1);
    expect(result.current.isFavorite('part-1')).toBe(true);
  });

  it('should not add duplicate favorites', () => {
    const { result } = renderHook(() => useFavoritesLocal());
    
    act(() => {
      result.current.addFavorite('part-1', 'Oil Filter', 'Isuzu');
      result.current.addFavorite('part-1', 'Oil Filter', 'Isuzu');
    });

    expect(result.current.favorites).toHaveLength(1);
    expect(result.current.favoritesCount).toBe(1);
  });

  it('should remove a favorite', () => {
    const { result } = renderHook(() => useFavoritesLocal());
    
    act(() => {
      result.current.addFavorite('part-1', 'Oil Filter', 'Isuzu');
    });

    expect(result.current.favoritesCount).toBe(1);

    act(() => {
      result.current.removeFavorite('part-1');
    });

    expect(result.current.favorites).toHaveLength(0);
    expect(result.current.favoritesCount).toBe(0);
    expect(result.current.isFavorite('part-1')).toBe(false);
  });

  it('should persist favorites to localStorage', () => {
    const { result } = renderHook(() => useFavoritesLocal());
    
    act(() => {
      result.current.addFavorite('part-1', 'Oil Filter', 'Isuzu');
      result.current.addFavorite('part-2', 'Air Filter', 'Shacman');
    });

    const stored = localStorage.getItem('machinery_favorites');
    expect(stored).toBeTruthy();
    
    const parsed = JSON.parse(stored!);
    expect(parsed).toHaveLength(2);
    expect(parsed[0].partId).toBe('part-1');
    expect(parsed[1].partId).toBe('part-2');
  });

  it('should load favorites from localStorage on mount', () => {
    // Pre-populate localStorage
    const favorites = [
      { partId: 'part-1', partName: 'Oil Filter', brand: 'Isuzu', addedAt: Date.now() },
      { partId: 'part-2', partName: 'Air Filter', brand: 'Shacman', addedAt: Date.now() },
    ];
    localStorage.setItem('machinery_favorites', JSON.stringify(favorites));

    const { result } = renderHook(() => useFavoritesLocal());

    expect(result.current.favorites).toHaveLength(2);
    expect(result.current.favoritesCount).toBe(2);
    expect(result.current.isFavorite('part-1')).toBe(true);
    expect(result.current.isFavorite('part-2')).toBe(true);
  });

  it('should handle multiple favorites correctly', () => {
    const { result } = renderHook(() => useFavoritesLocal());
    
    act(() => {
      result.current.addFavorite('part-1', 'Oil Filter', 'Isuzu');
      result.current.addFavorite('part-2', 'Air Filter', 'Shacman');
      result.current.addFavorite('part-3', 'Fuel Filter', 'Toyota');
    });

    expect(result.current.favoritesCount).toBe(3);
    expect(result.current.isFavorite('part-2')).toBe(true);

    act(() => {
      result.current.removeFavorite('part-2');
    });

    expect(result.current.favoritesCount).toBe(2);
    expect(result.current.isFavorite('part-1')).toBe(true);
    expect(result.current.isFavorite('part-2')).toBe(false);
    expect(result.current.isFavorite('part-3')).toBe(true);
  });

  it('should return correct getFavoritesCount', () => {
    const { result } = renderHook(() => useFavoritesLocal());
    
    expect(result.current.getFavoritesCount()).toBe(0);

    act(() => {
      result.current.addFavorite('part-1', 'Oil Filter', 'Isuzu');
      result.current.addFavorite('part-2', 'Air Filter', 'Shacman');
    });

    expect(result.current.getFavoritesCount()).toBe(2);
  });
});
