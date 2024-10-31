import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import "../style/Contact.css";
import { PiPhoneCall } from "react-icons/pi";
import { GoLocation } from "react-icons/go";
import { MdOutlineAttachEmail } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Contact() {
  useGSAP(() => {
    // gsap code here...
    gsap.from(".mainPageTitle", {
      duration: 1,
      opacity: 0,
      y: 100,
      stagger: 0.5,
    });
  });

  return (
    <div className="body">
      <div className="mainContact">
        <div className="routerAbout">
          <Link to="/">
            <span>Home </span>
          </Link>
          <MdKeyboardArrowRight />
          <span className="routerAboutText">Contact</span>
        </div>
        <div className="pageAbout">
          <span className="mainPageTitle">Contact</span>
        </div>

        <div className="infoContact">
          <div className="phone">
            <PiPhoneCall className="iconConatct" />
            <a href="tel:+972-523-157-737">
              <span>0523157737</span>
            </a>
          </div>
          <div className="phone">
            <GoLocation className="iconConatct" />
            <span>Herzliya , city</span>
          </div>
          <div className="phone">
            <MdOutlineAttachEmail className="iconConatct" />
            <a href="mailto:AmitAsher4@gmail.com" target="_blank">
              <span>AmitAsher4@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
