export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  category: 'Full-Stack' | 'AI & Machine Learning' | 'Systems & Tools' | 'Creative Craft';
  technologies: string[];
  repoName: string; // Used for https://github.com/lokesh007-de/<repoName>
  year: string;
  hasGithub: boolean;
  architectureNotes?: string;
  visualTheme: {
    accentColor: string;
    bgTint: string;
    badgeText: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'collabdocs',
    index: '01',
    title: 'CollabDocs',
    subtitle: 'Real-Time Collaborative Document Canvas',
    description:
      'A multi-user collaborative markdown workspace engineered with live operational synchronization, presence avatars, and granular version checkpoints.',
    highlights: [
      'WebSocket state synchronization with concurrent document reconciliation',
      'Tactile markdown live-renderer with syntax-highlighted code blocks',
      'Granular presence broadcast with multi-cursor tracking',
    ],
    category: 'Full-Stack',
    technologies: ['React', 'TypeScript', 'WebSockets', 'Node.js', 'Tailwind CSS'],
    repoName: 'collabdocs',
    year: '2025',
    hasGithub: true,
    architectureNotes:
      'Engineered around an event-driven synchronization channel with client-side optimistic reconciliation to maintain zero perceived latency during simultaneous writing sessions.',
    visualTheme: {
      accentColor: '#B5573A',
      bgTint: '#F8ECE3',
      badgeText: 'Active System',
    },
  },
  {
    id: 'salon-ai-chatbot',
    index: '02',
    title: 'Salon AI Concierge',
    subtitle: 'Intelligent Salon Scheduling & Dialogue Assistant',
    description:
      'A domain-specific conversational agent tailored for boutique salons, handling dynamic appointment booking, service catalog queries, and customer inquiries.',
    highlights: [
      'Context-aware conversational state engine with slot-filling intent resolution',
      'Interactive time-slot selector and real-time scheduling coordination',
      'Tailored beauty catalog knowledgebase with instant FAQ resolution',
    ],
    category: 'AI & Machine Learning',
    technologies: ['TypeScript', 'React', 'NLP Dialogue', 'Tailwind CSS', 'Vite'],
    repoName: 'salon-ai-chatbot',
    year: '2025',
    hasGithub: true,
    architectureNotes:
      'Implements a structured state machine paired with prompt routing to ensure deterministic appointment bookings without conversational drift or missing constraints.',
    visualTheme: {
      accentColor: '#6B7A5A',
      bgTint: '#EFF4EC',
      badgeText: 'Shipped',
    },
  },
  {
    id: 'calcpro-x1',
    index: '03',
    title: 'CalcPro X1',
    subtitle: 'Tactile Scientific & Financial Engine',
    description:
      'An advanced computation workbench featuring an expression tree parser, financial amortization algorithms, unit matrix conversions, and tactile audio-haptic feedback.',
    highlights: [
      'Abstract Syntax Tree (AST) tokenized mathematical expression evaluator',
      'Currency, metric, and engineering dimensional analysis calculators',
      'Persistent calculation memory ledger with historical export capabilities',
    ],
    category: 'Systems & Tools',
    technologies: ['TypeScript', 'React', 'Math Engine', 'Web Audio', 'Tailwind CSS'],
    repoName: 'calcpro-x1',
    year: '2024',
    hasGithub: true,
    architectureNotes:
      'Eliminates arbitrary floating point round-off anomalies through custom decimal precision handling and strict algebraic precedence tokenization.',
    visualTheme: {
      accentColor: '#964025',
      bgTint: '#F9EDE5',
      badgeText: 'Production',
    },
  },
  {
    id: 'formula-folio-luxe',
    index: '04',
    title: 'Formula Folio Luxe',
    subtitle: 'High-Craft Luxury Portfolio & Formula Showroom',
    description:
      'An editorial monograph exhibition celebrating luxury automotive formulas and artisanal product curation with responsive typography and fluid transitions.',
    highlights: [
      'Bespoke asymmetrical editorial grid mirroring physical art publications',
      'Smooth scroll choreography and subtle 3D surface depth treatments',
      'High-legibility typography hierarchy utilizing Playfair Display and DM Sans',
    ],
    category: 'Creative Craft',
    technologies: ['React', 'TypeScript', 'Motion', 'Tailwind CSS', 'WebGL'],
    repoName: 'formula-folio-luxe',
    year: '2024',
    hasGithub: true,
    architectureNotes:
      'Strict adherence to the zero-pill discipline and warm tactile materiality, evoking the weight and presence of archival catalog editions.',
    visualTheme: {
      accentColor: '#7C7162',
      bgTint: '#F3EFE9',
      badgeText: 'Exhibition',
    },
  },
  {
    id: 'digital_clock',
    index: '05',
    title: 'Chronos Digital Clock',
    subtitle: 'Minimalist Typographic World Chronometer',
    description:
      'A refined typographic timekeeping instrument offering multi-timezone tracking, astronomical twilight calculations, subtle hourly audio resonance, and zero layout shift.',
    highlights: [
      'Sub-millisecond synchronization loop resilient to background tab throttling',
      'Configurable international timezones with solar angle visualization',
      'Synthesized ambient chime engine powered by the Web Audio API',
    ],
    category: 'Systems & Tools',
    technologies: ['JavaScript', 'TypeScript', 'CSS Grid', 'Web Audio API'],
    repoName: 'digital_clock',
    year: '2024',
    hasGithub: true,
    architectureNotes:
      'Employs a drift-corrected `requestAnimationFrame` timing interval that recalibrates on device wakeup, preventing standard clock skew.',
    visualTheme: {
      accentColor: '#546345',
      bgTint: '#EEF3EA',
      badgeText: 'Utility',
    },
  },
  {
    id: 'language-translator',
    index: '06',
    title: 'Lingua Language Translator',
    subtitle: 'Polyglot Translation & Speech Suite',
    description:
      'A multi-dialect linguistic workbench featuring real-time translation, bidirectional speech recognition, phonetic pronunciation synthesis, and offline vocabulary saving.',
    highlights: [
      'Seamless speech-to-text input with continuous audio stream recognition',
      'Bilingual side-by-side comparative ledger with pronunciation audio guide',
      'Persistent phrasebook storage with instant search and categorical tagging',
    ],
    category: 'AI & Machine Learning',
    technologies: ['TypeScript', 'React', 'Web Speech API', 'REST APIs', 'Tailwind CSS'],
    repoName: 'language-translator',
    year: '2024',
    hasGithub: true,
    architectureNotes:
      'Designed around graceful degradation: falls back seamlessly across browsers without native speech recognition while maintaining instant textual translation.',
    visualTheme: {
      accentColor: '#B5573A',
      bgTint: '#FAF0E8',
      badgeText: 'Shipped',
    },
  },
  {
    id: 'periodic_table',
    index: '07',
    title: 'Elemental Periodic Table',
    subtitle: 'Interactive Chemistry & Atomic Visualization',
    description:
      'An interactive periodic table of chemical elements with detailed electron orbital configurations, atomic radii trends, thermodynamic states, and crystal classifications.',
    highlights: [
      'Dynamic periodic table layout with element group categorization filters',
      'Interactive electron orbital shell diagrams with animated energy levels',
      'Comprehensive thermodynamic, electromagnetic, and discovery histories',
    ],
    category: 'Systems & Tools',
    technologies: ['TypeScript', 'React', 'CSS Grid', 'SVG Visualization', 'Tailwind CSS'],
    repoName: 'periodic_table',
    year: '2024',
    hasGithub: true,
    architectureNotes:
      'Optimized with declarative SVG geometry and CSS Grid sub-grids to maintain responsive legibility across both compact mobile screens and wide desktop monitors.',
    visualTheme: {
      accentColor: '#6B7A5A',
      bgTint: '#F1F6EC',
      badgeText: 'Educational',
    },
  },
];
