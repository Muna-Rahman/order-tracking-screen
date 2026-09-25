"use client";

import { MessageCircle, Flag } from "lucide-react";

export default function SupportActions({ order, onContact, onReport }) {
  const isUrgent =
    order.state === "delivered_not_received" || order.state === "delayed";

  return (
    <div className="rounded-2xl border border-line bg-surface p-4">
      <h2 className="text-sm font-semibold text-ink">Need help with this order?</h2>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <button
          onClick={onContact}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          <MessageCircle size={16} />
          Contact Support
        </button>
        <button
          onClick={onReport}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
            isUrgent
              ? "border-danger/30 bg-danger-light text-danger hover:bg-danger-light/70"
              : "border-line text-body hover:bg-app"
          }`}
        >
          <Flag size={16} />
          Report an Issue
        </button>
      </div>
    </div>
  );
}
