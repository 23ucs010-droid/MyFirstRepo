import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ServiceDetail() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [language, setLanguage] = useState("");
  const [service, setService] = useState("");

  const allServices = {
    taluk: {
      name: "Taluk Office Services",
      options: {
        "Aadhaar Update": ["Aadhaar Card", "Proof of Address", "Passport Size Photo"],
        "Income Certificate": ["Ration Card", "Salary Proof", "Community Certificate"],
        "Community Certificate": ["Ration Card", "Parent Certificate", "Birth Certificate"],
      },
    },
    bank: {
      name: "Bank Services",
      options: {
        "New Account": ["Aadhaar", "PAN Card", "Passport Photo"],
        "Loan Application": ["Salary Proof", "Bank Statement", "PAN Card"],
      },
    },
    eseva: {
      name: "eSevai Services",
      options: {
        "Aadhaar Print": ["Aadhaar Number", "OTP Verification"],
        "Family Certificate": ["Ration Card", "Aadhaar", "Proof of Residence"],
      },
    },
  };

  const selected = allServices[type];

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
      <button
        onClick={() => navigate(-1)}
        className="text-purple-700 mb-4 underline hover:text-purple-900"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold text-purple-800 mb-6">{selected?.name}</h1>

      {/* Language Dropdown */}
      <label className="block text-left mb-2 font-medium">Select Language:</label>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border p-2 rounded w-full mb-6"
      >
        <option value="">-- Choose Language --</option>
        <option value="English">English</option>
        <option value="Tamil">Tamil</option>
        <option value="Hindi">Hindi</option>
      </select>

      {/* Service Dropdown */}
      <label className="block text-left mb-2 font-medium">Select Service:</label>
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="border p-2 rounded w-full mb-6"
      >
        <option value="">-- Choose Service --</option>
        {Object.keys(selected?.options || {}).map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      {/* Show Required Documents */}
      {service && (
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mt-4 text-left">
          <h3 className="text-lg font-semibold mb-2 text-purple-900">Required Documents:</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {selected.options[service].map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
