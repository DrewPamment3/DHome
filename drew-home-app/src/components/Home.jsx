import React, { useState } from 'react';
import Card from '../components/Card';

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="bg-gray-800 text-gray-100 min-h-screen pt-16">
      {/* Frosted Glass Container */}
      <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 w-full mx-auto">
        {/* Heading */}
        <h1 className="text-center text-3xl font-bold mb-8">My Projects</h1>

        {/* Carousel Container */}
        <div className="flex justify-center items-center space-x-4 px-4">
          {['Project 1', 'Project 2', 'Project 3'].map((title, index) => (
            <Card
              key={index}
              title={title}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
