import WebLayout from '@/components/mainlayout/WebLayout'
import React from 'react'
import NewsLetter from '@/components/mainlayout/NewsLetter'
import BlogCards from '@/components/mainlayout/BlogCards'
import { Search } from 'lucide-react'

const blogs = [
  {
    image: '/assets/images/blog1.png',
    title: 'How To Get Into Albert Einstein College of Medicine: Application Tips',
    description: 'Getting into Albert Einstein College of Medicine is an excellent goal for premedical students who are passionate about combining rigorous scientific training.',
 
    readMoreLink: '#',
  },
  {
    image: '/assets/images/blog2.png',
    title: 'Cracking Michigan State University College of Osteopathic Medicine',
    description: 'Michigan State University College of Osteopathic Medicine (MSUCOM) is renowned for its community-focused curriculum.',
  
    readMoreLink: '#',
  },
  {
    image: '/assets/images/blog3.png',
    title: 'How to Get Into East Virginia Medical School',
    description: 'Hi premeds! This page serves as a high-yield resource for the Macon & Joan Brock Virginia Health Sciences Eastern Virginia Medical School.',
   
    readMoreLink: '#',
  },
  {
    image: '/assets/images/blog4.png',
    title: 'How to Get Into University of Virginia School of Medicine',
    description: "Hi premeds! This page serves as a high-yield resource for the University of Virginia School of Medicine. Virginia's best medical school!",
   
    readMoreLink: '#',
  },
  {
    image: '/assets/images/blog5.png',
    title: 'How to Get Into UCR Medical School: Physician Expert Advice',
    description: 'The University of California, Riverside (UCR) School of Medicine offers a unique opportunity for aspiring physicians to train in a mission-driven environment focused on addressing',
   
    readMoreLink: '#',
  },
]

const categories = [
  'Simply Dummy', 'Simply Dummy', 'Simply Dummy', 'Simply Dummy', 'Simply Dummy', 'Simply Dummy'
]

const page = () => {
  return (
    <WebLayout>
      <section className=" px-4 py-16 font-sans bg-white">
            <div className="flex flex-col items-center mb-8">
              <h1 className="text-4xl font-bold mb-2 text-black">Blog</h1>
              <p className="text-gray-500 text-center max-w-2xl text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
            </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Blog Cards */}
          <div className="flex-1 space-y-5">
            {blogs.map((blog, i) => (
              <BlogCards key={i} {...blog} />
            ))}
          </div>
          {/* Right: Sidebar */}
          <aside className="w-full md:w-[400px] flex-shrink-0 mt-2">
           
              <div className="flex items-center gap-2 border rounded-none px-3 py-2 mb-6">
                <Search className="text-gray-400 h-12" />
                <input type="text" placeholder="Search" className="flex-1 outline-none border-none bg-transparent text-base" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat, i) => {
                    const pastelColors = [
                      'bg-[#FFF9D9]', // yellow
                      'bg-[#D9F9E6]', // green
                      'bg-[#FFE6E6]', // pink
                    ];
                    const color = pastelColors[i % pastelColors.length];
                    return (
                      <span
                        key={i}
                        className={`px-5 py-2 rounded-full ${color} text-xs text-black text-center cursor-pointer select-none`}
                      >
                        {cat}
                      </span>
                    );
                  })}
                </div>
              </div>
           
          </aside>
        </div>
      </section>
      <NewsLetter/>
    </WebLayout>
  )
}

export default page