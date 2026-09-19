import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import {
  HiOutlineNewspaper,
  HiOutlineDocumentText,
  HiOutlineCalendar
} from "react-icons/hi2";

const blogPosts = [
  {
    id: 1,
    title: "Types of Solar Panels We Offer at Mardysev Solar",
    date: "July 21, 2025",
    excerpt: "Not all solar panels are created equal. At Mardysev Solar Limited, we supply and install top-quality solar panels",
    image: "/images/blog/solar-panel-types.jpg"
  },
  {
    id: 2,
    title: "Our Process: From Solar Consultation to Installation",
    date: "July 21, 2025",
    excerpt: "Our Process: From Solar Consultation to Installation solar consultation Nigeria, solar process flow, how solar works",
    image: "/images/blog/consultation-process.jpg"
  },
  {
    id: 3,
    title: "What to Expect During a Solar Panel Installation",
    date: "July 19, 2025",
    excerpt: "Many people are interested in switching to solar but aren't sure what the process looks like. At Mardysev Solar",
    image: "/images/blog/installation-process.jpg"
  },
  {
    id: 4,
    title: "How to Calculate Your Solar Power Needs",
    date: "July 18, 2025",
    excerpt: "How to Calculate Your Solar Power Needs solar power calculator, solar load estimation Nigeria, what size solar do I need",
    image: "/images/blog/power-calculation.jpg"
  },
  {
    id: 5,
    title: "Is Solar Energy a Good Investment? Here's the ROI",
    date: "July 18, 2025",
    excerpt: "When you invest in solar, you're not just cutting costs – you're building a long-term asset that adds value",
    image: "/images/blog/solar-roi.jpg"
  },
  {
    id: 6,
    title: "How Much Can You Save by Switching to Solar in Nigeria?",
    date: "July 18, 2025",
    excerpt: "If you're spending ₦20,000–₦50,000 or more on PHCN bills or diesel every month, switching to solar could drastically reduce",
    image: "/images/blog/solar-savings.jpg"
  },
  {
    id: 7,
    title: "How Solar Panels Convert Sunlight into Electricity",
    date: "July 18, 2025",
    excerpt: "Ever wondered how a flat panel can power your TV, fridge, or AC? The secret lies in a process called the",
    image: "/images/blog/solar-conversion.jpg"
  },
  {
    id: 8,
    title: "The Difference Between On-Grid, Off-Grid, and Hybrid Solar Systems",
    date: "July 18, 2025",
    excerpt: "Not all solar systems are created equal. At Mardysev Solar, we offer on-grid, off-grid, and hybrid solar solutions",
    image: "/images/blog/solar-systems.jpg"
  },
  {
    id: 9,
    title: "How Solar Energy Works: A Beginner's Guide",
    date: "July 18, 2025",
    excerpt: "Solar energy is one of the cleanest, most abundant sources of power on the planet. But how exactly does it work?",
    image: "/images/blog/solar-guide.jpg"
  },
];

export const metadata = {
  title: "Blog | Mardysev Solar Limited",
  description: "Read the latest insights, guides, and news about solar energy solutions in Nigeria.",
};

export default function BlogPage() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <Link href="/" className="brand">
            <Image src="/images/mardeysev-logo 1.png" alt="Mardysev Solar Limited" width={40} height={40} />
            Mardysev Solar Limited
          </Link>
          <nav className="nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/projects">Projects</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </nav>
          <a href="/contact" className="button button-primary">Get a free quote</a>
        </div>
      </header>

      <section className="hero section-shell">
        <div className="container hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" />Blog & Insights</div>
          <h1>Solar Energy Knowledge Hub</h1>
          <p>Expert advice, installation guides, and insights about solar energy solutions in Nigeria.</p>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <div className="section-heading center">
            <div className="section-tag">Latest Articles</div>
            <h2>Learn More About Solar Energy</h2>
            <p>From installation guides to cost savings, we cover everything you need to know.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
            {blogPosts.map((post) => (
              <article key={post.id} className="service-card" style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ position: 'relative', width: '100%', height: '220px', background: 'var(--deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)' }}>
                  <HiOutlineNewspaper style={{ width: '60px', height: '60px' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gold)', marginBottom: '0.75rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <HiOutlineCalendar style={{ fontSize: '1rem' }} />
                    {post.date}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                    {post.title}
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {post.excerpt}
                  </p>
                  <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: 'var(--deep-2)', fontWeight: '700', fontSize: '0.9rem' }}>
                    <HiOutlineDocumentText style={{ fontSize: '1.1rem' }} />
                    Read more →
                  </a>
                </div>
              </article>
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
            <p>Lagos Office: 11 Bassie Ogamba Street, off Adeniran Ogunsanya Street, Surulere, Lagos</p>
            <p>Enugu Office: Arizona House, No. 4 Old Abakiliki Road, opposite Trinity Estate, Thinkers Corner Emene, Enugu State.</p>
            <p>Email: <a href="mailto:info@mardysevgr.com">info@mardysevgr.com</a>, <a href="mailto:sales@mardysevgr.com">sales@mardysevgr.com</a></p>
            <p>Phone: <a href="tel:+2347030345373">+234 703 034 5373</a>, <a href="tel:+2349031311091">+234 903 131 1091</a></p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Mardysev Solar on Facebook" title="Facebook">
                <FaFacebookF aria-hidden="true" />
              </a>
              <a href="#" aria-label="Mardysev Solar on LinkedIn" title="LinkedIn">
                <FaLinkedinIn aria-hidden="true" />
              </a>
              <a href="#" aria-label="Mardysev Solar on Instagram" title="Instagram">
                <FaInstagram aria-hidden="true" />
              </a>
              <a href="#" aria-label="Mardysev Solar on YouTube" title="YouTube">
                <FaYoutube aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Mardysev Solar Limited</span>
          <span>Powering the Future with Clean Affordable and Reliable Energy</span>
        </div>
      </footer>
    </main>
  );
}
