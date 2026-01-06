import React, { useState } from "react";

const ServicePage = ({ title, servicesData }) => {
  const [language, setLanguage] = useState("English");
  const [selectedService, setSelectedService] = useState("");

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>{title}</h1>

      <div style={{ marginTop: "30px" }}>
        <label style={{ fontWeight: "bold" }}>Select Language: </label>
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option>English</option>
          <option>Tamil</option>
          <option>Hindi</option>
        </select>
      </div>

      <div style={{ marginTop: "30px" }}>
        <label style={{ fontWeight: "bold" }}>Select Service: </label>
        <select onChange={(e) => setSelectedService(e.target.value)}>
          <option value="">-- Choose Service --</option>
          {Object.keys(servicesData).map((s, i) => (
            <option key={i}>{s}</option>
          ))}
        </select>
      </div>

      {selectedService && (
        <div style={{ marginTop: "30px", background: "#f3f4f6", padding: "20px", borderRadius: "10px" }}>
          <h3>Required Documents for {selectedService}</h3>
          <ul style={{ textAlign: "left", display: "inline-block" }}>
            {servicesData[selectedService].map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServicePage;
