import React from 'react'
import HeaderLearn from '@/components/Dashboard/headerLearn';
import Sidebar from '@/components/Dashboard/sidebar';
import Learners from '@/components/Dashboard/learners';

function page() {
  return (
    <div className='flex'>
        
            <Sidebar />
        
        
        <div className='flex-1 place-items-end h-screen relative justify-end'>
            <HeaderLearn />
        </div>

        <div className='flex relative mt-20 w-full'>
            <Learners />
        </div>
        
          
    </div>
  )
}

export default page