import Link from "next/link";
import Navbar from "../components/Navbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineLightBulb,
  HiOutlineWrenchScrewdriver,
  HiOutlineQuestionMarkCircle
} from "react-icons/hi2";
import { MdOutlineSpeed } from "react-icons/md";

const services = [
  {
    number: "01",
    title: "Energy Audits/Engagements",
    description: "Our work starts with your energy needs and goals. We begin with developing insight on the best way to serve the customer by engaging you on those needs through partnership and empathetic listening to fully understand you. We then see how what you are aiming for matches an energy mix that is both technically and economically feasible for you. In the end, you get a plan, a consumption documentation and guide, and/or an exhaustive reportage of what energy setup would serve your needs efficiently.",
    features: ["Energy Planning", "Managed Consumption", "Reporting", "Advisory & Insights"],
    icon: <HiOutlineClipboardDocumentCheck />
  },
  {
    number: "02",
    title: "Strategy & Evaluation",
    description: "Following the customer's approval, an implementation plan is put together. Evaluation typically aligns the defined work modules with resources, tasks, and deliverables to ensure a successful deployment. Project implementation timelines are customer and construction dependent. Your toolkit is replete with our thinking behind the recommendations, best value tactics, implementation plans, and resource needs, including sourcing and deployment. Our strategy puts you in full control of your energy consumption.",
    features: ["Energy Roadmapping", "Research & Development", "Resource Sourcing", "Solution Architecting"],
    icon: <HiOutlineLightBulb />
  },
  {
    number: "03",
    title: "Execution",
    description: "We translate the customer's desire into defined work modules and create corresponding plans detailing the equipment to be deployed. Customer involvement is pivotal for all reviews, feedback, and final approval to implement. We work either with our team of electrical and power engineering experts. Our installations also follow strategy and quality assurance policies which we manage in-house so that your system can have the quality and integrity to work without any hassle or headache to you.",
    features: ["Installations", "Quality Assurance & Control", "Ongoing Support"],
    icon: <HiOutlineWrenchScrewdriver />
  },
  {
    number: "04",
    title: "Operations/Maintenance",
    description: "We stay with you as you interact with your product ensuring that you continuously derive value for your investment. Routine Service and care are built into our policies to ensure the products' longevity and to retain our customers for life. Our goal is to ensure that customer is not only totally satisfied with our finished work, but becomes our partners for life.",
    features: ["Routine Maintenance", "Corrective Maintenance", "Preventive Maintenance"],
    icon: <MdOutlineSpeed />
  },
];

const faqs = [
  {
    question: "What services does Mardysev Solar Limited provide?",
    answer: "We specialize in solar energy solutions for residential, commercial, and industrial purposes. Our services include: Solar power system design and installation, Battery backup systems, Inverter installation, System upgrades and maintenance, Energy audits and consultations."
  },
  {
    question: "Why should I choose solar energy?",
    answer: "Solar energy is a renewable power option that lowers utility costs, decreases environmental emissions, needs little upkeep, maintains power during grid failures, and raises property value."
  },
  {
    question: "What makes Mardysev Solar different?",
    answer: "Quick Installation (within 48 hours), Flexible payment plans tailored to your budget, Premium-grade components from trusted brands, 5-year warranty with 1-year free maintenance, and Excellent after-sales support."
  },
  {
    question: "How reliable is solar power in Nigeria?",
    answer: "Solar power takes advantage of consistent regional sunlight, paired with battery storage designed to provide 24/7 electricity even at night or during cloudy days."
  },
];

export const metadata = { title: "Services | Mardysev Solar Limited" };

export default function ServicesPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="section-shell" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-heading center">
            <div className="section-tag">What we do</div>
            <h2>From assessment to dependable output</h2>
            <p>Every service is shaped around measurable performance and your operating reality.</p>
          </div>

          {services.map((service, index) => (
            <div key={service.number} className="about-grid" style={{ marginBottom: '4rem', gap: '3rem', alignItems: 'start' }}>
              {index % 2 === 0 ? (
                <>
                  <div className="about-copy">
                    <div className="section-tag" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>{service.icon}</span>
                      {service.number}
                    </div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{service.title}</h3>
                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>{service.description}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                      {service.features.map((feature) => (
                        <div key={feature} style={{ padding: '0.75rem 1rem', background: 'var(--gold-soft)', border: '1px solid rgba(245, 166, 35, 0.2)', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '600' }}>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="about-visual">
                    <div className="visual-card">
                      <div className="visual-grid" />
                      <div className="visual-illustration" aria-hidden="true">
                        <span className="grid-square" />
                        <span className="grid-square" />
                        <span className="grid-square" />
                        <span className="grid-square" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="about-visual">
                    <div className="visual-card">
                      <div className="visual-grid" />
                      <div className="visual-illustration" aria-hidden="true">
                        <span className="grid-square" />
                        <span className="grid-square" />
                        <span className="grid-square" />
                        <span className="grid-square" />
                      </div>
                    </div>
                  </div>
                  <div className="about-copy">
                    <div className="section-tag" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>{service.icon}</span>
                      {service.number}
                    </div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{service.title}</h3>
                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>{service.description}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                      {service.features.map((feature) => (
                        <div key={feature} style={{ padding: '0.75rem 1rem', background: 'var(--gold-soft)', border: '1px solid rgba(245, 166, 35, 0.2)', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '600' }}>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div className="section-heading center">
            <div className="section-tag">F.A.Q.</div>
            <h2>Got Questions? We&apos;ve Got Answers.</h2>
          </div>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '1.5rem' }}>
            {faqs.map((faq) => (
              <div key={faq.question} className="trust-card">
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--deep)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <HiOutlineQuestionMarkCircle style={{ fontSize: '1.3rem', color: 'var(--gold)' }} />
                  {faq.question}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-copy">
          <div className="section-tag light">Start with clarity</div>
          <h2>Let&apos;s understand your energy needs.</h2>
          <p>Book an assessment and receive a practical recommendation for your home, business or institution.</p>
          <a href="/contact" className="button button-primary">Request an assessment</a>
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
