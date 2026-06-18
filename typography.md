# Typography Design System - Five Stuff AI Reel Studio

This document outlines the typographic rules, font families, and Tailwind CSS classes used throughout the **Five Stuff AI Reel Studio** web app to maintain a clean, modern, and creator-focused dark UI.

## 1. Font Families

The application uses the [Geist](https://vercel.com/font) typeface family provided by Vercel via `next/font/google`, optimizing for readability and a modern aesthetic.

*   **Primary Sans-Serif:** `Geist` (`var(--font-geist-sans)`)
    *   *Usage:* All headings, body text, UI elements, and buttons.
    *   *Fallback:* `Arial, Helvetica, sans-serif`
*   **Monospace:** `Geist Mono` (`var(--font-geist-mono)`)
    *   *Usage:* Exclusively used for the generated content output inside the Output Cards to mimic a script/code editor feel.
    *   *Tailwind Class:* `font-mono`

## 2. Heading Hierarchy

Headings use tight tracking and bold weights to establish a strong visual hierarchy against the dark background.

*   **Display / Hero (H1)**
    *   *Style:* 5xl (mobile) to 6xl (desktop), Extra Bold, Tight Tracking.
    *   *Tailwind Classes:* `text-5xl md:text-6xl font-extrabold tracking-tight text-white`
    *   *Usage:* Main landing page hero ("Create funny Five Stuff reels...").
*   **Page Title / Major Section (H1/H2)**
    *   *Style:* 3xl to 4xl, Bold/Extra Bold.
    *   *Tailwind Classes:* `text-3xl md:text-4xl font-extrabold text-white`
    *   *Usage:* `/studio` and `/history` page headers, Landing page section headers ("Everything you need...").
*   **Card Title / Subsection (H2/H3)**
    *   *Style:* xl to 2xl, Semi-bold.
    *   *Tailwind Classes:* `text-xl font-semibold text-white` or `text-2xl font-semibold text-white`
    *   *Usage:* Feature cards, "How it works" steps.
*   **Output / Component Header (H3)**
    *   *Style:* Large, Bold, Accent Colored.
    *   *Tailwind Classes:* `text-lg font-bold text-blue-400`
    *   *Usage:* Output card headers (e.g., "Hook", "Reel Script").

## 3. Body Text

Body text is prioritized for legibility. Secondary text uses gray scales to reduce eye strain and contrast perfectly with the `#0a0a0a` background.

*   **Lead Paragraph / Subtitle**
    *   *Style:* Large to XL, Regular weight.
    *   *Tailwind Classes:* `text-lg md:text-xl text-gray-400`
    *   *Usage:* Hero subtitles, major page descriptions.
*   **Default Body Text**
    *   *Style:* Base size (16px), Regular weight.
    *   *Tailwind Classes:* `text-base text-gray-300` (or `text-white` for emphasis)
    *   *Usage:* General descriptions, standard text.
*   **Small / Helper Text**
    *   *Style:* Small (14px), Regular or Medium weight.
    *   *Tailwind Classes:* `text-sm text-gray-400` or `text-sm text-gray-500`
    *   *Usage:* Form labels, helper text, timestamps in history.
*   **Micro / Badge Text**
    *   *Style:* Extra Small (12px), Medium weight.
    *   *Tailwind Classes:* `text-xs px-2 py-1`
    *   *Usage:* Tags, mode indicators ("Template Mode").

## 4. Component-Specific Typography

*   **Buttons & CTAs**
    *   *Primary/Large:* `text-lg font-bold` (e.g., "Start Creating" hero button).
    *   *Standard/Form:* `font-bold` (e.g., "Generate Reel Package").
    *   *Small/Utility:* `text-sm font-medium` (e.g., Navbar links, Export/Copy buttons).
*   **Form Labels**
    *   *Style:* `text-sm font-semibold text-gray-300`
*   **Generated Output Data (Monospace)**
    *   *Style:* `font-mono text-sm text-gray-300`
    *   *Usage:* The actual generated script, hook, and prompt text inside the dark gray cards.

## 5. Text Colors (Dark Theme Palette)

*   **Primary / High Emphasis:** `text-white` / `text-[#ededed]`
*   **Secondary / Medium Emphasis:** `text-gray-300`
*   **Tertiary / Low Emphasis:** `text-gray-400`, `text-gray-500`
*   **Primary Accent:** `text-blue-500`, `text-blue-400`
*   **AI Accent:** `text-purple-400`
*   **Success:** `text-green-400`
*   **Destructive / Error:** `text-red-400`, `text-red-500`
