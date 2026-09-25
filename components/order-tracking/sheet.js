"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export default function Sheet({ title, onClose, children }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-20 flex items-end justify-center">
      <div
        className="absolute inset-0 bg-ink/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative z-10 w-full max-w-[430px] rounded-t-2xl bg-surface p-4 pb-6 shadow-[0_-4px_24px_rgba(0,0,0,0.12)]"
      >
        <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-line" />
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[15px] font-semibold text-ink">{title}</h2>
          <button
            aria-label="Close"
            onClick={onClose}
            className="rounded-full p-1 text-muted hover:bg-app hover:text-ink"
          >
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
