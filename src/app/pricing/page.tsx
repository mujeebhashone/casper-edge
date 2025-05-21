import NewsLetter from '@/components/mainlayout/NewsLetter'
import PricingSection from '@/components/mainlayout/PricingSection'
import WebLayout from '@/components/mainlayout/WebLayout'
import React from 'react'


const page = () => {
  return (
    <WebLayout>
        <div className='bg-white md:relative w-full h-full md:h-[65vh] md:mb-40'>
    <PricingSection className='md:absolute md:-bottom-10 md:left-0 w-full' />
    </div>
    <NewsLetter />
    </WebLayout>
  )
}

export default page