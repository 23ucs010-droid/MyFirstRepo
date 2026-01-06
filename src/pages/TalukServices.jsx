import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  CheckCircle,
  MapPin,
  ListOrdered,
  AlertTriangle,
  Languages,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/*
  TalukServices.jsx
  Main container for all Taluk / Revenue smart features
*/

const TalukServices = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-100 p-6">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-white text-center mb-8"
      >
        🏛️ Taluk / Revenue Services – Tamil Nadu
      </motion.h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <TabButton icon={<ListOrdered />} label="Services" tab="services" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton icon={<CheckCircle />} label="Eligibility Checker" tab="eligibility" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton icon={<MapPin />} label="Nearest Taluk Office" tab="centres" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton icon={<MessageCircle />} label="Smart Chatbot" tab="chatbot" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton icon={<AlertTriangle />} label="Grievance" tab="grievance" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton icon={<Languages />} label="Language / Audio" tab="language" activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {activeTab === "services" && <ServicesSection />}
        {activeTab === "eligibility" && <EligibilityChecker />}
        {activeTab === "centres" && <CentreFinder />}
        {activeTab === "chatbot" && <SmartChatbot />}
        {activeTab === "grievance" && <GrievanceAssistant />}
        {activeTab === "language" && <LanguageSupport />}
      </div>

      {/* Back Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/services")}
          className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          ⬅ Back to Departments
        </button>
      </div>
    </div>
  );
};

/* ---------------- TAB BUTTON ---------------- */
const TabButton = ({ icon, label, tab, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(tab)}
    className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold shadow-md transition
      ${activeTab === tab ? "bg-white text-purple-800" : "bg-purple-700 text-white hover:bg-purple-600"}`}
  >
    {icon}
    {label}
  </button>
);

/* ---------------- SERVICES LIST ---------------- */
const ServicesSection = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Available Taluk Services</h2>
    <ul className="grid md:grid-cols-2 gap-3 list-disc ml-6">
      <li>Community Certificate</li>
      <li>Income Certificate</li>
      <li>Nativity Certificate</li>
      <li>Legal Heir Certificate</li>
      <li>Patta Transfer / Name Change</li>
      <li>Land Records (Chitta / Adangal / FMB)</li>
      <li>Old Age / Widow / Disability Pension</li>
      <li>Revenue Court Case Enquiry</li>
      <li>Emergency Certificates</li>
    </ul>
  </div>
);

/* ---------------- ELIGIBILITY CHECKER ---------------- */
const EligibilityChecker = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Eligibility Checker</h2>
    <p className="mb-4 text-gray-700">
      Select a certificate to know whether you are eligible and why.
    </p>

    <ul className="list-disc ml-6 space-y-2">
      <li>Community Certificate → Requires parents’ community proof</li>
      <li>Income Certificate → Annual income below govt limit</li>
      <li>Nativity Certificate → Minimum 5 years residence in Tamil Nadu</li>
      <li>Legal Heir Certificate → Death certificate mandatory</li>
    </ul>

    <p className="mt-4 text-purple-700 font-semibold">
      ❌ If not eligible, system will show reason & suggest alternative service.
    </p>
  </div>
);

/* ---------------- CENTRE FINDER ---------------- */
const CentreFinder = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Nearest Taluk Office</h2>
    <p className="text-gray-700">
      📍 Use your location to find nearest Taluk / e-Sevai / CSC centre.
    </p>
    <p className="mt-2 text-sm text-gray-500">
      (Map integration – Google Maps / OpenStreetMap)
    </p>
  </div>
);

/* ---------------- CHATBOT ---------------- */
const SmartChatbot = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Smart Taluk Assistant</h2>
    <p className="text-gray-700">
      🤖 Ask questions like:
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>“How to apply for income certificate?”</li>
      <li>“What documents are needed?”</li>
      <li>“Am I eligible for widow pension?”</li>
    </ul>
  </div>
);

/* ---------------- GRIEVANCE ---------------- */
const GrievanceAssistant = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Grievance & Feedback</h2>
    <p className="text-gray-700">
      📝 File complaints directly to Taluk / District authorities.
    </p>
    <p className="mt-2 text-sm text-gray-500">
      Redirects to official Tamil Nadu grievance portals.
    </p>
  </div>
);

/* ---------------- LANGUAGE SUPPORT ---------------- */
const LanguageSupport = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Language & Audio Support</h2>
    <ul className="list-disc ml-6">
      <li>English</li>
      <li>தமிழ் (Tamil)</li>
      <li>हिन्दी (Hindi)</li>
    </ul>
    <p className="mt-2 text-gray-700">
      🔊 Text-to-speech support for elderly & visually challenged users.
    </p>
  </div>
);

export default TalukServices;
