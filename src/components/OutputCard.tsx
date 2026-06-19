import CopyButton from "./CopyButton";

interface OutputCardProps {
  title: string;
  content: string | string[];
  /** Optional extra delay for stagger (e.g. "0.1s", "0.2s") */
  animationDelay?: string;
}

/* ── Per-section accent config ───────────────────────────────── */
type SectionAccent = {
  headerColor: string;
  borderColor: string;
  bgColor: string;
  tag?: string;
};

const ACCENTS: Record<string, SectionAccent> = {
  Hook: {
    headerColor: "text-amber-400",
    borderColor: "border-l-amber-500/70",
    bgColor: "bg-amber-950/20",
    tag: "HOOK",
  },
  "Reel Script": {
    headerColor: "text-blue-400",
    borderColor: "border-l-blue-500/60",
    bgColor: "bg-blue-950/10",
    tag: "SCRIPT",
  },
  "Scene Breakdown": {
    headerColor: "text-emerald-400",
    borderColor: "border-l-emerald-500/60",
    bgColor: "bg-emerald-950/10",
    tag: "SCENES",
  },
  "Screen Text": {
    headerColor: "text-pink-400",
    borderColor: "border-l-pink-500/60",
    bgColor: "bg-pink-950/10",
    tag: "CAPTION",
  },
  Voiceover: {
    headerColor: "text-indigo-400",
    borderColor: "border-l-indigo-500/60",
    bgColor: "bg-indigo-950/10",
    tag: "VOICE",
  },
  "AI Video Prompt": {
    headerColor: "text-purple-400",
    borderColor: "border-l-purple-500/70",
    bgColor: "bg-purple-950/15",
    tag: "PROMPT",
  },
  Caption: {
    headerColor: "text-sky-400",
    borderColor: "border-l-sky-500/60",
    bgColor: "bg-sky-950/10",
    tag: "CAPTION",
  },
  Hashtags: {
    headerColor: "text-teal-400",
    borderColor: "border-l-teal-500/60",
    bgColor: "bg-teal-950/10",
    tag: "TAGS",
  },
};

const DEFAULT_ACCENT: SectionAccent = {
  headerColor: "text-blue-400",
  borderColor: "border-l-blue-500/50",
  bgColor: "bg-blue-950/10",
};

export default function OutputCard({ title, content, animationDelay }: OutputCardProps) {
  const isArray = Array.isArray(content);
  const copyText = isArray ? (content as string[]).join("\n") : (content as string);

  const isCode = title === "AI Video Prompt";
  const isHook = title === "Hook";
  const isHashtags = title === "Hashtags";

  const accent = ACCENTS[title] ?? DEFAULT_ACCENT;

  return (
    <div
      className={`animate-revealCard bg-gray-900 border border-gray-800/80 border-l-4 ${accent.borderColor} rounded-xl p-5 shadow-sm hover:border-gray-700/60 transition-colors duration-200`}
      style={animationDelay ? { animationDelay } : undefined}
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-3 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <h3 className={`text-base font-bold truncate ${accent.headerColor}`}>{title}</h3>
          {accent.tag && (
            <span className={`hidden sm:inline-block text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full border opacity-60 ${accent.headerColor} border-current`}>
              {accent.tag}
            </span>
          )}
        </div>
        <CopyButton text={copyText} />
      </div>

      {/* Content area */}
      <div
        className={`p-4 rounded-lg ${accent.bgColor} border border-white/[0.04] ${
          isCode
            ? "font-mono text-[13px] text-gray-300 leading-relaxed"
            : isHook
            ? "text-white text-[17px] font-semibold leading-[1.6]"
            : "text-gray-200 text-[15px] leading-[1.75]"
        }`}
      >
        {isHashtags && isArray ? (
          /* Chip-style hashtag rendering */
          <div className="flex flex-wrap gap-2">
            {(content as string[]).map((tag, i) => (
              <span
                key={i}
                className="inline-block bg-teal-900/40 border border-teal-700/50 text-teal-300 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : isHashtags && !isArray ? (
          /* Hashtags as a string — split on whitespace and render chips */
          <div className="flex flex-wrap gap-2">
            {String(content)
              .split(/\s+/)
              .filter(Boolean)
              .map((tag, i) => (
                <span
                  key={i}
                  className="inline-block bg-teal-900/40 border border-teal-700/50 text-teal-300 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
          </div>
        ) : isArray ? (
          <ul className="list-disc list-inside space-y-2 pl-1">
            {(content as string[]).map((item, i) => (
              <li key={i} className="text-gray-200 leading-[1.7]">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="whitespace-pre-wrap">{content}</p>
        )}
      </div>
    </div>
  );
}

