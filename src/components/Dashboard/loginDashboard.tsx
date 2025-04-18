
import React from 'react'

function LoginDashboard() {
  return (
    <div>
        
        <div className="w-5/6 space-x-30 ml-32 mr-12 flex flex-col w-[556px] h-[675px] justify-center px-0">
        
        <div className='flex w-[394px] h-[48px] place-items-end  justify-end mt-4 px-54'>
            <p className=''>
                Need to create an account?
            </p>
            <button className='inline flex ml-6 text-white justify-center pt-2 h-[48px] w-[125px] bg-[#01589A]'>Login</button>
        </div>
        
        <h3 className="space-x-8 mr-8 mt-14 text-2xl font-bold mb-6 text-black text-left">Login into your account</h3>
          <form className="space-y-4 space-x-0 mr-8 w-[556px]">
            {/* Input Fields */}
       

              <div>
                <input
                    type="text"
                    placeholder="Email"
                    className="border p-2 w-[556px] h-[72px] bg-[#F5F5F5]"
                />
              </div>
              <div>
                <input
                    type="Password"
                    placeholder="Password"
                    className="border p-2 w-[556px] h-[72px] bg-[#F5F5F5]"
                />
              </div>
              <p>Forgot password ? </p>
              

           
            
  
            {/* Full-width Input Field */}
            

            

            
            
            

            
  
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#01589A] text-white p-2 w-full mb-2"
            >
              Login &gt;
            </button>
          </form>

            
        </div>
    </div>
  )
}

export default LoginDashboard