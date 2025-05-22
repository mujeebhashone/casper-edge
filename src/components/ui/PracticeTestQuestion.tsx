import React from 'react';
import { Card } from './card';
import { Button } from './button';
import { Timer as TimerIcon } from 'lucide-react';

interface PracticeTestQuestionProps {
  question: string;
  description: string;
  current: number;
  total: number;
  timer: number;
  onNext: () => void;
}

const pad = (n: number) => (n < 10 ? `0${n}` : n);

const PracticeTestQuestion: React.FC<PracticeTestQuestionProps> = ({ question, description, current, total, timer, onNext }) => {
  const min = Math.floor(timer / 60);
  const sec = timer % 60;
  return (
    <Card className="bg-white border-0 shadow-none rounded-xl p-10 flex flex-col w-full">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full border-4 border-secondary flex items-center justify-center text-secondary text-xl font-bold">
            {current}/{total}
          </div>
          <div className="text-lg font-bold text-[#0C0E12]">{question}</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TimerIcon className="w-8 h-8 text-secondary" />
          <span className="text-secondary text-lg font-semibold">{pad(min)}:{pad(sec)}</span>
        </div>
      </div>
      <hr className="mb-6" />
      <div className="text-[#656565] text-base font-normal mb-8">{description}</div>
      <div className="flex justify-end">
        <Button className="bg-secondary hover:bg-secondary/80 text-white rounded-full px-8 py-2 text-lg font-semibold shadow-none" onClick={onNext}>
          Next
        </Button>
      </div>
    </Card>
  );
};

export default PracticeTestQuestion; 