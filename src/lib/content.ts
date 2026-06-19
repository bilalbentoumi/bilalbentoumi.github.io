export const site = {
  name: 'Bilal Bentoumi',
  role: 'Software Engineer',
  tagline:
    'I design and build fast, accessible web products — where thoughtful interfaces meet resilient systems.',
  location: 'Algiers, Algeria',
  email: 'bilalbentoumi@gmail.com',
  resumeUrl: '/resume.pdf',
} as const;

export type NavItem = { id: string; label: string };

export const nav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/bilalbentoumi' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/bilalbentoumi' },
  { label: 'Email', href: `mailto:${site.email}` },
];

export const about = {
  lead: 'I build for the web — end to end.',
  paragraphs: [
    "I'm a software engineer who enjoys living at the seam between design and infrastructure. I care about the details users feel — a snappy interaction, an honest loading state, a layout that doesn't break — and the ones they never see, like clean data models and observable services.",
    'Today I work on web platforms at Talenteo, building and maintaining product features across the stack: React front-ends, typed APIs, and the tooling that keeps a small team shipping confidently.',
    'Before that I bounced between freelance product work and startup teams, which taught me to scope ruthlessly, write code other people can read, and ship things that actually reach users.',
    "Off the keyboard you'll find me chasing good coffee, tinkering with side projects that never quite finish, and reading more sci-fi than is strictly reasonable.",
  ],
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Tailwind CSS',
    'Docker',
    'GraphQL',
    'Redis',
    'AWS',
  ],
};

export type Job = {
  period: string;
  role: string;
  company: string;
  url?: string;
  summary: string;
  stack: string[];
};

export const experience: Job[] = [
  {
    period: 'Jun 2022 — Present',
    role: 'Software Engineer',
    company: 'Talenteo',
    url: 'https://talenteo.com',
    summary:
      'Build and maintain a SaaS HR platform that centralizes and secures employee data — tracking working hours, leave, and attendance — across the stack as part of a 10-person team serving 50+ clients. Work alongside the Product Owner, QA, and DevOps under Agile, shipping responsive React UIs, RESTful API integrations, MySQL query optimizations, and a Redis-backed background job system.',
    stack: ['React', 'Material UI', 'REST API', 'MySQL', 'Redis', 'PHP'],
  },
  {
    period: 'Aug 2020 — Jun 2022',
    role: 'Full-Stack Web Developer',
    company: 'Emploitic',
    url: 'https://emploitic.com',
    summary:
      'Built dynamic, responsive features alongside the project manager, designers, and QA team. Shipped front-end and back-end functionality, partnered with UI/UX designers on intuitive interfaces, and resolved bugs to improve application stability — all within an Agile workflow.',
    stack: ['JavaScript', 'PHP', 'MySQL', 'HTML', 'CSS'],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  accent: 'violet' | 'cyan' | 'mint';
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Neo4K',
    blurb:
      'A streaming companion app with a custom TV interface, real-time playback sync, and a typed content API powering multiple clients.',
    tags: ['Next.js', 'Node.js', 'Redis', 'WebSockets'],
    href: '#',
    accent: 'violet',
    featured: true,
  },
  {
    title: 'Flow Player',
    blurb:
      'An embeddable, fully accessible media player with keyboard-first controls, captions, and a theming layer that drops into any site.',
    tags: ['TypeScript', 'React', 'a11y'],
    href: '#',
    accent: 'cyan',
    featured: true,
  },
  {
    title: 'Hostly',
    blurb:
      'A booking dashboard for small hospitality businesses — calendar sync, payments, and an admin UI built for non-technical owners.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    href: '#',
    accent: 'mint',
    featured: true,
  },
  {
    title: 'Link Shortener API',
    blurb:
      'A rate-limited URL shortener with analytics, custom slugs, and a clean OpenAPI spec — deployed on the edge.',
    tags: ['Node.js', 'Redis', 'Docker'],
    href: '#',
    accent: 'violet',
  },
  {
    title: 'App UI Kit',
    blurb:
      'A headless component library with sensible defaults, dark mode, and zero-runtime styling — used across internal products.',
    tags: ['React', 'Tailwind CSS', 'Storybook'],
    href: '#',
    accent: 'cyan',
  },
  {
    title: 'Live TV App',
    blurb:
      'A lightweight live-TV browser with channel guide, favorites, and offline-friendly caching for flaky connections.',
    tags: ['React', 'PWA', 'IndexedDB'],
    href: '#',
    accent: 'mint',
  },
  {
    title: 'Hanoot',
    blurb:
      'An online marketplace for buying and selling used items, with listings, search, and messaging between buyers and sellers.',
    tags: ['React', 'Marketplace'],
    href: 'https://www.hanoot.app',
    accent: 'violet',
  },
  {
    title: 'Halteverbote Frankfurt',
    blurb:
      'A booking platform for reserving no-parking zones for moving trucks across Frankfurt.',
    tags: ['Next.js', 'Vercel', 'Booking'],
    href: 'https://clearway.vercel.app',
    accent: 'cyan',
  },
  {
    title: 'AK Gebäudereinigung',
    blurb:
      'A marketing site for a German building-cleaning company, presenting services and capturing booking enquiries.',
    tags: ['Next.js', 'Vercel'],
    href: 'https://ak-services-three.vercel.app',
    accent: 'mint',
  },
  {
    title: 'AirClean VS',
    blurb:
      'A marketing site for a professional cleaning services company, showcasing offerings and contact options.',
    tags: ['Next.js', 'Vercel'],
    href: 'https://air-clean-one.vercel.app',
    accent: 'violet',
  },
  {
    title: 'PeerHealth',
    blurb:
      'A landing site for a health and peer-support service, presenting its mission and onboarding visitors.',
    tags: ['Next.js', 'Vercel'],
    href: 'https://peer-health.vercel.app',
    accent: 'cyan',
  },
  {
    title: 'Kabelbrücken Rent',
    blurb:
      'A site for renting cable-bridge ramps and cable protectors for events and worksites in Germany.',
    tags: ['Next.js', 'Web'],
    href: 'https://kabelbruecke-rent.de',
    accent: 'mint',
  },
];
