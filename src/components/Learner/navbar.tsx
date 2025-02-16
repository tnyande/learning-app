import Link from 'next/link';
//import Logo from 'learning-app/public/azubi-logo.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-black bg-white p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex">
        <div className="flex-shrink-4 ">
          <Link href="/" className="text-2xl font-bold">
            
              <Image
                src="/azubi-logo.svg" // path relative to the public folder
                alt="Logo"
                width={150} // width of the logo
                height={40} // height of the logo
                className='space-x-8 ml-28 mr-4'
               />
          </Link>
          
        </div>
         {/* Navigation Links */}

        
            
        </div>

       
        

        {/* Right: Sign In Link */}
        <div className="flex-shrink-0 pr-16 mr-4">
          <Link href="/signin" className="text-lg hover:text-gray-400 text-black">
          <Image
                className='border-1 mr-6'
                src="/profile.svg" // path relative to the public folder
                alt="Logo"
                width={125} // width of the logo
                height={48} // height of the logo

                />
          
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;