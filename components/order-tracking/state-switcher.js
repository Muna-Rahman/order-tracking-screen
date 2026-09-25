"use client";

const OPTIONS = [
  { key: "normal", label: "On Time" },
  { key: "delayed", label: "Delayed" },
  { key: "delivered_not_received", label: "Delivered" },
  { key: "no_tracking", label: "No Tracking" },
];

export default function StateSwitcher({ activeKey, onChange }) {
  return (
    <div className="border-b border-line bg-surface px-4 py-2.5">
      <p className="mb-1.5 text-[11px] text-muted">Preview a different order state</p>
      <div className="flex gap-1.5 overflow-x-auto">
        {OPTIONS.map((option) => (
          <button
            key={option.key}
            onClick={() => onChange(option.key)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              activeKey === option.key
                ? "border-brand bg-brand text-white"
                : "border-line bg-app text-body hover:bg-line/40"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
