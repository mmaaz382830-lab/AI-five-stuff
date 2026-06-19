"use client";

interface EmptyStateProps {
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  icon?: string;
}

export default function EmptyState({
  title,
  description,
  actionText,
  onAction,
  icon = "📂",
}: EmptyStateProps) {
  return (
    <div className="animate-fadeIn w-full flex flex-col items-center justify-center p-12 bg-gray-900/40 border border-dashed border-gray-800/80 rounded-2xl text-center">
      {/* Icon with subtle glow ring */}
      <div className="relative mb-5">
        <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-xl scale-150" />
        <div className="relative w-16 h-16 rounded-full bg-gray-800/60 border border-gray-700/60 flex items-center justify-center text-3xl">
          {icon}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 max-w-xs mb-6 leading-relaxed text-[15px]">{description}</p>

      {actionText && onAction && (
        <button
          onClick={onAction}
          className="btn-press bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-[0_0_12px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.45)]"
        >
          {actionText}
        </button>
      )}
    </div>
  );
}
