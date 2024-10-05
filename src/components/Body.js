import React from "react";
import "../style/App.css";
// import Fullmenu from "../components/Fullmenu";
import "../style/Body.css";
// import { ThemeContext } from "../App";
import { Typewriter } from "react-simple-typewriter";

function Body() {
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
