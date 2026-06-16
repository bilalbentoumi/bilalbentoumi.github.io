import { type Project, projects } from '@/lib/content';
import Reveal from './reveal';
import SectionLabel from './section-label';

const accentMap: Record<Project['accent'], string> = {
  violet: 'from-violet/30 to-iris/10',
  cyan: 'from-cyan/30 to-iris/10',
  mint: 'from-mint/30 to-cyan/10',
};

const dotMap: Record<Project['accent'], string> = {
  violet: 'bg-violet',
  cyan: 'bg-cyan',
  mint: 'bg-mint',
};

function Card({ project, big }: { project: Project; big?: boolean }) {
  return (
    <a
      href={project.href ?? '#'}
      target={project.href && project.href !== '#' ? '_blank' : undefined}
      rel="noreferrer"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-[0_20px_60px_-20px_rgba(139,92,246,0.4)]">
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${accentMap[project.accent]}`}
      />

      <div className="relative flex items-center justify-between">
        <span
          className={`h-2.5 w-2.5 rounded-full ${dotMap[project.accent]}`}
        />
        <span className="font-mono text-xs text-mute transition-colors group-hover:text-cloud">
          ↗
        </span>
      </div>

      <h3
        className={`relative mt-5 font-display font-bold text-cloud ${
          big ? 'text-2xl' : 'text-xl'
        }`}>
        {project.title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-fog">
        {project.blurb}
      </p>

      <ul className="relative mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li
            key={t}
            className="rounded-full border border-line bg-ink-soft/60 px-2.5 py-1 font-mono text-[11px] text-mute">
            {t}
          </li>
        ))}
      </ul>
    </a>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:px-10">
      <SectionLabel index={3} title="Selected projects" />

      <div className="grid gap-5 md:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} className="h-full">
            <Card project={p} big />
          </Reveal>
        ))}
      </div>

      {rest.length > 0 && (
        <>
          <Reveal>
            <h3 className="mt-16 mb-6 font-mono text-xs uppercase tracking-[0.2em] text-mute">
              More things I&apos;ve built
            </h3>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="h-full">
                <Card project={p} />
              </Reveal>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
