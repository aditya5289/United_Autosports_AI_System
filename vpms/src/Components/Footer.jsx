// Footer.jsx

import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-center mb-0">&copy; {new Date().getFullYear()} Your Company</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
