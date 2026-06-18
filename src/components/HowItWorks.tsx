export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Pick a Topic", desc: "Choose from Student Life, Coding, AI, or enter your own custom idea." },
    { num: "02", title: "Select Style & Format", desc: "Want it savage or relatable? A voiceover or screen-text reel? You decide." },
    { num: "03", title: "Generate & Copy", desc: "Get a full reel package instantly. Copy what you need and start creating." },
  ];

  return (
    <section className="w-full py-20 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-display text-center text-white mb-12">How it works</h2>
        <div className="space-y-8">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <div className="text-5xl font-black font-display text-blue-900/50">{s.num}</div>
              <div>
                <h3 className="text-2xl font-semibold font-display text-white mb-2">{s.title}</h3>
                <p className="text-gray-300 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
