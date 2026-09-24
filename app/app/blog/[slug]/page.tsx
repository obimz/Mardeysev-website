import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import PortableTextRenderer from "../../components/PortableTextRenderer";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa6";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineArrowLeft
} from "react-icons/hi2";
import { getBlogPostBySlug, formatBlogDate, calculateReadingTime } from "@/lib/blog-data";
import { urlFor } from "@/lib/sanity";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Mardysev Solar Limited"
    };
  }

  return {
    title: `${post.title} | Mardysev Solar Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = post.estimatedReadingTime || calculateReadingTime(post.body);

  return (
    <main className="site-shell">
      <Navbar />

      {/* Article Header */}
      <article className="section-shell" style={{ paddingTop: '8rem' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          {/* Back to Blog Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--deep-2)] font-semibold text-sm mb-8 hover:text-[var(--gold)] transition-colors"
          >
            <HiOutlineArrowLeft className="text-lg" />
            Back to all articles
          </Link>

          {/* Article Meta */}
          <div className="flex items-center gap-4 text-sm text-[var(--muted)] mb-6">
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <HiOutlineCalendar className="text-base text-[var(--gold)]" />
              {formatBlogDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <HiOutlineClock className="text-base text-[var(--gold)]" />
              {readingTime} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--deep)] mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-[var(--muted)] leading-relaxed mb-10">
            {post.excerpt}
          </p>

          {/* Featured Image */}
          {post.mainImage?.asset ? (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-[var(--shadow)]">
              <Image
                src={urlFor(post.mainImage.asset).width(1600).height(900).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1000px) 100vw, 1000px"
                priority
              />
            </div>
          ) : (
            <div className="aspect-[16/9] rounded-2xl mb-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <svg className="w-20 h-20 mx-auto mb-4 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
                <p className="text-lg font-semibold opacity-70">Mardysev Solar Blog</p>
              </div>
            </div>
          )}

          {/* Article Body with Tailwind Typography */}
          <div className="prose prose-lg mx-auto max-w-none">
            <div className="text-[var(--deep)]" style={{
              fontSize: '1.125rem',
              lineHeight: '1.8'
            }}>
              <PortableTextRenderer
                blocks={post.body}
                className="article-content"
              />
            </div>
          </div>

          {/* Author Info (if available) */}
          {post.author && (
            <div className="mt-16 pt-8 border-t border-[var(--border)]">
              <div className="flex items-center gap-4">
                {post.author.avatar && (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="text-sm text-[var(--muted)] mb-1">Written by</p>
                  <p className="text-lg font-bold text-[var(--deep)]">{post.author.name}</p>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 bg-[var(--gold-soft)] border border-[var(--gold)] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[var(--deep)] mb-3">
              Ready to start your solar journey?
            </h3>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto">
              Get a free energy audit and discover how much you can save with solar power.
            </p>
            <Link
              href="/contact"
              className="button button-primary inline-flex items-center justify-center"
            >
              Request a Free Consultation
            </Link>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--deep-2)] font-bold hover:text-[var(--gold)] transition-colors"
            >
              <HiOutlineArrowLeft />
              View all articles
            </Link>
          </div>
        </div>
      </article>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>Mardysev Solar Limited</h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
              <strong>Lagos Office</strong><br />
              11 Bassie Ogamba Street,<br />
              off Adeniran Ogunsanya Street,<br />
              Surulere, Lagos
            </p>
            <p style={{ lineHeight: '1.8' }}>
              Email: <a href="mailto:info@mardysevgr.com">info@mardysevgr.com</a>
            </p>
            <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
              Phone: <a href="tel:+2347030345373">+234 703 034 5373</a>
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/tos">Terms &amp; Conditions</Link></li>
              <li><a href="/services#faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://web.facebook.com/profile.php?id=61562569504710" aria-label="Mardysev Solar on Facebook" title="Facebook">
                <FaFacebookF aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/company/mardysev-solar/" aria-label="Mardysev Solar on LinkedIn" title="LinkedIn">
                <FaLinkedinIn aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/mardysev_solar?igsh=MmViczRpaDBjZjVr" aria-label="Mardysev Solar on Instagram" title="Instagram">
                <FaInstagram aria-hidden="true" />
              </a>
              <a href="https://www.youtube.com/@Mardysevsolarlimited" aria-label="Mardysev Solar on YouTube" title="YouTube">
                <FaYoutube aria-hidden="true" />
              </a>
              <a href="https://www.tiktok.com/@mardysevsolarsolu?_t=ZM-8xWwN1vCHjB&_r=1" aria-label="Mardysev Solar on TikTok" title="TikTok">
                <FaTiktok aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Mardysev Solar Limited</span>
          <span>Engineered for Reliability & Sustainable Power</span>
        </div>
      </footer>
    </main>
  );
}
