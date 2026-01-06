import React from "react";
import { motion } from "framer-motion";

const centers = [
  {
    name: "e-Sevai Center – Tambaram",
    address: "Tambaram West, Chennai – 600045",
    hours: "Mon–Fri : 9 AM – 5 PM",
  },
  {
    name: "e-Sevai Center – Velachery",
    address: "Velachery Main Road, Chennai – 600042",
    hours: "Mon–Fri : 9 AM – 5 PM",
  },
];

const CentersPage = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-indigo-50 to-purple-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-gray-800"
      >
        Nearest e-Sevai Centers
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {centers.map((center, index) => (
          <div key={index} className="bg-white p-6 rounded-3xl shadow-xl">
            <h2 className="text-xl font-semibold text-gray-800">{center.name}</h2>
            <p className="text-gray-600">{center.address}</p>
            <p className="text-gray-600">{center.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CentersPage;
