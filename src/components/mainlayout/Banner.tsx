import React from 'react'
import Link from 'next/link'

const Banner = () => {
  return (
    <section className="w-full mb-10 bg-white rounded-b-xl px-12 py-40 flex flex-col gap-y-12 md:gap-y-0 md:flex-row items-center justify-between md:gap-x-12 min-h-[420px]">
      {/* Left Side */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-5xl font-semibold leading-tight text-primary mb-6 font-sans">
          World-Class CASPer Prep,
          Designed by Doctors Trained
          At Stanford and Harvard
        </h1>
        <p className="text-lg text-gray-500 mb-8 font-sans">
        The smartest way to prep for CASPer
        </p>
        <Link href="#" className="bg-secondary font-sans text-secondary-foreground rounded-full px-7 py-3 font-semibold text-base shadow inline-block">
          Start Practice
        </Link>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex justify-end">
        <div className="relative w-full md:w-[540px] h-[355px] rounded-2xl overflow-hidden shadow-lg">
          <video
            src="/assets/videos/banner-video.mp4"
            className="object-cover w-[540px] h-[355px] rounded-2xl"
            controls
            muted
            loop
            poster="/assets/images/banner-video.jpg"
          />
          {/* Watch Video Button Overlay */}
          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-white/90 px-5 py-2 rounded-lg shadow font-medium text-gray-800 hover:bg-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#DA3539"/>
              <polygon points="10,8 16,12 10,16" fill="white"/>
            </svg>
            Watch Video
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner