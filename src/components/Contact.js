import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import "../style/Contact.css";
import { PiPhoneCall } from "react-icons/pi";
import { GoLocation } from "react-icons/go";
import { MdOutlineAttachEmail } from "react-icons/md";

function Contact() {
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
            <span>0523157737</span>
          </div>
          <div className="phone">
            <GoLocation className="iconConatct" />
            <span>Herzliya , city</span>
          </div>
          <div className="phone">
            <MdOutlineAttachEmail className="iconConatct" />
            <span>AmitAsher4@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
