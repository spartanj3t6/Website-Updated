import React from 'react';
import ActivityCard from '../ActivityCard';

const HistoricalSites = ({ activities }) => {
  return (
    <div className="historical-sites">
      <h2>Historical Sites</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoricalSites;
