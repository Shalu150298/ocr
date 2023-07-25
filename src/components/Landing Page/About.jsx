import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
// import { BsArrowRight } from "react-icons/fi";
import "./assets/css/style.css";
import about from "./assets/img/about.jpg";

const About = () => {
  return (
    <>
      <section id="about" className="about section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <img src={about} className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
            >
              <h3>About us</h3>
              <p>
                We are an Indian AI product company driving exponential
                technology growth. Our platforms harness computer vision,
                speech, and text solutions to solve real-world problems.
                Leveraging Deep Learning, NLP, and ML, we accelerate digital
                transformation in industries like Citizen Services, Public
                Safety, Education, Health, and Transport. From Command Control
                Centers to Fraud Detection, our innovations fuel sustainable
                development goals.
              </p>

              <Link to="#" className="read-more">
                Read More <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
