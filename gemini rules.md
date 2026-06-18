# Gemini Agent Rules for Five Stuff AI Reel Studio

You are the coding agent for this project.

## Source of truth
- Always read `PRD.md` before planning or coding.
- Do not add features outside the PRD unless asked.
- Keep the app small and focused.

## Build rules
- Use Next.js, TypeScript, Tailwind CSS.
- Use LocalStorage first.
- Do not add authentication.
- Do not add payments.
- Do not build a large SaaS dashboard.
- Optional AI mode comes only after template mode works.

## Workflow rules
- Work phase by phase.
- Before editing files, explain the plan.
- After each phase, run:
  npm run build
- Fix build errors before moving to the next phase.
- Keep code clean and beginner/intermediate friendly.

## Git rules
- Do not work directly on main for features.
- Use feature branches.
- Make clear commits.