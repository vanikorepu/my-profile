import "./Timeline.css";

const ITEMS = [
  { 
    title: "Training Lead", 
    org: "Gen AI Global — AI 2027", 
    dates: "2025–Present",
    blurb: "Translated AI-safety research into agentic workflows; designed training & eval pipelines; aligned technical, policy, and human-factors teams." 
  },
  { 
    title: "Software Engineer", 
    org: "UMass Libraries — Digital Media Lab", 
    dates: "2024–2025",
    blurb: "Rebuilt the lab site; tripled student traffic; 500+ sign-ups; +25% mobile a11y; added SEO + analytics for outreach decisions." 
  },
  { 
    title: "Frontend Developer", 
    org: "Kanor Systems", 
    dates: "2022–2023",
    blurb: "Cut registration time 15% across 2,500+ users; Looker dashboards; extended Zoho CRM to track 500+ accounts." 
  },
  { 
    title: "Software Developer", 
    org: "Havish Tech", 
    dates: "2021–2022",
    blurb: "Redesigned React storefronts; −18% cart abandonment; +22% session time; CTA/checkout A/B tests lifted conversions 15%." 
  },
  { 
    title: "Website Admin Manager", 
    org: "Holdorf Press, Inc.", 
    dates: "2020–2021",
    blurb: "Optimized WordPress for 50+ authors; ~30% speed gain via image/caching; improved UX and rankings." 
  },
];

export default function Timeline() {
  return (
    <section className="tl" id="experience" aria-label="Experience timeline">
      <h2>Experience</h2>

      <ol className="tl-list">
        {ITEMS.map((it, i) => (
          <li key={it.title + it.org} className="tl-item">
            <div className="tl-spine" aria-hidden="true" />
            <div className="tl-node" aria-hidden="true">
              <span className="tl-stamp">{i + 1}</span>
            </div>

            <article className="tl-card">
              <header className="tl-head">
                <h3 className="tl-title">
                  {it.title} <span className="sep">—</span> {it.org}
                </h3>
                <span className="tl-date" aria-label="Dates">{it.dates}</span>
              </header>
              <p className="tl-blurb">{it.blurb}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}