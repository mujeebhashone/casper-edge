import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  buttonLabel?: string;
  onClick?: () => void;
  href?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle, buttonLabel = 'View', onClick, href }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm px-8 py-7 flex flex-col items-center justify-between w-full min-h-[200px]">
      <div className="flex flex-col items-start flex-1 w-full">
        <span className="text-2xl font-bold text-[#0C0E12] mb-2 text-center">{title}</span>
        <span className="text-base text-[#656565] font-medium mb-1 text-center">{subtitle}</span>
        <span className="text-lg text-[#656565] mt-1 mb-6 text-center">{value}</span>
      </div>
      {href ? (
        <Link href={href}>
          <Button className="mr-auto bg-secondary hover:bg-secondary/80 text-white rounded-full px-6 py-2 mt-2 w-full font-semibold text-base shadow-none">{buttonLabel}</Button>
        </Link>
      ) : (
        <Button onClick={onClick} className="bg-secondary hover:bg-secondary/80 mr-auto text-white rounded-full px-6 py-2 mt-2 w-[136px] font-semibold text-base shadow-none">{buttonLabel}</Button>
      )}
    </div>
  );
};

export default StatCard; 