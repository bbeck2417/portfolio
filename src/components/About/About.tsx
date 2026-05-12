import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={`${styles.about} montserrat-200`} id="about">
      <h2>About Me</h2>
      <p>
        Hello! I&apos;m Billy, a Full Stack Web Development student at Ivy Tech and
        a passionate creator of web and mobile applications. Beyond the code,
        I am proud to serve as the President of the South Bend Phi Theta Kappa
        Chapter and the Secretary/Treasurer of the IT Club. I am constantly
        learning, building, and leading as I work toward my graduation in
        2026. Check out my projects below to see how I’m putting my technical
        skills into practice.
      </p>
    </section>
  );
};

export default About;
