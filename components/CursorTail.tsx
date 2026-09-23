"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 12;
const FOLLOW_SPEED = 0.18;

export default function CursorTail() {
  const trailRef = useRef<HTMLDivElement[]>([]);
  const pointerRef = useRef({ x: -100, y: -100 });
  const positionsRef = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 })),
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    if (!mediaQuery.matches) {
      return;
    }

    let animationFrame = 0;

    function handlePointerMove(event: PointerEvent) {
      pointerRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    }

    function animate() {
      const positions = positionsRef.current;
      const pointer = pointerRef.current;

      positions[0].x += (pointer.x - positions[0].x) * FOLLOW_SPEED;
      positions[0].y += (pointer.y - positions[0].y) * FOLLOW_SPEED;

      for (let index = 1; index < positions.length; index += 1) {
        const current = positions[index];
        const previous = positions[index - 1];

        current.x += (previous.x - current.x) * FOLLOW_SPEED;
        current.y += (previous.y - current.y) * FOLLOW_SPEED;
      }

      positions.forEach((position, index) => {
        const element = trailRef.current[index];

        if (!element) {
          return;
        }

        const scale = 1 - index / (TRAIL_LENGTH * 1.35);
        const opacity = 0.32 - index / (TRAIL_LENGTH * 2.8);

        element.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        element.style.opacity = `${Math.max(opacity, 0.04)}`;
      });

      animationFrame = window.requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="cursor-tail" aria-hidden="true">
      {Array.from({ length: TRAIL_LENGTH }, (_, index) => (
        <span
          className="cursor-tail-dot"
          key={index}
          ref={(element) => {
            if (element) {
              trailRef.current[index] = element;
            }
          }}
        />
      ))}

      <style jsx>{`
        .cursor-tail {
          position: fixed;
          z-index: 9999;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .cursor-tail-dot {
          position: absolute;
          top: 0;
          left: 0;
          width: 15px;
          height: 15px;
          border-radius: 999px;
          background: linear-gradient(135deg, #b7afea, #f2b6a2);
          box-shadow: 0 0 16px rgba(183, 175, 234, 0.28);
          opacity: 0;
          will-change: transform, opacity;
        }

        @media (max-width: 767px), (hover: none), (pointer: coarse) {
          .cursor-tail {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
