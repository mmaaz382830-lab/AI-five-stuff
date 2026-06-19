type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export default function FAQ({ items }: FAQProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group bg-black/40 border border-white/6 rounded-2xl p-5"
        >
          <summary className="cursor-pointer list-none font-display text-lg font-semibold text-white">
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span className="text-blue-300 transition-transform group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-6 text-gray-300">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
