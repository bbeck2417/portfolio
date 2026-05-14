import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Projects.module.css";
import SocialButton from "../SocialButton/SocialButton";
import { GithubIcon, GlobeIcon } from "../Icons";

interface ProjectCardProps {
  href: string;
  githubHref: string;
  title: string;
  imageSrc: string | StaticImageData;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  githubHref,
  title,
  imageSrc,
  description,
}) => {
  return (
    <div className={`${styles.projectCard} montserrat-200`}>
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
          priority={true}
        />
      </div>

      <div className={styles.projectContent}>
        <p>{description}</p>
      </div>

      {/* Action Links Container */}
      <div className={styles.cardActions}>
        {githubHref && (
          <SocialButton
            href={githubHref}
            ariaLabel={`View ${title} source code on GitHub`}
            target="_blank"
          >
            <GithubIcon />
          </SocialButton>
        )}

        {href && (
          <SocialButton
            href={href}
            ariaLabel={`View live preview of ${title}`}
            target="_blank"
          >
            <GlobeIcon />
          </SocialButton>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
