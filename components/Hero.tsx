"use client";
import { ArrowRight } from "lucide-react";
export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-image" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-copy">
        <p className="eyebrow">A quieter way to work</p>
        <h1>
          A calmer way
          <br />
          to get more done
        </h1>
        <p className="hero-sub">
          LumaFlow is an AI workspace that brings your tasks,
          <br className="desktop" /> meetings and notes together — so you can
          focus on what matters.
        </p>
        <a className="dark-btn" href="#product">
          Start for free <ArrowRight size={15} />
        </a>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          min-height: 650px;
          display: flex;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(#dce9f7 0%, #fff 84%);
        }
        .hero-image {
          position: absolute;
          inset: 0 0 auto;
          height: 610px;
          background: url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-9FD706A7-wKqlje2oeS5SkWfqWBS3qQufokDesS.jpeg")
            center 38% / cover no-repeat;
          animation: zoom 12s ease-out both;
        }
        .hero-image:after {
          content: "";
          position: absolute;
          inset: 45% 0 0;
          background: linear-gradient(transparent, #fff);
        }
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(2px);
          pointer-events: none;
          opacity: 0.45;
          animation: drift 9s ease-in-out infinite;
        }
        .hero-orb-one {
          width: 120px;
          height: 120px;
          right: 9%;
          top: 24%;
          background: #fff0ea;
        }
        .hero-orb-two {
          width: 84px;
          height: 84px;
          left: 8%;
          top: 30%;
          background: #e9f7ee;
          animation-delay: -3s;
        }
        .hero-copy {
          position: relative;
          text-align: center;
          margin-top: 375px;
          z-index: 1;
          animation: rise 0.9s 0.15s both;
        }
        .eyebrow {
          display: none;
          color: #777;
          font-size: 12px;
        }
        .hero h1 {
          font-size: clamp(46px, 6vw, 76px);
          line-height: 0.98;
          letter-spacing: -0.065em;
          font-weight: 500;
          margin: 0 0 18px;
          color: #111;
        }
        .hero-sub {
          font-size: 15px;
          line-height: 1.55;
          color: #686868;
          margin: 0 auto 24px;
        }
        .dark-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #151515;
          color: #fff;
          padding: 14px 21px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 12px;
          transition: 0.3s;
        }
        .dark-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 22px #0002;
        }
        .dark-btn:hover svg {
          transform: translateX(4px);
        }
        .dark-btn svg {
          transition: 0.3s;
        }
        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes zoom {
          from {
            transform: scale(1.03);
            opacity: 0.6;
          }
          to {
            transform: none;
            opacity: 1;
          }
        }
        @keyframes drift {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -14px, 0);
          }
        }
        @media (max-width: 600px) {
          .hero {
            min-height: 620px;
          }
          .hero-orb {
            opacity: 0.25;
          }
          .hero-orb-one {
            right: -28px;
            top: 22%;
          }
          .hero-orb-two {
            left: -20px;
            top: 29%;
          }
          .hero-image {
            height: 520px;
            background-image: url("/images/hero-landscape.jpeg");
            background-position: center 34%;
            background-size: cover;
          }
          .hero-copy {
            margin-top: 370px;
            padding: 0 22px;
          }
          .hero h1 {
            font-size: 48px;
          }
          .hero-sub {
            font-size: 14px;
          }
          .desktop {
            display: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-image,
          .hero-copy {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
