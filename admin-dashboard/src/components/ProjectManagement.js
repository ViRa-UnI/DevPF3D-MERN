```javascript
import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await api.get('/projects');
    setProjects(response.data);
  };

  const createProject = async (project) => {
    const response = await api.post('/projects', project);
    setProjects([...projects, response.data]);
  };

  const updateProject = async (id, updatedProject) => {
    const response = await api.put(`/projects/${id}`, updatedProject);
    setProjects(projects.map(project => project._id === id ? response.data : project));
  };

  const deleteProject = async (id) => {
    await api.delete(`/projects/${id}`);
    setProjects(projects.filter(project => project._id !== id));
  };

  return (
    <div id="projectManagement">
      {/* Render project management UI here */}
    </div>
  );
};

export default ProjectManagement;
```