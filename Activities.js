import React from 'react';

const activities = [
  // Replace these sample activities with actual activities in Guam
  'Activity 1',
  'Activity 2',
  'Activity 3',
  // ...
];

function Activities() {
  return (
    <section id="activities">
      <h2>Activities in Guam</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </section>
  );
}

export default Activities;
