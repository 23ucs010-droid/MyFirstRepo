import React from "react";
import { motion } from "framer-motion";

const documents = [
  "Aadhaar Card",
  "Address Proof (Voter ID / EB Bill)",
  "Passport Size Photograph",
  "Income Certificate (if applicable)",
  "Community Certificate (if applicable)",
];

const DocumentsPage = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-indigo-50 to-purple-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-gray-800"
      >
        Required Documents
      </motion.h1>

      <ul className="max-w-2xl mx-auto space-y-3 text-gray-700 text-lg">
        {documents.map((doc, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-purple-600 font-bold">✔</span>
            {doc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentsPage;
