import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Devendra Yadav (OEX Tech CEO)",
    review:
      "Maneesh is an exceptional Fullstack Software developer with a keen eye for detail. His ability to build seamless user interfaces enhances the overall user experience. He is always proactive in solving challenges and delivering high-quality work. His contributions at Oextech have been invaluable.",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Aman(SE)",
    review:
      "Maneesh is a dedicated Fullstack software developer who brings creativity and efficiency to every project. His ability to collaborate and align with the team’s goals ensures smooth execution of tasks. His commitment to delivering high-quality user experiences makes him a key contributor to the team.",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Varandeep (SDE2)",
    review:
      " He is quick to grasp complex problems and transform them into intuitive designs. His expertise in modern technologies reflects in the quality of his work. He is a reliable and innovative team member.",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Nikhil Mishra (SE)",
    review:
      "Maneesh's dedication to development is inspiring. His structured approach and technical skills ensure smooth and responsive applications. He values teamwork and is always willing to help others. His contributions significantly enhance project outcomes.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={item.id} className="testimonial">
              <div className="client__avatar">
                <img src={item.avatar} alt={item.name} />
              </div>
              <h5 className="client__name">{item.name}</h5>
              <small className="client__review">{item.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
