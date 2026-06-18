"use client";

import { useState } from "react";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-2 rounded-md transition-colors text-sm font-medium border ${
        copied 
          ? "bg-green-900/30 text-green-400 border-green-800" 
          : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border-transparent"
      }`}
      title="Copy to clipboard"
    >
      {copied ? "Copied! ✓" : "Copy"}
    </button>
  );
}
