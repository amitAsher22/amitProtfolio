import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "../style/Projects.css";
import projectImg from "../images/amit.png";
import food from "../images/food.png";
import nike from "../images/nike.png";
import trip from "../images/trip.png";
import pagination from "../images/pagination.png";
import protpolio from "../images/protpolio.png";
import ecommerce from "../images/ecommerce.png";
import drive from "../images/drive.png";
import Crypto from "../images/crypto.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Projects() {
  const [data, setData] = useState([
    {
      img: trip,
      title: "Trippy",
      linkGithub: "https://github.com/amitAsher22/trip_react",
      Livelink: "https://guileless-stardust-5ccb6b.netlify.app/",
    },
    {
      img: pagination,
      title: "Pagination",
      linkGithub: "https://github.com/amitAsher22/pagination_react",
      Livelink: "https://pagination-react-three.vercel.app/",
    },
    {
      img: protpolio,
      title: "protpolio",
      linkGithub: "https://github.com/amitAsher22/protpolio",
      Livelink: "https://protpolio.vercel.app/",
    },
    {
      img: ecommerce,
      title: "E-commerce",
      linkGithub:
        "https://github.com/amitAsher22/E-commerce_react?tab=readme-ov-file",
      Livelink: "https://e-commerce-react-aysy.vercel.app/",
    },
    {
      img: drive,
      title: "Find Your Drive",
      linkGithub: "https://github.com/amitAsher22/find_your_card_react",
      Livelink: "https://poetic-lollipop-816f9a.netlify.app/",
    },
    {
      img: Crypto,
      title: "Crypto",
      linkGithub:
        "https://github.com/amitAsher22/crypto_amit/blob/main/README.md",
      Livelink: "https://monumental-hummingbird-f43455.netlify.app/",
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
