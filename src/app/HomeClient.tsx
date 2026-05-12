'use client';

import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import TriangleBackground from '../components/TriangleBackground/TriangleBackground';
import ProjectsList from '../components/Projects/ProjectsList';
import Footer from '../components/Footer/Footer';
import Toast from '../components/Toast/Toast';
import { useToast } from '../hooks/useToast';
import { Project } from '../lib/projects';

interface HomeClientProps {
  projects: Project[];
}

export default function HomeClient({ projects }: HomeClientProps) {
  const { toastMessage, showToast, triggerToast } = useToast();

  const handleAction = (message: string) => {
    triggerToast(message);
  };

  return (
    <main>
      <Hero onAction={handleAction} />
      <About />
      <TriangleBackground />
      <ProjectsList projects={projects} />
      <Footer onAction={handleAction} />
      <Toast message={toastMessage} isVisible={showToast} />
    </main>
  );
}
