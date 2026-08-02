import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { posts, categories, tags, postTags } from "../../drizzle/schema";
import { eq, and, like, desc } from "drizzle-orm";
import { z } from "zod";

export const blogRouter = router({
  // Get all posts
  listPosts: publicProcedure
    .input(z.object({
      page: z.number().default(1),
      limit: z.number().default(10),
      categoryId: z.number().optional(),
      tagId: z.number().optional(),
      search: z.string().optional(),
    }))
    .query(async ({ input }) => {
      const { page, limit, categoryId, tagId, search } = input;
      const offset = (page - 1) * limit;

      let whereConditions = [];
      if (categoryId) {
        whereConditions.push(eq(posts.categoryId, categoryId));
      }
      if (search) {
        whereConditions.push(like(posts.title, `%${search}%`));
      }

      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const allPosts = await db.query.posts.findMany({
        where: and(...whereConditions),
        limit,
        offset,
        with: { category: true, postTags: { with: { tag: true } } },
        orderBy: (posts, { desc }) => [desc(posts.createdAt)],
      });

      return allPosts;
    }),

  // Get a single post by slug
  getPostBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const post = await db.query.posts.findFirst({
        where: eq(posts.slug, input.slug),
        with: { category: true, postTags: { with: { tag: true } } },
      });
      return post;
    }),

  // Get all categories
  listCategories: publicProcedure.query(async () => {
    const db = await getDb();
      if (!db) throw new Error("Database not available");
      const allCategories = await db.query.categories.findMany();
    return allCategories;
  }),

  // Get all tags
  listTags: publicProcedure.query(async () => {
    const db = await getDb();
      if (!db) throw new Error("Database not available");
      const allTags = await db.query.tags.findMany();
    return allTags;
  }),

  // Admin procedures (protected)
  createPost: protectedProcedure
    .input(z.object({
      title: z.string(),
      slug: z.string(),
      content: z.string(),
      authorId: z.number(),
      categoryId: z.number(),
      imageUrl: z.string().optional(),
      tagIds: z.array(z.number()).optional(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const [newPostResult] = await db.insert(posts).values(input);
      if (input.tagIds && newPostResult.insertId) {
        for (const tagId of input.tagIds) {
          await db.insert(postTags).values({ postId: Number(newPostResult.insertId), tagId });
        }
      }
      return newPostResult;
    }),

  updatePost: protectedProcedure
    .input(z.object({
      id: z.number(),
      title: z.string().optional(),
      slug: z.string().optional(),
      content: z.string().optional(),
      categoryId: z.number().optional(),
      imageUrl: z.string().optional(),
      tagIds: z.array(z.number()).optional(),
    }))
    .mutation(async ({ input }) => {
      const { id, tagIds, ...rest } = input;
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const updatedPost = await db.update(posts).set(rest).where(eq(posts.id, id));
      if (tagIds) {
        await db.delete(postTags).where(eq(postTags.postId, id));
        for (const tagId of tagIds) {
          await db.insert(postTags).values({ postId: id, tagId });
        }
      }
      return updatedPost;
    }),

  deletePost: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      await db.delete(postTags).where(eq(postTags.postId, input.id));
      const deletedPost = await db.delete(posts).where(eq(posts.id, input.id));
      return deletedPost;
    }),

  createCategory: protectedProcedure
    .input(z.object({ name: z.string(), slug: z.string() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const newCategory = await db.insert(categories).values(input);
      return newCategory;
    }),

  updateCategory: protectedProcedure
    .input(z.object({ id: z.number(), name: z.string().optional(), slug: z.string().optional() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const updatedCategory = await db.update(categories).set(input).where(eq(categories.id, input.id));
      return updatedCategory;
    }),

  deleteCategory: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const deletedCategory = await db.delete(categories).where(eq(categories.id, input.id));
      return deletedCategory;
    }),

  createTag: protectedProcedure
    .input(z.object({ name: z.string(), slug: z.string() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const newTag = await db.insert(tags).values(input);
      return newTag;
    }),

  updateTag: protectedProcedure
    .input(z.object({ id: z.number(), name: z.string().optional(), slug: z.string().optional() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const updatedTag = await db.update(tags).set(input).where(eq(tags.id, input.id));
      return updatedTag;
    }),

  deleteTag: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      await db.delete(postTags).where(eq(postTags.tagId, input.id));
      const deletedTag = await db.delete(tags).where(eq(tags.id, input.id));
      return deletedTag;
    }),
});
