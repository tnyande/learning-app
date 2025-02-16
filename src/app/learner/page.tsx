import React from 'react'

import Navbar from '@/components/Learner/navbar'
import Hero from '@/components/Learner/hero'
import Footer from '@/components/footer'
import Content from '@/components/Learner/content'

function learner() {
  return (
    <div>
  
        <Navbar /> 
        <Hero />
       <Content />
       <Footer />
       
  </div>
  )
}

export default learner