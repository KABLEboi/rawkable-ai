export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold tracking-tight">
        RAWKABLE AI Studio
      </h1>

      <p className="mt-6 max-w-2xl text-center text-lg text-gray-400">
        One Studio. Unlimited Intelligence.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
          Get Started
        </button>

        <button className="rounded-xl border border-gray-700 px-6 py-3 font-semibold transition hover:bg-white hover:text-black">
          Learn More
        </button>
      </div>

      <p className="mt-16 text-sm text-gray-600">
        🚀 Built by Kable & Echo
      </p>
    </main>
  );
}