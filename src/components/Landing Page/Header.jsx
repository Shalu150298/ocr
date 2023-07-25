import React from "react";
import "./assets/css/style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center section">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-8 pt-3 pt-lg-0 justify-content-center">
              <h1>AI Transforming Language, Audio, And Vision</h1>
              <h2>
                Experience Seamless Language Translation, Audio Solutions, OCR,
                and Computer Vision - Harness the Potential of AI for Enhanced
                Communication, Productivity, and Visual Intelligence
              </h2>
              {/* <div>
                <Link to="#about" className="btn-get-started">
                  Get Started
                </Link>
              </div> */}
            </div>
            {/* <div
            className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <img
              src="assets/img/hero-img.png"
              className="img-fluid animated"
              alt=""
            />
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
