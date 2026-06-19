"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/studio', label: 'Studio' },
  { href: '/history', label: 'History' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
];

export default function Navbar() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/6">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-white font-display font-semibold text-lg">
          <span className="text-2xl">🎬</span>
          <span>Five Stuff <span className="text-blue-400">Studio</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors px-2 py-1 rounded-md ${pathname === l.href ? 'text-white bg-white/6 ring-1 ring-white/8' : 'text-gray-300 hover:text-white hover:bg-white/2'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/studio" className="ml-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-transform transform hover:-translate-y-0.5">
            Open Studio
          </Link>
        </div>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/50 backdrop-blur-md border-t border-white/6">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={`py-2 px-3 rounded-md text-sm font-medium ${pathname === l.href ? 'text-white bg-white/6' : 'text-gray-300 hover:text-white hover:bg-white/2'}`} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/studio" className="mt-3 inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
              Open Studio
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
