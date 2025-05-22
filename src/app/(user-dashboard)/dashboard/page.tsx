'use client'

import DashboardLayout from '@/components/mainlayout/DashboardLayout'
import React from 'react'
import StatCard from '@/components/mainlayout/StatCard'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';

const stats = [
  { title: 'Course Progress', value: 'X # of # courses completed', subtitle: '', buttonLabel: 'Course' },
  { title: 'Scenario Bank', value: 'X# of 100 scenarios complete', subtitle: '', buttonLabel: 'Scenario Bank' },
  { title: 'Practice Tests', value: '# of 2 tests complete', subtitle: '', buttonLabel: 'Tests' },
];

const chartData = [
  { test: 'Test 1', score1: 2, score2: 2 },
  { test: 'Test 2', score1: 1.5, score2: 2.2 },
  { test: 'Test 3', score1: 2, score2: 2.1 },
  { test: 'Test 4', score1: 2.7, score2: 2.5 },
  { test: 'Test 5', score1: 2.3, score2: 2.8 },
  { test: 'Test 6', score1: 2.6, score2: 3.1 },
  { test: 'Test 7', score1: 2.8, score2: 3.3 },
];

const chartConfig = {
  score1: {
    label: 'Your Score',
    color: 'hsl(0, 80%, 60%)', // red
  },
  score2: {
    label: 'Average',
    color: 'hsl(0, 80%, 80%)', // light red
  },
};

const gradeTicks = [0, 1, 2, 3];
const gradeLabels = ['D', 'C', 'B', 'A'];

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="w-full min-h-screen bg-[#FDF5F4] p-0">
        <div className="pt-2 pb-8">
          <h1 className="text-3xl font-bold text-[#0C0E12] mb-1">Dashboard</h1>
          <p className="text-[#7B7B7B] text-base font-normal">Track your interview practice progress</p>
        </div>
        {/* Stats Cards */}
        <div className="flex gap-6 mb-10">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
        {/* Recent Practice + Chart Row */}
        <div className="flex gap-6 mt-8 h-[340px]">
          {/* Review Previous Practice */}
          <div className="bg-white rounded-xl shadow-sm p-6 w-[600px] flex-shrink-0">
            <h2 className="text-2xl font-bold text-[#0C0E12] mb-4">Review Previous Practice</h2>
            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex items-center gap-4">
                  <div className="bg-[#DA3539] text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-lg">{n}</div>
                  <div className="flex-1">
                    <div className="text-xs text-[#7B7B7B]">Date Test Taken</div>
                    <div className="font-bold text-base text-[#0C0E12]">May 28, 2025</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[#7B7B7B]">Grade</div>
                    <div className="font-bold text-lg text-[#0C0E12]">A+</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Chart */}
          <div className="bg-white rounded-xl shadow-sm flex-1 flex items-center justify-center">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <LineChart data={chartData} barGap={2} style={{ padding: '10px'}} className=''>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="test" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#7B7B7B' }} />
                <YAxis
                  type="number"
                  domain={[0, 3]}
                  ticks={gradeTicks}
                  tickFormatter={(v) => gradeLabels[v]}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12, fill: '#7B7B7B' }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="score1" stroke="hsl(0, 80%, 60%)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="score2" stroke="hsl(0, 80%, 80%)" strokeWidth={2} strokeDasharray="6 4" dot={false} />
              </LineChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage