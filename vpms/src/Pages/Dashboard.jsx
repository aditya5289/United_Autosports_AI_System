// Dashboard.jsx

import React, { useState } from 'react';
import CustomNavbar from '../Components/CustomNavbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <CustomNavbar />
      <div className="container-fluid" style={{ marginTop: '56px' }}> {/* Adjust margin-top to accommodate Navbar height */}
        <div className="row">
          <div className="col-2">
            <Sidebar onTabChange={handleTabChange} />
          </div>
          <div className="col-10">
            <div className="p-4">
              <h1>{activeTab}</h1>
              <p>Content for {activeTab} goes here.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
