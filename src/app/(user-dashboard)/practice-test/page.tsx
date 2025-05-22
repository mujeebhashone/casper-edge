'use client'

import React, { useState } from 'react';
import PracticeTestList from '@/components/ui/PracticeTestList';
import PracticeTestQuestion from '@/components/ui/PracticeTestQuestion';
import PracticeTestScoreBar from '@/components/ui/PracticeTestScoreBar';
import PracticeTestReviewAnswers from '@/components/ui/PracticeTestReviewAnswers';
import PracticeTestFeedback from '@/components/ui/PracticeTestFeedback';
import DashboardLayout from '@/components/mainlayout/DashboardLayout';

const tests = [
  {
    title: 'Lorem Ipsum is simply dummy text of the printing',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    questions: [
      {
        question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy has been the industry\'s standard dummy?',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        question: 'Another dummy question for the test?',
        description: 'Another dummy description for the test question. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ],
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    questions: [
      {
        question: 'Second test, first question?',
        description: 'Second test, first question description.',
      },
      {
        question: 'Second test, second question?',
        description: 'Second test, second question description.',
      },
    ],
  },
];

const grade = 'C';

const PracticeTestPage = () => {
  const [step, setStep] = useState<'list' | 'test' | 'result' | 'feedback'>('list');
  const [selectedTest, setSelectedTest] = useState<number | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [timer, setTimer] = useState(6 * 60 + 12);
  const [feedbackIdx, setFeedbackIdx] = useState(0);

  React.useEffect(() => {
    if (step !== 'test') return;
    if (timer <= 0) {
      setStep('result');
      return;
    }
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [step, timer]);

  // Test List
  if (step === 'list') {
    return (
      <DashboardLayout>
      <div className="w-full min-h-screen bg-[#FDF5F4] p-0 flex flex-col">
        <h1 className="text-4xl font-bold text-[#0C0E12] mb-8 mt-8 ml-2">Practice Test</h1>
        <PracticeTestList
          tests={tests}
          onLaunch={(i) => {
            setSelectedTest(i);
            setStep('test');
            setCurrentQ(0);
            setTimer(6 * 60 + 12);
          }}
        />
      </div>
      </DashboardLayout>
    );
  }

  // Test Taking
  if (step === 'test' && selectedTest !== null) {
    const test = tests[selectedTest];
    const q = test.questions[currentQ];
    return (
      <DashboardLayout>
      <div className="w-full min-h-screen bg-[#FDF5F4] p-0 flex flex-col">
        <h1 className="text-4xl font-bold text-[#0C0E12] mb-8 mt-8 ml-2">Practice Test</h1>
        <div className="flex flex-col items-center w-full">
          <PracticeTestQuestion
            question={q.question}
            description={q.description}
            current={currentQ + 1}
            total={test.questions.length}
            timer={timer}
            onNext={() => {
              if (currentQ === test.questions.length - 1) {
                setStep('result');
              } else {
                setCurrentQ(currentQ + 1);
              }
            }}
          />
        </div>
      </div>
      </DashboardLayout>
    );
  }

  // Test Result
  if (step === 'result' && selectedTest !== null) {
    const test = tests[selectedTest];
    return (
      <DashboardLayout>
      <div className="w-full min-h-screen bg-[#FDF5F4] p-0 flex flex-col">
        <h1 className="text-4xl font-bold text-[#0C0E12] mb-8 mt-8 ml-2">Practice Test</h1>
        <div className="flex flex-col gap-8 w-full">
          <PracticeTestScoreBar grade={grade} label="Your Average Score" />
          <div>
            <h2 className="text-2xl font-bold text-[#0C0E12] mb-6">Review Your Answers</h2>
            <PracticeTestReviewAnswers
              questions={test.questions}
              onFeedback={(idx) => {
                setFeedbackIdx(idx);
                setStep('feedback');
              }}
            />
          </div>
        </div>
      </div>
      </DashboardLayout>
    );
  }

  // Feedback
  if (step === 'feedback' && selectedTest !== null) {
    const test = tests[selectedTest];
    const q = test.questions[feedbackIdx];
    return (
      <DashboardLayout>
      <div className="w-full min-h-screen bg-[#FDF5F4] p-0 flex flex-col">
        <h1 className="text-4xl font-bold text-[#0C0E12] mb-8 mt-8 ml-2">Feedback</h1>
        <PracticeTestFeedback
          question={q.question}
          description={q.description}
          onPrev={() => setFeedbackIdx(feedbackIdx - 1)}
          onNext={() => setFeedbackIdx(feedbackIdx + 1)}
          disablePrev={feedbackIdx === 0}
          disableNext={feedbackIdx === test.questions.length - 1}
        />
      </div>
      </DashboardLayout>
    );
  }

  return null;
};

export default PracticeTestPage;