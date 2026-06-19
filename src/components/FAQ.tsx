"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`bg-black/40 border rounded-2xl p-5 transition-all duration-300 ${
              isOpen ? "border-blue-500/40 bg-black/60 shadow-[0_0_15px_rgba(59,130,246,0.05)]" : "border-white/6"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left font-display text-lg font-semibold text-white flex items-center justify-between gap-4 focus:outline-none"
            >
              <span>{item.question}</span>
              <span
                className={`text-blue-300 text-2xl leading-none transition-transform duration-350 select-none ${
                  isOpen ? "rotate-45 text-blue-400" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows,margin-top] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr] mt-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-6 text-gray-350 pt-3 border-t border-white/5">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
