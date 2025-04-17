import React from 'react'
import Sidebar from '@/components/Dashboard/sidebar'
import HeaderInv from '@/components/Dashboard/headerInv'
import Invoices from '@/components/Dashboard/Invoices'

function page() {
  return (
    <div className='flex'>
        
        <Sidebar />
       
        <div className='flex-1 place-items-end h-screen relative justify-end'>
            <HeaderInv />
        </div>

        <div className='flex relative mt-16  '>
        <Invoices />
        </div>

    </div>
  )
}

export default page