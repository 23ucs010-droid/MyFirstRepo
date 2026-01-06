// src/pages/esevai/socialsecurity/SocialSecurityPensionList.js
import { useNavigate } from "react-router-dom";
import { Landmark } from "lucide-react";

export default function SocialSecurityPensionList() {
  const navigate = useNavigate();

  const pensionServices = [
    { title: "Old Age Pension", slug: "old-age-pension" },
    { title: "Widow Pension", slug: "widow-pension" },
    { title: "Disability Pension", slug: "disability-pension" },
    { title: "Destitute Widow Pension", slug: "destitute-widow-pension" },
    { title: "Deserted Wives Pension", slug: "deserted-wives-pension" },
    { title: "Unmarried Women Pension", slug: "unmarried-women-pension" },
    { title: "Differently Abled Pension", slug: "differently-abled-pension" },
    { title: "Pension Status Tracking", slug: "pension-status-tracking" },
    { title: "Pension Bank Account Linking", slug: "pension-bank-account-linking" }
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
          <h2 style={{ margin: 0, color: "#1e40af" }}>Social Security & Pension Services</h2>
          <p style={{ marginTop: "6px", color: "#475569" }}>
            Click any service to view required documents
          </p>
        </div>
      </div>

      {/* List of services */}
      <div style={{ display: "grid", gap: "16px" }}>
        {pensionServices.map((service) => (
          <div
            key={service.slug}
            onClick={() => navigate(`/esevai/pension/${service.slug}`)}
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
            {service.title}
          </div>
        ))}
      </div>
    </div>
  );
}
