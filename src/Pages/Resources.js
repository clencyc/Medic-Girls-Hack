import React from 'react'
import '../Styles/Resources.css'
import { Link } from 'react-scroll'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import DescriptionIcon from '@mui/icons-material/Description';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Article1 from '../Components/Assests/uiux.jpg'

import Video1 from "../Components/Assests/hero.jpg"
import WorkIcon from '@mui/icons-material/Work';
import adhd from '../Components/Assests/machinelearning.jpg'
import autism from '../Components/Assests/design.jpg'
import ptsd from '../Components/Assests/blockchain.jpg'
import anxiety  from '../Components/Assests/backend.jpg'
import depression from "../Components/Assests/cybersec.jpg"


function Resources() {
  return (
        <div className='casestudies'>
        <div className="links">
            <div className="nav">
               <Link activeClass="active" to="/resources" className="casestudylink"> <FeaturedPlayListIcon /> Featured</Link>
               <Link activeClass="active" to="/patient" className="casestudylink"> <DescriptionIcon /> Articles</Link>
               <Link activeClass="active" to="/therapist" className="casestudylink"><OndemandVideoIcon /> Videos</Link>  
               <Link activeClass="active" to="/therapist" className="casestudylink"> <WorkIcon /> CaseStudies</Link>

        </div>
        </div>

  <div className="userstories">
        <div className="card-resource">
            <div className="container">
            <AccountCircleIcon />
                <p>"I was initially unsure about managing my health care needs, but the Health Locator App made it so simple. Its real-time updates and easy navigation are invaluable."</p>
                <p>~Anonymous</p>
               <ul>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarBorderIcon />

                    
                </ul>
            </div>
        </div>
        <div className="card-resource">
            <div className="container">
            <AccountCircleIcon />
                <p>"The offline access and multilingual support in the Health Locator App are fantastic. I never miss important updates or struggle with language barriers. It's incredibly convenient to have essential health information at my fingertips."</p>
                <p>~Anonymous</p>
               <ul>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarBorderIcon />

                    
                </ul>
            </div>
        </div>
        <div className="card-resource">
            <div className="container">
            <AccountCircleIcon />
                <p>"As someone managing health care needs, the Health Locator App has been a game-changer. The real-time updates and community reviews have made navigating health services much easier and more efficient."</p>
                <p>~Anonymous</p>
               <ul>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarBorderIcon />

                    
                </ul>
            </div>
        </div>
    </div>

    <div className="articles">
        <h1>Articles</h1>
        <div className="article-content">
        <div className="card">
                <img src={Article1} alt="" />
                <div className="container-text">
                    <h4>VACCINATION</h4>
                    <p>Vaccination protects against infectious disease.</p>
                    {/* <p></p> */}
                    <a href="https://www.cdc.gov/vaccines/index.html"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: ' #9F2C75',
                            color: 'white',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>READ</a>
                </div>
            </div>

            <div className="card">
                <img src={anxiety} alt="" />
                <div className="container-text">
                    <h4>MATERNAL</h4>
                    <p>Maternal health focuses on the care and well-being of women</p>
                    <a href="https://www.cdc.gov/maternal-infant-health/about/?CDC_AAref_Val=https://www.cdc.gov/reproductivehealth/maternalinfanthealth/index.html"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: ' #9F2C75',
                            color: 'white',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>READ</a>
                    
                    {/* <button> <a href="https://github.com/fridahnamudu?tab=repositories" target='blank' rel='noopener noreferrer'> */}
                    {/* </a>CHECKOUT</button> */}
                </div>
            </div>
            <div className="card">
                <img src={autism} alt="" />
                <div className="container-text">
                    <h4>CHRONIC DISEASES</h4>
                    <p>Chronic diseases are long-term conditions like diabetes and heart disease </p>
                    <a href="https://www.who.int/chronic_conditions/en/"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: ' #9F2C75',
                            color: 'white',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>READ</a>
                </div>
            </div>
            <div className="card">
                <img src={ptsd} alt="" />
                <div className="container-text">
                    <h4>MENTAL HEALTH</h4>
                    <p>Mental health involves emotional, psychological, and social well-being</p>
                    <a href="https://www.who.int/teams/mental-health-and-substance-use"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: ' #9F2C75',
                            color: 'white',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>READ</a>
                </div>
            </div>
            <div className="card">
                <img src={adhd} alt="" />
                <div className="container-text">
                    <h4>NUTRITION</h4>
                    <p>Nutrition focuses on the intake of food and nutrients to support overall health</p>
                    <a href="https://www.who.int/health-topics/nutrition#tab=tab_1"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: ' #9F2C75',
                            color: 'white',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>READ</a>
                </div>
            </div>
            <div className="card">
                <img src={depression} alt="" />
                <div className="container-text">
                    <h4>PREVENTIVE CARE</h4>
                    <p>Preventive care includes measures and screenings</p>
                    <a href="https://www.uspreventiveservicestaskforce.org/uspstf/"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: ' #9F2C75',
                            color: 'white',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>READ</a>
                </div>
            </div>
           

        </div>


    
    </div>
    <div className="videos">
        <h1> Videos</h1>
        <div className="videos-details">
        <div className="card">
                <img src={Video1} alt="" />
                <div className="container-text">
                    <h4>TIPS TO BETTER HEALTH</h4>
                    <p>learn to better your health...</p>
                    <a href="https://www.youtube.com/watch?v=FoRku07ShZM"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '20px 100px',
                            backgroundColor: '#9F2C75',
                            color: 'black',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>WATCH</a>
                </div>
            </div>
            <div className="card">
                <img src={Video1} alt="" />
                <div className="container-text">
                    <h4>TOP 10 HEALTHY FOOD YOU MUST EAT</h4>
                    <p>Watch on what communities to join...</p>
                    <a href="https://www.youtube.com/watch?v=F7gDIshc-S0&list=PLpTTF6wMDLR6P3IMIjrraMa4v9f076ZBn&index=1&pp=iAQB"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '20px 100px',
                            backgroundColor: '#9F2C75',
                            color: 'black',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>WATCH</a>
                </div>
            </div>
            <div className="card">
                <img src={Video1} alt="" />
                <div className="container-text">
                    <h4>PERSONAL HYGIENE BASIC</h4>
                    <p>Get equiped with what tech stack you need...</p>
                    <a href="https://www.youtube.com/watch?v=ea6g6dG2I1I"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '20px 100px',
                            backgroundColor: '#9F2C75',
                            color: 'black',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>WATCH</a>
                </div>
            </div>
            <div className="card">
                <img src={Video1} alt="" />
                <div className="container-text">
                    <h4>IMPORTANCE OF VACCINATION</h4>
                    <p>Get equiped with what career paths you need...</p>
                    <a href="https://www.youtube.com/watch?v=5DJD6t2oDkQ"
                    target="_blank"
                     rel="noopener noreferrer"
                     style={{
                            display: 'inline-block',
                            padding: '20px 100px',
                            backgroundColor: '#9F2C75',
                            color: 'black',
                            fontWeight: 'bolder',
                            textDecoration: 'none',
                            borderRadius: '5px'
                         }}>WATCH</a>
                </div>
            </div>
            </div>

    </div>
  
    <button className="join-button">Join a community</button>
    </div>
  )
}

export default Resources