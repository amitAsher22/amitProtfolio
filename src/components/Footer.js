import React from "react";
import "../style/Footer.css";
import { IoLogoLinkedin } from "react-icons/io";
import { GrGithub } from "react-icons/gr";
import { GrWordpress } from "react-icons/gr";

function Footer() {
  return (
    <div className="mainFooter">
      <div className="divIconsFooter">
        <a href="https://github.com/amitAsher22" target="_blank">
          <GrGithub className="iconFooter" />
        </a>
        <a href="https://www.webbro.co.il/" target="_blank">
          <GrWordpress className="iconFooter" />
        </a>
      </div>
      <div>
        <span className="textFooter">AMIT ASHER 2025</span>
      </div>
    </div>
  );
}

export default Footer;
