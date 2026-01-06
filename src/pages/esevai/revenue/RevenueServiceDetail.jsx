// src/pages/esevai/revenue/RevenueServiceDetail.js
import { useParams, useNavigate } from "react-router-dom";
import { FileText, ChevronLeft, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RevenueServiceDetail() {
  const { certificate } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const primaryColor = "#ec4899"; // pink color for icons and borders
  const textColor = "#1e3a8a";    // dark text for readability

  const servicesData = {
    "community-certificate": {
      documents: [
        "Recent photo of applicant",
        "Any Address Proof (e.g., Aadhaar, Ration Card)",
        "Parent / sibling community certificate (father or mother or sibling)",
        "Self-declaration by applicant"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    },
    "income-certificate": {
      documents: [
        "Applicant photo",
        "Any address proof",
        "TIN & trade details",
        "Land holdings & property details",
        "Family/Smart card",
        "Self-declaration of applicant",
        "Salary Certificate (latest)",
        "PAN card"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    },
    "nativity-certificate": {
      documents: [
        "Photo",
        "Address proof",
        "Birth certificate",
        "School records / employment proof showing long residence",
        "Self-declaration"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    },
    "residence-certificate": {
      documents: [
        "Photo",
        "Current address proof",
        "Self-declaration of applicant",
        "Additional supporting IDs (Passport / Driving Licence / PAN / Bank Passbook / Smart Card / Pension card / Govt IDs)"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    },
    "no-graduate-certificate": {
      documents: [
        "Photo",
        "Address proof",
        "Educational qualification proof (if any)",
        "Self-declaration that applicant is not a graduate",
        "Any other supporting documents"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    },
    "deserted-woman-certificate": {
      documents: [
        "Photo",
        "Proof of residence",
        "Proof of marriage",
        "Self-declaration",
        "Proof of desertion (or FIR details if applicable)"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    },
    "family-migration-certificate": {
      documents: [
        "Photo & address proof",
        "Self-declaration",
        "Marriage invitation/marriage certificate",
        "Previous residence address proof"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    },
    "unemployment-certificate": {
      documents: [
        "Photo",
        "Address proof",
        "Educational qualification proof",
        "Transfer Certificate (TC)",
        "Family income certificate",
        "Self-declaration",
        "Employment card/other documents"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    },
    "widow-certificate": {
      documents: [
        "Photo",
        "Address proof",
        "Husband’s death certificate",
        "Marriage registration or equivalent marriage proof",
        "Self-declaration",
        "Other supporting documents"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    },
    "agricultural-income-certificate": {
      documents: [
        "Photo & address proof",
        "Last 1 year Adangal (field record)",
        "Self-declaration",
        "Chitta (land record)",
        "Proof of lease (if land is leased)"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    },
    "small-marginal-farmer-certificate": {
      documents: [
        "Photo",
        "Land Records",
        "Patta",
        "VAO Certificate"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    },
    "inter-caste-marriage-certificate": {
      documents: [
        "Combined photo of husband & wife",
        "Permanent community certificates of both spouses",
        "Marriage registration certificate",
        "Self-declaration of applicant",
        "Any address proof"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    },
    "unmarried-certificate": {
      documents: [
        "Photo",
        "Address proof",
        "Age proof",
        "Self-declaration",
        "Other relevant documents (if applicable)"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    },
    "legal-heir-certificate": {
      documents: [
        "Last residence address of deceased",
        "Self-declaration of spouse listing heirs",
        "Marriage/Passport/Voter/Aadhaar to establish relationships",
        "Birth certificates or TC of children",
        "Death certificate of deceased",
        "Identity proofs for heirs",
        "Guardianship order (if applicable)",
        "Self-declaration of parents (if applicable)"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    },
    "differently-abled-certificate": {
      documents: [
        "Photo",
        "Medical Certificate",
        "Passport Size Photo"
      ],
      source: "Verified Source: Perambalur govt. Revenue list, Perambalur District"
    }
  };

  const service = servicesData[certificate];
  if (!service) return <p style={{ padding: "20px" }}>Certificate not found!</p>;

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#f3f4f6" // light grey outside the card
      }}
    >
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
      <h2
        style={{
          marginBottom: "24px",
          fontSize: "2rem",
          fontWeight: "700",
          textTransform: "capitalize",
          color: textColor
        }}
      >
        {certificate.replace(/-/g, " ")}
      </h2>

      {/* Card */}
      <motion.div
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.02 }}
        style={{
          background: "#ffffff", // white inside the card
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          overflow: "hidden",
          cursor: "pointer",
          borderLeft: `6px solid ${primaryColor}`
        }}
      >
        {/* Card Header */}
        <div
          style={{
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "800",
            fontSize: "1.4rem",
            color: textColor
          }}
        >
          Required Verified Documents
          {open ? <ChevronUp size={22} color={primaryColor} /> : <ChevronDown size={22} color={primaryColor} />}
        </div>

        {/* Documents */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              style={{
                padding: "20px 32px",
                background: "#ffffff", // white inside card
                borderRadius: "0 0 16px 16px"
              }}
            >
              <ul style={{ listStyle: "none", padding: "0", margin: 0 }}>
                {service.documents.map((doc, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 0",
                      color: textColor,
                      fontSize: "1rem",
                      borderBottom: i !== service.documents.length - 1 ? "1px solid #f0f0f0" : "none"
                    }}
                  >
                    <FileText size={18} color={primaryColor} />
                    {doc}
                  </li>
                ))}
              </ul>

              <p
                style={{
                  marginTop: "16px",
                  fontSize: "0.85rem",
                  color: "#475569",
                  fontStyle: "italic"
                }}
              >
                {service.source}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
