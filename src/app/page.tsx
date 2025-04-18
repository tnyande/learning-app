
import Navbar from "@/components/navbar";
import './globals.css'
import Hero from "@/components/hero";
import Solution from "@/components/solution";
import Futurecourses from "@/components/futurecourses";
import RegisterPage from "@/components/registerPage";
import Footer from "@/components/footer";



export default function Home() {
  return (
    <div>
  
        <Navbar /> 
        <Hero />
        <Solution />
       <Futurecourses />

       <RegisterPage />
       <Footer />
       
  </div>
  )
  
}