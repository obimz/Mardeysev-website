import Navbar from "../components/Navbar";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa6";
import { HiOutlineHome, HiOutlineBuildingOffice, HiOutlineBuildingLibrary } from "react-icons/hi2";

const projects = [
  { label: "Residential", title: "Reliable home power", description: "Quiet, dependable solar and battery systems designed around daily household loads.", icon: <HiOutlineHome /> },
  { label: "Commercial", title: "Business continuity", description: "Power infrastructure that protects productivity, equipment and customer experience.", icon: <HiOutlineBuildingOffice /> },
  { label: "Institutional", title: "Resilient facilities", description: "Scalable clean energy systems for schools, offices, healthcare and public facilities.", icon: <HiOutlineBuildingLibrary /> },
];

export const metadata = { title: "Projects | Mardysev Solar Limited" };

export default function ProjectsPage() {
  return (
    <main className="site-shell">
      <Navbar />
      <section className="section-shell" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-heading">
            <div className="section-tag">Project focus</div>
            <h2>Solutions that scale with the people using them</h2>
            <p>We tailor each system to the site, the load and the business case.</p>
          </div>
          <div className="benefits-grid">
            {projects.map((project) => (
              <article className="benefit-card" key={project.label}>
                <div className="benefit-icon" aria-hidden="true" style={{ fontSize: '1.5rem' }}>
                  {project.icon}
                </div>
                <div className="section-tag">{project.label}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          <div className="stat-box">
            <strong>6.9 MW+</strong>
            <span>Green energy generated</span>
          </div>
          <div className="stat-box">
            <strong>5.3 MWp+</strong>
            <span>PV capacity installed</span>
          </div>
          <div className="stat-box">
            <strong>12 MWh+</strong>
            <span>Storage deployed</span>
          </div>
          <div className="stat-box">
            <strong>99.8%</strong>
            <span>System uptime target</span>
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
