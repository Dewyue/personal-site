[中文](./README.md) · **English**

# Dewy / Wang Yue

Personal site of a Forward Deployed Engineer. Design and engineering, used together, to turn business problems into products that ship: design systems, parent-facing H5 and mini programs, Soft Ops dashboards, and an AI-native delivery workflow.

Live: [wangyue-dewy.vercel.app](https://wangyue-dewy.vercel.app)

The site is bilingual. Chinese lives at the root (`/`). English lives under `/en`. The 中 / EN control in the header switches to the same page in the other language and tries to keep your scroll position.

---

## Shared chrome

Every page uses the same header and footer.

### Header

Sticky, translucent, with a backdrop blur. Left to right:

| Slot | What | What it does |
| --- | --- | --- |
| Brand | “王悦” in Chinese, “Dewy” in English | Home for the current language |
| Main nav | Home, Path, Work, Interests, Contact | Desktop row. The current page is bold. On a child page such as Cinema, Interests stays active |
| Contact | Pill button | Goes to the contact page. Hidden on small screens so it does not crowd language and theme |
| 中 / EN | Segmented control | Chinese ↔ English. Clicking the language you are already on does nothing |
| Theme | Sun / moon | Light and dark. The choice is stored locally |
| Menu | Hamburger | Small screens only. Same links, plus 中文 / English again |

### Footer

Dark band at the bottom of every page.

- Eyebrow **Contact**, then **Let's talk →**, linking to Contact, with the site tagline beside it.
- Three columns: **Navigate** (the five main sections), **Social** (GitHub, Instagram, Xiaohongshu, Douyin, LinkedIn), **Info** (email, WeChat Dewyue, Shanghai).
- Under Info: **Just do it / Just Dewy**.
- Bottom line: copyright year and “Designed & built with care.”

---

## Home `/en`

Intro, a short work history, capabilities, a skills marquee, and a portfolio teaser. The full timeline is not dumped here — only the two current roles.

### Hero

- Eyebrow: **FDE · AI-native design engineering**
- Headline: **Hi, I'm Dewy.**
- Education pill: Central South University · B.A. expected 2027
- Tagline: design and engineering together — whether the experience holds up, and whether it can ship
- Actions: **The path so far** (Path page) and **Contact →**
- Circular portrait on the right. On small screens the portrait sits above the copy

### Experience · The path so far.

Eyebrow **Experience**, headline **The path so far.** **Full timeline →** jumps to the timeline anchor on Path.

Three paragraphs:

1. Current FDE work, plus education-tech: design systems, parent conversion flows, Soft Ops, and Cursor Agent Skills
2. Earlier: dialect corpus at Xiaohongshu, Prompt Engineering for Jimeng at ByteDance, a GAC concept vehicle, and the commissioned memoir *Shuzhai yu Renjian*
3. Outside work: diving, climbing, popping / waacking, guitar, film, coffee, board games, improv

Two dark cards, the first two **Work** entries only:

- **Forward Deployed Engineer** · tech consulting (confidential) · 2026.6 — Present
- **Interaction design · Front-end** · education-tech company · 2026.6 — Present

Each card shows category, title, organization, years, and a short description.

### Capabilities · What I do.

Eyebrow **Capabilities**, headline **What I do.** Three columns:

**FDE delivery** — on-site requirement breakdown; design → code → ship; Soft Ops dashboards; H5 / WeChat mini programs; CloudBase / CDN release.

**Design systems & brand** — multi-brand visual systems; Figma tokens / components; IP and marketing assets; conversion-flow visuals; aesthetic eval and iteration.

**AI-native workflow** — Cursor Agent Skills; spec / acceptance criteria; reusable PE and SOPs; daily stakeholder worklogs; Prompt Engineering.

### Skills marquee

A dark infinite strip labeled “Skills”: Figma design systems, Cursor / AI coding, Soft Ops / dashboard UX, H5 / mini programs, brand and IP, CloudBase deploy, Prompt Engineering, aesthetic eval.

### Portfolio · Design portfolio.

Eyebrow **Portfolio**, headline **Design portfolio.** The whole card links to Work, with **View portfolio →** at the top right. Four covers preview the projects: From Future to Future, Thermos structure design, EV charger form design, Future Smart Home.

---

## Path `/en/about`

Nav label: **Path**. This is the full timeline the homepage only samples, plus the same capability map.

### Intro

- Eyebrow: **Path**
- Headline: **The path so far,** / **and what I can do.**
- Lead: work, internships, projects — plus a reusable skill map

### Timeline · The path so far.

Eyebrow **Timeline**, headline **The path so far.** Grouped into dark cards. Education puts the school in the title and the degree underneath. Everything else is role or project, then organization.

**Work**

- Forward Deployed Engineer · tech consulting · 2026.6 — Present  
  Ambiguous requests turned into shippable scope; local preview before production; Cursor Agent Skills for design language, acceptance checks, and repeatable steps.
- Interaction design · Front-end · education-tech · 2026.6 — Present  
  Multi-brand design systems; parent H5 / mini-program conversion; Soft Ops dashboard hierarchy and front-end delivery.

**Education**

- Central South University · Bachelor's · class of 2027  
  Product design, 2023 cohort. Design psychology, intelligent interaction, design methods, user research, product form, service design.

**Internships**

- AI corpus intern · Xiaohongshu · 2025.8  
  Dialect AI, Shanghainese annotation and strategy.
- Prompt engineer · ByteDance · 2025.9 — 2025.12  
  Jimeng video model (Seedance 4.0): camera, light, material, narrative.

**Projects**

- Vehicle concept design · GAC “From the Future to the Future” · 2025.9 — 2025.10  
  Scenario and user research; national top seven.
- Independent designer (commission) · *Shuzhai yu Renjian* · 2026.3 — 2026.4  
  A memoir for an elder: interviews, structure, layout, cover craft.

**Workshops / Academic**

- Future smart home · Central South University × Chiba University · 2025.10
- Design policy · Hunan University · 2025.11
- TRAE AI Coding Hackathon · Central South University · 2026.4

### Capabilities · Skill map.

Eyebrow **Capabilities**, headline **Skill map.** Same three columns as “What I do” on the homepage, so this page stands on its own.

---

## Work `/en/projects`

The design portfolio is read inside the site, not as an external PDF. Pages come from *Dewy’s Portfolio 2026*. The résumé spread is omitted from the viewer.

### Index

- Eyebrow: **Works · 4 Projects**
- Headline: **Portfolio.**
- Lead: read the full book on this page

Four cover cards with number, category, and title. A click stays on the page: it scrolls to the viewer and opens that project’s first page.

| No. | Title | Category | What it is |
| --- | --- | --- | --- |
| 01 | From Future to Future | Mobility concept design | GAC HYPTEC TIDAL — a tidal-powered concept craft for a Greater Bay Area waterfront city |
| 02 | Thermos structure design | Industrial product structure | Exploded views, drawings, parts, materials |
| 03 | EV charger form design | Industrial product form | Form and material for charging hardware in everyday space |
| 04 | Future Smart Home | Smart home | Chiba workshop: living forty years out, from concept to section and a physical model |

### Viewer

Eyebrow **Portfolio · 30 Pages**, headline **Portfolio.** Hint: jump from the cards or the chips; use ← → to turn pages.

The viewer includes:

- **Project chips** for 01–04. The chip for the spread you are on stays highlighted
- **Stage**: 16:9, with translucent previous / next arrows
- **Counter**: current / total, plus “number · title” on wider screens
- **Previous / Next** buttons
- **Thumbnail strip**: click to jump; the active thumb is outlined and scrolled into the center
- **Keyboard**: left and right arrows while the viewer is on screen (ignored when focus is in a field)

---

## Interests `/en/interests`

Life outside work, in five moods. Cinema is the only card that opens another page.

### Intro

- Eyebrow: **Interests · 12**
- Headline: **Outside work,** / **these keep me present.**
- Lead, on the right: the same attention, practiced underwater, on the wall, in a room, and in ordinary days

A dark marquee scrolls every interest name.

### Move · Get moving

Eyebrow **Move**, title **Get moving**, **04 topics**.

| | Name | Note |
| --- | --- | --- |
| 01 | Diving | Scuba / freediving. Slow the pace; practice breath and focus |
| 02 | Street dance | Popping / Waacking / Afro. Find the beat, then make improvisation readable |
| 03 | Climbing | One route, one problem. Touch over force |
| 04 | Travel | A different city, a reset for ordinary attention |

Diving and travel are wide cards. Dance and climbing are narrow.

### Play · Play a round

Eyebrow **Play**, title **Play a round**, **03 topics**. This band is dark, alternating with the one above.

| | Name | Note |
| --- | --- | --- |
| 01 | Board games | Social life inside rules. Strategy and laughter both count |
| 02 | Chess | Sixty-four squares. The judgment is the habit |
| 03 | Billiards | One line, one angle, patience in millimeters |

### Laugh · Have a laugh

Eyebrow **Laugh**, title **Have a laugh**, **02 topics**.

| | Name | Note |
| --- | --- | --- |
| 01 | Improv comedy | Watching people take the offer. The accident is funnier than the script |
| 02 | Podcasts | Serious subjects, hosts who keep laughing |

### Think · Think it through

Eyebrow **Think**, title **Think it through**, **02 topics**. Dark band.

| | Name | Note |
| --- | --- | --- |
| 01 | Cinema | Corner label **View →**. Opens `/en/interests/cinema` |
| 02 | Reading | The lightest trip, and the quietest conversation |

### Feel · Take it in

Eyebrow **Feel**, title **Take it in**, **02 topics**.

| | Name | Note |
| --- | --- | --- |
| 01 | Acoustic guitar | Tone, at the pace of the fingers |
| 02 | Coffee | Bean to cup. A small ritual that repeats |

### Together

Eyebrow **Together**, headline **Share one of these?** Copy: a dive, a game night, an improv show, or just coffee. Button **Let's talk →** goes to Contact.

### Cinema `/en/interests/cinema`

Opened from the Cinema card. It is not its own item in the main nav.

- Back link: **← Interests**
- Eyebrow: **Cinema**
- Headline: **Cinema**
- Two lines: film as story, light, and feeling in one sitting; theaters when possible, IMAX especially

**Life Ranking**

Eyebrow **Life Ranking**, headline **Life ranking**. Hint: click a poster for IMDb. Six posters, a slight zoom on hover, then rank, Chinese title, English title, and year.

| Rank | Film | Year |
| --- | --- | --- |
| 01 | Spirit: Stallion of the Cimarron | 2002 |
| 02 | Pirates of the Caribbean: At World's End | 2007 |
| 03 | Inception | 2010 |
| 04 | The Shawshank Redemption | 1994 |
| 05 | Her Story | 2024 |
| 06 | World War Z | 2013 |

**← Interests** again at the bottom.

---

## Contact `/en/contact`

- Eyebrow: **Contact**
- Headline: **Got an idea?** / **Let's make something.**
- Lead: project work, a technical conversation, or a role
- Status: **Open to remote freelance and consulting.**

Equal-height cards on a dark band. External links open in a new tab. Email is a `mailto`.

| Card | Shown as | Note |
| --- | --- | --- |
| Email | iKevinAyuso@163.com | Usually within 1–2 business days |
| GitHub | github.com/Dewyue | Code and open source |
| Xiaohongshu | 6,385 likes and saves | Profile |
| Douyin | More work and clips | Short video and daily life |
| Instagram | @dewy_justdoit | Daily life and work |
| LinkedIn | Professional network | Experience and recommendations |
| WeChat | Dewyue | Quick chat. Not an outbound link |
| Scan to visit | Site QR code | Opens this site on a phone. The card image can be downloaded |

Closing line: **Currently based in Shanghai, China.**

---

## Chinese site

Chinese is a parallel site, not a runtime translation layer. Drop the `/en` prefix:

- `/` Home
- `/about` 经历
- `/projects` 作品
- `/interests` 兴趣
- `/interests/cinema` 电影
- `/contact` 联系

Structure, page ranges, and the film list match. Switching language from Cinema stays on Cinema.

---

## Run locally

```sh
npm install
npm run dev
```

Dev server: `localhost:4321`. `npm run build` writes the static site to `./dist/`.
