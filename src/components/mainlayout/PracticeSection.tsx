import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


const PracticeSection = () => (
  <section className="w-full bg-white rounded-2xl py-16 flex flex-col items-center justify-between font-sans">
    <h2 className="text-4xl font-bold text-[#0C0E12] text-center mb-2">Start Practicing For Free Now</h2>
    <p className="text-lg text-[#565F5C] mb-12 max-w-2xl text-center">
    Jump into a full practice scenarios with real-time feedback and personalized scoring. In minutes, you’ll know exactly why our students feel more confident, prepared, and ready to crush test day.

    </p>
    <div className="flex flex-col w-full max-w-7xl items-center justify-center">
      {/* Left: Image Only */}
      <div className="flex-1 flex justify-center items-center max-w-2xl mx-auto">
        {/* <div className="w-full h-full flex items-center justify-center bg-[#FFF6F6] border border-[#F8D2D2] rounded-2xl"> */}
          <Image src="/assets/images/practiceimage.png" alt="Practice Test" width={630} height={300} unoptimized className="rounded-xl object-contain w-full" />
        {/* </div> */}
      </div>
      {/* Right: Scenarios List */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {/* {scenarios.map((sc, idx) => (
          <div key={idx} className="mb-8 w-full">
            <h4 className="text-2xl font-bold text-[#0C0E12] mb-2 leading-tight">{sc.title}</h4>
            <p className="text-base text-[#565F5C] mb-2">{sc.description}</p>
            {idx !== scenarios.length - 1 && <hr className="my-4 border-[#E5E5E5]" />}
          </div>
        ))} */}
        <Button className="bg-secondary hover:bg-secondary/80 text-white rounded-full px-8 py-3 font-semibold text-base shadow-none mt-2">Practice Now</Button>
      </div>
    </div>
  </section>
);

export default PracticeSection; 