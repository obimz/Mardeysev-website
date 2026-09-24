import Navbar from "../components/Navbar";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa6";

export const metadata = {
  title: "Terms & Conditions | Mardysev Solar Limited",
  description: "Read the terms and conditions for MARDYSEV SOLAR LIMITED solar energy systems, including payment terms, warranty information, and service agreements.",
};

export default function TermsPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="section-shell" style={{ paddingTop: '8rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1rem' }}>
          {/* Badge */}
          <div className="section-tag" style={{ marginBottom: '1rem' }}>Legal</div>

          {/* Title */}
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', fontWeight: '700', color: 'var(--deep)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Terms and Conditions
          </h1>

          {/* Company Name */}
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            MARDYSEV SOLAR LIMITED
          </p>

          {/* Content Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                1. General
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                By engaging with MARDYSEV SOLAR LIMITED for the purchase, installation, or maintenance of solar energy systems, you agree to the following terms and conditions. These terms form a binding agreement between MARDYSEV SOLAR LIMITED (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) and the customer (&quot;you&quot;, &quot;your&quot;).
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                2. Quotation and Payment
              </h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>All quotations are valid for 14 days from the date of issue unless otherwise stated.</li>
                <li>A minimum deposit of 60% is required before any materials are procured or work begins.</li>
                <li>The remaining 40% balance is due immediately upon installation completion.</li>
                <li>All payments must be made via approved methods (bank transfer, POS, etc.) to our official account.</li>
                <li>Late payments may result in a delay in service or activation of the system.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                3. Installation
              </h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Installation will be carried out within 48–72 hours after receipt of deposit, subject to weather and site readiness.</li>
                <li>You are responsible for granting our technicians access to the property and providing necessary permissions.</li>
                <li>Any delays caused by lack of access or readiness may result in rescheduling.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                4. Warranty
              </h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>All solar systems come with a 5-year limited warranty covering manufacturer defects and installation faults.</li>
                <li>One (1) year of free maintenance is included with each complete system purchase.</li>
              </ul>
              <p style={{ color: 'var(--muted)', marginBottom: '0.75rem', lineHeight: '1.7' }}>
                Warranty does not cover:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Physical damage due to negligence or vandalism</li>
                <li>Unauthorized modifications or repairs</li>
                <li>Damage due to electrical surges, lightning, or natural disasters</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                5. Maintenance and Support
              </h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Maintenance services beyond the free 1-year period are available under a separate agreement.</li>
                <li>You may subscribe to annual maintenance plans for continued system health and efficiency.</li>
                <li>Emergency support is available within working hours: Mon–Sat, 9 AM – 6 PM.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                6. System Use
              </h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Our systems are designed based on your stated energy needs. Overloading the system may void the warranty.</li>
                <li>Any tampering or alteration of the system without our consent is strictly prohibited.</li>
                <li>Battery performance may vary depending on usage habits, load type, and ambient temperature.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                7. Ownership and Risk
              </h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Ownership of the equipment passes to the customer upon full payment.</li>
                <li>Risk of damage or loss passes to you upon delivery and installation.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                8. Limitation of Liability
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: '0.75rem', lineHeight: '1.7' }}>
                MARDYSEV SOLAR LIMITED is not liable for:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Any loss of income or business resulting from system downtime</li>
                <li>Any damage caused by misuse or negligence on the customer&apos;s part</li>
                <li>Indirect or consequential damages arising from use or inability to use the system</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                9. Cancellation and Refund Policy
              </h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Orders cancelled before materials are purchased are eligible for a refund minus administrative charges.</li>
                <li>Once equipment is procured or installation has commenced, refunds are no longer applicable.</li>
                <li>Any agreed refund will be processed within 14 working days.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                10. Force Majeure
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                We are not responsible for any delays or failures due to events beyond our control, such as strikes, accidents, acts of God, or government restrictions.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                11. Governing Law
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes will be settled under Nigerian jurisdiction.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep)', marginBottom: '1rem' }}>
                12. Contact Us
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7', marginBottom: '0.75rem' }}>
                For questions or further information, please contact:
              </p>
              <div style={{ color: 'var(--muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p>📞 +234 703 034 5373 | +234 903 131 1091</p>
                <p>📧 mardysevsolar@gmail.com</p>
                <p>📍 Lagos: 11 Bassie Ogamba St, Off Adeniran Ogunsanya, Surulere</p>
              </div>
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
          <span>Engineered for Reliability &amp; Sustainable Power</span>
        </div>
      </footer>
    </main>
  );
}
