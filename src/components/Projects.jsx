import "./Projects.css";

const PROJECTS = [
  {
    icon: "🥋",
    name: "MMA Connect",
    desc: "A platform for safer, verified combat-sports communities. Highlights women-led training, verified gyms, and a Substack-style feed for events and sponsors. Goal: trust + discovery without the noise.",
    live: "https://mma-connect.vercel.app",
    code: "https://github.com/vanikorepu/mma-connect",
    date: "2025–Present",
  },
  {
    icon: "🌸",
    name: "Sayayam",
    desc: "Anonymous guides for international & neurodivergent women navigating reproductive healthcare. Plain-language content, privacy-first flows, and calming UIs to reduce decision fatigue.",
    live: "https://mma-connect.vercel.app",
    code: "https://github.com/vanikorepu/mma-connect",
    date: "2025–Present",
  },
  {
    icon: "🎡",
    name: "Rolodex™",
    desc: "Hyperlocal social without swipes: weekly hangout prompts, small groups, and opt-in circles. Built to encourage real-world plans, not endless scrolling.",
    live: "https://mma-connect.vercel.app",
    code: "https://github.com/vanikorepu/mma-connect",
    date: "2025–Present",
  },
  {
    icon: "🗺️",
    name: "New Horizons",
    desc: "Map-first discovery for 'third spaces.' Next.js + dynamic filters sped up geo searches by ~70% and cut bounce by 20% on low-end devices (code-splitting, lazy loading, image compression).",
    live: "https://mma-connect.vercel.app",
    code: "https://github.com/vanikorepu/mma-connect",
    date: "2024",
  },
  {
    icon: "💡",
    name: "Mercury",
    desc: "Mobile + wearable (Arduino sensors) for gentle biofeedback. Heartbeat and breathing cues designed for calm, not notifications.",
    live: "https://mma-connect.vercel.app",
    code: "https://github.com/vanikorepu/mma-connect",
    date: "2020",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects" aria-label="Projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <article key={p.name} className="project-card">
            <header className="project-head">
              <h3 className="project-title">
                <span className="icon" aria-hidden="true">{p.icon}</span>
                {p.name}
              </h3>
              <span className="date">{p.date}</span>
            </header>

            <p className="project-desc">{p.desc}</p>

            <p className="project-links">
              👉{" "}
              <a href={p.live} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>{" "}
              |{" "}
              <a href={p.code} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}