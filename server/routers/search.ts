import { z } from 'zod';
import { publicProcedure, router } from '../_core/trpc';
import { brands } from '../../client/src/data/products';

// Extract all spare parts from all brands
function getAllSpareParts() {
  const allParts: any[] = [];
  
  brands.forEach(brand => {
    if (brand.spareParts && Array.isArray(brand.spareParts)) {
      brand.spareParts.forEach(part => {
        allParts.push({
          ...part,
          brandId: brand.id,
          brandName: brand.name,
          brandFullName: brand.fullName,
        });
      });
    }
  });
  
  return allParts;
}

export const searchRouter = router({
  // Search parts by part number or name
  searchParts: publicProcedure
    .input(
      z.object({
        query: z.string().min(1).max(100),
        limit: z.number().min(1).max(50).default(20),
      })
    )
    .query(({ input }) => {
      const { query, limit } = input;
      const searchQuery = query.toLowerCase().trim();
      
      const allParts = getAllSpareParts();
      
      // Search by part number (exact or partial match)
      const partNumberMatches = allParts.filter(part => 
        part.partNumber && part.partNumber.toLowerCase().includes(searchQuery)
      );
      
      // Search by name (case-insensitive)
      const nameMatches = allParts.filter(part => 
        part.name && part.name.toLowerCase().includes(searchQuery)
      );
      
      // Search by description
      const descriptionMatches = allParts.filter(part => 
        part.description && part.description.toLowerCase().includes(searchQuery)
      );
      
      // Combine results with priority: part number > name > description
      const results = [
        ...partNumberMatches,
        ...nameMatches.filter(p => !partNumberMatches.find(pm => pm.id === p.id)),
        ...descriptionMatches.filter(p => 
          !partNumberMatches.find(pm => pm.id === p.id) && 
          !nameMatches.find(nm => nm.id === p.id)
        ),
      ].slice(0, limit);
      
      return {
        results,
        total: results.length,
        query: searchQuery,
      };
    }),

  // Get search suggestions (for autocomplete)
  getSuggestions: publicProcedure
    .input(
      z.object({
        query: z.string().min(1).max(50),
        limit: z.number().min(1).max(10).default(5),
      })
    )
    .query(({ input }) => {
      const { query, limit } = input;
      const searchQuery = query.toLowerCase().trim();
      
      const allParts = getAllSpareParts();
      
      // Get unique part numbers that match
      const partNumbers = Array.from(
        new Set(
          allParts
            .filter(part => part.partNumber && part.partNumber.toLowerCase().includes(searchQuery))
            .map(part => part.partNumber)
        )
      ).slice(0, limit);
      
      // Get unique part names that match
      const names = Array.from(
        new Set(
          allParts
            .filter(part => part.name && part.name.toLowerCase().includes(searchQuery))
            .map(part => part.name)
        )
      ).slice(0, limit);
      
      return {
        suggestions: [
          ...partNumbers.map(pn => ({ type: 'partNumber', value: pn })),
          ...names.map(n => ({ type: 'name', value: n })),
        ].slice(0, limit),
      };
    }),

  // Get all brands for filtering
  getBrands: publicProcedure.query(() => {
    return brands.map(brand => ({
      id: brand.id,
      name: brand.name,
      fullName: brand.fullName,
    }));
  }),
});

export type SearchRouter = typeof searchRouter;
