import { useParams } from "wouter";
import { trpc } from "@/lib/trpc";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";
import { Streamdown } from "streamdown";

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;

  const { data: post, isLoading, error } = trpc.blog.getPostBySlug.useQuery(
    { slug },
    { enabled: !!slug }
  );

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
        Error loading post: {error.message}
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center text-gray-500">
        Post not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <article className="bg-white rounded-lg shadow-md p-8">
        {post.imageUrl && (
          <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover mb-6 rounded-md" />
        )}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 text-sm mb-6">
          By {post.authorId} on {format(new Date(post.createdAt), "PPP")}
        </p>
        <div className="prose max-w-none">
          <Streamdown>{post.content}</Streamdown>
        </div>
        <div className="mt-8">
          {(post.postTags as { tag: { id: number; name: string } }[])?.map(({ tag }) => (
            <span key={tag.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag.name}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
