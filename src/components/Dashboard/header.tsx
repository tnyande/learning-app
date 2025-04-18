import { LucideBanknote, LucideClock, LucideFileText, LucideMoon, LucideUsers2 } from 'lucide-react'

import React from 'react'

function header() {
  return (
    <div className='flex w-full h-[105px] bg-white'>

    
    <div className='flex absolute justify-end w-full h-[105px]'>
       <div className='w-[191px] h-[54px] flex'>
          <button type='button' className='w-[49px] h-[54px] bg-gray-200 mt-2 '>
            <LucideMoon  className='w-[49px] h-[54px]  '/>
          </button>
          <button type='button' className='w-[134px] h-[54px] ml-2 bg-gray-200 mt-2'>
            John Doe
          </button>
       </div>
       
    </div>
    <div className='flex justify-start mt-20 ml-16'>
        <h3> Dashboard</h3>
          
          <p className='flex absolute mt-8'>Welcome back, John</p>
        
        
        
       </div>
       <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-col-4 gap-4 absolute pr-10  mt-48 ml-16 w-[1032px] h-[160px]'>
          

          
                      
                        <div className=" bg-blue-200  w-[240px] h-[160px] rounded-lg shadow-lg">
                              
                              <LucideBanknote className=' mt-6 ml-20  item-center absolute w-[24px] h-[24px]' />
                              
                              <h3 className=" mt-4 mr-16 text-right text-sm font-bold">Collected</h3>
                              
                              <div className="mt-2 ml-2 w-[220px] h-[96px] text-center  bg-white text-sm text-black-600">
                                  <p className="pt-10">description </p>
                              </div>
                        </div>

                        <div className=" bg-blue-200  w-[240px] h-[160px] rounded-lg shadow-lg">
                          <LucideClock className=' mt-6 ml-20  item-center absolute w-[24px] h-[24px]' />
                          <h3 className="mt-4 mr-16 text-right text-sm font-bold">Pending</h3>
                          <div className="mt-2 ml-2 w-[220px] h-[96px] text-center  bg-white text-sm text-black-600">
                              <p className="pt-10">description </p>
                          </div>
                    </div>

                    <div className=" bg-blue-200  w-[240px] h-[160px] rounded-lg shadow-lg">
                            <LucideFileText className=' mt-6 ml-20  item-center absolute w-[24px] h-[24px]' />
                          <h3 className="mt-4 mr-8 text-right text-sm font-bold">Total Invoices</h3>
                          <div className="mt-2 ml-2 w-[220px] h-[96px] text-center  bg-white text-sm text-black-600">
                              <p className="pt-10">description </p>
                          </div>
                    </div>

                    <div className=" bg-blue-200  w-[240px] h-[160px] rounded-lg shadow-lg">
                            <LucideUsers2 className=' mt-6 ml-20  item-center absolute w-[24px] h-[24px]' />
                          <h3 className="mt-4 mr-8 text-right text-sm font-bold">Total Learners</h3>
                          <div className="mt-2 ml-2 w-[220px] h-[96px] text-center  bg-white text-sm text-black-600">
                              <p className="pt-10">description </p>
                          </div>
                    </div>

                       
      
       
    </div>

    </div>
  )
}

export default header