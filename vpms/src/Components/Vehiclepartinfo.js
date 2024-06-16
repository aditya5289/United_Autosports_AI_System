import React from 'react'

function Vehiclepartinfo() {
    return (
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Parts Info</h2>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Manufacturer:</strong>
                    <span>ABC Motors</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Model:</strong>
                    <span>XYZ-2000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Type:</strong>
                    <span>V6 Petrol</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Capacity:</strong>
                    <span>3.0 Liters</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Engine" />
              </div>
            </div>
          </div>
        </div>
      );
}

export default Vehiclepartinfo
