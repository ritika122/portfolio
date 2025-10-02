import React from "react";
import SideNav from "./Navigation";
import { FaMapMarkerAlt, FaFlag } from "react-icons/fa";
import profileImage from "../assets/ritika.jpg"; // <-- your image here

const styles: { [key: string]: React.CSSProperties } = {
  about: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    width: "100vw",
    color: "white",
    backgroundColor: "#000000", // solid black background
    padding: "2rem",
    boxSizing: "border-box",
  },
  menuButton: {
    position: "absolute",
    top: "1.5rem",
    right: "2.5rem",
    zIndex: 30,
  },
  mainContent: {
    flex: 1,
    maxWidth: "55%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontSize: "clamp(2rem, 5vw, 2.5rem)",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  paragraph: {
    fontSize: "1.125rem",
    lineHeight: 1.6,
    textAlign: "left",
  },
  mainText: {
    fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
    color: "#32CD32",
  },
  subText: {
    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
    fontWeight: 400,
    display: "inline",
  },
  subText1: {
    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
    fontWeight: 400,
    display: "inline",
    color: "#0099CC",
  },
  locationBox: {
    marginTop: "2rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
  },
  pinIcon: {
    color: "red",
    fontSize: "1.2rem",
  },
  flagIcon: {
    fontSize: "1rem",
    marginLeft: "0.5rem",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "30%",
   
  },
  profileImage: {
    width: "100%",
    height: "auto",
    borderRadius: "0.5rem",
    objectFit: "cover",
    marginRight: "3.5rem", // <-- move image left
    marginTop:"3.5rem"
  },
};

const About: React.FC = () => {
  return (
    <div id="about" style={styles.about}>
      {/* Top-right nav button */}
      <div style={styles.menuButton}>
        <SideNav />
      </div>

      {/* Left side: Text content */}
      <div style={styles.mainContent}>
        <h1 style={styles.heading}>About Me</h1>
        <p style={styles.paragraph}>
          I'm a <span style={styles.mainText}>results-driven Full-Stack Developer</span>{" "}
          <span style={styles.subText}>
            with 2+ years of hands-on experience building scalable web applications and mobile
            solutions. I focus on clean code architecture and practical functionality more than
            flashy design. Proven expertise in the
          </span>{" "}
          <span style={styles.subText1}>React ecosystem, Node.js backend development,</span>{" "}
          <span style={styles.subText}>
            and database design. Skilled in delivering user-centric features from conception to
            production, with strong focus on collaborative development. Passionate about
            product-first thinking and continuous learning in fast-paced environments. I work
            with
          </span>{" "}
          <span style={styles.subText1}>
            React.js, React Native, Fast Api,Node js, PostgreSQL, and MySQL
          </span>{" "}
          <span style={styles.subText}>to build full-stack apps.</span>
        </p>

        {/* Location with pin icon */}
        <div style={styles.locationBox}>
          <FaMapMarkerAlt style={styles.pinIcon} />
          <span>Gokak, Belagavi, Karnataka</span>
          <FaFlag style={styles.flagIcon} />
          <span>India</span>
        </div>
      </div>

      {/* Right side: Image */}
      <div style={styles.imageContainer}>
        <img src={profileImage} alt="Ritika Kalal" style={styles.profileImage} />
      </div>
    </div>
  );
};

export default About;
