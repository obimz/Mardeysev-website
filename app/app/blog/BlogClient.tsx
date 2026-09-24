"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMagnifyingGlass, HiOutlineCalendar, HiOutlineClock } from "react-icons/hi2";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { urlFor } from "@/lib/sanity";
import { formatBlogDate } from "@/lib/blog-data";
import type { BlogPost } from "@/lib/blog-data";

interface BlogClientProps {
  allPosts: BlogPost[];
  categories: string[];
}

export default function BlogClient({ allPosts, categories }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter posts based on search
  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query)
      );
    }

    return posts;
  }, [allPosts, searchQuery]);

  // Featured posts (ALL posts with images)
  const featuredPosts = allPosts.filter(post => post.mainImage?.asset);
  const currentFeatured = featuredPosts[featuredIndex];

  // Grid posts (ALL filtered posts, including the featured ones)
  const gridPosts = filteredPosts;

  const handlePrevFeatured = () => {
    setFeaturedIndex((prev) => (prev === 0 ? featuredPosts.length - 1 : prev - 1));
  };

  const handleNextFeatured = () => {
    setFeaturedIndex((prev) => (prev === featuredPosts.length - 1 ? 0 : prev + 1));
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      <div style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="container">
          {/* Blog Header - Centered */}
          <div className="text-center pt-4 pb-3 md:pt-6 md:pb-4">
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--deep)] mb-2">
              Mardysev Blog
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted)] max-w-3xl mx-auto leading-relaxed mb-4">
              Get behind the scenes on our solar installations, industry insights, and the people powering Nigeria's clean energy future.
            </p>
          </div>

          {/* Featured Hero Card */}
          {currentFeatured && currentFeatured.mainImage?.asset && (
            <div className="mt-2 mb-16 h-[500px] md:h-[450px]">
              <Link href={`/blog/${currentFeatured.slug}`} className="block h-full">
                <article className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-slate-900 p-8 md:p-12 h-full">
                  {/* Left Column - Content */}
                  <div className="flex flex-col justify-between text-white relative z-10">
                    <div>
                      {/* Category Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {currentFeatured.categories && currentFeatured.categories.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="inline-flex items-center px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight line-clamp-3">
                        {currentFeatured.title}
                      </h2>

                      <div className="flex items-center gap-4 text-sm text-white/80 mb-6">
                        <span className="inline-flex items-center gap-1.5 font-semibold">
                          <HiOutlineCalendar className="text-white" />
                          {formatBlogDate(currentFeatured.publishedAt)}
                        </span>
                        {currentFeatured.author && (
                          <span>by {currentFeatured.author.name}</span>
                        )}
                      </div>
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex items-center gap-4 mt-8">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handlePrevFeatured();
                        }}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-amber-500 flex items-center justify-center transition-colors"
                        aria-label="Previous featured post"
                      >
                        <BsChevronLeft className="text-white" />
                      </button>

                      <div className="flex gap-2">
                        {featuredPosts.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.preventDefault();
                              setFeaturedIndex(idx);
                            }}
                            className={`h-2 rounded-full transition-all ${
                              idx === featuredIndex
                                ? "w-8 bg-amber-500"
                                : "w-2 bg-white/40 hover:bg-white/60"
                            }`}
                            aria-label={`Go to featured post ${idx + 1}`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleNextFeatured();
                        }}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-amber-500 flex items-center justify-center transition-colors"
                        aria-label="Next featured post"
                      >
                        <BsChevronRight className="text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column - Featured Image */}
                  <div className="relative h-full rounded-2xl overflow-hidden">
                    <Image
                      src={urlFor(currentFeatured.mainImage.asset).width(1200).height(800).url()}
                      alt={currentFeatured.mainImage.alt || currentFeatured.title}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                  </div>
                </article>
              </Link>
            </div>
          )}

          {/* All Stories Section Header with Search */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep)] mb-2">
                All Stories
              </h2>
              <p className="text-lg text-[var(--muted)]">
                Everything you need to know about solar energy, engineering, and cost savings in Nigeria.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative md:w-80">
              <input
                type="text"
                placeholder="Search blog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-[var(--border)] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent text-[var(--deep)]"
              />
              <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)] text-xl" />
            </div>
          </div>

          {/* Asymmetrical Article Grid */}
          {gridPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {gridPosts.slice(0, visibleCount).map((post) => (
                  <ArticleCard key={post._id} post={post} />
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < gridPosts.length && (
                <div className="flex justify-center mb-16">
                  <button
                    onClick={handleLoadMore}
                    className="inline-flex items-center gap-2 text-lg font-bold text-[var(--deep)] hover:text-[var(--deep-2)] transition-colors"
                  >
                    Load more
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-[var(--muted)]">
                No articles found. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Article Card Component
function ArticleCard({ post }: { post: BlogPost }) {
  // Fallback image if mainImage is missing
  const imageSrc = post.mainImage?.asset
    ? urlFor(post.mainImage.asset).width(800).height(500).url()
    : 'data:image/svg+xml,%3Csvg width="800" height="500" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="800" height="500" fill="%231e3831"/%3E%3Cg opacity="0.3"%3E%3Crect x="200" y="150" width="150" height="120" fill="%23f5a623"/%3E%3Crect x="370" y="160" width="130" height="110" fill="none" stroke="%23f5a623" stroke-width="2"/%3E%3Crect x="520" y="140" width="80" height="140" fill="%23f5a623"/%3E%3C/g%3E%3C/svg%3E';

  const imageAlt = post.mainImage?.alt || post.title;

  return (
    <Link href={`/blog/${post.slug}`} className="block group h-full">
      <article className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Image with Zoom Effect */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category Tag */}
          {post.categories && post.categories.length > 0 && (
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--gold-soft)] text-[var(--gold)] font-semibold text-xs rounded-full mb-3 w-fit">
              {post.categories[0]}
            </span>
          )}

          <h3 className="text-xl font-bold text-[var(--deep)] mb-3 leading-tight group-hover:text-[var(--deep-2)] transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          {/* Meta Footer */}
          <div className="flex items-center gap-3 text-xs text-[var(--muted)] pt-4 border-t border-[var(--border)]">
            <span className="inline-flex items-center gap-1.5">
              <HiOutlineCalendar className="text-[var(--gold)]" />
              {formatBlogDate(post.publishedAt)}
            </span>
            {post.estimatedReadingTime && (
              <span className="inline-flex items-center gap-1.5">
                <HiOutlineClock className="text-[var(--gold)]" />
                {post.estimatedReadingTime} min
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
