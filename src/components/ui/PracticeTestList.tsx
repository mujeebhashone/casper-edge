import React from 'react';
import { Card } from './card';
import { Button } from './button';

interface PracticeTestListProps {
  tests: { title: string; description: string }[];
  onLaunch: (index: number) => void;
}

const PracticeTestList: React.FC<PracticeTestListProps> = ({ tests, onLaunch }) => (
  <div className="flex flex-col gap-6 w-full">
    {tests.map((test, i) => (
      <Card key={i} className="bg-white border-0 shadow-none rounded-xl p-8 flex flex-row items-center justify-between w-full">
        <div>
          <div className="text-xl font-bold text-[#0C0E12] mb-2">{test.title}</div>
          <div className="text-[#656565] text-base font-normal">{test.description}</div>
        </div>
        <Button className="bg-secondary hover:bg-secondary/80 text-white rounded-full px-8 py-2 text-lg font-semibold shadow-none" onClick={() => onLaunch(i)}>
          Launch
        </Button>
      </Card>
    ))}
  </div>
);

export default PracticeTestList; 