import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import About from './About';
import Projects from './Projects';
import CursorChange from './CursorChange';
import Logo from '../Assets/Logo.svg';
import MenuW from '../Assets/MenuW.svg';
import MenuB from '../Assets/MenuB.svg'
import './Main.css';
import Contact from './Contact';

const Main = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    
    };
  }, []);


  const opacity = 1 - Math.min(scrollPosition / 500, 1);

  const MenuC = scrollPosition > 150 ? MenuW : MenuB;


  // Hide and Show
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
      else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });


  return (
    <>
      <Loader />

      <div className="main-container">
        <img className="logo" alt='' src={Logo} />
        <img className='menu' alt='' src={MenuW} style={{ MenuC: MenuC }} />
        <div id="main-content"
          style={{ opacity: opacity }}>
          <h1 id='heroh1'>Nakshatra  bandyopadhyay</h1>
          <h2 id='heroh2'>Web Developer</h2>
        </div>
      </div>

      {screenWidth >= 1200 && <CursorChange className="hidden" />}


      <About />

      <Projects />

      <Contact />

    </>
  );
};

export default Main;
