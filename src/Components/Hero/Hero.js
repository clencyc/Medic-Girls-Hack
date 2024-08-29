import React from 'react'
import '../Hero/Hero.css'
import heroImage from '../Assests/hero.jpg'
// import { GiQueenCrown } from "react-icons/gi";

function Hero() {
  return (
    <div className='container-home' id='home'>
        <img src={heroImage} alt="" className='heroimage'/>
        <div className="herotext">
            <h1>Ajiri<span>4</span>Her</h1>
             <p className="tagline" id='tagline'> Connect,Learn,<span>Grow</span></p>
        </div>
       
    </div>
  )
}

export default Hero