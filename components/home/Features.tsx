import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: "💬",
    title: "AI Chat",
    description: "Chat with multiple leading AI models from one workspace.",
  },
  {
    icon: "🎨",
    title: "Image Generation",
    description: "Generate stunning AI images in seconds.",
  },
  {
    icon: "⚡",
    title: "Automation",
    description: "Automate repetitive tasks with intelligent workflows.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        title="Everything You Need"
        subtitle="Powerful AI tools designed for creators, developers and businesses."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]"
          >
            <div className="text-5xl">
              {feature.icon}
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}