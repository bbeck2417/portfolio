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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.projectCard} montserrat-200`}
    >
      <div className={styles.projectTitle}>
        <h3>{title}</h3>
      </div>

      <div className={styles.projectImage}>
        <Image
          src={imageSrc}
          alt={`${title} Screenshot`}
          width={400}
          height={250}
          className={styles.projectImageStyle}
          priority={true} /* Optimizes loading speeds for top layout assets */
        />
      </div>

      <div className={styles.projectContent}>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
