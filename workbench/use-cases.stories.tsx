import type { StoryDefault } from "@ladle/react";
import { Sigil, type SigilName } from "../src/index.js";
import "./library.css";
import "./gallery.css";

type PermissionExample = {
  label: string;
  operation: string;
  action: string;
  icon?: SigilName;
};

const examples: readonly {
  resource: string;
  rows: readonly PermissionExample[];
}[] = [
  {
    resource: "Computer",
    rows: [
      {
        label: "List files",
        operation: "computer.list",
        action: "List",
        icon: "list",
      },
      {
        label: "Read files",
        operation: "computer.readFile",
        action: "Read",
        icon: "read",
      },
      {
        label: "Write files",
        operation: "computer.writeFile",
        action: "Write",
        icon: "write",
      },
      {
        label: "Run commands",
        operation: "computer.execute",
        action: "Run",
        icon: "run",
      },
    ],
  },
  {
    resource: "Agent",
    rows: [
      {
        label: "List agents",
        operation: "agent.list",
        action: "List",
        icon: "list",
      },
      {
        label: "Create agents",
        operation: "agent.manage",
        action: "Write",
        icon: "write",
      },
      {
        label: "Read conversations",
        operation: "agent.read",
        action: "Read",
        icon: "read",
      },
      {
        label: "Start conversations and send prompts",
        operation: "agent.send",
        action: "Generate text",
        icon: "generateText",
      },
    ],
  },
  {
    resource: "Generation",
    rows: [
      {
        label: "Generate text",
        operation: "llm",
        action: "Generate",
        icon: "generateText",
      },
      {
        label: "Generate media",
        operation: "media",
        action: "Generate",
        icon: "generateMedia",
      },
    ],
  },
];

export const Permissions = () => (
  <main className="sigils-page sigils-use-page">
    <nav className="sigils-breadcrumbs" aria-label="Breadcrumb">
      <a href="?story=sigils--library">Sigils</a>
      <span>/</span>
      <span aria-current="page">Permission use</span>
    </nav>
    <header className="sigils-gallery-header">
      <div>
        <h1>One action, one cue</h1>
        <p>How familiar action marks could repeat across resource types.</p>
      </div>
    </header>
    <p className="sigils-use-note">
      This is an icon-use study, not the shipped permission screen. The
      operation names below come from Tourtois. Create agents uses Write;
      starting conversations and sending prompts uses Generate Text. Resource
      and operation stay explicit in the text.
    </p>
    <div className="sigils-permission-groups">
      {examples.map(({ resource, rows }) => (
        <section
          key={resource}
          className="sigils-permission-group"
          aria-label={`${resource} operations`}
        >
          <h2>{resource}</h2>
          <div className="sigils-permission-rows">
            {rows.map((row) => (
              <div className="sigils-permission-line" key={row.operation}>
                <span className="sigils-permission-cue" aria-hidden="true">
                  {row.icon ? <Sigil name={row.icon} size={32} /> : null}
                </span>
                <span className="sigils-permission-label">
                  <strong>{row.label}</strong>
                  <small>{row.operation}</small>
                </span>
                <span className="sigils-permission-action">{row.action}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
    <section className="sigils-use-next">
      <div>
        <h2>Expressive artwork lives in the library</h2>
        <p>
          These marks suit controls and moments with more personality. They
          remain available even when permissions use shared action cues.
        </p>
      </div>
      <div className="sigils-use-examples">
        <a href="?story=icons--create-agents">
          <Sigil name="createAgents" size={40} /> Create agent ↗
        </a>
        <a href="?story=icons--read-conversations">
          <Sigil name="readConversations" size={40} /> Open conversation ↗
        </a>
        <a href="?story=icons--send-prompts">
          <Sigil name="sendPrompts" size={40} /> Send prompt ↗
        </a>
      </div>
    </section>
    <p className="sigils-use-footnote">
      The erasure artwork is still a concept. File deletion is a planned grant;
      it is not listed among the current operations.
    </p>
  </main>
);

export default { title: "Use cases" } satisfies StoryDefault;
