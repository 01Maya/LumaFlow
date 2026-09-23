export default function Footer() {
  const links = [
    { label: "Product", href: "#product" },
    { label: "Customers", href: "#customers" },
    { label: "Features", href: "#company" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer id="resources" className="footer">
      <div className="wave" aria-hidden="true">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path
            className="wave-back"
            d="M0 105 C180 160 270 10 480 75 S780 170 1010 90 S1260 30 1440 95 V180 H0Z"
          />
          <path
            className="wave-middle"
            d="M0 125 C200 185 300 45 520 105 S810 175 1030 110 S1270 55 1440 115 V180 H0Z"
          />
          <path
            className="wave-front"
            d="M0 145 C170 195 340 80 550 130 S850 195 1060 135 S1280 90 1440 140 V180 H0Z"
          />
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-top">
          <div>
            <a className="brand" href="#top" aria-label="LumaFlow home">
              <img
                className="brand-logo"
                src="/images/lumaflow-logo.png"
                alt=""
                aria-hidden="true"
              />
              <span>LumaFlow</span>
            </a>
            <p>A brighter way to work.</p>
          </div>

          <nav aria-label="Footer navigation">
            {links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="social" aria-label="Social links">
            <a href="#" aria-label="LinkedIn">
              in
            </a>
            <a href="#" aria-label="X">
              𝕏
            </a>
            <a href="#" aria-label="YouTube">
              ▶
            </a>
            <a href="#" aria-label="GitHub">
              ◉
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 LumaFlow. All rights reserved.</span>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          overflow: hidden;
          padding: 110px max(24px, calc((100vw - 1140px) / 2)) 28px;
          background: #fff;
        }

        .footer-content {
          position: relative;
          z-index: 1;
        }
        .wave {
          position: absolute;
          right: 0;
          bottom: -1px;
          left: 0;
          height: 160px;
          pointer-events: none;
        }
        .wave svg {
          display: block;
          width: 100%;
          height: 100%;
        }
        .wave path {
          transform-box: fill-box;
          transform-origin: center bottom;
          will-change: transform;
          animation: wave-breathe 14s cubic-bezier(0.37, 0, 0.63, 1) infinite;
        }
        .wave-back {
          fill: #e9e7fa;
          opacity: 0.72;
          animation-duration: 18s !important;
        }
        .wave-middle {
          fill: #fff0ea;
          opacity: 0.82;
          animation-duration: 11s !important;
          animation-delay: -3s;
        }
        .wave-front {
          fill: #e9f7ee;
          opacity: 0.86;
          animation-duration: 9s !important;
          animation-delay: -5s;
        }
        @keyframes wave-breathe {
          0%,
          100% {
            transform: translate3d(-1%, 0, 0) scaleY(1);
          }

          50% {
            transform: translate3d(1%, -1px, 0) scaleY(1.015);
          }
        }

        .footer-top,
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #30303a;
          text-decoration: none;
          font-size: 19px;
          font-weight: 500;
        }
        .brand-logo {
          display: block;
          width: 28px;
          height: 28px;
          object-fit: contain;
        }
        .brand span {
          margin-right: 5px;
          color: #777;
        }
        .footer-top p {
          margin: 11px 0 0;
          color: #888;
          font-size: 12px;
        }
        nav,
        .footer-bottom div {
          display: flex;
          gap: 25px;
        }
        nav a,
        .footer-bottom a {
          color: #777;
          font-size: 12px;
          text-decoration: none;
          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }
        nav a:hover,
        .footer-bottom a:hover {
          color: #111;
          transform: translateY(-2px);
        }
        .social {
          display: flex;
          gap: 17px;
        }
        .social a {
          color: #777;
          font-size: 14px;
          text-decoration: none;
          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }
        .social a:hover {
          color: #111;
          transform: translateY(-3px);
        }
        .footer-bottom {
          margin-top: 64px;
          color: #888;
          font-size: 12px;
        }

        @media (max-width: 700px) {
          .footer {
            padding-top: 78px;
          }
          .footer-top,
          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 28px;
          }
          nav {
            flex-wrap: wrap;
            gap: 16px 22px;
          }
          .footer-bottom {
            margin-top: 48px;
            gap: 18px;
          }
          .footer-bottom div {
            gap: 18px;
          }
          .wave {
            height: 105px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wave path,
          nav a,
          .social a,
          .footer-bottom a {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </footer>
  );
}
