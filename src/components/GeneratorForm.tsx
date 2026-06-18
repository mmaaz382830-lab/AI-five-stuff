"use client";

import { useState } from "react";
import { GenerateInputs } from "@/lib/generateReel";

interface GeneratorFormProps {
  onGenerate: (inputs: GenerateInputs) => void;
}

export default function GeneratorForm({ onGenerate }: GeneratorFormProps) {
  const [formData, setFormData] = useState<GenerateInputs>({
    topic: "Student Life",
    style: "Funny",
    format: "Stickman Story",
    duration: "15 seconds",
    language: "English",
    creativity: "Balanced",
  });

  const [customTopic, setCustomTopic] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalData = { ...formData };
    if (formData.topic === "Custom Topic") {
      finalData.topic = customTopic || "Random Idea";
    }
    onGenerate(finalData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Topic */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-300">Topic</label>
          <select name="topic" value={formData.topic} onChange={handleChange} className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 outline-none focus:border-blue-500">
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
        </div>

        {/* Custom Topic Input */}
        {formData.topic === "Custom Topic" && (
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300">Custom Topic</label>
            <input 
              type="text" 
              placeholder="E.g., When the coffee machine breaks" 
              value={customTopic} 
              onChange={(e) => setCustomTopic(e.target.value)} 
              className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 outline-none focus:border-blue-500"
            />
          </div>
        )}

        {/* Style */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-300">Style</label>
          <select name="style" value={formData.style} onChange={handleChange} className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 outline-none focus:border-blue-500">
            <option>Funny</option>
            <option>Savage</option>
            <option>Meme</option>
            <option>Relatable</option>
            <option>Emotional Funny</option>
            <option>Educational Funny</option>
          </select>
        </div>

        {/* Format */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-300">Format</label>
          <select name="format" value={formData.format} onChange={handleChange} className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 outline-none focus:border-blue-500">
            <option>Stickman Story</option>
            <option>Voiceover Reel</option>
            <option>Screen Text Reel</option>
            <option>AI Video Prompt</option>
            <option>Meme Scene</option>
          </select>
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-300">Duration</label>
          <select name="duration" value={formData.duration} onChange={handleChange} className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 outline-none focus:border-blue-500">
            <option>15 seconds</option>
            <option>30 seconds</option>
            <option>45 seconds</option>
          </select>
        </div>

        {/* Language */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-300">Language Mode</label>
          <select name="language" value={formData.language} onChange={handleChange} className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 outline-none focus:border-blue-500">
            <option>English</option>
            <option>Hinglish</option>
            <option>Simple English</option>
          </select>
        </div>

        {/* Creativity */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-300">Creativity Level</label>
          <select name="creativity" value={formData.creativity} onChange={handleChange} className="w-full bg-black border border-gray-700 text-white rounded-lg p-3 outline-none focus:border-blue-500">
            <option>Safe</option>
            <option>Balanced</option>
            <option>Wild but clean</option>
          </select>
        </div>
      </div>

      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
        Generate Reel Package
      </button>
    </form>
  );
}
