"use client";

import { useState, useEffect } from "react";
import { ReelPackage } from "@/types";
import { getHistory, deleteReel, toggleFavorite, clearHistory } from "@/lib/storage";
import EmptyState from "./EmptyState";
import FavoriteButton from "./FavoriteButton";
import OutputCard from "./OutputCard";
import ExportButton from "./ExportButton";
import { useRouter } from "next/navigation";

export default function HistoryList() {
  const [history, setHistory] = useState<ReelPackage[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHistory(getHistory());
    setIsMounted(true);
  }, []);

  const handleDelete = (id: string) => {
    deleteReel(id);
    setHistory(getHistory());
    if (expandedId === id) setExpandedId(null);
  };

  const handleToggleFavorite = (id: string) => {
    toggleFavorite(id);
    setHistory(getHistory());
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear all history? This cannot be undone.")) {
      clearHistory();
      setHistory([]);
      setExpandedId(null);
    }
  };

  if (!isMounted) return null; // Avoid hydration mismatch

  if (history.length === 0) {
    return (
      <EmptyState
        title="No saved reels yet"
        description="Head over to the Studio to generate and save your first reel package."
        actionText="Go to Studio"
        onAction={() => router.push("/studio")}
        icon="📭"
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Your Saved Reels ({history.length})</h2>
        <button
          onClick={handleClearAll}
          className="text-sm text-red-400 hover:text-red-300 font-medium"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        {history.map((reel) => (
          <div key={reel.id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-sm">
            {/* Header / Summary */}
            <div 
              className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer hover:bg-gray-800/50 transition-colors"
              onClick={() => setExpandedId(expandedId === reel.id ? null : reel.id)}
            >
              <div className="mb-4 sm:mb-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-white">{reel.topic}</h3>
                  <span className="bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded-md">{reel.style}</span>
                </div>
                <p className="text-gray-400 text-sm">
                  {new Date(reel.createdAt).toLocaleDateString()} • {reel.duration}
                </p>
                <p className="text-gray-500 text-sm mt-2 line-clamp-1 italic">
                  "{reel.hook}"
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <FavoriteButton 
                  isFavorite={reel.isFavorite} 
                  onToggle={() => handleToggleFavorite(reel.id)} 
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(reel.id);
                  }}
                  className="p-2 bg-gray-800 text-gray-400 hover:bg-red-900/50 hover:text-red-400 rounded-md transition-colors"
                  title="Delete"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-sm font-medium text-blue-400 hover:text-blue-300 px-3 py-1">
                  {expandedId === reel.id ? "Hide" : "View"}
                </button>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedId === reel.id && (
              <div className="border-t border-gray-800 p-5 bg-black/30 space-y-4">
                <div className="flex justify-end mb-2">
                  <ExportButton reel={reel} />
                </div>
                <OutputCard title="Hook" content={reel.hook} />
                <OutputCard title="Reel Script" content={reel.script} />
                <OutputCard title="Scene Breakdown" content={reel.scenes} />
                <OutputCard title="Screen Text" content={reel.screenText} />
                <OutputCard title="Voiceover" content={reel.voiceover} />
                <OutputCard title="AI Video Prompt" content={reel.videoPrompt} />
                <OutputCard title="Caption" content={reel.caption} />
                <OutputCard title="Hashtags" content={reel.hashtags.join(" ")} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
