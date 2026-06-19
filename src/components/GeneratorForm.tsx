"use client";

import { useState, useEffect } from "react";
import { GenerateInputs, GenerateMode } from "@/lib/generateReel";

interface GeneratorFormProps {
  onGenerate: (inputs: GenerateInputs) => void;
  isGenerating?: boolean;
}

const selectClass =
  "studio-select w-full bg-black border border-gray-700 text-white rounded-lg p-3 appearance-none cursor-pointer text-[15px]";

const labelClass = "text-sm font-semibold text-gray-300 block mb-1.5";

export default function GeneratorForm({
  onGenerate,
  isGenerating = false,
}: GeneratorFormProps) {
  const [formData, setFormData] = useState<GenerateInputs>({
    topic: "Student Life",
    style: "Funny",
    format: "Stickman Story",
    duration: "15 seconds",
    language: "English",
    creativity: "Balanced",
    mode: "template",
  });

  const [customTopic, setCustomTopic] = useState("");

  // Load last used settings on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("five-stuff-reel-last-settings");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed) {
          // Merge safely to prevent structure breakage
          setFormData((prev) => ({ ...prev, ...parsed }));
          if (parsed.customTopic) {
            setCustomTopic(parsed.customTopic);
          }
        }
      }
    } catch (e) {
      console.error("Failed to load last settings from localStorage", e);
    }
  }, []);

  // Write settings on change
  useEffect(() => {
    try {
      localStorage.setItem(
        "five-stuff-reel-last-settings",
        JSON.stringify({ ...formData, customTopic })
      );
    } catch (e) {
      console.error("Failed to write settings to localStorage", e);
    }
  }, [formData, customTopic]);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleModeChange = (mode: GenerateMode) => {
    setFormData({ ...formData, mode });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalData = { ...formData };
    if (formData.topic === "Custom Topic") {
      finalData.topic = customTopic || "Random Idea";
    }
    onGenerate(finalData);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    // Submit on Ctrl+Enter or Cmd+Enter
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      const finalData = { ...formData };
      if (formData.topic === "Custom Topic") {
        finalData.topic = customTopic || "Random Idea";
      }
      onGenerate(finalData);
    }
  };

  const handleRandomTopic = () => {
    const topics = [
      "Student Life",
      "Coding Life",
      "AI Tools",
      "Exam Stress",
      "Friends",
      "Family",
      "Internet Habits",
      "Daily Chaos",
    ];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    setFormData((prev) => ({ ...prev, topic: randomTopic }));
  };

  const isAI = formData.mode === "ai";

  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
      className="form-card-lift bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg space-y-5
                 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_32px_rgba(2,6,23,0.7)]"
    >
      {/* ── Mode Toggle ─────────────────────────────── */}
      <div className="relative flex bg-black p-1 rounded-xl border border-gray-800 overflow-hidden">
        {/* animated sliding pill */}
        <div
          className={`absolute top-1 bottom-1 rounded-lg transition-all duration-300 ease-out ${
            isAI
              ? "left-[calc(50%+2px)] right-1 bg-purple-600/90"
              : "left-1 right-[calc(50%+2px)] bg-blue-600/90"
          }`}
          style={{ willChange: "left, right" }}
        />
        <button
          type="button"
          onClick={() => handleModeChange("template")}
          className={`relative z-10 flex-1 py-2 text-sm font-bold rounded-lg transition-colors duration-200 ${
            !isAI ? "text-white" : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Template Mode
        </button>
        <button
          type="button"
          onClick={() => handleModeChange("ai")}
          className={`relative z-10 flex-1 py-2 text-sm font-bold rounded-lg transition-colors duration-200 ${
            isAI ? "text-white" : "text-gray-400 hover:text-gray-200"
          }`}
        >
          AI Mode ✨
        </button>
      </div>

      {/* ── Mode hint ───────────────────────────────── */}
      <p className={`text-xs leading-relaxed transition-colors duration-300 ${isAI ? "text-purple-400/80" : "text-blue-400/80"}`}>
        {isAI
          ? "Uses Gemini AI for unique, tailored output — requires an API key."
          : "Instant results using smart templates — no API key needed."}
      </p>

      {/* ── Fields grid ─────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
        {/* Topic */}
        <div className="sm:col-span-2">
          <label className={labelClass}>Topic</label>
          <div className="flex gap-2">
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className={selectClass}
            >
              <option>Student Life</option>
              <option>Coding Life</option>
              <option>AI Tools</option>
              <option>Exam Stress</option>
              <option>Friends</option>
              <option>Family</option>
              <option>Internet Habits</option>
              <option>Daily Chaos</option>
              <option>Custom Topic</option>
            </select>
            <button
              type="button"
              onClick={handleRandomTopic}
              className="p-3 bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center justify-center shrink-0 active:scale-95 duration-150"
              title="Pick random topic 🎲"
            >
              🎲
            </button>
          </div>
        </div>

        {/* Custom Topic Input */}
        {formData.topic === "Custom Topic" && (
          <div className="sm:col-span-2">
            <label className={labelClass}>Custom Topic</label>
            <input
              type="text"
              placeholder="E.g., When the coffee machine breaks"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              className="studio-input w-full bg-black border border-gray-700 text-white rounded-lg p-3 text-[15px]"
            />
          </div>
        )}

        {/* Style */}
        <div>
          <label className={labelClass}>Style</label>
          <select
            name="style"
            value={formData.style}
            onChange={handleChange}
            className={selectClass}
          >
            <option>Funny</option>
            <option>Savage</option>
            <option>Meme</option>
            <option>Relatable</option>
            <option>Emotional Funny</option>
            <option>Educational Funny</option>
          </select>
        </div>

        {/* Format */}
        <div>
          <label className={labelClass}>Format</label>
          <select
            name="format"
            value={formData.format}
            onChange={handleChange}
            className={selectClass}
          >
            <option>Stickman Story</option>
            <option>Voiceover Reel</option>
            <option>Screen Text Reel</option>
            <option>AI Video Prompt</option>
            <option>Meme Scene</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className={labelClass}>Duration</label>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className={selectClass}
          >
            <option>15 seconds</option>
            <option>30 seconds</option>
            <option>45 seconds</option>
          </select>
        </div>

        {/* Language */}
        <div>
          <label className={labelClass}>Language Mode</label>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className={selectClass}
          >
            <option>English</option>
            <option>Hinglish</option>
            <option>Simple English</option>
          </select>
        </div>

        {/* Creativity */}
        <div className="sm:col-span-2">
          <label className={labelClass}>Creativity Level</label>
          <select
            name="creativity"
            value={formData.creativity}
            onChange={handleChange}
            className={selectClass}
          >
            <option>Safe</option>
            <option>Balanced</option>
            <option>Wild but clean</option>
          </select>
        </div>
      </div>

      {/* ── Submit button ───────────────────────────── */}
      <button
        type="submit"
        disabled={isGenerating}
        className={`btn-press w-full font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-[15px] ${
          isGenerating
            ? "bg-gray-800 text-gray-500 cursor-not-allowed opacity-70 border border-gray-700"
            : isAI
            ? "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_18px_rgba(147,51,234,0.35)] hover:shadow-[0_0_28px_rgba(147,51,234,0.55)]"
            : "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_18px_rgba(37,99,235,0.35)] hover:shadow-[0_0_28px_rgba(37,99,235,0.55)]"
        }`}
      >
        {isGenerating ? (
          <>
            <svg
              className="animate-spin w-4 h-4 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {isAI ? "Generating with AI…" : "Generating…"}
          </>
        ) : isAI ? (
          "Generate with AI ✨"
        ) : (
          "Generate Reel Package"
        )}
      </button>
      <div className="text-center">
        <span className="text-[11px] text-gray-500">Shortcut: Press Ctrl+Enter to generate</span>
      </div>
    </form>
  );
}
