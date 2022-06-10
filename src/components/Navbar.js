import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.myMode} navbar-${props.myMode} px-5`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                {props.aboutText}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/services">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Contact
              </a>
            </li>
            {/* DROP DOWN MENU STARTED */}
            <li className="nav-item dropstart">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Setting
              </a>
              <ul
                style={{
                  backgroundColor:
                    props.myMode === "light" ? "white" : "#343434",
                  border: `1px solid ${
                    props.myMode === "light" ? "#343434" : "white"
                  }`,
                }}
                className="dropdown-menu px-5"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  {/* SWITCH BUTTON */}
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={props.toggleMoodFunc}
                    />
                    <label
                      className={`form-check-label text-${
                        props.myMode === "light" ? "dark" : "light"
                      }`}
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Dark Mode
                    </label>
                  </div>
                </li>
                <li>
                  {/* SWITCH BUTTON */}
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={props.bluishToggleMoodFunc}
                    />
                    <label
                      className={`form-check-label text-${
                        props.myMode === "light" ? "dark" : "light"
                      }`}
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Bluish Mode
                    </label>
                  </div>
                </li>
                <li>
                  {/* SWITCH BUTTON */}
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={props.greenishToggleMoodFunc}                
                    />
                    <label
                      className={`form-check-label text-${
                        props.myMode === "light" ? "dark" : "light"
                      }`}
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Greenish Mode
                    </label>
                  </div>
                </li>

                {/* DROP-->END */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "Set about here",
};
