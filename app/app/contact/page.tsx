"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa6";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Thank you for your message! We'll get back to you within 24 hours.");
    // Reset form
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
      <Navbar />

      {/* Hero Section */}
      <section className="section-shell" style={{ background: "var(--bg)", paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto" }}>
          <div className="eyebrow light" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-90"
                style={{
                  boxShadow: "0 0 12px rgba(245, 166, 35, 0.8)",
                }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full bg-amber-400"
                style={{
                  boxShadow: "0 0 10px #f5a623, 0 0 20px rgba(245, 166, 35, 0.9), 0 0 30px rgba(245, 166, 35, 0.6)",
                }}
              />
            </span>
            Get In Touch
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "700", color: "var(--ink)", marginBottom: "1.5rem", lineHeight: "1.2" }}>
            Let&apos;s Power Your Future
          </h1>
          <p style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--muted)", maxWidth: "42rem", margin: "0 auto" }}>
            Whether you need a free energy audit, want to discuss a solar project, or have questions about our services, we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Form + Info Grid */}
      <section className="section-shell" style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>

            {/* Contact Form */}
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: "700", color: "var(--ink)", marginBottom: "1rem" }}>
                Send Us a Message
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--muted)", marginBottom: "2rem", lineHeight: "1.6" }}>
                Fill out the form below and our team will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <label htmlFor="name" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "var(--ink)", marginBottom: "0.5rem" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.875rem 1rem",
                      fontSize: "1rem",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      background: "var(--panel)",
                      color: "var(--ink)",
                      transition: "all 0.2s"
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "var(--ink)", marginBottom: "0.5rem" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.875rem 1rem",
                      fontSize: "1rem",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      background: "var(--panel)",
                      color: "var(--ink)",
                      transition: "all 0.2s"
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "var(--ink)", marginBottom: "0.5rem" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.875rem 1rem",
                      fontSize: "1rem",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      background: "var(--panel)",
                      color: "var(--ink)",
                      transition: "all 0.2s"
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", color: "var(--ink)", marginBottom: "0.5rem" }}>
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: "100%",
                      padding: "0.875rem 1rem",
                      fontSize: "1rem",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      background: "var(--panel)",
                      color: "var(--ink)",
                      resize: "vertical",
                      fontFamily: "inherit",
                      lineHeight: "1.6"
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="button button-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Send Message
                </button>

                {status && (
                  <div style={{
                    padding: "1rem",
                    background: "rgba(16, 185, 129, 0.1)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    borderRadius: "8px",
                    color: "#059669",
                    fontSize: "0.875rem",
                    textAlign: "center"
                  }}>
                    {status}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <h2 style={{ fontSize: "1.75rem", fontWeight: "700", color: "var(--ink)", marginBottom: "2rem" }}>
                  Contact Information
                </h2>
              </div>

              {/* Office Location */}
              <div className="trust-card" style={{ padding: "2rem" }}>
                <div className="icon-wrap" style={{ marginBottom: "1rem" }}>
                  <HiOutlineMapPin size={24} color="var(--deep-2)" />
                </div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: "700", color: "var(--ink)", marginBottom: "0.75rem" }}>
                  Lagos Office
                </h3>
                <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "var(--muted)" }}>
                  11 Bassie Ogamba Street,<br />
                  off Adeniran Ogunsanya Street,<br />
                  Surulere, Lagos
                </p>
              </div>

              {/* Email */}
              <div className="trust-card" style={{ padding: "2rem" }}>
                <div className="icon-wrap" style={{ marginBottom: "1rem" }}>
                  <HiOutlineEnvelope size={24} color="var(--deep-2)" />
                </div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: "700", color: "var(--ink)", marginBottom: "0.75rem" }}>
                  Email Us
                </h3>
                <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "var(--muted)" }}>
                  <a href="mailto:info@mardysevgr.com" style={{ color: "var(--deep-2)", textDecoration: "none" }}>
                    info@mardysevgr.com
                  </a>
                  <br />
                  <a href="mailto:sales@mardysevgr.com" style={{ color: "var(--deep-2)", textDecoration: "none" }}>
                    sales@mardysevgr.com
                  </a>
                </p>
              </div>

              {/* Phone */}
              <div className="trust-card" style={{ padding: "2rem" }}>
                <div className="icon-wrap" style={{ marginBottom: "1rem" }}>
                  <HiOutlinePhone size={24} color="var(--deep-2)" />
                </div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: "700", color: "var(--ink)", marginBottom: "0.75rem" }}>
                  Call Us
                </h3>
                <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "var(--muted)" }}>
                  <a href="tel:+2347030345373" style={{ color: "var(--deep-2)", textDecoration: "none" }}>
                    +234 703 034 5373
                  </a>
                  <br />
                  <a href="tel:+2349031311091" style={{ color: "var(--deep-2)", textDecoration: "none" }}>
                    +234 903 131 1091
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section-shell" style={{ background: "var(--bg)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "700", color: "var(--ink)", marginBottom: "1rem" }}>
            Business Hours
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "var(--muted)", marginBottom: "2rem" }}>
            Monday - Friday: 8:00 AM - 6:00 PM<br />
            Saturday: 9:00 AM - 2:00 PM<br />
            Sunday: Closed
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--muted)", fontStyle: "italic" }}>
            For urgent matters outside business hours, please send us an email and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Footer */}
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
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/company/mardysev-solar/" aria-label="Mardysev Solar on LinkedIn" title="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/mardysev_solar?igsh=MmViczRpaDBjZjVr" aria-label="Mardysev Solar on Instagram" title="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@Mardysevsolarlimited" aria-label="Mardysev Solar on YouTube" title="YouTube">
                <FaYoutube />
              </a>
              <a href="https://www.tiktok.com/@mardysevsolarsolu?_t=ZM-8xWwN1vCHjB&_r=1" aria-label="Mardysev Solar on TikTok" title="TikTok">
                <FaTiktok />
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
