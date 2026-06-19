import { ReelPackage } from "@/types";

export function exportReelToTxt(reel: ReelPackage) {
  // Format the date for the filename
  const dateStr = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const safeTopic = reel.topic.replace(/[^a-z0-9]/gi, '-').toLowerCase().replace(/-+/g, '-').replace(/^-|-$/g, '');
  const fileName = `five-stuff-reel-${safeTopic || 'custom'}-${dateStr}.txt`;

  // Format array fields
  const formatArray = (arr: string[]) => arr.map(item => `- ${item}`).join('\n');

  // Build the text content
  const content = `FIVE STUFF AI REEL STUDIO - EXPORT
===================================
Generated: ${new Date(reel.createdAt).toLocaleString()}

--- METADATA ---
Topic: ${reel.topic}
Style: ${reel.style}
Format: ${reel.format}
Duration: ${reel.duration}
Language: ${reel.language}

--- 1. HOOK ---
${reel.hook}

--- 2. REEL SCRIPT ---
${reel.script}

--- 3. SCENE BREAKDOWN ---
${formatArray(reel.scenes)}

--- 4. SCREEN TEXT ---
${formatArray(reel.screenText)}

--- 5. VOICEOVER ---
${reel.voiceover}

--- 6. AI VIDEO PROMPT ---
${reel.videoPrompt}

--- 7. CAPTION ---
${reel.caption}

--- 8. HASHTAGS ---
${reel.hashtags.join(" ")}
`;

  // Create and trigger the download
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  
  // Cleanup
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportAllReelsToTxt(reels: ReelPackage[]) {
  // Format the date for the filename
  const dateStr = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const fileName = `five-stuff-reels-all-history-${dateStr}.txt`;

  // Build the text content
  const content = `FIVE STUFF AI REEL STUDIO - ALL HISTORY EXPORT (${reels.length} reels)
======================================================================
Exported: ${new Date().toLocaleString()}

` + reels.map((reel, index) => {
    // Format array fields
    const formatArray = (arr: string[]) => arr.map(item => `- ${item}`).join('\n');

    return `--------------------------------------------------
REEL #${index + 1}: ${reel.topic.toUpperCase()}
--------------------------------------------------
Generated: ${new Date(reel.createdAt).toLocaleString()}
Style: ${reel.style} | Format: ${reel.format} | Duration: ${reel.duration} | Language: ${reel.language}

--- 1. HOOK ---
${reel.hook}

--- 2. REEL SCRIPT ---
${reel.script}

--- 3. SCENE BREAKDOWN ---
${formatArray(reel.scenes)}

--- 4. SCREEN TEXT ---
${formatArray(reel.screenText)}

--- 5. VOICEOVER ---
${reel.voiceover}

--- 6. AI VIDEO PROMPT ---
${reel.videoPrompt}

--- 7. CAPTION ---
${reel.caption}

--- 8. HASHTAGS ---
${reel.hashtags.join(" ")}
`;
  }).join("\n\n\n");

  // Create and trigger the download
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  
  // Cleanup
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
