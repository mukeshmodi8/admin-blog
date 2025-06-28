import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddBlog from './pages/AddBlog';
import EditBlog from './pages/EditBlog';
import BlogList from './pages/BlogList';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddBlog />} />
          <Route path="/edit/:id" element={<EditBlog />} />
          <Route path="/blogs" element={<BlogList />} />
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App