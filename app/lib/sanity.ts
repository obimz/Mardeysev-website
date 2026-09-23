/**
 * Sanity Client Configuration
 *
 * This file initializes the Sanity client and image URL builder
 * for fetching CMS data in the Next.js application.
 */

import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

export type SanityImageSource = Parameters<ReturnType<typeof createImageUrlBuilder>['image']>[0];

// Sanity project configuration
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'w72q8zb2';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

// Create the Sanity client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if you want to ensure fresh data
});

// Initialize the image URL builder
const builder = createImageUrlBuilder(client);

/**
 * Generate Sanity image URL from image source
 *
 * @param source - Sanity image asset reference
 * @returns Image URL builder instance
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Helper to generate optimized image URL with dimensions
 *
 * @param source - Sanity image asset reference
 * @param width - Desired image width
 * @param height - Optional image height
 * @returns Optimized image URL
 */
export function getImageUrl(
  source: SanityImageSource,
  width: number,
  height?: number
): string {
  let imageBuilder = urlFor(source).width(width).auto('format').quality(85);

  if (height) {
    imageBuilder = imageBuilder.height(height);
  }

  return imageBuilder.url();
}
