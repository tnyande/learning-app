import React from 'react'
import ForgotPass from '@/components/Dashboard/forgotPass'
import { Sidebar } from 'lucide-react'
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