import React from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

interface ProjectCardProps {
  href: string;
  title: string;
  imageSrc: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  imageSrc,
  description,
}) => {
  // Grab the base path from the environment
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Combine basePath and imageSrc, handling potential double slashes
  const formattedImageSrc = `${basePath}${imageSrc.startsWith("/") ? "" : "/"}${imageSrc}`;

  return (
    <div className={`${styles.projectCard} montserrat-200`}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className={styles.projectTitle}>
          <h3>{title}</h3>
        </div>
        <div className={styles.projectImage}>
          <Image
            src={formattedImageSrc}
            alt={`${title} Screenshot`}
            width={400}
            height={250}
            className={styles.projectImageStyle}
          />
        </div>
        <div className={styles.projectContent}>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
