import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex flex-col flex-end relative w-[1440px] h-[204px] gap-4 bg-[#01589A]" >
          
          <div className='mt-[40px] ml-[189px] w-[250px] h-[48px] border-2 bg-blue'>
            <Image src="/layout-dashboard.svg"
            alt="logo"
            width={48}
            height={48}
            className='inline'

            />
            <h3 className='inline text-white'>Dashboard</h3>
          </div>
          <div className='justify ml-[189px] w-[1036px] h-[66px] border-2 bg-white-600 mt-6'>
            <h4 className='pt-2 bg-white w-[1036px] h-[66px]'>
               <p className='inline  ml-16'> Application </p>
               <p className='inline ml-4'>Profile</p>
                
            </h4>
            
          </div>
           

            
        </div>
  )
}

export default Hero;
