"use client";

import { useState } from "react";
import { ReelPackage } from "@/types";
import { exportReelToTxt } from "@/lib/exportText";

interface ExportButtonProps {
  reel: ReelPackage;
  variant?: "primary" | "secondary";
  /** Optional callback fired after export (e.g. to show a toast) */
  onExported?: () => void;
}

export default function ExportButton({
  reel,
  variant = "secondary",
  onExported,
}: ExportButtonProps) {
  const [exported, setExported] = useState(false);
  const isPrimary = variant === "primary";

  const handleExport = () => {
    exportReelToTxt(reel);
    setExported(true);
    onExported?.();
    setTimeout(() => setExported(false), 2000);
  };

  return (
    <button
      onClick={handleExport}
      className={`btn-press flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        exported
          ? "bg-emerald-900/30 text-emerald-400 border border-emerald-800/60"
          : isPrimary
          ? "bg-blue-600 hover:bg-blue-500 text-white"
          : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600"
      }`}
      title="Export as .txt"
    >
      {exported ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
          </svg>
          Exported!
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Export .txt
        </>
      )}
    </button>
  );
}
