import { about } from '@/lib/content';
import Reveal from './reveal';
import SectionLabel from './section-label';

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:px-10">
      <SectionLabel index={1} title="About" />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <p className="font-display text-2xl font-medium leading-snug text-cloud sm:text-3xl">
              {about.lead}
            </p>
          </Reveal>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-fog sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-line bg-surface/40 p-6 backdrop-blur-sm">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-mute">
              Tools I reach for
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {about.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-line bg-ink-soft px-3 py-1.5 text-sm text-fog transition-colors hover:border-violet/50 hover:text-cloud">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
