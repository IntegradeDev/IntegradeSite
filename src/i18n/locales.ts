export const locales = ["pt-br", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-br";

export const localeNames: Record<Locale, string> = {
  "pt-br": "Português",
  en: "English",
  es: "Español",
};

export const localeShort: Record<Locale, string> = {
  "pt-br": "PT",
  en: "EN",
  es: "ES",
};

export const htmlLang: Record<Locale, string> = {
  "pt-br": "pt-BR",
  en: "en",
  es: "es",
};

export const routes = {
  home: { "pt-br": "/pt-br/", en: "/en/", es: "/es/" },
  about: { "pt-br": "/pt-br/sobre/", en: "/en/about/", es: "/es/acerca-de/" },
  consulting: { "pt-br": "/pt-br/consulting/", en: "/en/consulting/", es: "/es/consulting/" },
  services: { "pt-br": "/pt-br/services/", en: "/en/services/", es: "/es/servicios/" },
  outsourcing: {
    "pt-br": "/pt-br/services/outsourcing-patrimonial/",
    en: "/en/services/asset-outsourcing/",
    es: "/es/servicios/outsourcing-patrimonial/",
  },
  solutions: { "pt-br": "/pt-br/solutions/", en: "/en/solutions/", es: "/es/solutions/" },
  integradeOne: {
    "pt-br": "/pt-br/solutions/integrade-one/",
    en: "/en/solutions/integrade-one/",
    es: "/es/solutions/integrade-one/",
  },
  apps: {
    "pt-br": "/pt-br/solutions/integrade-one/apps/",
    en: "/en/solutions/integrade-one/apps/",
    es: "/es/solutions/integrade-one/apps/",
  },
  oneCapture: {
    "pt-br": "/pt-br/solutions/integrade-one/apps/one-capture/",
    en: "/en/solutions/integrade-one/apps/one-capture/",
    es: "/es/solutions/integrade-one/apps/one-capture/",
  },
  identification: {
    "pt-br": "/pt-br/solutions/identificacao/",
    en: "/en/solutions/identification/",
    es: "/es/solutions/identificacion/",
  },
  equipment: {
    "pt-br": "/pt-br/solutions/equipamentos/",
    en: "/en/solutions/equipment/",
    es: "/es/solutions/equipos/",
  },
  clients: { "pt-br": "/pt-br/clientes/", en: "/en/clients/", es: "/es/clientes/" },
  contact: { "pt-br": "/pt-br/contato/", en: "/en/contact/", es: "/es/contacto/" },
} as const;

export type RouteId = keyof typeof routes;

export const modulesSegment: Record<Locale, string> = {
  "pt-br": "modulos",
  en: "modules",
  es: "modulos",
};

export function modulePath(locale: Locale, slug: string) {
  if (slug === "one-apps") return routes.apps[locale];
  return `${routes.integradeOne[locale]}${modulesSegment[locale]}/${slug}/`;
}

export const techSlugs = {
  rfid: { "pt-br": "rfid", en: "rfid", es: "rfid" },
  barcode: { "pt-br": "codigo-de-barras", en: "barcode", es: "codigo-de-barras" },
  qrcode: { "pt-br": "qr-code", en: "qr-code", es: "codigo-qr" },
  plates: { "pt-br": "plaquetas", en: "asset-tags", es: "placas" },
} as const;

export type TechId = keyof typeof techSlugs;

export function techPath(locale: Locale, id: TechId) {
  return `${routes.identification[locale]}${techSlugs[id][locale]}/`;
}

export const modeSlugs = {
  purchase: { "pt-br": "venda", en: "purchase", es: "compra" },
  rental: { "pt-br": "locacao", en: "rental", es: "alquiler" },
} as const;

export type ModeId = keyof typeof modeSlugs;

export function modePath(locale: Locale, id: ModeId) {
  return `${routes.equipment[locale]}${modeSlugs[id][locale]}/`;
}

/** Alternate URLs for a page, used for hreflang and the language switcher. */
export type Alternates = Record<Locale, string>;

export function alt(id: RouteId): Alternates {
  return routes[id];
}
