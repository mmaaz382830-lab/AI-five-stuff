# Five Stuff AI Reel Studio — Feature Backlog

> **Phase:** Polish + Branding + UI Upgrade  
> **Status:** Core functionality complete. All items below are UI/UX polish, branding, and interaction improvements.  
> **Rule:** Do NOT implement anything here until explicitly instructed.

---

## 🌌 Background & Visual Atmosphere

| # | Feature | File(s) | What to do |
|---|---|---|---|
| 1 | **Premium mesh gradient background** | `globals.css` + `layout.tsx` | Replace plain `#050608` with a multi-stop radial mesh: deep navy → dark purple → near-black. Add it to `body` |
| 2 | **Animated noise texture overlay** | `globals.css` | Add a subtle SVG noise pattern at 3% opacity over the whole page — makes dark backgrounds feel premium |
| 3 | **Stronger hero orbs** | `Hero.tsx` (lines 12–14) | Make the blur orbs bigger, brighter, and add a third one (teal/cyan tint) for depth |
| 4 | **Grid dot pattern background** | `globals.css` | Swap the current line grid (`.bg-grid`) for a dot grid — more modern/premium feel |
| 5 | **Gradient dividers between sections** | `page.tsx` | Add a `<hr>` with a horizontal gradient fade (`from-transparent via-white/8 to-transparent`) between each section |

---

## 🔠 Typography & Colors

| # | Feature | File(s) | What to do |
|---|---|---|---|
| 6 | **Raise base body text to 16–17px** | `globals.css` | `font-size: 17px` on `body` — currently 16px, bump slightly |
| 7 | **Set line-height 1.7 globally** | `globals.css` | `line-height: 1.75` on `body` — confirm consistent across all pages |
| 8 | **Hero heading gradient animation** | `Hero.tsx` line 19 | The class `hero-animated` exists — make the animation richer (more colour stops, slower cycle) |
| 9 | **Colour-coded nav active indicator** | `Navbar.tsx` line 31 | Replace `ring-1 ring-white/8` with a coloured bottom-border underline that slides in on active link |
| 10 | **Link hover colour token** | `globals.css` | Add `.link` class: `text-blue-300 hover:text-white underline-offset-4 decoration-blue-500/40` |
| 11 | **Section eyebrow text upgrade** | `SectionHeader.tsx` | Add a left accent bar: `border-l-2 border-blue-400 pl-3` to eyebrow labels |
| 12 | **Consistent border-radius token** | `globals.css` | Unify all buttons to `rounded-xl` — cards `rounded-2xl`, inputs `rounded-lg` |

---

## 🏠 Home Page

| # | Feature | File(s) | What to do |
|---|---|---|---|
| 13 | **Count-up animation on StatsStrip** | `StatsStrip.tsx` | Replace static text chips with animated numbers that count up on mount (`useEffect` + `requestAnimationFrame`) |
| 14 | **Active category filter state** | `Hero.tsx` lines 39–45 | Category chips currently do nothing. Add `useState` for active chip, highlight it, and route to `/studio?topic=...` |
| 15 | **HeroSearch placeholder rotation** | `HeroSearch.tsx` | Cycle through placeholder examples every 2s: `"exam tips…"` → `"coding meme…"` → `"stickman story…"` |
| 16 | **Tool of the Day rotating content** | `ToolOfDayCard.tsx` | Replace static text with an array of 3–5 tool tips — rotate daily using `new Date().getDay() % tips.length` |
| 17 | **Quick Tip card hover glow** | `Hero.tsx` lines 56–63 | Cards have `hover:translate-y-[-6px]` — add faint glow shadow on hover too |
| 18 | **Features section icon glow ring** | `Features.tsx` line 16 | Wrap emoji icon in a circle with tinted glow: `bg-blue-500/10 ring-1 ring-blue-500/20 rounded-2xl p-3` |
| 19 | **Features card border hover gradient** | `Features.tsx` line 15 | On hover, animate border from `border-white/6` → `border-blue-500/30` with a transition |
| 20 | **HowItWorks step connector line** | `HowItWorks.tsx` | Add a vertical dashed connector line between steps on mobile |
| 21 | **HowItWorks numbered steps glow** | `HowItWorks.tsx` line 15 | Change `01/02/03` from `text-blue-900/50` to a proper gradient text with glow |
| 22 | **CTA section background shimmer** | `CTA.tsx` line 6 | Animate a subtle shimmer/sweep on the CTA card background on hover using `@keyframes shimmer` |
| 23 | **Secondary CTA smooth scroll** | `Hero.tsx` line 30 | "Browse Categories" links to `#categories` — add `scroll-behavior: smooth` + real categories section below hero |
| 24 | **Footer upgrade** | `Footer.tsx` | Currently 8 lines bare. Add: logo, nav links, Instagram link, "Built by Maaz" credit, current year — 3 columns |

---

## 🧭 Navbar

| # | Feature | File(s) | What to do |
|---|---|---|---|
| 25 | **History saved count badge** | `Navbar.tsx` | Read `localStorage` (`five-stuff-reel-history`) and show a small pill count badge on the History link |
| 26 | **Animated hamburger → X transition** | `Navbar.tsx` lines 42–44 | Add a CSS `rotate` transition so the icon spins to X instead of snapping |
| 27 | **Navbar logo brand icon** | `Navbar.tsx` lines 22–23 | Replace `🎬` emoji with a styled SVG icon or `F5` monogram inside a gradient ring |
| 28 | **Mobile menu slide animation** | `Navbar.tsx` lines 50–63 | Add `animate-slideDown` CSS keyframe so the mobile menu slides in instead of appearing instantly |

---

## 🎬 Studio Page

| # | Feature | File(s) | What to do |
|---|---|---|---|
| 29 | **Wire Copy toast to OutputCard** | `OutputCard.tsx` + `Toast.tsx` | `CopyButton` has `onCopied` prop — pass `() => showToast("Copied!")` from OutputCard |
| 30 | **Regenerate button** | `studio/page.tsx` | Add `🔁 Regenerate` below the meta bar — re-calls `handleGenerate` with the same last inputs |
| 31 | **Keyboard shortcut Ctrl+Enter** | `GeneratorForm.tsx` | Add `onKeyDown` on the form that submits on `Ctrl+Enter` |
| 32 | **Last used settings memory** | `GeneratorForm.tsx` | `useEffect` to write `formData` to `localStorage` on change, and read it on mount |
| 33 | **Random topic 🎲 button** | `GeneratorForm.tsx` | Small dice icon next to Topic select — picks a random topic from the options array |
| 34 | **Scroll to top on new result** | `studio/page.tsx` | `useRef` on right column + `scrollIntoView({ behavior: 'smooth' })` after generation completes |
| 35 | **Page title changes while loading** | `studio/page.tsx` | `useEffect` → `document.title = "Generating… | Studio"` while `isGenerating`, then restore |
| 36 | **Word count on Script card** | `OutputCard.tsx` | When `title === "Reel Script"`, show `~N words` pill in the card header row |
| 37 | **Reading time on Voiceover** | `OutputCard.tsx` | When `title === "Voiceover"`, show `~Ns read` small badge (words ÷ 2.5) |
| 38 | **Collapse long cards** | `OutputCard.tsx` | Script and Scene Breakdown collapse to 4 lines with a "Show more ↓" toggle |
| 39 | **Auto-save option toggle** | `studio/page.tsx` | Small toggle: "Auto-save to History". When on, `handleGenerate` auto-calls `saveReel()` |

---

## 🕒 History Page

| # | Feature | File(s) | What to do |
|---|---|---|---|
| 40 | **Search/filter bar** | `HistoryList.tsx` | `useState` text filter — filter history items by topic keyword |
| 41 | **Sort toggle** | `HistoryList.tsx` | Pills: Newest / Oldest / Favorites — reorder the `getHistory()` array |
| 42 | **History count badge at top** | `history/page.tsx` | "12 reels saved" chip read from `getHistory().length` |
| 43 | **Favorites tab** | `HistoryList.tsx` | "All / ♥ Favorites" tab toggle — filter `isFavorite === true` |
| 44 | **Favorite toast** | `FavoriteButton.tsx` | Add `onToggle` callback → `showToast("Added to Favorites ♥")` |
| 45 | **Delete with undo toast** | `HistoryList.tsx` | On delete show toast with "Undo" button — 3s window before final removal |
| 46 | **Export all history** | `history/page.tsx` | "Export All (.txt)" button — concatenate all reels through `exportText.ts` |

---

## 📄 About Page

| # | Feature | File(s) | What to do |
|---|---|---|---|
| 47 | **Real GitHub link** | `about/page.tsx` line 130 | Replace `your-username` placeholder with actual GitHub URL |
| 48 | **Learning roadmap timeline** | `about/page.tsx` | Add a vertical timeline: Vibe Coder → Better Dev → AI Product Builder → AI Engineer (4 steps) |
| 49 | **Skills chip hover glow** | `about/page.tsx` lines 145–152 | Each skill chip gets a unique colour on hover (Next.js=blue, TypeScript=blue, Tailwind=cyan, Gemini=purple) |
| 50 | **Animated journey step numbers** | `about/page.tsx` lines 104–114 | `01–05` numbers animate counting up with a 0.1s stagger delay on mount |
| 51 | **Instagram badge** | `about/page.tsx` | Add `📸 @five.stuff` chip linking to Instagram |

---

## 📚 Resources Page

| # | Feature | File(s) | What to do |
|---|---|---|---|
| 52 | **StatCard value count-up** | `StatCard.tsx` + `resources/page.tsx` | Animate `value` prop as a count-up number when scrolled into view |
| 53 | **FAQ open/close animation** | `FAQ.tsx` | Wrap `<details>` content in CSS `max-height` transition so it slides open instead of snapping |
| 54 | **Roadmap item status badges** | `resources/page.tsx` lines 242–249 | Add status chips: `Planned` / `In Progress` / `Done` with colour coding next to each roadmap item |
| 55 | **Real contact links** | `resources/page.tsx` lines 216–226 | Replace `your-username` with real GitHub + add Instagram + add email |
| 56 | **Submission form copy-to-email** | `resources/page.tsx` lines 166–189 | "Copy to clipboard" button — formats all fields into one message to send via email |
| 57 | **Curation process visual flow** | `resources/page.tsx` | Replace two text cards with a mini flow: `Topic → Style → Generate → Edit → Post` with arrow connectors |

---

## 🔔 Toast / Feedback System

| # | Feature | File(s) | What to do |
|---|---|---|---|
| 58 | **Toast on Copy in OutputCard** | `OutputCard.tsx` | Wire `CopyButton`'s `onCopied` callback to `useToast` context |
| 59 | **Toast position switch on mobile** | `Toast.tsx` | On `sm:` screens move to `bottom-center` instead of `bottom-right` |
| 60 | **Toast queue limit** | `Toast.tsx` | If 3+ toasts queued, drop the oldest automatically |

---

## ✨ Animations & Micro-interactions

| # | Feature | File(s) | What to do |
|---|---|---|---|
| 61 | **Button ripple effect** | `globals.css` | CSS `::after` pseudo-element ripple on `.btn-press:active` — circle expands from click point |
| 62 | **Page fade-in on route change** | `layout.tsx` | Wrap `{children}` in `<div className="animate-fadeIn">` — already defined in `globals.css` |
| 63 | **Scroll-reveal for sections** | `Features.tsx`, `HowItWorks.tsx` | `IntersectionObserver` hook — add `opacity-0 translate-y-4` → `opacity-100` when section is visible |
| 64 | **Card tilt on mouse move** | `Features.tsx` cards | Subtle 3D tilt using `onMouseMove` → update CSS `rotateX/Y` via inline style — max ±5deg |
| 65 | **Floating badges on hero** | `Hero.tsx` | Add 2–3 small floating annotation bubbles (`"AI ✨"`, `"#trending"`) near the ToolOfDayCard |
| 66 | **Stagger on Features grid** | `Features.tsx` | Add `.stagger-children` (already in `globals.css`) to the grid container — each card reveals with delay |
| 67 | **Mobile menu smooth slide** | `Navbar.tsx` | `max-h-0 → max-h-screen` CSS transition on the mobile menu div |

---

## 🎨 Favicon & Icons

| # | Feature | File(s) | What to do |
|---|---|---|---|
| 68 | **Custom favicon** | `src/app/favicon.ico` | Replace with chosen image — convert PNG → ICO, place in `src/app/favicon.ico` |
| 69 | **Apple touch icon** | `layout.tsx` metadata | Add `icons: { apple: '/apple-touch-icon.png' }` in metadata — drop 180×180 PNG in `/public` |

---

## ⚡ Quick Wins (Under 15 lines each)

| # | Feature | File(s) | What to do |
|---|---|---|---|
| 70 | **`scroll-smooth` on html** | `globals.css` | `html { scroll-behavior: smooth; }` — makes `#categories` anchor links animate |
| 71 | **Back to top button** | `BackToTop.tsx` (new) | Fixed bottom-left `↑` button that appears after scrolling 400px |
| 72 | **`aria-live` on studio output** | `studio/page.tsx` | Add `aria-live="polite"` to output column wrapper for screen reader support |
| 73 | **Footer quick links** | `Footer.tsx` | Add Home · Studio · History · About · Resources as inline links |
| 74 | **Vercel Analytics** | `layout.tsx` | Add `<Analytics />` from `@vercel/analytics/react` for real visit data |
| 75 | **`loading.tsx` per route** | `src/app/studio/loading.tsx` | Next.js shows it automatically while the page hydrates |

---

## 📊 Priority Guide

| Priority | Features |
|---|---|
| 🔴 Do first | `#68` favicon · `#62` page fade-in · `#70` scroll-smooth · `#14` category filter · `#24` footer upgrade |
| 🟠 High value | `#13` count-up stats · `#29` copy toast · `#53` FAQ animation · `#54` roadmap badges · `#25` history badge |
| 🟡 Medium | `#47` real GitHub · `#15` search placeholder · `#30` regenerate · `#40` history search · `#38` collapse cards |
| 🟢 Polish later | `#64` card tilt · `#65` floating badges · `#61` ripple · `#63` scroll-reveal · `#74` analytics |

---

*Last updated: 2026-06-19*  
*Total features: 75*
