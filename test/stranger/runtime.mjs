import assert from "node:assert/strict";
import { cloneElement, createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Sigil, isSigilName } from "@fungi.computer/sigils";
for (const name of ["list", "loop"]) {
  assert.equal(isSigilName(name), true);
  const svg = renderToStaticMarkup(createElement(Sigil, { name, size: 24 }));
  assert.match(svg, /viewBox="0 0 64 64"/u);
  assert.match(svg, /aria-hidden="true"/u);
  assert.ok(svg.includes(`data-sigil="${name}"`));
}
assert.equal(isSigilName("not-a-sigil"), false);
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
