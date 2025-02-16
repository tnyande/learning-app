import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


function Content() {
  return (
    <div className='flex flex-col size-lvh bg-white w-[1440px] h-80'>
      

            
                <div className='flex flex-col ml-20 w-[931px] h-[203px] pl-28 mx-[264px]'>
                    <div className='flex inline ml-8'>
                        <p className=' ml-8'>
                            Program
                        </p>
                       
                        <p className='ml-8 pl-8'>
                            Date Registered
                        </p>
                        <p className=' ml-8 pl-8'>
                            Status
                        </p>
                        <p className='ml-8 pl-8'> 
                            Paid
                        </p>

                    </div>
                    <div className='flex ml-8 '>
                        <p className=' ml-8'>
                            Data Science
                        </p>
                        <p className=' ml-8'>
                            2025/2/10
                        </p>
                        <p className=' ml-8 pl-20'>
                            Registered
                        </p>
                        <p className=' ml-8'>
                            $150.04
                        </p>
                    </div>

                    
                   
                   
                        
                       
                </div>
                

                <div>
                
                

            </div>

            <div className='flex flex-row w-[511px] h-[48px] mx-[266px] gap-6'>
                    <p className=' inline border-1 border-gray-400 py-1  text-blue-400 px-2'>
                        PowerBI
                    </p>
                    <p className='inline border-1 border-gray-400 py-1  text-blue-400 px-2'>
                        PowerBI
                    </p>
                    <p className='inline border-1 border-gray-400 py-1  text-blue-400 px-2'>
                        PowerBI
                    </p>
                    <p className='inline border-1 border-gray-400 py-1  text-blue-400 px-2'>
                        PowerBI
                    </p>
                </div>
                <div className='flex flex-row w-[424px] h-[48px] gap-2 ml-64 pl-2 my-12'>
                    <p className='inline w-[168px] h-[48px] border-1 bg-[#E6E6E6]  border-gray-400 py-1  text-black px-2'>
                        Home
                        <Image 
                          src={"/Chevron-Right.svg"}
                          alt='arrow'
                          width={22}
                          height={22}
                          className='inline'
                         />
                    </p>
                    <p className='inline w-[232px] h-[48px] border-1 bg-[#01589A] border-gray-400 py-1  text-white px-2'>
                        Start New Application
                        <Image 
                          src={"/Chevron-Right.svg"}
                          alt='arrow'
                          width={22}
                          height={22}
                          className='inline'
                         />
                    </p>

                </div>
       
       
       
        
     </div>   
    
  )
}

export default Content