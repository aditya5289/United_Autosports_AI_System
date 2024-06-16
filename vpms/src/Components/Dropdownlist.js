import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dropdownlist() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
         Vehicle Parts
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdownlist;
