import React, { useState, useEffect } from "react";

const About = () => {
  const images = [
    "/assets/arnold.jpg", 
    "/assets/gigachad3.jpg"
  ];
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full h-screen bg-black">
      {/* Left Rectangle (Text Section) */}
      <div className="w-1/2 flex-col items-center justify-center p-12">
        <h1 className="text-white text-5xl mb-10 font-bold">About Me</h1>
        <p classname="text-white mb-4 text-4xl font-bold">I maintain an image of perfection as my goal, and while it may not be completely achievable, falling short still means excellence.</p>
        <p>-</p>
        <p classname="text-white mt-4 text-4xl font-bold">The gym and my fitness progression is very important to me. It provides the mental clarity i need to perform at my best every day. It also serves as tangible progress towards my goals.</p>
        <p>-</p>
        <p classname="text-white text-4xl font-bold">Creativity is another important outlet for my energy, hopefully this web page serves to demonstrate this in some small way. I think it has a way of shining through my work, making for some interesting approaches that i find enjoyable</p>
        <p>-</p>
        <p classname="text-white text-4xl font-bold">I am loyal, and i believe in earning everything you achieve.</p>
        <p>-</p>
        <p>-</p>
        <p classname="text-white text-4xl font-bold">Please check out my <a href="www.myresume.com">resume</a> for more technical aspects</p>
      </div>

      {/* Right Rectangle (Image Transition) */}
      <div className="w-1/2 relative overflow-hidden">
        {/* Background Blur Layer */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent"></div>

        {/* Fading Images */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Background ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[3500ms] ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
