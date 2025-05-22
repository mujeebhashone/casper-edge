'use client';
import React from 'react';
import { Card } from '@/components/ui/card';
import DashboardLayout from '@/components/mainlayout/DashboardLayout';

const tableData = [
  { name: 'John Jeck', category: 'Behavioral science', grade: 'B' },
  { name: 'John Jeck', category: 'Behavioral science', grade: 'B' },
  { name: 'John Jeck', category: 'Behavioral science', grade: 'B' },
  { name: 'John Jeck', category: 'Behavioral science', grade: 'B' },
  { name: 'John Jeck', category: 'Behavioral science', grade: 'B' },
  { name: 'John Jeck', category: 'Behavioral science', grade: 'B' },
];

const ResultPage = () => {
  const gradeLabels = ['F', 'D', 'C', 'B', 'A'];
  const grade = 'B';
  const gradePercents = { F: 0.2, D: 0.4, C: 0.6, B: 0.8, A: 1 };
  const barPercent = gradePercents[grade];
  const arrowLeft = `calc(${barPercent * 100}% - 24px)`;

  return (
    <DashboardLayout>
      <div className="w-full min-h-screen bg-[#FDF5F4] p-0 flex flex-col">
        <h1 className="text-3xl font-bold text-[#0C0E12] mb-8 mt-8 ml-2">How did you do?</h1>
        <div className="flex flex-col gap-8 w-full">
          {/* Score Bar */}
          <Card className="bg-white border-0 shadow-none rounded-xl p-8 flex flex-col items-center w-full">
            <div className="w-full flex flex-col items-center">
              <div className="w-full flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-[#0C0E12]">Your Score</span>
              </div>
              <div className="relative w-full flex flex-col items-center">
                {/* GRADE label and arrow */}
                <span className="absolute -top-10 left-0" style={{ left: arrowLeft }}>
                  <span className="text-[#DA3539] text-xs font-bold">GRADE {grade}</span>
                  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto block">
                    <path d="M12 8L0 0H24L12 8Z" fill="#DA3539" />
                  </svg>
                </span>
                {/* Score bar */}
                <div className="w-full h-8 bg-[#F3F3F3] rounded-full overflow-hidden flex">
                  <div className="bg-[#DA3539] h-8 rounded-full" style={{ width: `${barPercent * 100}%`, borderTopRightRadius: barPercent === 1 ? '1.5rem' : 0, borderBottomRightRadius: barPercent === 1 ? '1.5rem' : 0 }} />
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
          {/* Table */}
          <Card className="bg-white border-0 shadow-none rounded-xl p-0 w-full">
            <table className="w-full text-left rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#FDF5F4] text-[#0C0E12] text-lg font-semibold">
                  <th className="py-4 px-6">Scenario Name</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Grade</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className="border-t border-[#E5E5E5] text-[#656565] text-base font-normal">
                    <td className="py-4 px-6">{row.name}</td>
                    <td className="py-4 px-6">{row.category}</td>
                    <td className="py-4 px-6">{row.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResultPage; 