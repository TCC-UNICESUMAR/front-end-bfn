import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/Login/Index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login/Index';
import User_register from './pages/User_register/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User_register />
  </React.StrictMode>
);

reportWebVitals();
