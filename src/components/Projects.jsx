import "./Projects.css";

// Import all project images
import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";

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
          {/* FEATURED - MMA Connect */}
          {/* <article className="project-card project-card--featured">
            <a
              className="project-thumb project-thumb--featured"
              href="#"
              aria-label="View MMA Connect case study"
            >
              <div className="project-thumb-title">MMA Connect</div>
              <img
                src={project1Img}
                alt="MMA Connect UI"
                className="project-icon"
              />
            </a>
            <div className="project-meta">
              <span>PRODUCT</span>
              <span>UX</span>
              <span>FRONTEND</span>
              <span>2025</span>
            </div>
            <h3 className="project-title">MMA Connect</h3>
            <p className="project-subtitle">Building community through combat sports</p>
            <p className="project-blurb">
              A comprehensive platform connecting MMA enthusiasts, gyms, and fighters.
            </p>
          </article> */}

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
              A mobile-first thrift marketplace connecting conscious consumers with secondhand treasures.
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
              An e-commerce platform connecting local farmers with communities, featuring real-time inventory, delivery scheduling, and farmer profiles.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}