// components/ScrollProgress.tsx
import React, { useState, useEffect } from "react";

const ScrollProgress = ({ sectionIds }: { sectionIds: string[] }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    sectionIds.forEach((id, index) => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setCurrentSection(index);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2">
      <div className="flex flex-col space-y-2">
        {sectionIds.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSection === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ScrollProgress;
