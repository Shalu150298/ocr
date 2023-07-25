import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./assets/css/style.css";

const Navigation = () => {
  const [navbarMobile, setNavbarMobile] = useState(false);

  const handleNavToggle = () => {
    setNavbarMobile(!navbarMobile);
  };

  const handleNavLinkClick = (hash) => {
    if (document.querySelector(hash)) {
      if (navbarMobile) {
        setNavbarMobile(false);
      }
      scrollto(hash);
    }
  };

  const scrollto = (hash) => {
    const target = document.querySelector(hash);
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  };

  const navbarClass = navbarMobile ? "navbar-mobile" : "";

  return (
    <>
      <header
        id="headerNav"
        className={`fixed-top ${navbarClass}`}
        style={{
          background:
            " linear-gradient(45deg, rgba(9,21,40,255) 0%, rgba(8,24,47,255) 100%) center center no-repeat",
        }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <Link to="/">Product AI</Link>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link
                  to="#hero"
                  className="nav-link scrollto active"
                  onClick={() => handleNavLinkClick("#hero")}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="#about"
                  className="nav-link scrollto"
                  onClick={() => handleNavLinkClick("#about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#Services"
                  className="nav-link scrollto"
                  onClick={() => handleNavLinkClick("#Services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="#Features"
                  className="nav-link scrollto"
                  onClick={() => handleNavLinkClick("#Features")}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="#Contact"
                  className="nav-link scrollto"
                  onClick={() => handleNavLinkClick("#Contact")}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="getstarted scrollto"
                  // onClick={() => handleNavLinkClick("/signup")}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            <i
              className={`bi bi-list mobile-nav-toggle ${
                navbarMobile ? "bi-x" : "bi-list"
              }`}
              onClick={handleNavToggle}
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
