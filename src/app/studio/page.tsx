"use client";

import { useState } from "react";
import GeneratorForm from "@/components/GeneratorForm";
import OutputCard from "@/components/OutputCard";
import ExportButton from "@/components/ExportButton";
import { generateReelFromTemplate, GenerateInputs } from "@/lib/generateReel";
import { ReelPackage } from "@/types";
import { saveReel } from "@/lib/storage";

export default function StudioPage() {
  const [result, setResult] = useState<ReelPackage | null>(null);
  const [saved, setSaved] = useState(false);

  const handleGenerate = (inputs: GenerateInputs) => {
    // In Phase 3, this is an offline template generation
    const generated = generateReelFromTemplate(inputs);
    setResult(generated);
    setSaved(false); // Reset saved state on new generation
  };

  const handleSave = () => {
    if (result) {
      saveReel(result);
      setSaved(true);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Reel Studio</h1>
        <p className="text-gray-400">Select your preferences to generate a complete reel package.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form */}
        <div className="lg:col-span-4">
          <GeneratorForm onGenerate={handleGenerate} />
        </div>

        {/* Right Column: Results */}
        <div className="lg:col-span-8">
          {!result ? (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-gray-800 rounded-2xl bg-gray-900/50 text-gray-500 p-8 text-center">
              <span className="text-4xl mb-4">✨</span>
              <p>Your generated reel package will appear here.</p>
              <p className="text-sm mt-2">Fill out the form and hit generate to get started.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-blue-400 font-semibold mr-2">Topic:</span>
                  <span className="text-white mr-3">{result.topic}</span>
                  <span className="text-xs bg-blue-900 text-blue-200 px-3 py-1 rounded-full inline-block mt-2 sm:mt-0">
                    Template Mode
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ExportButton reel={result} />
                  <button
                    onClick={handleSave}
                    disabled={saved}
                    className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                      saved 
                        ? "bg-green-900/40 text-green-400 border border-green-800 cursor-not-allowed" 
                        : "bg-gray-800 hover:bg-gray-700 text-white"
                    }`}
                  >
                    {saved ? "Saved ✓" : "Save"}
                  </button>
                </div>
              </div>

              <OutputCard title="Hook" content={result.hook} />
              <OutputCard title="Reel Script" content={result.script} />
              <OutputCard title="Scene Breakdown" content={result.scenes} />
              <OutputCard title="Screen Text" content={result.screenText} />
              <OutputCard title="Voiceover" content={result.voiceover} />
              <OutputCard title="AI Video Prompt" content={result.videoPrompt} />
              <OutputCard title="Caption" content={result.caption} />
              <OutputCard title="Hashtags" content={result.hashtags.join(" ")} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
