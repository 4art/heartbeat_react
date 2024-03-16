// src/HeartbeatChecker.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HeartbeatChecker.css'; // Make sure to create this CSS file

const HeartbeatChecker = () => {
  const [dbActive, setDbActive] = useState(false);
  const [checked, setChecked] = useState(false);
  const backendUrl = window._env_ ? window._env_.REACT_APP_BACKEND_URL : process.env.REACT_APP_BACKEND_URL;


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/heartbeat`)
      .then(response => {
        if (response.data.dbActive) {
          setDbActive(true);
        }
        setChecked(true);
      })
      .catch(() => {
        setChecked(true);
      });
  }, []);

  return (
    <div className="status-container">
      <h1>Hello! Welcome to our site 😊</h1>
      <div className={`status ${checked ? (dbActive ? 'active' : 'inactive') : ''}`}>
        {checked ? (
          dbActive ? 'Database and backend are connected 🟢' : 'Database and backend connection failed 🔴'
        ) : (
          'Checking database connection...'
        )}
      </div>
    </div>
  );
};

export default HeartbeatChecker;
