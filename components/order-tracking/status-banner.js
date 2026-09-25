"use client";

import { Truck, Clock, PackageCheck, AlertTriangle, PackageSearch } from "lucide-react";

const STATE_STYLES = {
  on_time: { Icon: Truck, iconBg: "bg-brand-light", iconColor: "text-brand" },
  delayed: { Icon: Clock, iconBg: "bg-warning-light", iconColor: "text-warning" },
  delivered_not_received: { Icon: PackageCheck, iconBg: "bg-success-light", iconColor: "text-success" },
  no_tracking: { Icon: PackageSearch, iconBg: "bg-app", iconColor: "text-muted" },
};

export default function StatusBanner({ order }) {
  const { Icon, iconBg, iconColor } = STATE_STYLES[order.state] ?? STATE_STYLES.on_time;

  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-line bg-surface p-4">
        <div className="flex items-start gap-3">
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
            <Icon size={20} className={iconColor} strokeWidth={1.75} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[15px] font-semibold text-ink">{order.statusLabel}</p>
            <p className="mt-0.5 text-sm leading-snug text-body">{order.statusDescription}</p>
          </div>
        </div>

        {order.state === "delayed" ? (
          <div className="mt-3 flex items-center gap-4 border-t border-line pt-3 text-xs">
            <div>
              <p className="text-muted">Original estimate</p>
              <p className="mt-0.5 font-medium text-body line-through decoration-muted/60">
                {order.estimatedDelivery}
              </p>
            </div>
            <div>
              <p className="text-muted">New estimate</p>
              <p className="mt-0.5 font-medium text-ink">{order.newEstimatedDelivery}</p>
            </div>
          </div>
        ) : (
          <div className="mt-3 border-t border-line pt-3 text-xs">
            <p className="text-muted">
              {order.state === "delivered_not_received" ? "Delivered on" : "Estimated delivery"}
            </p>
            <p className="mt-0.5 font-medium text-ink">{order.estimatedDelivery}</p>
          </div>
        )}
      </div>

      {order.state === "delivered_not_received" && (
        <div className="flex items-start gap-3 rounded-2xl border border-danger/30 bg-danger-light p-4">
          <AlertTriangle size={18} className="mt-0.5 shrink-0 text-danger" strokeWidth={1.75} />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink">Reported as not received</p>
            <p className="mt-0.5 text-sm leading-snug text-body">
              The carrier marked this order as delivered, but you told us it hasn&apos;t
              arrived. We&apos;re looking into it with {order.carrier}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
