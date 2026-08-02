import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const { data: posts, isLoading, error } = trpc.blog.listPosts.useQuery({});

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error loading posts: {error.message}
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Blog & News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {post.imageUrl && (
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                By {post.authorId} on {format(new Date(post.createdAt), "PPP")}
              </p>
              <p className="text-gray-700 mb-4 line-clamp-3">{post.content}</p>
              <Link href={`/blog/${post.slug}`}>
                <Button variant="link" className="p-0">
                  Read More <span aria-hidden="true">&rarr;</span>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
