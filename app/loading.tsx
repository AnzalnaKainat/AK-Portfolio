export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
        <span className="flex gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-signal-blue [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-signal-green [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-signal-amber" />
        </span>
        loading…
      </div>
    </div>
  );
}
