import { experience, site } from '@/lib/content';
import Reveal from './reveal';
import SectionLabel from './section-label';

export default function Experience() {
  return (
    <section
      id="work"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:px-10">
      <SectionLabel index={2} title="Where I've worked" />

      <ol className="relative border-l border-line">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.company}-${i}`} delay={i * 80}>
            <div className="group relative pb-12 pl-8 last:pb-0">
              {/* node */}
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-line bg-ink transition-colors group-hover:border-violet group-hover:bg-violet" />

              <div className="rounded-2xl border border-transparent p-4 transition-colors group-hover:border-line group-hover:bg-surface/40">
                <p className="font-mono text-xs uppercase tracking-wider text-mute">
                  {job.period}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold text-cloud">
                  {job.role}
                  <span className="text-mute"> · </span>
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-violet decoration-violet/40 underline-offset-4 hover:underline">
                      {job.company}
                    </a>
                  ) : (
                    <span className="text-fog">{job.company}</span>
                  )}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fog">
                  {job.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-violet/10 px-2.5 py-1 font-mono text-xs text-violet">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={120}>
        <a
          href={site.resumeUrl}
          target="_blank"
          className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-cloud transition-colors hover:text-violet">
          View full résumé
          <span aria-hidden>↗</span>
        </a>
      </Reveal>
    </section>
  );
}
