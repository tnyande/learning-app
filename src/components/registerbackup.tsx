export default function Registerbackup() {
    return (
      <div className="min-h-screen flex">
        {/* Left side: Image */}
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/600")' }}>
          {/* You can replace the above URL with your own image */}
        </div>
  
        {/* Right side: Form */}
        <div className="w-1/2 flex flex-col justify-center px-8">
        <h3 className="text-2xl font-semibold mb-6 text-black text-center">Register</h3>
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
    );
  }