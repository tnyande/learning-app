import React from 'react'

function futurecourses() {
    const buttons = [
        'ReactJs', 'NextJs', 'NodeJs', 'MongoDB', 'VueJs', 'PowerBI',
        'Python', 'Excel', 'Tableau', 'AWS', 'Azure'
      ];
    return (
        <div className="w-full mx-auto px-6 py-12 w-1440 h-365 bg-[#01589A] text-white
">
          <div className=" p-6 rounded-lg shadow-lg space-y-6 ">
            {/* Row 1: Heading */}
            <h2 className="text-2xl font-bold text-center">What will be next step</h2>
    
            {/* Row 2: Description */}
            <p className="text-white-600 text-center ">
            Discover our diverse stack of solutions, including software development, data 
            science, and cloud tools. Sign up today and kickstart your journey!
            </p>
    
            {/* Row 3: Buttons */}
            <div className="grid grid-cols-6 gap-4 border-1 w-384.5 h-168">
              {buttons.slice(0, 6).map((button, index) => (
                <button
                  key={index}
                  className="border-1 border-white text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  {button}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-6 gap-4 w-769 h-168">
              {buttons.slice(6, 12).map((button, index) => (
                <button
                  key={index}
                  className="border-1 border-white text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
        </div>
            )
}

export default futurecourses