import { createElement } from "react";
import { Sigil } from "@fungi.computer/sigils";

const mark = createElement(Sigil, { name: "list", size: 24 });
console.log(mark.type === Sigil);
