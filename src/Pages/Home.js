import React from 'react'
import About from '../../src/Components/About/About'
import Hero from '../../src/Components/Hero/Hero'
import HowItWorks from '../Components/HowItWorks/HowItWorks'
import Contact from '../Components/Contact/Contact'
// import Communityreports from '../Components/Communityreports/Communityreports'


function Home() {
  return (
    <div>
      <Hero />
      <About />
      <HowItWorks />
      <Contact />
      {/* <Communityreports /> */}


    </div>
  )
}

export default Home