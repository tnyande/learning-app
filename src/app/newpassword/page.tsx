import React from 'react'
import NewPassword from '@/components/Dashboard/newpassword'
import LoginSidebar from '@/components/Dashboard/loginSidebar'

function page() {
  return (
    <div className='flex'>
        <LoginSidebar />

        <div className='flex-1'>
            <NewPassword />
        </div>
        

    </div>
  )
}

export default page