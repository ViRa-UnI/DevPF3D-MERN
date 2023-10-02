```javascript
import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await api.get('/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  return (
    <div id="blog">
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id} className="blog">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
```