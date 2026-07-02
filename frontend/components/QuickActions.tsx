export default function QuickActions() {
  const buttons = [
    "📝 New Note",
    "📄 Upload PDF",
    "🤖 Ask AI",
    "✅ Create Task",
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-white mb-4">
        Quick Actions
      </h2>

      <div className="flex flex-wrap gap-4">
        {buttons.map((button) => (
          <button
            key={button}
            className="bg-[#6C63FF] hover:bg-[#5A52E0] px-6 py-3 rounded-xl text-white transition"
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}