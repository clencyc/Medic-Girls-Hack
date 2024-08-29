import React from 'react'
import '../../Components/HowItWorks/HowItWorks.css'
import { MdOutlineWork } from "react-icons/md";
import { RiCoinsFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { MdSystemSecurityUpdate } from "react-icons/md";



// import textsms from '../Assets/text.png'
// import therapy from '../Assets/therapy.png'
// import plan from '../Assets/Plan.png'
// import breakout from '../Assets/breakoutroom.png'
import { Link } from 'react-router-dom'


function HowItWorks() {
  return (
    <div className='howitworks' id='howitworks'>
        <h1>How it Works</h1>
        {/* <p>Here are some few steps to help you out with the web application</p> */}
        <div className="how-it-works">
            <div className="card">
                {/* <img src={textsms} alt="" /> */}
                <div className="container">
                    <h4 id='text'><MdOutlineWork />Career Growth</h4>
                    <p>Discover a wealth of information on upcoming hackathons, including deadlines, themes, and eligibility criteria. Learn about successful hacks, tips for building winning projects, and essential coding languages.</p>

                    <button className='learn'>RESOURCES</button>
                </div>
            </div>
            <div className="card">
                {/* <img src={therapy} alt="" /> */}
                <div className="container">
                    <h4 id='text1'><RiCoinsFill />Entrepreneurship</h4>
                    <p> Access tailored loan options to support your participation in hackathons and fund your innovative projects.
                        Our partnership with trusted financial institutions ensures that you have the necessary resources to bring your ideas to life.</p>
                        <button className='learn'>DIAL*384*76717#</button>

                </div>
            </div>
            <div className="card">
                {/* <img src={plan} alt="" /> */}
                <div className="container">
                    <h4 id='text2'><IoIosPeople />Connect with Ladies</h4>
                    <p>Connect with like-minded women who share your passion for technology.
                         Find the perfect team members to collaborate on your hackathon projects and leverage diverse perspectives.</p>
                         <button className='learn'>EXPLORE</button>

                </div>
            </div>
            <div className="card">
                {/* <img src={breakout} alt="" /> */}
                <div className="container">
                    <h4 id='text3'><MdSystemSecurityUpdate />Event Updates</h4>
                    <p>Stay informed and connected with our convenient SMS and USSD services. 
                        Receive timely updates on hackathons, loan applications, and team collaborations directly to your mobile device.</p>
                        <button className='learn'>SUBSCRIBE</button>

                </div>
            </div>
        </div>   
 
        <button className='learn'> <Link className='sign-up' to="/Signup" >Join Us</Link></button>

    </div>
  )
}

export default HowItWorks