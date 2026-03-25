// SPDX-FileCopyrightText: © 2026 Visiosto oy <visiosto@visiosto.fi>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import js from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import astro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: [".astro/", "dist/", "node_modules/", "package-lock.json"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.astro"],
    plugins: { astro },
    extends: ["astro/recommended"],
    // TODO: eslint-plugin-jsx-a11y does not have ESLint 10 support.
    // extends: ["astro/recommended", "astro/jsx-a11y-recommended"],
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    // @ts-expect-error @eslint/markdown targets an older version of ESLint
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
]);
