import CopyButton from "./CopyButton";

interface OutputCardProps {
  title: string;
  content: string | string[];
}

export default function OutputCard({ title, content }: OutputCardProps) {
  const isArray = Array.isArray(content);
  
  // Format content for copying (join array with newlines if it's an array)
  const copyText = isArray ? (content as string[]).join("\n") : (content as string);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-blue-400">{title}</h3>
        <CopyButton text={copyText} />
      </div>
      <div className="text-gray-300 bg-black/40 p-4 rounded-lg font-mono text-sm">
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
