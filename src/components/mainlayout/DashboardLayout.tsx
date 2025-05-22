'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, BookOpen, History, Layers, ClipboardList, Settings, BarChart } from 'lucide-react';
import { usePathname } from 'next/navigation';


const navItems = [
  { label: 'Dashboard', icon: Home, href: '/dashboard' },
  { label: 'Course', icon: Layers, href: '/courses' },
  { label: 'Scenario Bank', icon: BookOpen, href: '/scenario-bank' },
  { label: 'Practice Test', icon: History, href: '/practice-test' },
  { label: 'Performance', icon: BarChart, href: '/performance' },

  { label: 'Your Plan', icon: ClipboardList, href: '/your-plan' },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-[#FDF5F4] flex font-sans py-10">
      {/* Sidebar */}
      <aside className="w-[330px] bg-white rounded-2xl m-10 flex flex-col justify-between shadow-md fixed left-0 top-0 h-[calc(100vh-70px)] z-30">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 px-6 py-8">
            <Image src="/assets/images/logo-casper.png" alt="CASPer Edge" width={228} height={62}/>
          </div>
          {/* Nav Items */}
          <nav className="flex flex-col mt-2">
            {navItems.map(({ label, icon: Icon, href }) => (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 ${pathname === href ? 'bg-secondary text-white' : ''} px-6 py-3 text-lg transition-colors text-[#0C0E12] hover:bg-secondary hover:text-white border-b border-[#E5E5E5]`}
                // TODO: Add active state logic
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Settings */}
        <div className="">
       
          <Link href="/settings" className={`flex items-center hover:rounded-b-lg gap-3 px-3 py-2 text-lg text-[#0C0E12] hover:bg-secondary hover:text-white ${pathname === '/settings' ? 'bg-secondary text-white' : ''}`}>
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 ml-[360px]">{children}</main>
    </div>
  );
};

export default DashboardLayout; 