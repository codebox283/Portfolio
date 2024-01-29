import React, { useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  useEffect(() => {
    // document.body.classList.add('loading');

    const timeout = setTimeout(() => {
      document.body.classList.add('loading');
    }, 2000);

    return () => {
      document.body.classList.remove('loading');
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loader">
        <span>N</span>
        <span>K</span>
        <span>S</span>
        <span>H</span>
        <span>T</span>
        <span>R</span>
      </div>
    </div>
  );
};

export default Loader;
