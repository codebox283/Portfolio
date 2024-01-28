import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import About from './About';
import CursorChange from './CursorChange';
import Logo from '../Assets/Logo.svg';
import MenuW from '../Assets/MenuW.svg';
import MenuB from '../Assets/MenuB.svg'
import './Main.css';

const Main = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const opacity = 1 - Math.min(scrollPosition / 500, 1);

  const MenuC = scrollPosition > 150 ? MenuW : MenuB;



    return (
        <>
            {/* <Loader /> */}

            <div className="main-container">
                <img className="logo" alt='' src={Logo} />
                <img className='menu' alt='' src={MenuW} style={{ MenuC: MenuC }}/>
                <div id="main-content"
        style={{ opacity: opacity }}>
                    <h1 id='heroh1'>Nakshatra  bandyopadhyay</h1>
                    <h2 id='heroh2'>Web Developer</h2>
                </div>
            </div>

            <CursorChange />

            <About />

        </>
    );
};

export default Main;
