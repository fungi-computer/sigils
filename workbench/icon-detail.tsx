import { families, marks } from "./catalog.js";
import { Preview } from "./preview.js";
import "./library.css";
import "./gallery.css";

export function IconDetail({ id }: { id: string }) {
  const mark = marks.find((entry) => entry.id === id);
  if (!mark)
    return (
      <main className="sigils-page">
        <h1>Icon unavailable</h1>
        <a href="?story=sigils--library">Browse Sigils</a>
      </main>
    );
  const source = mark.source ?? mark.image ?? mark.crop?.src;
  return (
    <main className="sigils-page sigils-detail-page">
      <nav className="sigils-breadcrumbs" aria-label="Breadcrumb">
        <a href="?story=sigils--library">Sigils</a>
        <span>/</span>
        <a href={`?story=${families[mark.group].story}`}>{mark.group}</a>
        <span>/</span>
        <span aria-current="page">{mark.name}</span>
      </nav>
      <header className="sigils-gallery-header">
        <div>
          <h1>{mark.name}</h1>
          <p>{mark.detail}</p>
        </div>
      </header>
      <div className="sigils-detail-card">
        <div className="sigils-detail-art">
          <Preview mark={mark} />
        </div>
        <div className="sigils-detail-info">
          <dl>
            <div>
              <dt>Family</dt>
              <dd>
                <a href={`?story=${families[mark.group].story}`}>
                  {mark.group}
                </a>
              </dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{mark.status}</dd>
            </div>
            <div>
              <dt>Artwork</dt>
              <dd>{mark.sigil ? "SVG" : "Raster study"}</dd>
            </div>
            {mark.example && (
              <div>
                <dt>Example use</dt>
                <dd>{mark.example}</dd>
              </div>
            )}
          </dl>
          {mark.sigil && (
            <div className="sigils-usage">
              <h2>Use this icon</h2>
              <pre>
                <code>{`<Sigil name="${mark.sigil}" />`}</code>
              </pre>
              <p>Give the surrounding button or label its accessible name.</p>
            </div>
          )}
          {["list", "read", "write", "generateText", "generateMedia"].includes(
            mark.sigil ?? "",
          ) && (
            <a
              className="sigils-detail-review"
              href="?story=use-cases--permissions"
            >
              See shared permission use ↗
            </a>
          )}
          {(mark.sigil === "read" || mark.sigil === "readConversations") && (
            <p className="sigils-composition-note">
              Shares the same watchful eye with{" "}
              {mark.sigil === "read" ? "Read conversations" : "Read files"}.
            </p>
          )}
          {[
            "read",
            "readConversations",
            "write",
            "generateText",
            "generateMedia",
          ].includes(mark.sigil ?? "") && (
            <a
              className="sigils-detail-review"
              href="?story=sigils--curve-review"
            >
              Compare the artwork ↗
            </a>
          )}
        </div>
      </div>
      <section className="sigils-detail-sizes" aria-label="Size previews">
        <h2>At a glance</h2>
        <div className="sigils-detail-size-row">
          {[16, 24, 32, 48, 64, 96].map((size) => (
            <figure key={size}>
              <div
                className="sigils-icon-art"
                style={{ width: size, height: size }}
                aria-hidden="true"
              >
                <Preview mark={mark} />
              </div>
              <figcaption>{size}px</figcaption>
            </figure>
          ))}
        </div>
      </section>
      {source && (
        <details className="sigils-detail-source">
          <summary>Original reference artwork</summary>
          <a href={source} target="_blank" rel="noreferrer">
            Open original image ↗
          </a>
          <img
            src={source}
            alt={`Original reference for ${mark.name}`}
            loading="lazy"
          />
        </details>
      )}
    </main>
  );
}
