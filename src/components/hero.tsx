import { site, socials } from '@/lib/content';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28 pb-20 sm:px-10">
      <p className="reveal is-visible mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface/50 px-3 py-1 font-mono text-xs text-mint">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
        </span>
        Available for freelance
      </p>

      <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-cloud sm:text-7xl lg:text-8xl">
        {site.name}
      </h1>

      <p className="mt-4 font-display text-2xl font-semibold sm:text-4xl">
        <span className="gradient-text">{site.role}</span>
      </p>

      <p className="mt-7 max-w-xl text-lg leading-relaxed text-fog sm:text-xl">
        {site.tagline}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="group relative overflow-hidden rounded-full bg-cloud px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">
          View my work
          <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
        <a
          href="#contact"
          className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-fog transition-colors hover:border-violet/60 hover:text-cloud">
          Get in touch
        </a>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-mute">
        <span>📍 {site.location}</span>
        <span className="hidden h-3 w-px bg-line sm:block" />
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-cloud">
            {s.label}
          </a>
        ))}
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mute transition-colors hover:text-cloud sm:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="h-10 w-px animate-float bg-gradient-to-b from-violet to-transparent" />
      </a>
    </section>
  );
}
