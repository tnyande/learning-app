import React from 'react'


function StartApp() {
  return (
    
       <div className='flex flex-col size-lvh bg-white w-[1440px] h-80'>
            
                 <div className='flex flex-col ml-20 w-[931px] h-[203px] pl-28 mx-[264px]'>
         
                          {/* Third Column: Registration Form */}
        <div className="w-5/6 space-x-8 mr-8 flex flex-col justify-right px-0">
        <h3 className="space-x-8 mr-8 mt-1 text-2xl font-semibold mb-6 text-black text-center">Start new Application</h3>
          <form className=" pl-44 space-y-4 space-x-0 mr-8">
            {/* Input Fields */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 w-full bg-[#F5F5F5]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 w-full bg-[#F5F5F5]"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 w-full bg-[#F5F5F5]"
              />
              <input
                type="Location"
                placeholder="Location"
                className="border p-2 w-full bg-[#F5F5F5]"
              />
              <select className="w-full p-2 border rounded-md bg-[#F5F5F5]">
                  <option>Choose Module</option>
                  <option>Module 1</option>
                  <option>Module 2</option>
                  <option>Module 3</option>
                </select>

                <select className="w-full p-2 border rounded-md bg-[#F5F5F5]">
                <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <select className="w-full p-2 border rounded-md bg-[#F5F5F5]">
                <option>Disabled</option>
                  <option>Yes</option>
                  <option>No</option>
                  
                </select>
              <input
                type="text"
                placeholder="Phone"
                className="border p-2 w-full bg-[#F5F5F5]"
              />
            </div>
  
            {/* Full-width Input Field */}
            <div className='mr-8'>
            <input
                type="file"
                placeholder="Upload Image"
                className="border  p-2  w-full bg-[#F5F5F5]"
              />

            </div>

            <div>
            <input
                type="text"
                placeholder="Amount"
                className="space-x-8 mr-8 border p-2 w-full bg-[#F5F5F5]"
              />

          
           
            </div>

            <div>
            <textarea
              placeholder="Additional Comments"
              className="space-x-8 mr-8 border p-2 w-full h-32 bg-[#F5F5F5]"
            ></textarea>
            </div>
            

            
  
            {/* Submit Button */}
            <div>
            <button
              type="submit"
              className="mr-4 bg-[#404040] text-white p-2 w-[147px] h-[48px]"
            >
              Register
            </button>
            <button
              type="submit"
              className="bg-[#01589A] text-white p-2 w-[147px] h-[48px]"
            >
              Register
            </button>
            </div>
            
          </form>
        </div>

                 </div>
      
    </div>

    
  )
}

export default StartApp