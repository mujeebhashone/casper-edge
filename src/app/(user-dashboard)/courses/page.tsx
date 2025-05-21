'use client'

import React, { useRef, useState } from 'react';
import DashboardLayout from '@/components/mainlayout/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Play } from 'lucide-react';

const modules = [
  {
    title: 'Course Modules 01',
    author: 'Bruno Scott',
    image: '/assets/images/blog1.png',
  },
  {
    title: 'Course Modules 02',
    author: 'Bruno Scott',
    image: '/assets/images/blog2.png',
  },
  {
    title: 'Course Modules 03',
    author: 'Bruno Scott',
    image: '/assets/images/blog3.png',
  },
  {
    title: 'Course Modules 04',
    author: 'Bruno Scott',
    image: '/assets/images/blog4.png',
  },
  {
    title: 'Course Modules 05',
    author: 'Bruno Scott',
    image: '/assets/images/blog5.png',
  },
  {
    title: 'Course Modules 06',
    author: 'Bruno Scott',
    image: '/assets/images/blog1.png',
  },
  {
    title: 'Course Modules 07',
    author: 'Bruno Scott',
    image: '/assets/images/blog2.png',
  },
  {
    title: 'Course Modules 08',
    author: 'Bruno Scott',
    image: '/assets/images/blog3.png',
  },
];

const poster = '/assets/images/practiceimage.png';

const CoursesPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <DashboardLayout>
      <div className="w-full min-h-screen bg-[#FDF5F4] p-0">
        <div className="pb-8">
          <h1 className="text-4xl font-bold text-primary mb-1">Course</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Video Player */}
          <div className="flex-1 flex flex-col">
            <Card className="p-4 bg-white border-0 shadow-md rounded-xl flex-1 flex justify-center items-center">
              <div
                className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border-2 border-[#F3F3F3] shadow-lg"
                style={{
                  backgroundImage: !isPlaying ? `url(${poster})` : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <video
                  ref={videoRef}
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  controls
                  className="w-full h-full min-h-[300px] object-cover rounded-2xl bg-transparent"
                  poster={poster}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                {!isPlaying && (
                  <button
                    onClick={handlePlayPause}
                    className="absolute inset-0 flex items-center justify-center z-10 focus:outline-none bg-transparent"
                    aria-label="Play video"
                    tabIndex={0}
                    type="button"
                  >
                    <span className="bg-white/90 rounded-full p-4 shadow-lg flex items-center justify-center">
                      <Play className="w-14 h-14 text-[#DA3539]" fill="#DA3539" />
                    </span>
                  </button>
                )}
              </div>
            </Card>
          </div>
          {/* Sidebar Modules */}
          <aside className="w-full lg:w-[500px] flex-shrink-0">
            <Card className="p-6 bg-white border-0 shadow-md rounded-xl flex flex-col">
              <h2 className="text-xl font-bold text-[#0C0E12] mb-2">Course name</h2>
              <div className="text-[#7B7B7B] text-base font-semibold mb-4">Modules</div>
              <div className="flex flex-col gap-3 overflow-auto flex-1 min-h-0">
                {modules.map((mod, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#FDF5F4] cursor-pointer transition">
                    <img src={mod.image} alt={mod.title} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex flex-col">
                      <span className="text-base font-semibold text-[#0C0E12] leading-tight">{mod.title}</span>
                      <span className="text-sm text-[#7B7B7B]">{mod.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CoursesPage;