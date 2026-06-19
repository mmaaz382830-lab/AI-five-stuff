"use client";

import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    num: "01",
    title: "Pick a Topic",
    desc: "Choose from Student Life, Coding, AI, or enter your own custom idea.",
    gradient: "from-blue-500 to-indigo-500",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    num: "02",
    title: "Select Style & Format",
    desc: "Want it savage or relatable? A voiceover or screen-text reel? You decide.",
    gradient: "from-purple-500 to-pink-500",
    glow: "rgba(168,85,247,0.3)",
  },
  {
    num: "03",
    title: "Generate & Copy",
    desc: "Get a full reel package instantly. Copy what you need and start creating.",
    gradient: "from-cyan-500 to-teal-400",
    glow: "rgba(6,182,212,0.3)",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-20 px-4 bg-black/20">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold text-center mb-3">
            ✦ Simple process
          </p>
          <h2 className="text-3xl font-bold font-display text-center text-white mb-12">
            How it works
          </h2>

          {/* Steps — #20 mobile dashed connector via relative positioning */}
          <div className="relative space-y-0">
            {STEPS.map((s, i) => (
              <div key={i} className="relative flex gap-0 md:gap-6">
                {/* #20 Left connector column — visible on mobile */}
                <div className="flex flex-col items-center mr-5 md:hidden" aria-hidden="true">
                  {/* #21 Gradient number circle */}
                  <div
                    className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white font-black font-display text-lg shadow-md`}
                    style={{ boxShadow: `0 0 16px ${s.glow}` }}
                  >
                    {s.num}
                  </div>
                  {/* dashed vertical connector — not shown after last item */}
                  {i < STEPS.length - 1 && (
                    <div className="w-0.5 flex-1 my-1 border-l-2 border-dashed border-white/15 min-h-[32px]" />
                  )}
                </div>

                {/* Card */}
                <div className="mb-6 flex-1 flex flex-col md:flex-row gap-6 items-start md:items-center bg-black/30 border border-white/8 p-6 rounded-2xl hover:border-white/16 transition-all duration-300">
                  {/* #21 Desktop gradient number */}
                  <div
                    className={`hidden md:flex shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${s.gradient} items-center justify-center text-white font-black font-display text-xl shadow-md`}
                    style={{ boxShadow: `0 0 20px ${s.glow}` }}
                  >
                    {s.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-display text-white mb-1.5">{s.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
