# Five Stuff AI Reel Studio

## Description
Five Stuff AI Reel Studio is a clean, minimal, and fast web application designed to help the **Five Stuff** Instagram page generate complete content packages for short-form comedy reels (especially stickman animations). 

Instead of writing scripts, hooks, and prompts from scratch, this tool provides a structured output containing everything needed to produce a high-quality reel instantly.

## Features
- **Reel Package Generator:** Instantly create a hook, script, scene breakdown, screen text, voiceover, AI video prompt, caption, and hashtags.
- **Copy to Clipboard:** One-click copying for any section of the generated package.
- **Local History & Favorites:** Automatically saves your generated reels directly to your browser's LocalStorage. Mark your best ideas as favorites.
- **Export to .txt:** Download your entire generated reel package cleanly formatted as a `.txt` file for offline use.
- **Mobile Responsive:** A clean, dark, creator-focused UI that works perfectly on both desktop and mobile devices.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Dark theme)
- **Storage:** Browser LocalStorage
- **Deployment:** Vercel (Planned)

## Project Structure
```text
five-stuff-reel-studio/
├── src/
│   ├── app/           # Next.js App Router pages (/, /studio, /history)
│   ├── components/    # Reusable UI components (Navbar, GeneratorForm, OutputCard, etc.)
│   ├── lib/           # Utility functions (templates.ts, generateReel.ts, storage.ts, exportText.ts)
│   └── types/         # TypeScript type definitions (ReelPackage)
```

## How to Run Locally

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Learning Goals
This project was built to improve skills in:
- Modern Frontend Development (Next.js & React)
- Tailwind CSS UI/UX polish
- TypeScript strict typing
- Local browser storage management
- Clean JSON/Data structuring for content generation

## Future Improvements
- **Optional AI Mode:** Integrate the Gemini API to dynamically generate fully unique scripts and prompts via a secure serverless route (Template-based generation is currently live).
- **Reel Calendar:** Plan content over a visual timeline.
- **More Formats:** Add Dakhni mode, Kannada/Hindi translations, and ElevenLabs voice script formatting.
