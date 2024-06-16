//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LiveMonitoring from './Components/LiveMonitoring';
import Recordchange from './Components/Recordchange';
import Vehiclepartinfo from './Components/Vehiclepartinfo';
import HomePage from './Components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">VPMS</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/HomePage">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/LiveMonitoring">Live Monitoring</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Recordchange">Record Change</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Vehiclepartinfo">Vehicle Part Info</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path='/HomePage' element={<HomePage/>}/>
            <Route path="/LiveMonitoring" element={<LiveMonitoring />} />
            <Route path="/Recordchange" element={<Recordchange />} />
            <Route path="/Vehiclepartinfo" element={<Vehiclepartinfo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
