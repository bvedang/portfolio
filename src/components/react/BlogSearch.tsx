import { useState, useMemo } from 'react';

interface Post {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  pubDate: string;
}

interface BlogSearchProps {
  posts: Post[];
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const [query, setQuery] = useState('');

  const filteredPosts = useMemo(() => {
    if (!query.trim()) return posts;

    const searchTerm = query.toLowerCase().trim();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.description.toLowerCase().includes(searchTerm) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  }, [posts, query]);

  return (
    <div className="mb-8">
      {/* Search Input */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search posts by title, description, or tag..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg text-stone-900 dark:text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
            aria-label="Clear search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Results count */}
      {query && (
        <p className="mt-3 text-sm text-stone-500">
          {filteredPosts.length === 0
            ? 'No posts found'
            : `Found ${filteredPosts.length} post${filteredPosts.length === 1 ? '' : 's'}`}
        </p>
      )}

      {/* Results */}
      <div className="mt-6 space-y-6">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="group">
            <a href={`/blog/${post.slug}`} className="block">
              <div className="p-6 rounded-lg bg-stone-100 dark:bg-stone-900/50 hover:bg-stone-200 dark:hover:bg-stone-800/50 transition-colors border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl md:text-2xl font-semibold text-stone-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors mb-2">
                  {post.title}
                </h2>

                <p className="text-stone-600 dark:text-stone-400 mb-4 line-clamp-2">
                  {post.description}
                </p>

                <time className="text-sm text-stone-500">
                  {new Date(post.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </a>
          </article>
        ))}
      </div>

      {/* No results message */}
      {query && filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-stone-600 dark:text-stone-400">
            No posts match your search. Try different keywords.
          </p>
        </div>
      )}
    </div>
  );
}
