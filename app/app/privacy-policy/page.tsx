import Navbar from "../components/Navbar";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa6";

export const metadata = {
  title: "Privacy Policy | Mardysev Solar Limited",
  description: "Learn how MARDYSEV SOLAR LIMITED collects, uses, protects, and shares your personal information in accordance with the Nigeria Data Protection Regulation (NDPR).",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="section-shell" style={{ paddingTop: '8rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1rem' }}>
          {/* Badge */}
          <div className="section-tag" style={{ marginBottom: '1rem' }}>Legal</div>

          {/* Title */}
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', fontWeight: '700', color: 'var(--deep)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Privacy Policy
          </h1>

          {/* Intro */}
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            At MARDYSEV SOLAR LIMITED, your privacy is important to us. This Privacy Policy outlines how we collect, use, protect, and share your personal information in accordance with the Nigeria Data Protection Regulation (NDPR) and global privacy standards.
          </p>

          {/* Content Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                1. Information We Collect
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: '0.75rem', lineHeight: '1.7' }}>
                We may collect the following information when you interact with us:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><strong>Personal Information:</strong> Name, phone number, email address, home/business address</li>
                <li><strong>Transactional Information:</strong> Payment details, invoices, order history</li>
                <li><strong>Technical Information:</strong> IP address, device details, browser type (when using our website)</li>
                <li><strong>Communication Records:</strong> Emails, WhatsApp messages, or phone call logs with our representatives</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                2. How We Use Your Information
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: '0.75rem', lineHeight: '1.7' }}>
                We use your information for the following purposes:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>To provide and install solar products and services</li>
                <li>To contact you regarding your orders, inquiries, or service updates</li>
                <li>To process payments and issue receipts/invoices</li>
                <li>To improve our services and customer experience</li>
                <li>To send promotional offers or updates (only with your consent)</li>
                <li>To comply with legal and regulatory obligations</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                3. How We Protect Your Data
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: '0.75rem', lineHeight: '1.7' }}>
                We use industry-standard security measures to protect your personal information:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Encrypted communications (where applicable)</li>
                <li>Secure storage of customer data</li>
                <li>Access controls to limit data exposure internally</li>
                <li>Staff trained on data privacy and confidentiality</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                4. Sharing Your Information
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: '0.75rem', lineHeight: '1.7' }}>
                We do not sell or trade your personal information. However, we may share data with:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Service providers or technicians working on your project (for installation or support)</li>
                <li>Financial/payment partners (to process your payments securely)</li>
                <li>Regulatory bodies, if legally required</li>
              </ul>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                All partners and vendors are expected to comply with our data protection standards.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                5. Your Rights
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: '0.75rem', lineHeight: '1.7' }}>
                You have the right to:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Request access to the personal data we hold about you</li>
                <li>Request corrections or updates to your information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request deletion of your data (subject to business and legal needs)</li>
              </ul>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                To exercise any of these rights, please contact us via the details below.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                6. Retention of Data
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: '0.75rem', lineHeight: '1.7' }}>
                We retain your data for as long as necessary to:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Complete the purpose for which it was collected</li>
                <li>Fulfill legal, tax, or contractual obligations</li>
                <li>Provide after-sales support or warranty services</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                7. Cookies and Website Tracking
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: '0.75rem', lineHeight: '1.7' }}>
                Our website may use cookies to:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Enhance user experience</li>
                <li>Monitor site traffic and analytics</li>
                <li>Customize content based on user behavior</li>
              </ul>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                You can choose to disable cookies in your browser settings.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                8. Changes to This Policy
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                We may update this policy occasionally to reflect changes in regulation or business practices. We will notify users of significant updates through our website or contact information.
              </p>
            </section>
          </div>
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
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
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
          <span>Engineered for Reliability &amp; Sustainable Power</span>
        </div>
      </footer>
    </main>
  );
}
