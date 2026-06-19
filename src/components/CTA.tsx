import Link from 'next/link';

export default function CTA() {
  return (
    <section className="w-full py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-white/6 rounded-3xl p-12 backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">Ready to make your next viral reel?</h2>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed" style={{lineHeight:1.7}}>Stop staring at a blank screen. Generate your first script right now.</p>
        <Link href="/studio" className="bg-gradient-to-br from-white to-gray-200 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:scale-102 transition-transform inline-block">
          Open Studio
        </Link>
      </div>
    </section>
  );
}
