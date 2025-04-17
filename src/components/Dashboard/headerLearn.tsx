import React from 'react'
import { LucideMoon } from 'lucide-react'

function headerLearn() {
  return (
    <div>
        <div className='w-[191px] h-[54px] flex'>
            <button type='button' className='w-[49px] h-[54px] bg-gray-200 mt-2 '>
                <LucideMoon  className='w-[49px] h-[54px] '/>
            </button>
            <button type='button' className='w-[134px] h-[54px] ml-2 bg-gray-200 mt-2'>
                John Doe
            </button>
        </div>
    </div>
  )
}

export default headerLearn