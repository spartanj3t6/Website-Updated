import React from 'react';
import ActivityCard from '../ActivityCard';

const ParksAndWildlife = ({ activities }) => {
  return (
    <div className="parks-and-wildlife">
      <h2>Parks and Wildlife</h2>
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

export default ParksAndWildlife;
