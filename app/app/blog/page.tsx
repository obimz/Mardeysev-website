import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa6";
import {
  HiOutlineNewspaper,
  HiOutlineCalendar,
  HiOutlineClock
} from "react-icons/hi2";
import { getAllBlogPosts, formatBlogDate } from "@/lib/blog-data";
import { urlFor } from "@/lib/sanity";
import type { BlogPost } from "@/lib/blog-data";

export const metadata = {
  title: "Blog | Mardysev Solar Limited",
  description: "Read the latest insights, guides, and news about solar energy solutions in Nigeria.",
};

export default async function BlogPage() {
  const allPosts = await getAllBlogPosts();

  // Extract featured hero post (first/latest post)
  const heroPost = allPosts[0];

  // Remaining posts for the grid
  const gridPosts = allPosts.slice(1);

  return (
    <main className="site-shell">
      <Navbar />

      <section className="section-shell" style={{ paddingTop: '8rem' }}>
        <div className="container">
          {/* Preserved Header Section */}
          <div className="section-heading center">
            <div className="section-tag">Latest Articles</div>
            <h2>Learn More About Solar Energy</h2>
            <p>From installation guides to cost savings, we cover everything you need to know.</p>
          </div>

          {/* Featured Hero Post */}
          {heroPost && <FeaturedHeroPost post={heroPost} />}

          {/* Secondary Bento/Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {gridPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-copy">
          <div className="section-tag light">Get Started</div>
          <h2>Ready to switch to solar energy?</h2>
          <p>Contact us today for a free consultation and discover how much you can save.</p>
          <a href="/contact" className="button button-primary">Request a consultation</a>
        </div>
      </section>

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
              <li><a href="#">FAQ</a></li>
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

// Featured Hero Post Component
function FeaturedHeroPost({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <article className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 bg-white border border-[var(--border)] rounded-3xl overflow-hidden shadow-[var(--shadow)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Image Side - 60% width on desktop */}
        <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[480px]">
          <Image
            src={urlFor(post.mainImage.asset).width(1200).height(800).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gold)] text-[var(--deep)] font-bold text-xs uppercase tracking-wider rounded-full">
              <HiOutlineNewspaper className="text-base" />
              Featured
            </span>
          </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center p-8 lg:p-12 lg:pr-16">
          <div className="flex items-center gap-4 text-sm text-[var(--muted)] mb-4">
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <HiOutlineCalendar className="text-base text-[var(--gold)]" />
              {formatBlogDate(post.publishedAt)}
            </span>
            {post.estimatedReadingTime && (
              <span className="inline-flex items-center gap-1.5">
                <HiOutlineClock className="text-base text-[var(--gold)]" />
                {post.estimatedReadingTime} min read
              </span>
            )}
          </div>

          <h3 className="text-3xl lg:text-4xl font-bold text-[var(--deep)] mb-4 leading-tight hover:text-[var(--deep-2)] transition-colors">
            {post.title}
          </h3>

          <p className="text-[var(--muted)] text-lg leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="inline-flex items-center gap-2 text-[var(--deep-2)] font-bold text-base group">
            Read full article
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// Blog Card Component for Grid
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden shadow-[var(--shadow)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[4/3]">
          <Image
            src={urlFor(post.mainImage.asset).width(800).height(600).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-3 text-xs text-[var(--muted)] mb-3">
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <HiOutlineCalendar className="text-sm text-[var(--gold)]" />
              {formatBlogDate(post.publishedAt)}
            </span>
            {post.estimatedReadingTime && (
              <span className="inline-flex items-center gap-1.5">
                <HiOutlineClock className="text-sm text-[var(--gold)]" />
                {post.estimatedReadingTime} min
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-[var(--deep)] mb-3 leading-tight group-hover:text-[var(--deep-2)] transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          <div className="inline-flex items-center gap-2 text-[var(--deep-2)] font-bold text-sm mt-auto">
            Read more
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
