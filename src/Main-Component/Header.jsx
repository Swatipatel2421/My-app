import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../assets/header.css";
// import image from ".";


class HeaderComponent extends Component {
    render() {
        return (
            <>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <div className="d-flex align-items-center justify-content-between w-100">
              <Link to="/" className="navbar-brand">
              <img src='/logo512.png' alt='' width="40px" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
                <Link to="/component" className="nav-link">
                  Component
                </Link>
              </div>
            </div>
          </div>
      </nav>  
            </>
        );
    }
}

export default HeaderComponent;