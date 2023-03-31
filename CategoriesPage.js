import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import OutdoorAdventures from './categories/OutdoorAdventures';
import CulturalExperiences from './categories/CulturalExperiences';
import WaterSports from './categories/WaterSports';
import ParksAndWildlife from './categories/ParksAndWildlife';
import Beaches from './categories/Beaches';
import FamilyFun from './categories/FamilyFun';
import Sightseeing from './categories/Sightseeing';
import HistoricalSites from './categories/HistoricalSites';
import { useNavigate } from 'react-router-dom';


const CategoriesPage = () => {
  const categories = [
    {
      title: 'Outdoor Adventures',
      imgSrc: require('../images/outdoor-adventures.jpg'),
    },
    {
      title: 'Cultural Experiences',
      imgSrc: require('../images/cultural-experiences.jpg'),
    },
    {
      title: 'Sightseeing',
      imgSrc: require('../images/sightseeing.jpg'),
    },
    {
      title: 'Water Sports',
      imgSrc: require('../images/water-sports.jpg'),
    },
    {
      title: 'Beaches',
      imgSrc: require('../images/beaches.jpg'),
    },
    {
      title: 'Parks And Wildlife',
      imgSrc: require('../images/parks-and-wildlife.jpg'),
    },
    {
      title: 'Historical Sites',
      imgSrc: require('../images/historical-sites.jpg'),
    },
    {
      title: 'Family Fun',
      imgSrc: require('../images/family-fun.jpg'),
    },
  ];
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/categories/${category}`);
  };

  return (
    <div className="categories-page">
      <h1>Activities</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/categories/${category.title.toLowerCase().replace(/ /g, '-')}`}
          >
            <CategoryCard
              category={category.title}
              imgSrc={category.imgSrc}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;