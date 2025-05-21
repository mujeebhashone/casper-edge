import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm px-8 py-7 flex flex-col gap-2 w-full">
      <span className="text-base text-[#7B7B7B] font-medium mb-1">{title}</span>
      <span className="text-4xl font-bold text-[#0C0E12] leading-tight">{value}</span>
      <span className="text-lg text-[#222] font-medium mt-1">{subtitle}</span>
    </div>
  );
};

export default StatCard; 