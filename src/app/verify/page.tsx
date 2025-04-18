import React from 'react'
import Otp from '@/components/Dashboard/otp'
import LoginSidebar from '@/components/Dashboard/loginSidebar'

function page() {
  return (
    <div className='flex'>
        <LoginSidebar />
        <Otp />
        
    </div>
  )
}

export default page