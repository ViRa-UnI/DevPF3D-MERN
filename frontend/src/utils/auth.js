```javascript
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
    localStorage.setItem('jwtToken', token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('jwtToken');
  }
};

const login = userData => {
  return axios
    .post('/api/users/login', userData)
    .then(res => {
      const { token } = res.data;
      setAuthToken(token);
      const decoded = jwt_decode(token);
      return decoded;
    })
    .catch(err => {
      console.log(err);
    });
};

const register = newUser => {
  return axios
    .post('/api/users/register', newUser)
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
};

const logout = () => {
  setAuthToken(false);
};

export const auth = {
  setAuthToken,
  login,
  register,
  logout
};
```