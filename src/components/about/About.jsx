import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward, FaUser } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6 months Working</small>
            </article>
            <article className="about__card">
              <FaUser className="about__icon" />
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>
          I am a results-driven full-stack software engineer (NIT Durgapur '24, CGPA: 7.30) proficient in C, C++, JavaScript, and the MERN stack. I am skilled in TypeScript, Refine, Strapi, Git, Docker, Kubernetes, VSCode, and Postman, with a strong understanding of DSA, OOP, and database management (MongoDB, PostgreSQL, MySQL).
          At OEX Tech Solutions (Sept '24-Present), I integrated LangChain/Flowise (15% engagement increase), developed headless commerce platforms (20% page load time reduction), and designed AI predictive tools (10% conversion increase).I solved 400+ problems on GfG/Coding Ninjas, participated in 30+ CodeChef contests, and was a Flipkart Grid Challenge 5.0 semifinalist.  I also achieved AIR 4997 in JEE Mains 2020.  As Senior Coordinator at NIT Durgapur's Math N Tech Club, I organized events and mentored 20+ students. 🚀
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
