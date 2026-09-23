"use client";

import SectionReveal from "./SectionReveal";

type Brand = {
  name: string;
  className: string;
  imageUrl: string;
};

const brands: Brand[] = [
  {
    name: "Notion",
    className: "notion",
    imageUrl:
      "/images/notion.png",
  },
  {
    name: "Spotify",
    className: "spotify",
    imageUrl:
      "/images/spotify.png",
  },
  {
    name: "Figma",
    className: "figma",
    imageUrl:
      "/images/figma.png",
  },
  {
    name: "Slack",
    className: "slack",
    imageUrl:
      "/images/slack.png",
  },
  {
    name: "Dropbox",
    className: "dropbox",
    imageUrl:
      "/images/dropbox.png",
  },
];

function BrandMark({ brand }: { brand: Brand }) {
  return (
    <div
      className={`logo logo-${brand.className}`}
      style={{
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginRight: 34,
        whiteSpace: "nowrap",
      }}
      role="listitem"
    >
      <span
        className="logo-mark"
        aria-hidden="true"
        style={{
          width: 18,
          height: 18,
          flex: "0 0 18px",
        }}
      >
        <img
          src={brand.imageUrl}
          alt=""
          loading="lazy"
          decoding="async"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </span>
      <span>{brand.name}</span>
    </div>
  );
}

function BrandSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="logo-set"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
      aria-hidden={duplicate || undefined}
    >
      {brands.map((brand) => (
        <BrandMark
          key={`${duplicate ? "duplicate-" : ""}${brand.name}`}
          brand={brand}
        />
      ))}
    </div>
  );
}

export default function TrustedBrands() {
  return (
    <section className="trusted" aria-labelledby="trusted-title">
      <SectionReveal>
        <p id="trusted-title" className="eyebrow">
          Loved by innovative teams
        </p>

        <div className="logo-window" aria-label="Customer brands">
          <div className="logo-track" role="list">
            <BrandSet />
            <BrandSet duplicate />
          </div>
        </div>
      </SectionReveal>

      <style jsx>{`
        .trusted {
          padding: 38px 24px 74px;
          text-align: center;
        }

        .eyebrow {
          margin: 0 0 26px;
          color: #999;
          font-size: 11px;
        }

        .logo-window {
          width: min(820px, 100%);
          margin: 0 auto;
          overflow: hidden;
          mask-image: linear-gradient(
            90deg,
            transparent,
            #000 9%,
            #000 91%,
            transparent
          );
        }

        .logo-track {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: max-content;
          animation: brand-loop 28s linear infinite;
          will-change: transform;
        }

        .logo-set {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: max-content;
          align-items: center;
          flex: 0 0 auto;
          width: max-content;
          min-width: max-content;
          gap: clamp(34px, 6vw, 78px);
          padding-right: clamp(34px, 6vw, 78px);
        }

        .logo {
          display: inline-flex;
          align-items: center;
          flex: 0 0 auto;
          gap: 6px;
          color: #85858d;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.03em;
          white-space: nowrap;
          transition:
            color 300ms ease,
            transform 300ms ease;
        }

        .logo:hover {
          color: #34343d;
          transform: translateY(-4px) scale(1.04);
        }

        .logo-mark {
          display: grid;
          width: 18px;
          height: 18px;
          place-items: center;
          flex: 0 0 18px;
          overflow: hidden;
          border-radius: 4px;
          background: transparent;
          transition:
            transform 450ms cubic-bezier(0.22, 1, 0.36, 1),
            background 450ms ease;
        }

        .logo-mark img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .logo-notion .logo-mark {
          background: #fff;
          border-radius: 3px;
        }
        .logo-spotify .logo-mark {
          background: #12c979;
          border-radius: 50%;
        }
        .logo-figma .logo-mark {
          background: #fff;
        }
        .logo-slack .logo-mark {
          background: #fff;
        }
        .logo-dropbox .logo-mark {
          background: #fff;
        }
        .logo:hover .logo-mark {
          transform: rotate(-7deg) scale(1.1);
        }

        .logo-track:hover {
          animation-play-state: paused;
        }

        @keyframes brand-loop {
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 600px) {
          .trusted {
            padding-bottom: 76px;
          }
          .logo-window {
            width: calc(100vw - 24px);
          }
          .logo-track {
            animation-duration: 34s;
          }
          .logo-set {
            gap: 32px;
            padding-right: 32px;
          }
          .logo {
            gap: 5px;
            font-size: 12px;
          }
          .logo-mark {
            width: 15px;
            height: 15px;
            flex-basis: 15px;
            border-radius: 3px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation: none;
            transform: none;
          }
          .logo:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
