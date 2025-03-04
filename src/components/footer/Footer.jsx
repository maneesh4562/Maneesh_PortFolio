import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>

      <ul className="permalinks">
        
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/maneesh-bugaliya-76b939205/"
          target="_blank"
          aria-label="LinkedIn"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/maneesh4562"
          target="_blank"
          aria-label="GitHub"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Maneesh. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
