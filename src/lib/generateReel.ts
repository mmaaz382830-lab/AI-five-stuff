import { ReelPackage } from "@/types";
import {
  hooks,
  scripts,
  scenesList,
  screenTexts,
  voiceovers,
  videoPrompts,
  captions,
  hashtagsList,
  getRandom
} from "./templates";

export type GenerateMode = "template" | "ai";

export type GenerateInputs = {
  topic: string;
  style: string;
  format: string;
  duration: string;
  language: string;
  creativity: string;
  mode?: GenerateMode;
};

export function generateReelFromTemplate(inputs: GenerateInputs): ReelPackage {
  return {
    id: crypto.randomUUID(),
    topic: inputs.topic,
    style: inputs.style,
    format: inputs.format,
    duration: inputs.duration,
    language: inputs.language,
    hook: getRandom(hooks),
    script: getRandom(scripts),
    scenes: getRandom(scenesList),
    screenText: getRandom(screenTexts),
    voiceover: getRandom(voiceovers),
    videoPrompt: getRandom(videoPrompts),
    caption: getRandom(captions),
    hashtags: getRandom(hashtagsList),
    isFavorite: false,
    createdAt: new Date().toISOString(),
    mode: "template",
  };
}

export async function generateReelFromAI(inputs: GenerateInputs): Promise<ReelPackage> {
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputs),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to generate AI reel");
  }

  return {
    ...data.result,
    id: crypto.randomUUID(),
    topic: inputs.topic,
    style: inputs.style,
    format: inputs.format,
    duration: inputs.duration,
    language: inputs.language,
    isFavorite: false,
    createdAt: new Date().toISOString(),
    mode: "ai",
  } as ReelPackage;
}
