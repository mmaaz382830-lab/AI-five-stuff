"use client";

import { useState, useEffect, useRef } from "react";
import GeneratorForm from "@/components/GeneratorForm";
import OutputCard from "@/components/OutputCard";
import ExportButton from "@/components/ExportButton";
import OutputSkeleton from "@/components/Skeleton";
import { useToast } from "@/components/Toast";
import { generateReelFromTemplate, generateReelFromAI, GenerateInputs } from "@/lib/generateReel";
import { ReelPackage } from "@/types";
import { saveReel } from "@/lib/storage";

export default function StudioPage() {
  const { showToast } = useToast();
  const [result, setResult] = useState<ReelPackage | null>(null);
  const [saved, setSaved] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAI, setIsAI] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedMode, setGeneratedMode] = useState<string>("Template Mode");
  const [lastInputs, setLastInputs] = useState<GenerateInputs | null>(null);

  // Auto-save setting
  const [autoSave, setAutoSave] = useState(() => {
    if (typeof window !== "undefined") {
      const val = localStorage.getItem("five-stuff-reel-autosave");
      return val === "true";
    }
    return false;
  });

  // Track results scroll ref
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("five-stuff-reel-autosave", String(autoSave));
  }, [autoSave]);

  // Page title change during generation
  useEffect(() => {
    if (isGenerating) {
      const originalTitle = document.title;
      document.title = "Generating… | Studio";
      return () => {
        document.title = originalTitle;
      };
    }
  }, [isGenerating]);

  const handleGenerate = async (inputs: GenerateInputs) => {
    setError(null);
    setIsGenerating(true);
    setIsAI(inputs.mode === "ai");
    setLastInputs(inputs);

    try {
      let generated: ReelPackage;
      if (inputs.mode === "ai") {
        generated = await generateReelFromAI(inputs);
        setGeneratedMode("AI Mode ✨");
      } else {
        generated = generateReelFromTemplate(inputs);
        setGeneratedMode("Template Mode");
      }
      setResult(generated);
      
      // Auto-save logic
      if (autoSave) {
        saveReel(generated);
        setSaved(true);
        showToast("Saved to History ✓", "success");
      } else {
        setSaved(false);
      }

      // Smooth scroll to result
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    } catch (err: any) {
      console.error(err);
      const msg = err.message || "Something went wrong. Try again or use Template Mode.";
      setError(msg);
      showToast(msg, "error");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = () => {
    if (result && !saved) {
      saveReel(result);
      setSaved(true);
      showToast("Saved to History ✓", "success");
    }
  };

  const aiMode = generatedMode.includes("AI");

  return (
    <div className="animate-slideUp w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      {/* ── Page header ───────────────────────────────── */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-2 leading-tight">
          Reel Studio
        </h1>
        <p className="text-gray-400 leading-relaxed text-[16px] max-w-lg">
          Pick your settings and generate a complete, shareable reel package in seconds.
        </p>
      </div>

      {/* ── Two-column layout ─────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left — Form (sticky on desktop) */}
        <div className="lg:col-span-4 lg:sticky lg:top-6">
          <GeneratorForm onGenerate={handleGenerate} isGenerating={isGenerating} />

          {/* Auto-save to History checkbox */}
          <div className="mt-4 p-4 bg-gray-900/40 border border-gray-800/80 rounded-xl flex items-center justify-between shadow-sm">
            <span className="text-sm font-semibold text-gray-300">Auto-save to History</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoSave}
                onChange={(e) => setAutoSave(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-705 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Error banner below form */}
          {error && (
            <div className="animate-slideUp mt-4 p-4 bg-red-950/40 border border-red-800/60 rounded-xl text-red-300 text-sm leading-relaxed">
              <p className="font-semibold mb-1 flex items-center gap-1.5">
                <span className="text-red-400">⚠</span> Generation Failed
              </p>
              <p>{error}</p>
            </div>
          )}
        </div>

        {/* Right — Output area */}
        <div className="lg:col-span-8 min-w-0" aria-live="polite">
          {isGenerating ? (
            <OutputSkeleton />
          ) : !result ? (
            /* ── Empty state ── */
            <div className="animate-fadeIn h-full min-h-[420px] flex flex-col items-center justify-center
                            border border-dashed border-gray-800/70 rounded-2xl bg-gray-900/30 p-10 text-center">
              <div className="relative mb-5">
                <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full scale-150" />
                <div className="relative w-16 h-16 rounded-full bg-gray-800/60 border border-gray-700/50 flex items-center justify-center text-3xl">
                  ✨
                </div>
              </div>
              <p className="text-white font-semibold text-lg mb-1">Your Reel Package</p>
              <p className="text-gray-500 text-[15px] max-w-xs leading-relaxed">
                Fill out the form on the left and hit Generate to create your complete reel package.
              </p>
            </div>
          ) : (
            /* ── Results ── */
            <div ref={resultRef} className="space-y-4 stagger-children">
              {/* Meta / action bar */}
              <div
                className={`animate-revealCard rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border ${
                  aiMode
                    ? "bg-purple-950/25 border-purple-800/50 shadow-[0_0_20px_rgba(147,51,234,0.08)]"
                    : "bg-blue-950/20 border-blue-800/40"
                }`}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-sm font-semibold ${aiMode ? "text-purple-400" : "text-blue-400"}`}>
                      Topic:
                    </span>
                    <span className="text-white font-medium truncate max-w-[200px]">{result.topic}</span>
                    <span
                      className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold tracking-wide ${
                        aiMode
                          ? "bg-purple-900/60 text-purple-200 border border-purple-700/50"
                          : "bg-blue-900/60 text-blue-200 border border-blue-700/50"
                      }`}
                    >
                      {generatedMode}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">
                    {result.style} · {result.format} · {result.duration}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  {lastInputs && (
                    <button
                      onClick={() => handleGenerate(lastInputs)}
                      disabled={isGenerating}
                      className="btn-press text-sm font-semibold px-4 py-2 rounded-lg transition-all bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 flex items-center gap-1.5"
                      title="Regenerate with last inputs"
                    >
                      <span>🔁</span> Regenerate
                    </button>
                  )}
                  <ExportButton
                    reel={result}
                    onExported={() => showToast("Exported as .txt ✓", "success")}
                  />
                  <button
                    onClick={handleSave}
                    disabled={saved}
                    className={`btn-press text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
                      saved
                        ? "bg-emerald-900/30 text-emerald-400 border border-emerald-800/50 cursor-not-allowed"
                        : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    {saved ? "Saved ✓" : "Save"}
                  </button>
                </div>
              </div>

              {/* Output cards — staggered via CSS nth-child */}
              <OutputCard title="Hook"            content={result.hook}                      animationDelay="0.05s" />
              <OutputCard title="Reel Script"     content={result.script}                    animationDelay="0.10s" />
              <OutputCard title="Scene Breakdown" content={result.scenes}                    animationDelay="0.15s" />
              <OutputCard title="Screen Text"     content={result.screenText}               animationDelay="0.20s" />
              <OutputCard title="Voiceover"       content={result.voiceover}                animationDelay="0.25s" />
              <OutputCard title="AI Video Prompt" content={result.videoPrompt}              animationDelay="0.30s" />
              <OutputCard title="Caption"         content={result.caption}                  animationDelay="0.35s" />
              <OutputCard title="Hashtags"        content={result.hashtags.join(" ")}       animationDelay="0.40s" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
