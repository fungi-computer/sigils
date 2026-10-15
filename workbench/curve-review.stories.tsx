import type { StoryDefault } from "@ladle/react";
import { useState } from "react";
import { Sigil, type SigilName } from "../src/index.js";
import { WatchfulEye } from "../src/motifs.js";
import "./library.css";
import "./curve-review.css";

type Reference = {
  name: SigilName;
  label: string;
  src: string;
  image: readonly [number, number];
  crop: readonly [number, number, number, number];
  bounds: readonly [number, number, number, number];
  opticalScale?: number;
};

const references: Reference[] = [
  {
    name: "generateText",
    label: "Generate text",
    src: new URL(
      "./permission-symbol-studies/permissions-nine-candidate.png",
      import.meta.url,
    ).href,
    image: [1536, 1024],
    crop: [575, 665, 365, 300],
    bounds: [25, 12, 330, 264],
  },
  {
    name: "generateMedia",
    label: "Generate media",
    src: new URL(
      "./permission-symbol-studies/media-picked.png",
      import.meta.url,
    ).href,
    image: [410, 350],
    crop: [0, 0, 410, 350],
    bounds: [42, 44, 320, 273],
  },
  {
    name: "listAgents",
    opticalScale: 1.04,
    label: "List agents",
    src: new URL(
      "./permission-symbol-studies/agent-chat-baubles-lead.png",
      import.meta.url,
    ).href,
    image: [1296, 1214],
    crop: [110, 170, 495, 395],
    bounds: [8, 8, 475, 376],
  },
  {
    name: "createAgents",
    opticalScale: 1.08,
    label: "Create agents",
    src: new URL(
      "./permission-symbol-studies/agent-chat-baubles-lead.png",
      import.meta.url,
    ).href,
    image: [1296, 1214],
    crop: [710, 140, 505, 430],
    bounds: [14, 10, 477, 410],
  },
  {
    name: "sendPrompts",
    opticalScale: 1.08,
    label: "Send prompts",
    src: new URL(
      "./permission-symbol-studies/agent-chat-baubles-lead.png",
      import.meta.url,
    ).href,
    image: [1296, 1214],
    crop: [725, 700, 490, 340],
    bounds: [8, 12, 474, 315],
  },
  {
    name: "readConversations",
    opticalScale: 0.9,
    label: "Read conversations",
    src: new URL(
      "./permission-symbol-studies/agent-chat-baubles-lead.png",
      import.meta.url,
    ).href,
    image: [1296, 1214],
    crop: [160, 690, 410, 370],
    bounds: [21, 24, 361, 311],
  },
  {
    name: "read",
    label: "Read files",
    src: new URL("./permission-symbol-studies/read-picked.png", import.meta.url)
      .href,
    image: [436, 374],
    crop: [0, 0, 436, 374],
    bounds: [53, 49, 331, 280],
  },
  {
    name: "write",
    label: "Write files",
    src: new URL("./brand-studies/approved-candy-symbols.png", import.meta.url)
      .href,
    image: [1536, 1024],
    crop: [1200, 315, 225, 210],
    bounds: [17, 14, 194, 187],
  },
];

/** Uniformly fit the reference's visible bounds to the same 56-unit icon area. */
function ReferenceArt({ reference }: { reference: Reference }) {
  const { src, image, crop, bounds } = reference;
  const [x, y, width, height] = bounds;
  const scale = (56 / Math.max(width, height)) * (reference.opticalScale ?? 1);
  const tx = (64 - width * scale) / 2 - x * scale;
  const ty = (64 - height * scale) / 2 - y * scale;
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <g
        transform={`translate(${String(tx)} ${String(ty)}) scale(${String(scale)})`}
      >
        <svg width={crop[2]} height={crop[3]} overflow="hidden">
          <image
            href={src}
            x={-crop[0]}
            y={-crop[1]}
            width={image[0]}
            height={image[1]}
          />
        </svg>
      </g>
    </svg>
  );
}

export const CurveReview = () => {
  const [opacity, setOpacity] = useState(1);
  const [outline, setOutline] = useState(true);
  return (
    <main className="sigils-page sigils-curve-review">
      <header className="sigils-hero">
        <div>
          <p className="sigils-kicker">SIGILS / CURVE REVIEW</p>
          <h1>Same curves. Shared parts.</h1>
          <p>
            Approved artwork beside the composed SVG, aligned at the same scale.
            The pink outline reveals where a curve differs.
          </p>
        </div>
        <a href="?story=sigils--library">Browse the library ↗</a>
      </header>
      <div className="sigils-review-controls">
        <label>
          <input
            type="checkbox"
            checked={outline}
            onChange={(event) => {
              setOutline(event.target.checked);
            }}
          />
          Outline overlay
        </label>
        <label>
          Vector opacity
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={opacity}
            onChange={(event) => {
              setOpacity(Number(event.target.value));
            }}
          />
        </label>
      </div>
      {references.map((reference) => (
        <section
          className="sigils-curve-row"
          key={reference.name}
          aria-label={reference.label}
        >
          <h2>{reference.label}</h2>
          <div className="sigils-curve-columns">
            <figure>
              <div className="sigils-curve-canvas">
                <ReferenceArt reference={reference} />
              </div>
              <figcaption>Approved reference</figcaption>
            </figure>
            <figure>
              <div className="sigils-curve-canvas">
                <Sigil name={reference.name} />
              </div>
              <figcaption>Composed SVG</figcaption>
            </figure>
            <figure>
              <div className="sigils-curve-canvas">
                <ReferenceArt reference={reference} />
                <div
                  className="sigils-curve-overlay"
                  data-outline={outline}
                  style={{ opacity }}
                >
                  <Sigil name={reference.name} />
                </div>
              </div>
              <figcaption>Aligned overlay</figcaption>
            </figure>
          </div>
          <div
            className="sigils-size-strip"
            aria-label={`${reference.label} at icon sizes`}
          >
            {[16, 24, 32, 48, 64].map((size) => (
              <figure key={size}>
                <div style={{ width: size, height: size }}>
                  <Sigil name={reference.name} />
                </div>
                <figcaption>{size}px</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
      <section className="sigils-shared-eye">
        <svg viewBox="-60 -35 120 70" aria-hidden="true">
          <WatchfulEye />
        </svg>
        <div>
          <h2>One watchful eye</h2>
          <p>
            The book and conversation bubble render this exact component. Their
            compositions only change its position and scale.
          </p>
        </div>
      </section>
    </main>
  );
};

export default { title: "Sigils" } satisfies StoryDefault;
