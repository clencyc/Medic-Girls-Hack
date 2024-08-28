import React from 'react';
import '../../Components/Footer/Footer.css';
// import FooterLogo from '../Assets/logo.png';
import CallIcon from '@mui/icons-material/Call';
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';


function Footer() {
  return (
  <footer>
    <div className='footer'>
        <div className="column">
          <h2>Ajiri4Her</h2>
        </div>
        <div className="column">
          <h4>Resources</h4>
          <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Get Started</li>
          </ul>
        </div>
        <div className="column">
          <h4>Find Us on Social media</h4>
          <ul>
            <li>X</li>
            <li>Instagram</li>
            <li>Youtube</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className="column">
          <h4>Contact Us</h4>
          <ul>
            <li><CallIcon /><span>Call Us</span></li>
            <li><SmsIcon /><span>Message Us</span></li>
            <li><EmailIcon /><span>Email Us</span></li>
          </ul>
        </div>
    </div>
    <p>&copy; 2024 Ajiri4Her.com</p>
  </footer>
  )
}

export default Footer