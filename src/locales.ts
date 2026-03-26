// SPDX-FileCopyrightText: © 2026 Visiosto oy <visiosto@visiosto.fi>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

const locales = ["en", "fi"] as const;

export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fi";
export const languageCodes: Record<Locale, string> = {
  en: "en-GB",
  fi: "fi",
};
export const openGraphLocales: Record<Locale, string> = {
  en: "en_GB",
  fi: "fi_FI",
};
export const languages: { locale: Locale; menuLabel: string }[] = [
  {
    locale: "en",
    menuLabel: "In English",
  },
  {
    locale: "fi",
    menuLabel: "Suomeksi",
  },
];

export default locales;
