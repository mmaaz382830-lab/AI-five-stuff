"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroSearch() {
  const [q, setQ] = useState('');
  const router = useRouter();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const query = q.trim();
    if (!query) return router.push('/studio');
    router.push(`/studio?query=${encodeURIComponent(query)}`);
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-2xl items-center gap-2 bg-white/3 border border-white/6 rounded-2xl px-3 py-2">
      <input
        aria-label="Search ideas"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Quick search (e.g., exam tips, coding meme)"
        className="flex-1 bg-transparent text-white placeholder:text-gray-400 border-0 outline-none text-base"
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-medium">
        Search
      </button>
    </form>
  );
}
