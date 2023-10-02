```javascript
import React, { useEffect, useState } from 'react';
import { api } from '../utils/api';

const Skill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const response = await api.get('/skills');
    setSkills(response.data);
  };

  return (
    <div id="skill">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index}>
          <h3>{skill.name}</h3>
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Skill;
```