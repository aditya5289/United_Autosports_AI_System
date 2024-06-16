// // Login.jsx

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
//  import './Login.css';

// const Login = () => {
//   const navigate = useNavigate(); // Initialize navigate function from useNavigate hook
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     // Replace with your static username and password
//     const staticUsername = 'car_f1';
//     const staticPassword = 'car@1234';

//     if (username === staticUsername && password === staticPassword) {
//       // Successful login
//       navigate('/dashboard'); // Redirect to Dashboard page
//     } else {
//       // Failed login
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <div className="form-group">
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           className="form-control"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           className="form-control"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       {error && <div className="text-danger">{error}</div>}
//       <button className="btn btn-primary" onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Login;
