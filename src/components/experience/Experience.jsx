import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
<section id="experience">
  <h5>What Skills I Have</h5>
  <h2>My Experience</h2>

  <div className="container experience__container">
    <div className="experience__frontend">
      <div className="experience__content">
      <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>C</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>C++</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>JavaScript</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>TypeScript</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>React.js</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Next.js</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
      </div>
    </div>
    <div className="experience__backend">
      <div className="experience__content">
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Node.js</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Express.js</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>RESTful APIs</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>GraphQL</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>MongoDB</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>PostgreSQL</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>DBMS</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Git & GitHub</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Docker & Kubernetes</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>CI/CD</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

  );
};

export default Experience;
