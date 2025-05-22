import React from 'react';
import { Card } from './card';

const gradeLabels = ['F', 'D', 'C', 'B', 'A'];
const gradePercents = { F: 0.2, D: 0.4, C: 0.6, B: 0.8, A: 1 };

interface PracticeTestScoreBarProps {
  grade: keyof typeof gradePercents;
  label?: string;
}

const PracticeTestScoreBar: React.FC<PracticeTestScoreBarProps> = ({ grade, label = 'Your Average Score' }) => {
  const barPercent = gradePercents[grade];
  const arrowLeft = `calc(${barPercent * 100}% - 24px)`;
  return (
    <Card className="bg-white border-0 shadow-none rounded-xl p-8 flex flex-col items-center w-full">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-2">
          <span className="text-lg font-semibold text-[#0C0E12]">{label}</span>
        </div>
        <div className="relative w-full flex flex-col items-center">
          {/* GRADE label and arrow */}
          <span className="absolute -top-10 left-0" style={{ left: arrowLeft }}>
            <span className="text-secondary text-xs font-bold">GRADE {grade}</span>
            <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto block">
              <path d="M12 8L0 0H24L12 8Z" fill="#DA3539" />
            </svg>
          </span>
          {/* Score bar */}
          <div className="w-full h-8 bg-[#F3F3F3] rounded-full overflow-hidden flex">
            <div className="bg-secondary h-8 rounded-full" style={{ width: `${barPercent * 100}%`, borderTopRightRadius: barPercent === 1 ? '1.5rem' : 0, borderBottomRightRadius: barPercent === 1 ? '1.5rem' : 0 }} />
            <div className="flex-1" />
          </div>
          {/* Grade labels */}
          <div className="flex justify-between w-full mt-2 text-[#656565] text-base font-semibold">
            {gradeLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PracticeTestScoreBar; 