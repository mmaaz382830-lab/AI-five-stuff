export default function ToolOfDayCard(){
  return (
    <aside className="bg-glass border border-white/6 rounded-3xl p-6 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-yellow-400 flex items-center justify-center text-white text-xl">⚡</div>
        <div>
          <h3 className="text-lg font-semibold">Tool of the Day</h3>
          <p className="text-gray-300 text-sm">Short-Form AI Prompter — generates scene-by-scene shot lists for high-retention reels.</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <a href="/studio" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium">Try it</a>
        <a href="/resources" className="text-sm text-gray-300 hover:text-white">How it works</a>
      </div>
    </aside>
  );
}
