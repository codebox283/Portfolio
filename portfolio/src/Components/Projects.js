import React from 'react';
import { useState, useEffect } from 'react';
import img1 from '../Assets/img5.jpg';
import img2 from '../Assets/img6.jpg';
import img4 from '../Assets/img7.jpg';
import img3 from '../Assets/img8.jpg';
import './Projects.css';

const Projects = () => {

    return(
        <div id='Projects-Container'>
            <h1 id='projectsh1'>Projects</h1>
            <div id='projects'>
                <div className='img-cont' id='img-cont1'><img className='proj-img' id='img1' src={img1} alt=''></img><h2 className='proj-h'>Project1</h2></div>
                <div className='img-cont' id='img-cont2'><img className='proj-img' id='img2' src={img2} alt=''></img><h2 className='proj-h'>Project2</h2></div>
                <div className='img-cont' id='img-cont3'><img className='proj-img' id='img3' src={img3} alt=''></img><h2 className='proj-h'>Project3</h2></div>
                <div className='img-cont' id='img-cont4'><img className='proj-img' id='img4' src={img4} alt=''></img><h2 className='proj-h'>Project4</h2></div>
            </div>
        </div>
    );
};

export default Projects;