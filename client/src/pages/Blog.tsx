
import { Link } from 'wouter';
import { trpc } from '@/lib/trpc';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { useLocation } from 'wouter';
import { useEffect, useState } from 'react';

export default function Blog() {
  const [location, setLocation] = useLocation();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | undefined>(undefined);
  const [selectedTagId, setSelectedTagId] = useState<number | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { data: categoriesData, isLoading: isLoadingCategories, error: categoriesError } = trpc.blog.listCategories.useQuery();
  const { data: tagsData, isLoading: isLoadingTags, error: tagsError } = trpc.blog.listTags.useQuery();

  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1]);
    const categorySlug = params.get('category');
    const tagSlug = params.get('tag');
    const search = params.get('search');

    if (categorySlug && categoriesData) {
      const category = categoriesData.find(c => c.slug === categorySlug);
      setSelectedCategoryId(category?.id);
    } else {
      setSelectedCategoryId(undefined);
    }

    if (tagSlug && tagsData) {
      const tag = tagsData.find(t => t.slug === tagSlug);
      setSelectedTagId(tag?.id);
    } else {
      setSelectedTagId(undefined);
    }

    setSearchQuery(search || '');
  }, [location, categoriesData, tagsData]);

  const { data: posts, isLoading: isLoadingPosts, error: postsError } = trpc.blog.listPosts.useQuery({
    categoryId: selectedCategoryId,
    tagId: selectedTagId,
    search: searchQuery,
  });

  const handleCategoryClick = (categorySlug: string) => {
    setLocation(`/blog?category=${categorySlug}`);
  };

  const handleTagClick = (tagSlug: string) => {
    setLocation(`/blog?tag=${tagSlug}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation(`/blog?search=${searchQuery}`);
  };

  if (isLoadingPosts || isLoadingCategories || isLoadingTags) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (postsError || categoriesError || tagsError) {
    return (
      <div className="container mx-auto py-8 text-center text-red-500">
        <p>Error loading blog content: {postsError?.message || categoriesError?.message || tagsError?.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Industry Blog & News</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar for Categories and Tags */}
        <aside className="md:col-span-1">
          <form onSubmit={handleSearchSubmit} className="mb-6">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-2 border rounded-md"
            />
            <Button type="submit" className="mt-2 w-full">Search</Button>
          </form>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {categoriesData?.map(category => (
                  <Badge
                    key={category.id}
                    variant={selectedCategoryId === category.id ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-gray-200"
                    onClick={() => handleCategoryClick(category.slug)}
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tagsData?.map(tag => (
                  <Badge
                    key={tag.id}
                    variant={selectedTagId === tag.id ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-gray-200"
                    onClick={() => handleTagClick(tag.slug)}
                  >
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Main content for Posts */}
        <main className="md:col-span-3">
          {posts?.length === 0 ? (
            <p className="text-center text-gray-500">No blog posts found.</p>
          ) : (
            <div className="grid gap-6">
              {posts?.map(post => (
                <Card key={post.id}>
                  <CardHeader>
                    <CardTitle>
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="flex items-center space-x-2">
                      <span>By {post.authorId}</span> {/* TODO: Replace with actual author name */}
                      <span>•</span>
                      <span>{format(new Date(post.createdAt), 'PPP')}</span>
                      {post.category && (
                        <Badge variant="outline" className="ml-2 cursor-pointer hover:bg-gray-100" onClick={() => handleCategoryClick(post.category.slug)}>
                          {post.category.name}
                        </Badge>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {post.imageUrl && (
                      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" />
                    )}
                    <p className="text-gray-700 line-clamp-3">{post.content}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="link" className="pl-0 mt-2">Read More</Button>
                    </Link>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.postTags?.map(({ tag }) => (
                        <Badge key={tag.id} variant="secondary" className="cursor-pointer hover:bg-gray-200" onClick={() => handleTagClick(tag.slug)}>
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
