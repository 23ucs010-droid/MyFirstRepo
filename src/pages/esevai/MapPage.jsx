import React from "react";
import { motion } from "framer-motion";

const centers = [
  {
    name: "e-Sevai Center – Tambaram",
    map: "https://www.google.com/maps?q=Tambaram+e+sevai+center",
  },
  {
    name: "e-Sevai Center – Velachery",
    map: "https://www.google.com/maps?q=Velachery+e+sevai+center",
  },
];

const MapPage = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-indigo-50 to-purple-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-gray-800"
      >
        Map & Directions
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {centers.map((center, index) => (
          <a
            key={index}
            href={center.map}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Open Map – {center.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MapPage;
