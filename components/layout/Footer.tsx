export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-gray-400">
        <p>© 2026 RAWKABLE AI Studio</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Privacy
          </a>

          <a href="#" className="hover:text-white">
            Terms
          </a>

          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}