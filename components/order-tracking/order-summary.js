"use client";

import { useState } from "react";
import { Package, ChevronDown } from "lucide-react";

export default function OrderSummary({ order }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-line bg-surface p-4">
      <div className="flex gap-3">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-brand-light">
          <Package size={24} className="text-brand" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium leading-snug text-ink">
            {order.product.name}
          </p>
          <p className="mt-0.5 text-xs text-muted">{order.product.variant}</p>
          <p className="mt-1 text-xs text-body">
            Qty {order.product.qty} · {order.product.price}
          </p>
        </div>
      </div>

      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-3 flex w-full items-center justify-between border-t border-line pt-3 text-sm font-medium text-brand"
        aria-expanded={expanded}
      >
        View order details
        <ChevronDown
          size={16}
          className={`transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {expanded && (
        <dl className="mt-3 space-y-2 text-xs">
          <div className="flex justify-between gap-3">
            <dt className="text-muted">Order number</dt>
            <dd className="text-right text-body">{order.orderNumber}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-muted">Placed on</dt>
            <dd className="text-right text-body">{order.placedOn}</dd>
          </div>
          {order.carrier && (
            <div className="flex justify-between gap-3">
              <dt className="text-muted">Carrier</dt>
              <dd className="text-right text-body">{order.carrier}</dd>
            </div>
          )}
          {order.trackingId && (
            <div className="flex justify-between gap-3">
              <dt className="text-muted">Tracking ID</dt>
              <dd className="text-right text-body">{order.trackingId}</dd>
            </div>
          )}
          <div className="flex justify-between gap-3">
            <dt className="shrink-0 text-muted">Delivery address</dt>
            <dd className="text-right text-body">{order.address}</dd>
          </div>
        </dl>
      )}
    </div>
  );
}
