// // Sidebar.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css';

// const Sidebar = () => {
//   const [activeTab, setActiveTab] = useState('Dashboard');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="sidebar">
//       <div className="d-flex flex-column flex-shrink-0 p-3">
//         <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
//           {/* <span className="fs-4">Sidebar</span> */}
//         </a>
//         <hr />
//         <ul className="nav nav-pills flex-column mb-auto">
//           <li className="nav-item">
//             <Link
//               to="/"
//               className={`nav-link btn btn-${activeTab === 'Dashboard' ? 'primary' : 'light'}`}
//               onClick={() => handleTabClick('Dashboard')}
//               style={{ fontSize: "20px", color: "white" }}
//             >
//               Dashboard
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/information"
//               className={`nav-link btn btn-${activeTab === 'Information' ? 'primary' : 'light'}`}
//               onClick={() => handleTabClick('Information')}
//               style={{ fontSize: "20px", color: "white" }}
//             >
//               Information
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/products"
//               className={`nav-link btn btn-${activeTab === 'Products' ? 'primary' : 'light'}`}
//               onClick={() => handleTabClick('Products')}
//               style={{ fontSize: "20px", color: "white" }}
//             >
//               Products
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/live-monitoring"
//               className={`nav-link btn btn-${activeTab === 'Live Monitoring' ? 'primary' : 'light'}`}
//               onClick={() => handleTabClick('Live Monitoring')}
//               style={{ fontSize: "20px", color: "white" }}
//             >
//               Live Monitoring
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
