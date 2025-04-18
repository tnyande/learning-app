import React from 'react'
import Image from 'next/image'
import { LucideLayoutDashboard, LucideFileText, LucideGraduationCap, LucideSettings, LucidePower } from 'lucide-react'
import Link from 'next/link'

function LoginSidebar() {
  return (
    <div className=''>
         <div className='flex-none bg-[#01589A] text-white w-[534px] h-[1024px]'>
            <div className='flex justify-center '>
                <Image 
                src={"/left-section.svg"} alt='dash-logo' width={534} 
                height={94}
                className='mt-[14px]'/>
            </div>
        </div>
        

    
    
    </div>
   
  )
}

export default LoginSidebar