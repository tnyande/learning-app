
import React from 'react'


function NewPassword() {
  return (
    <div>
        <div className='flex w-[394px] h-[48px] place-items-end  justify-left mt-4 px-54'>
           
            <button className='inline flex ml-6 text-[#01589A] border-[#01589A] justify-center pt-2 h-[48px] w-[125px] border-1 bg-white'> Back</button>
        </div>
        <div className="w-5/6 space-x-30 ml-32 mr-12 flex flex-col w-[556px] h-[675px] justify-center px-0">
        
        
        
        <h3 className="space-x-8 mr-8 mt-14 text-2xl font-bold mb-6 text-black text-left">
        Password New Password
        </h3>
          <form className="space-y-4 space-x-0 mr-8 w-[556px]">
            {/* Input Fields */}
       

            
              <div>
                <input
                    type="Password"
                    placeholder="Password"
                    className="border p-2 w-[556px] h-[72px] bg-[#F5F5F5]"
                />
              </div>
              <div>
                <input
                    type="Password"
                    placeholder="Confirm Password"
                    className="border p-2 w-[556px] h-[72px] bg-[#F5F5F5]"
                />
              </div>
              <p>Having trouble logging in? contact support  </p>
              

           
            
  
            {/* Full-width Input Field */}
            

            

            
            
            

            
  
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#01589A] text-white p-2 w-full mb-2"
            >
              Verify &gt;
            </button>
          </form>

          <p className='mt-8'> 
          Having trouble logging in? contact support  </p>
            
        </div>
    </div>
  )
}

export default NewPassword