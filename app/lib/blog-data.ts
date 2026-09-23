/**
 * Blog Data Layer - Sanity CMS Integration
 *
 * This module fetches blog posts from Sanity CMS using GROQ queries.
 * It provides typed interfaces and helper functions for the blog.
 */

import { client } from './sanity';
import type { SanityImageSource } from './sanity';

// Portable Text block types for structured content
export interface PortableTextBlock {
  _type: 'block' | 'image' | 'video';
  _key: string;

  // Text block fields
  style?: 'normal' | 'h2' | 'h3' | 'h4';
  children?: Array<{
    _type: 'span';
    _key: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _type: 'link';
    _key: string;
    href: string;
  }>;
  listItem?: 'bullet' | 'number';
  level?: number;

  // Image block fields
  asset?: {
    _ref: string;
    url?: string;
  };
  alt?: string;
  caption?: string;

  // Video block fields
  url?: string;
}

// Blog post interface matching Sanity schema
export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  mainImage: {
    asset: SanityImageSource & {
      _ref: string;
      url?: string;
    };
    alt: string;
  };
  body: PortableTextBlock[];
  author?: {
    name: string;
    avatar?: string;
  };
  categories?: string[];
  featured?: boolean;
  estimatedReadingTime?: number;
}

/**
 * Fetch all blog posts (sorted by date, newest first)
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage {
      asset,
      "alt": coalesce(alt, title)
    }
  }`;

  try {
    const posts = await client.fetch<BlogPost[]>(query);
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage {
      asset,
      "alt": coalesce(alt, title)
    },
    body
  }`;

  try {
    const post = await client.fetch<BlogPost | null>(query, { slug });
    return post;
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Fetch featured posts
 */
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage {
      asset,
      "alt": coalesce(alt, title)
    }
  }`;

  try {
    const posts = await client.fetch<BlogPost[]>(query);
    return posts;
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}

/**
 * Calculate reading time from Portable Text content (helper function)
 */
export function calculateReadingTime(blocks: PortableTextBlock[]): number {
  const wordCount = blocks.reduce((acc, block) => {
    if (block._type === 'block' && block.children) {
      return acc + block.children.reduce((sum, child) =>
        sum + (child.text?.split(' ').length || 0), 0
      );
    }
    return acc;
  }, 0);

  return Math.max(1, Math.ceil(wordCount / 200)); // ~200 words per minute
}

/**
 * Format date for display
 */
export function formatBlogDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
