import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import StatCard from "../components/StatCard";
import QuickActions from "../components/QuickActions";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#0B0F19]">
      <Sidebar />

      <section className="flex-1 p-10">
        <Header />

        <SearchBar />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <StatCard title="Notes" value={0} emoji="📝" />
          <StatCard title="Documents" value={0} emoji="📄" />
          <StatCard title="Tasks" value={0} emoji="✅" />
          <StatCard title="AI Chats" value={0} emoji="🤖" />
        </div>

        <QuickActions />
      </section>
    </main>
  );
}