import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-display text-white flex items-center gap-2">
          <span>🎥</span>
          <span>Five Stuff <span className="text-blue-500">Studio</span></span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/history" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
            History
          </Link>
          <Link href="/studio" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Studio
          </Link>
        </div>
      </div>
    </nav>
  );
}
