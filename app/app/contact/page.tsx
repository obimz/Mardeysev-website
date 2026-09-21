import Link from "next/link";
import Navbar from "../components/Navbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok, FaXTwitter } from "react-icons/fa6";

export const metadata = { title: "Contact | Mardysev Solar Limited" };

export default function ContactPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="hero section-shell">
        <div className="container hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" />Contact Us</div>
          <h1>Get In Touch</h1>
          <p>Any Question? Write Down And Send Us</p>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <div className="section-heading center">
            <div className="section-tag">Get In Touch</div>
            <h2>Main Office</h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>Lagos Office</h3>
              <p>11 Bassie Ogamba Street, off Adeniran Ogunsanya street, Surulere, Lagos</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>Enugu Office</h3>
              <p>Arizona House, No. 4 Old Abakiliki Road, opposite Trinity Estate, Thinkers Corner Emene, Enugu State.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3>Make a Call</h3>
              <p>
                <a href="tel:+2347030345373">+234 703 034 5373</a><br />
                <a href="tel:+2349031311091">+234 903 131 1091</a>
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 6l9 6 9-6" />
                </svg>
              </div>
              <h3>Send a Mail</h3>
              <p>
                <a href="mailto:info@mardysevgr.com">info@mardysevgr.com</a><br />
                <a href="mailto:sales@mardysevgr.com">sales@mardysevgr.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-grid">
          <div className="cta-copy">
            <div className="section-tag light">Let&apos;s Connect</div>
            <h2>Any Question? Write Down And Send Us</h2>
            <p>Share your details and our team will help you map the next practical step for your solar energy needs.</p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#f7f1e8', marginBottom: '0.75rem' }}>Follow Us</h4>
              <div className="social-links" style={{ justifyContent: 'flex-start' }}>
                <a href="https://web.facebook.com/profile.php?id=61562569504710" aria-label="Mardysev Solar on Facebook" title="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/company/mardysev-solar/" aria-label="Mardysev Solar on LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/mardysev_solar?igsh=MmViczRpaDBjZjVr" aria-label="Mardysev Solar on Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram aria-hidden="true" />
                </a>
                <a href="https://www.youtube.com/@Mardysevsolarlimited" aria-label="Mardysev Solar on YouTube" title="YouTube" target="_blank" rel="noopener noreferrer">
                  <FaYoutube aria-hidden="true" />
                </a>
                <a href="https://www.tiktok.com/@mardysevsolarsolu?_t=ZM-8xWwN1vCHjB&_r=1" aria-label="Mardysev Solar on TikTok" title="TikTok" target="_blank" rel="noopener noreferrer">
                  <FaTiktok aria-hidden="true" />
                </a>
                <a href="https://x.com/Mardysev_solar" aria-label="Mardysev Solar on X" title="X" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <form className="quote-form">
            <label>
              Name
              <input type="text" placeholder="Your full name" required />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Phone
              <input type="tel" placeholder="+234 XXX XXX XXXX" />
            </label>
            <label>
              Message
              <textarea placeholder="Tell us about your property and power needs..." rows={5} required />
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <input type="checkbox" required />
              <span>I accept the privacy policy</span>
            </label>
            <button type="submit" className="button button-primary full-width">Send message</button>
          </form>
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
              <a href="https://web.facebook.com/profile.php?id=61562569504710" aria-label="Mardysev Solar on Facebook" title="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/company/mardysev-solar/" aria-label="Mardysev Solar on LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/mardysev_solar?igsh=MmViczRpaDBjZjVr" aria-label="Mardysev Solar on Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram aria-hidden="true" />
              </a>
              <a href="https://www.youtube.com/@Mardysevsolarlimited" aria-label="Mardysev Solar on YouTube" title="YouTube" target="_blank" rel="noopener noreferrer">
                <FaYoutube aria-hidden="true" />
              </a>
              <a href="https://www.tiktok.com/@mardysevsolarsolu?_t=ZM-8xWwN1vCHjB&_r=1" aria-label="Mardysev Solar on TikTok" title="TikTok" target="_blank" rel="noopener noreferrer">
                <FaTiktok aria-hidden="true" />
              </a>
              <a href="https://x.com/Mardysev_solar" aria-label="Mardysev Solar on X" title="X" target="_blank" rel="noopener noreferrer">
                <FaXTwitter aria-hidden="true" />
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
