
import Navbar from "@/components/navbar";
import './globals.css'
import Hero from "@/components/hero";
import Solution from "@/components/solution";
import Futurecourses from "@/components/futurecourses";


export default function Home() {
  return (
    <div>
  
        <Navbar /> 
        <Hero />
        <Solution />
       <Futurecourses />
       
  </div>
  )
  
}