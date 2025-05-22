'use client'

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import WebLayout from "@/components/mainlayout/WebLayout";
import Banner from "@/components/mainlayout/Banner";
import PricingSection from "@/components/mainlayout/PricingSection";
import PracticingNowSection from "@/components/mainlayout/PracticingNowSection";
import Faq from "@/components/mainlayout/Faq";
import TailoredSupport from "@/components/mainlayout/TailoredSupport";
import SectionHeading from "@/components/mainlayout/SectionHeading";
import HowItWorksSection from '@/components/mainlayout/HowItWorksSection';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isDesktop;
}

const StickyScrollSection = ({ children, index }: { children: React.ReactNode, index: number }) => {
  const { scrollYProgress } = useScroll();
  
  // Calculate transform values based on scroll position
  const yRange = [index * 0.25, index * 0.25 + 0.25];
  const opacity = useTransform(scrollYProgress, yRange, [1, 1]);
  const scale = useTransform(scrollYProgress, yRange, [1, 1]);
  const y = useTransform(scrollYProgress, yRange, [0, -50]);
  const zIndex = useTransform(scrollYProgress, yRange, [100 , 100 ]);
  
  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        position: 'sticky',
        top: '0px',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: zIndex
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const isDesktop = useIsDesktop();
  return (
    <WebLayout>
      <div className="relative h-full">
       
          <Banner/>
        
        
            <div className='w-full bg-white rounded-xl px-12 py-16 mb-12'>
            <SectionHeading />
            {isDesktop ? (
              <>
                <StickyScrollSection index={0}>
                  <TailoredSupport
                    heading="The Problem"
                    description={<>Most Students Guess. CASPer Edge Students Know. The CASPer test is high-stakes—but most applicants are flying blind. They&apos;ve watched YouTube videos, skimmed blogs, maybe even tried the official sample test—yet still don&apos;t know if their answers are strong enough.<br/> That&apos;s where CASPer Edge changes the game. Developed by Stanford- and Harvard-trained physicians, it&apos;s the only prep program that combines expert scenario strategy with personalized feedback. You are not just practicing, but you are improving with every session.</>}


                    
                    imageSrc="/assets/images/richal.jpg"
                    imageAlt="Doctor"
                    imageWidth={475}
                    imageHeight={382}
                  />
                </StickyScrollSection>
                <StickyScrollSection index={1}>
                  <TailoredSupport
                    heading="Powerful CASPer Prep"
                    description="CASPer Prep Simplified Into 3 Powerful Pillars"
                    features={['CASPer Edge Course', 'CASPer Edge Scenario Bank', 'CASPer Edge Practice Tests']}
                    imageSrc="/assets/images/casper-dashboard.png"
                    imageAlt="Casper Dashboard"
                    imageWidth={475}
                    imageHeight={382}
                  />
                </StickyScrollSection>
                <StickyScrollSection index={2}>
                  <TailoredSupport
                    heading="CASPer Edge Feedback Loop"
                    description="After every response, our AI delivers detailed, personalized feedback. You'll know exactly how your response ranks for communication, ethics, empathy, and judgment. You'll get targeted advice to boost your score fast."
                    features={['Individualized scoring per question', 'Track your improvement over time', 'Fix your weaknesses, fast', 'Practice again and improve']}
                    imageSrc="/assets/images/interview.png"
                    imageAlt="Interview"
                    imageWidth={475}
                    imageHeight={382}
                  />
                </StickyScrollSection>
                {/* <StickyScrollSection index={3}>
                  <TailoredSupport
                    heading="Tailored Support"
                    description="Whether you&apos;re just starting your pre-med path or reapplying after a previous cycle, our expert team offers personalized guidance to maximize your chances of acceptance."
                    features={['Application Strategy & Essay Editing', 'Interview Preparation', 'Pre-Med Advising & Gap Year Planning']}
                    imageSrc="/assets/images/interview.png"
                    imageAlt="Interview"
                    imageWidth={475}
                    imageHeight={382}
                  />
                </StickyScrollSection> */}
                
                
          <PricingSection />
        
     
          <PracticingNowSection />
      
      
              </>
            ) : (
              <>
               <TailoredSupport
                    heading="The Problem"
                    description={<>Most Students Guess. CASPer Edge Students Know. The CASPer test is high-stakes—but most applicants are flying blind. They&apos;ve watched YouTube videos, skimmed blogs, maybe even tried the official sample test—yet still don&apos;t know if their answers are strong enough.<br/> That&apos;s where CASPer Edge changes the game. Developed by Stanford- and Harvard-trained physicians, it&apos;s the only prep program that combines expert scenario strategy with personalized feedback. You are not just practicing, but you are improving with every session.</>}
                    imageSrc="/assets/images/richal.jpg"
                    imageAlt="Doctor"
                    imageWidth={475}
                    imageHeight={382}
                  />
                 <TailoredSupport
                    heading="Powerful CASPer Prep"
                    description="CASPer Prep Simplified Into 3 Powerful Pillars"
                    features={['CASPer Edge Course', 'CASPer Edge Scenario Bank', 'CASPer Edge Practice Tests']}
                    imageSrc="/assets/images/casper-dashboard.png"
                    imageAlt="Casper Dashboard"
                    imageWidth={475}
                    imageHeight={382}
                  />
                <TailoredSupport
                    heading="CASPer Edge Feedback Loop"
                    description="After every response, our AI delivers detailed, personalized feedback. You'll know exactly how your response ranks for communication, ethics, empathy, and judgment. You'll get targeted advice to boost your score fast."
                    features={['Individualized scoring per question', 'Track your improvement over time', 'Fix your weaknesses, fast', 'Practice again and improve']}
                    imageSrc="/assets/images/interview.png"
                    imageAlt="Interview"
                    imageWidth={475}
                    imageHeight={382}
                  />
                {/* <TailoredSupport
                  heading="Tailored Support"
                  description="Whether you&apos;re just starting your pre-med path or reapplying after a previous cycle, our expert team offers personalized guidance to maximize your chances of acceptance."
                  features={['Application Strategy & Essay Editing', 'Interview Preparation', 'Pre-Med Advising & Gap Year Planning']}
                  imageSrc="/assets/images/interview.png"
                  imageAlt="Interview"
                  imageWidth={475}
                  imageHeight={382}
                /> */}
                <PricingSection/>
                <PracticingNowSection />
              </>
            )}
        </div>
        
        {/* <StickyScrollSection index={4}>
          <PricingSection />
        </StickyScrollSection>
        <StickyScrollSection index={5}>
          <PracticingNowSection />
        </StickyScrollSection> */}
      
        <HowItWorksSection />
        <Faq />
        
        
       
      
      </div>
    </WebLayout>
  );
}
