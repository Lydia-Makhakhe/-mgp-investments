import { useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
} from 'lucide-react';

import './Projects.css';

const IMAGE_EXTENSION = 'jpg';

const projects = Array.from({ length: 21 }, (_, index) => ({
  id: index + 1,
  image: `/images/Our%20projects/${index + 1}.${IMAGE_EXTENSION}`,
  number: String(index + 1).padStart(2, '0'),
}));

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const showPrevious = () => {
    setSelectedProject((current) => {
      if (!current) return null;

      const previousId = current.id === 1 ? projects.length : current.id - 1;

      return projects.find((project) => project.id === previousId);
    });
  };

  const showNext = () => {
    setSelectedProject((current) => {
      if (!current) return null;

      const nextId = current.id === projects.length ? 1 : current.id + 1;

      return projects.find((project) => project.id === nextId);
    });
  };

  return (
    <main className="projects-page">
      {/* HERO */}
      <section className="projects-hero">
        <div className="projects-hero-overlay" />

        <div className="projects-hero-content">
          <span className="projects-eyebrow">
            MGP INVESTMENTS <span />
            OUR PORTFOLIO
          </span>

          <h1>
            Spaces that
            <br />
            <em>shape tomorrow.</em>
          </h1>

          <p>
            A collection of developments, ideas, and spaces that reflect
            our commitment to thoughtful investment and lasting value.
          </p>

          <a href="#project-gallery" className="projects-hero-link">
            Explore our projects
            <ArrowDown size={17} />
          </a>
        </div>

        <div className="projects-hero-bottom">
          <span>PROPERTY · DEVELOPMENT · INVESTMENT</span>
          <span>01 — 21</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="projects-introduction">
        <div className="projects-intro-label">
          <span className="projects-section-number">01</span>
          <span>THE COLLECTION</span>
        </div>

        <div className="projects-intro-content">
          <h2>
            Building with
            <br />
            <span>purpose and perspective.</span>
          </h2>

          <div className="projects-intro-description">
            <p>
              Every project begins with a vision. Our portfolio reflects
              the spaces and opportunities that inspire our approach to
              property development and investment.
            </p>

            <p>
              Explore the collection and discover the possibilities
              behind each image.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="projects-gallery-section" id="project-gallery">
        <div className="projects-gallery-heading">
          <div>
            <span className="projects-eyebrow dark">
              SELECTED PROJECTS
            </span>

            <h2>
              A closer look
              <span>.</span>
            </h2>
          </div>

          <p>
            An evolving collection of spaces and development opportunities.
          </p>
        </div>

        <div className="projects-gallery">
          {projects.map((project, index) => (
            <button
              type="button"
              className={`project-gallery-item project-gallery-item-${index + 1}`}
              key={project.id}
              onClick={() => openProject(project)}
              aria-label={`View project image ${project.number}`}
            >
              <div className="project-gallery-image-wrapper">
                <img
                  src={project.image}
                  alt={`MGP Investments project ${project.number}`}
                  loading={index < 3 ? 'eager' : 'lazy'}
                />

                <div className="project-gallery-overlay">
                  <span className="project-gallery-number">
                    PROJECT {project.number}
                  </span>

                  <span className="project-gallery-open">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </div>

              <div className="project-gallery-caption">
                <span>PROJECT {project.number}</span>
                <span className="project-gallery-caption-line" />
                <span>VIEW IMAGE</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="projects-closing">
        <div className="projects-closing-content">
          <span className="projects-eyebrow">
            THE MGP APPROACH
          </span>

          <h2>
            Every space holds
            <br />
            <em>the potential for more.</em>
          </h2>

          <p>
            We believe meaningful development begins with vision,
            thoughtful planning, and a commitment to creating value.
          </p>

          <a href="/contact" className="projects-contact-link">
            Start a conversation
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="projects-closing-decoration">
          MGP
        </div>
      </section>

      {/* IMAGE LIGHTBOX */}
      {selectedProject && (
        <div
          className="projects-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Project image ${selectedProject.number}`}
          onClick={closeProject}
        >
          <button
            type="button"
            className="projects-lightbox-close"
            onClick={closeProject}
            aria-label="Close image viewer"
          >
            <X size={25} />
          </button>

          <button
            type="button"
            className="projects-lightbox-arrow previous"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            <ArrowLeft size={24} />
          </button>

          <div
            className="projects-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={`MGP Investments project ${selectedProject.number}`}
            />

            <div className="projects-lightbox-caption">
              <span>PROJECT {selectedProject.number}</span>
              <span>
                {selectedProject.id} / {projects.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="projects-lightbox-arrow next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      )}
    </main>
  );
}

export default Projects;