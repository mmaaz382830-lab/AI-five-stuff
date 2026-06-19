/* Skeleton loader — used while AI mode is generating */

function SkeletonLine({ width = "100%", height = "14px" }: { width?: string; height?: string }) {
  return (
    <div
      className="rounded-md bg-gray-800/80 skeleton-pulse"
      style={{ width, height }}
    />
  );
}

function SkeletonCard({ lines = 3, tall = false }: { lines?: number; tall?: boolean }) {
  return (
    <div className={`bg-gray-900/60 border border-gray-800/60 rounded-xl p-5 space-y-3 ${tall ? "min-h-[100px]" : ""}`}>
      {/* fake header row */}
      <div className="flex justify-between items-center mb-4">
        <SkeletonLine width="30%" height="12px" />
        <SkeletonLine width="48px" height="28px" />
      </div>
      <div className="p-4 rounded-lg bg-black/30 space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <SkeletonLine
            key={i}
            width={i === lines - 1 ? "65%" : "100%"}
            height="13px"
          />
        ))}
      </div>
    </div>
  );
}

export default function OutputSkeleton() {
  return (
    <div className="space-y-4 animate-fadeIn">
      {/* meta row */}
      <div className="rounded-xl p-4 border border-gray-800/60 bg-gray-900/40 flex justify-between items-center">
        <SkeletonLine width="45%" height="14px" />
        <div className="flex gap-2">
          <SkeletonLine width="90px" height="32px" />
          <SkeletonLine width="60px" height="32px" />
        </div>
      </div>
      {/* section cards */}
      <SkeletonCard lines={2} />
      <SkeletonCard lines={4} tall />
      <SkeletonCard lines={3} />
      <SkeletonCard lines={2} />
      <SkeletonCard lines={3} tall />
      <SkeletonCard lines={2} />
      <SkeletonCard lines={1} />
      <SkeletonCard lines={1} />
    </div>
  );
}
