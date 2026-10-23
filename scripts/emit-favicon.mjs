// Render the Fungi sigil once, as the browser-tab icon every Fungi surface
// shares. Consumers import ./favicon; no surface keeps its own SVG.
import { cloneElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { writeFile } from "node:fs/promises";
import { Sigil } from "../dist/sigil.js";

// A standalone SVG image needs its namespace; the inline Sigil omits it.
const svg = renderToStaticMarkup(
  cloneElement(Sigil({ name: "fungi" }), {
    xmlns: "http://www.w3.org/2000/svg",
  }),
);
const dist = new URL("../dist/", import.meta.url);
await writeFile(
  new URL("favicon.js", dist),
  [
    "/** The Fungi sigil as a standalone SVG document. */",
    `export const fungiFaviconSvg = ${JSON.stringify(svg)};`,
    '/** The same SVG as a data URI for <link rel="icon" type="image/svg+xml">. */',
    "export const fungiFaviconHref = `data:image/svg+xml,${encodeURIComponent(fungiFaviconSvg)}`;",
    "",
  ].join("\n"),
);
await writeFile(
  new URL("favicon.d.ts", dist),
  [
    "/** The Fungi sigil as a standalone SVG document. */",
    "export declare const fungiFaviconSvg: string;",
    '/** The same SVG as a data URI for <link rel="icon" type="image/svg+xml">. */',
    "export declare const fungiFaviconHref: string;",
    "",
  ].join("\n"),
);
