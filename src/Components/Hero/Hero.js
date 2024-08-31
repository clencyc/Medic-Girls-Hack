import React from 'react'
import '../Hero/Hero.css'
import heroImage from '../Assests/pexels-pixabay-356040.jpg'
// import { GiQueenCrown } from "react-icons/gi";

function Hero() {
  return (
    <div className='container-home' id='home'>
        <img src={heroImage} alt="" className='heroimage'/>
        <div className="herotext">
            <h1>MedicLocate</h1>
             <p className="tagline" id='tagline'> Locate, Get service<span>Be Informed</span></p>
        </div>
       
    </div>
  )
}

export default Hero