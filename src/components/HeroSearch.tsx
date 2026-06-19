"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

/* #15 Rotating placeholder examples every 2 seconds */
const PLACEHOLDERS = [
  'exam tips for last-minute study…',
  'coding meme about debugging at 3am…',
  'stickman story about college life…',
  'AI tools that replaced my internship…',
  'relatable student struggle moments…',
];

export default function HeroSearch() {
  const [q, setQ] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setPlaceholderIndex((i) => (i + 1) % PLACEHOLDERS.length);
        setFading(false);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const query = q.trim();
    if (!query) return router.push('/studio');
    router.push(`/studio?query=${encodeURIComponent(query)}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-2xl items-center gap-2 bg-white/4 border border-white/10 rounded-xl px-3 py-2 focus-within:border-blue-500/50 focus-within:shadow-glow-blue transition-all"
    >
      <span className="text-gray-500 text-base shrink-0" aria-hidden="true">🔍</span>
      <input
        aria-label="Search reel ideas"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={PLACEHOLDERS[placeholderIndex]}
        className={`flex-1 bg-transparent text-white border-0 outline-none text-base transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}
        style={{ '--placeholder-color': 'rgb(156,163,175)' } as React.CSSProperties}
      />
      <button
        type="submit"
        className="btn-press bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shrink-0"
      >
        Search
      </button>
    </form>
  );
}
