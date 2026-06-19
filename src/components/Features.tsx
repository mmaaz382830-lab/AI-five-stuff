"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  {
    title: "Hooks & Scripts",
    desc: "Catchy openings and engaging scripts tailored for your topic.",
    icon: "✍️",
    iconBg: "bg-indigo-500/10 ring-indigo-500/25",
    hoverClass: "hover-indigo",
  },
  {
    title: "Scene Breakdown",
    desc: "Step-by-step visual plans for stickman animations.",
    icon: "🎬",
    iconBg: "bg-pink-500/10 ring-pink-500/25",
    hoverClass: "hover-pink",
  },
  {
    title: "AI Video Prompts",
    desc: "Ready-to-use prompts for Google Flow or Veo generators.",
    icon: "🤖",
    iconBg: "bg-cyan-500/10 ring-cyan-500/25",
    hoverClass: "hover-cyan",
  },
  {
    title: "Captions & Hashtags",
    desc: "Optimized Instagram descriptions to boost your reach.",
    icon: "📱",
    iconBg: "bg-emerald-500/10 ring-emerald-500/25",
    hoverClass: "hover-emerald",
  },
];

export default function Features() {
  const [tiltStyles, setTiltStyles] = useState<Record<number, { transform: string; transition: string }>>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 5; // max ±5 deg
    const rotateY = ((x - centerX) / centerX) * 5; // max ±5 deg

    setTiltStyles((prev) => ({
      ...prev,
      [index]: {
        transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`,
        transition: "transform 100ms ease-out",
      },
    }));
  };

  const handleMouseLeave = (index: number) => {
    setTiltStyles((prev) => ({
      ...prev,
      [index]: {
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        transition: "transform 250ms ease-out",
      },
    }));
  };

  return (
    <section className="w-full py-20 px-4">
      {/* Inline CSS for hover glow variants — avoids making this a client component */}
      <style>{`
        .feature-card { transition: transform 250ms cubic-bezier(.2,.8,.2,1), box-shadow 250ms, border-color 250ms; }
        .feature-card.hover-indigo:hover  { border-color: rgba(99,102,241,0.40); box-shadow: 0 0 28px rgba(99,102,241,0.28), 0 12px 30px rgba(2,6,23,0.6); }
        .feature-card.hover-pink:hover    { border-color: rgba(236,72,153,0.40); box-shadow: 0 0 28px rgba(236,72,153,0.28), 0 12px 30px rgba(2,6,23,0.6); }
        .feature-card.hover-cyan:hover    { border-color: rgba(6,182,212,0.40);  box-shadow: 0 0 28px rgba(6,182,212,0.28),  0 12px 30px rgba(2,6,23,0.6); }
        .feature-card.hover-emerald:hover { border-color: rgba(16,185,129,0.40); box-shadow: 0 0 28px rgba(16,185,129,0.28), 0 12px 30px rgba(2,6,23,0.6); }
      `}</style>

      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold text-center mb-3">
            ✦ What you get
          </p>
          <h2 className="text-3xl font-bold font-display text-center text-white mb-12">
            Everything you need in one package
          </h2>

          {/* stagger-children on grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => handleMouseLeave(i)}
                style={tiltStyles[i]}
                className={`animate-revealCard feature-card ${f.hoverClass} bg-black/40 border border-white/8 rounded-2xl p-6 cursor-default`}
              >
                {/* Icon glow ring */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ring-1 ${f.iconBg} mb-5 text-3xl`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold font-display text-white mb-2">{f.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
