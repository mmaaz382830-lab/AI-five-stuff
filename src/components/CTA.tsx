import Link from 'next/link';

export default function CTA() {
  return (
    <section className="w-full py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-3xl p-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">Ready to make your next viral reel?</h2>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">Stop staring at a blank screen. Generate your first script right now.</p>
        <Link href="/studio" className="bg-white text-black px-8 py-4 rounded-xl text-lg font-bold font-display hover:bg-gray-200 transition-colors inline-block">
          Open Studio
        </Link>
      </div>
    </section>
  );
}
