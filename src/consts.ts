// Site-wide config. Edit these once and they propagate everywhere.

export const SITE = {
  title: 'Martins Ngene',
  tagline: 'Engineering, systems, and the occasional detour.',
  description:
    'Notes on full-stack engineering, automation, and AI systems — plus the occasional detour into faith and language — by Martins Ngene.',
  url: 'https://blog.iammartins.com',
  author: 'Martins Ngene',
  email: 'martinsngene.dev@gmail.com',
  locale: 'en',
} as const;

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/martinsngene' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/martins-ngene' },
  { label: 'Portfolio', href: 'https://iammartins.com' },
  { label: 'X', href: 'https://x.com/iammartins_official' },
] as const;

export const NAV = [
  { label: 'Writing', href: '/blog' },
  { label: 'Topics', href: '/tags' },
  { label: 'About', href: '/about' },
] as const;
