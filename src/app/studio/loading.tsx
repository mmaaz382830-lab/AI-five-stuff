/* #75 Next.js route loading UI for /studio
   Shown automatically by Next.js while the studio page hydrates */

export default function StudioLoading() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh]" aria-label="Loading Studio…">
      <div className="flex flex-col items-center gap-4">
        {/* Spinning gradient ring */}
        <div
          className="w-12 h-12 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, #6366f1, #38bdf8, #6366f1)',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black 0)',
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black 0)',
            animation: 'spin 0.8s linear infinite',
          }}
        />
        <p className="text-gray-400 text-sm animate-pulse">Loading Studio…</p>
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
