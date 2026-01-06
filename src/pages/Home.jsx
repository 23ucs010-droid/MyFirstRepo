import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, ArrowRightCircle } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-gray-900 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #2e026d 0%, #5b21b6 40%, #ede9fe 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 0.15 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className="absolute w-72 h-72 bg-purple-500 rounded-full top-10 left-10 blur-3xl"
        />
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 0.15 }}
          transition={{
            duration: 3,
            delay: 1,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute w-96 h-96 bg-indigo-500 rounded-full bottom-10 right-10 blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-white">
          🏛️ <span className="text-purple-200">Smart</span>Service Portal
        </h1>
        <p className="text-lg text-gray-100 max-w-2xl mx-auto">
          A unified portal for <b>Taluk, Bank, and e-Sevai Services</b>.
          <br />
          Faster • Smarter • Simpler
        </p>
      </motion.div>

      {/* Globe */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{
          type: "spring",
          stiffness: 120,
          delay: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 6,
        }}
        className="my-10 z-10"
      >
        <Globe className="w-24 h-24 text-purple-200" />
      </motion.div>

      {/* Start Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/services")}
        className="flex items-center gap-3 bg-white text-purple-800 text-lg font-semibold px-8 py-4 rounded-full shadow-lg z-10"
      >
        Start Exploring
        <ArrowRightCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default Home;

