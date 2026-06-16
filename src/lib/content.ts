export const site = {
  name: 'Bilal Bentoumi',
  role: 'Full-Stack Engineer',
  tagline:
    'I design and build fast, accessible web products — where thoughtful interfaces meet resilient systems.',
  location: 'Algiers, Algeria',
  email: 'bilal.bentoumi@talenteo.com',
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
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'Email', href: 'mailto:bilal.bentoumi@talenteo.com' },
];

export const about = {
  lead: 'I build for the web — end to end.',
  paragraphs: [
    "I'm a full-stack engineer who enjoys living at the seam between design and infrastructure. I care about the details users feel — a snappy interaction, an honest loading state, a layout that doesn't break — and the ones they never see, like clean data models and observable services.",
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
    period: '2023 — Present',
    role: 'Full-Stack Engineer',
    company: 'Talenteo',
    url: 'https://talenteo.com',
    summary:
      'Build and maintain core product features across the stack — from React interfaces and a design-system component library to typed REST services and background jobs. Lead front-end architecture decisions and mentor on accessibility and testing.',
    stack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    period: '2021 — 2023',
    role: 'Frontend Engineer',
    company: 'Freelance',
    summary:
      'Partnered with startups and agencies to ship marketing sites, dashboards, and web apps. Owned projects end to end: scoping, design hand-off, implementation, and deployment.',
    stack: ['React', 'Vue', 'Tailwind CSS', 'Figma', 'Vercel'],
  },
  {
    period: '2020 — 2021',
    role: 'Junior Web Developer',
    company: 'Local Studio',
    summary:
      'Built and styled responsive client websites and internal tools. Cut my teeth on real production code, code review, and shipping under deadlines.',
    stack: ['JavaScript', 'PHP', 'MySQL', 'SCSS'],
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
];
