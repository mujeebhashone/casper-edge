import NewsLetter from '@/components/mainlayout/NewsLetter'
import PricingSection from '@/components/mainlayout/PricingSection'
import WebLayout from '@/components/mainlayout/WebLayout'
import React from 'react'


const page = () => {
  return (
    <WebLayout>
        <div className='bg-white relative w-full h-[65vh] mb-40'>
    <PricingSection className='absolute -bottom-40 left-0 w-full' />
    </div>
    <NewsLetter />
    </WebLayout>
  )
}

export default page