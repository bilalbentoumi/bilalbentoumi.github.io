import { site, socials } from '@/lib/content';
import Reveal from './reveal';

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-32 text-center sm:px-10">
      <Reveal>
        <p className="font-mono text-sm text-violet">04 — What&apos;s next</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-cloud sm:text-6xl">
          Let&apos;s build something{' '}
          <span className="gradient-text">worth shipping</span>.
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fog">
          I&apos;m open to full-time roles, freelance work, and the occasional
          ambitious side project. My inbox is always open — say hello.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <a
          href={`mailto:${site.email}`}
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-cloud px-8 py-4 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">
          Say hello
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </Reveal>
      <Reveal delay={240}>
        <div className="mt-10 flex items-center justify-center gap-6 font-mono text-sm text-mute">
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
      </Reveal>
    </section>
  );
}
