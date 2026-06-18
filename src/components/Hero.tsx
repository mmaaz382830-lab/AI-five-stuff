import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full py-24 text-center px-4 flex flex-col items-center">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
        Create funny Five Stuff <br className="hidden md:block"/> reels in seconds.
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
        Generate hooks, scripts, screen text, captions, hashtags, and AI video prompts for your Instagram reels.
      </p>
      <Link href="/studio" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
        Start Creating
      </Link>
    </section>
  );
}
