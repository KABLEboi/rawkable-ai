const stats = [
  { number: "10+", label: "AI Models" },
  { number: "50K+", label: "Messages Generated" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Availability" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md transition hover:border-blue-500"
          >
            <h2 className="text-4xl font-bold text-blue-400">
              {stat.number}
            </h2>

            <p className="mt-3 text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}