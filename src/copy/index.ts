import type { Locale } from "../i18n/locales";
import ptBr, { type SiteCopy } from "./pt-br";
import en from "./en";
import es from "./es";

const copies: Record<Locale, SiteCopy> = { "pt-br": ptBr, en, es };

export function getCopy(locale: Locale): SiteCopy {
  return copies[locale];
}

export type { SiteCopy };
