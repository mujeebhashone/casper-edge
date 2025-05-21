import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

export interface TailoredSupportProps {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  features?: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}

// const defaultFeatures = [
//   'Application Strategy & Essay Editing',
//   'Interview Preparation',
//   'Pre-Med Advising & Gap Year Planning',
//   'Reapplication Support',
// ];

const TailoredSupport: React.FC<TailoredSupportProps> = ({
  heading = (
    <>
      The Problem
    </>
  ),
  description = (
    <>Whether you&apos;re just starting your pre-med path or reapplying after a previous cycle, our expert team offers personalized guidance to maximize your chances of acceptance.</>
  ),
  features = [],
  imageSrc = '/assets/images/doctorimage.png',
  imageAlt = 'Doctor',
  imageWidth = 475,
  imageHeight = 382,
  className = '',
}) => (
  <section className={`bg-white rounded-2xl px-8 py-12 md:px-28 md:py-28 flex flex-col md:flex-row items-center gap-10 md:gap-16 shadow-lg w-full font-sans mt-10 ${className}`}>
    {/* Left Side */}
    <div className="flex-1 max-w-xl">
      <h3 className="text-3xl md:text-4xl font-semibold text-primary font-sans leading-tight mb-6">
        {heading}
      </h3>
      <p className="text-lg md:text-lg text-gray-500 mb-8 font-sans">
        {description}
      </p>
      <ul className="flex flex-col gap-4 font-sans">
        {features.map((feature) => (
          <li key={feature} className="inline-flex items-center gap-2 bg-[#FCE4E4] rounded-full px-5 py-2 font-medium text-primary text-base w-fit">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-primary rounded-full mr-2">
              <Check size={16} className='text-white'/>
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    {/* Right Side */}
    <div className="flex-1 flex justify-center items-center">
      <div className="w-[340px] h-[270px] md:w-[475px] md:h-[382px] rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="object-cover w-full h-full rounded-xl"
          priority
        />
      </div>
    </div>
  </section>
);

export default TailoredSupport; 