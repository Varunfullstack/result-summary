// src/app/page.js
import ResultCard from "@/components/ResultCard";
import SummaryCard from "@/components/SummaryCard";

export default function Home() {
  const summaryData = [
    {
      category: "Reaction",
      score: 80,
      icon: "/assets/images/icon-reaction.svg",
    },
    {
      category: "Memory",
      score: 92,
      icon: "/assets/images/icon-memory.svg",
    },
    {
      category: "Verbal",
      score: 61,
      icon: "/assets/images/icon-verbal.svg",
    },
    {
      category: "Visual",
      score: 72,
      icon: "/assets/images/icon-visual.svg",
    },
  ];

  const averageScore = Math.round(
    summaryData.reduce((acc, item) => acc + item.score, 0) / summaryData.length
  );

  return (
    <main className="min-h-screen bg-white md:bg-gray-50 flex items-center justify-center p-0 md:p-6">
      <div className="w-full md:w-[736px] bg-white flex flex-col md:flex-row md:rounded-[32px] shadow-card overflow-hidden">
        <ResultCard score={averageScore} />
        <SummaryCard summaryData={summaryData} />
      </div>
    </main>
  );
}
