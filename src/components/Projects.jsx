// src/components/Projects.jsx
import "./Projects.css";

const PROJECTS = [
  {
    id: "mma-connect",
    emoji: "🥋",
    title: "MMA Connect",
    date: "2025–Present",
    tag: "Product · UX · Frontend",
    blurb:
      "A platform for safer, verified combat-sports communities. Highlights women-led training, verified gyms, and a Substack-style feed for events and sponsors. Goal: trust + discovery without the noise.",
    demo: "https://mma-connect.vercel.app",
    github: "https://github.com/vanikorepu/mma-connect",
  },
  {
    id: "local-thrift",
    emoji: "🧺",
    title: "Local Thrift",
    date: "2025",
    tag: "UX · Maps · Marketplace",
    blurb:
      "Hyperlocal marketplace for second-hand & upcycled finds from neighbors, not warehouses. Map-first browsing, filters by category/condition, and gentle nudges toward reuse over fast fashion.",
    demo: "#",
    github: "https://github.com/vanikorepu/LocalThrift#",
  },
  {
    id: "new-horizons",
    emoji: "🗺️",
    title: "New Horizons",
    date: "2024",
    tag: "Next.js · Geo · A11y",
    blurb:
      "Map-first discovery for “third spaces.” Next.js + dynamic filters sped up geo searches by ~70% and cut bounce by 20% on low-end devices with code-splitting, lazy loading, and image compression.",
    demo: "#",
    github: "https://github.com/Vishalk30/new_horizons", // adjust if needed
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <header className="projects-header">
        <h2>Featured Projects</h2>
        <div className="projects-underline" />
        <p>Recent things I’ve shipped and obsessed over.</p>
      </header>

      <div className="projects-row">
        {PROJECTS.map((p) => (
          <article key={p.id} className="project-card">
            {/* “Image” area – you can swap this to a real screenshot later */}
            <a
              href={p.demo !== "#" ? p.demo : undefined}
              target={p.demo !== "#" ? "_blank" : undefined}
              rel={p.demo !== "#" ? "noopener noreferrer" : undefined}
              className="project-thumb"
            >
              <span className="project-emoji">{p.emoji}</span>
              <span className="project-thumb-title">{p.title}</span>
            </a>

            <div className="project-meta">
              <span className="project-date">{p.date}</span>
              <span className="project-tag">{p.tag}</span>
            </div>

            <h3 className="project-title">{p.title}</h3>
            <p className="project-blurb">{p.blurb}</p>

            <p className="project-links">
              👉{" "}
              {p.demo !== "#" && (
                <>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  {"  |  "}
                </>
              )}
              {p.github !== "#" && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
