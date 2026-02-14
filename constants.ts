import { Track, TimelineEvent, GitCommit, GenealogyData, PsychCaseStudy, MemoryVideo, AncestralStory } from './types';

export const LINKTREE_URL = "https://linktr.ee/christiankota";
export const HERITAGE_ENGINE_URL = "https://spurlin-dubose-heritage-engine-219296874904.us-west1.run.app/";

export const BIO_SUMMARY = `
Timothy Christian Spurlin (Christian Kota) is a Polymath, USAF Veteran, and Independent Scholar.
Operating at the intersection of High-Reliability Software Engineering, Industrial Trades, and Avant-Garde Art.
Philosophy: "Break Down to Build Up."
`;

export const TIMELINE: TimelineEvent[] = [
  {
    year: 1993,
    title: "Origin: The 15th Day",
    description: "Born July 18. On August 2nd, 1993—at exactly 15 days old—Timothy Christian Spurlin (Kota) was captured in his earliest defining portrait. This specific date marks the recorded beginning of a life narrative that would soon enter the turbulence of the foster care system.",
    category: "survival",
    verification: "Photographic Record: Aug 2, 1993"
  },
  {
    year: 1998,
    title: "The Foster Care Odyssey",
    description: "Navigated the instability of the system with brother Zachary. From the kindness of Ms. Fern (who sang 'Take Me Out to the Ball Game') and Ms. Reba (who cared for Justin, Antonio, and Mr. Carson) to the abusive environment of Ms. Jeanie & Mr. Jackie. A foundational lesson in adaptation.",
    category: "survival",
    verification: "State Records / Personal Testimony"
  },
  {
    year: 2001,
    title: "The Catalyst (9/11)",
    description: "Witnessed 9/11 in 3rd Grade (Age 8) in Mr. Key's class at Okapilco/Cox Elementary. The formation of hyper-vigilance via global trauma.",
    category: "survival",
    verification: "School Records"
  },
  {
    year: 2003,
    title: "The Bootcamp",
    description: "Lived with Aunt Connie and 'Dave' in Coolidge, GA. Subjected to extreme military-style discipline (standing in corners 30hrs+, water hose drills). Dave, a rattlesnake wrangler and welder, inadvertently installed a 'Navy Seal' operating system of pain tolerance and dissociation.",
    category: "survival",
    verification: "Family Witness Testimony"
  },
  {
    year: 2004,
    title: "The Empathy Engine",
    description: "Willie J. Williams Middle School. Observation of the 'Defeated Coach'. Recognized adult fragility and developed Retrospective Empathy. 'The spark that started it all.'",
    category: "survival",
    verification: "Psychological Case Study: 001"
  },
  {
    year: 2007,
    title: "The Arbitrage Architect",
    description: "Age 13. Living with Aunt Charlene on Indian Lake. Established global supply chain (AliBaba -> eBay) selling 'clone iPhones' before the official release. Self-taught Java to mod Motorola flip phones.",
    category: "intel",
    verification: "Financial Records: eBay/PayPal"
  },
  {
    year: 2009,
    title: "Sanctuary: Aunt Laura",
    description: "10th Grade. Lived with Great-Uncle Ronnie and Aunt Laura in Vienna, GA. A period of stability amidst the chaos of adolescence. Shared space with cousin Robert.",
    category: "survival",
    verification: "School Records: Vienna, GA"
  },
  {
    year: 2010,
    title: "The Warrior Phase",
    description: "Moved to Vienna, GA with Grandma Merle. Massive growth spurt (6ft). Began MMA training (funded by Grandpa Jim). Defeated local bully 'Brandon' with a single karate kick, ending the victim mindset.",
    category: "survival",
    verification: "School Records"
  },
  {
    year: 2012,
    title: "USAF Intelligence",
    description: "Active Duty. Intelligence Analyst (Top Secret/SCI). Stationed at Langley AFB. Managed critical reconnaissance data for the U-2 Dragon Lady.",
    category: "intel",
    verification: "DD-214 Form (Redacted)"
  },
  {
    year: 2017,
    title: "The Logic of Matter",
    description: "Crary Industries (North Dakota). Welding & Fabrication. Mastering physical structural integrity. 'The Method to the Madness'.",
    category: "trades",
    verification: "Certification: AWS D1.1"
  },
  {
    year: 2019,
    title: "The Invention: TelePrompt Glass",
    description: "Two weeks after Chat GPT-2 release. Invented the first AI-powered AR Smart Glasses in America. Secured Microsoft Partnership ($150k grant). Built Context-Aware Transcription using Google Maps API and C++.",
    category: "intel",
    verification: "Microsoft Partner Portal"
  },
  {
    year: 2020,
    title: "Christian Kota",
    description: "Launch of musical identity. Data-driven songwriting approach. Songs like 'Let It Ride' and 'Beautiful Things'.",
    category: "art",
    verification: "Spotify Artist ID: 10113279"
  },
  {
    year: 2024,
    title: "Global Infrastructure",
    description: "Building educational platforms for underdeveloped societies. Current Focus: Mandarin, Vietnamese, Russian. Seeking to export the tools of survival (code & language).",
    category: "intel",
    verification: "Current Project Snapshot"
  }
];

export const PSYCH_CASE_STUDIES: PsychCaseStudy[] = [
  {
    id: "CS-001",
    title: "The Defeated Giant",
    subject: "6th Grade P.T. Coach",
    classification: "RETROSPECTIVE EMPATHY",
    narrative: "Witnessed a 10-year-old student (Shaneekwa) defy the coach's authority. Instead of anger, I saw deep defeat in his eyes.",
    analysis: "Early realization that adult authority is often a mask for unresolved childhood trauma. The 'Spark' of situational awareness."
  },
  {
    id: "CS-002",
    title: "Projection of Insecurity",
    subject: "Mr. Harp (Math Teacher)",
    classification: "DEFENSE MECHANISM ID",
    narrative: "Subject frequently mocked my height. Years later, I discovered he was only 5'5\".",
    analysis: "Subject was projecting his own physical insecurities onto a student to comfort his inner child. Result: Compassion, not resentment."
  },
  {
    id: "CS-003",
    title: "The Talking Shoes Paradox",
    subject: "Mrs. West (Social Studies)",
    classification: "NON-VERBAL DECODING",
    narrative: "My shoes were falling apart ('talking'). Mrs. West, known for a miserable demeanor, held me back after class. I expected punishment; she gave me brand new Nikes.",
    analysis: "A definitive lesson that facial expressions (Data) do not always match intent (Logic). Destroyed bias against 'mean-looking' individuals."
  },
  {
    id: "CS-004",
    title: "The Bootcamp",
    subject: "Guardian 'Dave'",
    classification: "RESILIENCE TRAINING",
    narrative: "Subjected to extreme discipline (standing in corners 30hrs+, water hose drills). Dave claimed: 'There is a method to my madness.'",
    analysis: "Though abusive, it installed a 'Navy Seal' operating system. Pain tolerance via dissociation (watching the fireplace flames) and a perfectionist work ethic."
  }
];

export const ANCESTRAL_STORIES: AncestralStory[] = [
  {
    id: "ANS-001",
    title: "The Boy and The Collie",
    era: "1950s",
    lineage: "Spurlin",
    content: "Grandfather Aldwin Byron Leo McCoy ('Leo') lived a poignant childhood on Route 6 as an only child. His closest companion was a faithful collie puppy named 'Shep'. The tragic loss of Shep, struck by a car while waiting for Leo at the bus stop, became a defining family story of loyalty and loss, echoing through the generations.",
    tags: ["Route 6", "Childhood Trauma", "Loyalty"]
  },
  {
    id: "ANS-002",
    title: "The Excluded Heritage",
    era: "1970s",
    lineage: "Spurlin",
    content: "The Maternal Grandfather was of Native American descent, passing down distinct physical traits (black hair, brown eyes, dark skin) to the Subject's Mother. Because of this distinct paternity, she was treated as an outcast by her half-siblings, enduring exclusion within her own family unit. This history of marginalization fuels the Subject's drive for inclusion.",
    tags: ["Native American", "Family Dynamics", "Resilience"]
  },
  {
    id: "ANS-003",
    title: "The Wolf of the Rough Bounds",
    era: "1502–1584",
    lineage: "MacDonald",
    content: "Ian MacAlister Muiderteach MacDonald (John of Moidart) was the 8th Chief of Clanranald and a 13th great-grandfather. A warlord who defied the Scottish Crown, he secured his clan's autonomy at the Battle of the Shirts (Blàr na Léine) in 1544.",
    tags: ["Highland Warlord", "Clan Warfare"]
  },
  {
    id: "ANS-004",
    title: "The Recusant Matriarch",
    era: "1598–1643",
    lineage: "Power",
    content: "Lady Ruth le Poer, Baroness le Pyphoe, was the chatelaine of Curraghmore House in Ireland. During the 1641 Irish Rebellion, she fled to Nansemond, Virginia to protect her unborn child, Mary Power, bridging Irish Nobility with the American Frontier.",
    tags: ["Irish Nobility", "Refugee", "Matriarch"]
  }
];

// NOTE: Ensure you create an 'assets/videos' and 'assets/images' folder in your public directory.
// Replace the filenames below with your actual files.
export const MEMORY_VIDEOS: MemoryVideo[] = [
  {
    id: "mem-001",
    title: "Origin: August 2nd, 1993",
    date: "1993-08-02",
    description: "Timothy Christian Spurlin (Kota) at 15 days old. The earliest visual record, marking the definitive beginning of the journey.",
    url: "/assets/videos/origin.mp4", 
    thumbnail: "/assets/images/origin-thumb.jpg"
  },
  {
    id: "mem-002",
    title: "The Welder's Torch",
    date: "2018",
    description: "Documentation of TIG welding process at Crary Industries.",
    url: "/assets/videos/welding.mp4",
    thumbnail: "/assets/images/welding-thumb.jpg"
  }
];

export const MUSIC_TRACKS: Track[] = [
  {
    id: 't1',
    title: 'Let It Ride',
    artist: 'Christian Kota',
    duration: '3:45',
    bpm: 128,
    key: 'C Min',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Placeholder for demo
    coverArt: 'https://picsum.photos/seed/kota1/300/300'
  },
  {
    id: 't2',
    title: 'Beautiful Things',
    artist: 'Christian Kota',
    duration: '4:12',
    bpm: 95,
    key: 'F# Maj',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    coverArt: 'https://picsum.photos/seed/kota2/300/300'
  }
];

export const MOCK_COMMITS: GitCommit[] = [
  { id: '7f3a1b', message: 'feat: implement d3-force genealogy graph', date: '2 hrs ago', repo: 'digital-nervous-system' },
  { id: '9c2d4e', message: 'fix: hydration error in audio context', date: '5 hrs ago', repo: 'christian-kota-core' },
  { id: '1a8b3c', message: 'refactor: welding logic migration', date: '1 day ago', repo: 'industrial-iot-monitor' },
  { id: '4d5e6f', message: 'docs: update source literacy manifesto', date: '2 days ago', repo: 'personal-philosophy' },
];

export const GENEALOGY_DATA: GenealogyData = {
  nodes: [
    // 1. IMMEDIATE FAMILY (Modern)
    { id: "Christian Kota", label: "Timothy Christian Spurlin", group: 1, verifiedLevel: 10, birthYear: 1993 },
    { id: "Zachary Spurlin", label: "Zachary Spurlin (Brother)", group: 1, verifiedLevel: 10, birthYear: 1996 },
    { id: "Timothy Leo Spurlin", label: "Timothy Leo Spurlin (Father)", group: 1, verifiedLevel: 10, birthYear: 1969 },
    { id: "Mother", label: "Mother (Native American Descent)", group: 1, verifiedLevel: 10, birthYear: 1970 }, // Est birth
    
    // 2. PATERNAL LINE (McCoy / Croft / Spurlin)
    { id: "Aldwin Leo McCoy", label: "Aldwin 'Leo' McCoy", group: 2, verifiedLevel: 10, birthYear: 1948, deathYear: 2000 },
    { id: "Eugene McCoy", label: "Eugene 'Gene' McCoy", group: 2, verifiedLevel: 9, birthYear: 1916, deathYear: 1974 },
    { id: "Betty Merle Croft", label: "Betty Merle Byrum (Grandma)", group: 2, verifiedLevel: 10, birthYear: 1920, deathYear: 2012 }, // Est
    { id: "Jim Byrum", label: "Grandpa Jim Byrum (Guardian)", group: 1, verifiedLevel: 10, birthYear: 1928, deathYear: 2012 },
    { id: "Ronnie Croft", label: "Great-Uncle Ronnie", group: 2, verifiedLevel: 10, birthYear: 1945 }, // Est
    { id: "Laura", label: "Aunt Laura", group: 2, verifiedLevel: 10, birthYear: 1950 }, // Est
    { id: "Robert", label: "Cousin Robert", group: 2, verifiedLevel: 9, birthYear: 1975 }, // Est
    { id: "Tish Benavides", label: "Aunt Tish (McCoy)", group: 2, verifiedLevel: 9, birthYear: 1970 }, // Est
    
    // 3. MATERNAL LINE (Extended)
    { id: "Maternal Grandmother", group: 3, verifiedLevel: 9, birthYear: 1945 }, // Est
    { id: "Native American Grandfather", group: 3, verifiedLevel: 8, birthYear: 1940, deathYear: 1990 }, // Est
    { id: "Connie", label: "Aunt Connie", group: 3, verifiedLevel: 10, birthYear: 1965 }, // Est
    { id: "Charlene", label: "Aunt Charlene", group: 3, verifiedLevel: 10, birthYear: 1960 }, // Est
    { id: "Jay", label: "Uncle Jay", group: 3, verifiedLevel: 9, birthYear: 1965 }, // Est
    { id: "Dave", label: "Dave (The Welder)", group: 3, verifiedLevel: 9, birthYear: 1960 }, // Est
    { id: "Hali", label: "Cousin Hali", group: 3, verifiedLevel: 9, birthYear: 1990 }, // Est
    { id: "Laci", label: "Cousin Laci", group: 3, verifiedLevel: 9, birthYear: 1992 }, // Est

    // 4. DEEP ANCESTRY (Historical)
    { id: "William M.C. McCoy", group: 4, verifiedLevel: 9, birthYear: 1830, deathYear: 1925 },
    { id: "John McCoy", group: 4, verifiedLevel: 8, birthYear: 1748, deathYear: 1790 },
    { id: "Ian Muiderteach", label: "Ian Muiderteach (The Wolf)", group: 4, verifiedLevel: 9, birthYear: 1502, deathYear: 1584, title: "8th Chief of Clanranald" },
    { id: "Lady Ruth le Poer", label: "Lady Ruth (Baroness)", group: 4, verifiedLevel: 9, birthYear: 1598, deathYear: 1643 },
  ],
  links: [
    // Immediate
    { source: "Timothy Leo Spurlin", target: "Christian Kota", value: 1, type: "biological" },
    { source: "Mother", target: "Christian Kota", value: 1, type: "biological" },
    { source: "Timothy Leo Spurlin", target: "Zachary Spurlin", value: 1, type: "biological" },
    { source: "Mother", target: "Zachary Spurlin", value: 1, type: "biological" },

    // Paternal
    { source: "Aldwin Leo McCoy", target: "Timothy Leo Spurlin", value: 1, type: "biological" },
    { source: "Eugene McCoy", target: "Aldwin Leo McCoy", value: 1, type: "biological" },
    { source: "Betty Merle Croft", target: "Aldwin Leo McCoy", value: 1, type: "biological" },
    { source: "Jim Byrum", target: "Christian Kota", value: 5, type: "adoptive" }, // Guardian Role
    { source: "Ronnie Croft", target: "Betty Merle Croft", value: 2, type: "biological" }, // Sibling
    { source: "Laura", target: "Ronnie Croft", value: 2, type: "marriage" }, // Partner
    { source: "Laura", target: "Robert", value: 1, type: "biological" },
    { source: "Aldwin Leo McCoy", target: "Tish Benavides", value: 1, type: "biological" },

    // Maternal
    { source: "Maternal Grandmother", target: "Mother", value: 1, type: "biological" },
    { source: "Native American Grandfather", target: "Mother", value: 1, type: "biological" },
    { source: "Maternal Grandmother", target: "Connie", value: 1, type: "biological" },
    { source: "Maternal Grandmother", target: "Charlene", value: 1, type: "biological" },
    { source: "Connie", target: "Hali", value: 1, type: "biological" },
    { source: "Connie", target: "Laci", value: 1, type: "biological" },
    { source: "Jay", target: "Hali", value: 1, type: "biological" },
    { source: "Jay", target: "Laci", value: 1, type: "biological" },
    { source: "Dave", target: "Connie", value: 2, type: "marriage" }, // Partner
    { source: "Dave", target: "Christian Kota", value: 5, type: "adoptive" }, // Guardian/Mentor

    // Deep
    { source: "William M.C. McCoy", target: "Eugene McCoy", value: 2, type: "biological" },
    { source: "John McCoy", target: "William M.C. McCoy", value: 3, type: "biological" },
    { source: "Ian Muiderteach", target: "John McCoy", value: 5, type: "biological" }, // Ancestral
    { source: "Lady Ruth le Poer", target: "William M.C. McCoy", value: 5, type: "biological" }, // Ancestral
  ]
};