import type { Locale } from "../i18n/locales";

/**
 * Carteira de clientes do grupo Integrade — mesma base do site da Integrade Consulting
 * (IntegradeSiteConsul: src/pages/Clientes.jsx, src/data/marcas.js e src/data/atuacao.js).
 */

type L10n = Record<Locale, string>;

export interface Sector {
  name: L10n;
  clients: string[];
}

export const clientSectors: Sector[] = [
  {
    name: { "pt-br": "Energia & Nuclear", en: "Energy & Nuclear", es: "Energía y Nuclear" },
    clients: ["Eletrobras", "FURNAS", "Eletrosul", "CEEE Grupo Equatorial", "Amazonas Energia", "Eletronuclear", "CNEN", "IPEN", "INB", "NUCLEP"],
  },
  {
    name: { "pt-br": "Portos & Logística", en: "Ports & Logistics", es: "Puertos y Logística" },
    clients: ["Porto de Santos", "Portos RS", "EMAP", "Companhia Docas da Paraíba", "Porto de Suape", "Grupo CCR", "Dominalog", "Transauto"],
  },
  {
    name: { "pt-br": "Saneamento & Desenvolvimento", en: "Water & Development", es: "Saneamiento y Desarrollo" },
    clients: ["SABESP", "SEMAE Piracicaba", "Desenvolve SP"],
  },
  {
    name: { "pt-br": "Setor Público", en: "Public Sector", es: "Sector Público" },
    clients: [
      "Secretaria de Estado da Saúde",
      "Prefeitura de Cajati",
      "Prefeitura de Congonhinhas",
      "Prefeitura de Jarinu",
      "Prefeitura de Mauá da Serra",
      "Prefeitura de Mirante da Serra",
      "Prefeitura de Navegantes",
      "Prefeitura de Pindamonhangaba",
      "Prefeitura de Ribeira do Pombal",
      "Prefeitura de Betânia do Piauí",
      "Prefeitura de Carlinda",
      "Prefeitura de Comodoro",
      "Prefeitura de Encantado",
      "Prefeitura de Ipiranga",
      "Prefeitura de Nova Esperança",
      "Prefeitura de São Gonçalo do Pará",
      "Prefeitura de São João Batista",
      "Prefeitura de Morada Nova",
      "Câmara de Santa Maria",
      "Câmara de Santa Rita do Passa Quatro",
    ],
  },
  {
    name: { "pt-br": "Conselhos & Entidades", en: "Councils & Associations", es: "Consejos y Entidades" },
    clients: ["CREA-RS", "CREAGO", "COREN-SP", "CNF", "ABIT", "IBAT", "APEX Brasília", "FIERO-RO", "SUSEP"],
  },
  {
    name: { "pt-br": "Saúde", en: "Healthcare", es: "Salud" },
    clients: [
      "Hospital Alemão Oswaldo Cruz",
      "GHC — Grupo Hospitalar Conceição",
      "Irmãs Hospitaleiras",
      "H.Olhos",
      "DaVita",
      "Pro-Saúde",
      "Con Oncologia",
      "MP Biomedicals",
      "Bimeda",
    ],
  },
  {
    name: { "pt-br": "Educação, Ciência & Cultura", en: "Education, Science & Culture", es: "Educación, Ciencia y Cultura" },
    clients: [
      "Grupo Unis",
      "SENAI — CETIQT",
      "Colégio São Judas",
      "Fundação ABC",
      "Fundação Cassiano Ricardo",
      "UNIFESP",
      "UNIFEI",
      "IFBA",
      "IFES — Alegre",
      "Unifesspa",
      "FAA",
      "Centro Educacional Infantil Luz e Lápis",
      "Theatro Municipal",
      "Memorial da América Latina",
      "Fundação Cidade das Artes",
      "Associação Museu Afro Brasil",
      "Quinta do Embaixador",
    ],
  },
  {
    name: { "pt-br": "Indústria & Recursos Naturais", en: "Industry & Natural Resources", es: "Industria y Recursos Naturales" },
    clients: ["Alubar", "Bauminas", "Brasilagro", "COCARI", "Wickbold", "Nova Flex Espumas", "Geominas", "Kurita", "DTA Engenharia"],
  },
  {
    name: { "pt-br": "Serviços, Tecnologia & Financeiro", en: "Services, Technology & Finance", es: "Servicios, Tecnología y Finanzas" },
    clients: ["BANRISUL", "Trígono Capital", "WebHelp", "Eduzz", "Figwal", "GK Condomínios", "Hopi Hari", "Igreja Presbiteriana Independente do Brasil"],
  },
];

export interface Brand {
  name: string;
  label?: string;
  area: L10n;
  logo: string | null;
}

const area = (pt: string, en: string, es: string): L10n => ({ "pt-br": pt, en, es });

/** Logos: Wikimedia Commons ou site oficial de cada organização (ver public/img/clientes/ORIGEM.md). */
export const brands: Brand[] = [
  { name: "Eletrobras", area: area("Energia", "Energy", "Energía"), logo: "/img/clientes/eletrobras.png" },
  { name: "FURNAS", area: area("Energia", "Energy", "Energía"), logo: "/img/clientes/furnas.png" },
  { name: "Eletronuclear", area: area("Nuclear", "Nuclear", "Nuclear"), logo: "/img/clientes/eletronuclear.png" },
  { name: "CNEN", area: area("Nuclear", "Nuclear", "Nuclear"), logo: "/img/clientes/cnen.svg" },
  { name: "INB", area: area("Nuclear", "Nuclear", "Nuclear"), logo: "/img/clientes/inb.png" },
  { name: "NUCLEP", area: area("Nuclear", "Nuclear", "Nuclear"), logo: "/img/clientes/nuclep.png" },
  { name: "SABESP", area: area("Saneamento", "Water", "Saneamiento"), logo: "/img/clientes/sabesp.svg" },
  { name: "Porto de Santos", area: area("Portos", "Ports", "Puertos"), logo: "/img/clientes/porto-de-santos.png" },
  { name: "EMAP", area: area("Portos", "Ports", "Puertos"), logo: "/img/clientes/emap.svg" },
  { name: "Grupo CCR", area: area("Infraestrutura", "Infrastructure", "Infraestructura"), logo: null },
  { name: "BANRISUL", area: area("Financeiro", "Finance", "Finanzas"), logo: "/img/clientes/banrisul.svg" },
  { name: "SUSEP", area: area("Regulação", "Regulation", "Regulación"), logo: null },
  { name: "SENAI — CETIQT", label: "SENAI CETIQT", area: area("Educação", "Education", "Educación"), logo: "/img/clientes/senai.png" },
  { name: "UNIFESP", area: area("Educação", "Education", "Educación"), logo: "/img/clientes/unifesp.png" },
  { name: "UNIFEI", area: area("Educação", "Education", "Educación"), logo: "/img/clientes/unifei.png" },
  { name: "Hospital Alemão Oswaldo Cruz", label: "Oswaldo Cruz", area: area("Saúde", "Healthcare", "Salud"), logo: null },
  { name: "GHC — Grupo Hospitalar Conceição", label: "GHC", area: area("Saúde", "Healthcare", "Salud"), logo: "/img/clientes/ghc.png" },
  { name: "Theatro Municipal", area: area("Cultura", "Culture", "Cultura"), logo: "/img/clientes/theatro-municipal.png" },
];

export interface Locality {
  city: string;
  uf: string;
  coord: [number, number];
  clients: string[];
}

/** Localidades com projetos (coordenadas aproximadas do centro do município). */
export const localities: Locality[] = [
  {
    city: "São Paulo",
    uf: "SP",
    coord: [-46.63, -23.55],
    clients: ["SABESP", "Desenvolve SP", "Grupo CCR", "IPEN", "COREN-SP", "ABIT", "Hospital Alemão Oswaldo Cruz", "H.Olhos", "UNIFESP", "Memorial da América Latina", "Associação Museu Afro Brasil", "Wickbold", "Brasilagro", "Trígono Capital"],
  },
  { city: "Santos", uf: "SP", coord: [-46.33, -23.96], clients: ["Porto de Santos"] },
  { city: "Piracicaba", uf: "SP", coord: [-47.65, -22.73], clients: ["SEMAE Piracicaba"] },
  { city: "Pindamonhangaba", uf: "SP", coord: [-45.46, -22.92], clients: ["Prefeitura de Pindamonhangaba"] },
  { city: "São José dos Campos", uf: "SP", coord: [-45.89, -23.18], clients: ["Fundação Cassiano Ricardo"] },
  { city: "Jarinu", uf: "SP", coord: [-46.73, -23.1], clients: ["Prefeitura de Jarinu"] },
  { city: "Itupeva", uf: "SP", coord: [-47.06, -23.15], clients: ["Hopi Hari"] },
  { city: "Cajati", uf: "SP", coord: [-48.12, -24.73], clients: ["Prefeitura de Cajati"] },
  { city: "Santa Rita do Passa Quatro", uf: "SP", coord: [-47.48, -21.71], clients: ["Câmara de Santa Rita do Passa Quatro"] },
  { city: "Rio de Janeiro", uf: "RJ", coord: [-43.2, -22.91], clients: ["Eletrobras", "FURNAS", "CNEN", "INB", "SUSEP", "SENAI — CETIQT", "Fundação Cidade das Artes"] },
  { city: "Angra dos Reis", uf: "RJ", coord: [-44.32, -23.0], clients: ["Eletronuclear"] },
  { city: "Itaguaí", uf: "RJ", coord: [-43.77, -22.85], clients: ["NUCLEP"] },
  { city: "Itajubá", uf: "MG", coord: [-45.45, -22.42], clients: ["UNIFEI"] },
  { city: "Varginha", uf: "MG", coord: [-45.43, -21.55], clients: ["Grupo Unis"] },
  { city: "São Gonçalo do Pará", uf: "MG", coord: [-44.86, -19.98], clients: ["Prefeitura de São Gonçalo do Pará"] },
  { city: "Alegre", uf: "ES", coord: [-41.53, -20.76], clients: ["IFES — Alegre"] },
  { city: "Porto Alegre", uf: "RS", coord: [-51.23, -30.03], clients: ["CEEE Grupo Equatorial", "BANRISUL", "GHC — Grupo Hospitalar Conceição", "CREA-RS", "Portos RS"] },
  { city: "Santa Maria", uf: "RS", coord: [-53.81, -29.68], clients: ["Câmara de Santa Maria"] },
  { city: "Encantado", uf: "RS", coord: [-51.87, -29.24], clients: ["Prefeitura de Encantado"] },
  { city: "Florianópolis", uf: "SC", coord: [-48.55, -27.59], clients: ["Eletrosul"] },
  { city: "Navegantes", uf: "SC", coord: [-48.65, -26.9], clients: ["Prefeitura de Navegantes"] },
  { city: "Castro", uf: "PR", coord: [-50.01, -24.79], clients: ["Fundação ABC"] },
  { city: "Mandaguari", uf: "PR", coord: [-51.67, -23.55], clients: ["COCARI"] },
  { city: "Congonhinhas", uf: "PR", coord: [-50.55, -23.55], clients: ["Prefeitura de Congonhinhas"] },
  { city: "Mauá da Serra", uf: "PR", coord: [-51.23, -23.9], clients: ["Prefeitura de Mauá da Serra"] },
  { city: "Ipiranga", uf: "PR", coord: [-50.58, -25.02], clients: ["Prefeitura de Ipiranga"] },
  { city: "Nova Esperança", uf: "PR", coord: [-52.2, -23.18], clients: ["Prefeitura de Nova Esperança"] },
  { city: "Brasília", uf: "DF", coord: [-47.88, -15.79], clients: ["APEX Brasília", "CNF"] },
  { city: "Goiânia", uf: "GO", coord: [-49.25, -16.68], clients: ["CREAGO"] },
  { city: "Carlinda", uf: "MT", coord: [-55.83, -9.97], clients: ["Prefeitura de Carlinda"] },
  { city: "Comodoro", uf: "MT", coord: [-59.79, -13.66], clients: ["Prefeitura de Comodoro"] },
  { city: "Salvador", uf: "BA", coord: [-38.5, -12.97], clients: ["IFBA"] },
  { city: "Ribeira do Pombal", uf: "BA", coord: [-38.54, -10.83], clients: ["Prefeitura de Ribeira do Pombal"] },
  { city: "Ipojuca", uf: "PE", coord: [-35.06, -8.4], clients: ["Porto de Suape"] },
  { city: "Cabedelo", uf: "PB", coord: [-34.83, -6.97], clients: ["Companhia Docas da Paraíba"] },
  { city: "Morada Nova", uf: "CE", coord: [-38.37, -5.11], clients: ["Prefeitura de Morada Nova"] },
  { city: "Betânia do Piauí", uf: "PI", coord: [-40.79, -8.14], clients: ["Prefeitura de Betânia do Piauí"] },
  { city: "São Luís", uf: "MA", coord: [-44.3, -2.53], clients: ["EMAP"] },
  { city: "Manaus", uf: "AM", coord: [-60.02, -3.12], clients: ["Amazonas Energia"] },
  { city: "Marabá", uf: "PA", coord: [-49.12, -5.37], clients: ["Unifesspa"] },
  { city: "Barcarena", uf: "PA", coord: [-48.62, -1.51], clients: ["Alubar"] },
  { city: "Porto Velho", uf: "RO", coord: [-63.9, -8.76], clients: ["FIERO-RO"] },
  { city: "Mirante da Serra", uf: "RO", coord: [-62.67, -11.03], clients: ["Prefeitura de Mirante da Serra"] },
];

export const regions: { id: string; name: L10n; ufs: string[] }[] = [
  { id: "N", name: { "pt-br": "Norte", en: "North", es: "Norte" }, ufs: ["AC", "AP", "AM", "PA", "RO", "RR", "TO"] },
  { id: "NE", name: { "pt-br": "Nordeste", en: "Northeast", es: "Nordeste" }, ufs: ["AL", "BA", "CE", "MA", "PB", "PE", "PI", "RN", "SE"] },
  { id: "CO", name: { "pt-br": "Centro-Oeste", en: "Center-West", es: "Centro-Oeste" }, ufs: ["DF", "GO", "MT", "MS"] },
  { id: "SE", name: { "pt-br": "Sudeste", en: "Southeast", es: "Sudeste" }, ufs: ["ES", "MG", "RJ", "SP"] },
  { id: "S", name: { "pt-br": "Sul", en: "South", es: "Sur" }, ufs: ["PR", "RS", "SC"] },
];

export const totals = {
  organizations: clientSectors.reduce((n, s) => n + s.clients.length, 0),
  sectors: clientSectors.length,
  ufs: new Set(localities.map((l) => l.uf)).size,
  municipalities: localities.length,
  regions: regions.filter((r) => r.ufs.some((uf) => localities.some((l) => l.uf === uf))).length,
};
