import React from 'react';
import { Play } from 'lucide-react';

interface RecentPracticeCardProps {
  text: string;
  onPractice?: () => void;
}

const RecentPracticeCard: React.FC<RecentPracticeCardProps> = ({ text, onPractice }) => {
  return (
    <div className="bg-white rounded-xl flex items-center justify-between px-8 py-5 mb-4 shadow-sm">
      <p className="text-[#7B7B7B] text-base leading-relaxed max-w-3xl">
        {text}
      </p>
      <button
        onClick={onPractice}
        className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#DA3539] text-white font-semibold text-base shadow-none hover:bg-[#b82b2e] transition-colors"
      >
        <Play className="w-5 h-5" />
        Practice
      </button>
    </div>
  );
};

export default RecentPracticeCard; 