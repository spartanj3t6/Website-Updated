import React from 'react';
import ActivityCard from '../ActivityCard';

const FamilyFun = ({ activities }) => {
  return (
    <div className="family-fun">
      <h2>Family Fun</h2>
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

export default FamilyFun;
