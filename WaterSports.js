import React from 'react';
import ActivityCard from '../ActivityCard';

const WaterSports = ({ activities }) => {
  return (
    <div className="water-sports">
      <h2>Water Sports</h2>
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

export default WaterSports;