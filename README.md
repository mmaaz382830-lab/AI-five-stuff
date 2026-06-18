# Five Stuff AI Reel Studio 🎥✨

A sleek, fast, and creator-focused web application built to automate and streamline the creation of short-form Instagram Reels for the **Five Stuff** comedy page. 

Creating consistent content takes time. This app eliminates creator block by instantly generating a complete "Reel Package" (hooks, scripts, scene visual breakdowns, screen text, voiceovers, AI video generator prompts, and hashtags) based on simple user inputs.

## 🌟 Core Features

### 1. Dual-Mode Reel Generator
- **Template Mode:** Generate instant, offline, template-based funny reel concepts without needing an internet connection or API keys.
- **AI Mode ✨ (Powered by Gemini):** Connects to the Google Gemini API via a secure serverless route to generate 100% unique, highly tailored, and creative JSON-structured reel packages on the fly.

### 2. The Output "Reel Package"
Every generation creates a structured, copy-paste-ready dashboard containing:
- **Hook:** Attention-grabbing opening line.
- **Reel Script:** Short, conversational, and funny dialogue.
- **Scene Breakdown:** Step-by-step visual plans tailored for Stickman animations.
- **Screen Text:** Pop-up text elements for the video edit.
- **Voiceover:** Spoken script instructions.
- **AI Video Prompt:** Ready-to-use prompts optimized for Google Flow, Veo, or Midjourney.
- **Caption & Hashtags:** Instagram-ready descriptions formatted for high reach.

### 3. Creator Workflow Tools
- **One-Click Copy:** Every generated section features an integrated `CopyButton` for rapid transfer to your editing software or notes.
- **Local History Manager:** Every generated reel can be saved securely to your browser's `LocalStorage`. Never lose a good idea.
- **Favorites System:** Mark your best concepts with a heart to keep them at the top of your mind.
- **Export to `.txt`:** Download your entire generated reel package cleanly formatted as a `.txt` file for archiving, sharing, or offline viewing.

### 4. Polished UI/UX
- **Modern Dark Theme:** A sleek, minimal interface that is easy on the eyes during late-night brainstorming sessions.
- **Mobile Responsive:** Works flawlessly on mobile browsers so you can generate content ideas on the go.
- **Graceful Error Handling:** Fallback states, loading spinners, and clear empty-state illustrations ensure a smooth user experience.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router, Server API Routes)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom Dark Theme)
- **AI Integration:** Google Gemini REST API (`gemini-2.5-flash`)
- **Storage:** Browser LocalStorage API
- **Deployment Strategy:** Vercel

---

## 📁 Project Structure

```text
five-stuff-reel-studio/
├── src/
│   ├── app/                    # Next.js App Router 
│   │   ├── api/generate/       # Secure server-side API route for Gemini AI
│   │   ├── history/            # Saved reels dashboard page
│   │   ├── studio/             # The main generator interface
│   │   ├── globals.css         # Global Tailwind directives and CSS variables
│   │   ├── layout.tsx          # Root layout with Navbar and Footer
│   │   └── page.tsx            # Landing Page
│   │
│   ├── components/             # Reusable UI Components
│   │   ├── GeneratorForm.tsx   # Complex form with Template/AI mode toggles
│   │   ├── OutputCard.tsx      # Display cards with integrated copy buttons
│   │   ├── HistoryList.tsx     # Expandable accordion list for saved reels
│   │   └── ...                 # Export buttons, Navbars, Hero sections, etc.
│   │
│   ├── lib/                    # Core Logic and Utilities
│   │   ├── generateReel.ts     # Data routing for AI vs Template generation
│   │   ├── templates.ts        # Static fallback data for offline mode
│   │   ├── storage.ts          # Safe LocalStorage CRUD wrappers
│   │   └── exportText.ts       # Blob/File generation logic for .txt exports
│   │
│   └── types/                  # TypeScript Interfaces
│       └── index.ts            # Defines the ReelPackage schema
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18 or higher)
- Optional: A [Google Gemini API Key](https://aistudio.google.com/) (Required only for AI Mode).

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd five-stuff-reel-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Copy the example environment file:
     ```bash
     cp .env.example .env.local
     ```
   - Open `.env.local` and paste your Gemini API key:
     ```env
     GEMINI_API_KEY=your_actual_api_key_here
     ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the app**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎯 Learning Goals Achieved
This project was successfully executed to build skills in:
- Component-driven architecture using Next.js App Router.
- Building complex, responsive, dark-mode UIs with Tailwind CSS.
- Securely integrating third-party AI APIs (Google Gemini) via serverless routes without exposing keys on the frontend.
- Enforcing strict JSON outputs from Large Language Models.
- Managing persistent client-side data using browser LocalStorage.
- Creating native browser file downloads (Blob/URL creation).

---

## 🔮 Future Improvements
While the core product is complete and functional, future iterations could include:
- **Reel Calendar:** A visual kanban or calendar view to plan content schedules over the month.
- **Extended Formats:** Adding regional language modes (e.g., Dakhni, Kannada) and specific output formats mapped to ElevenLabs TTS scripting requirements.
- **Batch Generation:** Allow the AI to generate 5 distinct concepts at once rather than a single package.
- **Image Generation:** Hooking the AI video prompt directly into an API to generate storyboard thumbnails automatically.