export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wider">
          RAWKABLE<span className="text-blue-500">AI</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-500 transition">
          Launch App
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <span className="rounded-full border border-blue-500/40 px-4 py-1 text-blue-400 text-sm">
          🚀 The Future of AI Starts Here
        </span>

        <h2 className="mt-8 max-w-5xl text-6xl font-extrabold leading-tight">
          Build.
          <span className="text-blue-500"> Create.</span>
          <br />
          Automate Everything.
        </h2>

        <p className="mt-8 max-w-2xl text-lg text-gray-400">
          RAWKABLE AI Studio brings together the world's leading AI models,
          image generation, productivity tools, and automation into one
          beautiful workspace.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-500 transition">
            Get Started Free
          </button>

          <button className="rounded-xl border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-6 px-8 pb-24 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-bold">💬 AI Chat</h3>
          <p className="mt-3 text-gray-400">
            Access multiple AI models from one clean workspace.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-bold">🎨 AI Generation</h3>
          <p className="mt-3 text-gray-400">
            Generate images, content, and more in seconds.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-bold">⚡ AI Automation</h3>
          <p className="mt-3 text-gray-400">
            Save time with intelligent workflows and AI tools.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 RAWKABLE AI Studio. Built by Kable & Echo.
      </footer>
    </main>
  );
}