// src/pages/esevai/landrecords/LandRecordsServicesList.js
import { useNavigate } from "react-router-dom";
import { Landmark } from "lucide-react";
import { motion } from "framer-motion";

export default function LandRecordsServicesList() {
  const navigate = useNavigate();

  const landServices = [
    "Patta Application",
    "Patta Transfer",
    "Joint Patta",
    "Sub-Division of Patta",
    "Patta Name Change",
    "Chitta / Adangal Extract",
    "FMB Sketch Application",
    "Land Record Verification",
    "Patta Status Tracking",
  ];

  return (
    <div style={{ padding: "40px", background: "#f1f5f9", minHeight: "100vh" }}>
      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          marginBottom: "30px",
          display: "flex",
          gap: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          alignItems: "center",
        }}
      >
        <Landmark size={42} color="#1e40af" />
        <div>
          <h2 style={{ margin: 0, color: "#1e40af" }}>
            Land Records & Taluk Services
          </h2>
          <p style={{ marginTop: "6px", color: "#475569" }}>
            Click any service to view required documents
          </p>
        </div>
      </div>

      {/* List of services */}
      <div style={{ display: "grid", gap: "16px" }}>
        {landServices.map((service) => (
          <div
            key={service}
            onClick={() =>
              navigate(`/esevai/landrecords/${service.replace(/\s+/g, "-").toLowerCase()}`)
            }
            style={{
              padding: "18px 22px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 6px 14px rgba(0,0,0,0.06)",
              cursor: "pointer",
              fontWeight: "600",
              color: "#1f2937",
              borderLeft: "6px solid #1e40af",
            }}
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
} 