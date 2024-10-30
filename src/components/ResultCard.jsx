import React from "react";

const ResultCard = ({ score }) => {
  const calculatePercentile = (score) => {
    if (score >= 90) return 95;
    if (score >= 80) return 85;
    if (score >= 70) return 75;
    if (score >= 60) return 65;
    if (score >= 50) return 50;
    if (score >= 40) return 35;
    if (score >= 30) return 25;
    if (score >= 20) return 15;
    return 5;
  };

  const getFeedbackMessage = (score) => {
    if (score >= 90) return "Outstanding";
    if (score >= 70) return "Great";
    if (score >= 50) return "Good";
    if (score >= 30) return "OK";
    return "Below Average";
  };

  return (
    <div className="w-full md:w-1/2 bg-gradient-to-b from-[#7755FF] to-[#2F2CE9] rounded-[32px] p-10 text-center flex flex-col items-center">
      <h2 className="text-[#CAC9FF] text-2xl mb-8 font-extrabold">
        Your Result
      </h2>

      <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-b from-[#4D21C9] to-[rgba(37,33,201,0)] flex flex-col items-center justify-center mb-7">
        <span className="text-white text-[72px] font-bold leading-tight">
          {score}
        </span>
        <span className="text-[#CAC9FF] text-lg font-medium">of 100</span>
      </div>

      <h3 className="text-white text-[32px] font-bold mb-3">
        {" "}
        {getFeedbackMessage(score)}
      </h3>
      <p className="text-[#CAC9FF] text-lg max-w-[260px] font-bold leading-5">
        You scored higher than {calculatePercentile(score)}% of the people who
        have taken these tests.
      </p>
    </div>
  );
};

export default ResultCard;
