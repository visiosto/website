// SPDX-FileCopyrightText: © 2026 Visiosto oy <visiosto@visiosto.fi>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import type { Config } from "stylelint";

export default {
  extends: ["stylelint-config-standard", "stylelint-config-html"],
  rules: {
    "import-notation": null,
  },
} satisfies Config;
