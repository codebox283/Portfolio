import React from 'react';
import { useState, useEffect } from 'react';
import './About.css';
import Me from '../Assets/Me.jpg';

const About = () => {

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const h1Element = document.querySelector(".aboutH");

  //     if (h1Element) {
  //       const bounding = h1Element.getBoundingClientRect();
  //       if (bounding.top < window.innerHeight * 0.15) {
  //         h1Element.classList.add("visible");
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Check initial state on mount

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  return (
    <div id="about-container">
      <h1 className='aboutH'>About  Me</h1>
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