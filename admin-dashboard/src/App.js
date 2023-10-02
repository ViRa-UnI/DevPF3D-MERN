```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProjectManagement from './components/ProjectManagement';
import BlogManagement from './components/BlogManagement';
import SkillManagement from './components/SkillManagement';
import Analytics from './components/Analytics';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/projects" component={ProjectManagement} />
        <Route path="/blogs" component={BlogManagement} />
        <Route path="/skills" component={SkillManagement} />
        <Route path="/analytics" component={Analytics} />
      </Switch>
    </Router>
  );
}

export default App;
```