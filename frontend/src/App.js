```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Blog from './components/Blog';
import Skill from './components/Skill';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/project/:id" component={Project} />
        <Route path="/blog/:id" component={Blog} />
        <Route path="/skill/:id" component={Skill} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
```