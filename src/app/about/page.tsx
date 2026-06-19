import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About | Five Stuff AI Reel Studio",
  description:
    "Learn why Mohammad Maaz built Five Stuff Studio as a personal creator tool for funny reel packages.",
};

const journeySteps = [
  "Researching the Five Stuff content workflow and common reel formats.",
  "Writing a PRD to define the generator, output structure, and storage needs.",
  "Building phase by phase instead of trying to ship everything at once.",
  "Using Git branches to track experiments, fixes, and portfolio polish.",
  "Deploying on Vercel so the studio can be shared and tested like a real project.",
];

const skills = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "LocalStorage",
  "Gemini API route",
  "Git/GitHub workflow",
  "Deployment with Vercel",
];

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden px-4 py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-blue-700/20 blur-3xl" />
          <div className="absolute right-[-80px] top-28 h-64 w-64 rounded-full bg-indigo-700/20 blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-6 mix-blend-overlay" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Personal creator tool
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
              About Five Stuff Studio
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Five Stuff Studio is a creator tool for generating funny reel
              packages: hooks, short scripts, scenes, captions, hashtags, and
              video prompts that fit the Five Stuff Instagram/content workflow.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/studio"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500"
              >
                Open Studio
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-lg border border-white/6 bg-white/3 px-5 py-3 text-base font-medium text-white/90 hover:bg-white/5"
              >
                View resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="About me"
              title="Built by Mohammad Maaz"
              description="This project is intentionally personal: a practical tool made for a real content workflow while learning by building."
            />
          </div>
          <div className="bg-black/40 border border-white/6 rounded-2xl p-6 lg:col-span-7">
            <p className="text-base leading-8 text-gray-300">
              Mohammad Maaz is a student and beginner/intermediate vibe coder
              learning Git, GitHub, Next.js, TypeScript, and AI engineering
              through practical projects. Five Stuff Studio was built to support
              Five Stuff content creation, especially the repetitive parts of
              turning a topic into a usable short-form reel package.
            </p>
            <p className="mt-5 text-base leading-8 text-gray-300">
              The goal is not to become a full SaaS platform. The goal is to
              make a focused creator workflow feel faster, more organized, and
              portfolio-ready.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Project journey"
            title="From idea to deployed studio"
            description="The app grew through a practical build process: research, planning, phases, source control, and deployment."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-5">
            {journeySteps.map((step, index) => (
              <div
                key={step}
                className="bg-black/40 border border-white/6 rounded-2xl p-5"
              >
                <p className="font-mono text-sm text-blue-300">
                  0{index + 1}
                </p>
                <p className="mt-4 text-sm leading-6 text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="bg-gradient-to-br from-blue-900/30 to-black/30 border border-white/6 rounded-2xl p-6 lg:col-span-5">
            <h2 className="font-display text-2xl font-bold text-white">
              GitHub and portfolio
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              The repo link can be replaced with the exact public GitHub URL
              when it is ready.
            </p>
            <a
              href="https://github.com/your-username/five-stuff-reel-studio"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-blue-300/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-100 hover:bg-blue-500/20"
            >
              View project on GitHub
            </a>
          </div>
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Skills learned"
              title="What this project practiced"
              description="The project connects frontend UI work with local persistence, API route integration, and real deployment flow."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/6 bg-black/35 px-4 py-2 text-sm font-medium text-gray-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
