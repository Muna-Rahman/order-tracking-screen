"use client";

import { Phone, MessageSquare, Mail, ChevronRight } from "lucide-react";
import Sheet from "./sheet";

const CONTACT_OPTIONS = [
  {
    key: "chat",
    label: "Chat with us",
    detail: "Typically replies in a few minutes",
    Icon: MessageSquare,
  },
  {
    key: "call",
    label: "Call support",
    detail: "+1 (800) 555-0182",
    Icon: Phone,
  },
  {
    key: "email",
    label: "Email support",
    detail: "help@shopfront.example",
    Icon: Mail,
  },
];

export default function SupportSheet({ onClose }) {
  return (
    <Sheet title="Contact Support" onClose={onClose}>
      <p className="mb-3 text-sm text-body">
        Choose how you&apos;d like to reach our team about this order.
      </p>
      <div className="space-y-2">
        {CONTACT_OPTIONS.map(({ key, label, detail, Icon }) => (
          <button
            key={key}
            className="flex w-full items-center gap-3 rounded-xl border border-line px-3 py-3 text-left hover:bg-app"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
              <Icon size={17} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium text-ink">{label}</span>
              <span className="block text-xs text-muted">{detail}</span>
            </span>
            <ChevronRight size={16} className="shrink-0 text-muted" />
          </button>
        ))}
      </div>
    </Sheet>
  );
}
