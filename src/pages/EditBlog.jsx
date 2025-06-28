// File: src/pages/EditBlog.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc, updateDoc, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import './AddBlog.css';

function EditBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitle(data.title);
        setContent(data.content);
        setPreview(data.image || "");
      } else {
        toast.error("Blog not found");
        navigate("/blogs");
      }
    };
    fetchBlog();
  }, [id, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      return toast.error("All fields are required");
    }
    try {
      const blogRef = doc(db, "blogs", id);
      const updatedData = {
        title,
        content,
        updated: Timestamp.now()
      };

      if (image) {
        const reader = new FileReader();
        reader.onloadend = async () => {
          updatedData.image = reader.result;
          await updateDoc(blogRef, updatedData);
          toast.success("Blog updated successfully!");
          navigate("/blogs");
        };
        reader.readAsDataURL(image);
      } else {
        await updateDoc(blogRef, updatedData);
        toast.success("Blog updated successfully!");
        navigate("/blogs");
      }
    } catch (error) {
      toast.error("Error updating blog");
    }
  };

  return (
    <div className="add-blog-container bg-light p-4 rounded shadow-lg">
      <h3 className="text-center text-primary mb-4">✏️ Edit Blog</h3>

      <div className="text-center mb-4">
        {preview && (
          <img src={preview} alt="Preview" width="120" className="rounded-circle border border-3 border-primary p-2" />
        )}
      </div>

      <form onSubmit={handleUpdate}>
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
          <label className="form-label fw-semibold">Change Image</label>
          <input type="file" className="form-control border-primary" accept="image/*"
            onChange={e => setImage(e.target.files[0])} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success px-4 fw-bold">
            <i className="fas fa-save me-2"></i> Update Blog
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditBlog;
