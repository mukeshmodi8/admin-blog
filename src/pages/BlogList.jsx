import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const blogData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setBlogs(blogData);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">📰 Mr. Happy Blogs</h2>
      <div className="row">
        {blogs.map(blog => (
          <div key={blog.id} className="col-md-6 mb-4">
            <div className="card shadow border-primary">
              {blog.image && <img src={blog.image} className="card-img-top" alt="Blog" />}
              <div className="card-body">
                <h5 className="card-title text-primary">{blog.title}</h5>
                <p className="card-text">{blog.content.substring(0, 100)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
