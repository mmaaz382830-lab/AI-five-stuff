"use client";

import { useState, useEffect } from "react";
import { ReelPackage } from "@/types";
import { getHistory, deleteReel, toggleFavorite, clearHistory } from "@/lib/storage";
import EmptyState from "./EmptyState";
import FavoriteButton from "./FavoriteButton";
import OutputCard from "./OutputCard";
import ExportButton from "./ExportButton";
import { useRouter } from "next/navigation";
import { useToast } from "./Toast";
import { exportAllReelsToTxt } from "@/lib/exportText";

export default function HistoryList() {
  const [history, setHistory] = useState<ReelPackage[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "favorites">("newest");
  const [activeTab, setActiveTab] = useState<"all" | "favorites">("all");
  
  // Delete with Undo state
  const [pendingDelete, setPendingDelete] = useState<{ id: string; reel: ReelPackage; timer: NodeJS.Timeout } | null>(null);

  const { showToast } = useToast();
  const router = useRouter();

  useEffect(() => {
    setHistory(getHistory());
    setIsMounted(true);
  }, []);

  // Finalize any pending deletes if component unmounts
  useEffect(() => {
    return () => {
      if (pendingDelete) {
        clearTimeout(pendingDelete.timer);
        deleteReel(pendingDelete.id);
      }
    };
  }, [pendingDelete]);

  const finalizeDelete = (id: string) => {
    deleteReel(id);
    setPendingDelete(null);
  };

  const handleDelete = (id: string) => {
    // If there is already a pending deletion, finalize it first
    if (pendingDelete) {
      clearTimeout(pendingDelete.timer);
      finalizeDelete(pendingDelete.id);
    }

    const reelToDelete = history.find((r) => r.id === id);
    if (!reelToDelete) return;

    // Remove from UI state immediately
    setHistory((prev) => prev.filter((r) => r.id !== id));
    if (expandedId === id) setExpandedId(null);

    // Schedule actual deletion in 3 seconds
    const timer = setTimeout(() => {
      deleteReel(id);
      setPendingDelete(null);
    }, 3000);

    setPendingDelete({ id, reel: reelToDelete, timer });

    // Show toast with Undo option
    showToast(`Deleted "${reelToDelete.topic}"`, "info", {
      label: "Undo",
      onClick: () => {
        // Restore state from localStorage
        setHistory(getHistory());
        clearTimeout(timer);
        setPendingDelete(null);
        showToast("Restored reel", "success");
      },
    });
  };

  const handleToggleFavorite = (id: string) => {
    toggleFavorite(id);
    const updatedHistory = getHistory();
    const item = updatedHistory.find((r) => r.id === id);
    if (item) {
      if (item.isFavorite) {
        showToast("Added to Favorites ♥", "success");
      } else {
        showToast("Removed from Favorites", "info");
      }
    }
    setHistory(updatedHistory);
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear all history? This cannot be undone.")) {
      // If there's a pending delete, clear it
      if (pendingDelete) {
        clearTimeout(pendingDelete.timer);
        setPendingDelete(null);
      }
      clearHistory();
      setHistory([]);
      setExpandedId(null);
      showToast("Cleared history", "info");
    }
  };

  const handleExportAll = () => {
    const rawHistory = getHistory();
    if (rawHistory.length === 0) return;
    exportAllReelsToTxt(rawHistory);
    showToast("Exported all history to .txt ✓", "success");
  };

  if (!isMounted) return null; // Avoid hydration mismatch

  if (history.length === 0 && !pendingDelete) {
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

  // Filter & Sort
  let filteredHistory = [...history];

  if (searchTerm.trim() !== "") {
    const term = searchTerm.toLowerCase();
    filteredHistory = filteredHistory.filter(
      (reel) =>
        reel.topic.toLowerCase().includes(term) ||
        reel.style.toLowerCase().includes(term) ||
        reel.hook.toLowerCase().includes(term)
    );
  }

  if (activeTab === "favorites") {
    filteredHistory = filteredHistory.filter((reel) => reel.isFavorite);
  }

  filteredHistory.sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    } else if (sortBy === "favorites") {
      if (a.isFavorite && !b.isFavorite) return -1;
      if (!a.isFavorite && b.isFavorite) return 1;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return 0;
  });

  return (
    <div className="space-y-6">
      {/* Top Header Row with premium Badge & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-white">Saved Reels</h2>
          <span className="bg-blue-900/60 text-blue-300 border border-blue-700/50 text-[11px] px-2.5 py-1 rounded-full font-semibold">
            {history.length} {history.length === 1 ? "reel" : "reels"} saved
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={handleExportAll}
            className="text-sm text-blue-400 hover:text-blue-300 font-semibold transition-colors flex items-center gap-1.5"
            title="Export all reels"
          >
            📥 Export All (.txt)
          </button>
          <span className="text-gray-700">|</span>
          <button
            onClick={handleClearAll}
            className="text-sm text-red-500 hover:text-red-400 font-semibold transition-colors"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Control Bar: Search + Tab + Sort */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-gray-900/40 border border-gray-800 p-4 rounded-xl shadow-sm">
        {/* Search */}
        <div className="md:col-span-5 relative">
          <input
            type="text"
            placeholder="Search saved reels..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-black border border-gray-850 focus:border-blue-500 text-white rounded-lg pl-9 pr-4 py-2 text-sm transition-colors outline-none"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            🔍
          </span>
        </div>

        {/* Tab Toggle */}
        <div className="md:col-span-3 flex bg-black p-1 rounded-lg border border-gray-850">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === "all" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-gray-200"
            }`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("favorites")}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === "favorites" ? "bg-red-950/40 text-red-400 border border-red-900/40" : "text-gray-400 hover:text-gray-200"
            }`}
          >
            ♥ Favorites
          </button>
        </div>

        {/* Sort Select */}
        <div className="md:col-span-4 flex items-center gap-2">
          <span className="text-xs text-gray-400 shrink-0">Sort:</span>
          <div className="flex bg-black p-1 rounded-lg border border-gray-850 w-full">
            <button
              type="button"
              onClick={() => setSortBy("newest")}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                sortBy === "newest" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              New
            </button>
            <button
              type="button"
              onClick={() => setSortBy("oldest")}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                sortBy === "oldest" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Old
            </button>
            <button
              type="button"
              onClick={() => setSortBy("favorites")}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                sortBy === "favorites" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              ♥ First
            </button>
          </div>
        </div>
      </div>

      {/* History Items list */}
      {filteredHistory.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-gray-800 rounded-xl bg-gray-900/10">
          <p className="text-gray-400 font-medium">No reels matching your search/filters.</p>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn">
          {filteredHistory.map((reel) => {
            const isAI = reel.mode === "ai";
            return (
              <div 
                key={reel.id} 
                className={`bg-gray-900 border rounded-xl overflow-hidden shadow-sm transition-colors duration-300 ${
                  isAI ? 'border-purple-900/50 hover:border-purple-500/50' : 'border-gray-800 hover:border-blue-500/50'
                }`}
              >
                {/* Header / Summary */}
                <div 
                  className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer hover:bg-gray-800/50 transition-colors"
                  onClick={() => setExpandedId(expandedId === reel.id ? null : reel.id)}
                >
                  <div className="mb-4 sm:mb-0 min-w-0 pr-4">
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <h3 className="text-lg font-bold text-white truncate max-w-[280px] sm:max-w-[400px]">{reel.topic}</h3>
                      <span className={`text-xs px-2.5 py-0.5 rounded-md font-semibold ${
                        isAI ? 'bg-purple-900/50 text-purple-300 border border-purple-800/40' : 'bg-blue-900/50 text-blue-300 border border-blue-800/40'
                      }`}>
                        {reel.style}
                      </span>
                      {isAI && <span className="text-[10px] bg-purple-900/30 text-purple-400 px-2 py-0.5 rounded-md border border-purple-850">AI ✨</span>}
                    </div>
                    <p className="text-gray-500 text-xs font-semibold">
                      {new Date(reel.createdAt).toLocaleDateString()} • {reel.duration} • {reel.format}
                    </p>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-1 italic border-l-2 border-gray-700 pl-2">
                      "{reel.hook}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end shrink-0">
                    <FavoriteButton 
                      isFavorite={reel.isFavorite} 
                      onToggle={() => handleToggleFavorite(reel.id)} 
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(reel.id);
                      }}
                      className="p-2 bg-gray-800 text-gray-400 hover:bg-red-950/50 hover:text-red-400 rounded-lg transition-colors border border-gray-750 animate-fadeIn"
                      title="Delete"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className={`text-sm font-bold px-3 py-1.5 rounded-lg border bg-gray-850 hover:bg-gray-800 transition-all duration-200 ${isAI ? 'text-purple-400 hover:text-purple-300 border-purple-900/40' : 'text-blue-400 hover:text-blue-300 border-blue-900/40'}`}>
                      {expandedId === reel.id ? "Hide" : "View"}
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedId === reel.id && (
                  <div className="border-t border-gray-800 p-5 bg-black/30 space-y-4">
                    <div className="flex justify-end mb-2">
                      <ExportButton
                        reel={reel}
                        onExported={() => showToast("Exported as .txt ✓", "success")}
                      />
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
            );
          })}
        </div>
      )}
    </div>
  );
}
