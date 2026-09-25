export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4" aria-label="Loading order details" role="status">
      <div className="rounded-2xl border border-line bg-surface p-4">
        <div className="flex items-start gap-3">
          <div className="h-11 w-11 shrink-0 rounded-full bg-line/70" />
          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-4 w-2/3 rounded bg-line/70" />
            <div className="h-3 w-full rounded bg-line/50" />
          </div>
        </div>
        <div className="mt-3 h-3 w-1/3 rounded bg-line/50" />
      </div>

      <div className="rounded-2xl border border-line bg-surface p-4">
        <div className="mb-3 h-4 w-1/3 rounded bg-line/70" />
        <div className="space-y-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-6 w-6 shrink-0 rounded-full bg-line/60" />
              <div className="h-3 w-1/2 rounded bg-line/50" />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-surface p-4">
        <div className="flex gap-3">
          <div className="h-16 w-16 shrink-0 rounded-xl bg-line/60" />
          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-3 w-3/4 rounded bg-line/60" />
            <div className="h-3 w-1/2 rounded bg-line/50" />
          </div>
        </div>
      </div>
    </div>
  );
}
