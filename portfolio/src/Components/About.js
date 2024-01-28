import React from 'react';
// import { useState, useEffect } from 'react';
import './About.css';
import Me from  '../Assets/Me.jpg';

const About = () => {


  //   const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => {
  //   setScrollPosition(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  
  // const opacity = 1 - Math.min(scrollPosition / 500, 1);

  return (
    <div id="container">
      <h1 id='aboutH'>About  Me</h1>
      <div id='aboutDiv'>
        <div id='meImg'>
          <img id='meImgI' alt='' src={Me}></img>
        </div>
        <p id='aboutP'>Empowering all-scale startups with custom web experiences that are memorable and profitable. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape.</p>
      </div>
    </div>
  );
};

export default About;