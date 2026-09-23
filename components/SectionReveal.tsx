"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionReveal({
  children,
  className = "",
}: SectionRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -7% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${className} reveal ${isVisible ? "is-visible" : ""}`}
    >
      {children}

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translate3d(0, 28px, 0) scale(0.985);
          filter: blur(3px);
          transition:
            opacity 900ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 900ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform, filter;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          filter: blur(0);
        }

        .reveal.is-visible :global(.feature-grid),
        .reveal.is-visible :global(.stats-grid),
        .reveal.is-visible :global(.testimonial-card),
        .reveal.is-visible :global(.faq-list) {
          animation: soft-focus 1100ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .reveal.is-visible :global(.feature-grid)::after,
        .reveal.is-visible :global(.stats-grid)::after {
          animation: shimmer-line 3s 1s ease-in-out infinite;
        }

        @keyframes soft-focus {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
            filter: blur(4px);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes shimmer-line {
          0%,
          100% {
            opacity: 0.15;
            transform: translateX(-10%);
          }
          50% {
            opacity: 0.65;
            transform: translateX(10%);
          }
        }

        .reveal.is-visible :global(h1),
        .reveal.is-visible :global(h2),
        .reveal.is-visible :global(h3),
        .reveal.is-visible :global(.eyebrow),
        .reveal.is-visible :global(article),
        .reveal.is-visible :global(.product-copy),
        .reveal.is-visible :global(.workspace-card) {
          animation: content-rise 800ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .reveal.is-visible :global(p) {
          animation: content-rise 800ms 100ms cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .reveal.is-visible :global(a),
        .reveal.is-visible :global(button) {
          animation: content-rise 800ms 170ms cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .reveal.is-visible :global(article:nth-child(2)),
        .reveal.is-visible :global(.question:nth-child(2)) {
          animation-delay: 90ms;
        }
        .reveal.is-visible :global(article:nth-child(3)),
        .reveal.is-visible :global(.question:nth-child(3)) {
          animation-delay: 180ms;
        }
        .reveal.is-visible :global(article:nth-child(4)),
        .reveal.is-visible :global(.question:nth-child(4)) {
          animation-delay: 270ms;
        }

  .reveal.is-visible :global(.eyebrow) {
  animation: content-rise 800ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }

        @keyframes eyebrow-glow {
          0%,
          100% {
            opacity: 0.72;
            letter-spacing: 0.14em;
          }
          50% {
            opacity: 1;
            letter-spacing: 0.18em;
          }
        }

        @keyframes content-rise {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes soft-breathe {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .reveal.is-visible :global(.workspace-card) {
          animation:
            content-rise 800ms cubic-bezier(0.22, 1, 0.36, 1) both,
            soft-breathe 7s 1s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .reveal.is-visible {
            opacity: 1;
            transform: none;
            filter: none;
            transition: none;
          }

          .reveal.is-visible :global(h1),
          .reveal.is-visible :global(h2),
          .reveal.is-visible :global(h3),
          .reveal.is-visible :global(.eyebrow),
          .reveal.is-visible :global(article),
          .reveal.is-visible :global(.product-copy),
          .reveal.is-visible :global(.workspace-card),
          .reveal.is-visible :global(p),
          .reveal.is-visible :global(a),
          .reveal.is-visible :global(button) {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
