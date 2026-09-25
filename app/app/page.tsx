"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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

function CountUpNumber({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);

        // Extract the numeric part
        const numStr = value.replace(/[^0-9.]/g, "");
        const num = parseFloat(numStr);
        const suffix = value.replace(/[0-9.]/g, "");

        // Animate from 0 to the target number
        let current = 0;
        const increment = num / 60; // 60 frames for smooth animation
        const timer = setInterval(() => {
          current += increment;
          if (current >= num) {
            setDisplayValue(num.toString() + suffix);
            clearInterval(timer);
          } else {
            // Format based on whether it's decimal or integer
            const formatted = num % 1 !== 0
              ? current.toFixed(1)
              : Math.floor(current).toString();
            setDisplayValue(formatted + suffix);
          }
        }, 16); // ~60fps

        observer.unobserve(entry.target);
      }
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <div ref={ref}>{displayValue}</div>;
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setStatus(""), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="site-shell">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <section className="hero section-shell" id="main-content">
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
              <a href="/about" className="button button-primary">
                Learn more
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
              <div className="visual-images-grid">
                <Image
                  src="/images/home-p/image1-home.jpg"
                  alt="Solar installation 1"
                  width={280}
                  height={280}
                  style={{ borderRadius: "12px", objectFit: "cover" }}
                />
                <Image
                  src="/images/home-p/image2-home.jpg"
                  alt="Solar installation 2"
                  width={280}
                  height={280}
                  style={{ borderRadius: "12px", objectFit: "cover" }}
                />
                <Image
                  src="/images/home-p/image3-p.jpg"
                  alt="Solar installation 3"
                  width={280}
                  height={280}
                  style={{ borderRadius: "12px", objectFit: "cover" }}
                />
                <Image
                  src="/images/home-p/image5-p (2).jpg"
                  alt="Solar installation 4 - Nigeria Energy Standards"
                  width={280}
                  height={280}
                  style={{ borderRadius: "12px", objectFit: "cover" }}
                />
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
              after-sales support, our team creates energy solutions tailored to every client&apos;s
              unique power needs and sustainability goals.
            </p>
            <div className="cert-pill">
              <PiCertificate style={{ fontSize: '1.2rem', marginRight: '0.5rem', verticalAlign: 'middle' }} />
              <span>Certified Company</span>
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
              <strong><CountUpNumber value={item.value} /></strong>
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
          <div className="partner-track">
            {[
              "/images/partners/partner1.png",
              "/images/partners/partner2.png",
              "/images/partners/Chair-centre.jpeg-150x150.jpg",
              "/images/partners/micmar.jpeg-150x150.jpg",
              "/images/partners/p3.png",
              "/images/partners/RAPID-1-1-150x150.png",
              "/images/partners/RAPID-4-150x150.png",
              "/images/partners/Happy-150x150.png",
              "/images/partners/hq720-150x150.jpg",
              "/images/partners/IMG-20260207-WA0012.jpg-3-150x150.jpeg",
              "/images/partners/White-and-Black-Modern-Handwritten-Signature-Brand-Logo-150x150.png",
              "/images/partners/White-and-Black-Modern-Handwritten-Signature-Brand-Logo-1-150x150.png",
              "/images/partners/Rivy-150x150.png",
              "/images/partners/Sahara-1-150x150.png",
              "/images/partners/Unique-J-150x150.png",
              "/images/partners/Adenola-150x150.png",
              "/images/partners/Avondale.jpeg-150x150.jpg",
              "/images/partners/Medplus.jpeg-150x150.jpg",
              "/images/partners/p5.png",
            ].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Partner ${index + 1}`}
                width={140}
                height={70}
                className="partner-logo"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-shell testimonials-shell">
        <div className="container">
          <div className="section-heading center light">
            <div className="section-tag light">Client Stories</div>
            <h2>What our clients say</h2>
            <p>Real experiences from homes and businesses we&apos;ve powered.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="testimonial-card">
                <div className="stars" aria-label="Five star review">
                  ★★★★★
                </div>
                <p>&quot;{item.quote}&quot;</p>
                <cite>
                  - {item.name} <span>· {item.location}</span>
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="container cta-grid">
          <div className="cta-copy">
            <div className="section-tag light">Let&apos;s Connect</div>
            <h2>About Your Next Project. Get In Touch</h2>
            <p>
              Tell us about your property and power needs. We&apos;ll recommend the right solar
              solution for your home or business with honest, expert guidance.
            </p>
            <a href="mailto:info@mardysevgr.com" className="button button-primary">
              Get a free quote
            </a>
          </div>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
            </div>
            <div>
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
            </div>
            <div>
              <label htmlFor="contact-phone">Phone</label>
              <input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" />
            </div>
            <div>
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your property and power needs..." required />
            </div>
            <button type="submit" className="button button-primary full-width">
              Send message
            </button>
            {status && <p style={{ color: "white", marginTop: "1rem" }}>{status}</p>}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
