import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat["jsx-runtime"],
]);
