import type { SigilName } from "../src/index.js";

export const art = {
  approved: new URL(
    "./brand-studies/approved-candy-symbols.png",
    import.meta.url,
  ).href,
  trio: new URL("./brand-studies/approved-app-trio.png", import.meta.url).href,
  pickedRead: new URL(
    "./permission-symbol-studies/read-picked.png",
    import.meta.url,
  ).href,
  pickedMedia: new URL(
    "./permission-symbol-studies/media-picked.png",
    import.meta.url,
  ).href,
  nine: new URL(
    "./permission-symbol-studies/permissions-nine-candidate.png",
    import.meta.url,
  ).href,
  writeDelete: new URL(
    "./permission-symbol-studies/conversation-write-delete-options.png",
    import.meta.url,
  ).href,
  agentLead: new URL(
    "./permission-symbol-studies/agent-chat-baubles-lead.png",
    import.meta.url,
  ).href,
  agentCreatePlus: new URL(
    "./permission-symbol-studies/agent-chat-baubles-create-plus.png",
    import.meta.url,
  ).href,
  agentBlobs: new URL(
    "./permission-symbol-studies/agent-blob-guys-alternative.png",
    import.meta.url,
  ).href,
  first: new URL(
    "./permission-symbol-studies/expanded-first.png",
    import.meta.url,
  ).href,
  audited: new URL(
    "./permission-symbol-studies/expanded-audited.png",
    import.meta.url,
  ).href,
  glow: new URL(
    "./permission-symbol-studies/expanded-glow-experiment.png",
    import.meta.url,
  ).href,
};

export const groups = [
  "Apps",
  "Actions",
  "Conversation",
  "Generation",
  "Status",
] as const;
export type Group = (typeof groups)[number];
export type Status = "Live" | "Approved" | "Concept";
export type Mark = {
  id: string;
  source?: string;
  name: string;
  group: Group;
  status: Status;
  detail: string;
  example?: string;
  sigil?: SigilName;
  image?: string;
  crop?: {
    src: string;
    sheetWidth: number;
    sheetHeight: number;
    columns: number;
    rows: number;
    x: number;
    y: number;
  };
};

const pair = (x: number, y: number): NonNullable<Mark["crop"]> => ({
  src: art.writeDelete,
  sheetWidth: 1536,
  sheetHeight: 1024,
  columns: 2,
  rows: 2,
  x,
  y,
});

export const marks: readonly Mark[] = [
  {
    id: "computer",
    name: "Computer",
    group: "Apps",
    status: "Live",
    detail: "Computer and Workbench",
    sigil: "computer",
    source: art.trio,
  },
  {
    id: "prints",
    name: "Prints",
    group: "Apps",
    status: "Live",
    detail: "Media App",
    sigil: "prints",
    source: art.trio,
  },
  {
    id: "inkcap",
    name: "Inkcap",
    group: "Apps",
    status: "Live",
    detail: "Inkcap App",
    sigil: "inkcap",
    source: art.trio,
  },
  {
    id: "fungi",
    name: "Fungi",
    group: "Apps",
    status: "Live",
    detail: "Fungi brand mark: Shiitake, winking",
    sigil: "fungi",
    source: new URL("./round-two-drafts/fungi3-c.png", import.meta.url).href,
  },
  {
    id: "bonsai",
    name: "Bonsai",
    group: "Apps",
    status: "Live",
    detail: "Bonsai repositories: a tree whose branches end in commits",
    sigil: "bonsai",
    source: new URL("./round-two-drafts/bonsai-c.png", import.meta.url).href,
  },
  {
    id: "trellis",
    name: "Trellis",
    group: "Apps",
    status: "Live",
    detail: "Trellis workflows of App methods",
    sigil: "trellis",
    source: new URL("./round-two-drafts/trellis-c.png", import.meta.url).href,
  },
  {
    id: "games",
    name: "Games",
    group: "Apps",
    status: "Live",
    detail: "Games App and its servers",
    sigil: "games",
    source: new URL("./round-two-drafts/games-a.png", import.meta.url).href,
  },
  {
    id: "oyster",
    name: "Oyster",
    group: "Apps",
    status: "Live",
    detail: "Oyster, the open platform that runs Apps",
    sigil: "oyster",
    source: new URL("./round-two-drafts/oyster2-b.png", import.meta.url).href,
  },
  {
    id: "tourtois",
    name: "Tourtois",
    group: "Apps",
    status: "Live",
    detail: "Tourtois, the desktop shell",
    sigil: "tourtois",
    source: new URL("./round-two-drafts/tourtois2-c.png", import.meta.url).href,
  },
  {
    id: "all-apps",
    name: "All Apps",
    group: "Apps",
    status: "Live",
    detail: "The launcher's way into every App",
    sigil: "allApps",
    source: new URL("./round-two-drafts/allApps-a.png", import.meta.url).href,
  },
  {
    id: "search",
    name: "Search",
    group: "Actions",
    status: "Live",
    detail: "Search tool calls and results",
    sigil: "search",
    source: new URL("./round-two-drafts/search-a.png", import.meta.url).href,
  },
  {
    id: "browser",
    name: "Browser",
    group: "Actions",
    status: "Live",
    detail: "An Agent's web browser",
    sigil: "browser",
    source: new URL("./round-two-drafts/browser-b.png", import.meta.url).href,
  },
  {
    id: "internet",
    name: "Internet",
    group: "Actions",
    status: "Live",
    detail: "The public web and websites",
    sigil: "internet",
    source: new URL("./round-two-drafts/internet-b.png", import.meta.url).href,
  },
  {
    id: "members",
    name: "Members",
    group: "Actions",
    status: "Live",
    detail: "People on a Team and their invites",
    sigil: "members",
    source: new URL("./round-two-drafts/members-a.png", import.meta.url).href,
  },
  {
    id: "sell",
    name: "Sell",
    group: "Actions",
    status: "Live",
    detail: "Selling an App",
    sigil: "sell",
    source: new URL("./round-two-drafts/sell-b.png", import.meta.url).href,
  },
  {
    id: "schedule",
    name: "Schedule",
    group: "Actions",
    status: "Live",
    detail: "Schedules and recurring runs",
    sigil: "schedule",
    source: new URL("./round-two-drafts/schedule-a.png", import.meta.url).href,
  },
  {
    id: "vishnu",
    name: "Vishnu",
    group: "Apps",
    status: "Live",
    detail: "Vishnu portal, Fungi's games",
    sigil: "vishnu",
  },
  {
    id: "grove",
    name: "Grove",
    group: "Apps",
    status: "Live",
    detail: "Chat App",
    sigil: "chat",
    source: art.approved,
  },
  {
    id: "list-files",
    name: "List",
    group: "Actions",
    status: "Live",
    detail: "The approved list mark. Use it for listing across resources.",
    example: "A list action or permission label",
    sigil: "list",
  },
  {
    id: "read-files",
    name: "Read",
    group: "Actions",
    status: "Live",
    detail: "A watchful book for a read action across resources.",
    example: "Read action or permission label",
    sigil: "read",
    source: art.pickedRead,
  },
  {
    id: "write-files",
    name: "Write",
    group: "Actions",
    status: "Live",
    detail: "A drawing pencil for writing across resources.",
    example: "Write action or permission label",
    sigil: "write",
    source: art.approved,
  },
  {
    id: "run-commands",
    name: "Run",
    group: "Actions",
    status: "Live",
    detail: "The existing command-execution mark, moved from Tourtois.",
    example: "Run commands permission",
    sigil: "run",
  },
  {
    id: "delete-files",
    name: "Erase document",
    group: "Actions",
    status: "Concept",
    detail:
      "Erasure artwork in study. File deletion is a planned grant, not a live permission.",
    example: "Delete action, if this artwork is approved",
    crop: pair(1, 1),
  },
  {
    id: "list-agents",
    name: "Three voices",
    group: "Conversation",
    status: "Concept",
    detail:
      "Three voices, with shared face marks and reference-matched silhouettes.",
    example: "Agent directory button",
    sigil: "listAgents",
    source: art.agentLead,
  },
  {
    id: "single-agent",
    name: "One voice",
    group: "Conversation",
    status: "Approved",
    detail: "A single blue voice with the directory's shared face marks.",
    example: "An Agent in App permissions",
    sigil: "agent",
  },
  {
    id: "browse-bazaar",
    name: "Watchful stall",
    group: "Actions",
    status: "Approved",
    detail: "A coral awning over a blue stall, with the Read watchful eye.",
    example: "Browse Bazaar permission",
    sigil: "browseBazaar",
  },
  {
    id: "buy-apps",
    name: "Coin and basket",
    group: "Actions",
    status: "Approved",
    detail: "A yellow coin drops into a blue basket with a coral rim.",
    example: "Buy Apps permission",
    sigil: "buyApps",
  },
  {
    id: "create-agents",
    name: "New voice",
    group: "Conversation",
    status: "Concept",
    detail: "A new mint voice appears, with shared face marks and action rays.",
    example: "Create agent button",
    sigil: "createAgents",
    source: art.agentLead,
  },
  {
    id: "read-conversations",
    name: "Watchful voice",
    group: "Conversation",
    status: "Approved",
    detail:
      "Approved SVG: the same watchful eye as Read files, inside a blue voice.",
    example: "Open or preview a conversation",
    sigil: "readConversations",
    source: art.agentLead,
  },
  {
    id: "send-prompts",
    name: "Speaking voice",
    group: "Conversation",
    status: "Concept",
    detail:
      "Coral speaking voice, sharing the Read bubble and action-ray shapes.",
    example: "Send a prompt button",
    sigil: "sendPrompts",
    source: art.agentLead,
  },
  {
    id: "llm-generation",
    name: "LLM generation",
    group: "Generation",
    status: "Approved",
    detail: "Approved scroll-and-sparkle artwork, composed as SVG",
    example: "Text generation action",
    sigil: "generateText",
    source: art.nine,
  },
  {
    id: "media-generation",
    name: "Media generation",
    group: "Generation",
    status: "Approved",
    detail: "Approved orbiting-image artwork, composed as SVG",
    example: "Image generation action",
    sigil: "generateMedia",
    source: art.pickedMedia,
  },
  {
    id: "install-apps",
    name: "Install Apps",
    group: "Actions",
    status: "Concept",
    detail: "An App tile dropping into place, composed as SVG",
    example: "Request an App install",
    sigil: "installApps",
  },
  {
    id: "connected",
    name: "Connected",
    group: "Status",
    status: "Live",
    detail: "Live connection",
    sigil: "connected",
    source: art.approved,
  },
  {
    id: "working",
    name: "Working",
    group: "Status",
    status: "Live",
    detail: "Activity in progress",
    sigil: "working",
    source: art.approved,
  },
  {
    id: "complete",
    name: "Complete",
    group: "Status",
    status: "Live",
    detail: "Finished successfully",
    sigil: "complete",
    source: art.approved,
  },
  {
    id: "restricted",
    name: "Restricted",
    group: "Status",
    status: "Live",
    detail: "Limited access",
    sigil: "restricted",
    source: art.approved,
  },
  {
    id: "error",
    name: "Error",
    group: "Status",
    status: "Live",
    detail: "Work could not finish",
    sigil: "error",
  },
];

export const families = {
  Apps: {
    story: "families--app-icons",
    description: "The faces of the apps on your desktop.",
  },
  Actions: {
    story: "families--actions",
    description:
      "List, read, write, and erasure artwork for actions across resources.",
  },
  Conversation: {
    story: "families--conversation",
    description: "Expressive marks for agents and conversation controls.",
  },
  Generation: {
    story: "families--generation",
    description: "Making text and images.",
  },
  Status: {
    story: "families--status",
    description: "Connected, working, complete, restricted, and error.",
  },
} satisfies Record<Group, { story: string; description: string }>;
