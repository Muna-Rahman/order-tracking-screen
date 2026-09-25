import { AlertTriangle } from "lucide-react";

export default function ErrorState({ onRetry }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-danger-light">
        <AlertTriangle size={22} className="text-danger" />
      </div>
      <p className="mt-3 text-sm font-semibold text-ink">
        We couldn&apos;t load this order
      </p>
      <p className="mx-auto mt-1 max-w-[260px] text-sm leading-snug text-body">
        Something went wrong on our end. Please try again.
      </p>
      <button
        onClick={onRetry}
        className="mt-4 rounded-xl bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark"
      >
        Try again
      </button>
    </div>
  );
}
