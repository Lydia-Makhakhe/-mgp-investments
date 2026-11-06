
import { useState } from 'react';

import {
  ArrowUpRight,
  Building2,
  Handshake,
  TrendingUp,
  Leaf,
  RotateCw,
} from 'lucide-react';

import './WhatWeDo.css';

const services = [
  {
    number: '01',
    title: 'Property Development',
    description: 'End-to-end development solutions.',
    icon: Building2,
    details:
      'End-to-end development of residential and commercial properties, from land acquisition to final construction.',
    points: [
      'Site Selection & Analysis',
      'Architectural Planning',
      'Construction Management',
      'Quality Assurance',
    ],
    image: '/images/WhatWeDo%20section/property-development.jpg',
    imageAlt: 'Residential and commercial property development',
  },
  {
    number: '02',
    title: 'Strategic Partnerships',
    description: 'Strong industry collaborations.',
    icon: Handshake,
    details:
      'Successful property development relies on the right expertise. MGP works with experienced professionals and industry partners to bring projects together efficiently.',
    points: [
      'Collaboration with architects and engineers',
      'Engagement with experienced contractors',
      'Coordinated project delivery',
    ],
    image: '/images/WhatWeDo%20section/strategic-partnerships.jpg',
    imageAlt:
      'Property development professionals collaborating on building plans',
  },
  {
    number: '03',
    title: 'Investment Planning',
    description: 'Strategic real estate opportunities.',
    icon: TrendingUp,
    details:
      'MGP identifies strategic investment opportunities in real estate development projects with strong growth potential. Market insights and careful planning help inform investment decisions.',
    points: [
      'Market Analysis',
      'Investment Strategy',
      'Risk Management',
      'Portfolio Planning',
    ],
    image: '/images/WhatWeDo%20section/investment-planning.jpg',
    imageAlt: 'Property investment planning and development analysis',
  },
  {
    number: '04',
    title: 'Sustainable Building',
    description: 'Innovative construction solutions.',
    icon: Leaf,
    details:
      'MGP explores innovative construction techniques, including polystyrene panel technology, to support efficient and sustainable building while considering affordability and long-term performance.',
    points: [
      'Modern Building Methods',
      'Sustainable Materials',
      'Energy Efficiency',
      'Cost Optimization',
    ],
    image: '/images/WhatWeDo%20section/sustainable-building.jpg',
    imageAlt: 'Modern sustainable construction and building materials',
  },
];

const companyHighlights = [
  {
    figure: '8 Figure',
    description: 'Real Estate Business',
  },
  {
    figure: '5+',
    description: 'Years Experience',
  },
  {
    figure: '100%',
    description: 'Client Satisfaction',
  },
];

function ServiceCard({ service }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = service.icon;

  const toggleCard = () => {
    setIsFlipped((current) => !current);
  };

  return (
    <article className={`service-card ${isFlipped ? 'is-flipped' : ''}`}>
      <button
        type="button"
        className={`service-card-inner ${
          isFlipped ? 'is-flipped' : ''
        }`}
        onClick={toggleCard}
        aria-pressed={isFlipped}
        aria-label={`${service.title}. ${
          isFlipped
            ? 'Tap to return to overview'
            : 'Tap to explore service details'
        }`}
      >
        {/* FRONT OF CARD */}

        <div
          className={`service-card-face service-card-front ${
            service.image ? 'service-card-front-image' : ''
          }`}
          aria-hidden={isFlipped}
        >
          {service.image && (
            <>
              <img
                className="service-front-image"
                src={service.image}
                alt=""
                aria-hidden="true"
              />

              <div className="service-front-overlay"></div>
            </>
          )}

          <div className="service-card-top">
            <span className="service-number">
              {service.number}
            </span>

            <div className="service-icon">
              <Icon size={23} strokeWidth={1.5} />
            </div>
          </div>

          <div className="service-card-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>

          <div className="service-card-bottom">
            <span className="service-accent"></span>

            <span className="service-click-cue">
              <span>TAP TO EXPLORE</span>

              <span className="flip-hint-icon">
                <RotateCw size={15} />
              </span>
            </span>
          </div>
        </div>

        {/* BACK OF CARD */}

        <div
          className="service-card-face service-card-back"
          aria-hidden={!isFlipped}
        >
          <div className="service-card-back-top">
            <span className="service-number">
              {service.number}
            </span>
          </div>

          <div className="service-card-back-content">
            <h3>{service.title}</h3>

            <p>{service.details}</p>

            <ul>
              {service.points.map((point) => (
                <li key={point}>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="service-card-bottom service-card-back-bottom">
            <span className="service-accent"></span>

            <span className="service-click-cue">
              <span>TAP TO TURN BACK</span>

              <span className="flip-hint-icon">
                <RotateCw size={15} />
              </span>
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}

function WhatWeDo() {
  return (
    <section id="what-we-do" className="what-we-do">
      <div className="what-we-do-container">
        {/* SECTION INTRODUCTION */}

        <div className="services-heading">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line"></span>
            WHAT WE DO
          </div>

          <div className="services-heading-content">
            <h2>
              Thoughtful development.
              <br />
              <span>Meaningful value.</span>
            </h2>

            <p>
              We identify, plan, and execute real estate projects
              for modern homeowners and investors. By combining
              industry expertise with innovation, we create
              opportunities that deliver lasting value.
            </p>
          </div>
        </div>

        {/* OUR SERVICES */}

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              service={service}
            />
          ))}
        </div>

        {/* COMPANY PROFILE AND PARTNERSHIP INVITATION */}

        <div className="company-overview">
          <div className="company-overview-heading">
            <span className="overview-eyebrow">
              MGP AT A GLANCE
            </span>

            <span className="overview-heading-line"></span>
          </div>

          <div className="company-highlights">
            {companyHighlights.map((highlight) => (
              <div
                className="highlight-item"
                key={highlight.description}
              >
                <span className="highlight-number">
                  {highlight.figure}
                </span>

                <span className="highlight-description">
                  {highlight.description}
                </span>
              </div>
            ))}
          </div>

          <div className="overview-invitation">
            <div className="invitation-content">
              <span className="invitation-label">
                YOUR NEXT STEP
              </span>

              <h3>Have a property vision in mind?</h3>

              <p>
                Let's start a conversation about your home,
                investment, or potential partnership.
              </p>
            </div>

            <a
              href="/contact"
              className="services-cta-button"
            >
              Partner with Us
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
