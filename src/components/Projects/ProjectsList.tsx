import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import { Project } from '@/lib/projects';

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2>Projects</h2>
      <div className={styles.projectCardContainer}>
        {projects.map((project) => (
          <ProjectCard 
            key={project.slug} 
            title={project.title}
            href={project.href}
            imageSrc={project.imageSrc}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
