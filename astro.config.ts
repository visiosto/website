// SPDX-FileCopyrightText: © 2026 Visiosto oy <visiosto@visiosto.fi>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PROD
    ? "https://www.visiosto.fi"
    : "http://localhost:4321",
  trailingSlash: "always",
  output: "static",
  compressHTML: import.meta.env.PROD,
  vite: {
    plugins: [tailwindcss()],
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(
          browserslist(">= 0.01%, last 2 versions, Firefox ESR, not dead"),
        ),
      },
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
  build: {
    format: "directory",
    assets: "_assets",
  },
});
