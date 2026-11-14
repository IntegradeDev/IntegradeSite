import type { APIRoute } from "astro";
import { locales, routes, modulePath, techPath, modePath, techSlugs, modeSlugs, htmlLang } from "../i18n/locales";
import { getCopy } from "../copy";

type Group = Record<(typeof locales)[number], string>;

function groups(): Group[] {
  const out: Group[] = Object.values(routes).map((r) => ({ ...r }));
  const slugs = getCopy("pt-br").modules.items.map((m) => m.slug).filter((s) => s !== "one-apps");
  for (const slug of slugs) {
    out.push({ "pt-br": modulePath("pt-br", slug), en: modulePath("en", slug), es: modulePath("es", slug) });
  }
  for (const id of Object.keys(techSlugs) as (keyof typeof techSlugs)[]) {
    out.push({ "pt-br": techPath("pt-br", id), en: techPath("en", id), es: techPath("es", id) });
  }
  for (const id of Object.keys(modeSlugs) as (keyof typeof modeSlugs)[]) {
    out.push({ "pt-br": modePath("pt-br", id), en: modePath("en", id), es: modePath("es", id) });
  }
  return out;
}

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? "https://www.integrade.com.br/").replace(/\/$/, "");
  const entries = groups().flatMap((g) =>
    locales.map((l) => {
      const links = locales
        .map((x) => `    <xhtml:link rel="alternate" hreflang="${htmlLang[x]}" href="${base}${g[x]}"/>`)
        .join("\n");
      return `  <url>\n    <loc>${base}${g[l]}</loc>\n${links}\n  </url>`;
    }),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
