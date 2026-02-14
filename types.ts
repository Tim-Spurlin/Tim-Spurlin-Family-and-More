export enum AppMode {
  DASHBOARD = 'DASHBOARD',
  TERMINAL = 'TERMINAL'
}

export enum PageView {
  HOME = 'HOME',
  BIO = 'BIO',
  GENEALOGY = 'GENEALOGY',
  ENGINEERING = 'ENGINEERING',
  TRADES = 'TRADES'
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  bpm: number;
  key: string;
  url: string; // URL to audio file
  coverArt: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: 'survival' | 'trades' | 'intel' | 'art';
  verification?: string; // "Source Literacy" link/text
}

export interface GitCommit {
  id: string;
  message: string;
  date: string;
  repo: string;
}

export interface GenealogyNode {
  id: string;
  group: number; // 1: Self/Modern, 2: McCoy/MacDonald, 3: Power/Irish, 4: DuBois/Guest
  verifiedLevel: number; // 1-10 (Source Literacy)
  birthYear: number;
  deathYear?: number;
  label?: string;
  title?: string;
}

export interface GenealogyLink {
  source: string;
  target: string;
  value: number;
  type: 'biological' | 'adoptive' | 'marriage';
}

export interface GenealogyData {
  nodes: GenealogyNode[];
  links: GenealogyLink[];
}

export interface PsychCaseStudy {
  id: string;
  title: string;
  subject: string;
  classification: string;
  narrative: string;
  analysis: string;
}

export interface AncestralStory {
  id: string;
  title: string;
  era: string;
  lineage: 'Power' | 'MacDonald' | 'DuBois' | 'Spurlin';
  content: string;
  tags: string[];
}

export interface MemoryVideo {
  id: string;
  title: string;
  date: string;
  description: string;
  url: string;
  thumbnail?: string;
}
