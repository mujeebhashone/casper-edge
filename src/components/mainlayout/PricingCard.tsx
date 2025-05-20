import React from 'react';
import { Check} from 'lucide-react';
import Link from 'next/link';

export interface PricingCardProps {
  title: string;
  price: string;
  pricePeriod: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
  links: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  pricePeriod,
  features,
  buttonText,
  highlighted = false,
  links,
}) => (
  <div
    className={`flex flex-col bg-[#FDF5F4] rounded-2xl px-8 py-10 drop-shadow-xl transition-all duration-200 min-h-[480px] font-sans ${
      highlighted
        ? 'border-2 border-secondary shadow-lg scale-105 bg-white'
        : 'border border-transparent'
    }`}
    style={{ minWidth: 335, maxWidth: 350 }}
  >
    <div className="text-xl font-semibold text-[#6F6C90] mb-2 text-left">{title}</div>
    <div className="text-5xl font-bold text-[#170F49] mb-1 text-left">{price}
      <span className="text-lg font-normal text-[#B0B0C0] align-middle">{pricePeriod}</span>
    </div>
    <div className="font-semibold text-base text-primary mb-4 mt-4 w-full text-left">What&apos;s included</div>
    <ul className="flex flex-col gap-5 w-full mb-6">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2 text-primary">
          <Check className='text-white bg-secondary rounded-full p-1'/>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link href={links}>
    <button
      className="mt-auto bg-secondary text-white rounded-full px-8 py-3 font-semibold text-base shadow hover:bg-secondary/90 transition-colors w-full"
    >
      {buttonText}
    </button>
    </Link>
  </div>
);

export default PricingCard; 