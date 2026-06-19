type StatCardProps = {
  value: string;
  label: string;
  detail?: string;
};

export default function StatCard({ value, label, detail }: StatCardProps) {
  return (
    <div className="bg-black/40 border border-white/6 rounded-2xl p-5 shadow-sm">
      <p className="font-display text-2xl font-bold text-white">{value}</p>
      <h3 className="mt-2 text-sm font-semibold text-blue-200">{label}</h3>
      {detail ? <p className="mt-2 text-sm leading-6 text-gray-300">{detail}</p> : null}
    </div>
  );
}
