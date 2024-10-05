import React, { useState, useContext } from "react";
import "../style/Fullmenu.css";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";

function Fullmenu() {
  const theme = useContext(ThemeContext);

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
