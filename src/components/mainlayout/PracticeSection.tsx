import React from 'react';
import Image from 'next/image';

export interface PracticeSectionProps {
  sectionHeading?: string;
  sectionDescription?: string;
  imageSrc?: string;
  imageAlt?: string;
  cardTitle?: string;
  cardHeading?: string;
  cardDescription?: string;
  buttonText?: string;
}

const PracticeSection: React.FC<PracticeSectionProps> = ({
  sectionHeading = 'Start Practicing Now',
  sectionDescription = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  imageSrc = '/assets/images/students.png',
  imageAlt = 'Students',
  cardTitle = 'Title Here',
  cardHeading = 'Lorem Ipsum is simply dummy text of the printing and',
  cardDescription = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  buttonText = 'Start Practicing',
}) => (
  <section className="w-full bg-[#FFF6F6] rounded-2xl px-8 py-12 md:py-16 flex flex-col items-center justify-between font-sans">
    {/* Top Heading & Description */}
    <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center mb-4">{sectionHeading}</h2>
    <p className="text-normal md:text-lg text-[#565F5C] mb-12 max-w-2xl text-center">
      {sectionDescription}
    </p>
    {/* Main Content */}
    <div className="flex flex-col md:flex-row gap-12 w-full items-center justify-center">
      {/* Left: Image */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[611px] h-[382px] rounded-2xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={611}
            height={382}
            className="object-cover w-full h-full rounded-2xl"
            priority
          />
        </div>
      </div>
      {/* Right: Card */}
      <div className="flex-1 flex flex-col justify-center items-start">
        <span className="bg-[#FCE4E4] text-primary text-base font-medium rounded-full px-5 py-2 mb-4">{cardTitle}</span>
        <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-4 leading-tight">{cardHeading}</h3>
        <p className="text-base md:text-lg text-[#565F5C] mb-8">{cardDescription}</p>
      </div>
    </div>
        <button className="bg-secondary mt-16 text-white rounded-full px-8 py-3 font-semibold text-base shadow hover:bg-secondary/90 transition-colors">
          {buttonText}
        </button>
  </section>
);

export default PracticeSection; 