import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Projects.module.css";

interface ProjectCardProps {
  href: string;
  title: string;
  imageSrc: string | StaticImageData;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  imageSrc,
  description,
}) => {
  return (
    <div className={`${styles.projectCard} montserrat-200`}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className={styles.projectTitle}>
          <h3>{title}</h3>
        </div>
        <div className={styles.projectImage}>
          {/* Next.js automatically applies the basePath to statically imported images */}
          <Image
            src={imageSrc}
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
