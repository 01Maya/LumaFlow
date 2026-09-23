"use client";

import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["Product", "#product"],
  ["Customers", "#customers"],
  ["Features", "#company"],
  ["FAQ", "#faq"],
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#top");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sectionElements = ["top", "product", "customers", "company", "faq"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sectionElements.forEach((section) => sectionObserver.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sectionObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <span
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <a className="brand" href="#top">
        <img
          className="brand-logo"
          src="/images/lumaflow-logo.png"
          alt=""
          aria-hidden="true"
        />
        <span>LumaFlow</span>
      </a>

      <nav aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a
            className={activeSection === href ? "active" : ""}
            key={label}
            href={href}
          >
            {label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#product">
        Start for free <span aria-hidden="true">→</span>
      </a>

      <button
        className="menu"
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {isMenuOpen && (
        <div className="mobile-menu">
          {links.map(([label, href]) => (
            <a
              className={activeSection === href ? "active" : ""}
              key={label}
              href={href}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a className="mobile-cta" href="#product" onClick={closeMenu}>
            Start for free <span aria-hidden="true">→</span>
          </a>
        </div>
      )}

      <style jsx>{`
        .scroll-progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, #b8b0ed, #f3b7a1, #abd9bd);
          box-shadow: 0 0 12px #d5cffa;
          transition: width 180ms ease-out;
        }

        .nav {
          position: fixed;
          z-index: 10;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          height: 76px;
          align-items: center;
          justify-content: space-between;
          padding: 0 max(24px, calc((100vw - 1280px) / 2));
          transition:
            background 350ms,
            border 350ms,
            box-shadow 350ms;
        }

        .nav.scrolled {
          border-bottom: 1px solid #eaeaea;
          background: #ffffffd9;
          box-shadow: 0 8px 30px #11111108;
          backdrop-filter: blur(18px);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #111;
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
        }

    .brand-logo {
      display: block;
      width: 25px;
      height: 25px;
      object-fit: contain;
    }

        .nav nav {
          display: flex;
          gap: 38px;
          margin-left: 100px;
        }

        .nav nav a,
        .mobile-menu a {
          position: relative;
          color: #686868;
          font-size: 12px;
          text-decoration: none;
          transition: color 250ms ease;
        }

        .nav nav a::after,
        .mobile-menu a::after {
          position: absolute;
          right: 100%;
          bottom: -9px;
          left: 0;
          height: 2px;
          border-radius: 2px;
          background: #111;
          content: "";
          transition: right 300ms ease;
        }

        .nav nav a:hover,
        .nav nav a.active,
        .mobile-menu a:hover,
        .mobile-menu a.active {
          color: #111;
        }

        .nav nav a.active::after,
        .mobile-menu a.active::after {
          right: 0;
        }

        .nav-cta,
        .mobile-cta {
          border-radius: 999px;
          background: #161616;
          color: #fff !important;
          font-size: 12px;
          padding: 12px 19px;
          text-decoration: none;
          transition:
            transform 250ms ease,
            box-shadow 250ms ease;
        }

        .nav-cta:hover,
        .mobile-cta:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 18px #0002;
        }

        .nav-cta span,
        .mobile-cta span {
          display: inline-block;
          margin-left: 10px;
          transition: transform 250ms ease;
        }

        .nav-cta:hover span,
        .mobile-cta:hover span {
          transform: translateX(4px);
        }

        .menu,
        .mobile-menu {
          display: none;
        }

        @media (max-width: 760px) {
          .nav {
            height: 64px;
            padding: 0 20px;
          }

          .nav nav,
          .nav-cta {
            display: none;
          }

          .menu {
            display: grid;
            width: 44px;
            height: 44px;
            place-items: center;
            border: 0;
            background: transparent;
            color: #111;
            cursor: pointer;
          }

          .mobile-menu {
            position: absolute;
            top: 58px;
            right: 12px;
            left: 12px;
            display: flex;
            flex-direction: column;
            gap: 24px;
            padding: 28px 24px;
            border: 1px solid #eaeaea;
            border-radius: 20px;
            background: #fffffff5;
            box-shadow: 0 20px 50px #11111112;
            backdrop-filter: blur(18px);
          }
        }
      `}</style>
    </header>
  );
}
