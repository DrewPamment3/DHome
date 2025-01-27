import React from "react";
import ScrollProgress from "./ScrollProgress";
import Card from "./Card";

const Home = () => {
  const sections = ["home", "about", "contact"];

  return (
    <div className="relative bg-gray-900 text-white">
      {/* Scroll Progress */}
      <ScrollProgress sections={sections} />

      {/* Sections */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Section: Home */}
        <section
          id="home"
          className="snap-start h-screen flex flex-col justify-start items-center px-8"
        >
          <div className="w-full max-w-6xl">
            <h1 className="text-4xl font-bold mt-12 mb-8">My Projects</h1>
            <div className="flex justify-center h-[50vh] gap-4">
              <Card title="Project 1" description="Project details here" />
              <Card title="Project 2" description="Project details here" />
              <Card title="Project 3" description="Project details here" />
            </div>
          </div>
        </section>

        {/* Section: About */}
        <section
          id="about"
          className="snap-start h-screen flex flex-col justify-start items-center px-8"
        >
          <div className="w-full max-w-6xl">
            <h1 className="text-4xl font-bold mt-12 mb-4">About Me</h1>
            <p className="text-lg">I’m passionate about creating awesome things!</p>
          </div>
        </section>

        {/* Section: Contact */}
        <section
          id="contact"
          className="snap-start h-screen flex flex-col justify-start items-center px-8"
        >
          <div className="w-full max-w-6xl">
            <h1 className="text-4xl font-bold mt-12 mb-4">Contact Me</h1>
            <p className="text-lg">Get in touch to discuss projects or collaborations!</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
