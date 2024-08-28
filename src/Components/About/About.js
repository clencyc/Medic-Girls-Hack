import React from 'react';
// import about from '../Assets/about-us-image.jpg'
import about from '../Assests/about.jpg'
import '../../Components/About/About.css'
import { Link } from 'react-router-dom';


  

function About() {
  return (
    <div className='about-us' id='about'>
        <div className="row">
            <div className="column">
                <div className="about-text">
                    <h1>About Us</h1>
                    <p>Code Queen is a platform empowering women in tech. We provide resources on hackathons, loan assistance, and team matching. Our SMS and USSD services ensure easy access to information. Join our community and build extraordinary things together.</p>
                        <button> <Link className='sign-up' to="/Signup" >Sign Up</Link></button>

                </div>

            </div>

            <div className="column">
                <img src={about} alt="" />
            </div>
        </div>

        
    </div>
  )
}

export default About