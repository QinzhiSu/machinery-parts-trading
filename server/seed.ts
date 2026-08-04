
import { getDb } from "./db";
import { posts, categories, tags, postTags } from "../drizzle/schema";

async function seed() {
  const db = await getDb();
  if (!db) {
    console.error("Database not available. Exiting seed.");
    return;
  }

  console.log("Seeding database...");

  // Clear existing data (optional, for development)
  await db.delete(postTags);
  await db.delete(posts);
  await db.delete(categories);
  await db.delete(tags);

  // Create categories
  const [cat1] = await db.insert(categories).values({ name: "Construction", slug: "construction" });
  const [cat2] = await db.insert(categories).values({ name: "Trucks", slug: "trucks" });
  const [cat3] = await db.insert(categories).values({ name: "Engines", slug: "engines" });

  // Create tags
  const [tag1] = await db.insert(tags).values({ name: "Excavator", slug: "excavator" });
  const [tag2] = await db.insert(tags).values({ name: "Loader", slug: "loader" });
  const [tag3] = await db.insert(tags).values({ name: "Maintenance", slug: "maintenance" });
  const [tag4] = await db.insert(tags).values({ name: "Engine Parts", slug: "engine-parts" });

  // Create posts
  const [post1] = await db.insert(posts).values({
    title: "The Future of Electric Excavators",
    slug: "future-electric-excavators",
    content: "This article explores the advancements and future prospects of electric excavators in the construction industry.",
    authorId: 1, // Assuming a user with ID 1 exists
    categoryId: Number(cat1.insertId),
    imageUrl: "https://example.com/electric-excavator.jpg",
  });

  const [post2] = await db.insert(posts).values({
    title: "Top 5 Tips for Truck Engine Maintenance",
    slug: "truck-engine-maintenance",
    content: "Regular maintenance is crucial for the longevity of truck engines. Here are our top 5 tips.",
    authorId: 1,
    categoryId: Number(cat2.insertId),
    imageUrl: "https://example.com/truck-engine.jpg",
  });

  const [post3] = await db.insert(posts).values({
    title: "Understanding Diesel Engine Components",
    slug: "understanding-diesel-engine-components",
    content: "A deep dive into the various components that make up a modern diesel engine and their functions.",
    authorId: 1,
    categoryId: Number(cat3.insertId),
    imageUrl: "https://example.com/diesel-engine.jpg",
  });

  // Link tags to posts
  if (post1.insertId) {
    await db.insert(postTags).values([{ postId: Number(post1.insertId), tagId: Number(tag1.insertId) }]);
  }
  if (post2.insertId) {
    await db.insert(postTags).values([{ postId: Number(post2.insertId), tagId: Number(tag3.insertId) }, { postId: Number(post2.insertId), tagId: Number(tag4.insertId) }]);
  }
  if (post3.insertId) {
    await db.insert(postTags).values([{ postId: Number(post3.insertId), tagId: Number(tag4.insertId) }]);
  }

  console.log("Database seeding complete.");
}

seed().catch((err) => {
  console.error("Database seeding failed:", err);
  process.exit(1);
});
