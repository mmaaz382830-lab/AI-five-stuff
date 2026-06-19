import Link from 'next/link';

/* #24 Upgraded 3-column footer  #73 Quick links */

const QUICK_LINKS = [
  { href: '/',          label: 'Home'      },
  { href: '/studio',   label: 'Studio'    },
  { href: '/history',  label: 'History'   },
  { href: '/about',    label: 'About'     },
  { href: '/resources',label: 'Resources' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/8 mt-auto bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white font-black font-display text-sm"
                style={{ background: 'linear-gradient(135deg, #6366f1, #38bdf8)' }}
              >
                F5
              </span>
              <span className="text-white font-semibold font-display">
                Five Stuff <span className="text-blue-400">Studio</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              AI-powered reel scripts, hooks, captions, and prompts — built for fast content creators.
            </p>
            <p className="mt-4 text-gray-600 text-xs">
              Built by{' '}
              <span className="text-gray-400 font-medium">Maaz</span>
              {' '}— Five Stuff creator
            </p>
          </div>

          {/* Column 2 — Quick links #73 */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Connect */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/five.stuff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-pink-400 text-sm transition-colors group"
                >
                  <span className="text-base">📸</span>
                  <span>@five.stuff</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/five-stuff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors group"
                >
                  <span className="text-base">🐙</span>
                  <span>GitHub</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs">
          <p>© {year} Five Stuff AI Reel Studio. All rights reserved.</p>
          <p>
            Made with ❤️ by{' '}
            <span className="text-gray-400 font-medium">Maaz</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
