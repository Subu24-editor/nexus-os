export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Welcome back 👋
        </h1>

        <p className="text-gray-400 mt-2">
          Let's build something amazing today.
        </p>
      </div>

      <div className="flex gap-4 text-2xl">
        <button>🔔</button>
        <button>⚙️</button>
        <button>👤</button>
      </div>
    </header>
  );
}