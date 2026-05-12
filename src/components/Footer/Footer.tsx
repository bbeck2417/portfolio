'use client';

import React from 'react';
import styles from './Footer.module.css';
import SocialButton from '../SocialButton/SocialButton';
import { GithubIcon, EmailIcon, LinkedinIcon, FreeCodeCampIcon } from '../Icons';
import { sendGTMEvent } from '@next/third-parties/google';

interface FooterProps {
  onAction: (message: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onAction }) => {
  const currentYear = new Date().getFullYear();

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
    <footer className={styles.footer}>
      <div className={styles.socialContainer}>
        <SocialButton
          href="https://github.com/bbeck2417"
          ariaLabel="Visit my GitHub Profile"
          id="github-visit-footer"
          target="_blank"
          onClick={() => trackClick('GitHub (Footer)', 'github-visit-footer')}
        >
          <GithubIcon />
        </SocialButton>

        <SocialButton
          href="mailto:williambeckjr@protonmail.com"
          ariaLabel="Email Me to get in Touch"
          id="email-clicked-footer"
          onClick={() => {
            trackClick('Email (Footer)', 'email-clicked-footer');
            onAction('Opening your email client...');
          }}
        >
          <EmailIcon />
        </SocialButton>

        <SocialButton
          href="https://www.linkedin.com/in/william-beck-2119a0380/"
          ariaLabel="Visit my linkedin Profile"
          id="linkedin-visit-footer"
          target="_blank"
          onClick={() => trackClick('LinkedIn (Footer)', 'linkedin-visit-footer')}
        >
          <LinkedinIcon />
        </SocialButton>

        <SocialButton
          href="https://www.freecodecamp.org/bbeck2417"
          ariaLabel="Visit my FreeCodeCamp Profile"
          id="freecodecamp-visit-footer"
          target="_blank"
          onClick={() => trackClick('FreeCodeCamp (Footer)', 'freecodecamp-visit-footer')}
        >
          <FreeCodeCampIcon />
        </SocialButton>
      </div>
      <p className={`${styles.footerText} montserrat-200`}>
        © <span>{currentYear}</span> Billy Beck
      </p>
    </footer>
  );
};

export default Footer;
