'use client';

import React, { useEffect, useState } from 'react';

import DashboardLayout from '@/components/mainlayout/DashboardLayout';
import { Timer } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';

const qna = [
  {
    question: 'Simply dummy text of the printing and typesetting industry?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    question: 'Simply dummy text of the printing and typesetting industry?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

function pad(n: number) {
  return n < 10 ? `0${n}` : n;
}

const INITIAL_SECONDS = 6 * 60 + 12;

const ScenarioPracticePage = () => {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);
  const [answers, setAnswers] = useState<string[]>(qna.map(() => ''));
  const router = useRouter();

  useEffect(() => {
    if (seconds <= 0) {
      router.push('/scenario-bank/practice/result');
      return;
    }
    const interval = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(interval);
  }, [seconds, router]);

  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  return (
    <DashboardLayout>
      <div className="w-full min-h-screen bg-[#FDF5F4] p-0 flex flex-col">
        <div className="flex items-start justify-between pt-2 pb-8">
          <div>
            <h1 className="text-4xl font-bold text-[#0C0E12] mb-1">Scenario Practice</h1>
            <p className="text-[#656565] text-lg font-normal max-w-3xl mt-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 mr-8 mt-2">
            <Timer className="w-8 h-8 text-secondary" />
            <span className="text-[#0C0E12] text-lg font-semibold">{pad(min)}:{pad(sec)}</span>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-8">
          {qna.map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-[#0C0E12]">Q{idx + 1}</span>
                <span className="text-lg font-bold text-[#0C0E12]">{item.question}</span>
              </div>
              
                {/* <div className="mb-4">{item.answer}</div> */}
               
                <Textarea
                  id={`answer-${idx}`}
                  placeholder="Type your answer here..."
                  className="bg-white rounded-xl border-0 shadow p-4 min-h-[220px] text-base resize-none "
                  value={answers[idx]}
                  onChange={e => {
                    const newAnswers = [...answers];
                    newAnswers[idx] = e.target.value;
                    setAnswers(newAnswers);
                  }}
                />
            
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ScenarioPracticePage; 