import React from "react";
import { Link } from "react-router-dom";
import {
  RiTwitterLine,
  RiFacebookLine,
  RiInstagramLine,
  RiSkypeLine,
  RiLinkedinLine,
} from "react-icons/ri";
import "./assets/css/style.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact text-white">
                <h3>PRODUCT AI</h3>
                <p>
                  Raheja Plaza, A-101, Lal Bahadur Shastri Marg, next to
                  Kalpataru Society, Nityanand Nagar,
                  <br />
                  New York, NY 535022
                  <br />
                  Ghatkopar West, Mumbai <br />
                  <br />
                  <strong>Phone:</strong> 022 6977 1818
                  <br />
                  <strong>Email:</strong> info@cloudstrats.com
                  <br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/terms">Careers</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Support</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/translation">Privacy Statement</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/content-generation">Terms of use</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/ocr">Cookie Policy</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/gender-identification">Sitemap</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p style={{ color: "#ffffff94" }}>
                  Learn about our new offerings. Enter your e-mail to subscribe.
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright-wrap d-md-flex py-4">
            <div className="me-md-auto text-center text-md-start">
              <div className="copyright">
                &copy; {new Date().getFullYear()}{" "}
                <strong>{/* <span>Cloudstrats Inc</span> */}</strong>. All
                Rights Reserved
              </div>
              <div className="credits">
                Designed by <a href="https://cloudstrats.com/">Cloudstrats</a>
              </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
              <Link to="#" className="twitter">
                <RiTwitterLine />
              </Link>
              <Link to="#" className="facebook">
                <RiFacebookLine />
              </Link>
              <Link to="#" className="instagram">
                <RiInstagramLine />
              </Link>
              <Link to="#" className="google-plus">
                <RiSkypeLine />
              </Link>
              <Link to="#" className="linkedin">
                <RiLinkedinLine />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
