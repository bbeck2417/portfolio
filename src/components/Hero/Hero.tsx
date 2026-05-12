'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import SocialButton from '../SocialButton/SocialButton';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { GithubIcon, EmailIcon, LinkedinIcon, FreeCodeCampIcon, ResumeIcon } from '../Icons';
import { sendGTMEvent } from '@next/third-parties/google';

interface HeroProps {
  onAction: (message: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onAction }) => {
  const trackClick = (name: string, id: string) => {
    sendGTMEvent({
      event: 'link_click',
      value: {
        event_category: 'engagement',
        event_label: name,
        link_id: id,
      },
    });
  };

  return (
    <section className={styles.hero}>
      <a href="#projects" aria-label="Skip to Projects Section">
        <div className={`${styles.neumorphicHeadshot} ${styles.topMargin}`}>
          <Image
            src="/images/headshot.jpg"
            alt="Billy Beck Headshot"
            width={180}
            height={180}
            className={styles.neumorphicCircle}
            priority
          />
        </div>
      </a>

      <div className={styles.headerSocialContainer}>
        <SocialButton
          href="https://github.com/bbeck2417"
          ariaLabel="Visit my GitHub Profile"
          id="github-visit"
          target="_blank"
          onClick={() => trackClick('GitHub (Header)', 'github-visit')}
        >
          <GithubIcon />
        </SocialButton>

        <SocialButton
          href="mailto:williambeckjr@protonmail.com"
          ariaLabel="Email Me to get in Touch"
          id="email-clicked"
          onClick={() => {
            trackClick('Email (Header)', 'email-clicked');
            onAction('Opening your email client...');
          }}
        >
          <EmailIcon />
        </SocialButton>

        <SocialButton
          href="https://www.linkedin.com/in/william-beck-2119a0380/"
          ariaLabel="Visit my linkedin Profile"
          id="linkedin-visit"
          target="_blank"
          onClick={() => trackClick('LinkedIn (Header)', 'linkedin-visit')}
        >
          <LinkedinIcon />
        </SocialButton>

        <SocialButton
          href="https://www.freecodecamp.org/bbeck2417"
          ariaLabel="Visit my FreeCodeCamp Profile"
          id="freecodecamp-visit"
          target="_blank"
          onClick={() => trackClick('FreeCodeCamp (Header)', 'freecodecamp-visit')}
        >
          <FreeCodeCampIcon />
        </SocialButton>

        <ThemeToggle />
      </div>

      <div className={styles.resumeSection}>
        <SocialButton
          href="resume.pdf"
          ariaLabel="Download My Resume"
          download="Resume-William-Beck"
          id="resume-download"
          onClick={() => {
            trackClick('Resume Download', 'resume-download');
            onAction('Success! Resume download started.');
          }}
        >
          <ResumeIcon />
        </SocialButton>
        <p className="montserrat-200">Download My Resume</p>
      </div>

      <a href="#projects">
        <header className={styles.header}>
          <h1>Welcome to Billy&apos;s Portfolio</h1>
        </header>
      </a>
    </section>
  );
};

export default Hero;
