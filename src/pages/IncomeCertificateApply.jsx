// src/pages/IncomeCertificateApply.js
import React, { useEffect, useState } from "react";
import { speak, announcePage } from "../utils/accessibility";

export default function IncomeCertificateApply() {
  const [certificateType] = useState("Income Certificate");

  useEffect(() => {
    // Announce page load
    announcePage(`${certificateType} Apply Page`);
  }, [certificateType]);

  // Example function when user clicks Apply
  const handleApply = () => {
    speak("Apply for Income Certificate page opened");
    alert("Application form placeholder"); // your existing form logic
  };

  // Example location info
  const nearestCenter = "500 meters from bus stand, near Government Hospital";

  return (
    <div>
      <h1 tabIndex="0">{certificateType}</h1>

      {/* Apply button */}
      <button
        aria-label={`Apply for ${certificateType}`}
        onClick={handleApply}
      >
        Apply Certificate
      </button>

      {/* Location info for blind users */}
      <p className="sr-only">
        Nearest e-Sevai center is {nearestCenter}
      </p>
      <a
        href="https://maps.google.com"
        aria-label="Open e-Sevai center location in Google Maps"
      >
        View Map
      </a>

      {/* Chatbot button */}
      <button
        aria-label="Open chatbot for help"
        onClick={() => speak("Chatbot opened. Ask your question.")}
      >
        Chat with Assistant
      </button>
    </div>
  );
} 