import React from 'react';
import { Card } from './card';
import { Button } from './button';

interface PracticeTestReviewAnswersProps {
  questions: { question: string; description: string }[];
  onFeedback: (index: number) => void;
}

const PracticeTestReviewAnswers: React.FC<PracticeTestReviewAnswersProps> = ({ questions, onFeedback }) => (
  <div className="flex flex-col gap-8">
    {questions.map((q, i) => (
      <div key={i}>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-2xl font-bold text-primary">Q{i + 1}</span>
          <span className="text-lg font-bold text-primary">{q.question}</span>
        </div>
        <Card className="bg-white rounded-xl border-0 shadow p-8 text-[#656565] text-base font-normal flex justify-between items-center">
          <span className="w-full">{q.description}</span>
          <Button className="bg-secondary ml-auto hover:bg-secondary/80 text-white rounded-full px-8 py-2 text-lg font-semibold shadow-none" onClick={() => onFeedback(i)}>
            See Feedback
          </Button>
        </Card>
      </div>
    ))}
  </div>
);

export default PracticeTestReviewAnswers; 