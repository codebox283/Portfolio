import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import "./Contact.css";

const Contact = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    // const [currentUTCTime, setCurrentUTCTime] = useState(new Date());

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentUTCTime(new Date());
    //     }, 1000);

    //     return () => clearInterval(intervalId);
    // }, []);

    // const formattedUTCTime = currentUTCTime.toISOString();


    return (
        <div id="Contact-container">
            <h1 id="Contact-banner" className='hidden'>Get in touch</h1>
            <div id="Contact-links" className='hidden'>
                <ul className="Links">
                    <li>Navigation</li>
                    <div className="Line"></div>
                    <li><ScrollLink to="main-container" smooth={true} duration={500}>Home</ScrollLink></li>
                    <li><ScrollLink to="cursor-container" smooth={true} duration={500}>Cursor</ScrollLink></li>
                    <li><ScrollLink to="about-container" smooth={true} duration={500}>About</ScrollLink></li>
                    <li><ScrollLink to="Projects-Container" smooth={true} duration={500}>Project</ScrollLink></li>
                    <li><ScrollLink to="Contact-container" smooth={true} duration={500}>Contact</ScrollLink></li>
                </ul>
                <ul className="Links">
                    <li>Socials</li>
                    <div className="Line"></div>
                    <li><a href="https://www.linkedin.com/in/nakshatra-bandyopadhyay/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://www.github.com/codebox283" target="_blank">GitHub</a></li>
                    <li><a href="https://twitter.com/" target="_blank">Twitter</a></li>
                    <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                    <li><a href="https://drive.google.com/file/d/1G6oA7BwMMNlLJhs9ew-zyjOjhpQ-6s5T/view?usp=sharing" target="_blank">Resume</a></li>
                </ul>
                <ul></ul>
            </div>
            <div id="Footer" className='hidden'>
                <div id="Copyright">&copy;2024<br></br>NKSHTR</div>
                <div id="Time"><h1>Local Time</h1><div>{formattedTime}</div></div>
                <div id="Top"><ScrollLink to="main-container" smooth={true} duration={500}>Top</ScrollLink></div>
            </div>
        </div>
    );
};

export default Contact;