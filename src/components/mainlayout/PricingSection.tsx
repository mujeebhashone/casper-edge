'use client'

import React from 'react';
import PricingCard from './PricingCard';
import { usePathname } from 'next/navigation';

const features = [
  'CASPer Edge Course by Dr. Rizal',
  '100+ Scenario Bank Questions',
  'Practice Tests',
  
];

const PricingSection = ({className}:{className?:string}) => {
  const pathname = usePathname();
 
  return (
  <section className={`w-full ${pathname === '/' ? 'bg-white' : className} py-16 px-2 md:px-0 flex flex-col items-center md:relative md:z-[999999]`}>
    <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center mb-4 font-sans">Simple Pricing</h2>
    <p className="text-base md:text-lg text-[#565F5C] text-center max-w-2xl mb-12 font-sans">
    Invest in the prep that gives you the edge. Designed by physician admissions experts. Built for your success.
    </p>
    <div className="flex flex-col items-center md:flex-row gap-8 justify-center md:items-stretch w-full md:max-w-5xl">
      <PricingCard
        title="1 Week of Access"
        price="$99"
        pricePeriod="/monthly"
        features={features}
        buttonText="Get started"
        links="/pricing/1"
      />
      <PricingCard
        title="1 Month of Access"
        price="$99"
        pricePeriod="/monthly"
        features={features}
        buttonText="Get started"
        highlighted
        links="/pricing/2"
      />
      <PricingCard
        title="3 Months of Access"
        price="$99"
        pricePeriod="/monthly"
        features={features}
        buttonText="Get started"
        links="/pricing/3"
      />
    </div>
  </section>
);
}

export default PricingSection;