import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Women in Tech</h1>
      <p className="about-description">
        Women in Tech is dedicated to addressing the challenges women face in gaining financial independence and career growth through technology.
        We believe that technology can be a powerful tool to promote equal opportunities, financial literacy, entrepreneurship, and access to resources for women in tech.
      </p>
      <p className="about-mission">
        Our mission is to empower women to overcome barriers, enhance their skills, and create innovative solutions that contribute to their financial and career success.
      </p>
      <p className="about-collaboration">
        Participants will collaborate on projects that focus on building tools and platforms to promote financial independence, career development, and entrepreneurship among women.
        Join us in creating a future where women have equal access to opportunities and the resources they need to thrive in the tech industry.
      </p>
    </div>
  );
}

export default About;
