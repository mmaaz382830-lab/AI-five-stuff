/* #16 Tool of the Day rotating content based on day of week */

interface Tool {
  icon: string;
  gradient: string;
  name: string;
  desc: string;
  tag: string;
}

const TOOLS: Tool[] = [
  {
    icon: '⚡',
    gradient: 'from-pink-500 to-yellow-400',
    name: 'Short-Form AI Prompter',
    desc: 'Generates scene-by-scene shot lists for high-retention reels.',
    tag: 'Most popular',
  },
  {
    icon: '🎭',
    gradient: 'from-purple-500 to-pink-500',
    name: 'Mood & Hook Generator',
    desc: 'Instantly creates attention-grabbing hooks tuned to your audience vibe.',
    tag: 'New this week',
  },
  {
    icon: '🎨',
    gradient: 'from-blue-500 to-cyan-400',
    name: 'Stickman Scene Planner',
    desc: 'Breaks your script into frame-by-frame visual instructions.',
    tag: 'Fan favourite',
  },
  {
    icon: '📱',
    gradient: 'from-emerald-500 to-teal-400',
    name: 'Caption & Hashtag Kit',
    desc: 'Optimised Instagram captions + 15 targeted hashtags in one click.',
    tag: 'Trending',
  },
  {
    icon: '🤖',
    gradient: 'from-indigo-500 to-blue-400',
    name: 'AI Video Prompt Builder',
    desc: 'Crafts detailed prompts for Google Flow, Veo, and Runway generators.',
    tag: 'Creator pick',
  },
  {
    icon: '🔥',
    gradient: 'from-orange-500 to-red-500',
    name: 'Viral Format Finder',
    desc: 'Matches your topic to the highest-performing reel formats right now.',
    tag: 'Hot today',
  },
  {
    icon: '✍️',
    gradient: 'from-violet-500 to-purple-400',
    name: 'Voiceover Script Crafter',
    desc: 'Writes punchy voiceover copy with perfect pacing for a 30-second reel.',
    tag: 'Creator pick',
  },
];

export default function ToolOfDayCard() {
  const dayIndex = new Date().getDay(); // 0–6
  const tool = TOOLS[dayIndex % TOOLS.length];

  return (
    <aside className="bg-glass border border-white/8 rounded-3xl p-6 shadow-lg">
      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mb-3">
        ✦ Tool of the Day
      </p>
      <div className="flex items-start gap-4">
        <div
          className={`shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center text-white text-xl shadow-md`}
        >
          {tool.icon}
        </div>
        <div>
          <h3 className="text-base font-bold text-white leading-tight mb-1">{tool.name}</h3>
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wide text-blue-300 bg-blue-500/15 border border-blue-400/20 px-2 py-0.5 rounded-full mb-2">
            {tool.tag}
          </span>
          <p className="text-gray-300 text-sm leading-relaxed">{tool.desc}</p>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <a
          href="/studio"
          className="btn-press inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
        >
          Try it →
        </a>
        <a href="/resources" className="text-sm text-gray-400 hover:text-white transition-colors link">
          How it works
        </a>
      </div>
    </aside>
  );
}
