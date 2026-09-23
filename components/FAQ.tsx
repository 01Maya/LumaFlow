"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionReveal from "./SectionReveal";
const qs = [
  [
    "What is LumaFlow?",
    "LumaFlow is an AI workspace that brings tasks, meetings, notes and insights together in one calm place.",
  ],
  [
    "How does the AI assistant work?",
    "It turns conversations and ideas into organized summaries, next steps and helpful suggestions.",
  ],
  [
    "Can I use LumaFlow with my existing tools?",
    "Yes. LumaFlow is designed to fit alongside the tools your team already uses.",
  ],
  [
    "Is my data secure?",
    "Your workspace is protected with modern encryption and carefully designed access controls.",
  ],
];
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="faq">
      <div className="faq-layout">
        <div className="faq-copy">
          <small>FAQ</small>
          <h2>
            Frequently asked
            <br /> questions
          </h2>
          <p>Everything you need to know about LumaFlow.</p>
        </div>
        <SectionReveal>
          <div className="questions">
            {qs.map(([q, a], i) => (
              <div className={`question ${open === i ? "open" : ""}`} key={q}>
                <button
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{q}</span>
                  <ChevronDown size={17} />
                </button>
                {open === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
      <style jsx>{`
        .faq {
          max-width: 1020px;
          margin: auto;
          padding: 0 24px 112px;
        }
        .faq-layout {
          display: grid;
          grid-template-columns: minmax(220px, 1fr) minmax(0, 1.5fr);
          align-items: start;
          gap: clamp(48px, 8vw, 96px);
        }
        .faq-layout > :global(.reveal) {
          min-width: 0;
        }
        .questions {
          position: relative;
          width: 100%;
          min-height: 320px;
          padding-bottom: 1px;
        }
        .question {
          position: relative;
        }
        .faq-copy small {
          font-size: 10px;
          letter-spacing: 0.14em;
          color: #888;
        }
        .faq-copy h2 {
          font-size: 36px;
          line-height: 1.05;
          letter-spacing: -0.06em;
          font-weight: 500;
          margin: 15px 0;
        }
        .faq-copy p {
          color: #777;
          font-size: 14px;
        }
        .question {
          border-top: 1px solid #e7e7e7;
        }
        .question:last-child {
          border-bottom: 1px solid #e7e7e7;
        }
        .question button {
          width: 100%;
          padding: 19px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          background: none;
          border: 0;
          cursor: pointer;
          font: inherit;
          color: #111;
          font-size: 14px;
        }
        .question button svg {
          transition: 0.25s;
        }
        .question.open button svg {
          transform: rotate(180deg);
        }
        .question p {
          margin: -2px 30px 0 0;
          padding: 0 0 18px;
          color: #777;
          font-size: 13px;
          line-height: 1.5;
          animation: answer 0.25s ease;
        }
        @keyframes answer {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @media (max-width: 700px) {
          .faq {
            padding-bottom: 82px;
          }
          .faq-layout {
            display: block;
          }
          .faq-copy {
            margin-bottom: 42px;
          }
          .faq-layout > :global(.reveal) {
            width: 100%;
          }
          .faq-copy h2 {
            font-size: 34px;
          }
        }
      `}</style>
    </section>
  );
}
