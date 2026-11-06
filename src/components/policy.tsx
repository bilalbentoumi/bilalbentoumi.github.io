import Link from 'next/link';
import type { ReactNode } from 'react';

import Footer from '@/components/footer';
import { site } from '@/lib/content';

/** Shared layout for app privacy policies (/<app>/privacy-policy). */
export function PolicyPage({
  app,
  updated,
  children,
}: {
  app: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-20 sm:px-10 sm:py-28">
        <Link href="/" className="font-mono text-sm text-mute hover:text-cloud">
          ← {site.name}
        </Link>

        <p className="mt-12 font-mono text-sm text-violet">{app}</p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-cloud sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 font-mono text-xs text-mute">Last updated: {updated}</p>

        {children}
      </main>
      <Footer />
    </>
  );
}

export function Intro({ children }: { children: ReactNode }) {
  return <p className="mt-10 leading-relaxed">{children}</p>;
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 font-display text-2xl font-bold tracking-tight text-cloud">
        {title}
      </h2>
      <div className="space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}

export function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-6">{children}</ul>;
}

const linkClass =
  'text-violet underline decoration-violet/40 underline-offset-4 hover:decoration-violet';

export function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  );
}

export function ContactEmail() {
  return (
    <a href={`mailto:${site.email}`} className={linkClass}>
      {site.email}
    </a>
  );
}
