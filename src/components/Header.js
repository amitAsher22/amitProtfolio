import React, { useState, useEffect, useContext } from "react";
import "../style/Header.css";
import { ThemeContext } from "../App";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import imgProfile from "../images/amit.png";
import { Link } from "react-router-dom";

function Header() {
  const [bgTheme, setBgTheme] = useState("light");
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = bgTheme;
  }, [bgTheme]);

  const switchTheme = () => {
    if (bgTheme === "light") {
      setBgTheme("dark");
      theme.setLightDark(!theme.lightDark);
    } else {
      setBgTheme("light");
      theme.setLightDark(!theme.lightDark);
    }
  };

  return (
    <div className="mainHeader">
      <div className="DivImg">
        <Link to="/">
          <img className="imgprofileA" src={imgProfile} alt="imgprofileA" />
        </Link>
      </div>
      <div className="leftHeader">
        {theme.lightDark ? (
          <BsMoonStarsFill className="iconMoon" onClick={switchTheme} />
        ) : (
          <IoSunnyOutline className="iconSun" onClick={switchTheme} />
        )}

        {theme.showHide ? (
          <AiOutlineMenu className="iconCloseOpen" onClick={theme.presentBtn} />
        ) : (
          <IoCloseOutline
            className="iconCloseOpen"
            onClick={theme.presentBtn}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
