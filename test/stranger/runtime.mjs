import assert from "node:assert/strict";
import { cloneElement, createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Sigil, isSigilName } from "@fungi.computer/sigils";
assert.equal(isSigilName("list"), true);
assert.equal(isSigilName("not-a-sigil"), false);
const svg = renderToStaticMarkup(
  createElement(Sigil, { name: "list", size: 24 }),
);
assert.match(svg, /<svg/u);
assert.match(svg, /aria-hidden="true"/u);
const favicon = await import("@fungi.computer/sigils/favicon");
assert.deepEqual(Object.keys(favicon).sort(), [
  "fungiFaviconHref",
  "fungiFaviconSvg",
]);
const { fungiFaviconSvg, fungiFaviconHref } = favicon;
// The favicon is the Fungi sigil itself, rendered once by the owner. A
// standalone SVG image needs its namespace; an inline <svg> does not.
const namespace = "http://www.w3.org/2000/svg";
assert.ok(
  fungiFaviconSvg.startsWith("<svg ") &&
    fungiFaviconSvg.includes(` xmlns="${namespace}"`),
);
assert.equal(
  fungiFaviconSvg,
  renderToStaticMarkup(
    cloneElement(Sigil({ name: "fungi" }), { xmlns: namespace }),
  ),
);
assert.equal(
  fungiFaviconHref,
  `data:image/svg+xml,${encodeURIComponent(fungiFaviconSvg)}`,
);
