"use client";

import { useEffect, useState, useRef } from "react";

type StatCardProps = {
  value: string;
  label: string;
  detail?: string;
};

export default function StatCard({ value, label, detail }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parse any numbers in the value string
    const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const suffix = match[2] || "";

    let hasRun = false;
    
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasRun) {
          hasRun = true;
          let start = 0;
          const duration = 1200; // 1.2s animation duration
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing: easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const currentNum = Math.floor(easeProgress * targetNum);
            
            setDisplayValue(`${currentNum}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return (
    <div 
      ref={containerRef} 
      className="bg-black/40 border border-white/6 rounded-2xl p-5 shadow-sm hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <p className="font-display text-3xl font-extrabold text-white">{displayValue}</p>
        <h3 className="mt-2 text-sm font-semibold text-blue-200">{label}</h3>
      </div>
      {detail ? <p className="mt-3 text-xs leading-5 text-gray-400 border-t border-white/5 pt-3">{detail}</p> : null}
    </div>
  );
}
