import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const sideNavVariants: Variants = {
    open: { x: 0, transition: { type: "spring", stiffness: 100 } },
    closed: { x: "100%", transition: { type: "spring", stiffness: 100 } },
  };

  const navItems = [
    { key: "/", label: "Home" },
    { key: "/About", label: "About" },
    { key: "/Resume", label: "Resume" },
    { key: "/ProjectCard1", label: "Projects" },
    { key: "/Contact", label: "Contact" },
  ];

  return (
    <div>
      {/* Hamburger Button */}
      <button onClick={() => setIsOpen(true)} style={styles.hamburgerButton}>
        <FaBars size={28} />
      </button>

      {/* Overlay */}
      {isOpen && <div style={styles.overlay} onClick={() => setIsOpen(false)} />}

      {/* Side Navigation */}
      <motion.div
        style={styles.sideNav}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sideNavVariants}
      >
        {/* Close Button */}
        <button style={styles.closeButton} onClick={() => setIsOpen(false)}>
          <FaTimes size={24} />
        </button>

        {/* Navigation Links */}
        <nav style={styles.navLinks}>
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.key}
              onClick={() => setIsOpen(false)} // close after click
              style={{
                ...styles.link,
                backgroundColor:
                  hovered === item.key ? "rgba(255, 255, 255, 0.2)" : "transparent",
              }}
              onMouseEnter={() => setHovered(item.key)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </div>
  );
};

export default SideNav;

// ================= CSS-in-TSX =================
const styles: { [key: string]: React.CSSProperties } = {
  hamburgerButton: {
    color: "white",
    position: "fixed",
    top: "1.5rem",
    right: "1rem",
    zIndex: 50,
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 40,
  },
  sideNav: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100%",
    width: "16rem",
    backgroundColor: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(5px)",
    boxShadow: "-2px 0 10px rgba(208, 202, 202, 0.38)",
    zIndex: 50,
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
  },
  closeButton: {
    alignSelf: "flex-end",
    color: "#FFFFFF",
    marginBottom: "1.5rem",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
  navLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    fontSize: "1rem",
    color: "#FFFFFF",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
    padding: "0.4rem 0.8rem",
    borderRadius: "0.5rem",
    transition: "all 0.2s ease",
  },
};

