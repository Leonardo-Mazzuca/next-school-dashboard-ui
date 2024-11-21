

import Menu from '@/components/Menu'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({children}:{children:React.ReactNode}) => {

  return (
    <div className='h-screen flex'>
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] '>
        <Link className='flex items-center justify-center lg:justify-start p-4' href={'/'}>
        
          <Image 
            src={'/logo.png'}
            alt='logo'
            width={32}
            height={32}
          />
          <span className='hidden lg:block font-bold'>SchoolLama</span>
        </Link>
        <Menu />
      </div>
        
      <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll'>
        <Navbar />
        {children}
      </div>
    </div>
  )
  
}

export default DashboardLayout