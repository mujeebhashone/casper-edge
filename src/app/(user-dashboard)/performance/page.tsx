'use client'

import React from 'react';
import DashboardLayout from '@/components/mainlayout/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer } from '@/components/ui/chart';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Area } from 'recharts';

const chartData = [
  { test: 'Test 1', score1: 2, score2: 2.5 },
  { test: 'Test 2', score1: 1.5, score2: 2.1 },
  { test: 'Test 3', score1: 2, score2: 2.3 },
  { test: 'Test 4', score1: 2.7, score2: 3.1 },
  { test: 'Test 5', score1: 2.3, score2: 2.8 },
  { test: 'Test 6', score1: 2.6, score2: 3.3 },
  { test: 'Test 7', score1: 2.8, score2: 3.6 },
];
const chartConfig = {
  score1: { label: 'Your Score', color: 'hsl(0, 80%, 60%)' },
  score2: { label: 'Average', color: 'hsl(0, 80%, 80%)' },
};
const gradeTicks = [0, 1, 2, 3];
const gradeLabels = ['D', 'C', 'B', 'A'];

const scenarios = [
  {
    title: 'Practice Test #1',
    date: 'May 28, 2025',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply .",
  },
  {
    title: 'Practice Test #2',
    date: 'May 20, 2025',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply .",
  },
];

const PerformancePage = () => {
  return (
    <DashboardLayout>
      <div className="w-full min-h-screen bg-[#FDF5F4] p-0 flex flex-col">
        <h1 className="text-4xl font-bold text-[#0C0E12] mb-8 mt-8 ml-2">Performance</h1>
        <div className="flex flex-col gap-8 w-full">
          {/* Chart Card */}
          <Card className="bg-white border-0 shadow-none rounded-xl flex flex-col w-full mb-8">
            <span className="text-2xl font-semibold text-primary mb-4 pl-15">Performance</span>
            <ChartContainer config={chartConfig} className="w-full max-h-[513px] flex items-center justify-center">
              <LineChart className='w-full' data={chartData} margin={{ left: 32, right: 32, top: 24, bottom: 32 }} height={320} style={{ borderRadius: '0.75rem', background: '#fff' }}>
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#B3E5FC" stop-opacity="0.5" />
                    <stop offset="100%" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="score1" stroke={undefined} fill="url(#areaGradient)" fillOpacity={1} activeDot={false} isAnimationActive={false} />
                <CartesianGrid stroke="#fff" vertical={false} />
                <XAxis dataKey="test" tickLine={false} axisLine={{ stroke: '#DA3539', strokeWidth: 2 }} tick={{ fontSize: 18, fill: '#656565' }} />
                <YAxis
                  type="number"
                  domain={[0, 3]}
                  ticks={gradeTicks}
                  tickFormatter={(v) => gradeLabels[v]}
                  tickLine={false}
                  axisLine={{ stroke: '#DA3539', strokeWidth: 2 }}
                  tick={{ fontSize: 18, fill: '#656565' }}
                />
                <Line type="monotone" dataKey="score1" stroke="#DA3539" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="score2" stroke="#DA3539" strokeWidth={2} strokeDasharray="6 4" dot={false} opacity={0.5} />
              </LineChart>
            </ChartContainer>
          </Card>
          {/* Review Previous Scenarios */}
          <h2 className="text-2xl font-bold text-[#0C0E12] mb-6">Review Previous Scenarios</h2>
          <div className="flex flex-col gap-6">
            {scenarios.map((s, i) => (
              <Card key={i} className="bg-white border-0 shadow-none rounded-xl p-8 flex flex-row items-center justify-between w-full">
                <div>
                  <div className="text-xl font-bold text-[#0C0E12] mb-2">{s.title}</div>
                  <div className="text-[#656565] text-base font-normal italic mb-2">{s.date}</div>
                  <div className="text-[#656565] text-base font-normal">{s.description}</div>
                </div>
                <Button className="bg-[#DA3539] hover:bg-[#b72a2d] text-white rounded-full px-8 py-2 text-lg font-semibold shadow-none">Review</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PerformancePage;