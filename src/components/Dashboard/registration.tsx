import React from 'react'

function registration() {
  return (
    <div>
        
        <div className="w-5/6 space-x-30 ml-32 mr-12 flex flex-col w-[556px] h-[675px] justify-center px-0">
        
        <div className='flex w-[394px] h-[48px] place-items-end  justify-end mt-14 px-54'>
            <h6 className=''>
                Already have an account?
            </h6>
            <button className='inline flex ml-6 text-white justify-center pt-2 h-[48px] w-[125px] bg-[#01589A]'>Login</button>
        </div>
        
        <h3 className="space-x-8 mr-8 mt-14 text-2xl font-bold mb-6 text-black text-left">Register to get Started</h3>
          <form className="space-y-4 space-x-0 mr-8 w-[556px]">
            {/* Input Fields */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 w-[266px] h-[72px] bg-[#F5F5F5]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 w-[266px] h-[72px] bg-[#F5F5F5]"
              />
              </div>

              <div>
                <input
                    type="text"
                    placeholder="Email"
                    className="border p-2 w-[556px] h-[72px] bg-[#F5F5F5]"
                />
              </div>
              

              <div className="grid grid-cols-2 gap-4 w-[556px]">
              <input
                type="Password"
                placeholder="Password"
                className="border p-2 w-[266px] h-[72px] bg-[#F5F5F5]"
              />
              <input
                type="Password"
                placeholder="Confirm Password"
                className="border p-2 w-[266px] h-[72px] bg-[#F5F5F5]"
              />
              </div>
               

               
            <input
                type="text"
                placeholder="Phone"
                className="border p-2 w-[556px] h-[72px] bg-[#F5F5F5]"
              />
            
  
            {/* Full-width Input Field */}
            

            

            
            
            

            
  
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#01589A] text-white p-2 w-full mb-2"
            >
              Create Account &gt;
            </button>
          </form>

            <p className='mt-8'>By confirming your email, you agree to our Terms of Service
             and that you have read and understood our Privacy Policy.
            </p>
        </div>
    </div>
  )
}

export default registration