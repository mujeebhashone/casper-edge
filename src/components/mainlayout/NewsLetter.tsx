import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const NewsLetter = () => {
  return (
    <section className="w-full bg-white rounded-2xl px-2 md:px-8 pt-12 flex flex-col items-center font-sans">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-0 items-start justify-between mx-auto">
        {/* Left: Logo and tagline */}
        <div className="flex-1 flex flex-col items-start justify-start gap-6 pl-2">
          <div className="flex items-center gap-3 mb-2">
            <Image src="/assets/images/logo-casper.png" alt="CASPer Edge" width={340} height={85} />
          </div>
          <div className="text-lg text-[#565F5C] font-sans font-normal">
            Personalized Medical School Admissions Consulting for All Types of Students
          </div>
        </div>
        {/* Right: Form */}
        <form className="flex-1 flex flex-col items-start w-full max-w-xl">
          <h3 className="text-2xl md:text-2xl font-semibold text-primary mb-6">Want Our Best Med School Tips? We&apos;ll Drop Them in Your Inbox.</h3>
          <div className="flex gap-4 w-full mb-4">
            <Input
              type="text"
              placeholder="Name"
              className="flex-1 border-0 border-b bg-transparent rounded-none px-0 py-2 focus-visible:ring-0 focus:border-b-2 focus-visible:border-secondary text-lg placeholder:text-[#B0B0B0] placeholder:text-lg h-12 font-sans shadow-none"
            />
            <Input
              type="email"
              placeholder="Email"
              className="flex-1 border-0 border-b border-[#D9D9D9] bg-transparent rounded-none px-0 py-2 focus:border-b-2 focus-visible:border-secondary focus-visible:ring-0 text-lg placeholder:text-[#B0B0B0] placeholder:text-lg h-12 font-sans shadow-none"
            />
          </div>
          <Textarea
            placeholder="Message"
            className="w-full border-0 border-b border-[#D9D9D9] bg-transparent rounded-none px-0 py-2 focus:border-b-2 focus-visible:border-secondary focus-visible:ring-0 text-lg placeholder:text-[#B0B0B0] placeholder:text-lg mb-8 min-h-[48px] h-16 font-sans shadow-none resize-none"
          />
          <Button type="submit" className="bg-secondary text-white rounded-full px-8 py-7 font-semibold text-lg shadow hover:bg-secondary/90 transition-colors">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;