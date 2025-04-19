import Link from 'next/link';
//import Logo from 'learning-app/public/azubi-logo.svg';
import Image from 'next/image';
import { UserButton,SignedIn, SignedOut} from '@clerk/nextjs';
import {  } from '@clerk/nextjs';

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

        
            <Link href="/" className="mr-4 mt-2 text-lg hover:text-black-400 text-black">
                Home
            </Link>
            <Link href="/learner" className="mr-4 mt-2 text-lg hover:text-black-400 text-black">
            Courses
            </Link>
        </div>

       
        

        {/* Right: Sign In Link */}
        {/*
        <SignInButton>
          <button>Login</button>
        </SignInButton>

        <SignInButton  mode="modal"/>
        */}

        <div className="flex-shrink-0 pr-1 mr-2">
          <SignedOut>
          <div className='flex inline-flex'>

          
          <Link href="https://distinct-gorilla-96.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F" 
          target='_blank'
          className="text-lg hover:text-gray-400 text-black">
          
          {/*
          <Image
                className='border-1 mr-2'
                src="/button.svg" // path relative to the public folder
                alt="Logo"
                width={125} // width of the logo
                height={48} // height of the logo

                > </Image> */}
                
          <p className='w-[125px] h-[48px] border-1 bg-[#01589A]'>Login</p>

          </Link>
          </div>
          </SignedOut>

          <SignedIn>
          <button className='flex inline-flex  pt-8 h-[48px]'>
            <UserButton />
          </button>
          </SignedIn>
          
        </div>
        
        
        
      </div>
    </header>
  );
};

export default Navbar;