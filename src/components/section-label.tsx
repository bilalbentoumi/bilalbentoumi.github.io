import Reveal from './reveal';

export default function SectionLabel({
  index,
  title,
}: {
  index: number;
  title: string;
}) {
  return (
    <Reveal className="mb-12 flex items-center gap-4">
      <span className="font-mono text-sm text-violet">
        {String(index).padStart(2, '0')}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-cloud sm:text-4xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
    </Reveal>
  );
}
