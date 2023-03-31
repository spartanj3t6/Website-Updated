// src/components/ActivitiesPage.js

import React from 'react';
import OutdoorAdventures from './categories/OutdoorAdventures';
import CulturalExperiences from './categories/CulturalExperiences';
import Sightseeing from './categories/Sightseeing';
import WaterSports from './categories/WaterSports';
import Beaches from './categories/Beaches';
import ParksAndWildlife from './categories/ParksAndWildlife';
import HistoricalSites from './categories/HistoricalSites';
import FamilyFun from './categories/FamilyFun';

const ActivitiesPage = () => {

const activities = [
  {
    title: "Skydiving",
    description: "Experience the thrill of freefall as you jump from a plane and soar through the skies above Guam.",
    provider: "Skydive Guam",
    website: "https://www.skydiveguam.com/",
    category: "Outdoor Adventures"
  },
  {
    title: "Scuba Diving",
    description: "Explore Guam's vibrant underwater world with a guided scuba diving tour, suitable for beginners and experienced divers alike.",
    provider: "Axe Murderer Dive Tours",
    website: "https://www.axemurderertours.com/",
    category: "Water Sports"
  },
  {
    title: "Chamorro Village Night Market",
    description: "Immerse yourself in Guam's local culture at the Chamorro Village Night Market, featuring food, crafts, and live performances.",
    provider: "Chamorro Village Night Market",
    website: "No official website; located in the village of Hagåtña",
    category: "Cultural Experiences"
  },
  {
    title: "Tumon Beach",
    description: "Relax on Tumon Beach, a beautiful white-sand beach in Guam, perfect for swimming, sunbathing, and enjoying water sports.",
    provider: "Tumon Beach",
    website: "No official website; located in the village of Tumon",
    category: "Beaches"
  },
  {
    title: "Two Lovers Point",
    description: "Take in breathtaking views of Guam's coastline at Two Lovers Point, a scenic overlook with a romantic legend.",
    provider: "Two Lovers Point",
    website: "https://puntandosamantes.com/",
    category: "Sightseeing"
  },
  {
    title: "Underwater World Guam",
    description: "Discover the diverse marine life of Guam at Underwater World, a large aquarium featuring a 100-foot-long underwater tunnel.",
    provider: "Underwater World Guam",
    website: "https://www.uwwguam.com/",
    category: "Family Fun"
  },
  {
    title: "Seawalker Helmet Diving",
    description: "Enjoy a unique underwater experience with Seawalker Helmet Diving, which allows you to walk on the ocean floor while breathing comfortably.",
    provider: "Fish Eye Marine Park",
    website: "https://www.fisheyeguam.com/",
    category: "Water Sports"
  },
  {
    title: "Latte Stone Park",
    description: "Visit Latte Stone Park, a historic site featuring ancient Chamorro stone pillars and a peaceful, shaded park.",
    provider: "Latte Stone Park",
    website: "No official website; located in the village of Hagåtña",
    category: "Historical Sites"
  },
  {
    title: "Pacific War Museum",
    description: "Learn about Guam's role in World War II at the Pacific War Museum, featuring artifacts, photographs, and personal stories from the conflict.",
    provider: "Pacific War Museum",
    website: "https://www.pacificwarmuseum.com/",
    category: "Historical Sites"
  },
  {
    title: "Lina'la' Chamorro Cultural Park",
    description: "Experience traditional Chamorro culture at Lina'la' Chamorro Cultural Park, a living history village showcasing ancient crafts, architecture, and customs.",
    provider: "Lina'la' Chamorro Cultural Park",
    website: "No official website; located in the village of Tumon",
    category: "Cultural Experiences"
  },
  {
    title: "Fort Nuestra Señora de la Soledad",
    description: "Explore the historic Fort Nuestra Señora de la Soledad, a Spanish colonial fort with stunning ocean views.",
    provider: "Fort Nuestra Señora de la Soledad",
    website: "No official website; located in the village of Umatac",
    category: "Historical Sites"
  },
  {
    title: "Tarzan Falls",
    description: "Embark on a hike through Guam's lush jungle to reach the picturesque Tarzan Falls, where you can swim and relax.",
    provider: "Tarzan Falls",
    website: "No official website; located in the village of Yona",
    category: "Outdoor Adventures"
  },
  {
    title: "Guam International Raceway",
    description: "Get your adrenaline pumping at the Guam International Raceway, which offers go-kart racing, motocross, and off-road adventures.",
    provider: "Guam International Raceway",
    website: "https://www.guamraceway.com/",
    category: "Family Fun"
  },
  {
    title: "Cetti Bay Overlook",
    description: "Admire stunning views of Guam's coastline and Cetti Bay at the Cetti Bay Overlook, a popular photo spot.",
    provider: "Cetti Bay Overlook",
    website: "No official website; located in the village of Umatac",
    category: "Sightseeing"
  },
  {
    title: "SUP Yoga Guam",
    description: "Challenge your balance and focus with SUP Yoga Guam, combining stand-up paddleboarding and yoga in a serene outdoor setting.",
    provider: "SUP Yoga Guam",
    website: "https://www.supyogaguam.com/",
    category: "Water Sports"
  },
  {
    title: "Guam Museum",
    description: "Discover Guam's rich history and culture at the Guam Museum, featuring exhibits on Chamorro art, archaeology, and the island's Spanish and American colonial periods.",
    provider: "Guam Museum",
    website: "https://www.guammuseum.org/",
    category: "Cultural Experiences"
  },
  {
    title: "Gun Beach",
    description: "Visit Gun Beach, a popular spot for snorkeling, swimming, and watching the sunset.",
    provider: "Gun Beach",
    website: "No official website; located in the village of Tumon",
    category: "Beaches"
  },
  {
    title: "Micronesia Mall",
    description: "Shop 'til you drop at Micronesia Mall, Guam's largest shopping center, featuring a wide variety of stores, restaurants, and entertainment options.",
    provider: "Micronesia Mall",
    website: "https://www.micronesiamall.com/",
    category: "Shopping & Entertainment"
  },
  {
    title: "Talofofo Falls Park",
    description: "Explore Talofofo Falls Park, a beautiful nature reserve featuring waterfalls, caves, and a unique cave train ride.",
    provider: "Talofofo Falls Park",
    website: "https://www.talofofofalls.com/",
    category: "Outdoor Adventures"
  },
  {
    title: "Valley of the Latte",
    description: "Experience Guam's natural beauty and history at the Valley of the Latte, offering riverboat tours, cultural demonstrations, and more.",
    provider: "Valley of the Latte",
    website: "https://valleyofthelatte.com/",
    category: "Cultural Experiences"
  },
  {
    title: "Ritidian Beach",
    description: "Unwind at Ritidian Beach, a pristine and secluded beach with crystal-clear waters, perfect for swimming and snorkeling.",
    provider: "Ritidian Beach",
    website: "No official website; located in the village of Yigo",
    category: "Beaches"
  },
  {
    title: "Guam Ocean Park",
    description: "Visit Guam Ocean Park, an interactive aquarium where you can touch and feed a variety of marine animals.",
    provider: "Guam Ocean Park",
    website: "https://www.guamoceanpark.com/",
    category: "Family Fun"
  },
  {
    title: "Onward Mangilao Golf Club",
    description: "Tee off at the Onward Mangilao Golf Club, a scenic golf course offering stunning ocean views and challenging holes.",
    provider: "Onward Mangilao Golf Club",
    website: "https://www.onwardmangilaogolf.com/",
    category: "Sports & Recreation"
  },
  {
    title: "Tagada Guam Amusement Park",
    description: "Experience thrilling rides and games at Tagada Guam Amusement Park, a fun-filled attraction for the whole family.",
    provider: "Tagada Guam Amusement Park",
    website: "https://www.tagadaguam.com/",
    category: "Family Fun"
  },
  {
    title: "Gef Pa'go Chamorro Cultural Village",
    description: "Immerse yourself in traditional Chamorro culture at Gef Pa'go Chamorro Cultural Village, a living history site offering demonstrations, performances, and hands-on activities.",
    provider: "Gef Pa'go Chamorro Cultural Village",
    website: "https://www.gefpagoguam.com/",
    category: "Cultural Experiences"
  },
  {
    title: "Mount Lam Lam",
    description: "Hike up Mount Lam Lam, Guam's highest peak, for breathtaking panoramic views of the island.",
    provider: "Mount Lam Lam",
    website: "No official website; located in the village of Agat",
    category: "Outdoor Adventures"
  },
  {
    title: "Ague Cove",
    description: "Embark on a hike to Ague Cove, a hidden gem featuring a secluded beach and stunning ocean views.",
    provider: "Ague Cove",
    website: "No official website; located in the village of Umatac",
    category: "Outdoor Adventures"
  },
  {
    title: "War in the Pacific National Historical Park",
    description: "Learn about Guam's role in World War II at the War in the Pacific National Historical Park, featuring historic sites, memorials, and educational exhibits.",
    provider: "National Park Service",
    website: "https://www.nps.gov/wapa/index.htm",
    category: "Cultural Experiences"
  },
  {
    title: "Guam Seawalker Tours",
    description: "Experience the underwater world of Guam on a Seawalker tour, which allows you to walk on the ocean floor while breathing normally.",
    provider: "Guam Seawalker Tours",
    website: "https://www.guamseawalker.com/",
    category: "Water Sports"
  },
  {
    title: "Fort Nuestra Señora de la Soledad",
    description: "Visit the historic Fort Nuestra Señora de la Soledad, a Spanish fort built in the early 19th century, offering beautiful views of Umatac Bay.",
    provider: "Fort Nuestra Señora de la Soledad",
    website: "No official website; located in the village of Umatac",
    category: "Sightseeing"
  },
  {
    title: "UnderWater World Guam",
    description: "Explore the depths of Guam's marine life at UnderWater World Guam, a large aquarium featuring a walk-through tunnel and diverse ocean habitats.",
    provider: "UnderWater World Guam",
    website: "https://www.uwwguam.com/",
    category: "Family Fun"
  },
  {
    title: "Latte Stone Park",
    description: "Discover ancient Chamorro history at Latte Stone Park, where you can see impressive latte stones, the iconic pillars of ancient Chamorro houses.",
    provider: "Latte Stone Park",
    website: "No official website; located in the village of Hagåtña",
    category: "Cultural Experiences"
  },
  {
    title: "Fish Eye Marine Park",
    description: "Observe Guam's vibrant marine life at Fish Eye Marine Park, featuring an underwater observatory, snorkeling, and diving opportunities.",
    provider: "Fish Eye Marine Park",
    website: "https://www.fisheyeguam.com/",
    category: "Water Sports"
  },
  {
    title: "Skydive Guam",
    description: "Experience the thrill of a lifetime with Skydive Guam, offering tandem skydiving over the beautiful island landscape.",
    provider: "Skydive Guam",
    website: "https://www.skydiveguam.com/",
    category: "Outdoor Adventures"
  },
  {
    title: "Two Lovers Point",
    description: "Take in panoramic views of Tumon Bay and Guam's coastline at Two Lovers Point, a famous scenic lookout and romantic spot.",
    provider: "Two Lovers Point",
    website: "https://www.puntandosamantes.com/",
    category: "Sightseeing"
  },
  {
    title: "Guam International Raceway",
    description: "Get your adrenaline pumping at the Guam International Raceway, featuring motocross, road racing, and off-road tracks for a thrilling motorsports experience.",
    provider: "Guam International Raceway",
    website: "https://www.guamraceway.com/",
    category: "Sports & Recreation"
  },
  {
    title: "Slingshot Guam",
    description: "Feel the rush of speed and excitement at Slingshot Guam, where you can ride in a high-performance slingshot vehicle and explore the island's beautiful scenery.",
    provider: "Slingshot Guam",
    website: "https://www.slingshotguam.com/",
    category: "Outdoor Adventures"
  },
  {
    title: "Guam Museum",
    description: "Discover the rich history and culture of Guam at the Guam Museum, featuring interactive exhibits, artifacts, and artworks.",
    provider: "Guam Museum",
    website: "https://www.guammuseum.org/",
    category: "Cultural Experiences"
  },
  {
    title: "Chamorro Village",
    description: "Experience local culture, food, and shopping at Chamorro Village, a lively market featuring local vendors, performances, and a festive atmosphere.",
    provider: "Chamorro Village",
    website: "https://www.chamorro-village.com/",
    category: "Cultural Experiences"
  },
];

const filterActivitiesByCategory = (category) => {
  return activities.filter(activity => activity.category === category);
};

return (
  <div className="activities-page">
    <OutdoorAdventures activities={filterActivitiesByCategory("Outdoor Adventures")} />
    <CulturalExperiences activities={filterActivitiesByCategory("Cultural Experiences")} />
    <Sightseeing activities={filterActivitiesByCategory("Sightseeing")} />
    <WaterSports activities={filterActivitiesByCategory("Water Sports")} />
    <Beaches activities={filterActivitiesByCategory("Beaches")} />
    <ParksAndWildlife activities={filterActivitiesByCategory("Parks and Wildlife")} />
    <HistoricalSites activities={filterActivitiesByCategory("Historical Sites")} />
    <FamilyFun activities={filterActivitiesByCategory("Family Fun")} />
  </div>
);
};

export default ActivitiesPage;