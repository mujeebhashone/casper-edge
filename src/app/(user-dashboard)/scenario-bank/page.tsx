'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import DashboardLayout from '@/components/mainlayout/DashboardLayout';
import Link from 'next/link';

const scenarioOptions = [
  { label: 'Unused', count: 4520 },
  { label: 'Unused', count: 4520 },
  { label: 'Unused', count: 4520 },
  { label: 'Unused', count: 4520 },
  { label: 'Unused', count: 4520 },
];

const categories = [
  'Anatomy', 'Behavioral science', 'Biostatistics', 'Embryology', 'Genetics',
  'Histology', 'Immunology', 'Microbiology', 'Pathology', 'Pathophysiology',
];

const ScenarioBankPage = () => {
  const [testMode, setTestMode] = useState('Tutor');
  const [selectedOptions, setSelectedOptions] = useState([0, 1, 2, 3, 4]);
  const [selectedCategories, setSelectedCategories] = useState(categories.map((_, i) => i));
  const [numScenario, setNumScenario] = useState('1-10');

  return (
    <DashboardLayout>
      <div className="w-full min-h-screen bg-[#FDF5F4] p-0 flex flex-col">
        <div className="pt-2 pb-8">
          <h1 className="text-3xl font-bold text-[#0C0E12] mb-1">Scenario Bank</h1>
        </div>
        <Card className="bg-white border-0 shadow-none rounded-xl p-8 flex-1 flex flex-col relative">
          {/* Test Mode */}
          <div className="flex items-center gap-6 mb-6">
            <span className="text-lg font-semibold text-[#0C0E12]">Test Mode</span>
            <div className="flex items-center gap-2">
              <Switch checked={testMode === 'Tutor'} onCheckedChange={() => setTestMode('Tutor')} className="data-[state=checked]:bg-[#DA3539]" />
              <span className={`ml-2 text-base font-semibold ${testMode === 'Tutor' ? 'text-[#DA3539]' : 'text-[#7B7B7B]'}`}>Tutor</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Switch checked={testMode === 'Timed'} onCheckedChange={() => setTestMode('Timed')} className="data-[state=checked]:bg-[#DA3539]" />
              <span className={`ml-2 text-base font-semibold ${testMode === 'Timed' ? 'text-[#DA3539]' : 'text-[#7B7B7B]'}`}>Timed</span>
            </div>
          </div>
          {/* Scenario Options */}
          <div className="mb-4">
            <span className="text-lg font-semibold text-[#0C0E12] block mb-3">Scenario Options</span>
            <div className="flex gap-4 flex-wrap">
              {scenarioOptions.map((opt, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Checkbox checked={selectedOptions.includes(i)} onCheckedChange={() => {
                    setSelectedOptions(selectedOptions.includes(i) ? selectedOptions.filter(idx => idx !== i) : [...selectedOptions, i]);
                  }} className="data-[state=checked]:bg-[#DA3539] data-[state=checked]:border-[#DA3539]" />
                  <span className="text-base font-semibold text-[#0C0E12]">{opt.label}</span>
                  <span className="text-[#7B7B7B] text-sm font-medium ml-1">{opt.count}</span>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-6 border-[#E5E5E5]" />
          {/* Category */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Checkbox checked className="data-[state=checked]:bg-[#DA3539] data-[state=checked]:border-[#DA3539]" />
              <span className="text-lg font-semibold text-[#0C0E12]">Category</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {categories.map((cat, i) => (
                <div key={cat} className="flex items-center gap-2">
                  <Checkbox checked={selectedCategories.includes(i)} onCheckedChange={() => {
                    setSelectedCategories(selectedCategories.includes(i) ? selectedCategories.filter(idx => idx !== i) : [...selectedCategories, i]);
                  }} className="data-[state=checked]:bg-[#DA3539] data-[state=checked]:border-[#DA3539]" />
                  <span className="text-base font-semibold text-[#0C0E12]">{cat}</span>
                  <span className="text-[#7B7B7B] text-sm font-medium ml-1">4520</span>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-6 border-[#E5E5E5]" />
          {/* No. of Scenario */}
          <div className="mb-8">
            <span className="text-lg font-semibold text-[#0C0E12] block mb-3">No. of Scenario</span>
            <RadioGroup value={numScenario} onValueChange={setNumScenario} className="flex gap-4">
              <RadioGroupItem value="1-10" className="border-[#E5E5E5] data-[state=checked]:bg-[#FDF5F4] data-[state=checked]:border-[#DA3539] size-12 flex items-center justify-center rounded-lg text-lg font-semibold text-[#0C0E12]" id="range-1" />
              <label htmlFor="range-1" className="flex items-center justify-center w-24 h-12 rounded-lg border border-[#E5E5E5] text-lg font-semibold text-[#0C0E12] cursor-pointer bg-white">1 - 10</label>
            </RadioGroup>
          </div>
          {/* Generate Test Button */}
          <div className="flex justify-end mt-auto">
            <Link href="/scenario-bank/practice">
            <Button className="bg-[#DA3539] hover:bg-[#b72a2d] text-white rounded-full px-8 py-3 text-lg font-semibold shadow-none">Generate Test</Button>
            </Link>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ScenarioBankPage;