import React from "react";
import "./portfolio.css";
import IMG2 from "../../assets/snakegame.png";
import IMG1 from "../../assets/Mass-mail.png";
import IMG3 from "../../assets/flashcard.png";
import IMG4 from "../../assets/homefix.png";
const data = [
 
  {
    id: 1,
    image: IMG4,
    title: "HomeFix – The Smart Platform for Home Maintenance",
    github: "https://github.com/maneesh4562/HomeFix",
    demo: "https://home-fix-mu.vercel.app",
  },
  {
    id: 3,
    image: IMG1,
    title: "This can your Bulk mail engine - MassMailer",
    github: "https://github.com/maneesh4562/mass-mail",
    demo: "https://maneesh-bulkmail.netlify.app/",
  },
  {
    id: 4,
    image: IMG2,
    title: "Snake Game",
    github: "https://github.com/maneesh4562/-Classic-Snake-Game-Built-with-JavaScript",
    demo: "https://app.netlify.com/sites/snake-playground/overview",
  },
  {
    id:2,
    image:IMG3,
    title: "Learn Faster-Flashcard",
    github: "https://github.com/maneesh4562/flashlearn-spaced-repetition",
    demo: "https://flashcard-app-zeta-flame.vercel.app",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item, index) => {
          return (
            <article key={item.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.github} className="btn" rel="noreferrer" target="_blank">
                  Github
                </a>
                <a href={item.demo} className="btn btn-primary" rel="noreferrer"  target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
