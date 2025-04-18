

const Hero = () => {
  return (
    <div className="relative w-screen
        h-screen  
          bg-[#01589A] w-1440 h-600 
          ">
           

            <main className="flex flex-col 
            items-center justify-center 
             lg:flex-row 
            lg:items-center lg:justify-between
            lg:space-x-12 ">

            
                <div className="lg:max-w-xl
                lg:flex-1 bg-[#01589A]
                w-493 h-381.96 mt-5 ml-20">
                    <h1 className="text-white 
                    text-4xl font-bold 
                    text-center lg:text-left
                    ">
                        Unlock Your Potential with 
                        Industry-Leading Courses!
                       
                    </h1>
                    <p className="text-white-400 
                    text-lg font-medium text-left
                    lg:text-left leading-relaxed m-6 ml-20 text-white">
                        "Join thousands of learners gaining real-
                        world skills and advancing their careers. Our 
                        expert-led courses are designed to empower 
                        you to succeed."
                    </p>
                    <button className=" 
                    text-white text-lg b-bold border-1 ml-20
                    py-3 px-6 border-white w-137 h-38 cursor: pointer">
                        Get Started
                    </button>
                </div>

                <div className=" bg-[#01589A]
                w-493 h-381.96 mt-5">
                   
                    <img
                        className="mr-20"  
                            
                         src="/laptop-azubi64.svg"
                   
                        
                        alt="Placeholder"
                    />
                </div>
               
            </main>
        </div>
  )
}

export default Hero;
