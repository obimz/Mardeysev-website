import Link from "next/link";
import Navbar from "../components/Navbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa6";
import { getAllBlogPosts, getAllCategories } from "@/lib/blog-data";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog | Mardysev Solar Limited",
  description: "Read the latest insights, guides, and news about solar energy solutions in Nigeria.",
};

export default async function BlogPage() {
  const allPosts = await getAllBlogPosts();
  const categories = await getAllCategories();

  // Prepend "All" to categories
  const allCategories = ["All", ...categories];

  // Fallback categories if none exist in CMS
  const defaultCategories = [
    "All",
    "Solar Panels",
    "Installation Guides",
    "Financial Insights",
    "System Types",
    "Projects"
  ];

  const finalCategories = categories.length > 0 ? allCategories : defaultCategories;

  return (
    <main className="site-shell">
      <Navbar />

      {/* Category Navigation & Blog Content */}
      <div style={{ paddingTop: "72px" }}>
        <BlogClient allPosts={allPosts} categories={finalCategories} />
      </div>

      {/* CTA Section */}
      <section className="section-shell" style={{ background: "var(--bg)" }}>
        <div className="container">
          <span className="section-tag">Get Started</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700", color: "var(--ink)", marginBottom: "1rem", lineHeight: "1.2" }}>
            Ready to switch to solar energy?
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--muted)", marginBottom: "2rem" }}>
            Contact us today for a free consultation and discover how much you can save.
          </p>
          <Link href="/contact" className="button button-primary">
            Request a consultation
          </Link>
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
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
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
