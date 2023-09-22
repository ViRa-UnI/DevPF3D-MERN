```javascript
import React, { useEffect, useState } from 'react';
import { api } from '../utils/api';

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    trackAnalytics();
  }, []);

  const trackAnalytics = async () => {
    try {
      const response = await api.get('/analytics');
      setAnalyticsData(response.data);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    }
  };

  return (
    <div id="analytics">
      <h1>User Analytics</h1>
      {analyticsData ? (
        <div>
          <p>Total Users: {analyticsData.totalUsers}</p>
          <p>Active Users: {analyticsData.activeUsers}</p>
          <p>Total Projects: {analyticsData.totalProjects}</p>
          <p>Total Blogs: {analyticsData.totalBlogs}</p>
          <p>Total Skills: {analyticsData.totalSkills}</p>
        </div>
      ) : (
        <p>Loading analytics...</p>
      )}
    </div>
  );
};

export default Analytics;
```