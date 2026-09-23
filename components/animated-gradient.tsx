export function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 grid-paper opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-signal-blue/20 blur-[120px] dark:bg-signal-blue/25" />
      <div className="absolute right-[8%] top-[20%] h-[360px] w-[360px] rounded-full bg-signal-green/10 blur-[110px] dark:bg-signal-green/15" />
      <div className="absolute left-[4%] top-[35%] h-[280px] w-[280px] rounded-full bg-signal-amber/10 blur-[100px] dark:bg-signal-amber/10" />
    </div>
  );
}
