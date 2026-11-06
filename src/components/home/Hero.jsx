
import { ArrowUpRight } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-line"></span>
            MGP INVESTMENTS · LESOTHO
          </span>

          <h1>
            Providing
            <br />
            quality <span>residences</span>
            <br />
            for Lesotho.
          </h1>

          <p className="hero-description">
            Creating quality homes and meaningful property
            investments through thoughtful development,
            innovation, and strategic partnerships.
          </p>

          <p className="hero-tagline">Your housing solution.</p>

          <div className="hero-actions">
            <a href="/contact" className="hero-button-primary">
              Partner with Us
              <ArrowUpRight size={19} />
            </a>

            <a href="/projects" className="hero-button-secondary">
              Explore Our Projects
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="/images/Hero%20section/hero-image.jpg"
              alt="Contemporary residential architecture surrounded by landscaping"
              className="hero-image"
            />

            <div className="hero-image-overlay"></div>

            <div className="hero-image-caption">
              <span className="hero-caption-label">OUR VISION</span>
              <p>
                Modern living.
                <br />
                Lasting value.
              </p>
            </div>

            <div className="hero-image-number">
              MGP <span>INVESTMENTS</span>
            </div>
          </div>

          <div className="hero-image-decoration"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
