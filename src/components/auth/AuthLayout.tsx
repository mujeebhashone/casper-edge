import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-[#FDF5F4] py-10 px-10 min-w-screen mx-auto h-screen'>
        <div className='max-w-[1440px] mx-auto flex items-center justify-center h-full font-sans bg-white rounded-2xl'>
        
            {children}
          
        </div>

    </div>
  )
}

export default AuthLayout