import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/maneesh-bugaliya-76b939205/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/maneesh4562" target="_blank" aria-label="GitHub">
        <FaGithub />
      </a>
    
    </div>
  );
};

export default HeaderSocials;
