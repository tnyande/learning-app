import React from 'react'
import ForgotPass from '@/components/Dashboard/forgotPass'
import LoginSidebar from '@/components/Dashboard/loginSidebar'

function page() {
  return (
    <div className='flex'>
        <LoginSidebar />
        
        <ForgotPass />
    </div>
  )
}

export default page