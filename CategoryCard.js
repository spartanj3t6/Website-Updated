import React from 'react';
import './CategoryCard.css';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category, imgSrc }) => {
  return (
    <Link to={`/categories/${category}`} className="category-card">
      <img src={imgSrc} alt={category} />
      <div className="category-card-overlay">
        <h3>{category}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
