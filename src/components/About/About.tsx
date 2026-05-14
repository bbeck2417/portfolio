import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <section className={`${styles.about} montserrat-200`} id="about">
      <h2>About Me</h2>
      <p>
        Hi, I&apos;m Billy! I&apos;m a Full Stack Web Developer with a 4.0 GPA
        and a Technical Certificate (Summa Cum Laude) from Ivy Tech. I
        specialize in creating seamless digital experiences across web and
        mobile platforms. When I&apos;m not coding, I lead as the President of
        Phi Theta Kappa and Vice President of the IT Club. Currently pursuing my
        Associate&apos;s in Software Development, I am passionate about
        leveraging modern frameworks to build impactful solutions. Check out my
        projects to see what I&apos;ve been working on!
      </p>
    </section>
  );
};

export default About;
