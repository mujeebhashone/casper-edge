import React from 'react';
import { Card } from './card';
import { Button } from './button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PracticeTestFeedbackProps {
  question: string;
  description: string;
  onPrev: () => void;
  onNext: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
}

const PracticeTestFeedback: React.FC<PracticeTestFeedbackProps> = ({ question, description, onPrev, onNext, disablePrev, disableNext }) => (
  <div className="flex flex-col w-full">
    <div className="text-xl font-bold text-[#0C0E12] mb-4">Scenario: {question}</div>
    <Card className="bg-white rounded-xl border-0 shadow p-8 text-[#656565] text-base font-normal flex flex-col gap-6">
      <span>{description}</span>
      <span>{description}</span>
    </Card>
    <div className="flex justify-end gap-4 mt-8">
      <Button variant="ghost" className="rounded-full px-4 py-2 text-secondary text-lg font-semibold bg-transparent" disabled={disablePrev} onClick={onPrev}>
        <ChevronLeft className="w-10 h-10" />
      </Button>
      <Button variant="ghost" className="rounded-full px-4 py-2 text-secondary text-lg font-semibold bg-transparent" disabled={disableNext} onClick={onNext}>
       <ChevronRight className="w-10 h-10" />
      </Button>
    </div>
  </div>
);

export default PracticeTestFeedback; 