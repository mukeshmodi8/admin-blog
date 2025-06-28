// File: src/pages/Dashboard.jsx
import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container bg-light p-5 rounded shadow-lg text-center">
      <h2 className="text-primary fw-bold mb-3">🎉 Welcome to Mr. Happy Admin Panel</h2>
      <p className="lead text-muted">Use the navigation bar to <strong>manage your blogs</strong> with ease.</p>
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Admin" style={{ width: '150px' }} className="mt-4" />
    </div>
  );
}

export default Dashboard;