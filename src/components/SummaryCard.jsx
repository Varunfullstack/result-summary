import Image from "next/image";
import React from "react";

const SummaryCard = ({ summaryData }) => {
  const categoryStyles = {
    Reaction: "bg-[#FFF6F5] text-red",
    Memory: "bg-[#FFFBF2] text-yellow",
    Verbal: "bg-[#F2FAFA] text-green",
    Visual: "bg-[#F3F3FD] text-blue",
  };

  return (
    <div className="w-full md:w-1/2 md:p-10 py-6 px-10">
      <h3 className="text-[#303B59] text-2xl font-bold md:mb-7 mb-6">
        Summary
      </h3>

      <div className="space-y-4 md:mb-10 mb-6">
        {summaryData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-xl ${
              categoryStyles[item.category]
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={item.icon}
                alt={`${item.category} icon`}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="font-bold">{item.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#303B59] font-bold">{item.score}</span>
              <span className="text-[#303B59]/50 font-bold">/ 100</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full bg-[#303B59] hover:bg-gradient-to-b hover:from-[#7755FF] hover:to-[#2F2CE9] text-white rounded-full py-4 text-lg font-medium transition-colors font-bold">
        Continue
      </button>
    </div>
  );
};

export default SummaryCard;
