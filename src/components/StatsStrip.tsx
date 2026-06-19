export default function StatsStrip(){
  const stats = [
    { title: '25+ Reel Ideas' },
    { title: '8 Content Modes' },
    { title: '2 Generation Modes' },
    { title: 'Updated Weekly' },
  ];
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {stats.map((s, i) => (
        <div key={i} className="bg-black/30 border border-white/6 rounded-full px-4 py-2 text-sm text-gray-100">
          {s.title}
        </div>
      ))}
    </div>
  );
}
