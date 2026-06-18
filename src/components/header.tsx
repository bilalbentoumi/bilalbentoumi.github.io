'use client';
import { useEffect, useState } from 'react';

import { nav, site } from '@/lib/content';

export default function Header() {
  const [active, setActive] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const initials = site.name
    .split(' ')
    .map((w) => w[0])
    .join('');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line bg-ink/70'
          : 'border-b border-transparent'
      }`}>
      <div
        className={`pointer-events-none absolute inset-0 -z-10 backdrop-blur-xl transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10">
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-cloud">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet to-cyan text-sm font-bold text-ink">
            {initials}
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`group relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === item.id
                    ? 'text-cloud'
                    : 'text-mute hover:text-cloud'
                }`}>
                <span className="font-mono text-xs text-violet/70">
                  0{i + 1}.
                </span>{' '}
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-px h-px origin-left bg-gradient-to-r from-violet to-cyan transition-transform duration-300 ${
                    active === item.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.resumeUrl}
          className="hidden rounded-full border border-line px-4 py-2 text-sm text-fog transition-colors hover:border-violet/60 hover:text-cloud md:inline-block">
          Résumé
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative z-50 grid h-10 w-10 place-items-center md:hidden">
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-6 bg-cloud transition-transform duration-300 ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-cloud transition-opacity duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-cloud transition-transform duration-300 ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-ink/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}>
        {nav.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
            className="font-display text-2xl font-semibold text-cloud">
            <span className="font-mono text-base text-violet">0{i + 1}.</span>{' '}
            {item.label}
          </a>
        ))}
        <a
          href={site.resumeUrl}
          onClick={() => setOpen(false)}
          className="mt-6 rounded-full border border-line px-6 py-3 text-fog">
          Résumé
        </a>
      </div>
    </header>
  );
}
