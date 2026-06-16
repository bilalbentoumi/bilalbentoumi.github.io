export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      {/* Aurora blobs */}
      <div className="animate-aurora absolute -left-40 -top-40 h-[55vw] w-[55vw] rounded-full bg-violet/20 blur-[120px]" />
      <div
        className="animate-aurora absolute -right-40 top-1/3 h-[45vw] w-[45vw] rounded-full bg-cyan/15 blur-[120px]"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="animate-aurora absolute bottom-0 left-1/4 h-[40vw] w-[40vw] rounded-full bg-iris/15 blur-[130px]"
        style={{ animationDelay: '-11s' }}
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />

      {/* Vignette to keep contrast on text */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(7,7,11,0.6)_100%)]" />
    </div>
  );
}
