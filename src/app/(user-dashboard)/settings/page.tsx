import React from 'react';
import DashboardLayout from '@/components/mainlayout/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pencil } from 'lucide-react';

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="w-full min-h-screen bg-[#FDF5F4] p-0">
        <div className="pb-8">
          <h1 className="text-4xl font-bold text-[#0C0E12] mb-2">Settings</h1>
          <p className="text-[#7B7B7B] text-base max-w-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Basic Information */}
          <Card className="p-6 bg-white border border-[#E5E5E5] rounded-xl flex flex-col gap-4">
            <h2 className="text-xl font-bold text-[#0C0E12] mb-2">Basic Information</h2>
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Input placeholder="First Name" className="pr-10 h-10" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7B7B7B] cursor-pointer">
                  <Pencil className="w-4 h-4" />
                </span>
              </div>
              <div className="flex-1 relative">
                <Input placeholder="Last Name" className="pr-10 h-10" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7B7B7B] cursor-pointer">
                  <Pencil className="w-4 h-4" />
                </span>
              </div>
            </div>
            <div className="flex-1 relative">
              <Input placeholder="Example@gmail.com" className="pr-10 h-10" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7B7B7B] cursor-pointer">
                <Pencil className="w-4 h-4" />
              </span>
            </div>
          </Card>
          {/* CASPer Test Date */}
          <Card className="p-6 bg-white border border-[#E5E5E5] rounded-xl flex flex-col gap-4 justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#0C0E12] mb-2">CASPer Test Date</h2>
              <div className="text-base text-[#7B7B7B] mb-4">March 19, 2025</div>
            </div>
            <Button className="bg-white border border-[#E5E5E5] text-[#0C0E12] rounded px-6 py-2 text-base font-semibold shadow-none flex items-center gap-2 self-end hover:bg-secondary hover:text-white">
              <Pencil className="w-4 h-4" /> Edit Date
            </Button>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Interview Access */}
          <Card className="p-6 bg-white border border-[#E5E5E5] rounded-xl flex flex-col gap-4">
            <h2 className="text-xl font-bold text-[#0C0E12] mb-2">Interview Access</h2>
            <div className="text-base text-[#7B7B7B] mb-2">Manage your interview access and billing details</div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base font-semibold text-[#0C0E12]">Status</span>
              <span className="bg-[#FFE6E6] text-secondary text-xs font-semibold rounded px-3 py-1 ml-2">Expired</span>
            </div>
            <div className="text-base font-semibold text-[#0C0E12]">Access Expires</div>
            <div className="text-lg font-bold text-[#0C0E12] mb-2">May 7, 2025</div>
            <div className="text-sm text-[#7B7B7B] mb-4">Your 1 Week Access cancels on May 7, 2025</div>
            <Button className="bg-secondary hover:bg-secondary/80 text-white rounded-full px-8 py-2 text-base font-semibold shadow-none self-start">Get Started</Button>
          </Card>
        </div>
        <div className="flex justify-end mt-12">
          <Button className="bg-secondary hover:bg-secondary/80 text-white rounded-full px-10 py-3 text-base font-semibold shadow-none">Sign Out</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;