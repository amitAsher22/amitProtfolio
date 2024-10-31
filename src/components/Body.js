import React from "react";
import "../style/App.css";
import "../style/Body.css";
import { Typewriter } from "react-simple-typewriter";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Body() {
  useGSAP(() => {
    // gsap code here...
    gsap.from(".titleHome", { duration: 1, opacity: 0, y: 100, stagger: 0.5 });
  });

  return (
    <div className="body">
      <div className="containerBody">
        <h1 className="titleHome">Amit</h1>
        <span className="typingword">
          <Typewriter
            words={["Frontend, Backend Developer"]}
            loop={2}
            typeSpeed={70}
            fontSize={30}
          />
        </span>
      </div>
      {/* <Fullmenu /> */}
    </div>
  );
}

export default Body;

//  {theme.showHide ?
