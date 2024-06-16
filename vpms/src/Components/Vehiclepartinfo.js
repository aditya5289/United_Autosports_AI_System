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
                    <strong>Product:</strong>
                    <span>Tire</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Manufacturer:</strong>
                    <span>Pirelli</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Model:</strong>
                    <span>P Zero</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Type:</strong>
                    <span>Soft</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Capacity:</strong>
                    <span>Maximum grip, less durability</span>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      );
}

export default Vehiclepartinfo
