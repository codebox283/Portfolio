import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Logo from '../Assets/Logo.svg';
import Menu from '../Assets/Menu.svg';
import './Main.css';

const Main = () => {


    return (
        <>
            <Loader />

            <div className="main-container">
                <img className="logo" src={Logo} />
                <img className='menu' src={Menu} />
                <div id="main-content">
                    <h1>Nakshatra  bandyopadhyay</h1>
                    <h2>Web Developer</h2>
                </div>
            </div>

        </>
    );
};

export default Main;
