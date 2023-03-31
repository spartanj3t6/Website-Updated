// src/components/CategoryGrid.js

import React from 'react';
import './CategoryGrid.css';

const CategoryGrid = ({ category, activities }) => {
  const filteredActivities = activities.filter(activity => activity.category === category);

  return (
    <div className="category-grid">
      <h2>{category}</h2>
      <div className="grid-container">
        {filteredActivities.map((activity, index) => (
          <div key={index} className="grid-item">
            <h3>{activity.title}</h3>
            {/* Add more activity details if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;