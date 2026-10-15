import { ThemeState, type GlobalProvider } from "@ladle/react";

/** Ladle chooses the appearance; Stipe owns its palette and colour scheme. */
export const Provider: GlobalProvider = ({ children, globalState }) => (
  <div
    data-theme={
      globalState.theme === ThemeState.Auto
        ? undefined
        : globalState.theme === ThemeState.Dark
          ? "mocha"
          : "latte"
    }
    style={{
      background: "var(--color-base-100)",
      color: "var(--color-base-content)",
      minHeight: "100vh",
    }}
  >
    {children}
  </div>
);
