import React from "react";
import SideNav from "./Navigation";
import { FaMapMarkerAlt, FaFlag } from "react-icons/fa";
import profileImage from "../assets/ritika.jpg";

const About: React.FC = () => {
  return (
    <>
      <div id="about" className="about-container">
        {/* Top-right nav button */}
        <div className="menuButton">
          <SideNav />
        </div>

        {/* Left side: Text content */}
        <div className="mainContent">
          <h1 className="heading">About Me</h1>
          <p className="paragraph">
            I'm a{" "}
            <span className="mainText">results-driven Full-Stack Developer</span>{" "}
            <span className="subText">
              with 2+ years of hands-on experience building scalable web
              applications and mobile solutions. I focus on clean code architecture
              and practical functionality more than flashy design. Proven expertise
              in the
            </span>{" "}
            <span className="subText1">
              React ecosystem, Node.js backend development,
            </span>{" "}
            <span className="subText">
              and database design. Skilled in delivering user-centric features from
              conception to production, with strong focus on collaborative
              development. Passionate about product-first thinking and continuous
              learning in fast-paced environments. I work with
            </span>{" "}
            <span className="subText1">
              React.js, React Native, Fast Api, Node js, PostgreSQL, and MySQL
            </span>{" "}
            <span className="subText">to build full-stack apps.</span>
          </p>

          {/* Location */}
          <div className="locationBox">
            <FaMapMarkerAlt className="pinIcon" />
            <span>Gokak, Belagavi, Karnataka</span>
            <FaFlag className="flagIcon" />
            <span>India</span>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="imageContainer">
          <img src={profileImage} alt="Ritika Kalal" className="profileImage" />
        </div>
      </div>

      {/* ✅ CSS inside the same file */}
      <style>
        {`
          .about-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            height: 100vh;
            width: 100vw;
            color: white;
            background-color: #000000;
            padding: 2rem;
            box-sizing: border-box;
          }

          .menuButton {
            position: absolute;
            top: 1.5rem;
            right: 2.5rem;
            z-index: 30;
          }

          .mainContent {
            flex: 1;
            max-width: 55%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .heading {
            font-size: clamp(2rem, 5vw, 2.5rem);
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .paragraph {
            font-size: 1.125rem;
            line-height: 1.6;
            text-align: left;
          }

          .mainText {
            font-size: clamp(1.1rem, 3vw, 1.3rem);
            color: #32cd32;
          }

          .subText,
          .subText1 {
            font-size: clamp(0.9rem, 2.5vw, 1rem);
            font-weight: 400;
            display: inline;
          }

          .subText1 {
            color: #0099cc;
          }

          .locationBox {
            margin-top: 2rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: clamp(0.9rem, 2.5vw, 1rem);
          }

          .pinIcon {
            color: red;
            font-size: 1.2rem;
          }

          .flagIcon {
            font-size: 1rem;
            margin-left: 0.5rem;
          }

          .imageContainer {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 30%;
          }

          .profileImage {
            width: 100%;
            height: auto;
            border-radius: 0.5rem;
            object-fit: cover;
            margin-right: 3.5rem;
            margin-top: 3.5rem;
          }

          /* ✅ Responsive for mobile */
          @media (max-width: 768px) {
            .about-container {
              flex-direction: column;
              text-align: center;
              height: auto;
            }

            .mainContent {
              max-width: 100%;
              margin-bottom: 2rem;
            }

            .imageContainer {
              max-width: 80%;
              margin: 0 auto;
            }

            .profileImage {
              margin: 0;
              width: 100%;
              max-width: 300px;
            }
          }
        `}
      </style>
    </>
  );
};

export default About;
