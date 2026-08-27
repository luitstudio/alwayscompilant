import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  {
    rules: {
      "@next/next/no-css-tags": "off",
      "@next/next/no-sync-scripts": "off",
    },
  },
  globalIgnores([
    ".next/**",
    ".sastik-*/**",
    "node_modules/**",
    "public/assets/**",
    "sastik-html-package/**",
  ]),
]);
