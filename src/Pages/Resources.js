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
                <p>""As a woman in tech, Hackathon Hub has been an absolute game-changer. The resources they provide, from upcoming hackathons to loan assistance, have helped me level up my career."</p>
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
                <p>"I was initially hesitant about participating in hackathons, but Hackathon Hub made it so easy. Their tips and resources were invaluable."</p>
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
                <p>"The SMS and USSD services are a fantastic addition to Hackathon Hub. I never miss a deadline or an important announcement. It's so convenient to have everything at my fingertips."</p>
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
                    <h4>FRONTEND DEVELOPMENT</h4>
                    <p>Read more about Front end development...</p>
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
                    <h4>BACKEND DEVELOPMENT</h4>
                    <p>Read about back end development...</p>
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
                    <h4>UI/UX DESIGN</h4>
                    <p>Read about UI/UX design...</p>
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
                    <h4>BLOCK-CHAIN</h4>
                    <p>Read about Block chain development...</p>
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
                    <h4>MACHINE LEARNING</h4>
                    <p>Read about machine learning...</p>
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
                    <h4>Cyber Security</h4>
                    <p>Read about Cyber security ...</p>
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
                    <h4>HOW TO START CODING</h4>
                    <p>Watch on where to begin as a techie...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
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
                    <h4>COMMUNITIES TO JOIN AS A LADY</h4>
                    <p>Watch on what communities to join...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
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
                    <h4>TECHNOLOGIES YOU NEED TO KNOW</h4>
                    <p>Get equiped with what tech stack you need...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
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
                    <h4>CAREER PATHS YOU NEED</h4>
                    <p>Get equiped with what career paths you need...</p>
                    <a href="https://www.medicalnewstoday.com/articles/154543"
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