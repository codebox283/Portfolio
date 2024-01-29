import React, { useEffect, useState, useRef } from "react";
import "./CursorChange.css";
import Cursor from "./Cursor";
// import lottie from 'lottie-web';

const CursorChange = () => {

  const [showCursor, setShowCursor] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [msgVisible, setMessageVisible] = useState(false);

  const handleButtonClick = () => {
    setShowCursor(true);
    setButtonVisible(false);
    setMessageVisible(true);
    document.body.style.cursor = "none";
  };

  // const container = useRef(null)

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container:container.current,
  //     renderer: SVGAElement,
  //     loop:true,
  //     autoplay:true,
  //     animationData: require('../Assets/confetti.json')
  //   })
  // })

  return (
    <div id="cursor-container">
      <h1 id="cursor-H">NKSHTR</h1>
      {buttonVisible && (
        <button id="cursor-btn" className='hidden' onClick={handleButtonClick}>
          Click Here
        </button>
      )}
      {msgVisible && (
        <h1 id="cursorH1">
          Here's your new cursor. Enjoy!
        </h1>
      )}
      {msgVisible && (
        <h1 id="cursorH2">
          Hey I'm Nakshatra. <br></br>
          Wanna know more.. Scroll Down!
        </h1>
      )}
      {/* <div className="container" ref={container}></div> */}
      {showCursor && <Cursor />}
    </div>
  );
};

export default CursorChange;