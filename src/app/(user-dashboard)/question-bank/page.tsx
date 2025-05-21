import React from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import DashboardLayout from '@/components/mainlayout/DashboardLayout';

const filters = [
  'Public Policy',
  'Research',
  'Healthcare Ethics',
  'Decision Making',
  'Patient Care',
  'Critical Thinking',
  'Conflict Resolution',
  'Social Issues',
  'Teamwork',
  'Empathy',
];

const QuestionBankPage = () => {
  return (
    <DashboardLayout>
    <div className="w-full min-h-screen bg-[#FDF5F4] p-0">
      <div className="flex items-center justify-between pt-2 pb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#0C0E12] mb-1">Question Bank</h1>
          <p className="text-[#7B7B7B] text-base font-normal">Track your interview practice progress</p>
        </div>
        <Button className="bg-[#DA3539] hover:bg-[#b82b2e] text-white rounded-full px-6 py-2 text-base font-semibold shadow-none" size="lg">
          + Add Question
        </Button>
      </div>
      <Card className="p-0 bg-white border-0 shadow-none">
        {/* Table Header */}
        <div className="flex items-center px-6 py-4 bg-[#FFE6E6] rounded-t-xl border-b border-[#F8D2D2]">
          <span className="font-bold text-lg text-[#0C0E12] flex-1">Filters</span>
          <div className="flex items-center gap-2">
            <Switch id="show-only-mine" />
            <label htmlFor="show-only-mine" className="text-base font-semibold text-[#0C0E12] ml-2 select-none cursor-pointer">Show only your question</label>
          </div>
          <span className="ml-4 text-base font-medium text-[#0C0E12] cursor-pointer select-none">&#9660;</span>
        </div>
        {/* Table Body */}
        <div className="px-2 py-4">
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {filters.map((label, i) => (
              <div key={label} className="flex items-center py-2 px-2">
                <Checkbox id={`filter-${i}`} className="mr-3 border-gray-500 bg-white rounded-none" />
                <label htmlFor={`filter-${i}`} className="text-base text-[#0C0E12] font-normal cursor-pointer flex-1">
                  {label}
                </label>
                <span className="ml-2 bg-[#FFDBDC] text-primary text-sm font-semibold rounded px-2 py-0.5">08</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
    </DashboardLayout>
  );
};

export default QuestionBankPage;