import React from "react";

interface ProjectCardProps {
  title: string;
  skills: string;
  description: string;
  details: string[];
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  skills,
  description,
  details,
  imageUrl,
}) => (
  <>
    <style>
      {`
        .project-card {
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          background: #18181b;
          color: #fff;
          overflow: hidden;
          box-shadow: 0 6px 24px rgba(0,0,0,0.10);
          margin: 3rem auto;
          max-width: 1000px; /* Increased from 800px to 1000px */
          width: 100%;
        }
        .project-card__image-container {
          width: 100%;
          height: 320px; /* Increased from 260px to 320px for larger image area */
          background: #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .project-card__image {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .project-card__content {
          padding: 2rem;
          background: linear-gradient(to bottom, #18181b 80%, #232323 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .project-card__title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: .5rem;
        }
        .project-card__skills {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        .bold {
          font-weight: bold;
        }
        .project-card__details {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
          font-size: 1rem;
          list-style-type: disc;
        }
        .project-card__description {
          color: #cfcfcf;
          margin-top: 1rem;
          font-size: .95rem;
        }
        @media (min-width: 768px) {
          .project-card {
            flex-direction: row;
            height: 400px; /* Increased from 340px to 400px */
          }
          .project-card__image-container {
            flex: 1;
            height: 100%;
            max-width: 450px; /* Increased from 360px to 450px */
          }
          .project-card__content {
            flex: 2;
            padding: 2.5rem;
          }
        }
      `}
    </style>
    <div className="project-card">
      <div className="project-card__image-container">
        <img
          src={imageUrl}
          alt={`${title} visual`}
          className="project-card__image"
        />
      </div>
      <div className="project-card__content">
        <h2 className="project-card__title">{title}</h2>
        <p className="project-card__skills">
          <span className="bold">Skills Used:</span> {skills}
        </p>
        <ul className="project-card__details">
          {details.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <p className="project-card__description">{description}</p>
      </div>
    </div>
  </>
);

export default ProjectCard;