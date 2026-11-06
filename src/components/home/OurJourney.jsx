import { useEffect, useRef, useState } from "react";
import {
  House,
  HardHat,
  Handshake,
  Building2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import "./Ourjourney.css";

const journeyStages = [
  {
    id: "origins",
    number: "01",
    year: "The beginning",
    title: "Origins",
    headline: "A vision for better living.",
    description:
      "We began with a clear ambition: to create innovative, sustainable, and cost-efficient housing that responds to the needs of modern homeowners.",
    detail: "Every meaningful development starts with an idea.",
    icon: House,
    position: 0.04,
  },
  {
    id: "growth",
    number: "02",
    year: "Building momentum",
    title: "Growth",
    headline: "Growing with purpose.",
    description:
      "As our ambitions grew, so did our capabilities. We expanded into construction management, strengthening our involvement in project quality, coordination, and efficiency.",
    detail: "More capability. Greater control. Stronger foundations.",
    icon: HardHat,
    position: 0.34,
  },
  {
    id: "evolution",
    number: "03",
    year: "A new direction",
    title: "Evolution",
    headline: "Refining the way we build.",
    description:
      "We refined our business model and embraced strategic partnerships, creating a more focused approach to real estate development and long-term value creation.",
    detail: "A more focused model, shaped by experience.",
    icon: Handshake,
    position: 0.67,
  },
  {
    id: "future",
    number: "04",
    year: "Looking ahead",
    title: "Future",
    headline: "Shaping what comes next.",
    description:
      "Today, we focus on real estate development, collaborating with top-tier contractors and industry professionals to create enduring, future-ready communities.",
    detail: "The journey continues, with every project.",
    icon: Building2,
    position: 0.96,
  },
];

const ROAD_PATH =
  "M 60 350 C 145 350, 155 275, 245 275 S 350 320, 405 235 S 475 125, 565 155 S 640 205, 690 110 S 730 65, 735 45";

function Ourjourney() {
  const journeyRef = useRef(null);
  const roadRef = useRef(null);
  const markerRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const journey = journeyRef.current;
    const road = roadRef.current;
    const marker = markerRef.current;

    if (!journey || !road || !marker) return;

    let animationFrame;

    const updateJourney = () => {
      const rect = journey.getBoundingClientRect();
      const scrollDistance = journey.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      const currentProgress = Math.min(
        1,
        Math.max(0, -rect.top / scrollDistance)
      );

      setProgress(currentProgress);

      const roadLength = road.getTotalLength();
      const point = road.getPointAtLength(roadLength * currentProgress);

      marker.setAttribute(
        "transform",
        `translate(${point.x} ${point.y})`
      );

      let currentStage = 0;

      journeyStages.forEach((stage, index) => {
        if (currentProgress >= stage.position) {
          currentStage = index;
        }
      });

      setActiveStage(currentStage);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateJourney);
    };

    updateJourney();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const goToStage = (index) => {
    const journey = journeyRef.current;
    if (!journey) return;

    const clampedIndex = Math.max(
      0,
      Math.min(journeyStages.length - 1, index)
    );

    const stage = journeyStages[clampedIndex];
    const scrollDistance = journey.offsetHeight - window.innerHeight;
    const journeyTop =
      window.scrollY + journey.getBoundingClientRect().top;

    const targetScroll =
      journeyTop + stage.position * scrollDistance;

    window.scrollTo({
      top: targetScroll,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const currentStage = journeyStages[activeStage];
  const CurrentIcon = currentStage.icon;

  return (
    <section
      className="journey-section"
      id="journey"
      aria-label="Our company journey"
    >
      <div className="journey-intro">
        <span className="journey-eyebrow">
          <span className="journey-eyebrow-line" />
          OUR JOURNEY
        </span>

        <h2>
          Every great story
          <br />
          <span>moves forward.</span>
        </h2>

        <p>
          From our beginnings to the possibilities ahead, explore the
          milestones that continue to shape MGP Investments.
        </p>

        <div className="journey-scroll-hint">
          <span className="journey-scroll-dot" />
          Scroll to travel through our story
        </div>
      </div>

      <div className="journey-scroll-track" ref={journeyRef}>
        <div className="journey-sticky-stage">
          <div className="journey-stage-inner">
            {/* LEFT: ROADMAP */}
            <div className="journey-map-panel">
              <div className="journey-map-heading">
                <span>THE ROAD SO FAR</span>
                <span className="journey-map-subtitle">
                  Follow our progress
                </span>
              </div>

              <div className="journey-map">
                <div className="journey-map-glow" />

                <svg
                  className="journey-road-svg"
                  viewBox="0 0 780 420"
                  role="img"
                  aria-label="Interactive roadmap showing four milestones"
                >
                  <defs>
                    <linearGradient
                      id="journeyRoadGradient"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#B98224" />
                      <stop offset="100%" stopColor="#E3BE76" />
                    </linearGradient>

                    <filter
                      id="journeyRoadGlow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Subtle decorative map lines */}
                  <path
                    className="journey-map-contour"
                    d="M0 90 C130 20 180 150 300 90 S520 20 780 95"
                  />
                  <path
                    className="journey-map-contour"
                    d="M0 190 C140 120 220 240 360 175 S600 120 780 205"
                  />
                  <path
                    className="journey-map-contour"
                    d="M0 310 C120 250 240 350 390 290 S620 250 780 330"
                  />

                  {/* Road shadow */}
                  <path
                    className="journey-road-shadow"
                    d={ROAD_PATH}
                  />

                  {/* Road base */}
                  <path
                    className="journey-road-base"
                    d={ROAD_PATH}
                  />

                  {/* Animated road progress */}
                  <path
                    ref={roadRef}
                    className="journey-road-progress"
                    d={ROAD_PATH}
                    pathLength="1"
                    style={{
                      strokeDasharray: 1,
                      strokeDashoffset: 1 - progress,
                    }}
                  />

                  {/* Milestone markers */}
                  {journeyStages.map((stage, index) => {
                    return (
                      <g
                        key={stage.id}
                        className={`journey-road-stop ${
                          activeStage === index ? "is-active" : ""
                        }`}
                        onClick={() => goToStage(index)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Explore ${stage.title}`}
                        onKeyDown={(event) => {
                          if (
                            event.key === "Enter" ||
                            event.key === " "
                          ) {
                            event.preventDefault();
                            goToStage(index);
                          }
                        }}
                      >
                        <circle
                          className="journey-stop-pulse"
                          cx={[60, 245, 565, 735][index]}
                          cy={[350, 275, 155, 45][index]}
                          r={activeStage === index ? 28 : 20}
                        />

                        <circle
                          className="journey-stop-circle"
                          cx={[60, 245, 565, 735][index]}
                          cy={[350, 275, 155, 45][index]}
                          r="12"
                        />

                        <text
                          className="journey-stop-number"
                          x={[60, 245, 565, 735][index]}
                          y={[350, 275, 155, 45][index] + 4}
                          textAnchor="middle"
                        >
                          {stage.number}
                        </text>
                      </g>
                    );
                  })}

                  {/* Moving marker */}
                  <g
                    ref={markerRef}
                    className="journey-moving-marker"
                    filter="url(#journeyRoadGlow)"
                  >
                    <circle r="18" className="journey-marker-halo" />
                    <circle r="9" className="journey-marker-core" />
                    <circle r="3" className="journey-marker-center" />
                  </g>
                </svg>

                <div className="journey-map-caption">
                  <Sparkles size={15} />
                  <span>Milestones that move us forward</span>
                </div>
              </div>

              {/* Clickable milestone navigation */}
              <div className="journey-milestone-nav">
                {journeyStages.map((stage, index) => (
                  <button
                    key={stage.id}
                    className={`journey-milestone-button ${
                      activeStage === index ? "is-active" : ""
                    }`}
                    onClick={() => goToStage(index)}
                    aria-current={activeStage === index ? "step" : undefined}
                  >
                    <span className="journey-milestone-number">
                      {stage.number}
                    </span>
                    <span>{stage.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: STORY PANEL */}
            <div className="journey-story-panel" aria-live="polite">
              <div className="journey-story-topline">
                <span className="journey-story-phase">
                  {currentStage.year}
                </span>

                <span className="journey-story-count">
                  {currentStage.number}
                  <span> / 04</span>
                </span>
              </div>

              <div className="journey-story-content" key={currentStage.id}>
                <div className="journey-story-icon">
                  <CurrentIcon size={30} strokeWidth={1.5} />
                  <span className="journey-icon-orbit" />
                </div>

                <span className="journey-story-label">
                  CHAPTER {currentStage.number}
                </span>

                <h3>{currentStage.title}</h3>

                <h4>{currentStage.headline}</h4>

                <p>{currentStage.description}</p>

                <div className="journey-story-note">
                  <span className="journey-note-line" />
                  <span>{currentStage.detail}</span>
                </div>
              </div>

              <div className="journey-story-footer">
                <div className="journey-story-progress">
                  <span
                    className="journey-story-progress-fill"
                    style={{
                      width: `${((activeStage + 1) / journeyStages.length) * 100}%`,
                    }}
                  />
                </div>

                <span className="journey-story-footer-label">
                  {activeStage === journeyStages.length - 1
                    ? "The journey continues"
                    : "Next chapter ahead"}
                </span>
              </div>
            </div>
          </div>

          {/* Visual scroll indicator */}
          <div className="journey-scroll-progress">
            <span
              className="journey-scroll-progress-fill"
              style={{ height: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="journey-outro">
        <span className="journey-outro-mark">
          <ArrowUpRight size={18} />
        </span>
        <p>
          Our journey is still unfolding.
          <span> We’re building what comes next.</span>
        </p>
      </div>
    </section>
  );
}

export default Ourjourney;