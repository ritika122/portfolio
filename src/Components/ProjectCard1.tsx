import React from "react";
import ProjectCard from "./ProjectCard";
import SideNav from "./Navigation";
import backgroundImage from "../assets/charger.jpg";
import evChargerImage from "../assets/evcharger.jpg";
import ispImageUrl from "../assets/safety.png";

const ProjectCard1: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    
    container: {
      position: "relative",
      minHeight: "120vh",
      backgroundColor: "#0a0a0a",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      overflowY: "auto",
      padding: "2rem 1rem",
      color: "#fff",
      boxSizing: "border-box",
    },
    heading: {
      fontSize: "3rem",
      textAlign: "center",
      marginBottom: "2rem",
      textShadow: "1px 1px 6px rgba(0,0,0,0.9)",
    },
    projectsWrapper: {
      maxWidth: 900,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
    menuButton: {
      position: "absolute",
      top: "1.5rem",
      right: "2.5rem",
      zIndex: 30,
    },
  };

  return (
    <div style={styles.container}>
      {/* Top-right nav button */}
      <div style={styles.menuButton}>
        <SideNav />
      </div>

      {/* Heading */}
      <h1 style={styles.heading}>Projects</h1>

      {/* Project Cards */}
      <div style={styles.projectsWrapper}>
        <ProjectCard
          title="EV Charging Management System"
          skills="React Native, Node.js, PostgreSQL, Redux, JWT, OCPP, Fast API"
          details={[
            "Developed a complete mobile solution for EV charger management",
            "Built real-time status dashboard directly on mobile app",
            "Designed intuitive UI with React Native",
            "Implemented OCPP protocol for charger communication and backend control",
          ]}
          imageUrl={evChargerImage}
          description=""
        />

        <ProjectCard
          title="I Safety Petrol"
          skills="React Native, Redux, Fast APIs, PostgreSQL, JWT"
          details={[
            "Implemented frontend-backend integration with real-time data synchronization",
            "Built hardware integration capabilities for monitoring devices",
            "Designed responsive UI components with Redux state management",
          ]}
          imageUrl={ispImageUrl}
          description=""
        />
      </div>
    </div>
  );
};

export default ProjectCard1;
