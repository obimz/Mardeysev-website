import Navbar from "../components/Navbar";
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
      <section className="hero section-shell"><div className="container hero-copy"><div className="eyebrow"><span className="eyebrow-dot" />Selected work</div><h1>Powering places that cannot afford interruption.</h1><p>Our project portfolio is built around real operating needs: lower power costs, less downtime and energy systems that perform every day.</p></div></section>
      <section className="section-shell"><div className="container"><div className="section-heading"><div className="section-tag">Project focus</div><h2>Solutions that scale with the people using them</h2><p>We tailor each system to the site, the load and the business case.</p></div><div className="benefits-grid">{projects.map((project) => <article className="benefit-card" key={project.label}><div className="benefit-icon" aria-hidden="true" style={{ fontSize: '1.5rem' }}>{project.icon}</div><div className="section-tag">{project.label}</div><h3>{project.title}</h3><p>{project.description}</p></article>)}</div></div></section>
      <section className="stats-band"><div className="container stats-grid"><div className="stat-box"><strong>6.9 MW+</strong><span>Green energy generated</span></div><div className="stat-box"><strong>5.3 MWp+</strong><span>PV capacity installed</span></div><div className="stat-box"><strong>12 MWh+</strong><span>Storage deployed</span></div><div className="stat-box"><strong>99.8%</strong><span>System uptime target</span></div></div></section>
    </main>
  );
}
