"use client";

import { Check, Clock } from "lucide-react";

function StepDot({ status, delayed }) {
  if (status === "complete") {
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
        <Check size={13} strokeWidth={2.5} />
      </span>
    );
  }

  if (status === "current") {
    return (
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
          delayed ? "border-warning bg-warning-light" : "border-brand bg-brand-light"
        }`}
      >
        {delayed ? (
          <Clock size={12} className="text-warning" strokeWidth={2.5} />
        ) : (
          <span className="h-2 w-2 rounded-full bg-brand" />
        )}
      </span>
    );
  }

  return <span className="h-6 w-6 shrink-0 rounded-full border-2 border-line bg-surface" />;
}

export default function OrderTimeline({ steps }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-4">
      <h2 className="mb-3 text-sm font-semibold text-ink">Delivery progress</h2>
      <ol>
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const isUpcoming = step.status === "upcoming";

          return (
            <li key={step.key} className="flex gap-3">
              <div className="flex flex-col items-center">
                <StepDot status={step.status} delayed={step.delayed} />
                {!isLast && (
                  <span
                    className={`w-px flex-1 ${
                      step.status === "complete" ? "bg-brand" : "bg-line"
                    }`}
                  />
                )}
              </div>
              <div className={`min-w-0 pb-5 ${isLast ? "pb-0" : ""}`}>
                <p
                  className={`text-sm ${
                    isUpcoming ? "font-medium text-muted" : "font-semibold text-ink"
                  }`}
                >
                  {step.label}
                </p>
                <p
                  className={`mt-0.5 text-xs ${
                    step.delayed ? "font-medium text-warning" : "text-muted"
                  }`}
                >
                  {step.timestamp}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
