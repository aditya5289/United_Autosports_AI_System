// CustomNavbar.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarRear, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center justify-content-center" href="#" style={{ marginLeft: "20px", fontSize: "24px", width: "100%" }}>
          <FontAwesomeIcon icon={faCarRear} />
          <span className="ms-2">Vehicle Maintenance and Repair System</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {/* You can add additional navigation items here */}
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ marginRight: "20px" }}>
                <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "26px", color: "white" }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
