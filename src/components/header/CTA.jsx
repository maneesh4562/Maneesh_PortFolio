import React from "react";
import Maneesh from "../../assets/Maneesh_CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Maneesh} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
