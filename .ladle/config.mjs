export default {
  viteConfig: ".ladle/vite.config.mjs",
  stories: "workbench/**/*.stories.tsx",
  defaultStory: "sigils--library",
  addons: {
    theme: { enabled: true },
    a11y: { enabled: true },
    action: { enabled: false },
  },
};
