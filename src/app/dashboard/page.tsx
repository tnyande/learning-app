import React from 'react'
import Sidebar from '@/components/Dashboard/sidebar'
import Header from '@/components/Dashboard/header'
import MyBarChart from '@/components/Dashboard/myBarChart'

const page = () => {
  return (
    <div className='flex'>0
        <Sidebar />
        <div className='flex-1 place-items-end h-screen relative justify-end '>
          
            <Header />
          
          
          <div className='flex relative mt-72  '>
          <MyBarChart />
          </div>
          
        </div>
        
        
        
   
        
    </div>
  )
}

export default page