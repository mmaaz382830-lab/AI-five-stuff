export default function Features() {
  const features = [
    { title: "Hooks & Scripts", desc: "Catchy openings and engaging scripts tailored for your topic.", icon: "✍️" },
    { title: "Scene Breakdown", desc: "Step-by-step visual plans for stickman animations.", icon: "🎬" },
    { title: "AI Video Prompts", desc: "Ready-to-use prompts for Google Flow or Veo generators.", icon: "🤖" },
    { title: "Captions & Hashtags", desc: "Optimized Instagram descriptions to boost your reach.", icon: "📱" },
  ];

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Everything you need in one package</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
