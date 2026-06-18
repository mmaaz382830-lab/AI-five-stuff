import CopyButton from "./CopyButton";

interface OutputCardProps {
  title: string;
  content: string | string[];
}

export default function OutputCard({ title, content }: OutputCardProps) {
  const isArray = Array.isArray(content);
  
  // Format content for copying (join array with newlines if it's an array)
  const copyText = isArray ? (content as string[]).join("\n") : (content as string);

  // Dynamic formatting based on content type
  const isCode = title === "AI Video Prompt";
  
  let headerColor = "text-blue-400";
  if (title === "Hook") headerColor = "text-amber-400";
  if (title === "Reel Script") headerColor = "text-blue-400";
  if (title === "Scene Breakdown") headerColor = "text-emerald-400";
  if (title === "Screen Text") headerColor = "text-pink-400";
  if (title === "Voiceover") headerColor = "text-indigo-400";
  if (title === "AI Video Prompt") headerColor = "text-purple-400";
  if (title === "Caption" || title === "Hashtags") headerColor = "text-gray-300";

  // Differentiate visual hierarchy (Hook is bigger/bolder than a standard body script)
  const isHeadline = title === "Hook";

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-lg font-bold ${headerColor}`}>{title}</h3>
        <CopyButton text={copyText} />
      </div>
      <div className={`p-4 rounded-lg bg-black/40 ${isCode ? 'font-mono text-sm text-gray-400' : 'text-gray-300 leading-relaxed'} ${isHeadline ? 'text-xl font-medium text-white' : ''}`}>
        {isArray ? (
          <ul className="list-disc list-inside space-y-2 pl-2">
            {(content as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="whitespace-pre-wrap">{content}</p>
        )}
      </div>
    </div>
  );
}
