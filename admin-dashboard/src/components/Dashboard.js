```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div id="dashboard" className="dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-links">
                <Link to="/projectManagement">Manage Projects</Link>
                <Link to="/blogManagement">Manage Blogs</Link>
                <Link to="/skillManagement">Manage Skills</Link>
                <Link to="/analytics">View Analytics</Link>
            </div>
        </div>
    );
};

export default Dashboard;
```