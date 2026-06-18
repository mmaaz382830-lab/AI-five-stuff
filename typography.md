# Typography & Design System - Five Stuff AI Reel Studio

This document outlines the corrected typographic rules, font families, dynamic modes, and Tailwind CSS classes used throughout the **Five Stuff AI Reel Studio** web app to maintain a "savage", "meme-friendly", and creator-focused dark UI.

## 1. Font Families

The application uses specific Google Fonts chosen to represent a modern, energetic, and slightly irreverent creator brand.

*   **Brand / Display / Headings:** `Bricolage Grotesque` (`var(--font-display)`)
    *   *Usage:* All `<h1-h6>` tags, Display elements, Hero text, and prominent branding. Provides a punchy, aggressive, "meme" aesthetic over generic corporate sans-serifs.
    *   *Tailwind Class:* Applied globally to heading elements in `globals.css` or via `font-display`.
*   **Primary Body:** `Inter` (`var(--font-inter)`)
    *   *Usage:* All paragraphs, UI elements, form inputs, and buttons. Chosen for maximum legibility at small sizes.
    *   *Tailwind Class:* Default `font-sans` globally applied to `<body>`.
*   **Monospace:** `JetBrains Mono` (`var(--font-mono)`)
    *   *Usage:* Exclusively restricted to "code-like" outputs that are intended strictly for copy-pasting into other technical tools (e.g., the **AI Video Prompt**).
    *   *Rule:* Do NOT use monospace for prose, scripts, or hooks.

## 2. Heading Hierarchy & Scales

Headings use tight tracking and bold weights to establish a strong visual hierarchy against the dark background.

*   **Display / Hero (H1 - Single Use Per Page)**
    *   *Style:* 5xl (mobile) to 6xl (desktop), Extra Bold, Tight Tracking.
    *   *Tailwind Classes:* `text-5xl md:text-6xl font-extrabold tracking-tight text-white`
    *   *Usage:* Main landing page hero ONLY ("Create funny Five Stuff reels...").
*   **Page Title (H1 - Single Use Per Page)**
    *   *Style:* 3xl to 4xl, Extra Bold.
    *   *Tailwind Classes:* `text-3xl md:text-4xl font-extrabold text-white`
    *   *Usage:* `/studio` and `/history` headers.
*   **Major Section (H2)**
    *   *Style:* 3xl, Bold.
    *   *Tailwind Classes:* `text-3xl font-bold text-center text-white`
    *   *Usage:* Landing page sections ("Everything you need...", "How it works").
*   **Card Title / Subsection (H3)**
    *   *Style:* LG to XL, Semi-bold.
    *   *Tailwind Classes:* `text-lg md:text-xl font-semibold text-white`
    *   *Usage:* Feature cards, "How it works" steps.

## 3. Component-Specific Typography & Semantic Output

### Generated Output Cards (`OutputCard.tsx`)
Output cards dynamically change typographic hierarchy and color based on the semantic content they display. This prevents the "wall of identical cards" problem.

*   **Hook (Headline)**
    *   *Header:* `text-amber-400`
    *   *Body:* `text-xl font-medium text-white leading-relaxed` (Larger, punchy)
*   **Reel Script (Prose)**
    *   *Header:* `text-blue-400`
    *   *Body:* `text-gray-300 leading-relaxed text-base`
*   **Scene Breakdown**
    *   *Header:* `text-emerald-400`
    *   *Body:* Standard list formatting.
*   **AI Video Prompt (Code/Technical)**
    *   *Header:* `text-purple-400`
    *   *Body:* `font-mono text-sm text-gray-400 leading-relaxed`
*   **Other Outputs (Captions/Hashtags)**
    *   *Header:* `text-gray-300` or `text-pink-400`

### History List Custom Typography
*   **Italic Quote Preview:** The hook preview in the History List uses an italicized quotation style with a left border to distinguish it from metadata.
    *   *Tailwind Classes:* `text-gray-400 text-sm mt-2 line-clamp-1 italic border-l-2 border-gray-700 pl-2`

## 4. State & System Colors

*   **Base Text Contrasts:** 
    *   *Primary:* `text-white`
    *   *Secondary:* `text-gray-300`
    *   *Tertiary/Helper:* `text-gray-400` (Avoid `gray-500` on `#0a0a0a` to maintain AA accessibility standards).
*   **Generation Modes (The "AI Accent"):**
    *   *Template Mode:* Borders and accents use `blue-900/50` and `blue-400`.
    *   *AI Mode ✨:* Borders, badges, and accents use `purple-900/50`, `border-purple-800/50`, and `text-purple-400`. This is visually reflected in the output container and the History list borders.
*   **Success (Green):**
    *   *Usage:* "Copied!" button states, "Saved ✓" confirmation toasts.
    *   *Tailwind Classes:* `bg-green-900/30 text-green-400 border-green-800`
*   **Destructive (Red):**
    *   *Usage:* Delete icons on hover, "Clear All" buttons, Error states.
    *   *Tailwind Classes:* `hover:text-red-400 hover:bg-red-900/50`, `text-red-400 bg-red-900/30`
*   **Disabled / Empty States:**
    *   *Empty State Text:* `text-gray-400 leading-relaxed`
    *   *Disabled Button:* `bg-gray-700 text-gray-400 cursor-not-allowed`