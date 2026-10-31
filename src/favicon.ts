import svg from "./favicon-svg.js";

/** The Fungi sigil as a standalone SVG document. */
export const fungiFaviconSvg: string = svg;

/** The same SVG as a data URI for `<link rel="icon" type="image/svg+xml">`. */
export const fungiFaviconHref = `data:image/svg+xml,${encodeURIComponent(fungiFaviconSvg)}`;
