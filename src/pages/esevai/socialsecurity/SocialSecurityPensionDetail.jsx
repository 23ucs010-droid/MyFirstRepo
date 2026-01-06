// src/pages/esevai/socialsecurity/SocialSecurityPensionDetail.js
import { useParams, useNavigate } from "react-router-dom";
import { FileText, ChevronLeft, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SocialSecurityPensionDetail() {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const primaryColor = "#ec4899"; // pink color for border & icons
  const textColor = "#1e3a8a";    // dark text

  const servicesData = {
    "old-age-pension": {
      documents: [
        "Aadhaar Card (mandatory)",
        "Smart Family Card (Ration Card)",
        "Age Proof (Aadhaar / Birth Certificate / Voter ID)",
        "Address Proof",
        "Bank Passbook (linked with Aadhaar)",
        "Passport size photograph",
        "Self-Declaration Form"
      ],
      source: "Verified From: Tamil Nadu Social Welfare Department – e-Sevai Pension Services"
    },
    "widow-pension": {
      documents: [
        "Aadhaar Card",
        "Death Certificate of Husband",
        "Marriage Proof (Marriage Certificate / Family Card)",
        "Smart Family Card",
        "Bank Passbook",
        "Address Proof",
        "Passport size photograph",
        "Self-Declaration"
      ],
      source: "Verified From: Tamil Nadu e-Sevai Portal – Widow Pension Scheme"
    },
    "disability-pension": {
      documents: [
        "Aadhaar Card",
        "Disability Certificate (Issued by Government Medical Board)",
        "Smart Family Card",
        "Bank Passbook",
        "Address Proof",
        "Passport size photograph",
        "Self-Declaration"
      ],
      source: "Verified From: Department for the Welfare of Differently Abled Persons, Tamil Nadu"
    },
    "destitute-widow-pension": {
      documents: [
        "Aadhaar Card",
        "Husband’s Death Certificate",
        "Income Certificate",
        "Smart Family Card",
        "Bank Passbook",
        "Address Proof",
        "Passport size photograph",
        "Self-Declaration (confirming destitute status)"
      ],
      source: "Verified From: Tamil Nadu Social Welfare Department – Destitute Widow Scheme"
    },
    "deserted-wives-pension": {
      documents: [
        "Aadhaar Card",
        "Proof of Desertion (VAO Certificate / Legal Notice / Court Order if available)",
        "Marriage Proof",
        "Income Certificate",
        "Smart Family Card",
        "Bank Passbook",
        "Passport size photograph",
        "Self-Declaration"
      ],
      source: "Verified From: Tamil Nadu e-Sevai – Deserted Women Pension Services"
    },
    "unmarried-women-pension": {
      documents: [
        "Aadhaar Card",
        "Age Proof (usually 50 years & above)",
        "Income Certificate",
        "Smart Family Card",
        "Bank Passbook",
        "Address Proof",
        "Passport size photograph",
        "Self-Declaration (unmarried status)"
      ],
      source: "Verified From: Department of Social Welfare, Government of Tamil Nadu"
    },
    "differently-abled-pension": {
      documents: [
        "Aadhaar Card",
        "Differently Abled Certificate (Government Medical Board)",
        "Smart Family Card",
        "Bank Passbook",
        "Address Proof",
        "Passport size photograph",
        "Self-Declaration"
      ],
      source: "Verified From: Tamil Nadu Differently Abled Welfare Department – e-Sevai"
    },
    "pension-status-tracking": {
      documents: ["Application Number","Aadhaar Number / Mobile Number"],
      source: "Verified From: Tamil Nadu e-Sevai Portal – Pension Status Services"
    },
    "pension-bank-account-linking": {
      documents: ["Aadhaar Card","Bank Passbook (Active Account)","Pension Application / PPO Number","Mobile Number (Aadhaar-linked)","Self-Declaration"],
      source: "Verified From: Tamil Nadu Treasury & Accounts Department – e-Sevai Services"
    }
  };

  const service = servicesData[serviceName.toLowerCase()];
  if (!service) return <p style={{ padding: "20px" }}>Service not found!</p>;

  return (
    <div style={{ padding: "40px", minHeight: "100vh", background: "#f3f4f6" }}>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 16px",
          background: primaryColor,
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        <ChevronLeft size={18} /> Back
      </button>

      {/* Title */}
      <h2 style={{
        marginBottom: "24px",
        fontSize: "2rem",
        fontWeight: "700",
        textTransform: "capitalize",
        color: textColor
      }}>
        {serviceName.replace(/-/g, " ")}
      </h2>

      {/* Card */}
      <motion.div onClick={() => setOpen(!open)} whileHover={{ scale: 1.02 }} style={{
        background: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        overflow: "hidden",
        cursor: "pointer",
        borderLeft: `6px solid ${primaryColor}`
      }}>
        {/* Card Header */}
        <div style={{
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "800",
          fontSize: "1.4rem",
          color: textColor
        }}>
          Required Verified Documents
          {open ? <ChevronUp size={22} color={primaryColor} /> : <ChevronDown size={22} color={primaryColor} />}
        </div>

        {/* Documents */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35 }} style={{
              padding: "20px 32px",
              background: "#ffffff",
              borderRadius: "0 0 16px 16px"
            }}>
              <ul style={{ listStyle: "none", padding: "0", margin: 0 }}>
                {service.documents.map((doc, i) => (
                  <li key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 0",
                    color: textColor,
                    fontSize: "1rem",
                    borderBottom: i !== service.documents.length - 1 ? "1px solid #f0f0f0" : "none"
                  }}>
                    <FileText size={18} color={primaryColor} /> {doc}
                  </li>
                ))}
              </ul>

              <p style={{ marginTop: "16px", fontSize: "0.85rem", color: "#475569", fontStyle: "italic" }}>
                {service.source}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
