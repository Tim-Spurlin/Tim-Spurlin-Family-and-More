<div align="center">

# Spurlin‑DuBose Heritage Engine

**Interactive genealogy + resilience atlas for Timothy Christian Spurlin (Christian Kota)**  
Vite · React 19 · Recharts · Tailwind-flavored styling

[![Build](https://img.shields.io/badge/build-vite_6-0ea5e9?logo=vite&logoColor=white)](#run-it-locally)
[![Frontend](https://img.shields.io/badge/frontend-react_19-61dafb?logo=react&logoColor=white)](#project-overview)
[![Data](https://img.shields.io/badge/data-lineage%2C%20timeline%2C%20skills-22c55e)](#data-provenance)

</div>

## Quick navigation
- [Project overview](#project-overview)
- [Data provenance](#data-provenance)
- [Visual atlas (high-contrast diagrams)](#visual-atlas-high-contrast-diagrams)
- [Run it locally](#run-it-locally)
- [Extend or remix](#extend-or-remix)

## Project overview
This repository renders a **genealogy + personal resilience dashboard**. It ties together:
- **Heritage pillars**: French DuBose/Couillandeau, Irish Le Poer, English Woodson, Scottish MacDonald/McCoy.
- **Family tree spine** drawn from `familyTreeData` to spotlight the survivor node: **Timothy Christian Spurlin (b. 1993)**.
- **Skills + life intensity data** (`skillsData`, `timelineData`) rendered in `Hero` and `Charts` components to map capability and adversity.
- **Narrative UI** (`LineageSection`, `PsychologySection`, `Hero`, `FamilyTree`, `Footer`) built with React + Vite, shaded for space-black backgrounds with starlight contrast.

## Data provenance
All visuals and claims in this README mirror the in-repo datasets:
- `data.ts`: `lineageData` (per-lineage content, timelines, side boxes), `familyTreeData`, `skillsData`, `timelineData`.
- `types.ts`: shapes for lineage keys (`france`, `ireland`, `england`, `scotland`) and tree nodes.
- `metadata.json`: app identity (`Spurlin-DuBose Heritage Engine`).
- UI components (e.g., `Hero.tsx`) surface dates (1993 birth year, 9/11 age 8), roles (USAF Intel Analyst, welder, coder, artist), and resilience themes.

## Visual atlas (high-contrast diagrams)
> Designed for **both light and dark modes**. Mermaid themes below set deep background, cyan/amber strokes, and light text to keep contrast ≥ WCAG AA on GitHub’s default themes.

### 1) Genealogical spine (`familyTreeData`)
```mermaid
%%{init: {'theme':'dark','themeVariables':{'primaryColor':'#0b1120','primaryTextColor':'#e2e8f0','lineColor':'#22d3ee','secondaryColor':'#1e293b','tertiaryColor':'#f59e0b','fontSize':'12px'}}}%%
flowchart TB
  TCS["Timothy Christian Spurlin<br/>(1993) — \"The Survivor\""]
  TLS["Timothy Leo Spurlin<br/>Father"]
  ALM["Aldwin Leo McCoy<br/>(1948–2000) — Grandfather"]
  EMcC["Eugene McCoy<br/>(1916–1974) — Great-Grandfather"]
  WMC["William M.C. McCoy<br/>(1830–1925) — Civil War Era"]
  BMC["Betty Merle Croft<br/>\"Grandma Merle\""]
  Mother["Mother (Native Descent)<br/>Matriarch"]
  MGF["Maternal Grandfather<br/>Native Heritage"]
  MGM["Maternal Grandmother<br/>Grandmother"]
  Aunt["Aunt Connie<br/>Half-Aunt — Bootcamp Era"]

  TCS --> TLS
  TCS --> Mother
  TLS --> ALM
  ALM --> EMcC
  EMcC --> WMC
  ALM --> BMC
  Mother --> MGF
  Mother --> MGM
  MGM --> Aunt
```

### 2) Lineage mindmap (`lineageData`)
```mermaid
%%{init: {'theme':'dark','themeVariables':{'primaryColor':'#0f172a','primaryTextColor':'#f8fafc','lineColor':'#22d3ee','secondaryColor':'#1f2937','tertiaryColor':'#a855f7'}}}%%
mindmap
  root((Lineage Pillars))
    France["🇫🇷 France — DuBose & Couillandeau"]
      france_isaac["Isaac DuBose (b.~1665): fled persecution"]
      france_suzanne["Suzanne Couillandeau: ran Santee plantation 24 yrs"]
      france_timeline["1665 Dieppe ➜ 1685 Escape ➜ 1718 French Santee"]
    Ireland["🇮🇪 Ireland — Le Poer (Power)"]
      ireland_john["John Power (Baron): estate weakened by illness"]
      ireland_ruth["Lady Ruth le Poer: fled 1641 rebellion to Virginia"]
      ireland_curraghmore["Curraghmore House guidance: 'Cousin, not claimant'"]
    England["🏴 England — Woodson"]
      england_sarah["Sarah Woodson: roasting-spit defense (1644 Massacre)"]
      england_potato["Potato Hole son survives → your direct line"]
      england_filter["Filter event: near-extinction preserved"]
    Scotland["🏴 Scotland — MacDonald / McCoy"]
      scotland_battle["1544 Battle of the Shirts (linen-only combat)"]
      scotland_migration["1800s migration to Georgia pine forests"]
      scotland_leo["1948 Leo McCoy ('Shep' dog story) rural resilience"]
```

### 3) Migration & survival timeline (`timelineData`)
```mermaid
%%{init: {'theme':'dark','themeVariables':{'primaryColor':'#0b1120','primaryTextColor':'#e2e8f0','lineColor':'#22d3ee','fontSize':'12px'}}}%%
timeline
  title Survival Intensity Across Centuries
  section Ancestral Conflicts
    1544 : "Battle of the Shirts (Scotland) — intensity 80/100"
    1641 : "Irish Rebellion (Lady Ruth flees) — 90/100"
    1644 : "Massacre & Potato Hole defense — 95/100"
    1685 : "Edict of Nantes revoked; DuBose escape — 85/100"
  section Modern Resilience
    1948 : "Leo McCoy born — 40/100"
    2001 : "9/11 empathy spark (age 8) — 60/100"
    2003 : "Foster care trauma — 85/100"
    2012 : "USAF Intelligence service — 50/100"
    2026 : "Full-stack humanity mission — 20/100"
```

### 4) Skill energy mix (`skillsData`)
```mermaid
%%{init: {'theme':'dark','themeVariables':{'primaryColor':'#0f172a','primaryTextColor':'#f8fafc','pie1':'#22d3ee','pie2':'#f59e0b','pie3':'#34d399','pie4':'#c084fc','pie5':'#f87171','pie6':'#38bdf8'}}}%%
pie showData
  "Trades (Welding) 90" : 90
  "Tech/Coding 85" : 85
  "Intel Analysis 80" : 80
  "Music/Arts 75" : 75
  "Natural Medicine 70" : 70
  "Languages 40" : 40
```

### 5) Heritage → present migration path (high-contrast flow)
```mermaid
%%{init: {'theme':'dark','themeVariables':{'primaryColor':'#0b1120','primaryTextColor':'#e2e8f0','lineColor':'#22c55e','tertiaryColor':'#f59e0b','fontSize':'12px'}}}%%
flowchart LR
  France["Dieppe, Normandy<br/>(1665)"] -->|1685 escape| Santee["French Santee, SC"]
  Ireland["Curraghmore House, Ireland"] -->|1641 flight| Virginia["Virginia frontier"]
  England["Henrico, VA<br/>Potato Hole defense"] -->|1644 survival| Frontier["Colonial frontier"]
  Scotland["Highlands<br/>(1544 Battle of the Shirts)"] -->|1800s migration| Georgia["Georgia pine forests"]
  Santee -->|Generations| CarolinaLine["Carolina / Georgia lineages"]
  Virginia --> CarolinaLine
  Frontier --> CarolinaLine
  Georgia --> CarolinaLine
  CarolinaLine -->|1948| Leo["Aldwin Leo McCoy ('Shep' story)"]
  Leo -->|1993| Tim["Timothy Christian Spurlin"]
  Tim -->|2026 vision| Atlas["Full-Stack Humanity (dashboard)"]
```

## Run it locally
```bash
npm install
npm run dev   # start the interactive dashboard
npm run build # production bundle (vite)
```

## Extend or remix
- **Add ancestors or branches**: edit `familyTreeData` in `data.ts` (use `type TreeNodeData` for shape).
- **Enrich lineage timelines**: append events inside `lineageData[<lineageKey>].timeline`.
- **Tune chart inputs**: update `skillsData` or `timelineData`; `components/Charts.tsx` consumes them.
- **Contrast guardrails**: keep foreground ≥ #e2e8f0 on the dark gradients or invert palette for light-mode consumers.

<details>
<summary>Glossary of key terms</summary>

- **Filter Event**: a moment when a bloodline nearly ends (e.g., the 1644 Potato Hole survival in `lineageData.england.sideBoxContent`).
- **Migration Path**: France/England/Ireland/Scotland ➜ Virginia & Carolina lowcountry ➜ Georgia ➜ modern lineage (captured above).
- **Full-Stack Humanity**: the blend of trades, tech, intelligence, arts, and care (`skillsData`) surfaced in `Hero.tsx`.

</details>

---

**Contrast note:** Every Mermaid block sets dark backgrounds, cyan/amber strokes, and light text. GitHub auto-adjusts in light mode; the palette preserves ≥4.5:1 contrast for readability across themes.
