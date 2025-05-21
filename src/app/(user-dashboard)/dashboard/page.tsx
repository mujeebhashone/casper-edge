import DashboardLayout from '@/components/mainlayout/DashboardLayout'
import React from 'react'
import StatCard from '@/components/mainlayout/StatCard'
import RecentPracticeCard from '@/components/mainlayout/RecentPracticeCard'

const stats = [
  { title: 'Total Interviews', value: '08', subtitle: '10 this Week' },
  { title: 'Current Streak', value: '0 days', subtitle: 'Keep it up!' },
  { title: 'Average Score', value: '0.0%', subtitle: '0.0% from last week' },
]

const recentPractice = [
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum is simply. Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum is simply. Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum is simply. Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum is simply. Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
]

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
        {/* Recent Practice */}
        <div>
          <h2 className="text-2xl font-bold text-[#0C0E12] mb-4">Recent Practice</h2>
          <div>
            {recentPractice.map((text, i) => (
              <RecentPracticeCard key={i} text={text} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage