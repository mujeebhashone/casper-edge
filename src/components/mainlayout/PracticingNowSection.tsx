import React from 'react'
import PracticeSection from './PracticeSection'

const PracticingNowSection = () => {
  return (
    <section className="w-full bg-[#FFF6F6] rounded-2xl px-2 py-12 md:py-16 flex flex-col items-center justify-between font-sans">


    <PracticeSection
  sectionHeading="Start Practicing Now"
  sectionDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  imageSrc="/assets/images/practiceimage.png"
  imageAlt="Students"
  />
  </section>
  )
}

export default PracticingNowSection