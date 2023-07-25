import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Homepage/img/logo.png";
import ProfileImg from "../Homepage/img/profile-img.jpg";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("toggle-sidebar");
  };

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/" className="logos d-flex align-items-center px-2">
          <img src={logo} alt="" />
          <span className="d-none d-lg-block">ProductAI</span>
        </Link>
        <i
          className="bi bi-list toggle-sidebar-btn"
          onClick={handleToggleSidebar}
        ></i>
      </div>

      <div className="search-bar" style={{ padding: "14px 32px" }}>
        <form
          className="search-form d-flex align-items-center"
          method="POST"
          action="#"
        >
          <input
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
          />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <Link className="nav-link nav-icon search-bar-toggle" to="#">
              <i className="bi bi-search"></i>
            </Link>
          </li>
          <li className="nav-item dropdown pe-3">
            <Link
              className="nav-link nav-profile d-flex align-items-center pe-0"
              to="#"
              data-bs-toggle="dropdown"
            >
              <img src={ProfileImg} alt="Profile" className="rounded-circle" />
              <span className="d-none d-md-block dropdown-toggle ps-2">
                Profile
              </span>
            </Link>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>Kevin Anderson</h6>
                <span>Web Designer</span>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="Profile"
                >
                  <i className="bi bi-person"></i>
                  <span>My Profile</span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="dashboard"
                >
                  <i className="bi bi-gear"></i>
                  <span>Account Settings</span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="dashboard"
                >
                  <i className="bi bi-question-circle"></i>
                  <span>Need Help?</span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/login"
                >
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
