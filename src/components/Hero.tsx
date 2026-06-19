"use client";
import Link from 'next/link';
import HeroSearch from './HeroSearch';
import ToolOfDayCard from './ToolOfDayCard';
import StatsStrip from './StatsStrip';

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full px-4 py-20">
      {/* background orbs */}
      <div className="pointer-events-none absolute -z-10 inset-0">
        <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-gradient-to-br from-blue-700/30 to-purple-700/20 blur-3xl animate-float" />
        <div className="absolute right-[-80px] top-24 w-56 h-56 rounded-full bg-gradient-to-br from-pink-700/20 to-yellow-600/10 blur-2xl animate-float animation-delay-2000" />
        <div className="absolute inset-0 bg-grid opacity-6 mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6 leading-tight hero-animated">
            Turn ideas into short, scroll-stopping reels — faster.
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-6 leading-relaxed" style={{lineHeight:1.7}}>
            AI-assisted scripts, hooks, captions and prompts tailored for creators. Pick a mood, pick a format, generate a ready-to-edit plan.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
            <Link href="/studio" className="inline-flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-3 rounded-2xl text-lg font-semibold shadow-lg transition-transform transform hover:-translate-y-0.5 active:translate-y-0.5">
              Start Creating
            </Link>
            <Link href="#categories" className="inline-flex items-center justify-center text-white/90 px-4 py-2 rounded-lg border border-white/6 bg-white/3 hover:bg-white/5 text-sm font-medium">
              Browse Categories
            </Link>
          </div>

          <div className="mb-6">
            <HeroSearch />
          </div>

          <div id="categories" className="flex flex-wrap gap-3 mb-6">
            {['Student Life','Coding','AI Tools','Exams','Memes'].map((c) => (
              <button key={c} className="px-3 py-1.5 rounded-full bg-white/4 text-sm text-gray-100 hover:bg-white/6 transition-all transform hover:-translate-y-0.5">
                {c}
              </button>
            ))}
          </div>

          <StatsStrip />
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <ToolOfDayCard />
            <div className="mt-6 hidden lg:block">
              {/* subtle floating cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 border border-white/6 rounded-2xl p-4 backdrop-blur-sm shadow-sm hover:translate-y-[-6px] transition-transform">
                  <h3 className="text-white font-semibold">Quick Tip</h3>
                  <p className="text-gray-300 text-sm">Lead with emotion for higher retention.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-800/20 to-blue-800/10 border border-white/6 rounded-2xl p-4 backdrop-blur-sm shadow-sm">
                  <h3 className="text-white font-semibold">Template Mode</h3>
                  <p className="text-gray-300 text-sm">Use structured templates for repeatable formats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
