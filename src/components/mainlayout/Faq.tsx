'use client'

import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Plus, Minus } from 'lucide-react';
import NewsLetter from './NewsLetter';


export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqProps {
  items?: FaqItem[];
}

const defaultFaq: FaqItem[] = [
  {
    question: 'How do I get started with Cracking Med Admissions?',
    answer:
      `Just schedule a free consultation using the button above, or contact us directly through the form. We'll learn more about your goals and recommend the best path forward.`,
  },
  {
    question: 'Who will I be working with?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'Do you only help with U.S. medical schools?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'What makes your service different?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'Do you help reapplicants?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Faq: React.FC<FaqProps> = ({ items = defaultFaq }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="w-full bg-white rounded-2xl px-2 md:px-8 py-12 md:py-16 flex flex-col items-center font-sans relative z-[9999]">
      <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center mb-12">Frequently Asked Questions</h2>
      <div className="w-full max-w-5xl mx-auto">
        <Accordion type="single" collapsible className="w-full" value={openIndex !== null ? String(openIndex) : undefined} onValueChange={v => setOpenIndex(v !== undefined ? Number(v) : null)}>
          {items.map((item, idx) => (
            <AccordionItem key={item.question} value={String(idx)} className="border-b border-[#F0F0F0]">
              <AccordionTrigger className="flex justify-between items-center py-6 px-2 text-lg md:text-xl font-semibold text-primary [&[data-state=open]>svg]:text-secondary bg-white">
                <span>{item.question}</span>
                {openIndex === idx ? (
                  <Minus className="w-6 h-6 text-secondary" />
                ) : (
                  <Plus className="w-6 h-6 text-primary" />
                )}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-[#565F5C] px-2 pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className='mt-12 bg-white'>
        <NewsLetter />
      </div>
    </section>
  );
};

export default Faq;