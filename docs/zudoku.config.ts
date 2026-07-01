import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  site: {
    title: "Cerbos Zuplo Demo",
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: ["introduction"],
    },
    { type: "link", to: "/api", label: "API Reference" },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "../config/routes.oas.json",
      path: "/api",
    },
  ],
};

export default config;
