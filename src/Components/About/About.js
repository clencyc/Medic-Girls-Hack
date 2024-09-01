// import React from 'react'

// function About() {
//   return (
//     <div>About</div>
  
//   )
// }

// export default About;
import React from 'react';
import './About.css'; // Import the CSS file for styling

function About() {
  return (
    <div className="about-container">
      <h1>About Our Health Locator App</h1>
      <p>
        Welcome to our Health Locator App, designed to simplify how you find and access healthcare services. Our app aims to provide reliable and up-to-date information to ensure that you can make informed decisions about your health and well-being.
      </p>
      <p>
        With our app, you can easily locate health facilities, stay updated on service hours, and access important information even offline. We are committed to making healthcare more accessible and user-friendly for everyone.
      </p>
      <h2>Features:</h2>
      <ul>
        <li>Health Facility Locator</li>
        <li>Real-Time Updates</li>
        <li>Language Support</li>
        <li>Basic User Authentication</li>
        <li>Offline Support</li>
      </ul>
    </div>
  );
}

export default About;

