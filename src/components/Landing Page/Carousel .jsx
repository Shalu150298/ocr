import React from "react";
import { Carousel } from "react-bootstrap";
import "./assets/css/style.css"
const CarouselItem = () => {
  return (
    <div>
      <Carousel>
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="container">
            <div className="row mb-5">
              {/* Card 1 */}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <div className="card-body">
                    <i className="bi bi-translate"></i>
                    <h5 className="card-title">Translation</h5>
                    <p className="card-text">
                      Translate text from any source and get audio translations
                      for language learners, visually impaired, and audio
                      preference users.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch d-none d-md-block">
                <div className="card">
                  <div className="card-body">
                    <i className="bi bi-tv"></i>
                    <h5 className="card-title">Summarization</h5>
                    <p className="card-text">
                      Provides fast and accurate audio transcription and concise
                      document summarization. Ideal for summarizing lectures,
                      interviews, and podcasts.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch d-none d-md-block">
                <div className="card">
                  <div className="card-body">
                    <i className="bi bi-mic-fill"></i>
                    <h5 className="card-title">Content Generation</h5>
                    <p className="card-text">
                      Allows users to translate extracted text into various
                      languages. This functionality is particularly useful for
                      translating text from images, such as signs, menus, or
                      foreign languages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="container">
            <div className="row mb-5">
              {/* Card 1 */}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <div className="card-body">
                    <i className="bi bi-globe"></i>
                    <h5 className="card-title">OCR</h5>
                    <p className="card-text">
                      This combined functionality can be helpful for translating
                      text from images, such as signs, menus, or documents in
                      foreign languages.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch d-none d-md-block">
                <div className="card">
                  <div className="card-body">
                    <i className="bi bi-gender-ambiguous"></i>
                    <h5 className="card-title">Gender Identification</h5>
                    <p className="card-text">
                      Our platform provides transcriptions with speaker gender
                      identification, enabling voice analytics, sentiment
                      analysis, and demographic studies.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch d-none d-md-block">
                <div className="card">
                  <div className="card-body">
                    <i className="bi bi-clock"></i>
                    <h5 className="card-title">Real-Time Translation</h5>
                    <p className="card-text">
                      Facilitates seamless communication, enhances inclusivity,
                      and improves the overall experience for participants in
                      live events, conferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="container">
            <div className="row mb-5">
              {/* Card 1 */}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <div className="card-body">
                    <i className="bi bi-globe"></i>
                    <h5 className="card-title">OCR</h5>
                    <p className="card-text">
                      This combined functionality can be helpful for translating
                      text from images, such as signs, menus, or documents in
                      foreign languages.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch d-none d-md-block">
                <div className="card">
                  <div className="card-body">
                    <i className="bi bi-gender-ambiguous"></i>
                    <h5 className="card-title">Gender Identification</h5>
                    <p className="card-text">
                      Our platform provides transcriptions with speaker gender
                      identification, enabling voice analytics, sentiment
                      analysis, and demographic studies.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch d-none d-md-block">
                <div className="card">
                  <div className="card-body">
                    <i className="bi bi-clock"></i>
                    <h5 className="card-title">Real-Time Translation</h5>
                    <p className="card-text">
                      Facilitates seamless communication, enhances inclusivity,
                      and improves the overall experience for participants in
                      live events, conferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>{" "}
    </div>
  );
};

export default CarouselItem;
