// src/components/ActivityCard.js

import React from 'react';
import '../App.css';

function ActivityCard({ title, description, provider, website }) {
  return (
    <div className="activity-card">
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p>
        <strong>Recommended Provider:</strong> {provider}
      </p>
      <p>
        <strong>Website:</strong> <a href={website}>{website}</a>
      </p>
    </div>
  );
}

export default ActivityCard;