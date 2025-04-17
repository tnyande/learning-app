import React from 'react'
import Image from 'next/image'
import { LucideLayoutDashboard, LucideFileText, LucideGraduationCap, LucideSettings, LucidePower } from 'lucide-react'
import Link from 'next/link'

function sidebar() {
  return (
    <div className=''>
         <div className='flex-none bg-[#01589A] text-white w-[280px] h-[1024px]'>
        <div className='flex justify-center '>
            <Image 
            src={"/frame-dash.svg"} alt='dash-logo' width={264} 
            height={94}
            className='mt-[14px]'/>
        </div>
        <div>
            <Link href='/dashboard' className='no-underline'>
                <div className='flex mt-[16px]  text-white ml-[8px] w-[264px] h-[40px] cursor-pointer hover:bg-gray-200 gap-4'>
                    <LucideLayoutDashboard />
                    <h6 className='no-underline'>Dashboard</h6>
                </div>
            </Link>
        </div>
        <div>
            <Link href='/invoices' className='no-underline'>
                <div className='flex mt-[16px]  text-white ml-[8px] w-[264px] h-[40px] cursor-pointer hover:bg-gray-200 gap-4'>
                    <LucideFileText />
                    <h6 className='no-underline'>Invoices</h6>
                </div>
            </Link>
        </div>
        <div>
            <Link href='/learners' className='no-underline'>
                <div className='flex mt-[16px]  text-white ml-[8px] w-[264px] h-[40px] cursor-pointer hover:bg-gray-200 gap-4'>
                    <LucideFileText />
                    <h6 className='no-underline'>Learners</h6>
                </div>
            </Link>
        </div>
        <div>
            <Link href='/courses' className='no-underline'>
                <div className='flex mt-[16px]  text-white ml-[8px] w-[264px] h-[40px] cursor-pointer hover:bg-gray-200 gap-4'>
                    <LucideGraduationCap />
                    <h6 className='no-underline'>Courses</h6>
                </div>
            </Link>
        </div>
        <div>
            <Link href='/report' className='no-underline'>
                <div className='flex mt-[16px]  text-white ml-[8px] w-[264px] h-[40px] cursor-pointer hover:bg-gray-200 gap-4'>
                    <LucideLayoutDashboard />
                    <h6 className='no-underline'>Report</h6>
                </div>
            </Link>
        </div>

        
        <div className='mt-[80%]'>
            <Link href='/logout' className='no-underline'>
                <div className='flex mt-[16px]  text-white ml-[8px] w-[264px] h-[40px] cursor-pointer hover:bg-gray-200 gap-4'>
                    <LucideSettings />
                    <h6 className='no-underline'>Settings</h6>
                </div>
            </Link>
        </div>
        <div className=''>
            <Link href='/settings' className='no-underline'>
                <div className='flex mt-[16px]  text-white ml-[8px] w-[264px] h-[40px] cursor-pointer hover:bg-gray-200 gap-4'>
                    <LucidePower />
                    <h6 className='no-underline'>Logout</h6>
                </div>
            </Link>
        </div>
        

    </div>
    
    </div>
   
  )
}

export default sidebar