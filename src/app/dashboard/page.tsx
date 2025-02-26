import React from 'react'
import Sidebar from '@/components/Dashboard/sidebar'
import Header from '@/components/Dashboard/header'

const page = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='flex-1 place-items-end h-screen relative justify-end '>
          <Header />
        </div>
        
        
   
        
    </div>
  )
}

export default page