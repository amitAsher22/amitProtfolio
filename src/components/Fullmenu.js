import React, { useContext } from "react";
import "../style/Fullmenu.css";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Fullmenu() {
  const theme = useContext(ThemeContext);

  useGSAP(() => {
    // gsap code here...
    gsap.from("#routLink", {
      duration: 1,
      opacity: 0,
      y: 150,
      x: 100,
      stagger: 0.1,
    }); // <-- automatically reverted
  });

  return (
    <div id="full" className={theme.present}>
      <Link id="routLink" onClick={theme.presentBtn} to="/">
        Home
      </Link>
      <Link id="routLink" onClick={theme.presentBtn} to="/about">
        About
      </Link>
      <Link id="routLink" onClick={theme.presentBtn} to="/projects">
        Projects
      </Link>
      <Link id="routLink" onClick={theme.presentBtn} to="/contact">
        Contact
      </Link>
    </div>
  );
}

export default Fullmenu;
