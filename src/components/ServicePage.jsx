import React, { useState } from "react";

const ServicePage = ({ title, servicesData }) => {
  const [language, setLanguage] = useState("English");
  const [selectedService, setSelectedService] = useState("");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setSelectedService("");
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const docs = selectedService ? servicesData[language][selectedService] : [];

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-md mt-10">
      <h1 className="text-2xl font-bold text-purple-700 mb-4 text-center">
        {title}
      </h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1 font-medium">
          Select Language:
        </label>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
        >
          <option value="English">English</option>
          <option value="Tamil">தமிழ்</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1 font-medium">
          Select Service:
        </label>
        <select
          value={selectedService}
          onChange={handleServiceChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
        >
          <option value="">-- Choose Service --</option>
          {Object.keys(servicesData[language]).map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>
      {selectedService && (
        <div className="mt-6 bg-gray-50 p-4 rounded-md border border-purple-200">
          <h2 className="text-lg font-semibold text-purple-700 mb-3">
            Required Documents for {selectedService}
          </h2>
          <ul className="space-y-2">
            {docs.map((doc, i) => (
              <li key={i} className="flex items-center">
                <span className="text-green-600 mr-2">✅</span> {doc}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServicePage;
