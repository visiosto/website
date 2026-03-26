// SPDX-FileCopyrightText: © 2026 Visiosto oy <visiosto@visiosto.fi>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import tailwindcss from "@tailwindcss/vite";
import type { Locales } from "astro";
import { defineConfig, fontProviders } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import locales, { defaultLocale } from "./src/locales";

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
      name: "Mona Sans",
      cssVariable: "--font-mona-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/MonaSansVF[wght,opsz].woff2"],
            weight: "400 900",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/MonaSansVF[wght,opsz,ital].woff2"],
            weight: "400 900",
            style: "italic",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Mona Sans Mono",
      cssVariable: "--font-mona-sans-mono",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/MonaSansMonoVF[wght].woff2"],
            weight: "400 700",
            style: "normal",
          },
        ],
      },
    },
    {
      // Include Inter for backup, should we some day decide to move body text
      // to it.
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/InterVariable.woff2"],
            weight: "400 900",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/InterVariable-Italic.woff2"],
            weight: "400 900",
            style: "italic",
          },
        ],
      },
    },
  ],
  i18n: {
    locales: locales as unknown as Locales,
    // @ts-expect-error Astro's typing here is confusing.
    defaultLocale: defaultLocale,
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
