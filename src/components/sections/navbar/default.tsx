import Navigation from "../../ui/navigation";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";

import LaunchUI from "../../logos/launch-ui";
import Hero2 from "@/components/Hero2.svg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom absolute left-0 h-24 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <LaunchUI />
              TK
            </a>
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <LaunchUI />
              Home
            </a>
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <LaunchUI />
              Course
            </a>
            <Navigation />
          </NavbarLeft>
          <NavbarRight>
            <a href="/" className="hidden text-sm md:block">
              Sign in
            </a>
            {/*
             <Button variant="default" asChild>
              <a href="/">Get Started</a>
            </Button>
            */}

           
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
