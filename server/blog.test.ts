
import { describe, expect, it, beforeEach } from "vitest";
import { appRouter } from "./routers";
import { getDb } from "./db";
import { posts, categories, tags, postTags, users } from "../drizzle/schema";
import { eq } from "drizzle-orm";
import type { TrpcContext } from "./_core/context";
import { UNAUTHED_ERR_MSG } from "../shared/const";

// Mock context for authenticated user
const createAuthContext = (): TrpcContext => ({
  user: {

    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "test",
    role: "admin", // Assuming admin for protected procedures
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  },
  req: {} as any,
  res: {} as any,
});

// Mock context for unauthenticated user
const createUnauthContext = (): TrpcContext => ({
  user: null,
  req: {} as any,
  res: {} as any,
});

describe("blogRouter", () => {
  let db: Awaited<ReturnType<typeof getDb>>;
  let callerAuth: ReturnType<typeof appRouter.createCaller>;
  let callerUnauth: ReturnType<typeof appRouter.createCaller>;

  beforeEach(async () => {
    db = await getDb();
    if (!db) throw new Error("Database not available");

    // Clear all blog related tables before each test
    await db.delete(postTags);
    await db.delete(posts);
    await db.delete(categories);
    await db.delete(tags);
    await db.delete(users);

    // Seed a test user
    await db.insert(users).values({

      openId: "test-user",
      email: "test@example.com",
      name: "Test User",
      loginMethod: "test",
      role: "admin",
    });

    callerAuth = appRouter.createCaller(createAuthContext());
    callerUnauth = appRouter.createCaller(createUnauthContext());
  });

  // --- Public Procedures ---

  it("should list posts", async () => {
    await callerAuth.blog.createPost({
      title: "Test Post 1",
      slug: "test-post-1",
      content: "Content 1",
            authorId: Number((await db.query.users.findFirst())?.id || 0),
                              categoryId: Number((await callerAuth.blog.createCategory({ name: "Category 1", slug: "cat-1" })).insertId || 0),
    });
    const posts = await callerUnauth.blog.listPosts({});
    expect(posts).toHaveLength(1);
    expect(posts[0]?.title).toBe("Test Post 1");
  });

  it("should get a post by slug", async () => {
                    const categoryId = Number((await callerAuth.blog.createCategory({ name: "Category 2", slug: "cat-2" })).insertId || 0);
    await callerAuth.blog.createPost({
      title: "Test Post 2",
      slug: "test-post-2",
      content: "Content 2",
            authorId: Number((await db.query.users.findFirst())?.id || 0),
      categoryId,
    });
    const post = await callerUnauth.blog.getPostBySlug({ slug: "test-post-2" });
    expect(post?.title).toBe("Test Post 2");
    expect(post?.category.name).toBe("Category 2");
  });

  it("should list categories", async () => {
    await callerAuth.blog.createCategory({ name: "Category A", slug: "cat-a" });
    await callerAuth.blog.createCategory({ name: "Category B", slug: "cat-b" });
    const categories = await callerUnauth.blog.listCategories();
    expect(categories).toHaveLength(2);
    expect(categories.map((c) => c.name)).toEqual(expect.arrayContaining(["Category A", "Category B"]));
  });

  it("should list tags", async () => {
    await callerAuth.blog.createTag({ name: "Tag X", slug: "tag-x" });
    await callerAuth.blog.createTag({ name: "Tag Y", slug: "tag-y" });
    const tags = await callerUnauth.blog.listTags();
    expect(tags).toHaveLength(2);
    expect(tags.map((t) => t.name)).toEqual(expect.arrayContaining(["Tag X", "Tag Y"]));
  });

  // --- Protected Procedures ---

  it("should create a post (protected)", async () => {
                    const categoryId = Number((await callerAuth.blog.createCategory({ name: "New Cat", slug: "new-cat" })).insertId || 0);
                    const tagId = Number((await callerAuth.blog.createTag({ name: "New Tag", slug: "new-tag" })).insertId || 0);
    const newPost = await callerAuth.blog.createPost({
      title: "New Protected Post",
      slug: "new-protected-post",
      content: "Protected content",
            authorId: Number((await db.query.users.findFirst())?.id || 0),
      categoryId,
      tagIds: [tagId],
    });
    expect(newPost.insertId).toBeDefined();

    const post = await callerAuth.blog.getPostBySlug({ slug: "new-protected-post" });
    expect(post?.title).toBe("New Protected Post");
    expect(post?.postTags).toHaveLength(1);
    expect(post?.postTags[0]?.tag.name).toBe("New Tag");
  });

  it("should update a post (protected)", async () => {
                    const categoryId = Number((await callerAuth.blog.createCategory({ name: "Update Cat", slug: "update-cat" })).insertId || 0);
    const postInsertResult = await callerAuth.blog.createPost({
      title: "Original Post",
      slug: "original-post",
      content: "Original content",
            authorId: Number((await db.query.users.findFirst())?.id || 0),
      categoryId,
    });
                    const postId = Number(postInsertResult.insertId || 0);

    await callerAuth.blog.updatePost({
      id: postId,
      title: "Updated Post",
      content: "Updated content",
    });

    const updatedPost = await callerAuth.blog.getPostBySlug({ slug: "original-post" });
    expect(updatedPost?.title).toBe("Updated Post");
    expect(updatedPost?.content).toBe("Updated content");
  });

  it("should delete a post (protected)", async () => {
                    const categoryId = Number((await callerAuth.blog.createCategory({ name: "Delete Cat", slug: "delete-cat" })).insertId || 0);
    const postInsertResult = await callerAuth.blog.createPost({
      title: "Post to Delete",
      slug: "post-to-delete",
      content: "Delete me",
            authorId: Number((await db.query.users.findFirst())?.id || 0),
      categoryId,
    });
                    const postId = Number(postInsertResult.insertId || 0);

    await callerAuth.blog.deletePost({ id: postId });

    const deletedPost = await callerAuth.blog.getPostBySlug({ slug: "post-to-delete" });
    expect(deletedPost).toBeNull();
  });

  it("should create a category (protected)", async () => {
    const newCategory = await callerAuth.blog.createCategory({ name: "Brand New Cat", slug: "brand-new-cat" });
    expect(newCategory.insertId).toBeDefined();
    const categories = await callerAuth.blog.listCategories();
    expect(categories.map((c) => c.name)).toContain("Brand New Cat");
  });

  it("should update a category (protected)", async () => {
    const categoryInsertResult = await callerAuth.blog.createCategory({ name: "Cat to Update", slug: "cat-to-update" });
                    const categoryId = Number(categoryInsertResult.insertId || 0);

    await callerAuth.blog.updateCategory({ id: categoryId, name: "Updated Category Name" });

    const categories = await callerAuth.blog.listCategories();
    const updatedCategory = categories.find((c) => c.id === categoryId);
    expect(updatedCategory?.name).toBe("Updated Category Name");
  });

  it("should delete a category (protected)", async () => {
    const categoryInsertResult = await callerAuth.blog.createCategory({ name: "Cat to Delete", slug: "cat-to-delete" });
                    const categoryId = Number(categoryInsertResult.insertId || 0);

    await callerAuth.blog.deleteCategory({ id: categoryId });

    const categories = await callerAuth.blog.listCategories();
    expect(categories.find((c) => c.id === categoryId)).toBeUndefined();
  });

  it("should create a tag (protected)", async () => {
    const newTag = await callerAuth.blog.createTag({ name: "Brand New Tag", slug: "brand-new-tag" });
    expect(newTag.insertId).toBeDefined();
    const tags = await callerAuth.blog.listTags();
    expect(tags.map((t) => t.name)).toContain("Brand New Tag");
  });

  it("should update a tag (protected)", async () => {
    const tagInsertResult = await callerAuth.blog.createTag({ name: "Tag to Update", slug: "tag-to-update" });
                    const tagId = Number(tagInsertResult.insertId || 0);

    await callerAuth.blog.updateTag({ id: tagId, name: "Updated Tag Name" });

    const tags = await callerAuth.blog.listTags();
    const updatedTag = tags.find((t) => t.id === tagId);
    expect(updatedTag?.name).toBe("Updated Tag Name");
  });

  it("should delete a tag (protected)", async () => {
    const tagInsertResult = await callerAuth.blog.createTag({ name: "Tag to Delete", slug: "tag-to-delete" });
                    const tagId = Number(tagInsertResult.insertId || 0);

    await callerAuth.blog.deleteTag({ id: tagId });

    const tags = await callerAuth.blog.listTags();
    expect(tags.find((t) => t.id === tagId)).toBeUndefined();
  });

  it("should prevent unauthenticated users from creating a post", async () => {
    await expect(callerUnauth.blog.createPost({
      title: "Unauthorized Post",
      slug: "unauthorized-post",
      content: "Should not be created",
            authorId: Number((await db.query.users.findFirst())?.id || 0),
                              categoryId: Number((await callerAuth.blog.createCategory({ name: "Temp Cat", slug: "temp-cat" })).insertId || 0),
    })).rejects.toThrow(UNAUTHED_ERR_MSG);
  });
});
