import {
  ShieldCheck,
  ChartNoAxesCombined,
  Handshake,
  MapPinned,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

import "./WhyChooseMGP.css";

const reasons = [
  {
    number: "01",
    title: "Quality assurance",
    description:
      "Rigorous quality control and top-tier contractors keep construction to a premium standard.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Investment value",
    description:
      "Strategic, market-driven development that creates lasting value for owners and investors.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "03",
    title: "Strategic partnerships",
    description:
      "A network of architects, engineers and contractors enables efficient project delivery.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Market expertise",
    description:
      "Deep understanding of Lesotho's property market guides every investment decision.",
    icon: MapPinned,
  },
  {
    number: "05",
    title: "Innovation focus",
    description:
      "Modern construction techniques and sustainable practices make future-proof homes.",
    icon: Lightbulb,
  },
  {
    number: "06",
    title: "Vision and growth",
    description:
      "A clear plan for sustainable growth and thriving communities across Lesotho.",
    icon: TrendingUp,
  },
];

function WhyChooseMGP() {
  return (
    <section className="why-mgp" id="why-choose-mgp">
      <div className="why-mgp-container">

        {/* Section introduction */}
        <div className="why-mgp-intro">
          <div className="why-mgp-heading">
            <span className="why-mgp-eyebrow">
              THE MGP DIFFERENCE
            </span>

            <h2>
              Why choose <span>MGP?</span>
            </h2>
          </div>

          <div className="why-mgp-description">
            <span className="why-mgp-accent-line"></span>

            <p>
              Proven expertise, a modern approach and a commitment to
              long-term wealth creation through quality property.
            </p>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="why-mgp-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article className="why-mgp-card" key={reason.number}>
                <div className="why-mgp-card-top">
                  <div className="why-mgp-icon">
                    <Icon size={23} strokeWidth={1.6} />
                  </div>

                  <span className="why-mgp-number">
                    {reason.number}
                  </span>
                </div>

                <div className="why-mgp-card-content">
                  <h3>{reason.title}</h3>

                  <p>{reason.description}</p>
                </div>

                <span className="why-mgp-card-accent"></span>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseMGP;