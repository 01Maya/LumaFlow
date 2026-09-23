"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import SectionReveal from "./SectionReveal";

const tasks = [
  "Review design updates",
  "Team sync at 11 AM",
  "Finalize proposal",
  "Plan next sprint",
  "Share weekly update",
];

export default function ProductShowcase() {
  const [completedTasks, setCompletedTasks] = useState([0, 1]);

  function toggleTask(index: number) {
    setCompletedTasks((current) =>
      current.includes(index)
        ? current.filter((taskIndex) => taskIndex !== index)
        : [...current, index],
    );
  }

  return (
    <section id="product" className="product">
      <SectionReveal>
        <div className="product-copy">
          <small>OUR PRODUCT</small>
          <h2>
            Everything in one
            <br />
            beautiful workspace
          </h2>
          <p>
            Tasks, meetings, notes and AI insights —<br className="desktop" />{" "}
            all in one place. LumaFlow helps you go
            <br className="desktop" /> from busy to balanced.
          </p>
          <a className="dark-btn" href="#customers">
            Explore product <span>→</span>
          </a>
        </div>
        <div className="dashboard">
          <h3>Today</h3>
          <div className="task-list" role="group" aria-label="Today tasks">
            {tasks.map((task, index) => {
              const isCompleted = completedTasks.includes(index);

              return (
                <button
                  className={`task ${isCompleted ? "is-completed" : ""}`}
                  key={task}
                  type="button"
                  aria-pressed={isCompleted}
                  onClick={() => toggleTask(index)}
                >
                  <span className="task-radio" aria-hidden="true">
                    {isCompleted ? <Check size={12} /> : null}
                  </span>
                  <span>{task}</span>
                </button>
              );
            })}
          </div>
        </div>
      </SectionReveal>
      <img
        className="product-leaf"
        src="/images/product-leaf.png"
        alt=""
        aria-hidden="true"
      />
      <style jsx>{`
        .product {
          position: relative;
          width: calc(100% - 48px);
          max-width: 1140px;
          margin: 0 auto 108px;
          padding: 65px 64px;
          background: linear-gradient(135deg, #f1f0ff 0%, #fff4e9 100%);
          border-radius: 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
        }
        .product :global(.reveal) {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          gap: 64px;
        }

        .product-copy {
          position: relative;
          z-index: 2;
          max-width: 520px;
        }

        .product-copy small {
          font-size: 10px;
          letter-spacing: 0.14em;
          color: #888;
        }
        .product h2 {
          font-size: clamp(31px, 4vw, 48px);
          line-height: 1.04;
          letter-spacing: -0.06em;
          font-weight: 500;
          margin: 16px 0 14px;
        }
        .product p {
          color: #777;
          line-height: 1.5;
          margin-bottom: 24px;
          font-size: 14px;
        }
        .product .dark-btn {
          font-size: 12px;
        }
        .product-leaf {
          position: absolute;
          right: -34px;
          bottom: -58px;
          z-index: 0;
          width: 300px;
          max-width: 32%;
          opacity: 0.82;
          mix-blend-mode: multiply;
          pointer-events: none;
          transform: rotate(-8deg);
          transform-origin: bottom center;
          animation: leaf-sway 7s ease-in-out infinite;
        }


        .dashboard {
          position: relative;
          z-index: 1;
          background: #fff;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 24px 27px;
          width: 305px;
          box-shadow: 0 18px 35px #8f84b322;
          animation: float 5s ease-in-out infinite;
        }
        .dashboard h3 {
          font-size: 16px;
          font-weight: 500;
          margin: 0 0 22px;
        }
        .task-list {
          display: grid;
          gap: 2px;
        }
        .task {
          display: flex;
          align-items: center;
          gap: 13px;
          width: 100%;
          padding: 8px 0;
          border: 0;
          background: transparent;
          color: #111111;
          font: inherit;
          font-size: 12px;
          text-align: left;
          cursor: pointer;
          animation: task-in 0.7s both;
          transition: color 220ms ease, transform 220ms ease;
        }
        .task:hover {
          color: #222;
          transform: translateX(3px);
        }
        .task-radio {
          display: grid;
          flex: 0 0 20px;
          width: 20px;
          height: 20px;
          place-items: center;
          border: 1.5px solid #c8c8ca;
          border-radius: 50%;
          color: #fff;
          transition: background 220ms ease, border-color 220ms ease, transform 220ms ease;
        }
        .task.is-completed .task-radio {
          border-color: #8772ee;
          background: #8772ee;
          transform: scale(1.04);
        }
        .task.is-completed > span:last-child {
          color: #92919a;
          text-decoration: line-through;
          text-decoration-color: #c3bdf1;
        }
        .task:nth-of-type(2) {
          animation-delay: 0.12s;
        }
        .task:nth-of-type(3) {
          animation-delay: 0.24s;
        }
        .task:nth-of-type(4) {
          animation-delay: 0.36s;
        }
        .task:nth-of-type(5) {
          animation-delay: 0.48s;
        }
        .check {
          display: grid;
          place-items: center;
          width: 20px;
          height: 20px;
          background: #8772ee;
          color: #fff;
          border-radius: 50%;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-7px) rotate(0.4deg);
          }
        }
        @keyframes leaf-sway {
          0%,
          100% {
            transform: rotate(-8deg) translateY(0);
          }

          50% {
            transform: rotate(-3deg) translateY(-4px);
          }
        }

        @keyframes task-in {
          from {
            opacity: 0;
            transform: translateX(8px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @media (max-width: 700px) {
          .product {
            margin: 0 18px 56px;
            padding: 32px 22px 96px;
            display: block;
          }

          .product :global(.reveal) {
            display: block;
          }

          .product-leaf {
            right: -26px;
            bottom: -24px;
            width: 190px;
            max-width: none;
            opacity: 0.72;
            mix-blend-mode: multiply;
          }

          .dashboard {
            width: auto;
            margin-top: 24px;
          }
          .product h2 {
            font-size: 36px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .dashboard,
          .product-leaf {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
