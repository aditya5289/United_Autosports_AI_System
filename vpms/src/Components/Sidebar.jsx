// Sidebar.jsx

import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="sidebar">
      <div className="d-flex flex-column flex-shrink-0 p-3">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          {/* <span className="fs-4">Sidebar</span> */}
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <button 
              className={`nav-link btn btn-${activeTab === 'Dashboard' ? 'primary' : 'light'}`}
              onClick={() => handleTabClick('Dashboard')}
              style={{ fontSize: "20px", color: "white" }}
            >
              Dashboard
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link btn btn-${activeTab === 'Information' ? 'primary' : 'light'}`}
              onClick={() => handleTabClick('Information')}
              style={{ fontSize: "20px", color: "white" }}
            >
              Information
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link btn btn-${activeTab === 'Products' ? 'primary' : 'light'}`}
              onClick={() => handleTabClick('Products')}
              style={{ fontSize: "20px", color: "white" }}
            >
              Products
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link btn btn-${activeTab === 'Live Monitoring' ? 'primary' : 'light'}`}
              onClick={() => handleTabClick('Live Monitoring')}
              style={{ fontSize: "20px", color: "white" }}
            >
              Live Monitoring
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
