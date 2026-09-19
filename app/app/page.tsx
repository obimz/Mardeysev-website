"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import {
  MdOutlineCalendarMonth,
  MdOutlineBolt,
  MdOutlineBatteryChargingFull,
  MdOutlineSpeed
} from "react-icons/md";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineLightBulb,
  HiOutlineWrenchScrewdriver
} from "react-icons/hi2";
import {
  IoShieldCheckmarkOutline,
  IoCashOutline,
  IoFlashOutline,
  IoCheckmarkDoneCircleOutline
} from "react-icons/io5";
import {
  PiCertificate,
  PiSolarPanelBold,
  PiHandCoins
} from "react-icons/pi";
import { BsLightning } from "react-icons/bs";

const stats = [
  { value: "3+", label: "Years in business", icon: <MdOutlineCalendarMonth /> },
  { value: "6.9 MW+", label: "Green energy generated", icon: <BsLightning /> },
  { value: "5.3 MWp+", label: "Installed PV capacity", icon: <PiSolarPanelBold /> },
  { value: "12 MWh+", label: "Active storage systems", icon: <MdOutlineBatteryChargingFull /> },
];

const serviceCards = [
  {
    number: "01",
    title: "Energy Audits / Engagements",
    description:
      "Comprehensive site assessment and power analysis to identify the best solar solution for your property.",
    icon: <HiOutlineClipboardDocumentCheck />
  },
  {
    number: "02",
    title: "Strategy & Evaluation",
    description:
      "Custom design, financial planning, and equipment recommendations tailored to your energy goals and budget.",
    icon: <HiOutlineLightBulb />
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Professional installation, electrical integration, and commissioning by experienced solar engineers and technicians.",
    icon: <HiOutlineWrenchScrewdriver />
  },
  {
    number: "04",
    title: "Operations & Maintenance",
    description:
      "Ongoing monitoring and support to keep your system optimized, efficient, and dependable over time.",
    icon: <MdOutlineSpeed />
  },
];

const benefits = [
  {
    title: "24/7 power, no blackouts",
    description: "Never worry about grid failures or fuel scarcity again.",
    icon: <IoFlashOutline />
  },
  {
    title: "Save up to 80% on power costs",
    description: "Reduce fuel and electricity spend with smart solar solutions.",
    icon: <IoCashOutline />
  },
  {
    title: "Pay small-small",
    description: "Flexible monthly plans designed to fit your budget.",
    icon: <PiHandCoins />
  },
  {
    title: "Fast installation",
    description: "Be up and running in as little as 48 hours.",
    icon: <MdOutlineBolt />
  },
  {
    title: "Quick response",
    description: "Responsive support and immediate attention when it matters.",
    icon: <IoCheckmarkDoneCircleOutline />
  },
  {
    title: "Durable, low-maintenance systems",
    description: "Reliable performance without the stress, fumes, or noise.",
    icon: <IoShieldCheckmarkOutline />
  },
];

const testimonials = [
  {
    name: "Mr. Adewale",
    location: "Lagos",
    quote:
      "Switching to solar with Mardysev Solar Limited was the best decision for my home. The team was professional, transparent, and kept me informed throughout the process.",
  },
  {
    name: "Mrs. Chidinma",
    location: "Abuja",
    quote:
      "The installation of our 10kVA system was smooth and stress-free. The engineers were punctual, respectful, and the after-sales support is top-notch.",
  },
  {
    name: "Engr. Sola",
    location: "Ikeja",
    quote:
      "Before Mardysev Solar, we relied on a generator 24/7. Now we enjoy constant power without the noise and fumes, and our business runs smoothly.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#" className="brand" aria-label="Mardysev Solar Limited home">
            <Image src="/images/mardeysev-logo 1.png" alt="Mardysev Solar Limited" width={40} height={40} />
            <span>Mardysev Solar Limited</span>
          </a>

          <nav className="nav" aria-label="Main navigation">
            <a href="#">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/projects">Projects</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </nav>

          <a href="#contact" className="button button-primary">
            Get a free quote
          </a>
        </div>
      </header>

      <section className="hero section-shell">
        <Image
          src="/images/solarspace2.jpg"
          alt="Solar panels generating clean energy under a bright sky"
          fill
          priority
          sizes="100vw"
          className="hero-background-image"
        />
        <div className="hero-background-overlay" />
        <div className="container hero-grid">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-copy"
          >
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Clean Energy Infrastructure & Consulting
            </div>
            <h1>Powering the Future with Clean, Affordable and Reliable Energy</h1>
            <p>
              Solar consulting, system design, installation and long-term support for homes,
              businesses and institutions across Nigeria.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">
                Get a free assessment
              </a>
              <a href="#projects" className="button button-secondary">
                See our work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Company benefits">
        <div className="container trust-grid">
          <div className="trust-card">
            <div className="icon-wrap">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2 5 5v7c0 5.2 3.3 9.5 7 11 3.7-1.5 7-5.8 7-11V5l-7-3Z" />
                <path d="m9 12 2 2 4-5" />
              </svg>
            </div>
            <h3>Five Year Warranty</h3>
            <p>Full coverage for installation quality and system reliability.</p>
          </div>

          <div className="trust-card">
            <div className="icon-wrap">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path d="M8 7h8M8 11h8M8 15h5" />
              </svg>
            </div>
            <h3>Free Energy Audit</h3>
            <p>We assess your site and energy use before recommending a solution.</p>
          </div>

          <div className="trust-card">
            <div className="icon-wrap">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 12h16" />
                <path d="M12 4v16" />
                <path d="M7 7v10M17 7v10" />
              </svg>
            </div>
            <h3>Spread Payment Options</h3>
            <p>Flexible financing that keeps clean power affordable and accessible.</p>
          </div>

          <div className="trust-card">
            <div className="icon-wrap">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4l3 2" />
              </svg>
            </div>
            <h3>Fast Installation</h3>
            <p>Most systems are installed and commissioned within 48 hours.</p>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="visual-card">
              <div className="visual-grid" aria-hidden="true" />
              <div className="visual-illustration" aria-hidden="true">
                <span className="grid-square" />
                <span className="grid-square" />
                <span className="grid-square" />
                <span className="grid-square" />
              </div>
              <div className="floating-badge">
                <span className="floating-check">✓</span>
                <div>
                  <strong>Nigeria Energy Standards</strong>
                  <small>Tier-1 Components</small>
                </div>
              </div>
            </div>
          </div>

          <div className="about-copy">
            <div className="section-tag">About Company</div>
            <h2>Leading Solar Energy Consulting Firm</h2>
            <p>
              Mardysev Solar Limited is dedicated to accelerating the transition to clean,
              renewable energy. We help homes, businesses and institutions design and deploy
              solar systems that are practical, efficient and built for long-term value.
            </p>
            <p>
              From initial feasibility checks and technical strategy to installation oversight and
              after-sales support, our team creates energy solutions tailored to every client’s
              unique power needs and sustainability goals.
            </p>
            <div className="cert-pill">
              <PiCertificate style={{ fontSize: '1.2rem', marginRight: '0.5rem', verticalAlign: 'middle' }} />
              Certified Company
            </div>
            <a href="#contact" className="text-link">
              Learn more about us →
            </a>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Company results">
        <div className="container stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-box">
              <div style={{ fontSize: '1.8rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                {item.icon}
              </div>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section-shell">
        <div className="container">
          <div className="section-heading">
            <div className="section-tag">Solutions & Services</div>
            <h2>Efficient and Resilient Energy Solutions</h2>
            <p>Tailored renewable energy systems for homes, businesses and institutions.</p>
          </div>

          <div className="service-grid">
            {serviceCards.map((card) => (
              <motion.article
                key={card.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className="service-card"
              >
                <div className="service-topline">
                  <span className="service-number">{card.number}</span>
                  <span className="service-icon" aria-hidden="true" style={{ fontSize: '1.3rem', color: 'var(--deep-2)' }}>
                    {card.icon}
                  </span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell benefits-section">
        <div className="container">
          <div className="section-heading center">
            <div className="section-tag">Value Proposition</div>
            <h2>Why choose Mardysev Solar</h2>
            <p>Clear value, trusted delivery and dependable performance.</p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="benefit-card">
                <div className="benefit-icon" aria-hidden="true" style={{ fontSize: '1.5rem' }}>
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="partners-section">
        <div className="container">
          <div className="section-heading center">
            <div className="section-tag">Ecosystem</div>
            <h2>Our Partners</h2>
          </div>
        </div>
        <div className="partner-rail" aria-label="Partner logos">
          {Array.from({ length: 2 }).map((_, rowIndex) => (
            <div key={rowIndex} className="partner-track">
              {[
                "Partner 1",
                "Partner 2",
                "Partner 3",
                "Partner 4",
                "Partner 5",
                "Partner 6",
                "Partner 7",
                "Partner 8",
              ].map((partner) => (
                <span key={`${rowIndex}-${partner}`} className="partner-logo">
                  {partner}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="section-shell testimonials-shell">
        <div className="container">
          <div className="section-heading center light">
            <div className="section-tag light">Client Stories</div>
            <h2>What our clients say</h2>
            <p>Real experiences from homes and businesses we’ve powered.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="testimonial-card">
                <div className="stars" aria-label="Five star review">
                  ★★★★★
                </div>
                <p>“{item.quote}”</p>
                <cite>
                  — {item.name} <span>· {item.location}</span>
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="container cta-grid">
          <div className="cta-copy">
            <div className="section-tag light">Let’s Connect</div>
            <h2>About Your Next Project. Get In Touch</h2>
            <p>
              Tell us about your property and power needs. We’ll recommend the right solar
              solution for your home or business with honest, expert guidance.
            </p>
            <a href="mailto:info@mardysevgr.com" className="button button-primary">
              Get a free quote
            </a>
          </div>

          <form className="quote-form">
            <label>
              Name
              <input type="text" placeholder="Your full name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea placeholder="Tell us about your property and power needs..." />
            </label>
            <button type="submit" className="button button-primary full-width">
              Send message
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>Mardysev Solar Limited</h3>
            <p>
              Lagos Office: 11 Bassie Ogamba Street, off Adeniran Ogunsanya Street, Surulere,
              Lagos
            </p>
            <p>
              Enugu Office: Arizona House, No. 4 Old Abakiliki Road, Thinkers Corner, Emene,
              Enugu State
            </p>
            <p>
              Email: <a href="mailto:info@mardysevgr.com">info@mardysevgr.com</a>
            </p>
            <p>
              Phone: <a href="tel:+2347030345373">+234 703 034 5373</a>
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
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
