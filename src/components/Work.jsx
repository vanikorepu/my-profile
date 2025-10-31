import "./Work.css";

export default function Work() {
  return (
    <>
      {/* Work Section */}
      <section id="work" className="work" aria-label="Professional experience">
        <h2>My Work</h2>
        <div className="work-grid">
          <article className="work-card">
            <h3>Gen AI Global - Training Lead</h3>
            <p>
              Lead on the <strong>AI 2027</strong> initiative, translating AI-safety 
              research into agentic workflows. Designed training pipelines and evaluation 
              frameworks for large models, bridging technical, policy, and human-factors teams to make AI 
              systems safer and more transparent.
            </p>
            <span className="date">2025 - Present</span>
          </article>

          <article className="work-card">
            <h3>UMass Libraries - Software Engineer</h3>
            <p>
              Rebuilt the Digital Media Lab site and made it useful again:
              tripled student traffic, drove 500+ sign-ups, and improved mobile
              accessibility scores by 25%. Added SEO + analytics so outreach
              decisions weren’t guesses.
            </p>
            <span className="date">2024–2025</span>
          </article>

          <article className="work-card">
            <h3>Kanor Systems - Frontend Developer</h3>
            <p>
              Simplified enterprise registration and CRM dashboards for 2,500+
              clients. Cut form completion time by 15%. Built Looker reports and
              extended Zoho CRM to monitor 500+ accounts, helping increase
              sign-ups by 20% and retention by 15%.
            </p>
            <span className="date">2022–2023</span>
          </article>

          <article className="work-card">
            <h3>Havish Tech - Software Developer</h3>
            <p>
              Redesigned React storefronts: 18% fewer abandoned carts, 22% longer
              sessions. A/B tests on CTAs and checkout removed friction and lifted
              conversions by 15%.
            </p>
            <span className="date">2021–2022</span>
          </article>

          <article className="work-card">
            <h3>Holdorf Press, Inc. - Website Admin Manager</h3>
            <p>
              Maintained and optimized WordPress sites for 50+ authors. Improved
              site speed by 30% through image optimization and caching, leading to
              better user experience and SEO rankings.
            </p>
            <span className="date">2025–Present</span>
          </article>
        </div>
      </section>

      {/* Passion Projects Section */}
      <section id="projects" className="work" aria-label="Personal projects">
        <h2>💜 My Passion Projects 💜</h2>
        <div className="work-grid">
          <article className="work-card">
            <h3>🥋 MMA Connect</h3>
            <p>
              A platform for safer, verified combat-sports communities. Highlighted
              women-led training, verified gyms, and a Substack-style feed for
              events and sponsors. <strong>Goal:</strong> trust + discovery without the noise.
            </p>
            <p>
              👉{" "}
              <a
                href="https://mma-connect.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/vanikorepu/mma-connect"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
            <span className="date">2025–Present</span>
          </article>

          <article className="work-card">
            <h3>🌸 Sayayam</h3>
            <p>
              Anonymous guides for international & neurodivergent women navigating
              reproductive healthcare. Plain-language content, privacy-first flows,
              and calming UIs to reduce decision fatigue.
            </p>
            <span className="date">2025–Present</span>
          </article>

          <article className="work-card">
            <h3>🎡 Rolodex™️</h3>
            <p>
              Hyperlocal social without swipes: weekly hangout prompts, small
              groups, and opt-in circles. Built to encourage real-world plans,
              not endless scrolling.
            </p>
            <span className="date">2025–Present</span>
          </article>

          <article className="work-card">
            <h3>🗺️ New Horizons</h3>
            <p>
              Map-first discovery for “third spaces.” Next.js + dynamic filters
              sped up geo searches by ~70% and cut bounce by 20% on low-end
              devices (code-splitting, lazy loading, image compression).
            </p>
            <span className="date">2024</span>
          </article>

          <article className="work-card">
            <h3>💡 Mercury</h3>
            <p>
              Mobile + wearable (Arduino sensors) for gentle biofeedback. Heartbeat
              and breathing cues designed for calm, not notifications.
            </p>
            <span className="date">2020</span>
          </article>
        </div>
      </section>
    </>
  );
}
