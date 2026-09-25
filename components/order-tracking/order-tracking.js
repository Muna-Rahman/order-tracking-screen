"use client";

import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import orders from "@/data/orders";
import StateSwitcher from "./state-switcher";
import StatusBanner from "./status-banner";
import OrderTimeline from "./order-timeline";
import TrackingPending from "./tracking-pending";
import OrderSummary from "./order-summary";
import SupportActions from "./support-actions";
import SupportSheet from "./support-sheet";
import IssueReportSheet from "./issue-report-sheet";
import LoadingSkeleton from "./loading-skeleton";
import ErrorState from "./error-state";

export default function OrderTracking() {
  const [activeKey, setActiveKey] = useState("normal");
  const [isLoading, setIsLoading] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [issueOpen, setIssueOpen] = useState(false);

  const order = orders[activeKey];

  // Simulate a brief fetch whenever the selected order changes, so the
  // loading state has somewhere real to show up.
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timeout);
  }, [activeKey]);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-app">
      <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-line bg-surface px-4 py-3">
        <button
          aria-label="Go back"
          className="rounded-full p-1.5 text-ink hover:bg-app"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="min-w-0">
          <h1 className="text-[15px] font-semibold leading-tight text-ink">
            Order Tracking
          </h1>
          <p className="truncate text-xs text-muted">{order?.orderNumber}</p>
        </div>
      </header>

      <StateSwitcher activeKey={activeKey} onChange={setActiveKey} />

      <main className="flex-1 space-y-4 px-4 py-4">
        {isLoading ? (
          <LoadingSkeleton />
        ) : !order ? (
          <ErrorState onRetry={() => setActiveKey("normal")} />
        ) : (
          <>
            <StatusBanner order={order} />

            {order.trackingAvailable ? (
              <OrderTimeline steps={order.timeline} />
            ) : (
              <TrackingPending order={order} />
            )}

            <OrderSummary order={order} />

            <SupportActions
              order={order}
              onContact={() => setSupportOpen(true)}
              onReport={() => setIssueOpen(true)}
            />
          </>
        )}
      </main>

      {supportOpen && <SupportSheet onClose={() => setSupportOpen(false)} />}
      {issueOpen && order && (
        <IssueReportSheet order={order} onClose={() => setIssueOpen(false)} />
      )}
    </div>
  );
}
