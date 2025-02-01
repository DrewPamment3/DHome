import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";

const characterData = [
  { id: 1, name: "Cammy", description: "A powerful and agile fighter.", image: "/assets/cammy-avatar.jpg", gifImage: "/assets/cammy-animated.gif" },
  { id: 2, name: "Yujiro", description: "The most dangerous man alive.", image: "/assets/yujiro-avatar.jpg", gifImage: "/assets/yujiro.gif" },
  { id: 3, name: "Goku", description: "The strongest Saiyan warrior.", image: "/assets/goku-avatar.jpg", gifImage: "/assets/goku-ultra-instinct.gif" },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 }, // Show 3 items on desktop
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }, // Show 1 item on tablet
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }, // Show 1 item on mobile
};

const ProjectCarousel = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(characterData[0]); // Start with the first character

  const handleSlideChange = (index) => {
    let centerIndex = index < characterData.length ? index : 0;
    setSelectedCharacter(characterData[centerIndex]);
  };

  return (
    <div className="flex h-full w-full  bg-black/40 p-4">
      {/* Carousel Section */}
      <div className="w-2/3 h-full mt-0 pt-0 mb-[auto] flex items-center justify-center border-r border-gray-600">
        <Carousel
          responsive={responsive}
          showDots={false}
          arrows={true}
          infinite={true}
          centerMode={true}
          className="w-full h-full gap-2" // Added gap-2 for spacing between items
          afterChange={(currentSlide) => handleSlideChange(currentSlide-1)}
        >
          {characterData.map((char) => (
            <div
              key={char.id}
              className={`mt-[10%] p-2 w-[100%] h-full transition-all duration-300 flex justify-center relative
                ${selectedCharacter.id === char.id ? "scale-110 opacity-100 brightness-125 z-10" : "scale-90 opacity-50 brightness-75"}
              `}
            >
              <img
                src={char.image}
                alt={char.name}
                className="w-[70%] h-full diagonal-image rounded-lg transition-all duration-300"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Character Info Section */}
      <div className="w-1/3 h-[50%] flex flex-col justify-center text-white p-8">
        <h1 className="text-3xl font-bold">{selectedCharacter.name}</h1>
        <p className="text-lg mt-2">{selectedCharacter.description}</p>
      </div>
    </div>
  );
};

export default ProjectCarousel;