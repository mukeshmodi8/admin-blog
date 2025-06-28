// File: src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient shadow-lg sticky-top" style={{ background: 'linear-gradient(90deg, #0f2027, #203a43, #2c5364)' }}>
      <div className="container bg-light">
        <Link className="navbar-brand fw-bold fs-4 text-warning d-flex align-items-center gap-2" to="/">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Admin" width="40" height="40" className="rounded-circle" />
          Mr. Happy Admin
        </Link>

        
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="dots-icon">⋮</span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link text-dark px-3 rounded-pill hover-effect" to="/">🏠 Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark px-3 rounded-pill hover-effect" to="/blogs">📋 All Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark px-3 rounded-pill hover-effect" to="/add">➕ Add Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
