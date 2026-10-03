// ============================================================
//  SITE CONTENT: the single source of truth for every section.
//  Edit text here; components only handle layout and motion.
// ============================================================

// The floor-plan-to-CAD startup (formerly Planos) is being renamed.
// Change this one value when the new name is decided.
export const VENTURE_NAME = 'Stealth Startup';

export const profile = {
  name: 'Neil Todkar',
  heroName: 'neil',
  tagline: 'a student builder shipping ai products and researching how people trust them',
  about:
    "I'm a junior at Amador Valley High School who builds full-stack apps and AI pipelines, then tests them and writes up the tradeoffs. I study how people actually respond to AI, and I teach younger students to question it, not just use it. Let's build something worth trusting together!",
  email: 'neiltodkar@gmail.com',
  phone: '(925) 450-0525',
  phoneHref: 'tel:+19254500525',
  location: 'Pleasanton, CA',
  links: {
    linkedin: 'https://www.linkedin.com/in/neiltodkar',
    github: 'https://github.com/nt11111',
    arxiv: 'https://arxiv.org/abs/2608.07493',
  },
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];

// Scrolling image strip under the hero: screenshots and outputs of real work.
export const marquee = {
  rowOne: [
    { src: '/media/work/ark-home.webp', alt: 'ARK course platform home page' },
    { src: '/media/work/cad-overlay-tower.webp', alt: 'Walls, doors and windows detected on an apartment floor plan' },
    { src: '/media/work/deca-home.webp', alt: 'AVHS DECA Hub home page' },
    { src: '/media/work/sat-home.webp', alt: 'Protocol Console SAT trainer dashboard' },
    { src: '/media/work/arxiv.webp', alt: 'The Transparency Trap paper on arXiv' },
    { src: '/media/work/ark-lesson.webp', alt: 'An ARK lesson on bias in AI' },
    { src: '/media/work/cad-model.webp', alt: '3D CAD model generated from a floor plan' },
    { src: '/media/work/deca-about.webp', alt: 'AVHS DECA Hub chapter information page' },
    { src: '/media/work/hopper.webp', alt: 'Pleasanton Hopper, a browser game' },
  ],
  rowTwo: [
    { src: '/media/work/nexla.webp', alt: 'Nexla whitepaper on privacy and trustworthy AI' },
    { src: '/media/work/sat-build.webp', alt: 'Protocol Console practice set builder' },
    { src: '/media/work/ark-courses.webp', alt: 'ARK course catalog' },
    { src: '/media/work/cad-overlay-farmhouse.webp', alt: 'Detected walls on a farmhouse floor plan' },
    { src: '/media/work/deca-faq.webp', alt: 'AVHS DECA Hub FAQ page' },
    { src: '/media/work/cad-model-tower.webp', alt: '3D model of an apartment floor generated from a plan' },
    { src: '/media/work/ark-workshops.webp', alt: 'ARK workshops page' },
    { src: '/media/work/sat-progress.webp', alt: 'Protocol Console progress view' },
    { src: '/media/work/sat-test.webp', alt: 'Protocol Console timed practice test setup' },
  ],
};

export const services = [
  {
    name: 'AI Products',
    description:
      'Full-stack apps and AI pipelines in TypeScript and Python, built on the Claude API, tested with Playwright and pytest, and shipped to real users.',
  },
  {
    name: 'Research',
    description:
      'Behavioral experiments on how people respond to AI. My first paper found that AI disclaimers can raise trust instead of lowering it.',
  },
  {
    name: 'Go-to-Market',
    description:
      'At FluidCloud I mapped five gaps between the product and how it is sold, proposed outcome-based pricing, and specified six AI agents to automate the sales motion.',
  },
  {
    name: 'Teaching',
    description:
      'I founded ARK, an AI literacy initiative whose workshops have reached 200+ K-12 students, and I run training for a 140-member DECA chapter.',
  },
  {
    name: 'Competition',
    description:
      'DECA ICDC qualifier in Business Law & Ethics, 6th in California at the National Economics Challenge, and a top-10 finish at the Regional Ethics Bowl.',
  },
];

export type Project = {
  name: string;
  category: string;
  period: string;
  summary: string;
  stack: string;
  link?: { label: string; href: string };
  pending?: string;
  imageFocus?: 'top' | 'center';
  images: [string, string, string];
  alts: [string, string, string];
};

export const projects: Project[] = [
  {
    name: 'ARK Course Platform',
    category: 'Founder · Sole engineer',
    period: '2026 – Present',
    summary:
      'A free AI-literacy course platform for K-12: 3 courses and 17 modules, a lesson player, accounts, cross-device progress and verifiable certificates. Workshops have reached 200+ students.',
    stack: 'Astro · React · TypeScript · Firebase · 100+ Playwright tests',
    link: { label: 'Live Project', href: 'https://aireadiness4kids.org' },
    images: ['/media/work/ark-courses.webp', '/media/work/ark-workshops.webp', '/media/work/ark-lesson.webp'],
    alts: ['ARK course catalog', 'ARK workshops page', 'An ARK lesson on bias in AI'],
  },
  {
    name: VENTURE_NAME,
    category: 'Founder · Floor plans to 3D CAD',
    period: 'Jul 2026 – Present',
    summary:
      'A pipeline that turns a 2D floor-plan PDF into an editable 3D model: exact lines come out of the PDF, Claude labels walls, doors and windows, and CadQuery builds STEP and STL files. 9 of 10 runs on real plans produced a usable model.',
    stack: 'Python · Claude vision API · PyMuPDF · CadQuery · 88 pytest tests',
    pending: 'New name soon',
    imageFocus: 'center',
    images: ['/media/work/cad-overlay-farmhouse.webp', '/media/work/cad-model.webp', '/media/work/cad-overlay-tower.webp'],
    alts: ['Detected walls on a farmhouse floor plan', '3D CAD model generated from a floor plan', 'Walls, doors and windows detected on an apartment floor plan'],
  },
  {
    name: 'AVHS DECA Hub',
    category: 'Director of Training · Amador Valley DECA',
    period: '2026 – Present',
    summary:
      'The members-only hub for a 140-member chapter: chapter-code sign-up, 22 walkthrough videos in 4 tracks, slide decks, an officer-edited calendar and a private Stock Market Game trade log.',
    stack: 'Next.js · React · Firebase Auth · Firestore · App Check',
    link: { label: 'Live Project', href: 'https://avhsdeca.com' },
    images: ['/media/work/deca-about.webp', '/media/work/deca-faq.webp', '/media/work/deca-home.webp'],
    alts: ['AVHS DECA Hub chapter information page', 'AVHS DECA Hub FAQ page', 'AVHS DECA Hub home page'],
  },
  {
    name: 'Protocol Console',
    category: 'Adaptive SAT trainer',
    period: '2026',
    summary:
      'Built for my own SAT prep. 3,311 retired College Board questions in one bank; a planner model picks skill and difficulty from my results, and a writer model only fills the gaps the bank cannot.',
    stack: 'JavaScript · Cloudflare Pages Functions · Claude API',
    images: ['/media/work/sat-build.webp', '/media/work/sat-test.webp', '/media/work/sat-progress.webp'],
    alts: ['Protocol Console practice set builder', 'Protocol Console timed practice test setup', 'Protocol Console progress view'],
  },
];

export const research = [
  {
    title: 'The Transparency Trap: How AI Disclaimers Create Overconfidence in High-Stakes Decisions',
    venue: 'Sole author · arXiv cs.HC',
    date: 'June 2026',
    summary:
      '52 participants, 378 responses across finance, medicine and AI-generated content. Advice was trusted with or without a disclaimer, and some people read the AI warning as a sign of honesty, which raised their trust.',
    href: 'https://arxiv.org/abs/2608.07493',
    cta: 'Read the paper',
  },
  {
    title: 'Beyond Compliance: Why Privacy Is the Foundation of Trustworthy AI',
    venue: 'Whitepaper · Nexla',
    date: '2025',
    summary:
      'Written during my AI and ethics research internship at Nexla, alongside fairness analysis of real decision models using disparity ratios and error rates.',
    href: 'https://nexla.com/why-privacy-is-foundation-of-trustworthy-ai',
    cta: 'Read at Nexla',
  },
  {
    title: 'Kai and the AI',
    venue: "Children's picture book",
    date: 'In progress',
    summary:
      'A picture book that explains what it means when a computer is learning, told through Kai and a small robot named Bit. Written as a companion to the ARK curriculum.',
    href: '',
    cta: '',
  },
];

export const experience = [
  { role: 'Go-to-Market Intern', org: 'FluidCloud', period: 'Jun 2026 – Present' },
  { role: 'AI and Ethics Research Intern', org: 'Nexla', period: 'Jun – Dec 2025' },
  { role: 'Director of Training', org: 'Amador Valley DECA', period: '2026 – Present' },
  { role: 'Founder', org: 'ARK · AI Readiness Kollective', period: 'Jan 2026 – Present' },
  { role: 'Tabla Instructor & Performer', org: 'Tarang Music Academy', period: '2017 – Present' },
];

export const recognition = [
  {
    year: '2026',
    title: 'DECA ICDC qualifier',
    detail: 'Business Law & Ethics Team Decision Making. 1st at NorCal CDC, 6th and 8th at the California SCDC.',
  },
  {
    year: '2026',
    title: 'Presenter, Youth & AI Innovation Summit',
    detail: 'Presented at UC Berkeley on using multiple LLMs to build products for the greater good.',
  },
  {
    year: '2026',
    title: 'Berkeley Haas Business Academy for Youth',
    detail: 'Selective summer program. Built the team financials and pitched the CAD startup at the HSEN showcase.',
  },
  {
    year: '2026',
    title: 'Visharad in Tabla',
    detail: 'Certificate of honor in Indian classical percussion after 9 years of training.',
  },
  {
    year: '2025',
    title: '6th in California, National Economics Challenge',
    detail: 'Among the top 10% of state teams invited to compete in person in San Francisco.',
  },
  {
    year: '2025',
    title: 'Top 10, Regional High School Ethics Bowl',
    detail: 'UC Santa Cruz. Led the case research and argued the ethics of trail access in public parks.',
  },
];

export const credentials = [
  'Google AI Professional Certificate',
  'Google AI Essentials',
  'Co-Founder & President, Spikeball Club',
  'Secretary, Ethics Club',
  'Varsity Tennis',
];
