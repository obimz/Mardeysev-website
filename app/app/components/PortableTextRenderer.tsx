/**
 * Portable Text Renderer Component
 *
 * Renders structured content blocks from Sanity CMS.
 * Handles headings, paragraphs, lists, images, and video embeds.
 */

import Image from 'next/image';
import type { PortableTextBlock } from '@/lib/blog-data';

interface PortableTextRendererProps {
  blocks: PortableTextBlock[];
  className?: string;
}

export default function PortableTextRenderer({
  blocks,
  className = ''
}: PortableTextRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  const renderBlock = (block: PortableTextBlock, index: number) => {
    switch (block._type) {
      case 'block':
        return renderTextBlock(block, index);
      case 'image':
        return renderImageBlock(block, index);
      case 'video':
        return renderVideoBlock(block, index);
      default:
        return null;
    }
  };

  const renderTextBlock = (block: PortableTextBlock, index: number) => {
    if (!block.children || block.children.length === 0) return null;

    // Handle list items
    if (block.listItem === 'bullet') {
      return (
        <li key={block._key || index} className="mb-2">
          {renderSpan(block.children)}
        </li>
      );
    }

    // Get the text content
    const textContent = renderSpan(block.children);

    // Render based on style
    switch (block.style) {
      case 'h2':
        return (
          <h2
            key={block._key || index}
            className="text-2xl md:text-3xl font-bold text-[var(--deep)] mt-8 mb-4 leading-tight"
          >
            {textContent}
          </h2>
        );
      case 'h3':
        return (
          <h3
            key={block._key || index}
            className="text-xl md:text-2xl font-bold text-[var(--deep-2)] mt-6 mb-3 leading-tight"
          >
            {textContent}
          </h3>
        );
      case 'h4':
        return (
          <h4
            key={block._key || index}
            className="text-lg md:text-xl font-bold text-[var(--deep-2)] mt-5 mb-3 leading-tight"
          >
            {textContent}
          </h4>
        );
      case 'normal':
      default:
        return (
          <p
            key={block._key || index}
            className="text-[var(--muted)] leading-relaxed mb-4"
          >
            {textContent}
          </p>
        );
    }
  };

  const renderSpan = (children: Array<{ _type: string; _key: string; text: string; marks?: string[] }>) => {
    return children.map((child) => {
      if (child._type !== 'span' || !child.text) return null;

      let text: React.ReactNode = child.text;

      // Apply marks (bold, italic, etc.)
      if (child.marks && child.marks.length > 0) {
        child.marks.forEach((mark) => {
          if (mark === 'strong') {
            text = <strong className="font-bold text-[var(--deep)]">{text}</strong>;
          } else if (mark === 'em') {
            text = <em className="italic">{text}</em>;
          } else if (mark === 'code') {
            text = <code className="bg-[var(--gold-soft)] px-1.5 py-0.5 rounded text-sm font-mono">{text}</code>;
          }
        });
      }

      return <span key={child._key}>{text}</span>;
    });
  };

  const renderImageBlock = (block: PortableTextBlock, index: number) => {
    if (!block.asset?.url) return null;

    return (
      <figure key={block._key || index} className="my-8">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={block.asset.url}
            alt={block.alt || 'Blog image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        {block.caption && (
          <figcaption className="mt-3 text-sm text-center text-[var(--muted)] italic">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  };

  const renderVideoBlock = (block: PortableTextBlock, index: number) => {
    if (!block.url) return null;

    return (
      <div key={block._key || index} className="my-8">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-[var(--deep)]">
          <video
            src={block.url}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        {block.caption && (
          <p className="mt-3 text-sm text-center text-[var(--muted)] italic">
            {block.caption}
          </p>
        )}
      </div>
    );
  };

  // Wrap list items in ul tags
  const wrappedBlocks: React.ReactNode[] = [];
  let currentListItems: PortableTextBlock[] = [];

  blocks.forEach((block, index) => {
    if (block.listItem === 'bullet') {
      currentListItems.push(block);
    } else {
      // Flush any accumulated list items
      if (currentListItems.length > 0) {
        wrappedBlocks.push(
          <ul key={`list-${index}`} className="list-disc list-inside mb-4 ml-4 space-y-2">
            {currentListItems.map((item, i) => renderBlock(item, i))}
          </ul>
        );
        currentListItems = [];
      }
      wrappedBlocks.push(renderBlock(block, index));
    }
  });

  // Flush remaining list items
  if (currentListItems.length > 0) {
    wrappedBlocks.push(
      <ul key="list-final" className="list-disc list-inside mb-4 ml-4 space-y-2">
        {currentListItems.map((item, i) => renderBlock(item, i))}
      </ul>
    );
  }

  return (
    <div className={`portable-text ${className}`}>
      {wrappedBlocks}
    </div>
  );
}
