// SPDX-FileCopyrightText: © 2026 Visiosto oy <visiosto@visiosto.fi>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
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
  fonts: [
    {
      provider: fontProviders.local(),
      name: "MonaSans",
      cssVariable: "--font-mona-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/MonaSans-Regular.woff2"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/MonaSans-Bold.woff2"],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },
  ],
});
