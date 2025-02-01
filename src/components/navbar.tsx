import Link from 'next/link';
//import Logo from 'learning-app/public/azubi-logo.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-black bg-white p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex space-x-8">
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold">
            
              <Image
                src="/azubi-logo.svg" // path relative to the public folder
                alt="Logo"
                width={150} // width of the logo
                height={40} // height of the logo
               />
          </Link>
          
        </div>
         {/* Navigation Links */}

        
            <Link href="/" className="text-lg hover:text-black-400 text-black">
                Home
            </Link>
            <Link href="/courses" className="text-lg hover:text-black-400 text-black">
            Courses
            </Link>
        </div>

       
        

        {/* Right: Sign In Link */}
        <div className="flex-shrink-0">
          <Link href="/signin" className="text-lg hover:text-gray-400 text-black">
          <Image
                className='border-1 mr-10'
                src="/button.svg" // path relative to the public folder
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