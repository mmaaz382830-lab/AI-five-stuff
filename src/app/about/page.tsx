"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

const journeySteps = [
  "Researching the Five Stuff content workflow and common reel formats.",
  "Writing a PRD to define the generator, output structure, and storage needs.",
  "Building phase by phase instead of trying to ship everything at once.",
  "Using Git branches to track experiments, fixes, and portfolio polish.",
  "Deploying on Vercel so the studio can be shared and tested like a real project.",
];

const skills = [
  { name: "Next.js", glow: "hover:border-blue-500/80 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]" },
  { name: "TypeScript", glow: "hover:border-blue-500/80 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]" },
  { name: "Tailwind CSS", glow: "hover:border-cyan-500/80 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.35)]" },
  { name: "LocalStorage", glow: "hover:border-emerald-500/80 hover:bg-emerald-500/10 hover:text-emerald-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.35)]" },
  { name: "Gemini API route", glow: "hover:border-purple-500/80 hover:bg-purple-500/10 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)]" },
  { name: "Git/GitHub workflow", glow: "hover:border-orange-500/80 hover:bg-orange-500/10 hover:text-orange-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.35)]" },
  { name: "Deployment with Vercel", glow: "hover:border-white/40 hover:bg-white/5 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" },
];

const timelineSteps = [
  {
    title: "Vibe Coder",
    desc: "Writing code by copying examples, experimenting, and getting things working by feeling the vibe.",
    badge: "Completed",
    color: "border-blue-500/50 bg-blue-950/20 text-blue-300",
  },
  {
    title: "Better Developer",
    desc: "Learning source control, structuring code cleanly, persistent data layout (LocalStorage), and deploying responsive pages.",
    badge: "Completed",
    color: "border-cyan-500/50 bg-cyan-950/20 text-cyan-300",
  },
  {
    title: "AI Product Builder",
    desc: "Integrating Gemini APIs, designing prompts, and adapting tools for real creators' workflows.",
    badge: "In Progress",
    color: "border-purple-500/50 bg-purple-950/20 text-purple-300",
  },
  {
    title: "AI Engineer",
    desc: "Structuring complex LLM pipelines, handling token limits/costs, rate limiting, and building productions systems.",
    badge: "Future Goal",
    color: "border-gray-700 bg-gray-900/40 text-gray-400",
  },
];

function StepNumber({ target, delay }: { target: number; delay: number }) {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setNum(current);
        if (current >= target) {
          clearInterval(interval);
        }
      }, 70);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [target, delay]);

  return <span>0{num}</span>;
}

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
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
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/studio"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500"
              >
                Open Studio
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-xl border border-white/6 bg-white/3 px-5 py-3 text-base font-medium text-white/90 hover:bg-white/5 transition-all"
              >
                View resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="px-4 py-16">
        <ScrollReveal>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="About me"
                title="Built by Mohammad Maaz"
                description="This project is intentionally personal: a practical tool made for a real content workflow while learning by building."
              />
            </div>
            <div className="bg-black/40 border border-white/6 rounded-2xl p-6 lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="text-base leading-8 text-gray-300">
                  Mohammad Maaz is a student and beginner/intermediate vibe coder
                  learning Git, GitHub, Next.js, TypeScript, and AI engineering
                  through building practical, creator-focused projects. Five Stuff Studio was built to support
                  Five Stuff content creation, especially the repetitive parts of
                  turning a topic into a usable short-form reel package.
                </p>
                <p className="mt-5 text-base leading-8 text-gray-300">
                  The goal is not to become a full commercial SaaS platform, but rather to
                  make a focused creator workflow feel faster, more organized, and
                  portfolio-ready.
                </p>
              </div>

              {/* Instagram and GitHub links inside developer card */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-3">
                <a
                  href="https://github.com/mmaaz382830-lab"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/6 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200 hover:bg-white/10 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub Profile
                </a>
                <a
                  href="https://www.instagram.com/five.stuff"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-300 hover:bg-pink-500/20 hover:text-pink-100 transition-all"
                >
                  📸 @five.stuff
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Learning Roadmap Timeline Section */}
      <section className="px-4 py-16 bg-black/10">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Growth Roadmap"
              title="Learning Journey Timeline"
              description="A mapping of Mohammad Maaz's path as a programmer, showing the evolution from typing visual code to scaling intelligent products."
            />

            {/* Vertical timeline layout */}
            <div className="relative mt-12 max-w-3xl mx-auto pl-6 sm:pl-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-600 before:via-purple-600 before:to-gray-800">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="relative mb-10 last:mb-0">
                  {/* Timeline point */}
                  <div className={`absolute -left-[27px] sm:-left-[31px] top-1.5 w-4 h-4 rounded-full border-2 bg-black z-10 transition-all ${
                    step.badge.includes("Completed") ? "border-blue-500 scale-110 shadow-[0_0_10px_rgba(59,130,246,0.5)]" : step.badge.includes("Progress") ? "border-purple-500 animate-pulse scale-110 shadow-[0_0_10px_rgba(168,85,247,0.5)]" : "border-gray-700"
                  }`} />
                  
                  {/* Timeline item body */}
                  <div className="bg-black/40 border border-white/6 rounded-xl p-5 hover:border-white/10 transition-all duration-350">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="font-display text-lg font-bold text-white">{step.title}</h4>
                      <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold tracking-wide border ${step.color}`}>
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Project Journey Section */}
      <section className="px-4 py-16">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Project journey"
              title="From idea to deployed studio"
              description="The app grew through a practical build process: research, planning, phases, source control, and deployment."
            />
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-5">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-black/40 border border-white/6 rounded-2xl p-5 flex flex-col justify-between hover:border-white/12 transition-all duration-300"
                >
                  <p className="font-mono text-xl text-blue-300 font-extrabold">
                    {mounted ? (
                      <StepNumber target={index + 1} delay={index * 150} />
                    ) : (
                      <span>0{index + 1}</span>
                    )}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Skills & Repos Section */}
      <section className="px-4 py-16 mb-8">
        <ScrollReveal>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="bg-gradient-to-br from-blue-900/20 to-black/30 border border-white/6 rounded-2xl p-6 lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  GitHub Repository
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  This project&apos;s code repository is fully public and documented on GitHub. Feel free to explore the code, review commits, and see the full system architecture!
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="https://github.com/mmaaz382830-lab"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-300/30 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-100 hover:bg-blue-500/20 transition-all hover:scale-105 duration-200"
                >
                  View project on GitHub
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Skills practiced"
                title="Technology & Engineering"
                description="Developing this app provided hands-on practice with frontend, states, API routing, and hosting."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-full border border-white/6 bg-black/35 px-4 py-2 text-sm font-medium text-gray-300 cursor-default transition-all duration-300 ${skill.glow}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
