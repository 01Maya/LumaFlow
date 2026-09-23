"use client";

import CursorTail from "@/components/CursorTail";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductShowcase from "@/components/ProductShowcase";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import TrustedBrands from "@/components/TrustedBrands";

export default function Page() {
  return (
    <div id="top" className="lumaflow-page">
      <CursorTail />
      <Navbar />

      <main>
        <Hero />
        <TrustedBrands />
        <Stats />
        <Features />
        <ProductShowcase />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />

      <style jsx global>{`
        .lumaflow-page {
          position: relative;
          isolation: isolate;
        }

        .lumaflow-page::before,
        .lumaflow-page::after {
          position: fixed;
          z-index: -1;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          pointer-events: none;
          content: "";
          filter: blur(70px);
        }

        .lumaflow-page::before {
          top: 15%;
          left: -180px;
          background: #f1f0ff;
          opacity: 0.42;
          animation: ambient-drift 16s ease-in-out infinite;
        }

        .lumaflow-page::after {
          right: -160px;
          bottom: 8%;
          width: 320px;
          height: 320px;
          background: #fff0ea;
          opacity: 0.34;
          animation: ambient-drift 20s -6s ease-in-out infinite;
        }

        @keyframes ambient-drift {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(30px, -24px, 0) scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lumaflow-page::before,
          .lumaflow-page::after {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
