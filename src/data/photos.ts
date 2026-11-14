import type { Locale } from "../i18n/locales";

/**
 * Fotografias de banco livre (Unsplash License — uso comercial gratuito).
 * Devem ser substituídas por fotos autorizadas dos projetos reais da Integrade quando disponíveis.
 * Arquivos em public/img/fotos/<file>-1600.webp e <file>-800.webp.
 */
interface PhotoMeta {
  file: string;
  w: number;
  h: number;
  alt: Record<Locale, string>;
  credit: string;
  source: string;
}

const p = (file: string, h: number, credit: string, source: string, pt: string, en: string, es: string): PhotoMeta => ({
  file,
  w: 2000,
  h,
  credit,
  source,
  alt: { "pt-br": pt, en, es },
});

export const photos = {
  energy: p("energia-subestacao", 1333, "American Public Power Association", "https://unsplash.com/photos/AA5v6sMcalY",
    "Subestação de energia iluminada ao entardecer",
    "Power substation lit up at dusk",
    "Subestación eléctrica iluminada al anochecer"),
  port: p("porto-conteineres", 1333, "Olga Subach", "https://unsplash.com/photos/Zuxxq0iHkN4",
    "Vista aérea de terminal portuário de contêineres com guindastes",
    "Aerial view of a container port terminal with cranes",
    "Vista aérea de una terminal portuaria de contenedores con grúas"),
  fieldScan: p("coleta-campo", 1333, "Valentin Lacoste", "https://unsplash.com/photos/A-b2nPSSK6E",
    "Técnico com coletor de dados portátil diante de racks de equipamentos",
    "Technician holding a handheld data collector at equipment racks",
    "Técnico con colector de datos portátil frente a racks de equipos"),
  assetTag: p("etiqueta-ativo", 1333, "Arum Visuals", "https://unsplash.com/photos/tyTU_lc0RSk",
    "Etiqueta de identificação com código em estrutura metálica",
    "Identification label with a code on a metal structure",
    "Etiqueta de identificación con código en una estructura metálica"),
  engineer: p("engenheiro-campo", 1333, "xing bowen", "https://unsplash.com/photos/XZVHCe9B2wY",
    "Profissional de capacete inspecionando tubos de aço em área industrial",
    "Professional in a hard hat inspecting steel pipes in an industrial facility",
    "Profesional con casco inspeccionando tubos de acero en un área industrial"),
  consulting: p("consultoria", 1333, "Ragnar Beaverson", "https://unsplash.com/photos/Hni8XF9umk8",
    "Consultoras analisando informações em um notebook",
    "Consultants reviewing information on a laptop",
    "Consultoras analizando información en una laptop"),
  tech: p("data-center", 1150, "İsmail Enes Ayhan", "https://unsplash.com/photos/lVZjvw-u9V8",
    "Corredor entre painéis e racks de equipamentos",
    "Aisle between equipment panels and racks",
    "Pasillo entre paneles y racks de equipos"),
  hospital: p("hospital", 1500, "Tasha Kostyuk", "https://unsplash.com/photos/Pk-KuizxQv8",
    "Corredor de hospital moderno",
    "Modern hospital corridor",
    "Pasillo de un hospital moderno"),
  publicSector: p("setor-publico", 1220, "Anita Monteiro", "https://unsplash.com/photos/5S8eh79e6L8",
    "Congresso Nacional, em Brasília",
    "National Congress building in Brasília",
    "Congreso Nacional en Brasilia"),
  water: p("saneamento", 1202, "Bob Brewer", "https://unsplash.com/photos/XS5wlyyRKq0",
    "Vista aérea de tanques de uma estação de tratamento",
    "Aerial view of tanks at a treatment plant",
    "Vista aérea de los tanques de una planta de tratamiento"),
  warehouse: p("armazem", 1333, "Lance Chang", "https://unsplash.com/photos/h3pVxOIpnzk",
    "Corredor de armazém com estantes organizadas",
    "Warehouse aisle with organized shelving",
    "Pasillo de almacén con estanterías organizadas"),
  saoPaulo: p("sao-paulo", 1333, "Raphael Nogueira", "https://unsplash.com/photos/0phxYpfFHpg",
    "Ponte Estaiada e edifícios corporativos em São Paulo",
    "Ponte Estaiada bridge and office towers in São Paulo",
    "Puente Estaiada y edificios corporativos en São Paulo"),
} satisfies Record<string, PhotoMeta>;

export type PhotoId = keyof typeof photos;
