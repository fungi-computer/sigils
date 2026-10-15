import type { ReactNode } from "react";
import { GenerateMediaArtwork, GenerateTextArtwork } from "./generation-art.js";
import {
  ComputerArtwork,
  PrintsArtwork,
  InkcapArtwork,
} from "./approved-app-art.js";
import {
  ActionRays,
  FaceEyes,
  GroveBubbles,
  InkTrail,
  OpenBook,
  Pencil,
  SpeechBubble,
  SpeakingMouth,
  TaperedRay,
  WatchfulEye,
  art,
  figure,
} from "./motifs.js";

// Illustration roles are independent of control-state colours.
const { coral, blue, mint, grape, yellow, cream, ink } = art;

const symbols = {
  // Retained Bonsai favicon branching mark, scaled from its 32px viewBox.
  bonsai: (
    <g transform="scale(2)">
      <rect width="32" height="32" rx="8" fill="#242c28" />
      <path
        d="M9 23V9m0 4c0 4 14 2 14 9"
        fill="none"
        stroke="#63cfaa"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="9" cy="9" r="3" fill="#43a6f2" />
      <circle cx="9" cy="23" r="3" fill="#fff4de" />
      <circle cx="23" cy="22" r="3" fill="#ff6558" />
    </g>
  ),
  computer: <ComputerArtwork />,
  prints: <PrintsArtwork />,
  inkcap: <InkcapArtwork />,
  vishnu: (
    <>
      <path
        style={{ fill: coral }}
        d="M6 37C6 21 17.5 9 32 9s26 12 26 28c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4Z"
      />
      <circle style={{ fill: cream }} cx="19" cy="25" r="4" />
      <circle style={{ fill: cream }} cx="33" cy="19.5" r="4.8" />
      <circle style={{ fill: cream }} cx="46" cy="28" r="3.4" />
      <rect
        style={{ fill: blue }}
        x="13"
        y="39"
        width="38"
        height="18"
        rx="9"
      />
      <rect
        style={{ fill: cream }}
        x="18.5"
        y="46.2"
        width="10"
        height="3.6"
        rx="1.8"
      />
      <rect
        style={{ fill: cream }}
        x="21.7"
        y="43"
        width="3.6"
        height="10"
        rx="1.8"
      />
      <circle style={{ fill: yellow }} cx="39" cy="50.5" r="2.7" />
      <circle style={{ fill: cream }} cx="45" cy="45.5" r="2.7" />
    </>
  ),
  generateText: <GenerateTextArtwork />,
  generateMedia: <GenerateMediaArtwork />,
  buyApps: (
    <g transform="rotate(-6 32 32)">
      <circle fill={yellow} cx="32" cy="20" r="12" />
      <circle stroke={cream} strokeWidth="4" cx="32" cy="20" r="6" />
      <TaperedRay
        fill={yellow}
        transform="translate(15.5 12) rotate(-60) scale(1.1 .85)"
      />
      <TaperedRay
        fill={yellow}
        transform="translate(48.5 12) rotate(60) scale(1.1 .85)"
      />
      <path fill={blue} d="M10 35H54L50 53Q49 58 44 58H20Q15 58 14 53Z" />
      <rect fill={coral} x="5" y="27" width="54" height="10" rx="5" />
      <g fill={cream}>
        <rect x="20" y="41" width="5" height="11" rx="2.5" />
        <rect x="29.5" y="41" width="5" height="11" rx="2.5" />
        <rect x="39" y="41" width="5" height="11" rx="2.5" />
      </g>
    </g>
  ),
  browseBazaar: (
    <g transform="rotate(-5 32 32)">
      <rect fill={blue} x="10" y="14" width="44" height="38" rx="6" />
      <rect fill={blue} x="5" y="47" width="54" height="12" rx="6" />
      <rect fill={cream} x="12" y="50.5" width="40" height="4.5" rx="2.25" />
      <rect fill={coral} x="2" y="4" width="60" height="9" rx="4.5" />
      <path fill={coral} d="M3 9H14.6V18A5.8 5.8 0 0 1 3 18Z" />
      <path fill={cream} d="M14.6 9H26.2V18A5.8 5.8 0 0 1 14.6 18Z" />
      <path fill={coral} d="M26.2 9H37.8V18A5.8 5.8 0 0 1 26.2 18Z" />
      <path fill={cream} d="M37.8 9H49.4V18A5.8 5.8 0 0 1 37.8 18Z" />
      <path fill={coral} d="M49.4 9H61V18A5.8 5.8 0 0 1 49.4 18Z" />
      <g transform="translate(32 36.5) scale(.34)">
        <WatchfulEye />
      </g>
    </g>
  ),
  agent: (
    <g transform="translate(32 33) scale(2.02) translate(-47.2 -41.8)">
      <path
        fill={blue}
        d="M46.666 29.533C39.623 30.116 34.627 34.849 34.603 40.96 34.585 45.387 36.412 47.971 40.602 49.445 42.036 49.95 42.076 50.049 41.491 51.666 40.968 53.111 41.167 53.761 42.201 53.988 43.463 54.265 46.679 52.293 47.929 50.475 48.134 50.178 48.268 50.13 49.332 49.977 56.938 48.882 60.956 43.889 59.582 37.237 58.622 32.59 53.42 29.07 48.034 29.424 47.904 29.432 47.289 29.482 46.666 29.533Z"
      />
      <g transform="translate(47.3 40) scale(.36 .34)">
        <FaceEyes />
      </g>
    </g>
  ),
  list: (
    <g transform="rotate(-7 32 32)">
      <path
        style={{ fill: blue }}
        d="M12 13Q6 13 6 19V50Q6 57 13 57H47Q53 57 53 50V20Q53 13 47 13Z"
      />
      <path
        style={{ fill: cream }}
        d="M19 7H39Q42 7 44 9L55 20Q57 22 57 26V44Q57 50 51 50H19Q13 50 13 44V13Q13 7 19 7Z"
      />
      <path
        style={{ fill: coral }}
        d="M39 7V18Q39 24 45 24H57Q57 22 55 20L44 9Q42 7 39 7Z"
      />
      <g style={{ fill: coral }}>
        <circle cx="22" cy="21" r="3" />
        <circle cx="22" cy="31" r="3" />
        <circle cx="22" cy="41" r="3" />
      </g>
      <path
        style={{ stroke: blue }}
        strokeWidth="5"
        strokeLinecap="round"
        d="M31 21H32M31 31H46M31 41H42"
      />
    </g>
  ),
  chat: (
    <>
      <g transform="translate(3 11) scale(.22) translate(-449 -327)">
        <GroveBubbles />
      </g>
      <TaperedRay transform="translate(38.2 18) rotate(16) scale(.95 .6)" />
      <TaperedRay transform="translate(44.4 20.5) rotate(47) scale(.95 .6)" />
    </>
  ),
  read: (
    <>
      <g transform="translate(4 20.5) scale(.56)">
        <OpenBook />
      </g>
      <g transform="translate(32 38.6) scale(.3164)">
        <WatchfulEye />
      </g>
      <ActionRays />
    </>
  ),
  readConversations: (
    <g transform="translate(32 32) scale(.9) translate(-32 -32)">
      <g transform="translate(4 7.88) scale(.56)">
        <SpeechBubble fill={blue} />
      </g>
      <g transform="translate(32.2 30.3) scale(.352)">
        <WatchfulEye />
      </g>
    </g>
  ),
  listAgents: (
    <g transform="translate(32 32) scale(1.04) translate(-32 -32)">
      <path
        style={{ fill: figure }}
        d="M32.059 10.146C23.878 10.646 18.949 14.844 18.925 21.331 18.912 24.856 20.167 27.259 22.274 27.74 24.437 28.233 26.097 29.061 27.481 30.337 28.275 31.068 28.328 31.096 29.352 31.306 31.161 31.677 31.653 32.094 32.115 33.651 32.392 34.582 32.557 34.868 32.915 35.041 33.919 35.523 35.864 33.733 36.539 31.706L36.775 30.997 38.008 30.681C42.663 29.489 45.29 26.142 45.468 21.176 45.734 13.784 40.673 9.62 32.059 10.146Z"
      />
      <g transform="translate(32.4 21.2) scale(.39)">
        <FaceEyes onFigure />
      </g>
      <path
        style={{ fill: coral }}
        d="M14.375 27.586C8.014 28.591 4.363 32.396 4.355 38.027 4.347 43.93 8.071 47.469 15.239 48.368L16.828 48.568 17.873 49.568C19.854 51.464 22.469 52.496 23.691 51.864 24.384 51.506 24.431 51.044 23.924 49.606 23.337 47.943 23.479 47.492 24.749 46.977 32.756 43.73 32.643 31.899 24.573 28.49 22.238 27.504 17.535 27.087 14.375 27.586Z"
      />
      <g transform="translate(17.6 37.7) scale(.38 .36)">
        <FaceEyes />
      </g>
      <path
        style={{ fill: blue }}
        d="M46.666 29.533C39.623 30.116 34.627 34.849 34.603 40.96 34.585 45.387 36.412 47.971 40.602 49.445 42.036 49.95 42.076 50.049 41.491 51.666 40.968 53.111 41.167 53.761 42.201 53.988 43.463 54.265 46.679 52.293 47.929 50.475 48.134 50.178 48.268 50.13 49.332 49.977 56.938 48.882 60.956 43.889 59.582 37.237 58.622 32.59 53.42 29.07 48.034 29.424 47.904 29.432 47.289 29.482 46.666 29.533Z"
      />
      <g transform="translate(47.3 40) scale(.36 .34)">
        <FaceEyes />
      </g>
    </g>
  ),
  createAgents: (
    <g transform="translate(32 32) scale(1.08) translate(-32 -32)">
      <path
        style={{ fill: figure }}
        d="M20.436 24.499C13.35 25.216 7.504 28.799 5.442 33.687 3.114 39.208 4.438 45.791 8.593 49.358 10.446 50.949 10.34 50.831 10.34 51.301 10.34 51.796 10.106 52.294 9.281 53.558 7.191 56.76 12.108 56.905 16.701 53.777 17.517 53.221 17.715 53.135 18.015 53.201 20.013 53.639 25.739 53.051 28.595 52.113 35.47 49.857 39.129 44.162 37.83 37.738C37 31 33 26 26.717 24.428L24.075 24.413C22.623 24.405 20.985 24.444 20.436 24.499Z"
      />
      <g transform="translate(21.9 40) scale(.46 .43)">
        <FaceEyes onFigure />
      </g>
      <path
        style={{ fill: mint }}
        d="M37.987 15.734C32.277 16.627 28.675 20.713 28.92 26.022 29.062 29.118 30.627 31.606 33.331 33.036 34.675 33.747 34.761 34.018 34.237 35.923 33.376 39.051 36.878 38.551 39.174 35.218 39.574 34.637 39.65 34.583 40.058 34.583 46.203 34.583 50.414 30.91 50.424 25.543 50.435 18.989 44.932 14.649 37.987 15.734Z"
      />
      <g transform="translate(38.9 24.9) scale(.31)">
        <FaceEyes />
      </g>
      <TaperedRay
        fill={yellow}
        transform="translate(48.1 15.7) rotate(31) scale(1.25 .85)"
      />
      <TaperedRay
        fill={yellow}
        transform="translate(52.2 19.8) rotate(70) scale(1.25 .85)"
      />
    </g>
  ),
  sendPrompts: (
    <g transform="translate(32 32) scale(1.08) translate(-32 -32)">
      <g transform="translate(4 13.2) scale(.412 .436)">
        <SpeechBubble fill={coral} />
      </g>
      <g transform="translate(17.1 28.7) scale(.19)">
        <SpeakingMouth />
      </g>
      <TaperedRay
        fill={mint}
        transform="translate(48.1 26.4) rotate(65) scale(1.7 1.28)"
      />
      <TaperedRay
        fill={mint}
        transform="translate(48.4 33.8) rotate(110) scale(1.7 1.28)"
      />
    </g>
  ),
  write: (
    <>
      <Pencil />
      <InkTrail />
    </>
  ),
  run: (
    <>
      <rect style={{ fill: blue }} x="6" y="9" width="52" height="43" rx="7" />
      <path
        style={{ stroke: cream }}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m17 22 9 8-9 8m17 0h12"
      />
    </>
  ),
  connected: (
    <>
      <path
        fill="none"
        style={{ stroke: blue }}
        strokeWidth="12"
        strokeLinecap="round"
        d="M34 37Q43 21 26 20H18Q3 20 6 37q2 10 15 9"
      />
      <path
        fill="none"
        style={{ stroke: coral }}
        strokeWidth="12"
        strokeLinecap="round"
        d="M29 33Q20 50 38 53h8q16-1 12-17-2-11-14-10"
      />
      <path
        style={{ stroke: yellow }}
        strokeWidth="4"
        strokeLinecap="round"
        d="m27 4 2 6m10-5-2 7m12 0-5 4"
      />
    </>
  ),
  working: (
    <>
      <ellipse
        style={{ fill: mint }}
        cx="23"
        cy="14"
        rx="13"
        ry="8"
        transform="rotate(-30 23 14)"
      />
      <ellipse
        style={{ fill: yellow }}
        cx="48"
        cy="36"
        rx="13"
        ry="8"
        transform="rotate(35 48 36)"
      />
      <ellipse
        style={{ fill: grape }}
        cx="22"
        cy="48"
        rx="13"
        ry="8"
        transform="rotate(45 22 48)"
      />
      <path
        fill="none"
        style={{ stroke: figure }}
        strokeWidth="3"
        strokeLinecap="round"
        d="M42 8q13 2 13 13M43 55q-5 5-12 4M5 39q-5-9 1-17"
      />
    </>
  ),
  complete: (
    <>
      <path
        style={{ fill: mint }}
        d="M32 6q5-8 10 0 9-3 10 6 9 2 5 11 8 6 0 12 3 9-6 11-1 9-10 6-6 8-12 0-9 3-11-6-9-2-6-11-8-6 0-12-3-9 6-11 1-9 10-6Z"
      />
      <path
        fill="none"
        style={{ stroke: ink }}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m23 29 7 7 13-15"
      />
      <path
        style={{ stroke: figure }}
        strokeWidth="3"
        strokeLinecap="round"
        d="m4 8 5 6m48-4 5-5M2 24l6 1"
      />
    </>
  ),
  // An App tile dropping into place: another App installed into the Team.
  installApps: (
    <g transform="rotate(-6 32 32)">
      <rect
        style={{ fill: blue }}
        x="9"
        y="26"
        width="46"
        height="32"
        rx="10"
      />
      <rect
        style={{ fill: cream }}
        x="17"
        y="33"
        width="30"
        height="18"
        rx="5"
      />
      <path style={{ fill: mint }} d="M22 38h8v8h-8z" />
      <path style={{ fill: grape }} d="M34 38h8v8h-8z" />
      <path
        style={{ stroke: coral }}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M32 4v17m-8-7 8 8 8-8"
      />
    </g>
  ),
  restricted: (
    <>
      <path
        fill="none"
        style={{ stroke: coral }}
        strokeWidth="9"
        strokeLinecap="round"
        d="M16 23V19q0-17 16-17t16 17v4"
      />
      <rect
        style={{ fill: coral }}
        x="8"
        y="26"
        width="48"
        height="36"
        rx="9"
      />
      <path
        style={{ fill: cream }}
        d="M32 34a7 7 0 0 0-4 13v7h8v-7a7 7 0 0 0-4-13Z"
      />
    </>
  ),
  error: (
    <>
      <path
        style={{ fill: coral }}
        d="M32 6q5-8 10 0 9-3 10 6 9 2 5 11 8 6 0 12 3 9-6 11-1 9-10 6-6 8-12 0-9 3-11-6-9-2-6-11-8-6 0-12-3-9 6-11 1-9 10-6Z"
      />
      <path
        fill="none"
        style={{ stroke: cream }}
        strokeWidth="7"
        strokeLinecap="round"
        d="M32 18v15"
      />
      <circle style={{ fill: cream }} cx="32" cy="45" r="4" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type SigilName = keyof typeof symbols;

/** Check an App declaration's icon against the maintained Sigil vocabulary. */
export function isSigilName(name: string): name is SigilName {
  return Object.hasOwn(symbols, name);
}

/** Decorative identities; the enclosing control owns its accessible name. */
export function Sigil({ name, size }: { name: SigilName; size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      stroke="none"
      aria-hidden="true"
      focusable="false"
      data-sigil={name}
    >
      {symbols[name]}
    </svg>
  );
}
