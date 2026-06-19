import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";

export const metadata: Metadata = {
  title: "Resources | Five Stuff AI Reel Studio",
  description:
    "Explore Five Stuff Studio stats, curation notes, FAQs, submissions, and upcoming features.",
};

const stats = [
  {
    value: "Local",
    label: "Reel packages generated locally",
    detail: "Generated ideas and favorites stay in browser storage.",
  },
  {
    value: "Ready",
    label: "Template mode available",
    detail: "Structured fallback generation for repeatable reel formats.",
  },
  {
    value: "Ready",
    label: "AI mode available",
    detail: "Optional Gemini-powered generation through the app route.",
  },
  {
    value: "TXT",
    label: "Export support",
    detail: "Save a reel package for editing, sharing, or archiving.",
  },
  {
    value: "Saved",
    label: "History/favorites support",
    detail: "Review past packages and mark strong ideas for later.",
  },
];

const faqs = [
  {
    question: "Is this free?",
    answer:
      "Yes. Five Stuff Studio is a personal creator tool and portfolio project, not a paid SaaS product.",
  },
  {
    question: "Does AI mode require API key?",
    answer:
      "AI mode depends on a configured Gemini API key on the server side. Template mode works without calling the AI route.",
  },
  {
    question: "Can I use outputs for Instagram?",
    answer:
      "Yes, the outputs are designed for Instagram reel planning. Edit them for your own voice, timing, and final visuals before posting.",
  },
  {
    question: "Is data saved online?",
    answer:
      "No database is connected. History and favorites are stored locally in the browser with LocalStorage.",
  },
  {
    question: "Why template mode exists?",
    answer:
      "Template mode keeps the workflow useful even without AI, and it makes common reel structures faster to repeat.",
  },
];

const roadmap = [
  "Better prompts",
  "Dakhni/Hinglish mode",
  "More content categories",
  "Reel calendar",
  "Batch idea generation",
  "Voiceover formatting",
  "Google Flow prompt presets",
];

export default function ResourcesPage() {
  return (
    <div className="w-full">
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

      <section className="px-4 py-16">
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
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Curation process"
              title="How reel packages are shaped"
              description="The output format is intentionally structured so each generated idea can move from concept to edit faster."
            />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:col-span-7">
            <div className="bg-black/40 border border-white/6 rounded-2xl p-6">
              <h3 className="font-display text-xl font-semibold text-white">
                Topics and styles
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                Topics are chosen around creator-friendly categories such as AI
                tools, student life, coding, exams, and meme-style observations.
                Styles focus on formats that can become short, funny,
                high-retention reels.
              </p>
            </div>
            <div className="bg-black/40 border border-white/6 rounded-2xl p-6">
              <h3 className="font-display text-xl font-semibold text-white">
                Structured outputs
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                Each package is split into hook, script, scenes, caption,
                hashtags, and video prompt because those are the parts needed to
                plan, edit, post, and reuse a reel idea without starting from a
                blank page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Submissions"
              title="Suggest a tool or idea"
              description="This is a static preview of the submission flow. A real backend can be added later when the project needs it."
            />
          </div>
          <div className="bg-black/40 border border-white/6 rounded-2xl p-6 lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Tool/idea name",
                "Category",
                "Why it is useful",
                "Contact email/social",
              ].map((label) => (
                <label key={label} className="block">
                  <span className="text-sm font-medium text-gray-200">
                    {label}
                  </span>
                  <input
                    readOnly
                    placeholder={label}
                    className="mt-2 w-full rounded-lg border border-white/6 bg-white/5 px-4 py-3 text-sm text-gray-200 placeholder:text-gray-500"
                  />
                </label>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-blue-300/20 bg-blue-500/10 px-4 py-3 text-sm text-blue-100">
              Submission backend coming later.
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
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
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="bg-gradient-to-br from-blue-900/30 to-black/30 border border-white/6 rounded-2xl p-6 lg:col-span-5">
            <h2 className="font-display text-2xl font-bold text-white">
              Contact
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              GitHub placeholder:
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
                className="ml-1 text-blue-300 hover:text-blue-200"
              >
                github.com/your-username
              </a>
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-300">
              Email/social placeholder: add your creator contact here.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-white/6 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Read about the project
            </Link>
          </div>
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Roadmap"
              title="Upcoming features"
              description="These ideas keep the app focused on improving the creator workflow without adding unnecessary SaaS complexity."
            />
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {roadmap.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/6 bg-black/35 px-4 py-3 text-sm font-medium text-gray-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
