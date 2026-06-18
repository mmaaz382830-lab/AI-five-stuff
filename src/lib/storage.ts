import { ReelPackage } from "@/types";

const STORAGE_KEY = "five-stuff-reel-history";

export function getHistory(): ReelPackage[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to parse history from local storage", error);
    return [];
  }
}

export function saveReel(reel: ReelPackage): void {
  if (typeof window === "undefined") return;
  const history = getHistory();
  // Prevent duplicate saves of the same ID
  if (!history.find((r) => r.id === reel.id)) {
    const newHistory = [reel, ...history];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
  }
}

export function deleteReel(id: string): void {
  if (typeof window === "undefined") return;
  const history = getHistory();
  const newHistory = history.filter((r) => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
}

export function toggleFavorite(id: string): void {
  if (typeof window === "undefined") return;
  const history = getHistory();
  const newHistory = history.map((r) =>
    r.id === id ? { ...r, isFavorite: !r.isFavorite } : r
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
}

export function clearHistory(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
