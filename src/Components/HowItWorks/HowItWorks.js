import React from 'react';
import '../../Components/HowItWorks/HowItWorks.css';
import { MdOutlineWork } from "react-icons/md";
import { RiCoinsFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { MdSystemSecurityUpdate } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

function HowItWorks() {
    const navigate = useNavigate();

    // Function to navigate to the login page when "Learn More" is clicked
    const handleLearnMore = () => {
        navigate('/login');
    }

    // Function to navigate to the community report page
    const handleReport = () => {
        navigate('/community-reports');
    }

    return (
        <div className='howitworks' id='howitworks'>
            <h1>How it Works</h1>
            <div className="how-it-works">
                <div className="card">
                    <div className="container">
                        <h4 id='text'><MdOutlineWork />Health Facility Locator</h4>
                        <button className='learn'>Find</button>
                    </div>
                </div>
                <div className="card">
                    <div className="container">
                        <h4 id='text1'><RiCoinsFill />Health Information</h4>
                        <button className='learn' onClick={handleLearnMore}>Learn More</button>
                    </div>
                </div>
                <div className="card">
                    <div className="container">
                        <h4 id='text2'><IoIosPeople />Community Report</h4>
                        <button className='learn' onClick={handleReport}>Report</button>
                    </div>
                </div>
                <div className="card">
                    <div className="container">
                        <h4 id='text3'><MdSystemSecurityUpdate />Event Updates</h4>
                        <p>Stay informed and connected with our convenient SMS and USSD services.
                            Receive timely updates on hackathons, loan applications, and team collaborations directly to your mobile device.</p>
                        <button className='learn'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <button className='learn'>
                <Link className='sign-up' to="/signup">Join Us</Link>
            </button>
        </div>
    );
}

export default HowItWorks;
