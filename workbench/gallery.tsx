import { useState } from "react";
import { families, groups, marks, type Group, type Status } from "./catalog.js";
import { Preview } from "./preview.js";
import { Sigil } from "../src/index.js";
import "./library.css";
import "./gallery.css";

const statuses: readonly (Status | "All")[] = [
  "All",
  "Live",
  "Approved",
  "Concept",
];

function FamilyLinks({ current }: { current: Group }) {
  return (
    <nav className="sigils-family-links" aria-label="Icon families">
      <a href="?story=sigils--library">Overview</a>
      {groups.map((group) => (
        <a
          key={group}
          href={`?story=${families[group].story}`}
          aria-current={current === group ? "page" : undefined}
        >
          {group}
        </a>
      ))}
    </nav>
  );
}

function FamilyCards() {
  return (
    <section
      className="sigils-families"
      aria-labelledby="sigils-families-title"
    >
      <div className="sigils-section-heading">
        <h2 id="sigils-families-title">Explore the families</h2>
        <span>Pick a family, then an icon</span>
      </div>
      <div className="sigils-family-grid">
        {groups.map((group) => {
          const members = marks.filter((mark) => mark.group === group);
          return (
            <a
              className="sigils-family-card"
              href={`?story=${families[group].story}`}
              key={group}
            >
              <span className="sigils-family-art" aria-hidden="true">
                {members.slice(0, 3).map((mark) => (
                  <span key={mark.id}>
                    <Preview mark={mark} />
                  </span>
                ))}
              </span>
              <span className="sigils-family-copy">
                <strong>{group}</strong>
                <small>{families[group].description}</small>
              </span>
              <span className="sigils-family-count">{members.length} ↗</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export function IconGallery({ family }: { family?: Group }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status | "All">("All");
  const [size, setSize] = useState(64);
  const [surface, setSurface] = useState("theme");
  const needle = query.trim().toLowerCase();
  const adjusted =
    query !== "" || status !== "All" || size !== 64 || surface !== "theme";
  const members = marks.filter((mark) => !family || mark.group === family);
  const visible = members.filter(
    (mark) =>
      (status === "All" || mark.status === status) &&
      (!needle ||
        [
          mark.name,
          mark.group,
          mark.detail,
          mark.example ?? "",
          mark.id,
          mark.sigil ?? "",
        ].some((text) => text.toLowerCase().includes(needle))),
  );

  return (
    <main className="sigils-page sigils-gallery-page">
      <header className="sigils-gallery-header">
        <div>
          {family && (
            <a className="sigils-back" href="?story=sigils--library">
              ← Sigils
            </a>
          )}
          <h1>{family ?? "Sigils"}</h1>
          <p>
            {family
              ? families[family].description
              : "Illustrated marks for apps, actions and a little technomancy."}
          </p>
        </div>
        <nav className="sigils-gallery-tools" aria-label="Review tools">
          <a href="?story=use-cases--permissions">Permission use</a>
          <a href="?story=sigils--curve-review">Curve review</a>
          <a href="?story=sigils--references">References</a>
        </nav>
      </header>
      {family ? <FamilyLinks current={family} /> : <FamilyCards />}
      <section className="sigils-browse" aria-label="Browse icons">
        <div className="sigils-section-heading">
          <h2>{family ? `All ${family.toLowerCase()} icons` : "All icons"}</h2>
          <span>{members.length} marks in the library</span>
        </div>
        <div className="sigils-gallery-toolbar">
          <label className="sigils-search-label">
            Find an icon
            <input
              type="search"
              placeholder="Name, use or motif…"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
          </label>
          <fieldset className="sigils-control-set">
            <legend>Artwork</legend>
            <div className="sigils-control-choices">
              {statuses.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={status === option}
                  onClick={() => {
                    setStatus(option);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="sigils-control-set">
            <legend>Size</legend>
            <div className="sigils-control-choices">
              {[24, 32, 48, 64, 96].map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={size === value}
                  onClick={() => {
                    setSize(value);
                  }}
                >
                  {value}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="sigils-control-set">
            <legend>Canvas</legend>
            <div className="sigils-control-choices">
              {["theme", "dark", "light"].map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={surface === value}
                  onClick={() => {
                    setSurface(value);
                  }}
                >
                  {value}
                </button>
              ))}
            </div>
          </fieldset>
          {adjusted && (
            <button
              className="sigils-clear"
              type="button"
              onClick={() => {
                setQuery("");
                setStatus("All");
                setSize(64);
                setSurface("theme");
              }}
            >
              Reset
            </button>
          )}
        </div>
        <div className="sigils-gallery-summary">
          <span role="status">
            {visible.length} of {members.length} icons
          </span>
          <span>Select an icon for details and source artwork</span>
        </div>
        <div
          className="sigils-shelf"
          data-surface={surface}
          data-theme={
            surface === "dark"
              ? "mocha"
              : surface === "light"
                ? "latte"
                : undefined
          }
        >
          <div
            className="sigils-icon-grid"
            style={{
              gridTemplateColumns: `repeat(auto-fill, minmax(${String(Math.max(104, size + 32))}px, 1fr))`,
            }}
          >
            {visible.map((mark) => (
              <a
                className="sigils-icon-link"
                key={mark.id}
                href={`?story=icons--${mark.id}`}
                aria-label={`${mark.name}, ${mark.status}`}
              >
                <span
                  className="sigils-icon-art"
                  style={{ width: size, height: size }}
                  aria-hidden="true"
                >
                  <Preview mark={mark} />
                </span>
                <span className="sigils-icon-label">
                  {mark.name}
                  {mark.status === "Concept" && (
                    <i className="sigils-study-dot" />
                  )}
                </span>
              </a>
            ))}
          </div>
          {!visible.length && (
            <p className="sigils-no-results">
              No matching icons. Try another search or reset the filters.
            </p>
          )}
        </div>
      </section>
      {(family === "Conversation" || family === "Generation") && (
        <section
          className="sigils-equal-sizes"
          aria-label="Equal-size API comparison"
        >
          <h2>Compare at equal sizes</h2>
          <p>
            Each icon in a row receives the same size through the public Sigil
            API.
          </p>
          {[24, 32, 64].map((dimension) => (
            <div
              className="sigils-equal-size-row"
              key={dimension}
              data-size={dimension}
              style={{
                gridTemplateColumns: `44px repeat(${String(members.length)}, minmax(0, 1fr))`,
              }}
            >
              <code>{dimension}px</code>
              {members.map(
                (mark) =>
                  mark.sigil && (
                    <span key={mark.id} role="img" aria-label={mark.name}>
                      <Sigil name={mark.sigil} size={dimension} />
                    </span>
                  ),
              )}
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
