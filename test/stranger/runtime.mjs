import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Sigil, isSigilName } from "@fungi.computer/sigils";
assert.equal(isSigilName("list"), true);
assert.equal(isSigilName("not-a-sigil"), false);
const svg = renderToStaticMarkup(
  createElement(Sigil, { name: "list", size: 24 }),
);
assert.match(svg, /<svg/u);
assert.match(svg, /aria-hidden="true"/u);
