import React from 'react';
import ActivityCard from '../ActivityCard';

const CulturalExperiences = ({ activities }) => {
  return (
    <div className="cultural-experiences">
      <h2>Cultural Experiences</h2>
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

export default CulturalExperiences;