"use client";

import { useState } from "react";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import { useToast } from "@/components/Toast";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  {
    value: "100%",
    label: "Local Storage Mode",
    detail: "Generated reels are saved locally inside your browser storage.",
  },
  {
    value: "8",
    label: "Creative Presets",
    detail: "Pre-made smart templates for popular creator topics and formats.",
  },
  {
    value: "2",
    label: "Generation Modes",
    detail: "Swap between instant local templates or AI-driven generation.",
  },
  {
    value: "2",
    label: "Export Methods",
    detail: "Instantly copy text nodes to clipboard or download as .txt.",
  },
  {
    value: "10",
    label: "Flexible Settings",
    detail: "Refine topics, styles, duration, formats, language, and creativity.",
  },
];

const faqs = [
  {
    question: "Is this free?",
    answer:
      "Yes. Five Stuff Studio is a personal creator tool and portfolio project, not a paid SaaS product.",
  },
  {
    question: "Does AI mode require an API key?",
    answer:
      "AI mode depends on a configured Gemini API key on the server side. Template mode works instantly without calling the AI route.",
  },
  {
    question: "Can I use outputs for Instagram?",
    answer:
      "Yes, the outputs are designed for Instagram reel planning. Feel free to edit them for your own voice, timing, and final visuals before posting.",
  },
  {
    question: "Is my data saved online?",
    answer:
      "No database is connected. History and favorites are stored locally in your browser using LocalStorage for complete privacy.",
  },
  {
    question: "Why does template mode exist?",
    answer:
      "Template mode keeps the workflow useful even without AI, and it makes common reel structures faster to repeat without token costs.",
  },
];

const roadmap = [
  { item: "Better prompts engineering", status: "In Progress" },
  { item: "Dakhni / Hinglish localization", status: "Done" },
  { item: "More preset content categories", status: "Done" },
  { item: "Reel scheduling calendar view", status: "Planned" },
  { item: "Bulk script generation", status: "In Progress" },
  { item: "Advanced voiceover timing tags", status: "Planned" },
  { item: "Google Flow prompt tuning presets", status: "Planned" },
];

export default function ResourcesPage() {
  const { showToast } = useToast();
  
  // Submission Form State
  const [form, setForm] = useState({
    name: "",
    category: "AI Tools",
    whyUseful: "",
    contact: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopySuggestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.whyUseful) {
      showToast("Please fill out the name and usefulness details.", "error");
      return;
    }

    const formattedMessage = `FIVE STUFF STUDIO SUGGESTION
======================================
Tool/Idea Name: ${form.name}
Category: ${form.category}
Why it is useful: ${form.whyUseful}
Contact info: ${form.contact || "Not provided"}
======================================`;

    navigator.clipboard.writeText(formattedMessage)
      .then(() => {
        showToast("Suggestion copied! Share it with Maaz.", "success");
        // Clear fields on success
        setForm({
          name: "",
          category: "AI Tools",
          whyUseful: "",
          contact: "",
        });
      })
      .catch((err) => {
        console.error("Failed to copy suggestion to clipboard", err);
        showToast("Failed to copy. Please copy manually.", "error");
      });
  };

  return (
    <div className="w-full">
      {/* Hero section */}
      <section className="relative overflow-hidden px-4 py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-indigo-700/20 blur-3xl" />
          <div className="absolute right-[-80px] top-28 h-64 w-64 rounded-full bg-blue-700/20 blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-6 mix-blend-overlay" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Resource hub
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Five Stuff Studio resources
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              A practical hub for understanding the studio workflow, local
              features, submission ideas, FAQs, and upcoming improvements for
              Five Stuff content creation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="px-4 py-16">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Site statistics"
              title="What the studio supports"
              description="These are product-style signals for the current personal tool, focused on generation, export, and local workflow support."
            />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Curation Process Visual Flow section */}
      <section className="px-4 py-16 bg-black/10">
        <ScrollReveal>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Curation process"
                title="How reel packages are shaped"
                description="The output format is intentionally structured so each generated idea can move from concept to edit faster."
              />
            </div>
            
            {/* Visual Pipeline Flow */}
            <div className="bg-black/40 border border-white/6 rounded-2xl p-6 lg:col-span-7">
              <h3 className="font-display text-xl font-bold text-white mb-8 text-center sm:text-left">
                Content Curation Pipeline
              </h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 relative">
                {[
                  { label: "Topic", desc: "Select category", icon: "💡" },
                  { label: "Style", desc: "Select tone/format", icon: "🎭" },
                  { label: "Generate", desc: "AI or local templates", icon: "✨" },
                  { label: "Edit", desc: "Refine voice/timing", icon: "✂️" },
                  { label: "Post", desc: "Upload and schedule", icon: "🚀" }
                ].map((step, index, arr) => (
                  <div key={index} className="flex flex-col items-center text-center relative z-10 w-full sm:w-1/5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 flex items-center justify-center text-xl mb-3 shadow-[0_0_12px_rgba(59,130,246,0.15)] hover:scale-110 transition-transform duration-200">
                      {step.icon}
                    </div>
                    <span className="text-sm font-bold text-white mb-1">{step.label}</span>
                    <span className="text-[10px] text-gray-400 max-w-[120px] leading-relaxed hidden md:block">
                      {step.desc}
                    </span>
                    
                    {index < arr.length - 1 && (
                      <>
                        {/* Desktop dashed connector */}
                        <div className="hidden sm:block absolute top-6 left-[calc(50%+1.5rem)] right-[calc(-50%+1.5rem)] h-[1px] border-t border-dashed border-white/10 -z-10" />
                        {/* Mobile arrow */}
                        <div className="sm:hidden my-2 text-blue-400/40 font-mono">↓</div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Submissions section */}
      <section className="px-4 py-16">
        <ScrollReveal>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Submissions"
                title="Suggest a tool or idea"
                description="Help expand our preset library! Fill in the suggestion details below and copy them to share directly with the developer."
              />
            </div>
            
            <form onSubmit={handleCopySuggestion} className="bg-black/40 border border-white/6 rounded-2xl p-6 lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5">Tool/Idea Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="E.g., Claude Artifacts"
                    className="w-full bg-black/60 border border-gray-800 text-white rounded-lg p-3 text-[14px] placeholder:text-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5">Category</label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full bg-black/60 border border-gray-800 text-white rounded-lg p-3 text-[14px] focus:border-blue-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option>AI Tools</option>
                    <option>Coding Life</option>
                    <option>Student Life</option>
                    <option>Internet Habits</option>
                    <option>Daily Chaos</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5">Why it is useful (Short description)</label>
                  <textarea
                    name="whyUseful"
                    value={form.whyUseful}
                    onChange={handleChange}
                    placeholder="E.g., Writing code inside sandbox visually..."
                    rows={3}
                    className="w-full bg-black/60 border border-gray-800 text-white rounded-lg p-3 text-[14px] placeholder:text-gray-600 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5">Contact info (Optional)</label>
                  <input
                    type="text"
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="Your email or instagram handle"
                    className="w-full bg-black/60 border border-gray-800 text-white rounded-lg p-3 text-[14px] placeholder:text-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-press font-semibold py-3 rounded-xl bg-blue-600 hover:bg-blue-505 text-white transition-all text-sm"
              >
                📋 Copy Suggestion details
              </button>
            </form>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ section */}
      <section className="px-4 py-16 bg-black/10">
        <ScrollReveal>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="FAQ"
                title="Quick answers"
                description="Short notes about cost, AI mode, usage, storage, and why template mode exists."
              />
            </div>
            <div className="lg:col-span-7">
              <FAQ items={faqs} />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact and Roadmap section */}
      <section className="px-4 py-16 mb-8">
        <ScrollReveal>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="bg-gradient-to-br from-blue-900/20 to-black/30 border border-white/6 rounded-2xl p-6 lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-4">
                  Contact Developer
                </h2>
                <p className="text-sm leading-relaxed text-gray-300">
                  Have inquiries, issues, or suggestions? Reach out directly using our verified repository link or social channels.
                </p>
                <div className="mt-6 space-y-3.5">
                  <p className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="text-gray-500">GitHub:</span>
                    <a
                      href="https://github.com/mmaaz382830-lab"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-300 hover:text-blue-200 transition-colors underline font-medium"
                    >
                      github.com/mmaaz382830-lab
                    </a>
                  </p>
                  <p className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="text-gray-500">Instagram:</span>
                    <a 
                      href="https://www.instagram.com/five.stuff"
                      target="_blank"
                      rel="noreferrer"
                      className="text-pink-400 hover:text-pink-300 transition-colors underline font-medium"
                    >
                      @five.stuff
                    </a>
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg border border-white/6 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Read about Mohammad Maaz
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Roadmap"
                title="Upcoming features"
                description="These ideas keep the app focused on improving the creator workflow without adding unnecessary SaaS complexity."
              />
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {roadmap.map((item) => {
                  const isDone = item.status === "Done";
                  const isProgress = item.status === "In Progress";
                  
                  return (
                    <div
                      key={item.item}
                      className="flex items-center justify-between gap-2 rounded-xl border border-white/6 bg-black/35 px-4 py-3 text-sm font-medium text-gray-100 hover:border-white/10 transition-colors"
                    >
                      <span className="text-gray-200 truncate">{item.item}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold shrink-0 ${
                        isDone 
                          ? "bg-emerald-950/40 text-emerald-400 border border-emerald-900/35"
                          : isProgress
                          ? "bg-amber-950/40 text-amber-400 border border-amber-900/35"
                          : "bg-blue-950/40 text-blue-400 border border-blue-900/35"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
