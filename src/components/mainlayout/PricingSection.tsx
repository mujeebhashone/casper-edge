import React from 'react';
import PricingCard from './PricingCard';

const features = [
  'All analytics features',
  'Up to 250,000 tracked visits',
  'Normal support',
  'Up to 3 team members',
];

const PricingSection = () => (
  <section id="pricing" className="w-full py-16 px-2 md:px-0 flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center mb-4 font-sans">Simple Pricing</h2>
    <p className="text-base md:text-lg text-[#565F5C] text-center max-w-2xl mb-12 font-sans">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
    </p>
    <div className="flex flex-col items-center md:flex-row gap-8 justify-center md:items-stretch w-full md:max-w-5xl">
      <PricingCard
        title="1 Week of Access"
        price="$99"
        pricePeriod="/monthly"
        features={features}
        buttonText="Get started"
      />
      <PricingCard
        title="1 Week of Access"
        price="$99"
        pricePeriod="/monthly"
        features={features}
        buttonText="Get started"
        highlighted
      />
      <PricingCard
        title="1 Week of Access"
        price="$99"
        pricePeriod="/monthly"
        features={features}
        buttonText="Get started"
      />
    </div>
  </section>
);

export default PricingSection;