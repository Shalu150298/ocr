import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./assets/css/style.css";

const Features = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      toggleOptions(".selector");
    }, 100);
  }, []);

  const rotate = (li, d) => {
    const rotateValue = `rotate(${d}deg)`;
    const labelRotateValue = `rotate(${-d}deg)`;
    li.style.transform = rotateValue;
    li.querySelector("label").style.transform = labelRotateValue;
  };

  const toggleOptions = (s) => {
    const selector = document.querySelector(s);
    selector.classList.toggle("open");
    const liList = selector.querySelectorAll("li");
    const deg = selector.classList.contains("half")
      ? 180 / (liList.length - 1)
      : 360 / liList.length;
    liList.forEach((li, index) => {
      const d = selector.classList.contains("half")
        ? index * deg - 90
        : index * deg;
      selector.classList.contains("open") ? rotate(li, d) : rotate(li, 0);
    });
  };

  const handleButtonClick = () => {
    toggleOptions(".selector");
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <section id="features" className="features section">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Features</h2>
            <p>
              Welcome to our feature section, where we showcase the powerful
              integration of NLP (Natural Language Processing), Computer Vision,
              and Speech Technology. Our cutting-edge platform harnesses the
              capabilities of these advanced technologies to provide an
              unparalleled user experience.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center mt-2">
              <div
                className="icon-box mt-5 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <i class="bi bi-bug"></i>{" "}
                <h4>NLP(Natural Language Processing)</h4>
                <p>
                  Effortless Communication - Machines understand and interpret
                  human language for seamless communication. No more manual data
                  entry, just effortless interactions through speech input text
                  processing
                </p>
              </div>
              <div
                className="icon-box mt-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi-cpu fs-1"></i>
                <h4> Computer Vision</h4>
                <p>
                  Visual Insights Unleashed - Unlock valuable information from
                  images and videos with our Computer Vision. Detect objects,
                  recognize faces, and revolutionize industries like e-commerce,
                  security, and healthcare.
                </p>
              </div>
              <div
                className="icon-box mt-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi-mic fs-1"></i>
                <h4> Speech Technology</h4>
                <p>
                  Intuitive Voice Interactions - Interact with our platform
                  intuitively through Speech Technology. Enjoy voice commands,
                  transcription services, and voice-enabled interfaces for
                  effortless engagement and efficient navigation.
                </p>
              </div>
            </div>
            <div
              className="image col-lg-6 order-1 order-lg-2 "
              data-aos="zoom-in"
              data-aos-delay="100"
              // id="product_back"
            >
              <div class="selector">
                <ul>
                  <li>
                    <input id="c1" type="checkbox" />
                    <label for="c1">Nayan AI</label>
                  </li>
                  <li>
                    <input id="c2" type="checkbox" />
                    <label for="c2">Swar AI</label>
                  </li>
                  <li>
                    <input id="c3" type="checkbox" />
                    <label for="c3">Akshar AI</label>
                  </li>
                  <li>
                    <input id="c4" type="checkbox" />
                    <label for="c4">Sentiment AI</label>
                  </li>
                  <li>
                    <input id="c5" type="checkbox" />
                    <label for="c5">Lipi </label>
                  </li>
                  <li>
                    <input id="c6" type="checkbox" />
                    <label for="c6">Tuedo </label>
                  </li>
                  <li>
                    <input id="c7" type="checkbox" />
                    <label for="c7">Seerf AI</label>
                  </li>
                  <li>
                    <input id="c8" type="checkbox" />
                    <label for="c8">Heal AI</label>
                  </li>
                </ul>
                <button onClick={handleButtonClick}>AI</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
