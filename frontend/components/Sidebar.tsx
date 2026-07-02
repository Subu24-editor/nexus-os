export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#111827] text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold text-[#6C63FF]">
        Nexus OS
      </h1>

      <nav className="mt-10 space-y-4">
        <p className="hover:text-[#6C63FF] cursor-pointer">🏠 Dashboard</p>
        <p className="hover:text-[#6C63FF] cursor-pointer">📝 Notes</p>
        <p className="hover:text-[#6C63FF] cursor-pointer">📄 Documents</p>
        <p className="hover:text-[#6C63FF] cursor-pointer">🤖 AI</p>
        <p className="hover:text-[#6C63FF] cursor-pointer">✅ Tasks</p>
        <p className="hover:text-[#6C63FF] cursor-pointer">📅 Calendar</p>
        <p className="hover:text-[#6C63FF] cursor-pointer">⚙️ Settings</p>
      </nav>
    </aside>
  );
}