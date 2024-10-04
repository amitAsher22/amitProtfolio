import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "../style/Projects.css";
import projectImg from "../images/amit.png";

function Projects() {
  const [data, setData] = useState([
    {
      img: projectImg,
      title: "clock App",
      linkGithub: "sdsdsd",
      Livelink: "dsdsd",
    },
    {
      img: projectImg,
      title: "Audiophile",
      linkGithub: "sdsdsd",
      Livelink: "dsdsd",
    },
    {
      img: projectImg,
      title: "clock App",
      linkGithu: "sdsdsd",
      Livelink: "dsdsd",
    },
    {
      img: projectImg,
      title: "Invoice App",
      linkGithub: "sdsdsd",
      Livelink: "dsdsd",
    },
  ]);
  return (
    <div className="body">
      <div className="rightAbout">
        <div className="routerAbout">
          <Link to="/">
            <span>Home </span>
          </Link>
          <MdKeyboardArrowRight />
          <span className="routerAboutText">Projects</span>
        </div>
        <div className="pageAbout">
          <span className="mainPageTitle">Projects</span>
        </div>
        <div className="cards">
          {data.map((info, index) => {
            return (
              <div index={index} className="card">
                <div>
                  <img className="imageProjects" src={info.img} />
                </div>
                <div className="DownCard">
                  <p>thecnoligoc icon</p>
                  <p>{info.title}</p>
                  <div className="iconsPDiv">
                    <button className="btn">Live</button>
                    <button className="btn">GitHub</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
