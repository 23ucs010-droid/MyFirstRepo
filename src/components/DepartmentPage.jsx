import React from "react";
import { motion } from "framer-motion";

const DepartmentPage = ({ title, description, services }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-100 p-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-4"
      >
        {title}
      </motion.h1>

      <p className="text-gray-200 mb-8 max-w-2xl">
        {description}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold text-purple-800">
              {service}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPage;
