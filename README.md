# IntegradeSite

Site institucional da **Integrade — Asset Intelligence & Lifecycle Management**, a marca corporativa que reúne
Integrade Consulting, Integrade Services e Integrade Solutions (incluindo a suíte EAM **Integrade One**).
Destino de publicação: **integrade.com.br**. O site da Integrade Consulting
([integradeconsulting.com.br](https://integradeconsulting.com.br/)) continua próprio e não é alterado por este projeto.

## Rodando

```bash
npm install
npm run dev      # http://localhost:4321/pt-br/
npm run build    # astro check + build estático em ./dist
npm run preview
```

Deploy: projeto Astro estático — a Vercel detecta automaticamente (`npm run build`, saída `dist/`).

## Arquitetura

```text
src/
  copy/            Todo o texto do site, um arquivo por idioma
    pt-br.ts       Fonte da verdade; exporta o tipo SiteCopy
    en.ts, es.ts   Traduções tipadas contra SiteCopy (estrutura idêntica obrigatória)
  data/company.ts  Fatos da empresa: contatos, endereço, CNPJ, números, setores/clientes, normas
  i18n/locales.ts  Idiomas, rotas equivalentes entre idiomas, helpers de URL (módulos, tecnologias, compra/locação)
  views/           Uma view por tipo de página, recebe `locale` (Home, About, Consulting, Services, ...)
  components/      Header (mega menu + menu mobile), Footer, PageHero, LifecycleExplorer,
                   LifecycleOrbit, ModuleExplorer, ProofBand, Sectors, CtaBand, ContactForm
  pages/           Rotas finas por idioma (pt-br/, en/, es/) que apenas chamam as views
  styles/global.css Design system (tokens, tipografia, grid, botões, cards, formulários)
```

Para editar um texto: altere `src/copy/pt-br.ts` e o equivalente em `en.ts`/`es.ts`. O `astro check` acusa
qualquer divergência de estrutura entre idiomas.

## Posicionamento e conteúdo

- Marca corporativa: Integrade — *Asset Intelligence & Lifecycle Management*; assinatura *Integrated Expertise. Intelligent Solutions.*
- Três frentes: Consulting (conhecimento especializado), Services (execução e resultados), Solutions (tecnologia e inovação).
- Fio condutor: **ciclo de vida do ativo** (incorporar → identificar → inventariar → controlar → operar → movimentar → avaliar), mapeando o papel de cada frente e de cada módulo da Integrade One — enquadramento que nenhum concorrente analisado usa.
- Integrade One: 10 módulos no mesmo nível (One InPat descendente do Unispat, sem hierarquia), One Apps e One Capture (proposta de nome para o IMI, não homologada).
- Fatos usados (todos publicados em integradeconsulting.com.br): desde 2010, +93 organizações, 19 estados + DF, 5 regiões, 9 setores, lista de clientes, normas (CPC 27, CPC 01, ICPC 10, NBC TSP 07, MCASP, Lei 4.320/64, NBR 14653), materiais de identificação, equipamentos, tipos de laudo, telefone/WhatsApp (11) 5081-5001, e-mail, endereço e CNPJ.
- Tipografia: Inter + Source Serif 4 (licença OFL, servidas localmente via @fontsource — sem requisição a terceiros).

## Clientes

A carteira de clientes é a mesma do grupo e foi copiada do site da Integrade Consulting
(repositório `IntegradeDev/IntegradeSiteConsul`, branch `main`):

- `src/data/clients.ts` — lista completa por setor, marcas em destaque, localidades do mapa e regiões.
  Totais exibidos no site (+93 organizações, 9 setores, 19 UFs, 43 municípios, 5 regiões) são calculados dessa lista.
- `src/data/brazilMap.ts` — contornos dos estados (IBGE, via brazil-states.geojson), igual ao da Consulting.
- `public/img/clientes/` — logos oficiais (Wikimedia Commons ou site da organização; ver `ORIGEM.md`).
  Marca sem arquivo aparece como nome em texto. Para adicionar: salve o arquivo na pasta e preencha `logo` em `brands`.

O botão flutuante de WhatsApp segue a configuração da Consulting: (11) 5081-5001, com mensagem inicial
diferente por seção do site (textos em `ui.whatsappFloat` de cada arquivo de copy).

## Fotografias

Fotos de banco livre do Unsplash (Unsplash License: uso comercial gratuito, sem atribuição obrigatória),
otimizadas em WebP 1600 px e 800 px em `public/img/fotos/`. Créditos e links de origem em `src/data/photos.ts`.
São imagens ilustrativas: substitua por fotos autorizadas de projetos reais da Integrade mantendo o mesmo nome de arquivo.

## Formulários

Não há backend aprovado. Todo formulário monta um `mailto:` para comercial@integrade.com.br com os campos
preenchidos e abre o cliente de e-mail do visitante — nada é enviado automaticamente, e a página diz isso.
WhatsApp é oferecido como canal alternativo. A necessidade é preservada via `?need=` entre páginas.
Ao ter um backend/CRM, substitua o handler em `src/components/ContactForm.astro`.

## Pendências de confirmação

- Nome **One Capture** (não verificado quanto a registro/domínio).
- Fronteiras funcionais dos módulos e processos cobertos por One Transfer/One Projects.
- Domínio final (`site` em `astro.config.mjs` aponta para https://www.integrade.com.br).
- Fotografias reais e autorizadas para substituir as de banco livre.
- Modelo SaaS (planos, valores, SLAs) — deliberadamente não publicado.
