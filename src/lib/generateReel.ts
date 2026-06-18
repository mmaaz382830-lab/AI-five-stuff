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

export type GenerateInputs = {
  topic: string;
  style: string;
  format: string;
  duration: string;
  language: string;
  creativity: string;
};

export function generateReelFromTemplate(inputs: GenerateInputs): ReelPackage {
  // In Phase 3, we use a template-based randomization.
  // We mock the ID and createdAt since we aren't saving to LocalStorage yet.
  
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
  };
}
