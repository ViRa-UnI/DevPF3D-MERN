```javascript
import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await api.get('/api/blogs');
    setBlogs(response.data);
  };

  const deleteBlog = async (id) => {
    await api.delete(`/api/blogs/${id}`);
    fetchBlogs();
  };

  const createBlog = async (blog) => {
    await api.post('/api/blogs', blog);
    fetchBlogs();
  };

  const updateBlog = async (id, updatedBlog) => {
    await api.put(`/api/blogs/${id}`, updatedBlog);
    fetchBlogs();
  };

  return (
    <div id="blogManagement">
      {/* Render blog management UI here */}
    </div>
  );
};

export default BlogManagement;
```