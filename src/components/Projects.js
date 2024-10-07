import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "../style/Projects.css";
import projectImg from "../images/amit.png";
import food from "../images/food.png";
import nike from "../images/nike.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
      title: "clock App",
      linkGithub: "sdsdsd",
      Livelink: "dsdsd",
    },
    {
      img: projectImg,
      title: "clock App",
      linkGithub: "sdsdsd",
      Livelink: "dsdsd",
    },
    {
      img: projectImg,
      title: "clock App",
      linkGithub: "sdsdsd",
      Livelink: "dsdsd",
    },
    {
      img: projectImg,
      title: "clock App",
      linkGithub: "sdsdsd",
      Livelink: "dsdsd",
    },
    {
      img: projectImg,
      title: "clock App",
      linkGithub: "sdsdsd",
      Livelink: "dsdsd",
    },
    {
      img: food,
      title: "Foodie",
      linkGithub: "https://github.com/amitAsher22/food_landingPage",
      Livelink: "https://food-landing-page-blue.vercel.app/",
    },
    {
      img: nike,
      title: "Nike",
      linkGithu: "https://github.com/amitAsher22/nike",
      Livelink: "https://nike-five-smoky.vercel.app/",
    },
    {
      img: projectImg,
      title: "Invoice App",
      linkGithub: "sdsdsd",
      Livelink: "dsdsd",
    },
  ]);

  useGSAP(() => {
    // gsap code here...
    gsap.from(".mainPageTitle", {
      duration: 1,
      opacity: 0,
      y: 100,
      stagger: 0.15,
    });
  });
  return (
    <div className="body">
      <div className="rightProject">
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
                <div className="divImage">
                  <img
                    className="imageProjects"
                    src={info.img}
                    alt={info.title}
                  />
                </div>
                <div className="DownCard">
                  <p>Vue.js • Vuex • Vuetify</p>
                  <p className="titleInfo">{info.title}</p>
                  <div className="iconsPDiv">
                    <button
                      onClick={() => window.open(info.Livelink, "_blank")}
                      className="btn"
                    >
                      Live
                    </button>
                    <button
                      onClick={() => window.open(info.linkGithub, "_blank")}
                      className="btn"
                    >
                      GitHub
                    </button>
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
