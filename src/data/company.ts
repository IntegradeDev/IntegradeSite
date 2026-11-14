import type { Locale } from "../i18n/locales";
import { totals } from "./clients";

export const contact = {
  phoneDisplay: "(11) 5081-5001",
  phoneIntl: "+55 11 5081-5001",
  phoneHref: "tel:+551150815001",
  whatsappHref:
    "https://wa.me/551150815001?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Integrade%20e%20gostaria%20de%20falar%20com%20um%20especialista.",
  email: "comercial@integrade.com.br",
  addressLines: ["Av. Dr. Chucri Zaidan, 1649 — Conj. 242", "Vila São Francisco — São Paulo/SP", "CEP 04711-130"],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Av.+Dr.+Chucri+Zaidan,+1649,+S%C3%A3o+Paulo,+SP,+04711-130",
  legalName: "Integrade Soluções de Informática, Controle Patrimonial e Avaliações Ltda.",
  cnpj: "12.886.951/0001-99",
  consultingUrl: "https://integradeconsulting.com.br/",
  since: 2010,
};

/** Figures derived from the client base shared with integradeconsulting.com.br. */
export const stats: { value: string; label: Record<Locale, string> }[] = [
  { value: String(contact.since), label: { "pt-br": "Atuação desde", en: "Operating since", es: "Actuando desde" } },
  { value: `+${totals.organizations}`, label: { "pt-br": "organizações atendidas", en: "organizations served", es: "organizaciones atendidas" } },
  { value: String(totals.ufs), label: { "pt-br": "estados + DF com projetos", en: "Brazilian states + DF with projects", es: "estados + DF con proyectos" } },
  { value: `${totals.regions}/5`, label: { "pt-br": "regiões do país", en: "regions of Brazil", es: "regiones de Brasil" } },
  { value: String(totals.sectors), label: { "pt-br": "setores de atuação", en: "industries served", es: "sectores atendidos" } },
];

export const norms: { code: string; label: Record<Locale, string> }[] = [
  { code: "CPC 27", label: { "pt-br": "Ativo imobilizado", en: "Property, plant & equipment", es: "Activo inmovilizado" } },
  { code: "CPC 01", label: { "pt-br": "Impairment", en: "Impairment", es: "Deterioro (impairment)" } },
  { code: "ICPC 10", label: { "pt-br": "Custo atribuído", en: "Deemed cost", es: "Costo atribuido" } },
  { code: "NBC TSP 07", label: { "pt-br": "Imobilizado no setor público", en: "Public-sector PP&E", es: "Inmovilizado en el sector público" } },
  { code: "MCASP", label: { "pt-br": "Contabilidade pública", en: "Public-sector accounting manual", es: "Contabilidad pública" } },
  { code: "Lei 4.320/64", label: { "pt-br": "Controle de bens públicos", en: "Public asset control law", es: "Control de bienes públicos" } },
  { code: "ABNT NBR 14653", label: { "pt-br": "Avaliação de bens", en: "Asset valuation standard", es: "Valuación de bienes" } },
];
