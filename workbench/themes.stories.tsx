import type { StoryDefault } from "@ladle/react";
import { Sigil } from "../src/index.js";
import { marks } from "./catalog.js";

/** The five review themes span light paper and dark grounds. */
export const Themes = () => (
  <main>
    {["latte", "field-guide", "consulting", "mocha", "field-guide-night"].map(
      (theme) => (
        <section
          key={theme}
          data-theme={theme}
          style={{
            background: "var(--color-base-100)",
            color: "var(--color-base-content)",
            padding: 20,
          }}
        >
          <h2>{theme}</h2>
          {[64, 28, 20, 16].map((size) => (
            <div
              key={size}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                alignItems: "center",
                minHeight: 84,
              }}
            >
              <span>{size}px</span>
              {marks
                .filter((mark) => mark.sigil)
                .map((mark) => (
                  <div
                    key={mark.id}
                    title={mark.name}
                    style={{ width: 72, textAlign: "center" }}
                  >
                    {mark.sigil ? (
                      <Sigil name={mark.sigil} size={size} />
                    ) : null}
                  </div>
                ))}
            </div>
          ))}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <span>disabled 28px</span>
            {marks
              .filter((mark) => mark.sigil)
              .map((mark) => (
                <div
                  key={mark.id}
                  title={mark.name}
                  style={{ width: 72, filter: "grayscale(1) contrast(0)" }}
                >
                  {mark.sigil ? <Sigil name={mark.sigil} size={28} /> : null}
                </div>
              ))}
          </div>
        </section>
      ),
    )}
  </main>
);

export default { title: "Sigils" } satisfies StoryDefault;
