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

        {/* MODE BUTTON STARTED */}
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMoodFunc('primary')}} style={{height:'30px', width: '30px', cursor:'poiter'}}></div>
          <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMoodFunc('info')}} style={{height:'30px', width: '30px', cursor:'poiter'}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMoodFunc('danger')}} style={{height:'30px', width: '30px', cursor:'poiter'}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMoodFunc('warning')}} style={{height:'30px', width: '30px', cursor:'poiter'}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMoodFunc('success')}} style={{height:'30px', width: '30px', cursor:'poiter'}}></div>
          <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMoodFunc('dark')}} style={{height:'30px', width: '30px', cursor:'poiter'}}></div>
          <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMoodFunc('light')}} style={{height:'30px', width: '30px', cursor:'poiter'}}></div>
        </div>
        {/* MODE BUTTON END */}
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
              <Link className="nav-link active" aria-current="page" to="/">
                Contact
              </Link>
            </li>
            {/* DROP DOWN MENU STARTED */}
            {/* <li className="nav-item dropstart">
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
                <li> */}
                  {/* SWITCH BUTTON */}
                  {/* <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={props.toggleMoodFunc}
                      disabled = {props.myMode === 'info'|| props.myMode === 'success'}
                      // checked = {props.myMode ==='dark'}
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
                <li> */}
                  {/* SWITCH BUTTON */}
                  {/* <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={props.bluishToggleMoodFunc}
                      disabled = {props.myMode === 'dark'|| props.myMode === 'success'}
                      // checked = {props.myMode === 'info'}

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
                
                <li> */}
                  {/* SWITCH BUTTON */}
                  {/* <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={props.greenishToggleMoodFunc}
                      disabled = {props.myMode === 'dark'|| props.myMode === 'info'}
                      // checked = {props.myMode === 'success'}                    


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

              </ul>
            </li> */}
                {/* DROP-->END */}
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
