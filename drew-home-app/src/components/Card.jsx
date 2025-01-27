import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white text-black rounded-lg shadow-lg p-4 flex-shrink-0 min-w-[150px] max-w-[300px] cursor-pointer"
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
};

export default Card;
