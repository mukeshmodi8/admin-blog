// File: src/pages/AddBlog.jsx
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './AddBlog.css';

function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      return toast.error("All fields are required");
    }
    try {
      const blogData = {
        title,
        content,
        created: Timestamp.now()
      };

      // Optional image handling (base64)
      if (image) {
        const reader = new FileReader();
        reader.onloadend = async () => {
          blogData.image = reader.result;
          await addDoc(collection(db, "blogs"), blogData);
          toast.success("Blog with image added successfully!");
          navigate("/blogs");
        };
        reader.readAsDataURL(image);
      } else {
        await addDoc(collection(db, "blogs"), blogData);
        toast.success("Blog added successfully!");
        navigate("/blogs");
      }
    } catch (error) {
      toast.error("Error adding blog");
    }
  };

  return (
    <div className="add-blog-container bg-light p-4 rounded shadow-lg">
      <h3 className="text-center text-primary mb-4">📝 Add New Blog</h3>

      <div className="text-center mb-4">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Add Blog" width="120" className="rounded-circle border border-3 border-warning p-2" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-semibold">Title</label>
          <input type="text" className="form-control border-primary" placeholder="Enter blog title..."
            value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Content</label>
          <textarea className="form-control border-primary" rows="6" placeholder="Write your blog content..."
            value={content} onChange={e => setContent(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Upload Image</label>
          <input type="file" className="form-control border-primary" accept="image/*"
            onChange={e => setImage(e.target.files[0])} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-warning px-4 fw-bold">
            <i className="fas fa-plus me-2"></i> Add Blog
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBlog;