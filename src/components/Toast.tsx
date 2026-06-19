"use client";

import { useState, useCallback, useEffect, createContext, useContext } from "react";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
export type ToastType = "success" | "error" | "info";

export interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType) => void;
}

/* ─────────────────────────────────────────────
   Context
───────────────────────────────────────────── */
const ToastContext = createContext<ToastContextValue>({ showToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

/* ─────────────────────────────────────────────
   Individual toast item
───────────────────────────────────────────── */
function ToastBubble({
  item,
  onRemove,
}: {
  item: ToastItem;
  onRemove: (id: number) => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 10);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onRemove(item.id), 300);
    }, 2800);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [item.id, onRemove]);

  const icons: Record<ToastType, string> = {
    success: "✓",
    error: "✕",
    info: "ℹ",
  };

  const colors: Record<ToastType, string> = {
    success:
      "bg-[#0d1f16] border-emerald-700/60 text-emerald-300 shadow-[0_4px_24px_rgba(16,185,129,0.18)]",
    error:
      "bg-[#1a0d0d] border-red-700/60 text-red-300 shadow-[0_4px_24px_rgba(239,68,68,0.18)]",
    info: "bg-[#0d0f1f] border-indigo-700/60 text-indigo-300 shadow-[0_4px_24px_rgba(99,102,241,0.18)]",
  };

  const iconColors: Record<ToastType, string> = {
    success: "bg-emerald-500/20 text-emerald-400",
    error: "bg-red-500/20 text-red-400",
    info: "bg-indigo-500/20 text-indigo-400",
  };

  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3 rounded-xl border
        text-sm font-medium backdrop-blur-sm
        transition-all duration-300 ease-out
        ${colors[item.type]}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
      `}
      style={{ minWidth: "220px", maxWidth: "360px" }}
    >
      <span
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${iconColors[item.type]}`}
      >
        {icons[item.type]}
      </span>
      <span className="flex-1 leading-snug">{item.message}</span>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(() => onRemove(item.id), 300);
        }}
        className="opacity-40 hover:opacity-80 transition-opacity text-xs leading-none ml-1"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Provider + Stack renderer
───────────────────────────────────────────── */
let _uid = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback(
    (message: string, type: ToastType = "success") => {
      const id = ++_uid;
      setToasts((prev) => [...prev, { id, message, type }]);
    },
    []
  );

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast stack — fixed bottom-right */}
      <div
        aria-live="polite"
        className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 items-end pointer-events-none"
      >
        {toasts.map((t) => (
          <div key={t.id} className="pointer-events-auto">
            <ToastBubble item={t} onRemove={removeToast} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
