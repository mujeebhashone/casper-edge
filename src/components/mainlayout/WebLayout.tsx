import React from 'react'
import Header from './Header'
import Footer from './Footer'


const WebLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-[#FDF5F4] py-6 md:px-10 px-4 min-w-screen mx-auto'>
        <div className='max-w-[1440px] mx-auto'>
            <Header/>
            {children}
            <Footer/>
        </div>

    </div>
  )
}

export default WebLayout