"use client";
import Link from 'next/link';
import { useState } from 'react';
import HeroSearch from './HeroSearch';
import ToolOfDayCard from './ToolOfDayCard';
import StatsStrip from './StatsStrip';

const CATEGORIES = [
  { label: 'Student Life', icon: '🎓' },
  { label: 'Coding',       icon: '💻' },
  { label: 'AI Tools',     icon: '🤖' },
  { label: 'Exams',        icon: '📝' },
  { label: 'Memes',        icon: '😂' },
  { label: 'Relatable',    icon: '🔥' },
];

export default function Hero() {
  /* #14 Active category filter state */
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  function handleCategory(label: string) {
    setActiveCategory(label === activeCategory ? null : label);
  }

  return (
    <section className="relative overflow-hidden w-full px-4 py-24">
      {/* #3 Stronger background orbs — bigger, brighter, plus cyan */}
      <div className="pointer-events-none absolute -z-10 inset-0">
        <div className="absolute -left-32 -top-32 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-blue-700/40 to-indigo-700/25 blur-[100px] animate-float" />
        <div className="absolute right-[-100px] top-16 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-purple-700/30 to-pink-700/15 blur-[80px] animate-float2 animation-delay-2000" />
        {/* Cyan/teal third orb */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[360px] h-[220px] rounded-full bg-gradient-to-t from-cyan-600/20 to-teal-500/10 blur-[90px] animate-float animation-delay-3000" />
        <div className="absolute inset-0 bg-grid opacity-40 mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left column */}
        <div className="lg:col-span-7">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6 leading-tight hero-animated">
            Turn ideas into short,&nbsp;scroll-stopping reels&nbsp;— faster.
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            AI-assisted scripts, hooks, captions and prompts tailored for creators. Pick a mood, pick a format, generate a ready-to-edit plan.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
            <Link
              href="/studio"
              className="btn-press inline-flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-glow-blue transition-all"
            >
              Start Creating
            </Link>
            {/* #23 Smooth scroll to #categories below */}
            <a
              href="#categories"
              className="inline-flex items-center justify-center text-white/90 px-5 py-3 rounded-xl border border-white/10 bg-white/4 hover:bg-white/8 text-sm font-medium transition-all"
            >
              Browse Categories ↓
            </a>
          </div>

          {/* Hero search */}
          <div className="mb-8">
            <HeroSearch />
          </div>

          {/* #65 Floating annotation badges */}
          <div className="relative mb-2">
            <div className="flex flex-wrap gap-2">
              <span className="badge-float-1 inline-flex items-center gap-1.5 bg-indigo-500/15 border border-indigo-400/25 text-indigo-300 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                AI ✨
              </span>
              <span className="badge-float-2 inline-flex items-center gap-1.5 bg-pink-500/15 border border-pink-400/25 text-pink-300 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                #trending
              </span>
              <span className="badge-float-3 inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-400/25 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                Reel-ready 🎬
              </span>
            </div>
          </div>

          <StatsStrip />
        </div>

        {/* Right column */}
        <div className="lg:col-span-5">
          <div className="relative">
            <ToolOfDayCard />
            <div className="mt-6 hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {/* #17 Quick tip cards with hover glow */}
                <div
                  className="bg-black/50 border border-white/8 rounded-2xl p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5"
                  style={{ '--tw-shadow': 'none' } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 24px rgba(99,102,241,0.22), 0 8px 20px rgba(2,6,23,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <h3 className="text-white font-semibold text-sm mb-1">💡 Quick Tip</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">Lead with emotion for higher retention.</p>
                </div>
                <div
                  className="bg-gradient-to-br from-purple-800/20 to-blue-800/10 border border-white/8 rounded-2xl p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 24px rgba(139,92,246,0.22), 0 8px 20px rgba(2,6,23,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <h3 className="text-white font-semibold text-sm mb-1">📋 Template Mode</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">Use structured templates for repeatable formats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* #23 Real categories section below hero — #14 active filter + routing */}
      <div id="categories" className="max-w-6xl mx-auto mt-16 pt-10 border-t border-white/6">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-semibold">Browse by Category</p>
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.label;
            return (
              <Link
                key={cat.label}
                href={`/studio?topic=${encodeURIComponent(cat.label)}`}
                onClick={() => handleCategory(cat.label)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600/30 border-blue-500/60 text-blue-200 shadow-glow-blue'
                    : 'bg-white/4 border-white/10 text-gray-200 hover:bg-white/8 hover:border-white/20 hover:-translate-y-0.5'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
