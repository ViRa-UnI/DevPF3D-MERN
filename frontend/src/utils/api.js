```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

export const getBlogs = async () => {
  const response = await api.get('/blogs');
  return response.data;
};

export const getSkills = async () => {
  const response = await api.get('/skills');
  return response.data;
};

export const createProject = async (project) => {
  const response = await api.post('/projects', project);
  return response.data;
};

export const createBlog = async (blog) => {
  const response = await api.post('/blogs', blog);
  return response.data;
};

export const createSkill = async (skill) => {
  const response = await api.post('/skills', skill);
  return response.data;
};

export const updateProject = async (id, project) => {
  const response = await api.put(`/projects/${id}`, project);
  return response.data;
};

export const updateBlog = async (id, blog) => {
  const response = await api.put(`/blogs/${id}`, blog);
  return response.data;
};

export const updateSkill = async (id, skill) => {
  const response = await api.put(`/skills/${id}`, skill);
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await api.delete(`/projects/${id}`);
  return response.data;
};

export const deleteBlog = async (id) => {
  const response = await api.delete(`/blogs/${id}`);
  return response.data;
};

export const deleteSkill = async (id) => {
  const response = await api.delete(`/skills/${id}`);
  return response.data;
};

export default api;
```