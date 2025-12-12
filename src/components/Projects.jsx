import "./Projects.css";

// Import all project images
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";
import project4Img from "../assets/project4.png";
import project5Img from "../assets/project5.png";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        {/* HEADER */}
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <div className="projects-underline" />
          <p>Recent things I've shipped and obsessed over.</p>
        </div>

        <div className="projects-row">
          {/* HOLDORF PRESS */}
          <article className="project-card">
            <a
              className="project-thumb"
              href="https://www.holdorfpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Holdorf Press website"
            >
              <div className="project-thumb-title">Holdorf Press</div>
              <img
                src={project5Img}
                alt="Holdorf Press website preview"
                className="project-icon"
              />
            </a>
            <div className="project-meta">
              <span>CLIENT</span>
              <span>CMS</span>
              <span>WEB</span>
              <span>2025</span>
            </div>
            <h3 className="project-title">Holdorf Press</h3>
            <p className="project-subtitle">Modernizing a small press for the digital age</p>
            <p className="project-blurb">
              A production web platform for a boutique publishing company, supporting multiple imprints
              and authors. Ongoing work includes site migration, performance improvements, CMS customization,
              and long-term maintainability.
            </p>
          </article>

          {/* TH FOREST */}
          <article className="project-card">
            <a
              className="project-thumb"
              href="https://thforestauthor.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit TH Forest website"
            >
              <div className="project-thumb-title">TH Forest</div>
              <img
                src={project4Img}
                alt="TH Forest website preview"
                className="project-icon"
              />
            </a>
            <div className="project-meta">
              <span>WEB</span>
              <span>PUBLISHING</span>
              <span>FRONTEND</span>
              <span>2025</span>
            </div>
            <h3 className="project-title">TH Forest</h3>
            <p className="project-subtitle">
              An independent publishing site, thoughtfully redesigned
            </p>
            <p className="project-blurb">
              A content-driven website for an independent author and imprint, focused on clarity,
              narrative flow, and long-form reading. Built and maintained with attention to performance,
              accessibility, and editorial structure.
            </p>
          </article>


          {/* GREEN VALLEY MARKET */}
          <article className="project-card">
            <a className="project-thumb" href="#">
              <div className="project-thumb-title">Green Valley Market</div>
              <img
                src={project3Img}
                alt="Green Valley Market UI"
                className="project-icon"
              />
            </a>
            <div className="project-meta">
              <span>PRODUCT</span>
              <span>E-COMMERCE</span>
              <span>FULL-STACK</span>
              <span>2024</span>
            </div>
            <h3 className="project-title">Green Valley Market</h3>
            <p className="project-subtitle">Farm-fresh delivery, digitally reimagined</p>
            <p className="project-blurb">
              An e-commerce platform connecting local farmers with communities,
              featuring real-time inventory, delivery scheduling, and farmer profiles.
            </p>
          </article>

          {/* LOCAL THRIFT */}
          <article className="project-card">
            <a className="project-thumb" href="#">
              <div className="project-thumb-title">Local Thrift</div>
              <img
                src={project2Img}
                alt="Local Thrift UI"
                className="project-icon"
              />
            </a>
            <div className="project-meta">
              <span>UX</span>
              <span>MOBILE</span>
              <span>BRANDING</span>
              <span>2024</span>
            </div>
            <h3 className="project-title">Local Thrift</h3>
            <p className="project-subtitle">Sustainable shopping, reimagined</p>
            <p className="project-blurb">
              A mobile-first thrift marketplace connecting conscious consumers
              with secondhand treasures.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
