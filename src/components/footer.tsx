import { site } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-10 text-center font-mono text-xs text-mute sm:flex-row sm:justify-between sm:px-10 sm:text-left">
        <p>
          Designed &amp; built by {site.name} · {new Date().getFullYear()}
        </p>
        <p>
          Crafted with Next.js &amp; Tailwind — no template, just{' '}
          <span className="text-violet">&lt;/&gt;</span>
        </p>
      </div>
    </footer>
  );
}
