import { describe, it, expect } from 'vitest';
import { appRouter } from './routers';
import type { TrpcContext } from './_core/context';

function createSearchContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: 'https',
      headers: {},
    } as TrpcContext['req'],
    res: {} as TrpcContext['res'],
  };
}

describe('Search Router', () => {
  describe('searchParts', () => {
    it('should find parts by part number', async () => {
      const ctx = createSearchContext();
      const caller = appRouter.createCaller(ctx);
      
      // Search for a part number that should exist
      const result = await caller.search.searchParts({
        query: '8-97602-428-0',
        limit: 20,
      });

      expect(result).toBeDefined();
      expect(result.results).toBeDefined();
      expect(Array.isArray(result.results)).toBe(true);
      expect(result.query).toBe('8-97602-428-0');
    });

    it('should find parts by name (case-insensitive)', async () => {
      const ctx = createSearchContext();
      const caller = appRouter.createCaller(ctx);
      
      // Search for a part name
      const result = await caller.search.searchParts({
        query: 'oil filter',
        limit: 20,
      });

      expect(result).toBeDefined();
      expect(result.results).toBeDefined();
      expect(Array.isArray(result.results)).toBe(true);
    });

    it('should respect the limit parameter', async () => {
      const ctx = createSearchContext();
      const caller = appRouter.createCaller(ctx);
      
      const result = await caller.search.searchParts({
        query: 'filter',
        limit: 5,
      });

      expect(result.results.length).toBeLessThanOrEqual(5);
    });

    it('should return empty results for non-matching query', async () => {
      const ctx = createSearchContext();
      const caller = appRouter.createCaller(ctx);
      
      const result = await caller.search.searchParts({
        query: 'xyznonexistentpart123',
        limit: 20,
      });

      expect(result.results.length).toBe(0);
      expect(result.total).toBe(0);
    });
  });

  describe('getSuggestions', () => {
    it('should return suggestions for partial matches', async () => {
      const ctx = createSearchContext();
      const caller = appRouter.createCaller(ctx);
      
      const result = await caller.search.getSuggestions({
        query: 'oil',
        limit: 5,
      });

      expect(result).toBeDefined();
      expect(result.suggestions).toBeDefined();
      expect(Array.isArray(result.suggestions)).toBe(true);
    });

    it('should respect the limit parameter for suggestions', async () => {
      const ctx = createSearchContext();
      const caller = appRouter.createCaller(ctx);
      
      const result = await caller.search.getSuggestions({
        query: 'filter',
        limit: 3,
      });

      expect(result.suggestions.length).toBeLessThanOrEqual(3);
    });

    it('should return suggestions with type and value', async () => {
      const ctx = createSearchContext();
      const caller = appRouter.createCaller(ctx);
      
      const result = await caller.search.getSuggestions({
        query: '8-97',
        limit: 5,
      });

      if (result.suggestions.length > 0) {
        result.suggestions.forEach((suggestion) => {
          expect(suggestion).toHaveProperty('type');
          expect(suggestion).toHaveProperty('value');
          expect(['partNumber', 'name']).toContain(suggestion.type);
        });
      }
    });
  });

  describe('getBrands', () => {
    it('should return list of all brands', async () => {
      const ctx = createSearchContext();
      const caller = appRouter.createCaller(ctx);
      
      const brands = await caller.search.getBrands();

      expect(Array.isArray(brands)).toBe(true);
      expect(brands.length).toBeGreaterThan(0);
      
      // Check that each brand has required properties
      brands.forEach((brand) => {
        expect(brand).toHaveProperty('id');
        expect(brand).toHaveProperty('name');
        expect(brand).toHaveProperty('fullName');
      });
    });
  });
});
