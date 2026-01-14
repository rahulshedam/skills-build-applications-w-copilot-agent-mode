import React, { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const apiUrl = getApiUrl('activities');

  useEffect(() => {
    console.log('Fetching activities from:', apiUrl);
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Fetched activities:', results);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [apiUrl]);

  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-white">
        <h2 className="h4 mb-0">Activities</h2>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-light">
              <tr>
                <th>Type</th>
                <th>Duration (min)</th>
                <th>Distance (km)</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity.id}>
                  <td>{activity.type}</td>
                  <td>{activity.duration}</td>
                  <td>{activity.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Activities;
