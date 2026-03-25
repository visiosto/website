// SPDX-FileCopyrightText: © 2026 Visiosto oy <visiosto@visiosto.fi>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import type { Config } from "prettier";

const config: Config = {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-packagejson",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro-organize-imports",
  ],
  tailwindStylesheet: "./src/styles/global.css",
  overrides: [
    {
      files: ["*.astro"],
      options: {
        parser: "astro",
      },
    },
    {
      files: ["*.md"],
      options: {
        proseWrap: "always",
      },
    },
  ],
};

export default config;
