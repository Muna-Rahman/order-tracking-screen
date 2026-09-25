"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Sheet from "./sheet";

const ISSUE_OPTIONS = [
  { key: "not_received", label: "Package not received" },
  { key: "damaged", label: "Item arrived damaged" },
  { key: "wrong_item", label: "Wrong item delivered" },
  { key: "other", label: "Something else" },
];

export default function IssueReportSheet({ order, onClose }) {
  const defaultIssue =
    order.state === "delivered_not_received" ? "not_received" : "";
  const [selected, setSelected] = useState(defaultIssue);
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!selected) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Sheet title="Report an Issue" onClose={onClose}>
        <div className="py-4 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success-light">
            <CheckCircle2 size={24} className="text-success" />
          </div>
          <p className="mt-3 text-sm font-semibold text-ink">
            Thanks, we&apos;ve got it
          </p>
          <p className="mx-auto mt-1 max-w-[280px] text-sm leading-snug text-body">
            We&apos;ve logged this for order {order.orderNumber} and our team
            will follow up by email within 24 hours.
          </p>
          <button
            onClick={onClose}
            className="mt-4 w-full rounded-xl bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-dark"
          >
            Done
          </button>
        </div>
      </Sheet>
    );
  }

  return (
    <Sheet title="Report an Issue" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <p className="mb-3 text-sm text-body">
          What went wrong with order {order.orderNumber}?
        </p>
        <div className="space-y-2">
          {ISSUE_OPTIONS.map((option) => (
            <label
              key={option.key}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-sm ${
                selected === option.key
                  ? "border-brand bg-brand-light text-ink"
                  : "border-line text-body"
              }`}
            >
              <input
                type="radio"
                name="issue"
                value={option.key}
                checked={selected === option.key}
                onChange={() => setSelected(option.key)}
                className="h-4 w-4 accent-[#1F5FBF]"
              />
              {option.label}
            </label>
          ))}
        </div>

        <label className="mt-3 block text-sm font-medium text-ink">
          Additional details (optional)
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={3}
            placeholder="Add anything that might help us look into this"
            className="mt-1.5 w-full rounded-xl border border-line px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-brand"
          />
        </label>

        <button
          type="submit"
          disabled={!selected}
          className="mt-4 w-full rounded-xl bg-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
        >
          Submit report
        </button>
      </form>
    </Sheet>
  );
}
