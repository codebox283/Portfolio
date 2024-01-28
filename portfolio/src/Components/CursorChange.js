import React, { useEffect, useState, useRef } from "react";
import "./CursorChange.css";
import Cursor from "./Cursor";
// import lottie from 'lottie-web';

const CursorChange = () => {

  const [showCursor, setShowCursor] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleButtonClick = () => {
    setShowCursor(true);
    setButtonVisible(false);
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
      <h1 id="cursor-H">Mmm. Let's get you started</h1>
      {buttonVisible && (
        <button id="cursor-btn" onClick={handleButtonClick}>
          Click Here
        </button>
      )}
        {/* <div className="container" ref={container}></div> */}
      {showCursor && <Cursor />}
    </div>
  );
};

export default CursorChange;