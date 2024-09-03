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
import anxiety from '../Components/Assests/backend.jpg'
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
                        <p>I was initially unsure about managing my health care needs, but the Health Locator App made it so simple. Its real-time updates and easy navigation are invaluable.</p>
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
                        <p>The offline access and multilingual support in the Health Locator App are fantastic. I never miss important updates or struggle with language barriers. It's incredibly convenient to have essential health information at my fingertips.</p>
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
                        <p>As someone managing health care needs, the Health Locator App has been a game-changer. The real-time updates and community reviews have made navigating health services much easier and more efficient.</p>
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
                            <h4>Mental Health</h4>
                            <p>Mental health involves emotional, psychological.
                            </p>
                            <a href="https://www.medicalnewstoday.com/articles/154543"
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
                            <h4>Nutrition</h4>
                            <p>Nutrition focuses on the intake of food and maintain bodily functions.
                            </p>
                            <a href="https://magazine.medlineplus.gov/article/anxiety-what-you-need-to-know/"
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
                            <h4>Preventive Care</h4>
                            <p>Preventive care includes measures and screenings aimed at early detection.</p>
                            <a href="https://www.medicalnewstoday.com/articles/154543"
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
                            <h4>Vaccination</h4>
                            <p>Vaccination protects against infectious diseases</p>
                            <a href="https://www.medicalnewstoday.com/articles/154543"
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
                            <h4>Material Health</h4>
                            <p>Maternal health focuses on the care and well-being of women during pregnancy</p>
                            <a href="https://www.medicalnewstoday.com/articles/154543"
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
                            <h4>Chronic Diseases</h4>
                            <p>Chronic diseases are long-term conditions like diabetes</p>
                            <a href="https://www.medicalnewstoday.com/articles/154543"
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
                            <h4>Tips for better health</h4>
                            <p>Watch on where to begin a healthy diet...</p>
                            <a href="https://www.youtube.com/watch?v=FoRku07ShZM
"
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
                            <h4>Top healthy food you must eat
                            </h4>
                            <p>Watch on what communities to prefer on healthy diet...</p>
                            <a href="https://www.youtube.com/watch?v=F7gDIshc-S0&list=PLpTTF6wMDLR6P3IMIjrraMa4v9f076ZBn&index=1&pp=iAQB "
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
                            <h4>Personal hygiene basics</h4>
                            <p>Get equiped with the right tools...</p>
                            <a href="https://www.youtube.com/watch?v=ea6g6dG2I1I
"
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
                            <h4>importance of vaccination</h4>
                            <a href="https://www.youtube.com/watch?v=5DJD6t2oDkQ
"
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

        </div>
    )
}

export default Resources