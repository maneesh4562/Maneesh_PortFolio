import React, { useState } from "react";
import "./nav.css";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#about"
        rel="noreferrer"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        aria-label="about"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        rel="noreferrer"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        aria-label="experience"
      >
        <BiBook />
      </a>
      <a
        href="#services"
        rel="noreferrer"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
        aria-label="services"
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        aria-label="contact"
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
