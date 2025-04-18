// components/Footer.js

import Image from "next/image";

export default function Footer() {
    return (
      <footer className=" bg-[#01589A] text-white py-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center space-x-4 ">
            <Image src="/azubi-footer.svg" alt="Logo" className="w-385 h-110" />
          </div>
  
          {/* Right: Three Columns of Text */}
          <div className="flex space-x-10">
            {/* Column 1 */}
            <div className="text-sm">
              <h3 className="font-semibold text-lg mb-3">Menu</h3>
              <p>Home</p>
              <p>Courses</p>
            </div>
            
            {/* Column 2 */}
            <div className="text-sm">
              <h3 className="font-semibold text-lg mb-3">Contact</h3>
              <p>+23341002000</p>
              <p>New  Reiss ,Ghana, Accra </p>
            </div>
  
            {/* Column 3 */}
            <div className="text-sm">
              <h3 className="font-semibold text-lg mb-3">Social</h3>
              <p>Linkedin</p>
              <p>Facebook</p>
            </div>
          </div>
        </div>
  
        {/* Line separator */}
        <div className="border-t border-white my-6 mx-auto w-5/6 "></div>
  
        {/* Copyright */}
        <div className="pl-10 mx-16 pr-12 text-center text-sm flex  justify-between items-center ">
          
          <p>&copy; copyright 2025 - G-client, All rights reserved</p>
          <div className="flex">
          <p >Back to top</p>
          <Image src="/arrow-up.svg" alt="arrow" className="ml-1 w-4 h-4 mb-4"/>
          </div>
          
        </div>
      </footer>
    );
  }
  