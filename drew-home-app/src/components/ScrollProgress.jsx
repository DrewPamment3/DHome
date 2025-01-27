import React, { useState, useEffect } from "react";

const ScrollProgress = ({ sections = [] }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    sections.forEach((id, index) => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setCurrentSection(index);
        }
      }
    });
  };

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 space-y-2">
      {sections.map((id, index) => (
        <div
          key={id}
          onClick={() => handleClick(id)}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            currentSection === index ? "bg-blue-500" : "bg-gray-400"
          }`}
          title={`Go to ${id}`}
        ></div>
      ))}
    </div>
  );
};

export default ScrollProgress;
