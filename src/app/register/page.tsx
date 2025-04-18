import React from 'react'
import LoginSidebar from '@/components/Dashboard/loginSidebar'
import Registration from '@/components/Dashboard/registration'

function Register() {
  return (
    <div className='flex'>
        <LoginSidebar />

        <div className='flex-1'>
            <Registration />
        </div>
        
    </div>
  )
}

export default Register