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
        
        
            <div className='w-full bg-white rounded-xl px-12 py-16'>
            <SectionHeading />
            {isDesktop ? (
              <>
                <StickyScrollSection index={0}>
                  <TailoredSupport
                    heading="Tailored Support for Every Step of Your Medical School Journey"
                    description="Whether you&apos;re just starting your pre-med path or reapplying after a previous cycle, our expert team offers personalized guidance to maximize your chances of acceptance."
                    features={['Application Strategy & Essay Editing', 'Interview Preparation', 'Pre-Med Advising & Gap Year Planning', 'Reapplication Support']}
                    imageSrc="/assets/images/doctorimage.png"
                    imageAlt="Doctor"
                    imageWidth={475}
                    imageHeight={382}
                  />
                </StickyScrollSection>
                <StickyScrollSection index={1}>
                  <TailoredSupport
                    heading="Tailored Support for Every Step of Your Medical School Journey"
                    description="Whether you&apos;re just starting your pre-med path or reapplying after a previous cycle, our expert team offers personalized guidance to maximize your chances of acceptance."
                    features={['Application Strategy & Essay Editing', 'Interview Preparation', 'Pre-Med Advising & Gap Year Planning']}
                    imageSrc="/assets/images/casper-dashboard.png"
                    imageAlt="Casper Dashboard"
                    imageWidth={475}
                    imageHeight={382}
                  />
                </StickyScrollSection>
                <StickyScrollSection index={2}>
                  <TailoredSupport
                    heading="Tailored Support"
                    description="Whether you&apos;re just starting your pre-med path or reapplying after a previous cycle, our expert team offers personalized guidance to maximize your chances of acceptance."
                    features={['Application Strategy & Essay Editing', 'Interview Preparation', 'Pre-Med Advising & Gap Year Planning']}
                    imageSrc="/assets/images/interview.png"
                    imageAlt="Interview"
                    imageWidth={475}
                    imageHeight={382}
                  />
                </StickyScrollSection>
                <StickyScrollSection index={3}>
                  <TailoredSupport
                    heading="Tailored Support"
                    description="Whether you&apos;re just starting your pre-med path or reapplying after a previous cycle, our expert team offers personalized guidance to maximize your chances of acceptance."
                    features={['Application Strategy & Essay Editing', 'Interview Preparation', 'Pre-Med Advising & Gap Year Planning']}
                    imageSrc="/assets/images/interview.png"
                    imageAlt="Interview"
                    imageWidth={475}
                    imageHeight={382}
                  />
                </StickyScrollSection>
                
                
          <PricingSection />
        
     
          <PracticingNowSection />
      
      
              </>
            ) : (
              <>
                <TailoredSupport
                  heading="Tailored Support for Every Step of Your Medical School Journey"
                  description="Whether you&apos;re just starting your pre-med path or reapplying after a previous cycle, our expert team offers personalized guidance to maximize your chances of acceptance."
                  features={['Application Strategy & Essay Editing', 'Interview Preparation', 'Pre-Med Advising & Gap Year Planning', 'Reapplication Support']}
                  imageSrc="/assets/images/doctorimage.png"
                  imageAlt="Doctor"
                  imageWidth={475}
                  imageHeight={382}
                />
                <TailoredSupport
                  heading="Tailored Support for Every Step of Your Medical School Journey"
                  description="Whether you&apos;re just starting your pre-med path or reapplying after a previous cycle, our expert team offers personalized guidance to maximize your chances of acceptance."
                  features={['Application Strategy & Essay Editing', 'Interview Preparation', 'Pre-Med Advising & Gap Year Planning']}
                  imageSrc="/assets/images/casper-dashboard.png"
                  imageAlt="Casper Dashboard"
                  imageWidth={475}
                  imageHeight={382}
                />
                <TailoredSupport
                  heading="Tailored Support"
                  description="Whether you&apos;re just starting your pre-med path or reapplying after a previous cycle, our expert team offers personalized guidance to maximize your chances of acceptance."
                  features={['Application Strategy & Essay Editing', 'Interview Preparation', 'Pre-Med Advising & Gap Year Planning']}
                  imageSrc="/assets/images/interview.png"
                  imageAlt="Interview"
                  imageWidth={475}
                  imageHeight={382}
                />
                <TailoredSupport
                  heading="Tailored Support"
                  description="Whether you&apos;re just starting your pre-med path or reapplying after a previous cycle, our expert team offers personalized guidance to maximize your chances of acceptance."
                  features={['Application Strategy & Essay Editing', 'Interview Preparation', 'Pre-Med Advising & Gap Year Planning']}
                  imageSrc="/assets/images/interview.png"
                  imageAlt="Interview"
                  imageWidth={475}
                  imageHeight={382}
                />
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
      
          <Faq />
           
        
        
       
      
      </div>
    </WebLayout>
  );
}
