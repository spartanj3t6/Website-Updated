import React from 'react';
import ActivityCard from '../ActivityCard';

const Sightseeing = ({ activities }) => {
  return (
    <div className="sightseeing">
      <h2>Sightseeing</h2>
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

export default Sightseeing;