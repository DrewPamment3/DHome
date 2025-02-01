import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#121212] text-white px-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg text-gray-400 max-w-lg text-center">
        I'm always open to new opportunities, collaborations, or just a friendly chat. 
        Feel free to reach out via any of the platforms below!
      </p>

      {/* Contact Icons Section */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {/* Email */}
        <a href="mailto:drew.pamment3@gmail.com" className="group flex items-center space-x-3 hover:text-blue-400 transition-all">
          <FaEnvelope className="text-3xl group-hover:scale-110 transition-transform" />
          <span className="text-lg">drew.pamment3@gmail.com</span>
        </a>

        {/* Phone */}
        <a href="tel: 0428838521" className="group flex items-center space-x-3 hover:text-green-400 transition-all">
          <FaPhone className="text-3xl group-hover:scale-110 transition-transform" />
          <span className="text-lg">+61 (0)428 838 521 </span>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/drewpamment" target="_blank" rel="noopener noreferrer"
          className="group flex items-center space-x-3 hover:text-blue-500 transition-all">
          <FaLinkedin className="text-3xl group-hover:scale-110 transition-transform" />
          <span className="text-lg">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a href="https://github.com/drewpamment3" target="_blank" rel="noopener noreferrer"
          className="group flex items-center space-x-3 hover:text-gray-400 transition-all">
          <FaGithub className="text-3xl group-hover:scale-110 transition-transform" />
          <span className="text-lg">GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
