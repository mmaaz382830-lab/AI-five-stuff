# Five Stuff AI Reel Studio - Implementation Plan

## 1. Final Folder Structure

```text
five-stuff-reel-studio/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts
│   ├── history/
│   │   └── page.tsx
│   ├── studio/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── CopyButton.tsx
│   ├── EmptyState.tsx
│   ├── ExportButton.tsx
│   ├── FavoriteButton.tsx
│   ├── GeneratorForm.tsx
│   ├── Hero.tsx
│   ├── HistoryList.tsx
│   ├── Navbar.tsx
│   └── OutputCard.tsx
├── lib/
│   ├── constants.ts
│   ├── exportText.ts
│   ├── generateReel.ts
│   ├── storage.ts
│   └── templates.ts
├── types/
│   └── index.ts
├── public/
├── .env.local
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 2. Phase-by-Phase Implementation Plan

*   **Phase 1: Project Setup** 
    Initialize Next.js app with TypeScript and Tailwind CSS. Clean up boilerplate, establish standard folder structure, define core types (`ReelPackage`), and set up the Git repository.
*   **Phase 2: Landing Page** 
    Build the `/` route including `Navbar`, `Hero` section, feature breakdown, and primary call-to-action ("Start Creating") matching the clean, dark UI aesthetic.
*   **Phase 3: Reel Generator** 
    Develop the `/studio` route. Build the `GeneratorForm` with required inputs (Topic, Style, Format, Duration, etc.). Implement `lib/templates.ts` for template-based offline generation, and render results using `OutputCard` and `CopyButton`.
*   **Phase 4: History and Favorites** 
    Implement `lib/storage.ts` to handle LocalStorage (`five-stuff-reel-history`). Build the `/history` route with `HistoryList`, `FavoriteButton`, and delete functionality.
*   **Phase 5: Export and Polish** 
    Implement `ExportButton` to generate `.txt` files. Polish responsive design for mobile, handle error/empty states, write the comprehensive `README.md`, and verify production build.
*   **Phase 6: AI Mode (Optional)** 
    Create the `/api/generate` route securely using the Gemini API. Add a toggle in the generator form to switch between "Template" and "AI" modes, handling loading states and JSON parsing fallbacks.

## 3. Commands Needed for Phase 1

```bash
# 1. Initialize the Next.js project (in the current directory or a new one)
npx create-next-app@latest five-stuff-reel-studio --typescript --tailwind --eslint --app --src-dir false --import-alias "@/*"

# 2. Change directory
cd five-stuff-reel-studio

# 3. Initialize Git repository (if not already initialized by create-next-app)
git init

# 4. Create the initial commit
git add .
git commit -m "chore: initial next.js setup with tailwind and typescript"

# 5. Create and checkout the first feature branch
git checkout -b feature/project-setup
```

## 4. Git Branch Plan

*   `main` (Production-ready code)
*   `feature/project-setup` (Next.js initialization, types, structure)
*   `feature/home-page` (Landing page components and styling)
*   `feature/reel-generator` (Studio form, template generation, output cards)
*   `feature/local-history` (LocalStorage integration, History page)
*   `feature/export-copy` (Text export logic, copy-to-clipboard functionality)
*   `fix/mobile-responsive` (UI polish, mobile bug fixes, empty states)
*   `feature/ai-mode` (Gemini API integration, loading states)