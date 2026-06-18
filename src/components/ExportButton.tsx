"use client";

import { ReelPackage } from "@/types";
import { exportReelToTxt } from "@/lib/exportText";

interface ExportButtonProps {
  reel: ReelPackage;
  variant?: "primary" | "secondary";
}

export default function ExportButton({ reel, variant = "secondary" }: ExportButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <button
      onClick={() => exportReelToTxt(reel)}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        isPrimary 
          ? "bg-blue-600 hover:bg-blue-500 text-white" 
          : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600"
      }`}
      title="Export as .txt"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
      Export .txt
    </button>
  );
}
