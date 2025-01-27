import React from 'react';
import ScrollProgress from './ScrollProgress.tsx';
import Card from './Card.jsx'; // Assuming this is where the Card component is located.

const Home = () => {
  const sectionIds = ['home', 'about', 'contact'];

  return (
    <div className="relative bg-gray-900 text-white">
      {/* Scroll Progress Bar */}
      <ScrollProgress sections={['home', 'about', 'contact']} />

      {/* Scrollable Sections */}
      <div className="snap-y snap-mandatory h-screen overflow-scroll">
        {/* Section: Home */}
        <section id="home" className="snap-start h-screen flex justify-center items-center">
          <div className="w-full max-w-5xl px-4 text-center">
            <h1 className="text-4xl font-bold mb-8">Welcome to My Home Page</h1>
            <Card title="Project 1" description="Project details here" />
            <Card title="Project 2" description="Another project" />
          </div>
        </section>

        {/* Section: About */}
        <section id="about" className="snap-start h-screen flex justify-center items-center">
          <div className="w-full max-w-5xl px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg">I’m passionate about creating awesome things!</p>
          </div>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="snap-start h-screen flex justify-center items-center">
          <div className="w-full max-w-5xl px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg">Get in touch to discuss projects or collaborations!</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
