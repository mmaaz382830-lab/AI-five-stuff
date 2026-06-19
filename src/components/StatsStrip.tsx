"use client";
import { useState, useEffect, useRef } from 'react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

/* #13 Count-up animation on StatsStrip */
const STATS: Stat[] = [
  { label: 'Reel Ideas',       value: 25, suffix: '+' },
  { label: 'Content Modes',    value: 8,  suffix: ''  },
  { label: 'Generation Modes', value: 2,  suffix: ''  },
  { label: 'Updated',          value: 52, suffix: 'x / year', prefix: '' },
];

function useCountUp(target: number, duration = 1200, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

function StatChip({ stat, started }: { stat: Stat; started: boolean }) {
  const count = useCountUp(stat.value, 1200, started);
  return (
    <div className="bg-black/30 border border-white/8 rounded-full px-4 py-2 text-sm text-gray-100 font-medium whitespace-nowrap">
      <span className="text-white font-bold">
        {stat.prefix ?? ''}{count}{stat.suffix}
      </span>
      {' '}{stat.label}
    </div>
  );
}

export default function StatsStrip() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-5 flex flex-wrap gap-3">
      {STATS.map((s) => (
        <StatChip key={s.label} stat={s} started={started} />
      ))}
    </div>
  );
}
