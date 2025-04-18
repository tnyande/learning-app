import React from 'react'
import LoginDashboard from '@/components/Dashboard/loginDashboard'
import { Sidebar } from 'lucide-react'
import LoginSidebar from '@/components/Dashboard/loginSidebar'

function page() {
  return (
    <div className='flex'>
        <LoginSidebar />
        <LoginDashboard />
    </div>
  )
}

export default page