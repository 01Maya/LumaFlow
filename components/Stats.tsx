import type { CSSProperties } from "react";
import AnimatedCounter from "./AnimatedCounter";
import SectionReveal from "./SectionReveal";

const stats = [
  { value: 3, suffix: "x", label: "Higher productivity" },
  { value: 40, suffix: "%", label: "Less time in meetings" },
  { value: 2.5, suffix: "x", label: "Faster project delivery" },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="LumaFlow results">
      <SectionReveal>
        <div className="stat-grid">
          {stats.map((stat, index) => (
            <div
              className="stat"
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
              key={stat.label}
            >
              <strong>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </SectionReveal>

      <style jsx>{`
        .stats {
          padding: 0 24px 122px;
        }
        .stat-grid {
          max-width: 980px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .stat {
          text-align: center;
          border-right: 1px solid #ddd;
          animation: stat-rise 700ms var(--delay) both;
        }
        .stat:last-child {
          border: 0;
        }
        .stat strong {
          display: block;
          font-size: 36px;
          font-weight: 500;
          letter-spacing: -0.06em;
        }
        .stat span {
          display: block;
          color: #777;
          font-size: 13px;
          margin-top: 5px;
        }

        @keyframes stat-rise {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 600px) {
          .stats {
            padding-bottom: 90px;
          }
          .stat-grid {
            grid-template-columns: 1fr;
            gap: 26px;
          }
          .stat {
            border-right: 0;
            border-bottom: 1px solid #eee;
            padding-bottom: 25px;
          }
          .stat:last-child {
            border: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stat {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
