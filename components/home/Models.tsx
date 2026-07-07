const models = [
  {
    name: "ChatGPT",
    company: "OpenAI",
    color: "text-green-400",
  },
  {
    name: "Claude",
    company: "Anthropic",
    color: "text-orange-400",
  },
  {
    name: "Gemini",
    company: "Google",
    color: "text-blue-400",
  },
  {
    name: "Grok",
    company: "xAI",
    color: "text-purple-400",
  },
  {
    name: "DeepSeek",
    company: "DeepSeek",
    color: "text-cyan-400",
  },
  {
    name: "Mistral",
    company: "Mistral AI",
    color: "text-pink-400",
  },
];

export default function Models() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Access the World's Best AI Models
        </h2>

        <p className="mt-4 text-gray-400">
          One workspace. Multiple AI models. Unlimited possibilities.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {models.map((model) => (
          <div
            key={model.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
          >
            <h3 className={`text-3xl font-bold ${model.color}`}>
              {model.name}
            </h3>

            <p className="mt-3 text-gray-400">
              by {model.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}