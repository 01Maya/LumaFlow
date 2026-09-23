import { Leaf, Sparkles, Users } from "lucide-react";
import SectionReveal from "./SectionReveal";
const items = [
  [
    "PLAN SMARTER",
    "Turn ideas into actionable tasks in seconds.",
    Sparkles,
    "lavender",
  ],
  [
    "WORK TOGETHER",
    "Keep your team aligned and moving forward.",
    Users,
    "peach",
  ],
  [
    "STAY FOCUSED",
    "Reduce distractions and do what truly matters.",
    Leaf,
    "green",
  ],
];
export default function Features() {
  return (
    <section id="company" className="features">
      <SectionReveal>
        <div className="feature-intro">
          <h2>
            Built for clearer work.
            <br />
            And brighter days.
          </h2>
          <p>
            LumaFlow helps you plan, collaborate
            <br className="desktop" /> and stay organized — all in one place,
            <br className="desktop" /> with the power of AI.
          </p>
        </div>
        <div className="feature-grid">
          {items.map(([title, desc, Icon, color]) => (
            <article key={title}>
              <div className={`icon ${color}`}>
                <Icon size={23} />
              </div>
              <h3>{title as string}</h3>
              <p>{desc as string}</p>
            </article>
          ))}
        </div>
      </SectionReveal>
      <style jsx>{`
        .features {
          max-width: 1140px;
          margin: auto;
          padding: 0 24px 110px;
        }
        .feature-intro {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 58px;
        }
        .feature-intro h2 {
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1;
          letter-spacing: -0.06em;
          font-weight: 500;
          margin: 0;
        }
        .feature-intro p {
          color: #777;
          line-height: 1.5;
          margin: 3px 9% 0 0;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
        }
        .icon {
          display: grid;
          place-items: center;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          margin-bottom: 22px;
          transition: 0.35s;
        }
        .lavender {
          background: #f1f0ff;
        }
        .peach {
          background: #fff0ea;
        }
        .green {
          background: #e9f7ee;
        }
        article {
          transition: 0.35s;
        }
        article:hover {
          transform: translateY(-7px);
        }
        article:hover .icon {
          transform: scale(1.08) rotate(-6deg);
          box-shadow: 0 12px 22px #00000010;
        }
        .icon:after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 1px solid #fff;
          opacity: 0.8;
          transform: scale(0.75);
          transition: 0.45s;
        }
        .icon {
          position: relative;
        }
        article:hover .icon:after {
          transform: scale(1.18);
          opacity: 0;
        }
        article h3 {
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 9px;
        }
        article p {
          color: #777;
          font-size: 14px;
          line-height: 1.5;
          max-width: 230px;
          margin: 0;
        }
        @media (max-width: 600px) {
          .features {
            padding-bottom: 80px;
          }
          .feature-intro {
            display: block;
            margin-bottom: 42px;
          }
          .feature-intro p {
            margin-top: 22px;
          }
          .feature-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .feature-grid article {
            display: grid;
            grid-template-columns: 58px 1fr;
            column-gap: 18px;
          }
          .feature-grid .icon {
            grid-row: span 2;
            margin: 0;
          }
          .feature-grid article p {
            grid-column: 2;
          }
        }
      `}</style>
    </section>
  );
}
