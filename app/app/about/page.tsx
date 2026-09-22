import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import {
  HiOutlineShieldCheck,
  HiOutlineRocketLaunch,
  HiOutlineLightBulb,
  HiOutlineUserGroup
} from "react-icons/hi2";
import {
  IoFlashOutline,
  IoCashOutline,
  IoCheckmarkDoneCircleOutline,
  IoShieldCheckmarkOutline
} from "react-icons/io5";
import { PiHandCoins } from "react-icons/pi";
import { MdOutlineBolt } from "react-icons/md";

export const metadata = {
  title: "About | Mardysev Solar Limited",
  description: "We are a leading solar energy consulting firm dedicated to accelerating the transition to clean, renewable energy.",
};

const whyChooseUs = [
  { title: "24/7 Power, No Blackouts", description: "Never worry about Grid failures or fuel scarcity.", icon: <IoFlashOutline /> },
  { title: "Save up to 80% on Power Costs", description: "Slash your fuel and electricity bills.", icon: <IoCashOutline /> },
  { title: "Pay Small-Small", description: "Flexible monthly plans to fit your budget.", icon: <PiHandCoins /> },
  { title: "Fast Installation", description: "Up and running in as little as 48 hours.", icon: <MdOutlineBolt /> },
  { title: "Quick Response", description: "24/7 hours response", icon: <IoCheckmarkDoneCircleOutline /> },
  { title: "Durable, Low-Maintenance Systems", description: "No stress, no fumes, just power", icon: <IoShieldCheckmarkOutline /> },
];

const coreValues = [
  { title: "Quality and Variety", icon: <HiOutlineShieldCheck /> },
  { title: "Sustainable Practices", icon: <HiOutlineRocketLaunch /> },
  { title: "Expert Guidance", icon: <HiOutlineLightBulb /> },
  { title: "Experienced Team", icon: <HiOutlineUserGroup /> },
];

export default function AboutPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="section-shell" style={{ background: '#ffffff', padding: '5rem 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '3rem', paddingBottom: '3rem' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', border: '1px solid #e5e7eb', borderRadius: '999px', padding: '0.5rem 1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
            <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>About Us</span>
          </div>

          {/* Heading */}
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '700', color: '#111827', marginTop: '1.5rem', lineHeight: '1.2', letterSpacing: '-0.02em' }}>Powering Your Future with Solar</h1>

          {/* Introductory Text */}
          <div style={{ maxWidth: '48rem', margin: '1.5rem auto 0', textAlign: 'center' }}>
            <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              We are a leading solar energy consulting firm dedicated to accelerating the transition to clean, renewable energy. As global energy demands rise and the need for sustainable solutions becomes more urgent, we are committed to helping businesses, communities, and governments harness the power of the sun to create a brighter, more sustainable future.
            </p>
            <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: '1.7' }}>
              At Mardysev, we specialize in providing expert guidance across all stages of solar energy projects, from initial feasibility assessments and system design to installation oversight and ongoing maintenance. Our team of experienced engineers, project managers, and energy experts works closely with clients to develop customized solar solutions that meet their unique energy needs and sustainability goals.
            </p>
          </div>
        </div>

        {/* Banner with Features Grid */}
        <div style={{ maxWidth: '80rem', width: '100%', height: '400px', margin: '2rem auto 0', position: 'relative', borderRadius: '2rem', overflow: 'hidden', paddingLeft: '1rem', paddingRight: '1rem' }}>
          {/* Background Image */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src="/images/about_4.jpg"
              alt="Solar panel installations"
              fill
              style={{ objectFit: 'cover' }}
            />
            {/* Dark Overlay */}
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(59, 130, 246, 0.4) 100%)' }}></div>

            {/* Features Grid */}
            <div style={{ position: 'absolute', inset: '0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', alignItems: 'center', zIndex: '10', padding: '2rem', gap: '2rem' }}>
              {coreValues.map((value) => (
                <div key={value.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', color: 'white' }}>{value.icon}</div>
                  <p style={{ fontSize: '1rem', fontWeight: '500', color: 'white' }}>{value.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div className="section-heading center">
            <div className="section-tag">Our Promise</div>
            <h2>Your Trusted Partner in Solar Energy Innovation</h2>
            <p>Whether you&apos;re looking to reduce your carbon footprint, lower energy costs, or achieve energy independence, Mardysev is your trusted partner in solar energy innovation. Together, we can create a future powered by clean, affordable, and renewable energy.</p>
          </div>
          <div className="trust-grid">
            {coreValues.map((value) => (
              <div key={value.title} className="trust-card">
                <div className="icon-wrap">
                  <span style={{ fontSize: '1.5rem', color: 'var(--deep-2)' }}>
                    {value.icon}
                  </span>
                </div>
                <h3>{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <div className="section-heading center">
            <div className="section-tag">Why Choose Us</div>
            <h2>Reason For Choosing Us</h2>
          </div>
          <div className="benefits-grid">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="benefit-card">
                <div className="benefit-icon" aria-hidden="true" style={{ fontSize: '1.5rem' }}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="section-heading center">
            <div className="section-tag">The Mardysev Advantage</div>
            <h2>Superior Technology & Flexible Solutions</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>Real-time monitoring of all solutions including energy consumed, capacity utilization, system performance as well as geo-spatial view of all locations. Modern and superior systems that can integrate seamlessly with multiple energy sources.</p>
            </div>
            <div className="about-copy">
              <p>Reliable uptime resulting from strict adherence to maintenance and operational working requirements. Multiple partnerships with financing partners means we can structure a model that fits your financial strategy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell benefits-section">
        <div className="container">
          <div className="section-heading center">
            <div className="section-tag">Value Proposition</div>
            <h2>Energy Management & Utilization Consultancy</h2>
          </div>
          <div className="about-copy" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p>Mardysev Solar, a subsidiary of Mardysev Global Resources Limited, is an energy management and utilization consultancy firm. We help clients understand and use power efficiently and cost-effectively at business, home, sport, and apartment complexes. As a highly specialized organization that provides renewable energy solutions to its clientele, our success as an organization is stemmed from our ability to deliver to the customers&apos; expectations consistently.</p>
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
          <span>Engineered for Reliability & Sustainable Power</span>
        </div>
      </footer>
    </main>
  );
}
