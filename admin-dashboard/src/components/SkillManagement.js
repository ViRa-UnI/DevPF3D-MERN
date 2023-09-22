```javascript
import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';

const SkillManagement = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    setLoading(true);
    const response = await api.get('/skills');
    setSkills(response.data);
    setLoading(false);
  };

  const manageSkill = async (id, action) => {
    if (action === 'delete') {
      await api.delete(`/skills/${id}`);
    } else if (action === 'update') {
      // Update logic here
    }
    fetchSkills();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="skillManagement">
      <h2>Skill Management</h2>
      {skills.map(skill => (
        <div key={skill._id}>
          <h3>{skill.name}</h3>
          <button onClick={() => manageSkill(skill._id, 'update')}>Update</button>
          <button onClick={() => manageSkill(skill._id, 'delete')}>Delete</button>
        </div>
      ))}
      <button onClick={() => manageSkill(null, 'create')}>Add New Skill</button>
    </div>
  );
};

export default SkillManagement;
```