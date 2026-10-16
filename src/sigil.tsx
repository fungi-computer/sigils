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
  Leaf,
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
  // Bonsai: a potted tree whose branches end in commits.
  bonsai: (
    <>
      <path
        fill="none"
        stroke={mint}
        strokeWidth="3.7"
        strokeLinecap="round"
        d="M35 27.5C36 25 35.5 22.5 34 21S31.5 17.5 31.5 14M36 27C40 26.8 43 26 45 24S47 20.5 47.5 18.5M30.5 31C32.5 26.5 30.5 24.6 26.5 24 22 23.5 18.5 21.6 16.8 18.5M29 37C26.5 34.5 25 33.7 21.5 33.2S15.5 32 13 31.6M36 39.5C38 38 40 37.5 42 36.5S47 34 51 32.2"
      />
      <path
        fill={mint}
        d="M25.5 43.5C28 40.5 28 37 27.5 33 27.3 29.5 29.5 27 33.5 26.3L37.5 26V29.5C35 29.8 34.2 31.5 34.3 34 34.5 37.5 37 39.5 41 43.5Z"
      />
      <circle fill={blue} cx="31.5" cy="10.7" r="4.8" />
      <circle fill={grape} cx="16.6" cy="18.3" r="4.6" />
      <circle fill={yellow} cx="47.9" cy="17.7" r="4.6" />
      <circle fill={yellow} cx="12.8" cy="31.5" r="4.6" />
      <circle fill={blue} cx="50.9" cy="32.1" r="4.6" />
      <path
        fill={coral}
        d="M16 46H47.5C47.5 54 44 58 38 58H25.5C19.5 58 16 54 16 46Z"
      />
      <rect fill={coral} x="14" y="43" width="35.5" height="4.6" rx="2.3" />
    </>
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
  // Trellis: workflow steps growing up a trellis.
  trellis: (
    <>
      <g fill={yellow}>
        <rect x="17.25" y="9" width="3.9" height="49.2" rx="1.95" />
        <rect x="42.95" y="9" width="3.9" height="49.2" rx="1.95" />
        <rect x="30.4" y="18" width="3.2" height="26" />
        <rect x="14.8" y="15.75" width="34.4" height="3.1" rx="1.55" />
        <rect x="14.8" y="28.85" width="34.4" height="3.1" rx="1.55" />
        <rect x="14.8" y="42.55" width="34.4" height="3.1" rx="1.55" />
      </g>
      <path
        fill="none"
        stroke={mint}
        strokeWidth="3"
        strokeLinecap="round"
        d="M21.9 56.1C31.5 54.4 32.9 47 32.1 45.8"
      />
      <path
        fill="none"
        stroke={mint}
        strokeWidth="3"
        strokeLinecap="round"
        d="M32 44.2C28.7 41.8 25.2 35.7 32 32.3 38.8 28 38.9 24 31.9 18.8 32.4 16.3 32.8 14.7 34.5 12.2"
      />
      <Leaf transform="translate(32.1 14.1) rotate(45) scale(0.45 0.86)" />
      <Leaf transform="translate(32.2 14.7) rotate(-60) scale(0.42 0.58)" />
      <Leaf transform="translate(34.8 28.3) rotate(65) scale(0.38 0.8)" />
      <Leaf transform="translate(28.2 33.1) rotate(-51) scale(0.5 0.57)" />
      <Leaf transform="translate(28.6 53.3) rotate(-48) scale(0.47 0.6)" />
      <circle fill={coral} cx="31.9" cy="18.8" r="4" />
      <circle fill={blue} cx="32" cy="32.3" r="4" />
      <circle fill={grape} cx="32" cy="44.2" r="4" />
    </>
  ),
  // Games: an arcade stick for the Team's game servers.
  games: (
    <>
      <path
        fill={blue}
        d="M18.5 28.5H45.5C49.5 29.5 53 32 54 35 55 37.5 56.8 45.5 56.6 48 56.5 53 52.5 57.5 47 58H15C9.5 56.5 6.6 51 7.6 45.5 8.6 39.5 9.3 35 10.5 33 12 31 14.5 29.5 18.5 28.5Z"
      />
      <ellipse fill={cream} cx="26.8" cy="37.9" rx="9.1" ry="5.6" />
      <ellipse fill={ink} cx="27" cy="37.6" rx="4.7" ry="2.2" />
      <path fill={ink} d="M23.1 26V35.4A4 4.2 0 0 0 31.1 35.4V26Z" />
      <circle fill={coral} cx="27.1" cy="18.3" r="12.4" />
      <circle fill={cream} cx="22.6" cy="14.3" r="3.05" />
      <ellipse fill={yellow} cx="45.1" cy="37.2" rx="5.6" ry="3.95" />
      <ellipse fill={cream} cx="40.1" cy="46.6" rx="6.2" ry="4.4" />
    </>
  ),
  // Oyster: the open shell that holds the Apps' pearl.
  oyster: (
    <>
      <path
        fill={grape}
        d="M35.5 6C33.7 6.3 32.3 7.6 31.4 9.4 30.9 10.3 30.4 10.3 29.5 10 25.5 9 20.6 11.6 19.6 15.9 19.4 16.6 19 17 18 17.1 14.5 17.6 12 20.6 12.1 24.2 12.2 25.4 12 25.9 11.5 26.5 7.5 30 10.5 34.5 17.5 34.4 15.3 32.6 16 31 19 29 26 24 37 19.5 43.5 19 46 19 46 22 43 25.5 46.5 23.5 51.5 18.5 53.5 15 55 11 50 7 45 9 43.8 9.4 43.3 9.2 42.5 8 40.7 6.3 38 5.6 35.5 6Z"
      />
      <circle fill={cream} cx="34.9" cy="41.9" r="11.3" />
      <g fill={ink}>
        <rect x="29.9" y="33.2" width="3.2" height="5.6" rx="1.6" />
        <rect x="36.7" y="33.2" width="3.2" height="5.6" rx="1.6" />
      </g>
      <path
        fill={grape}
        d="M49.5 39C47.9 39.3 46.5 40 46.1 41.6 45.8 43.2 45.5 43.5 44 43.5 38.5 43.5 35 48 39 49.5 40 50 39.5 50.5 38 51 35.5 52.5 32.5 52 30 51 29 50.5 28.5 50 29.5 50 33 47.5 30 43.5 24.5 43.5 23.3 43.5 22.9 43.3 22.5 43 20.5 40.5 19 40 17.5 39.5 13 39.5 13 44 17 47.5 18.3 48.4 18.6 48.7 19 49.5 20.5 53 23 55 26 55 26.8 55 27 55.3 27.5 56 31 58.5 36.5 58.5 40 56 40.8 55.2 41.2 55 42 55 45 55 47.5 53 49 49.5 49.6 48.5 50 48 50.5 47.5 56 43.5 55 38.5 49.5 39Z"
      />
      <path
        fill="none"
        stroke={yellow}
        strokeWidth="3"
        strokeLinecap="round"
        d="M46.6 31.8 49.2 27.8 M49.4 35.5 52.8 33.7 M21.5 32.5 22.9 33.5 M19.3 37.5 21.1 38.1"
      />
    </>
  ),
  // Tourtois: the desktop shell, a tortoise carrying window panes.
  tourtois: (
    <>
      <rect
        fill={cream}
        x="11.07"
        y="35.73"
        width="26.8"
        height="9.7"
        rx="3.25"
        transform="rotate(-5 24.47 40.58)"
      />
      <path
        fill={yellow}
        d="M14.8 16C19 14.6 23 13.5 26.5 12.6 28.4 12.1 29.6 13.4 30.1 15.3L31.6 21 17.4 37.6C13.8 38.2 10.6 37.8 10.1 35.4L9.2 27.8C9.1 26.1 10.1 24.7 11.6 24.1 11.4 22.4 11.4 20.6 11.8 19.1 12.3 17.4 13.3 16.5 14.8 16Z"
      />
      <path
        fill={coral}
        d="M14.0 24.1Q13.3 21.2 16.2 20.4L30.7 16.2Q33.6 15.4 34.6 18.2L36.0 22.7Q37.0 25.5 34.7 27.4L20.2 39.7Q17.9 41.6 17.2 38.7Z"
      />
      <path
        fill={blue}
        d="M21 23.4 35.5 20.6C37.3 20.2 38.6 21 38.9 22.6L40 34.5C40.1 36.2 39.1 37.3 37.5 37.7 32.6 39.9 26 41 21 41 16 41 12.2 40.2 11 38.8 10.4 37.6 10.8 36.4 12.4 37L19.6 38.4 18.4 27C18.2 25.2 19.3 23.7 21 23.4Z"
      />
      <path
        fill={cream}
        d="M22.8 29.6 34.8 26.9C36.2 26.6 37 27.3 37.2 28.6L37.9 33C38.1 34.2 37.5 35 36.3 35.3L24.3 37.8C23 38.1 22.3 37.5 22.1 36.3L21.3 31.6C21.1 30.6 21.7 29.8 22.8 29.6Z"
      />
      <g fill={cream}>
        <circle cx="14.7" cy="18.45" r="1" />
        <circle cx="17.6" cy="17.65" r="1" />
        <circle cx="20.5" cy="16.85" r="1" />
        <circle cx="17.9" cy="22.2" r="1" />
        <circle cx="21" cy="21.5" r="1" />
        <circle cx="24.1" cy="20.75" r="1" />
        <circle cx="28.2" cy="25.3" r="1" />
      </g>
      <circle fill={coral} cx="21.7" cy="26.6" r="1" />
      <circle fill={yellow} cx="24.9" cy="25.9" r="1.05" />
      <g fill={mint}>
        <ellipse
          cx="8.8"
          cy="36.6"
          rx="3.6"
          ry="1.9"
          transform="rotate(22 8.8 36.6)"
        />
        <path d="M12 41C10 41.5 7.5 44.5 7 46.5 7 48 8.5 49.5 10.5 50 12.5 50.5 13.5 50 15 48 15.5 47 16.5 47.5 19 50 22 49.5 22 46.5 22 45.5 20.5 45.5 17 45 16.5 44.5 16.5 44 16.5 42 13.5 40.5 12 41Z" />
        <path d="M40 33C39 38 36 42 34.5 41.5 32.5 40.5 29.5 42 28.5 44 26 49 27.5 51.5 32.5 51 36 51 37 50 36 46.5 36 45 37 44.5 38 44.5 38.5 45.5 40.5 49 43.5 50 46.5 47.5 47.5 46.5 46 43.5 44 42 43 41.5 43.5 40.5 44.5 39.5 46 38 47 37.5L47 33Z" />
      </g>
      <ellipse fill={mint} cx="46.4" cy="30.6" rx="8.1" ry="8.3" />
      <g fill={ink}>
        <rect
          x="45.05"
          y="26.95"
          width="2.25"
          height="4.6"
          rx="1.1"
          transform="rotate(-6 46.2 29.3)"
        />
        <rect
          x="49.25"
          y="26.4"
          width="2.25"
          height="4.6"
          rx="1.1"
          transform="rotate(-6 50.4 28.7)"
        />
      </g>
      <path
        fill={coral}
        d="M46.8 32.2H51C51 34.3 50 35.4 48.9 35.4S46.8 34.3 46.8 32.2Z"
        transform="rotate(-8 48.9 33.5)"
      />
      <path
        fill="none"
        stroke={yellow}
        strokeWidth="3"
        strokeLinecap="round"
        d="M50.9 17.7 50.5 19.7 M55.2 20.1 53.4 21.9 M56.5 24.5 55.7 24.7"
      />
    </>
  ),
  // The launcher's "All Apps": four App tiles, no install arrow.
  allApps: (
    <>
      <rect
        fill={coral}
        x="7"
        y="7.25"
        width="23.2"
        height="22.7"
        rx="4.6"
        transform="rotate(-6.2 18.6 18.6)"
      />
      <rect
        fill={blue}
        x="33.9"
        y="7.25"
        width="23.2"
        height="22.7"
        rx="4.6"
        transform="rotate(6.2 45.5 18.6)"
      />
      <rect
        fill={mint}
        x="7"
        y="34.15"
        width="23.2"
        height="22.7"
        rx="4.6"
        transform="rotate(6.2 18.6 45.5)"
      />
      <rect
        fill={yellow}
        x="33.9"
        y="34.15"
        width="23.2"
        height="22.7"
        rx="4.6"
        transform="rotate(-6.2 45.5 45.5)"
      />
    </>
  ),
  // Search: a magnifying glass.
  search: (
    <>
      <path fill="none" stroke={blue} strokeWidth="6.5" d="M37 37.5 43 43.5" />
      <path
        fill="none"
        stroke={coral}
        strokeWidth="12.6"
        strokeLinecap="round"
        d="M44.2 43.8 51.4 51.8"
      />
      <path
        fill="none"
        stroke={yellow}
        strokeWidth="3"
        strokeLinecap="round"
        d="M47.2 42.4 52.8 47.8"
      />
      <ellipse fill={blue} cx="25.6" cy="24.6" rx="19.25" ry="18.6" />
      <ellipse fill={cream} cx="25.2" cy="24.1" rx="14.2" ry="13.6" />
    </>
  ),
  // An Agent's web browser: a window with the world inside.
  browser: (
    <>
      <rect fill={coral} x="5.9" y="6.15" width="52.2" height="51.7" rx="5.5" />
      <path
        fill={cream}
        d="M10 16.5H29.4C30.3 16.1 31 14.4 31.8 12.5 32.5 10.9 33.2 10 34.5 10H52.2C53.4 10 54 10.7 54 12V16.5C55.2 16.5 56 17.1 56 18.3V52.4C56 53.7 55.1 54.6 53.8 54.6H10.2C8.9 54.6 8 53.7 8 52.4V18.2C8 17.1 8.7 16.5 10 16.5Z"
      />
      <circle fill={yellow} cx="12.2" cy="11.9" r="1.95" />
      <circle fill={blue} cx="18.6" cy="11.9" r="1.95" />
      <circle fill={grape} cx="25.1" cy="11.9" r="1.95" />
      <circle fill={mint} cx="32" cy="34.9" r="14.5" />
      <g fill="none" stroke={cream} strokeWidth="3">
        <ellipse cx="32" cy="34.9" rx="7.7" ry="13.3" />
        <path d="M17.5 34.9H46.5" />
      </g>
    </>
  ),
  // The public web: a globe with an orbit.
  internet: (
    <>
      <ellipse
        fill="none"
        stroke={yellow}
        strokeWidth="4.4"
        cx="32.2"
        cy="30.2"
        rx="25.6"
        ry="8.1"
        transform="rotate(-20.8 32.2 30.2)"
      />
      <circle fill={blue} cx="32" cy="32" r="21.1" />
      <g fill="none" stroke={cream} strokeWidth="3">
        <ellipse cx="32" cy="31.8" rx="12.2" ry="18.7" />
        <path d="M32 13.1V50.5M15 20.4Q32 29 49 20.4M12.5 39Q32 44.6 51.5 39" />
      </g>
      <path
        fill="none"
        stroke={yellow}
        strokeWidth="4.4"
        d="M6.6 30.2A25.6 8.1 0 0 0 57.8 30.2"
        transform="rotate(-20.8 32.2 30.2)"
      />
    </>
  ),
  // Members and invites: the people on a Team.
  members: (
    <>
      <circle fill={blue} cx="41.9" cy="22.85" r="12.2" />
      <path
        fill={blue}
        d="M36 34C33.8 34.8 32.2 35.8 31 37 37.5 39.5 40.5 43.5 40.5 49.5V53.5H54.5C57 53.5 58 51 58 47.5 58 40 55 35.5 49 34Z"
      />
      <circle fill={coral} cx="22.95" cy="27.6" r="12.85" />
      <path
        fill={coral}
        d="M15.5 38C10.5 39 7.5 42.5 6.5 47 5.5 50.5 6 53.5 8.5 53.5H38.5C42 52 40 43 36 40 34.5 39 32 38 31 38Z"
      />
      <g fill={ink}>
        <circle cx="18.3" cy="28" r="1.6" />
        <circle cx="27.9" cy="28" r="1.6" />
        <circle cx="39.1" cy="23.05" r="1.55" />
        <circle cx="47.25" cy="23.05" r="1.55" />
      </g>
    </>
  ),
  // Selling Apps: coins and a price tag.
  sell: (
    <>
      <path
        fill={yellow}
        d="M6.4 41.2V48.4C6.4 51.4 13.2 54 21.8 54S37.2 51.4 37.2 48.4V41.2C37.2 37.8 30.4 35 21.8 35S6.4 37.8 6.4 41.2Z"
      />
      <ellipse fill={cream} cx="21.9" cy="40.8" rx="13.2" ry="3.6" />
      <g transform="rotate(-3 22.5 30) translate(0.5 0)">
        <path
          fill={yellow}
          d="M7.5 26V34C7.5 37.3 14.2 40 22.5 40S37.5 37.3 37.5 34V26C37.5 22.7 30.8 20 22.5 20S7.5 22.7 7.5 26Z"
        />
        <ellipse fill={cream} cx="23.7" cy="26.55" rx="13.05" ry="4.4" />
      </g>
      <g transform="translate(46.3 40.3) rotate(-25)">
        <path
          fill={coral}
          d="M-8.5-10Q-8.5-12-7-13L-1.5-16.3Q0-17.2 1.5-16.3L7-13Q8.5-12 8.5-10V9Q8.5 12 5.5 12H-5.5Q-8.5 12-8.5 9Z"
        />
        <circle fill={cream} cx="0" cy="-10.7" r="2.2" />
      </g>
      <TaperedRay
        fill={yellow}
        transform="translate(38.2 18.6) scale(1.1 .86)"
      />
      <TaperedRay
        fill={yellow}
        transform="translate(42.8 21.2) rotate(45) scale(1.1 .85)"
      />
    </>
  ),
  // Schedules and recurring runs: a calendar page with a clock.
  schedule: (
    <>
      <rect fill={cream} x="6" y="11" width="47.6" height="44" rx="6" />
      <path
        fill={coral}
        d="M12 11H47.6Q53.6 11 53.6 17V21.5H6V17Q6 11 12 11Z"
      />
      <g fill={cream}>
        <circle cx="16.1" cy="16.15" r="3.4" />
        <circle cx="43.4" cy="16.15" r="3.4" />
      </g>
      <g fill={blue}>
        <rect x="13.6" y="6" width="5" height="11.2" rx="2.5" />
        <rect x="40.9" y="6" width="5" height="11.2" rx="2.5" />
      </g>
      <g fill={mint}>
        <rect x="11.1" y="25.1" width="6.9" height="6.6" rx="1.8" />
        <rect x="20.7" y="25.1" width="6.9" height="6.6" rx="1.8" />
        <rect x="30.4" y="25.1" width="6.9" height="6.6" rx="1.8" />
        <rect x="20.7" y="33.9" width="6.9" height="6.6" rx="1.8" />
        <rect x="30.4" y="33.9" width="6.9" height="6.6" rx="1.8" />
        <rect x="11.1" y="42.7" width="6.9" height="6.6" rx="1.8" />
        <rect x="30.4" y="42.7" width="6.9" height="6.6" rx="1.8" />
      </g>
      <g fill={grape}>
        <rect x="40.4" y="25.1" width="6.9" height="6.6" rx="1.8" />
        <rect x="11.1" y="33.9" width="6.9" height="6.6" rx="1.8" />
        <rect x="20.7" y="42.7" width="6.9" height="6.6" rx="1.8" />
      </g>
      <circle fill={yellow} cx="45.5" cy="45.6" r="12.2" />
      <path
        fill="none"
        stroke={ink}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M45.1 39.3V46.2L51.3 49.8"
      />
      <circle fill={ink} cx="45.1" cy="46.2" r="2.5" />
    </>
  ),
  // Fungi: Shiitake, the brand mushroom, winking.
  fungi: (
    <>
      <ellipse
        fill={cream}
        cx="33.5"
        cy="43.6"
        rx="18.6"
        ry="14.4"
        transform="rotate(-6 33.5 43.6)"
      />
      <path
        fill={coral}
        d="M29.5 6.5C22 7.5 16 11 11 18.5 4 29 4.6 39.6 13.5 42.2 24 45 44 40.5 54 34.6 57.6 32.6 58.6 29.2 57.5 25 56.5 20 53 16 48.5 13 43.5 8 37 5.5 29.5 6.5Z"
      />
      <g fill={cream}>
        <ellipse
          cx="29"
          cy="15.7"
          rx="8.7"
          ry="6.3"
          transform="rotate(-15.5 29 15.7)"
        />
        <ellipse
          cx="50.8"
          cy="20.1"
          rx="6.5"
          ry="3.5"
          transform="rotate(51.6 50.8 20.1)"
        />
        <ellipse
          cx="13"
          cy="26.8"
          rx="4.2"
          ry="3.3"
          transform="rotate(-54.5 13 26.8)"
        />
      </g>
      <g
        fill={ink}
        transform="translate(26.6 46.6) scale(1.1) translate(-33.7 -38.5)"
      >
        <rect x="31.85" y="35.9" width="3.75" height="5.25" rx="1.85" />
        <path d="M 47.4 34.3 C 46 35 44.6 35.8 43.5 36.7 42.9 37.2 43.2 38.3 44 38.4 45.2 38.6 46.5 38.6 47.7 38.4 48.4 38.3 48.3 37.3 47.6 37.3 46.6 37.4 45.7 37.4 45 37.3 45.9 36.7 46.9 36.1 48 35.6 48.7 35.3 48.2 34 47.4 34.3 Z" />
        <path d="M 37.4 41.1 C 38.6 44.3 42.6 44.3 43.6 40.5 43.7 40 43.1 39.8 42.9 40.3 41.9 42.8 39.1 42.9 38.3 40.7 38.1 40.2 37.3 40.5 37.4 41.1 Z" />
      </g>
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
