import Image from 'next/image';

const RegisterPage = () => {
  return (
    <div className=" min-h-screen flex ">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-0">
        {/* First Column: Image */}

        
        
            <div className="relative flex p-y-8 ml-50 px-4  mt-10 w-329 h-418  ">
              <div className=' border-0.25  bg-white rounded-lg'>

              
                  <Image
                  src="/register.svg" 
                  alt="Product Image"
                  layout="fill"
                  //objectFit="cover"
                  className="object-left object-scale-down pl-12 p-x-16  "
                />
            </div>
            
            

            {/* Second Column: Title and Text Content */}
            <div className="ml-8 pr-8 mr-8 grid grid-col-3 pl-16 mt-8  py-16 mt-16 w-266 h-416">
                <div className='pr-8 mr-8'>
                    <h3 className="text-xl font-semibold">Sign Up and Choose Your Course</h3>
                    <p className="text-gray-600">Create your account quickly with 
                        just your email or social media 
                        login, then explore a wide range </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Onboarding</h3>
                    <p className="text-gray-600">Create your account quickly with 
                        just your email or social media 
                        login, then explore a wide range </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Start Learning</h3>
                    <p className="text-gray-600">Create your account quickly with 
                        just your email or social media 
                        login, then explore a wide range </p>
                </div>
                
            </div>
            </div>
        

        {/* Third Column: Registration Form */}
        <div className=" flex flex-col justify-right px-0">
        <h3 className="mt-2 text-2xl font-semibold mb-6 text-black text-center">Register</h3>
          <form className="space-y-4">
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
            <input
                type="file"
                placeholder="Upload Image"
                className="border p-2 w-full bg-[#F5F5F5]"
              />

<input
                type="text"
                placeholder="Amount"
                className="border p-2 w-full bg-[#F5F5F5]"
              />
            
            <textarea
              placeholder="Additional Comments"
              className="border p-2 w-full h-32 bg-[#F5F5F5]"
            ></textarea>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#01589A] text-white p-2 w-full"
            >
              Register
            </button>
          </form>
        </div>


      </div>
    </div>
  );
};

export default RegisterPage;
