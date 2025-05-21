import NewsLetter from '@/components/mainlayout/NewsLetter'
import TestimonialCard from '@/components/mainlayout/TestimonialCard'
import WebLayout from '@/components/mainlayout/WebLayout'
import React from 'react'

const testimonials = [
  {
    name: 'Lana Bernier',
    role: 'Senior Strategy Strategist',
    avatar: '/assets/images/avatar1.png',
    text: "Dude, your stuff is the bomb! House rent is the real deal! STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
  },
  {
    name: 'Mrs. Van Hartmann',
    role: 'Legacy Logistics Manager',
    avatar: '/assets/images/avatar2.png',
    text: "I like Infinity Estate more and more each day because it makes my life a lot easier. We can't understand how we've been living without Infinity Estate. Infinity Estate has got everything I need. The service was excellent!",
  },
  {
    name: 'Philip Deckow',
    role: 'Support Assurance Officer',
    avatar: '/assets/images/avatar3.png',
    text: "You've saved our business! Infinity Estate has got everything I need. We were treated like royalty. It's really wonderful.",
  },
  // Repeat for 6 more to fill the grid (for demo)
  {
    name: 'Lana Bernier',
    role: 'Senior Strategy Strategist',
    avatar: '/assets/images/avatar1.png',
    text: "Dude, your stuff is the bomb! House rent is the real deal! STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
  },
  {
    name: 'Mrs. Van Hartmann',
    role: 'Legacy Logistics Manager',
    avatar: '/assets/images/avatar2.png',
    text: "I like Infinity Estate more and more each day because it makes my life a lot easier. We can't understand how we've been living without Infinity Estate. Infinity Estate has got everything I need. The service was excellent!",
  },
  {
    name: 'Philip Deckow',
    role: 'Support Assurance Officer',
    avatar: '/assets/images/avatar3.png',
    text: "You've saved our business! Infinity Estate has got everything I need. We were treated like royalty. It's really wonderful.",
  },
  {
    name: 'Lana Bernier',
    role: 'Senior Strategy Strategist',
    avatar: '/assets/images/avatar1.png',
    text: "Dude, your stuff is the bomb! House rent is the real deal! STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
  },
  {
    name: 'Mrs. Van Hartmann',
    role: 'Legacy Logistics Manager',
    avatar: '/assets/images/avatar2.png',
    text: "I like Infinity Estate more and more each day because it makes my life a lot easier. We can't understand how we've been living without Infinity Estate. Infinity Estate has got everything I need. The service was excellent!",
  },
  {
    name: 'Philip Deckow',
    role: 'Support Assurance Officer',
    avatar: '/assets/images/avatar3.png',
    text: "You've saved our business! Infinity Estate has got everything I need. We were treated like royalty. It's really wonderful.",
  },
]

const page = () => {
  return (
    <WebLayout>
      <section className="py-16 font-sans bg-white">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
          <p className="text-gray-500 text-center text-lg max-w-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </section>
      <NewsLetter/>
    </WebLayout>
  )
}

export default page