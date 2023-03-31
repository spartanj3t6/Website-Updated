// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ActivitiesPage from './components/ActivitiesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CategoriesPage from './components/CategoriesPage';
import OutdoorAdventures from './components/categories/OutdoorAdventures';
import CulturalExperiences from './components/categories/CulturalExperiences';
import WaterSports from './components/categories/WaterSports';
import ParksAndWildlife from './components/categories/ParksAndWildlife';
import Beaches from './components/categories/Beaches';
import FamilyFun from './components/categories/FamilyFun';
import Sightseeing from './components/categories/Sightseeing';
import HistoricalSites from './components/categories/HistoricalSites';
import CategoryActivities from './CategoryActivities';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/activities" element={<CategoriesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/categories/:categoryName" element={<CategoryActivities activities={ActivitiesPage} />} />
            <Route path="/activities/outdooradventures" element={<OutdoorAdventures />} />
            <Route path= "/activities/culturalexperiences"element={<CulturalExperiences />} />
            <Route path= "/activities/watersports"element={<WaterSports />} />
            <Route path= "/activities/parksandwildlife"element={<ParksAndWildlife />} />
            <Route path= "/activities/beaches"element={<Beaches />} />
            <Route path= "/activities/familyfun"element={<FamilyFun />} />
            <Route path= "/activities/sightseeing"element={<Sightseeing />} />
            <Route path= "/activities/historicalsites"element={<HistoricalSites />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;