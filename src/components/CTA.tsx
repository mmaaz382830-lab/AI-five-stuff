import Link from 'next/link';

/* #22 CTA hover shimmer animation via .cta-shimmer class in globals.css */

export default function CTA() {
  return (
    <section className="w-full py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto cta-shimmer bg-gradient-to-br from-blue-900/15 via-indigo-900/10 to-purple-900/15 border border-white/8 rounded-3xl p-12 backdrop-blur-sm transition-all duration-300 hover:border-white/14 hover:shadow-lg">
        <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-4">
          ✦ Start for free
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
          Ready to make your next viral reel?
        </h2>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          Stop staring at a blank screen. Generate your first script right now.
        </p>
        <Link
          href="/studio"
          className="btn-press inline-flex items-center gap-2 bg-gradient-to-br from-white to-gray-100 text-black px-8 py-3.5 rounded-xl text-lg font-bold hover:from-gray-100 hover:to-white transition-all shadow-lg"
        >
          Open Studio →
        </Link>
        <p className="mt-4 text-gray-500 text-xs">No account needed. Free to use.</p>
      </div>
    </section>
  );
}
