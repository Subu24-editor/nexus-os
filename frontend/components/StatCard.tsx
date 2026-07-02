type Props = {
  title: string;
  value: number;
  emoji: string;
};

export default function StatCard({ title, value, emoji }: Props) {
  return (
    <div className="bg-[#1E293B] rounded-2xl p-6 hover:scale-105 transition">
      <div className="text-3xl">{emoji}</div>

      <h2 className="text-xl text-white mt-4">
        {title}
      </h2>

      <p className="text-4xl font-bold text-[#6C63FF] mt-3">
        {value}
      </p>
    </div>
  );
}