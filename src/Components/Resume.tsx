// import React, { useState } from "react";
// import backgroundImage from "../assets/background.jpg";
// import SideNav from "./Navigation";

// // Styles
// const styles: { [key: string]: React.CSSProperties } = {
//   resume: {
//     position: "relative",
//     minHeight: "100vh",
//     width: "100vw",
//     color: "white",
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     padding: "4rem 2rem 2rem 5%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start",
//   },
//   sectionHeading: {
//     fontSize: "clamp(1.5rem, 4vw, 2rem)",
//     fontWeight: "bold",
//     marginTop: "2rem",
//     marginBottom: "0.5rem",
//     textTransform: "uppercase",
//   },
//   sectionLine: {
//     height: "1px",
//     backgroundColor: "#444",
//     width: "100%",
//     maxWidth: "36rem",
//     marginBottom: "1rem",
//   },
//   skillItem: {
//     marginBottom: "1rem",
//     width: "100%",
//     maxWidth: "36rem",
//   },
//   skillLabel: {
//     fontSize: "1rem",
//     marginBottom: "0.25rem",
//   },
//   progressBar: {
//     height: "0.5rem",
//     backgroundColor: "#333",
//     borderRadius: "1rem",
//     overflow: "hidden",
//   },
//   progressFill: {
//     height: "100%",
//     backgroundColor: "#00BFFF",
//     borderRadius: "1rem",
//   },
//   personalSkills: {
//     fontSize: "1rem",
//     marginTop: "0.5rem",
//   },
//   timeline: {
//     position: "relative",
//     paddingLeft: "2rem",
//     marginTop: "1rem",
//   },
//   timelineLine: {
//     position: "absolute",
//     left: "-2.05rem",
//     top: "0.5rem",
//     bottom: "0",
//     width: "2px",
//     backgroundColor: "#00BFFF",
//   },
//   timelineItem: {
//     position: "relative",
//     marginBottom: "1.5rem",
//   },
//   timelineDot: {
//     position: "absolute",
//     left: "-2.3rem",
//     top: "0.2rem",
//     width: "1rem",
//     height: "1rem",
//     borderRadius: "50%",
//     backgroundColor: "#00BFFF",
//   },
//   timelineYear: {
//     fontSize: "1rem",
//     fontWeight: "bold",
//   },
//   timelineTitle: {
//     fontSize: "1rem",
//     marginTop: "0.25rem",
//   },
//   timelineDesc: {
//     fontSize: "0.9rem",
//     color: "#ccc",
//   },
//   bulletList: {
//     listStyleType: "disc",
//     paddingLeft: "1.5rem",
//     marginTop: "0.5rem",
//   },
//   bulletItem: {
//     fontSize: "1rem",
//     marginBottom: "0.5rem",
//   },
//   // Modal styles
//   modalOverlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100vw",
//     height: "50vh",
//     // backgroundColor: "rgba(0,0,0,0.7)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 1000,
//   },
//   modalContent: {
//     background: "#111",
//     padding: "20px",
//     borderRadius: "10px",
//     maxWidth: "80%",
//     maxHeight: "80%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   iframe: {
//     width: "100%",
//     height: "70vh",
//     border: "none",
//   },
//   closeButton: {
//     marginTop: "10px",
//     padding: "10px 15px",
//     background: "#3d3e3eff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     color: "#fff",
//     fontWeight: "bold",
//     alignSelf: "center",
//   },
//   viewButton: {
//     marginLeft: "10px",
//     padding: "4px 10px",
//     background: "#444",
//     border: "1px solid #666",
//     borderRadius: "6px",
//     cursor: "pointer",
//     color: "#fff",
//     fontSize: "0.9rem",
//   },
// };

// // Media queries
// const mediaStyles = `
//   @media (max-width: 768px) {
//     #resume {
//       padding: 2rem 1rem;
//       background-size: cover;
//     }
//     .sectionHeading {
//       font-size: 1.5rem;
//     }
//     .skillItem, .sectionLine {
//       max-width: 100%;
//     }
//   }
// `;
// const styleSheet = document.createElement("style");
// styleSheet.textContent = mediaStyles;
// document.head.appendChild(styleSheet);

// const Resume: React.FC = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [pdfFile, setPdfFile] = useState<string>("");

//   const openModal = (pdfPath: string) => {
//     setPdfFile(pdfPath);
//     setShowModal(true);
//   };

//   return (
//     <div id="resume" style={styles.resume}>
//       <SideNav />

//       {/* Technical Skills */}
//       <h2 style={styles.sectionHeading}>Technical Skills</h2>
//       <div style={styles.sectionLine}></div>
//       {[
//         { label: "JavaScript (ES6+)", width: "90%" },
//         { label: "React.js / React Native", width: "85%" },
//         { label: "Node.js (Express)", width: "80%" },
//         { label: "Python (FastAPI, Flask)", width: "75%" },
//         { label: "MongoDB / MySQL / PostgreSQL", width: "80%" },
//       ].map((skill) => (
//         <div key={skill.label} style={styles.skillItem}>
//           <div style={styles.skillLabel}>{skill.label}</div>
//           <div style={styles.progressBar}>
//             <div style={{ ...styles.progressFill, width: skill.width }} />
//           </div>
//         </div>
//       ))}

//       {/* Languages */}
//       <h2 style={styles.sectionHeading}>Languages</h2>
//       <div style={styles.sectionLine}></div>
//       {[
//         { label: "English", width: "85%" },
//         { label: "Hindi", width: "95%" },
//         { label: "Kannada", width: "95%" },
//       ].map((lang) => (
//         <div key={lang.label} style={styles.skillItem}>
//           <div style={styles.skillLabel}>{lang.label}</div>
//           <div style={styles.progressBar}>
//             <div style={{ ...styles.progressFill, width: lang.width }} />
//           </div>
//         </div>
//       ))}

//       {/* Personal Skills */}
//       <h2 style={styles.sectionHeading}>Personal Skills</h2>
//       <div style={styles.sectionLine}></div>
//       <div style={styles.personalSkills}>
//         Clean Code Architecture - Collaborative Development - Product-First Thinking - Continuous Learning
//       </div>

//       {/* Experience */}
//       <h2 style={styles.sectionHeading}>Experience</h2>
//       <div style={styles.sectionLine}></div>
//       <div style={styles.timeline}>
//         <div style={styles.timelineItem}>
//           <div style={styles.timelineDot}></div>
//           <div style={styles.timelineYear}>2023 - Present</div>
//           <div style={styles.timelineTitle}>Pi Square Technologies Pvt Ltd</div>
//           <div style={styles.timelineDesc}>Full Stack Engineer</div>
//         </div>
//       </div>

//       {/* Education */}
//       <h2 style={styles.sectionHeading}>Education</h2>
//       <div style={styles.sectionLine}></div>
//       <div style={styles.timeline}>
//         <div style={styles.timelineItem}>
//           <div style={styles.timelineDot}></div>
//           <div style={styles.timelineYear}>2018 - 2022</div>
//           <div style={styles.timelineTitle}>
//             Angadi Institute of Technology and Management, Belgaum, Karnataka
//           </div>
//           <div style={styles.timelineDesc}>
//             Bachelor of Engineering (B.E.) - Computer Science & Engineering
//           </div>
//         </div>
//       </div>

//       {/* What Can I Do */}
//       <h2 style={styles.sectionHeading}>What Can I Do?</h2>
//       <div style={styles.sectionLine}></div>
//       <ul style={styles.bulletList}>
//         <li style={styles.bulletItem}>Full-Stack Web and Mobile Development</li>
//         <li style={styles.bulletItem}>FAST API / Integration</li>
//         <li style={styles.bulletItem}>Database Schema Design & Optimization (MongoDB, MySQL, PostgreSQL)</li>
//         <li style={styles.bulletItem}>Deployment on Cloud Platforms</li>
//         <li style={styles.bulletItem}>Real-time Data Synchronization & Hardware Integration</li>
//       </ul>

//       {/* Design Skills */}
//       <h2 style={styles.sectionHeading}>Design Skills</h2>
//       <div style={styles.sectionLine}></div>
//       <ul style={styles.bulletList}>
//         <li style={styles.bulletItem}>Frontend: React.js, React Native, HTML5, CSS3 (Flexbox/Grid), TypeScript</li>
//         <li style={styles.bulletItem}>UI/UX: Responsive Design, Component Libraries, Accessibility Standards</li>
//       </ul>

//       {/* Certifications with Modal */}
//       <h2 style={styles.sectionHeading}>Certifications</h2>
//       <div style={styles.sectionLine}></div>
//       <ul style={styles.bulletList}>
//         <li style={styles.bulletItem}>
//           Full Stack Development - J Spiders (2022)
//           <button style={styles.viewButton} onClick={() => openModal("/Certificate1.pdf")}>
//             View
//           </button>
//         </li>
//         <li style={styles.bulletItem}>
//           AI Tools Workshop - BE10X
//           <button style={styles.viewButton} onClick={() => openModal("/Certificate.pdf")}>
//             View
//           </button>
//         </li>
//       </ul>

//       {showModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalContent}>
//             <iframe src={pdfFile} title="Certificate Viewer" style={styles.iframe} />
//             <button style={styles.closeButton} onClick={() => setShowModal(false)}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Resume;


import React, { useState } from "react";
import backgroundImage from "../assets/background.jpg";
import SideNav from "./Navigation";

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  resume: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    color: "white",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "4rem 2rem 2rem 5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    overflowX: "hidden", // Prevent horizontal overflow
    boxSizing: "border-box", // Ensure padding doesn't add to width
  },
  sideNav: {
    position: "absolute",
    top: "1.5rem",
    left: "1rem",
    zIndex: 30,
    maxWidth: "calc(100% - 2rem)", // Constrain width to fit within screen
    overflow: "hidden", // Prevent internal overflow
  },
  sectionHeading: {
    fontSize: "clamp(1.5rem, 4vw, 2rem)",
    fontWeight: "bold",
    marginTop: "2rem",
    marginBottom: "0.5rem",
    textTransform: "uppercase",
  },
  sectionLine: {
    height: "1px",
    backgroundColor: "#444",
    width: "100%",
    maxWidth: "36rem",
    marginBottom: "1rem",
  },
  skillItem: {
    marginBottom: "1rem",
    width: "100%",
    maxWidth: "36rem",
  },
  skillLabel: {
    fontSize: "1rem",
    marginBottom: "0.25rem",
  },
  progressBar: {
    height: "0.5rem",
    backgroundColor: "#333",
    borderRadius: "1rem",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#00BFFF",
    borderRadius: "1rem",
  },
  personalSkills: {
    fontSize: "1rem",
    marginTop: "0.5rem",
  },
  timeline: {
    position: "relative",
    paddingLeft: "2rem",
    marginTop: "1rem",
  },
  timelineLine: {
    position: "absolute",
    left: "-2.05rem",
    top: "0.5rem",
    bottom: "0",
    width: "2px",
    backgroundColor: "#00BFFF",
  },
  timelineItem: {
    position: "relative",
    marginBottom: "1.5rem",
  },
  timelineDot: {
    position: "absolute",
    left: "-2.3rem",
    top: "0.2rem",
    width: "1rem",
    height: "1rem",
    borderRadius: "50%",
    backgroundColor: "#00BFFF",
  },
  timelineYear: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  timelineTitle: {
    fontSize: "1rem",
    marginTop: "0.25rem",
  },
  timelineDesc: {
    fontSize: "0.9rem",
    color: "#ccc",
  },
  bulletList: {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
    marginTop: "0.5rem",
  },
  bulletItem: {
    fontSize: "1rem",
    marginBottom: "0.5rem",
  },
  // Modal styles
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "50vh",
    // backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    background: "#111",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "80%",
    maxHeight: "80%",
    display: "flex",
    flexDirection: "column",
  },
  iframe: {
    width: "100%",
    height: "70vh",
    border: "none",
  },
  closeButton: {
    marginTop: "10px",
    padding: "10px 15px",
    background: "#3d3e3eff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  viewButton: {
    marginLeft: "10px",
    padding: "4px 10px",
    background: "#444",
    border: "1px solid #666",
    borderRadius: "6px",
    cursor: "pointer",
    color: "#fff",
    fontSize: "0.9rem",
  },
};

// Media queries
const mediaStyles = `
  @media (max-width: 768px) {
    #resume {
      padding: 2rem 1rem 2rem 5%;
    }
    .sideNav {
      top: 1rem;
      left: 0.5rem;
      maxWidth: "calc(100% - 1rem)"; // Adjusted for tablets
    }
    .sectionHeading {
      font-size: 1.5rem;
    }
    .skillItem, .sectionLine {
      max-width: 100%;
    }
  }
  @media (max-width: 480px) {
    #resume {
      padding: 1.5rem 0.5rem 2rem 5%;
    }
    .sideNav {
      top: 0.5rem;
      left: 0.25rem;
      maxWidth: "calc(100% - 0.5rem)"; // Adjusted for phones
    }
    .sectionHeading {
      font-size: 1.2rem;
    }
    .skillItem, .sectionLine {
      max-width: 100%;
    }
  }
`;
const styleSheet = document.createElement("style");
styleSheet.textContent = mediaStyles;
document.head.appendChild(styleSheet);

const Resume: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [pdfFile, setPdfFile] = useState<string>("");

  const openModal = (pdfPath: string) => {
    setPdfFile(pdfPath);
    setShowModal(true);
  };

  return (
    <div id="resume" style={styles.resume}>
      <div style={styles.sideNav}>
        <SideNav />
      </div>

      {/* Technical Skills */}
      <h2 style={styles.sectionHeading}>Technical Skills</h2>
      <div style={styles.sectionLine}></div>
      {[
        { label: "JavaScript (ES6+)", width: "90%" },
        { label: "React.js / React Native", width: "85%" },
        { label: "Node.js (Express)", width: "80%" },
        { label: "Python (FastAPI, Flask)", width: "75%" },
        { label: "MongoDB / MySQL / PostgreSQL", width: "80%" },
      ].map((skill) => (
        <div key={skill.label} style={styles.skillItem}>
          <div style={styles.skillLabel}>{skill.label}</div>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: skill.width }} />
          </div>
        </div>
      ))}

      {/* Languages */}
      <h2 style={styles.sectionHeading}>Languages</h2>
      <div style={styles.sectionLine}></div>
      {[
        { label: "English", width: "85%" },
        { label: "Hindi", width: "95%" },
        { label: "Kannada", width: "95%" },
      ].map((lang) => (
        <div key={lang.label} style={styles.skillItem}>
          <div style={styles.skillLabel}>{lang.label}</div>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: lang.width }} />
          </div>
        </div>
      ))}

      {/* Personal Skills */}
      <h2 style={styles.sectionHeading}>Personal Skills</h2>
      <div style={styles.sectionLine}></div>
      <div style={styles.personalSkills}>
        Clean Code Architecture - Collaborative Development - Product-First Thinking - Continuous Learning
      </div>

      {/* Experience */}
      <h2 style={styles.sectionHeading}>Experience</h2>
      <div style={styles.sectionLine}></div>
      <div style={styles.timeline}>
        <div style={styles.timelineItem}>
          <div style={styles.timelineDot}></div>
          <div style={styles.timelineYear}>2023 - Present</div>
          <div style={styles.timelineTitle}>Pi Square Technologies Pvt Ltd</div>
          <div style={styles.timelineDesc}>Full Stack Engineer</div>
        </div>
      </div>

      {/* Education */}
      <h2 style={styles.sectionHeading}>Education</h2>
      <div style={styles.sectionLine}></div>
      <div style={styles.timeline}>
        <div style={styles.timelineItem}>
          <div style={styles.timelineDot}></div>
          <div style={styles.timelineYear}>2018 - 2022</div>
          <div style={styles.timelineTitle}>
            Angadi Institute of Technology and Management, Belgaum, Karnataka
          </div>
          <div style={styles.timelineDesc}>
            Bachelor of Engineering (B.E.) - Computer Science & Engineering
          </div>
        </div>
      </div>

      {/* What Can I Do */}
      <h2 style={styles.sectionHeading}>What Can I Do?</h2>
      <div style={styles.sectionLine}></div>
      <ul style={styles.bulletList}>
        <li style={styles.bulletItem}>Full-Stack Web and Mobile Development</li>
        <li style={styles.bulletItem}>FAST API / Integration</li>
        <li style={styles.bulletItem}>Database Schema Design & Optimization (MongoDB, MySQL, PostgreSQL)</li>
        <li style={styles.bulletItem}>Deployment on Cloud Platforms</li>
        <li style={styles.bulletItem}>Real-time Data Synchronization & Hardware Integration</li>
      </ul>

      {/* Design Skills */}
      <h2 style={styles.sectionHeading}>Design Skills</h2>
      <div style={styles.sectionLine}></div>
      <ul style={styles.bulletList}>
        <li style={styles.bulletItem}>Frontend: React.js, React Native, HTML5, CSS3 (Flexbox/Grid), TypeScript</li>
        <li style={styles.bulletItem}>UI/UX: Responsive Design, Component Libraries, Accessibility Standards</li>
      </ul>

      {/* Certifications with Modal */}
      <h2 style={styles.sectionHeading}>Certifications</h2>
      <div style={styles.sectionLine}></div>
      <ul style={styles.bulletList}>
        <li style={styles.bulletItem}>
          Full Stack Development - J Spiders (2022)
          <button style={styles.viewButton} onClick={() => openModal("/Certificate1.pdf")}>
            View
          </button>
        </li>
        <li style={styles.bulletItem}>
          AI Tools Workshop - BE10X
          <button style={styles.viewButton} onClick={() => openModal("/Certificate.pdf")}>
            View
          </button>
        </li>
      </ul>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <iframe src={pdfFile} title="Certificate Viewer" style={styles.iframe} />
            <button style={styles.closeButton} onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;