"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import SectionReveal from "./SectionReveal";
const quotes = [
  [
    "“LumaFlow has completely transformed the way our team works. We get more done with less stress.”",
    "Daniel Kim",
    "Product Lead, Spotify",
    "DK",
  ],
  [
    "“It gives our team the clarity to move quickly without the usual chaos.”",
    "Maya Chen",
    "Design Director, Figma",
    "MC",
  ],
];
export default function Testimonials() {
  const [i, setI] = useState(0);
  return (
    <section id="customers" className="customers">
      <SectionReveal>
        <div className="customer-copy">
          <small>CUSTOMERS</small>
          <h2>Trusted by modern teams</h2>
          <p className="customer-blurb">
            Join 10,000+ teams who work smarter
            <br /> with LumaFlow.
          </p>
        </div>
        <div className="quote">
          <div className={`avatar avatar-${i}`} aria-label={`${quotes[i][1]} avatar`}>
            {quotes[i][3]}
          </div>
          <div>
            <blockquote>{quotes[i][0]}</blockquote>
            <strong>{quotes[i][1]}</strong>
            <small>{quotes[i][2]}</small>
          </div>
          <div className="controls">
            <button
              aria-label="Previous testimonial"
              onClick={() => setI((i + quotes.length - 1) % quotes.length)}
            >
              <ChevronLeft />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => setI((i + 1) % quotes.length)}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </SectionReveal>
      <style jsx>{`
        .customers {
          max-width: 1020px;
          margin: auto;
          padding: 0 24px 72px;
        }
        .customers > :global(.reveal) {
          display: block;
        }
        .customer-copy {
          padding-top: 10px;
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          row-gap: 0;
        }
        .customer-copy small {
          font-size: 10px;
          letter-spacing: 0.14em;
          color: #888;
          width: 100%;
        }
        .customer-copy h2 {
          font-size: 36px;
          letter-spacing: -0.06em;
          font-weight: 500;
          margin: 15px 0 0;
          line-height: 1;
        }
        .customer-copy .customer-blurb {
          font-size: 14px;
          color: #777;
          line-height: 1.5;
          margin: 0 0 0 auto;
          max-width: 260px;
          text-align: right;
          transform: translateY(-8px);
        }
        .customer-copy a {
          display: inline-block;
          color: #111;
          font-size: 13px;
          text-decoration: none;
          margin-top: 14px;
        }
        .customer-copy a span {
          margin-left: 10px;
        }
        .quote {
          position: relative;
          margin-top: clamp(24px, 3vw, 36px);
          display: flex;
          gap: 22px;
          align-items: flex-start;
          padding: 30px 27px;
          border: 1px solid #eee;
          border-radius: 14px;
          box-shadow: 0 9px 24px #00000005;
          min-height: 190px;
          height: 190px;
          box-sizing: border-box;
        }
        .avatar {
          flex: 0 0 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e9e7fa, #ffd6c6);
          display: grid;
          place-items: center;
          font-weight: 600;
          color: #555;
          font-size: 13px;
          transition: background 300ms ease, transform 300ms ease;
        }
        .avatar-1 {
          background: linear-gradient(135deg, #dff1e7, #d9e7ff);
        }
        .quote blockquote {
          font-size: 14px;
          line-height: 1.55;
          margin: 0 0 16px;
          max-width: 330px;
        }
        .quote strong,
        .quote small {
          display: block;
          font-size: 12px;
        }
        .quote small {
          color: #888;
          margin-top: 4px;
        }
        .controls {
          position: absolute;
          bottom: 20px;
          right: 20px;
          display: flex;
          gap: 5px;
        }
        .controls button {
          border: 0;
          background: none;
          cursor: pointer;
          padding: 4px;
        }
        .controls svg {
          width: 18px;
        }
        .controls button:hover {
          color: #777;
        }
        @media (max-width: 700px) {
          .customers {
            padding-bottom: 56px;
          }
          .quote {
            display: grid;
            grid-template-columns: 48px minmax(0, 1fr);
            gap: 16px;
            margin-top: 24px;
            padding: 24px 20px 68px;
            min-height: 190px;
            height: 190px;
            box-sizing: border-box;
            overflow: hidden;
          }
          .avatar {
            flex-basis: 48px;
            width: 48px;
            height: 48px;
          }
          .quote blockquote {
            max-width: none;
            font-size: 13px;
            overflow-wrap: anywhere;
          }
          .controls {
            right: 16px;
            bottom: 16px;
          }
          .customer-copy h2 {
            font-size: 34px;
          }
        }
      `}</style>
    </section>
  );
}
