import "./Work.css";

export default function Work() {
  return (
    <>
      {/* Work Section */}
      <section id="work" className="work">
        <h2>My Work</h2>
        <div className="work-grid">
          <div className="work-card">
            <h3>🚀 Libraries, but Make It Cool</h3>
            <p>
              Rebuilt UMass Digital Media Lab’s site → tripled student traffic,
              added SEO sparkle, and made Lighthouse very, very happy.
            </p>
            <span className="date">2024–2025</span>
          </div>

          <div className="work-card">
            <h3>📊 CRMs & Chaos</h3>
            <p>
              At Kanor Systems, I wrestled with Zoho dashboards and won. Reduced
              form fatigue, sped up registrations, and made data pretty.
            </p>
            <span className="date">2022–2023</span>
          </div>

          <div className="work-card">
            <h3>🛒 Checkout Glow-Up</h3>
            <p>
              Designed storefronts at Havish Tech — fewer abandoned carts, more
              happy customers. Call-to-action buttons, but with ✨vibes✨.
            </p>
            <span className="date">2021–2022</span>
          </div>

          <div className="work-card">
            <h3>🧪 Playing with AI & Politics</h3>
            <p>
              Research assistant days: built text analysis pipelines for 500+
              political docs, mixed LLMs with stats, and turned research chaos
              into dashboards.
            </p>
            <span className="date">2025</span>
          </div>
        </div>
      </section>

      {/* Passion Projects Section */}
      <section id="projects" className="work">
        <h2>💜 My Passion Projects 💜</h2>
        <div className="work-grid">
          <div className="work-card">
            <h3>🥋 MMA Connect</h3>
            <p>
              A next-gen platform reimagining combat sports as a <strong>safe,
                inclusive, and empowering space</strong>. Designed with a glassmorphic
              UI, MMA Connect verifies gyms, highlights women-led training, and
              hosts a Substack-style community where beginners feel supported.
              Sponsors can back fighters directly, bridging <strong>local trust and
                global visibility</strong>.
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
          </div>

          <div className="work-card">
            <h3>🌸 Sayayam</h3>
            <p>
              An anonymous web app helping international & neurodivergent women
              navigate reproductive healthcare. Features plain-language guides,
              safety tools, and calming 3D scapes.
            </p>
            <span className="date">2025–Present</span>
          </div>

          <div className="work-card">
            <h3>🎡 Rolodex™️</h3>
            <p>
              A hyperlocal social app that replaces swipes with weekly hangout
              ideas. Spin the wheel, meet new people, eat pizza, repeat.
            </p>
            <span className="date">2025–Present</span>
          </div>

          <div className="work-card">
            <h3>🗺️ New Horizons</h3>
            <p>
              Reimagined social media to revive community “third spaces.”
              Map-based discovery + location engine boosted engagement by 33%.
            </p>
            <span className="date">2024</span>
          </div>

          <div className="work-card">
            <h3>💡 Mercury</h3>
            <p>
              Built a mobile app + wearable with Arduino sensors to provide
              moral support through heartbeat & breathing feedback.
            </p>
            <span className="date">2020</span>
          </div>
        </div>
      </section>
    </>
  );
}
