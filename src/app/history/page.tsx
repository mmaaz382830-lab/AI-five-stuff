import HistoryList from "@/components/HistoryList";

export default function HistoryPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">History</h1>
        <p className="text-gray-400">View, manage, and retrieve your previously generated reel packages.</p>
      </div>
      
      <HistoryList />
    </div>
  );
}
