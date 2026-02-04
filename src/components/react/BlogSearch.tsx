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
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
          style={{ color: 'var(--muted)' }}
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
          placeholder="Search by title, description, or tag…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input pl-12 pr-12"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 icon-btn"
            aria-label="Clear search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--ink)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Results count */}
      {query && (
        <p className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>
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
              <div className="panel panel-hover p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="chip px-3 py-1 text-xs"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="headline text-xl md:text-2xl transition-colors mb-2" style={{ color: 'var(--ink)' }}>
                  {post.title}
                </h2>

                <p className="mb-4 line-clamp-2" style={{ color: 'var(--muted)' }}>
                  {post.description}
                </p>

                <time className="text-sm" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
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
          <p style={{ color: 'var(--muted)' }}>
            No posts match your search. Try different keywords.
          </p>
        </div>
      )}
    </div>
  );
}
