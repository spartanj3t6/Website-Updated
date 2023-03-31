import React from 'react';
import ActivityCard from '../ActivityCard';

const OutdoorAdventures = ({ activities }) => {
  return (
    <div className="outdoor-adventures">
      <h2>Outdoor Adventures</h2>
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

export default OutdoorAdventures;