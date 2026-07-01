import { protectedProcedure, publicProcedure, router } from "../_core/trpc";
import { z } from "zod";
import { addFavorite, removeFavorite, getFavorites, isFavorite, getFavoritesCount } from "../db";

export const favoritesRouter = router({
  // Add a part to favorites
  add: protectedProcedure
    .input(
      z.object({
        partId: z.string(),
        partName: z.string(),
        brand: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await addFavorite(ctx.user.id, input.partId, input.partName, input.brand);
      return { success: true };
    }),

  // Remove a part from favorites
  remove: protectedProcedure
    .input(z.object({ partId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      await removeFavorite(ctx.user.id, input.partId);
      return { success: true };
    }),

  // Get all favorites for the current user
  list: protectedProcedure.query(async ({ ctx }) => {
    const favorites = await getFavorites(ctx.user.id);
    return favorites;
  }),

  // Check if a part is in favorites
  isFavorite: protectedProcedure
    .input(z.object({ partId: z.string() }))
    .query(async ({ input, ctx }) => {
      const result = await isFavorite(ctx.user.id, input.partId);
      return result;
    }),

  // Get count of favorites
  count: protectedProcedure.query(async ({ ctx }) => {
    const count = await getFavoritesCount(ctx.user.id);
    return count;
  }),
});
