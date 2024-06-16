// Dashboard.jsx
import React, { useState } from 'react';
import Recordchange from '../Components/Recordchange';
import LiveMonitoring from '../Components/LiveMonitoring';

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    Partname: '',
    PartType: '',
    Company: ''
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Recordchange setChartData={setChartData} />
        </div>
        <div className="col-md-6">
          <LiveMonitoring chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
