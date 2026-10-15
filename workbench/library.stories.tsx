import type { StoryDefault } from "@ladle/react";
import { art } from "./catalog.js";
import { IconGallery } from "./gallery.js";
import "./library.css";

export const Library = () => <IconGallery />;

const sheets = [
  {
    title: "Approved family",
    note: "Original black-background artwork. Preserved unchanged in Caps and here.",
    src: art.approved,
  },
  {
    title: "Approved App trio",
    note: "Computer, Prints, and Inkcap before tracing.",
    src: art.trio,
  },
  {
    title: "Picked Read",
    note: "Book and eye; live SVG exists.",
    src: art.pickedRead,
  },
  {
    title: "Picked Media",
    note: "Orbiting image; concept awaiting SVG.",
    src: art.pickedMedia,
  },
  {
    title: "Permission sheet",
    note: "Broad candidates. The generated List replacement was rejected; the Library shows the approved SVG.",
    src: art.nine,
  },
  {
    title: "Leading Agent direction · chat baubles",
    note: "The image ending in bea.png. Source for the conversation artwork; its watchful-eye SVG was approved, while other vectors remain studies.",
    src: art.agentLead,
  },
  {
    title: "Create Agent · explicit plus",
    note: "Focused follow-up to make Create legible. The generator also simplified the other three, so this has not replaced the lead.",
    src: art.agentCreatePlus,
  },
  {
    title: "Agent alternative · blobby faces",
    note: "The flatter latest alternative. Kept for comparison, not the lead.",
    src: art.agentBlobs,
  },
  {
    title: "Conversation Write + Delete",
    note: "Eye/mouth pair, signal alternative, and a first Delete mark.",
    src: art.writeDelete,
  },
  {
    title: "First expansion",
    note: "Exploratory art, not approved icons.",
    src: art.first,
  },
  {
    title: "Audited expansion",
    note: "Earlier grouping of permissions and statuses.",
    src: art.audited,
  },
  {
    title: "Glow experiment",
    note: "Archived finish experiment; bloom obscures small details.",
    src: art.glow,
  },
] as const;

export const References = () => (
  <main className="sigils-page">
    <header className="sigils-hero">
      <div>
        <p className="sigils-kicker">SIGILS / SOURCE WALL</p>
        <h1>Reference sheets</h1>
        <p>
          All source sheets together. Each icon page links back to its original
          image and shows whether the vector is live, approved or still a
          concept.
        </p>
      </div>
      <a href="?story=sigils--library">Browse the library ↗</a>
    </header>
    <div className="sigils-reference-grid">
      {sheets.map((sheet) => (
        <figure className="sigils-reference" key={sheet.title}>
          <img src={sheet.src} alt={sheet.title} loading="lazy" />
          <figcaption>
            <strong>{sheet.title}</strong>
            <span>{sheet.note}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  </main>
);

export default { title: "Sigils" } satisfies StoryDefault;
