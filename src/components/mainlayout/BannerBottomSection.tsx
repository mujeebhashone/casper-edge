import React from 'react'
import SectionHeading from './SectionHeading'
import TailoredSupport from './TailoredSupport'

const BannerBottomSection = () => {
  return (
    <div id="blog" className='mt-10 bg-white rounded-xl px-12 py-16'>
      <SectionHeading />
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
    </div>
  )
}

export default BannerBottomSection