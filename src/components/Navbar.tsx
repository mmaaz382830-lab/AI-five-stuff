"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '/',          label: 'Home'      },
  { href: '/studio',   label: 'Studio'    },
  { href: '/history',  label: 'History'   },
  { href: '/about',    label: 'About'     },
  { href: '/resources',label: 'Resources' },
];

/* #27 F5 monogram SVG logo inside a gradient ring */
function F5Logo() {
  return (
    <span
      className="inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0"
      style={{
        background: 'linear-gradient(135deg, #6366f1, #38bdf8)',
        padding: '2px',
      }}
      aria-hidden="true"
    >
      <span
        className="flex items-center justify-center w-full h-full rounded-full bg-[#07091e] text-white font-black font-display text-sm tracking-tight"
      >
        F5
      </span>
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);

  /* #25 History saved count badge */
  const [historyCount, setHistoryCount] = useState(0);
  useEffect(() => {
    try {
      const raw = localStorage.getItem('five-stuff-reel-history');
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) {
          const timer = setTimeout(() => {
            setHistoryCount(arr.length);
          }, 0);
          return () => clearTimeout(timer);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <nav
      className="w-full sticky top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/6"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-white font-display font-semibold text-lg">
          <F5Logo />
          <span>
            Five Stuff <span className="text-blue-400">Studio</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium transition-colors px-3 py-1.5 rounded-lg nav-active-bar ${
                  isActive
                    ? 'text-white active'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {l.label}
                {/* #25 history badge */}
                {l.href === '/history' && historyCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                    {historyCount > 9 ? '9+' : historyCount}
                  </span>
                )}
              </Link>
            );
          })}
          <Link
            href="/studio"
            className="ml-2 btn-press bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-glow-blue"
          >
            Open Studio
          </Link>
        </div>

        {/* #26 Animated hamburger → X */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Top bar */}
            <line
              x1="3" y1="6" x2="21" y2="6"
              style={{
                transformOrigin: 'center',
                transition: 'transform 300ms cubic-bezier(.2,.8,.2,1), opacity 200ms',
                transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              }}
            />
            {/* Middle bar */}
            <line
              x1="3" y1="12" x2="21" y2="12"
              style={{
                transition: 'opacity 200ms',
                opacity: open ? 0 : 1,
              }}
            />
            {/* Bottom bar */}
            <line
              x1="3" y1="18" x2="21" y2="18"
              style={{
                transformOrigin: 'center',
                transition: 'transform 300ms cubic-bezier(.2,.8,.2,1), opacity 200ms',
                transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              }}
            />
          </svg>
        </button>
      </div>

      {/* #28 #67 Mobile menu slide animation */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '400px' : '0px', opacity: open ? 1 : 0 }}
      >
        <div className="bg-black/60 backdrop-blur-md border-t border-white/6">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative py-2.5 px-3 rounded-lg text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? 'text-white bg-white/8 border-l-2 border-blue-500'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span>{l.label}</span>
                  {l.href === '/history' && historyCount > 0 && (
                    <span className="bg-blue-600 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 leading-none">
                      {historyCount > 9 ? '9+' : historyCount}
                    </span>
                  )}
                </Link>
              );
            })}
            <Link
              href="/studio"
              className="mt-3 btn-press bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2.5 rounded-xl text-sm font-medium text-center"
              onClick={() => setOpen(false)}
            >
              Open Studio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
