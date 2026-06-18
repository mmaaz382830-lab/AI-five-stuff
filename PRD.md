# PRD: Five Stuff AI Reel Studio

## 1. Project Name

**Five Stuff AI Reel Studio**

## 2. Project Type

AI-assisted short-form content generation web app.

## 3. Project Goal

The goal of this project is to build a simple, useful, and polished web app that helps generate Instagram Reel content for the **Five Stuff** page.

The app should help create funny, relatable, and structured reel packages for AI-generated videos, especially stickman-style comedy reels.

This project should improve skills in:

* Frontend development
* AI prompt structuring
* JSON-style content generation
* Git/GitHub workflow
* UI/UX polish
* Content creation automation

The project should be completed in **2–3 days** and should stay small, focused, and useful.

---

## 4. Target User

The main user is the creator of the **Five Stuff** Instagram page.

The user wants to create short funny reels about:

* Student life
* Coding life
* AI tools
* Exams
* Friends
* Internet habits
* Daily life chaos
* Tech memes
* Beginner developer struggles

---

## 5. Problem Statement

Creating Instagram reels consistently takes time because every reel needs:

* A good hook
* A short script
* Scene-by-scene idea
* Screen text
* Voiceover
* AI video prompt
* Caption
* Hashtags

Without a clear system, ideas become random and inconsistent.

This app solves that by generating a complete reel package from simple user inputs.

---

## 6. Core Product Idea

The user selects a few options such as topic, style, format, and duration.

Based on the selected inputs, the app generates a structured reel package.

The generated package should include:

1. Hook
2. Short reel script
3. Scene-by-scene breakdown
4. Screen text
5. Voiceover
6. Google Flow / Veo-style video prompt
7. Caption
8. Hashtags

---

## 7. Project Scope

### In Scope

The project should include:

* Landing section
* Reel generator form
* Generated output cards
* Copy buttons
* Local history
* Favorite scripts
* Export as `.txt`
* Clean dark UI
* Mobile responsive layout
* Optional AI mode through API route

### Out of Scope

The project should NOT include:

* Full social media scheduler
* Instagram direct posting
* User authentication
* Payment system
* Complex dashboard
* Team collaboration
* Real video generation
* Large SaaS features

This project is a focused content-generation tool, not a full SaaS platform.

---

## 8. Tech Stack

Use a simple modern stack:

* **Next.js**
* **TypeScript**
* **Tailwind CSS**
* **LocalStorage**
* **Optional Gemini API**
* **Vercel deployment**
* **GitHub for version control**

Do not add unnecessary libraries unless they clearly improve the project.

---

## 9. Main Pages

### 9.1 Home Page `/`

The home page should explain the app clearly.

It should include:

* App name
* Short tagline
* Main CTA button: “Start Creating”
* Short feature preview
* Simple explanation of how it works

Suggested headline:

**Create funny Five Stuff reels in seconds.**

Suggested subheading:

**Generate hooks, scripts, screen text, captions, hashtags, and AI video prompts for your Instagram reels.**

---

### 9.2 Generator Page `/studio`

This is the main tool page.

It should include input controls for:

* Topic
* Reel style
* Video format
* Duration
* Language mode
* Creativity level

After clicking generate, the app should show the reel package.

---

### 9.3 History Page `/history`

This page should show saved generated scripts from LocalStorage.

Each item should show:

* Topic
* Style
* Created date
* Short preview
* View button
* Delete button
* Favorite button

---

## 10. Input Fields

The generator form should include:

### Topic

Options:

* Student Life
* Coding Life
* AI Tools
* Exam Stress
* Friends
* Family
* Internet Habits
* Daily Chaos
* Custom Topic

### Style

Options:

* Funny
* Savage
* Meme
* Relatable
* Emotional Funny
* Educational Funny

### Format

Options:

* Stickman Story
* Voiceover Reel
* Screen Text Reel
* AI Video Prompt
* Meme Scene

### Duration

Options:

* 15 seconds
* 30 seconds
* 45 seconds

### Language Mode

Options:

* English
* Hinglish
* Simple English

### Creativity Level

Options:

* Safe
* Balanced
* Wild but clean

---

## 11. Output Structure

Every generated result should follow this structure:

### 11.1 Hook

A short attention-grabbing opening line.

Example:

**When your code works but you don’t know why.**

### 11.2 Reel Script

A short script written in simple, funny language.

### 11.3 Scene Breakdown

Scene-by-scene plan.

Example:

* Scene 1: Stickman opens laptop confidently.
* Scene 2: Code runs successfully.
* Scene 3: Stickman gets scared instead of happy.
* Scene 4: Screen text says: “Don’t touch anything now.”

### 11.4 Screen Text

Short text that appears on screen during the reel.

### 11.5 Voiceover

Voiceover lines for the reel.

### 11.6 AI Video Prompt

A structured prompt for Google Flow / Veo-style generation.

The prompt should include:

* Vertical 9:16 format
* Stickman animation style
* Clean background
* Funny expressions
* Fast pacing
* No complex camera movement
* Instagram Reel style

### 11.7 Caption

A short Instagram caption.

### 11.8 Hashtags

Relevant hashtags for reach.

---

## 12. Generation Logic

### Version 1: Template-Based Generation

The first version should work without an AI API.

Use predefined templates based on:

* Topic
* Style
* Format
* Duration

This keeps the project free and easy to complete.

### Version 2: Optional AI Mode

After the template version works, add optional AI generation.

AI mode should:

* Send selected inputs to a secure API route
* Generate structured JSON
* Return clean output
* Handle loading and errors
* Never expose API key on frontend

API key must be stored in:

```env
GEMINI_API_KEY=your_api_key_here
```

The frontend should call:

```txt
/api/generate
```

The app should still work even if AI mode is disabled.

---

## 13. UI Design Direction

The UI should feel:

* Modern
* Dark
* Clean
* Slightly playful
* Creator-focused
* Fast and simple

Suggested visual style:

* Dark background
* Soft gradients
* Rounded cards
* Clear buttons
* Simple icons
* Accent color: electric blue, purple, or amber
* Smooth hover effects
* No messy animations

The design should look like a useful creator tool, not a boring form.

---

## 14. Components

Recommended component structure:

```txt
components/
  Navbar.tsx
  Hero.tsx
  GeneratorForm.tsx
  OutputCard.tsx
  CopyButton.tsx
  HistoryList.tsx
  FavoriteButton.tsx
  ExportButton.tsx
  EmptyState.tsx
```

Recommended utility structure:

```txt
lib/
  templates.ts
  generateReel.ts
  storage.ts
  exportText.ts
  constants.ts
```

Recommended app structure:

```txt
app/
  page.tsx
  studio/
    page.tsx
  history/
    page.tsx
  api/
    generate/
      route.ts
```

---

## 15. Data Model

A generated reel item should follow this shape:

```ts
type ReelPackage = {
  id: string;
  topic: string;
  style: string;
  format: string;
  duration: string;
  language: string;
  hook: string;
  script: string;
  scenes: string[];
  screenText: string[];
  voiceover: string;
  videoPrompt: string;
  caption: string;
  hashtags: string[];
  isFavorite: boolean;
  createdAt: string;
};
```

---

## 16. LocalStorage Requirements

The app should save generated reel packages in LocalStorage.

Required actions:

* Save generated reel
* View saved reels
* Mark as favorite
* Delete saved reel
* Clear all history

LocalStorage key:

```txt
five-stuff-reel-history
```

---

## 17. Export Feature

The user should be able to export a generated reel package as a `.txt` file.

The exported file should include:

* Topic
* Style
* Duration
* Hook
* Script
* Scenes
* Screen text
* Voiceover
* AI video prompt
* Caption
* Hashtags

File name format:

```txt
five-stuff-reel-[topic]-[date].txt
```

---

## 18. Copy Feature

Each output card should have a copy button.

Copy buttons needed for:

* Hook
* Script
* Scene breakdown
* Screen text
* Voiceover
* Video prompt
* Caption
* Hashtags
* Full package

After copying, show a small success message like:

```txt
Copied!
```

---

## 19. Error Handling

The app should handle:

* Empty custom topic
* AI API failure
* No saved history
* Browser LocalStorage unavailable
* Invalid AI response
* Slow generation

Use friendly messages.

Example:

```txt
Something went wrong. Try again or use template mode.
```

---

## 20. Success Criteria

The project is successful if:

* User can generate a full reel package
* Output is useful for Five Stuff content
* Copy buttons work
* History works
* Favorites work
* Export works
* Mobile layout looks good
* Project is deployed on Vercel
* GitHub repo has clean README
* Build command runs without errors

---

## 21. Git/GitHub Workflow

Do not build everything directly on `main`.

Use branches:

```txt
feature/project-setup
feature/home-page
feature/reel-generator
feature/local-history
feature/export-copy
feature/ai-mode
fix/mobile-responsive
```

Each branch should have clear commits.

Example commits:

```txt
Add project setup
Build landing page
Create reel generator form
Add template generation logic
Add local history storage
Add export and copy actions
Polish mobile layout
```

After each feature:

1. Push branch
2. Create pull request
3. Review changes
4. Merge into main

---

## 22. Development Phases

### Phase 1: Project Setup

Set up:

* Next.js
* TypeScript
* Tailwind CSS
* Basic folder structure
* GitHub repo
* Initial commit

### Phase 2: Landing Page

Build:

* Navbar
* Hero section
* Feature section
* CTA section
* Footer

### Phase 3: Reel Generator

Build:

* Input form
* Template-based generator
* Output cards
* Copy buttons

### Phase 4: History and Favorites

Build:

* Save to LocalStorage
* History page
* Favorite toggle
* Delete item

### Phase 5: Export and Polish

Build:

* Export as `.txt`
* Mobile responsive design
* Empty states
* Error states
* README
* Vercel deployment

### Optional Phase 6: AI Mode

Build:

* API route
* Gemini integration
* Structured JSON response
* Loading state
* Error fallback

---

## 23. README Requirements

The GitHub README should include:

* Project name
* Short description
* Features
* Tech stack
* Screenshots
* How to run locally
* Environment variables
* Project structure
* Learning goals
* Future improvements

---

## 24. Future Improvements

Possible future features:

* Reel calendar
* Voiceover tone selector
* Batch generate 5 ideas
* Export as Markdown
* Save prompts by category
* Add Dakhni mode
* Add Kannada/Hindi mode
* Add ElevenLabs voice script format
* Add Google Flow prompt presets
* Add Instagram caption style selector

Do not build these in the first version unless the main app is complete.

---

## 25. Final Rule

The app must stay focused.

This project should not become a large SaaS.

The main goal is:

**Generate useful reel packages for Five Stuff quickly and cleanly.**

AI should help execute the project, but the creator owns the vision, content style, and final polish.
