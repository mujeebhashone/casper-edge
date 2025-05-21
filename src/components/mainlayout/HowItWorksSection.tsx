import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

// You can replace these images with actual course/scenario/feedback images
const steps = [
  {
    title: 'Master the Strategy.',
    
    description:
      "Unlock physician-created training modules that teach you how to approach every scenario type from ethical dilemmas to conflict resolution situations. You'll learn how to consistently craft high-scoring responses.",
    image: '/assets/images/course.png',
    alt: 'CASPer Edge Course',
  },
  {
    title: 'Practice with Purpose',
    
    description:
      'With 100+ practice questions across 11 categories, our CASPer Edge Scenario Bank helps you build mental muscle memory for any challenge the test throws at you. Each prompt is designed to reflect real-world complexity, which will help you respond with confidence and nuance.',
    image: '/assets/images/bank.png',
    alt: 'Scenario Bank',
  },
  {
    title: 'Simulate the Real Test.',
    
    description:
      'Timed mock tests that mimic the actual CASPer exam. Practice under pressure, track your timing, and develop the calm, focused mindset needed on test day.',
    image: '/assets/images/feedback.png',
    alt: 'Practice Tests',
  },
];

const HowItWorksSection = () => (
  <section className="w-full bg-white rounded-2xl py-16 flex flex-col items-center justify-between font-sans mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0C0E12] text-center mb-2">🧠 How It Works</h2>
    <p className="text-lg text-[#565F5C] mb-12 max-w-2xl text-center">CASPer Edge&apos;s 3 Powerful Pillars</p>
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl items-stretch justify-center">
      {steps.map((step, idx) => (
        <Card
          key={step.title}
          className="relative flex-1 flex flex-col items-center bg-gradient-to-br from-[#FFF6F6] via-[#FDF5F4] to-[#F8D2D2] border border-[#F8D2D2] rounded-2xl pt-0 pb-4 shadow-lg min-w-[260px] max-w-md mx-auto transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl group"
        >
          {/* Floating Step Badge */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#DA3539] text-white text-2xl font-bold shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
              {idx + 1}
            </span>
          </div>
          {/* Image with colored ring */}
          {/* <div className="rounded-2xl overflow-hidden mb-6 mt-6 shadow-lg bg-white flex items-center justify-center relative ring-4 ring-[#F8D2D2] group-hover:ring-[#DA3539] transition-all"> */}
            <Image src={step.image} alt={step.alt} width={200} height={200} unoptimized className="object-contain w-full h-[300px]" />
          {/* </div> */}
          <div className="text-xl font-bold text-secondary text-center mb-1 mt-2 px-4">{step.title}</div>
         
          <div className="text-base text-[#565F5C] text-center flex-1 mb-2 px-4">{step.description}</div>
        </Card>
      ))}
    </div>
  </section>
);

export default HowItWorksSection; 