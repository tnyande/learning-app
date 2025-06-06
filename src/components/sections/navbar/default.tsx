import Navigation from "../../ui/navigation";
import Link from "next/link";

import {
  
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";

{/*
import azubiLogo from "learning-app/src/components/logos/azubi-logo.svg";
import Hero2 from "@/components/Hero2.svg";
*/}
import LaunchUI from "@/components/logos/launch-ui";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom absolute left-0 h-24 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
       {/* <NavbarComponent> */}
          <NavbarLeft>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <LaunchUI />
              TK
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
             
              Home
            </Link>
            <Link
              href="/course"
              className="flex items-center gap-2 text-xl font-bold"
            >
             
              Course
            </Link>
            <Navigation />
          </NavbarLeft>
          <NavbarRight>
            <Link href="/signin" className="hidden text-sm md:block">
              Sign in
            </Link>
            {/*
             <Button variant="default" asChild>
              <a href="/">Get Started</a>
            </Button>
            */}

           
          </NavbarRight>
        
        {/* </NavbarComponent> */}
      </div>
    </header>
  );
}
