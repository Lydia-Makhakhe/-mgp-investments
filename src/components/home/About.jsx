import { useState } from 'react';
import {
  ArrowUpRight,
  Eye,
  Target,
  Award,
  Lightbulb,
  RotateCw,
  BriefcaseBusiness,
} from 'lucide-react';

import './About.css';

const companyStats = [
  { figure: '5+', label: 'Years Experience' },
  { figure: '100%', label: 'Client Satisfaction' },
  { figure: '50M+', label: 'Project Value' },
];

const companyValues = [
  {
    title: 'Vision',
    description:
      "To be the leading force in transforming Lesotho's real estate landscape through innovative development.",
    icon: Eye,
  },
  {
    title: 'Mission',
    description:
      'Creating sustainable, high-quality housing solutions that enhance communities and deliver value.',
    icon: Target,
  },
  {
    title: 'Excellence',
    description:
      'Committed to the highest standards in every aspect of our development and construction process.',
    icon: Award,
  },
  {
    title: 'Innovation',
    description:
      'Embracing modern technologies and sustainable practices to create future-proof developments.',
    icon: Lightbulb,
  },
];

const teamMembers = [
  {
    name: 'Tanay Patel',
    role: 'Managing Director',
    image: '/images/About%20section/tanay.png',
    profile:
      'A project management professional with five years of experience in construction and estate management. Tanay oversees residential and commercial developments, infrastructure projects, procurement and regulatory processes.',
    experience: [
      'Project execution and construction management',
      'Procurement, regulatory compliance and estate operations',
      'Management of projects including Botho University and major road construction',
    ],
  },
  {
    name: 'Thabo Mphana',
    role: 'Founder & Director',
    image: '/images/About%20section/thabo.png',
    profile:
      'The founder driving MGP Investments’ vision and strategic growth. Since establishing the company in 2020, Thabo has helped deliver over 15 residential homes and lead its expansion into commercial and mixed-use developments.',
    experience: [
      'Public management, governance and construction project management',
      'Investment strategy and financial structuring',
      'Residential, commercial and mixed-use development',
    ],
  },
  {
    name: 'Tšepo Mphana',
    role: 'Real Estate Developer',
    image: '/images/About%20section/tsepo.png',
    profile:
      'A real estate developer with over five years of experience in procurement, project management and sales. Tšepo contributes to MGP’s growth by identifying opportunities and securing high-value investments.',
    experience: [
      'Real estate procurement and project management',
      'Sales and investment opportunity identification',
      'Development coordination and relationships with industry professionals, suppliers and investors',
    ],
  },
];

function TeamCard({ member }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped((current) => !current);
  };

  return (
    <article className={`about-team-card ${isFlipped ? 'is-flipped' : ''}`}>
      <button
        type="button"
        className="about-team-card-button"
        onClick={toggleCard}
        aria-label={
          isFlipped
            ? `Show ${member.name}'s photograph`
            : `View ${member.name}'s profile`
        }
        aria-pressed={isFlipped}
      >
        <span className="about-team-card-inner">
          {/* FRONT: TEAM MEMBER PHOTOGRAPH */}
          <span
            className="about-team-card-front"
            aria-hidden={isFlipped}
          >
            <span className="about-team-card-visual">
              <img
                src={member.image}
                alt={member.name}
                className="about-team-image"
                loading="lazy"
              />
            </span>

            <span className="about-team-card-info">
              <span className="about-team-member-details">
                <span className="about-team-member-role">
                  {member.role}
                </span>

                <span className="about-team-member-name">
                  {member.name}
                </span>
              </span>

              <span className="about-team-card-action-icon">
                <RotateCw size={17} strokeWidth={1.7} />
              </span>
            </span>
          </span>

          {/* BACK: PROFESSIONAL PROFILE */}
          <span
            className="about-team-card-back"
            aria-hidden={!isFlipped}
          >
            <span className="about-team-back-heading">
              <span className="about-team-back-eyebrow">
                MGP INVESTMENTS
              </span>

              <span className="about-team-back-name">
                {member.name}
              </span>

              <span className="about-team-back-role">
                {member.role}
              </span>
            </span>

            <span className="about-team-back-divider" />

            <span className="about-team-back-description">
              {member.profile}
            </span>

            <span className="about-team-experience">
              <span className="about-team-experience-heading">
                <BriefcaseBusiness size={16} strokeWidth={1.8} />
                <span>Areas of Experience</span>
              </span>

              <span className="about-team-highlights">
                {member.experience.map((item) => (
                  <span className="about-team-highlight" key={item}>
                    {item}
                  </span>
                ))}
              </span>
            </span>

            <span className="about-team-back-footer">
              <RotateCw size={17} strokeWidth={1.7} />
            </span>
          </span>
        </span>
      </button>
    </article>
  );
}

function About() {
  return (
    <main className="about-page" id="about-top">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <span className="about-eyebrow">
              <span className="about-eyebrow-line" />
              ABOUT MGP INVESTMENTS
            </span>

            <h1>
              Building more than properties.
              <span> Creating possibilities.</span>
            </h1>

            <p>
              We are a forward-thinking real estate development company
              dedicated to creating innovative, sustainable and
              high-quality housing solutions in Lesotho.
            </p>

            <a href="#our-story" className="about-hero-link">
              Discover MGP
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="about-hero-visual">
            <img
              src="/images/About%20section/the-team.jpg"
              alt="The MGP Investments team"
              className="about-hero-image"
            />
          </div>
        </div>

        <div className="about-hero-bottom">
          <span>REAL ESTATE DEVELOPMENT</span>
          <span>LESOTHO</span>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="about-overview" id="our-story">
        <div className="about-section-container">
          <div className="about-overview-grid">
            <div className="about-overview-heading">
              <span className="about-eyebrow">
                <span className="about-eyebrow-line" />
                WHO WE ARE
              </span>

              <h2>
                A vision for
                <span> better living.</span>
              </h2>
            </div>

            <div className="about-overview-copy">
              <p>
                MGP Investments is a forward-thinking real estate
                development company dedicated to creating innovative,
                sustainable and high-quality housing solutions in
                Lesotho.
              </p>

              <p>
                Our mission is to transform the real estate landscape
                through strategic development, cutting-edge construction
                technologies and an unwavering commitment to excellence.
              </p>
            </div>
          </div>

          <div className="about-stats">
            {companyStats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <span className="about-stat-number">
                  {stat.figure}
                </span>

                <span className="about-stat-label">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-section-container">
          <div className="about-values-heading">
            <div>
              <span className="about-eyebrow">
                <span className="about-eyebrow-line" />
                WHAT GUIDES US
              </span>

              <h2>
                Our values.
                <span> Our direction.</span>
              </h2>
            </div>

            <p>
              The principles behind how we think, build and create
              opportunities shape every part of our work.
            </p>
          </div>

          <div className="about-values-grid">
            {companyValues.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.title}>
                  <div className="about-value-card-top">
                    <span className="about-value-icon">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                  </div>

                  <div className="about-value-card-content">
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>

                  <span className="about-value-accent" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <div className="about-section-container">
          <div className="about-team-heading">
            <div>
              <span className="about-eyebrow">
                <span className="about-eyebrow-line" />
                THE PEOPLE BEHIND MGP
              </span>

              <h2>
                Meet our <span>team.</span>
              </h2>
            </div>

            <p>
              Meet the people bringing experience, direction and
              dedication to MGP Investments.
            </p>
          </div>

          <div className="about-team-grid">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT INVITATION */}
      <section className="about-contact">
        <div className="about-contact-container">
          <div>
            <span className="about-contact-eyebrow">
              LET’S BUILD SOMETHING MEANINGFUL
            </span>

            <h2>
              Have a vision?
              <br />
              Let’s bring it to life.
            </h2>

            <p>
              Whether you are exploring a development opportunity,
              seeking a strategic partnership or simply want to learn
              more about MGP Investments, we would be glad to hear
              from you.
            </p>
          </div>

          <a href="/contact" className="about-contact-button">
            Make an Enquiry
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;