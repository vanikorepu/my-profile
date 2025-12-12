import "./Timeline.css";

const ITEMS = [
  {
    title: "Training Lead",
    org: "Gen AI Global - AI 2027",
    dates: "2025–Present",
    blurb:
      "Translated AI-safety research into agentic workflows, designed training & eval pipelines; aligned technical, policy, and human-factors teams.",
  },
  {
    title: "Software Engineer",
    org: "UMass Libraries – Digital Media Lab",
    dates: "2022–2025",
    blurb:
      "Rebuilt the lab site, tripled student traffic, 500+ sign-ups, +25% mobile a11y; added SEO + analytics for outreach decisions.",
  },
  {
    title: "Frontend Developer",
    org: "Kanor Systems",
    dates: "2021–2022",
    blurb:
      "Cut registration time 15% across 2,500+ users, Looker dashboards, extended Zoho CRM to track 500+ accounts.",
  },
  {
    title: "Software Developer",
    org: "Havish Tech",
    dates: "2020–2021",
    blurb:
      "Redesigned React storefronts, −18% cart abandonment, +22% session time, CTA/checkout A/B tests lifted conversions 15%.",
  },
  {
    title: "Web Developer",
    org: "Holdorf Press, Inc.",
    dates: "2025–Present",
    blurb:
      "Optimized WordPress for 50+ authors, ~30% speed gain via image/caching, improved UX and rankings.",
  },
];

function getYearLabel(dates) {
  // Rachel-style left column is usually just year(s). This is a simple extractor.
  // "2022–2025" -> "2022"
  // "2025–Present" -> "2025"
  const match = String(dates).match(/\b(19|20)\d{2}\b/);
  return match ? match[0] : dates;
}

export default function Timeline() {
  return (
    <section className="exp" id="experience" aria-label="Experience">
      <div className="exp__inner">
        <header className="exp__header">
          <h2>Experience</h2>
          <p>Product-minded engineering across systems, UX, and outcomes.</p>
        </header>

        <div className="exp__timeline" role="list">
          <span className="exp__anchorDot" aria-hidden="true" />

          {ITEMS.map((item, i) => (
            <div className="exp__row" role="listitem" key={`${item.org}-${i}`}>
              <div className="exp__year">{getYearLabel(item.dates)}</div>

              <div className="exp__main">
                <div className="exp__org">{item.org}</div>
                <div className="exp__role">{item.title}</div>

                {/* optional: keep this if you want a tiny subline like a “resume whisper” */}
                <div className="exp__sub">{item.dates}</div>

                {/* optional: keep or remove; Rachel screenshot is more minimal */}
                <p className="exp__blurb">{item.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
