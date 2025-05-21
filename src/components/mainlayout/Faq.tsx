'use client'

import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Plus, Minus } from 'lucide-react';
import NewsLetter from './NewsLetter';
import Link from 'next/link';


export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export interface FaqProps {
  items?: FaqItem[];
}

const defaultFaq: FaqItem[] = [
  {
    question: 'Who is Dr. Rachel Rizal and Dr. Rishi Mediratta?',
    answer: (
      <>
        <p>Dr. Rachel Rizal and Dr. Rishi Mediratta are medical school admissions experts who created the CASPer Edge course. They are passionate about mentorship and teaching. They have advised tens of thousands of students over 12+ years get accepted into medical schools and residency programs.</p>
        <br />
        <p>
          After reviewing countless CASPer prep options, they realized there was a major gap—no resource offered personalized feedback or truly high-quality guidance. So, they created CASPer Edge: a strategic, feedback-driven individualized prep course designed to help applicants excel.
        </p>
        <br />
        <p>
          Dr. Rachel Rizal and Dr. Rishi Mediratta care deeply about excellence and believe every applicant deserves access to high-yield tools. They were educated at some of the world&apos;s best universities, including Princeton, Johns Hopkins, Stanford, and Harvard. CASPer Edge reflects their belief that when it comes to admissions, nothing short of exceptional should be the standard.
        </p>
      </>
    ),
  },
  {
    question: 'What makes CASPer Edge different from other prep resources?',
    answer: (
      <>
        <p>Most free resources give you sample questions but no personalized feedback. CASPer Edge delivers physician-designed strategies, 100+ realistic scenarios, individualized scoring, and feedback tailored to your exact responses—so you know exactly how to improve. </p>
        <br />
        <p>
          The course was created completely by Dr. Rachel Rizal and Dr. Rishi Mediratta. They always strive for excellence and have been providing excellent resources for premeds for over a decade. CASPer Edge is the best CASPer test prep you will find. 
        </p>
      </>
    ),
  },
  {
    question: 'Do I really need to prepare for CASPer?',
    answer: (
      <>
        <p>Yes—because getting into medical school is more competitive than ever. A strong CASPer score can be the difference between landing an interview or getting screened out early.</p>
        <br />
        <p>
          You only get one shot at making a great impression. Admissions committees use CASPer to evaluate traits like judgment, empathy, and communication under pressure—qualities that numbers alone can&apos;t capture.
        </p>
        <br />
        <p>
          With the right preparation, you can train these skills, reduce test-day anxiety, and stand out from other applicants. Don&apos;t leave your med school future to chance.
        </p>
      </>
    ),
  },
  {
    question: 'How does the personalized CASPer Feedback work?',
    answer: (
      <>
        <p>Our feedback is extremely comprehensive.</p>
        <br />
        <p>
          You will receive comments on &quot;what you did well&quot; and &quot;what you can improve.&quot; If you receive a grade that is below an &quot;A,&quot; you will also receive a refined answer using ideas and elements from the answer you gave. The refined answer will give you a more ideal answer for receiving a higher score.
        </p>
        <br />
        <p>
          If you are on tutor mode using the Scenario Bank, you&apos;ll get instant, personalized feedback based on our CASPer scoring criteria after each scenario you complete. If you are on test mode, you will receive feedback after the entire practice test or after a block of Scenario Bank questions.
        </p>
        <br />
        <p>
          <Link href="/pricing" className="text-secondary font-semibold">Sign up now.</Link>
        </p>
      </>
    ),
  },
  {
    question: 'Can I try CASPer Edge before paying?',
    answer: (
      <>
        <p>Yes! You can try CASPer Edge completely free with access to 2 full practice scenarios—including instant scoring and personalized feedback.</p>
        <br />
        <p>
          <Link href="/practice-questions" className="text-secondary font-semibold">Try Free Practice</Link>
        </p>
        <br />
        <p>
          It&apos;s the best way to see our the platform works, understand how your answers are evaluated, and experience the difference that CASPer Edge prep can make.
        </p>
      </>
    ),
  },
  {
    question: 'Is there a refund policy or guarantee?',
    answer: "We can promise is that CASPer Edge is the most comprehensive, high-quality prep resources available. We&apos;ve designed this course to give you every opportunity to succeed. And, we completely recommend for you to take the complete the entire CASPer Edge Course, refine your test strategies with our Scenario Bank, and emulate test day with the CASPer Edge practice tests. However, there are many variables out of our control similar to medical school admissions. As such, there is no score guarantee."
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