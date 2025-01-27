import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description  }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg shadow-lg bg-white text-black p-4"
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
};

export default Card;
