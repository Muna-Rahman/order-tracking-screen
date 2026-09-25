"use client";

import { PackageSearch } from "lucide-react";

export default function TrackingPending({ order }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-app">
        <PackageSearch size={26} className="text-muted" strokeWidth={1.75} />
      </div>
      <p className="mt-3 text-sm font-semibold text-ink">
        Tracking isn&apos;t available yet
      </p>
      <p className="mx-auto mt-1 max-w-[280px] text-sm leading-snug text-body">
        Your order is confirmed and being packed. Once it ships, you&apos;ll
        see live tracking here.
      </p>
      <p className="mt-3 text-xs text-muted">
        Estimated delivery window: {order.estimatedDelivery}
      </p>
    </div>
  );
}
