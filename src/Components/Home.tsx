import React, { useState } from "react";
import backgroundImage from "../assets/generated-image.png";
import SideNav from "./Navigation";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

// ===== Styles with correct TypeScript typing =====
const styles: { [key: string]: React.CSSProperties } = {
  home: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    color: "white",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  greeting: {
    position: "absolute",
    top: "2rem",
    left: "3rem",
    fontSize: "1.25rem",
    fontWeight: 600,
    zIndex: 20,
  },
  menuButton: {
    position: "absolute",
    top: "1.5rem",
    right: "2.5rem",
    zIndex: 30,
  },
  mainContent: {
    position: "relative",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100%",
    padding: "2rem 2rem 0 5%",
    maxWidth: "90%",
    marginTop: "4rem",
  },
  heading: {
    fontSize: "clamp(2rem, 5vw, 2.5rem)",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  paragraph: {
    fontSize: "1.125rem",
    lineHeight: 1.6,
    maxWidth: "36rem",
    textAlign: "left",
  },
  mainText: {
    fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
    color: "#32CD32",
  },
  subText: {
    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
    fontWeight: 400,
    marginTop: "1rem",
    display: "block",
  },
  subText1: {
    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
    fontWeight: 400,
    marginTop: "0rem",
    display: "block",
    // color: "#FFD700",
    color: "#0099CC",
  },
  socialBox: {
    position: "absolute",
    bottom: "5rem",
    left: "5%",
    display: "flex",
    gap: "1rem",
    padding: "0.5rem 1.5rem",
    backgroundColor: "transparent", // blank background
    boxShadow: "0 4px 10px rgba(158, 149, 149, 0.33)", // gray shadow
    borderRadius: "2rem",
    alignItems: "center",
    zIndex: 50,
    backdropFilter: "blur(4px)", // optional glassy effect
  },

  iconLink: {
    color: "white",
    fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
    transition: "all 0.2s ease",
    cursor: "pointer",
  },
  phoneTooltip: {
    position: "absolute",
    bottom: "2.5rem",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "0.3rem 0.8rem",
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "white",
    fontSize: "0.9rem",
    borderRadius: "0.5rem",
    whiteSpace: "nowrap",
  },
};

const Home: React.FC = () => {
  const [showPhone, setShowPhone] = useState(false);
  return (
    <div id="home" style={styles.home}>
      {/* Greeting */}
      <div style={styles.greeting}>Hey folks!</div>

      {/* Top-right nav button */}
      <div style={styles.menuButton}>
        <SideNav />
      </div>

      {/* Main content */}
      <div style={styles.mainContent}>
        <h1 style={styles.heading}>Hi, I'm Ritika Kalal</h1>

        {/* Split paragraph for different styles */}
        <p style={styles.paragraph}>
          <span style={styles.mainText}>A passionate Full-Stack Developer</span>
          <br />
          <span style={styles.subText}>
            creating Efficient, Scalable, User-Centric Applications <br />
          </span>
          <span style={styles.subText1}>
            Full stack Engineer | React Native & React JS | FastAPI | SQL |
            Postgres SQL
          </span>
        </p>

        {/* Social Box */}
        <div style={styles.socialBox}>
          {/* <a
            href="ritikagkalal12@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={styles.iconLink}
          >
            <FaEnvelope />
          </a> */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ritikagkalal12@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={styles.iconLink}
          >
            <FaEnvelope /> 
          </a>

          <a
            href="https://linkedin.com/in/ritika-kalal-2271081a5"
            target="_blank"
            rel="noreferrer"
            style={styles.iconLink}
          >
            <FaLinkedin />
          </a>
          {/* <a href="tel:+911234567890" style={styles.iconLink}>
            <FaPhone />
          </a> */}
          {/* Phone icon with tooltip */}
          <div style={{ position: "relative" }}>
            <FaPhone
              style={styles.iconLink}
              onClick={() => setShowPhone(!showPhone)}
            />
            {showPhone && <div style={styles.phoneTooltip}>+91 9380755742</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
