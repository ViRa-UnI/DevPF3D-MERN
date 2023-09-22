```javascript
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import auth from '../utils/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      await auth.register(username, password);
      history.push('/');
    } catch (error) {
      alert('Registration failed!');
    }
  };

  return (
    <div id="register">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
```