import React from "react";
import ScrollProgress from './ScrollProgress.jsx';
import ProjectCarousel from './ProjectCarousel.jsx';
import About from './About.jsx'
import Contact from './Contact.jsx'

const Home = () => {
  const sections = ["home", "about", "contact"];

  return (
    <div className=" bg-black/40 text-white">
      {/* Scroll Progress */}
      <ScrollProgress sections={sections} />

      {/* Sections Container */}
      <div className="p-[5vh] m-0 snap-y snap-mandatory h-[100vh] overflow-y-auto overflow-x-hidden">
        {/* Section: Home */}
        <section id="home" className="h-full snap-start box-border relative">
        <div className="ml-[5%] mr-auto w-[65%] h-full mb-10 relative">
        <h1 className="absolute top-10 left-0 text-white text-3xl font-bold">My Projects</h1>
    
        {/* Add padding to prevent overlap with the heading */}
        <div className="pt-14">
          <ProjectCarousel />
          </div>
        </div>
        </section>

        {/* Section: About */}
        <section
          id="about"
          className="pt-8 snap-start h-full flex flex-col justify-start overflow-y-auto overflow-x-hidden items-center px-8 box-border"
        >
          <About />
        </section>

        {/* Section: Contact */}
        <section
          id="contact"
          className="snap-start h-[100vh] overflow-y-auto overflow-x-hidden flex flex-col justify-start items-center px-8 box-border"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;