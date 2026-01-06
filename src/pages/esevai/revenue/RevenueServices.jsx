// src/pages/esevai/revenue/RevenueServices.js
import { Landmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RevenueServices() {
  const navigate = useNavigate();

  const revenueServices = [
    { title: "Community Certificate", slug: "community-certificate" },
    { title: "Income Certificate", slug: "income-certificate" },
    { title: "Nativity Certificate", slug: "nativity-certificate" },
    { title: "Residence Certificate", slug: "residence-certificate" },
    { title: "Legal Heir Certificate", slug: "legal-heir-certificate" },
    { title: "Widow Certificate", slug: "widow-certificate" },
    { title: "Deserted Woman Certificate", slug: "deserted-woman-certificate" },
    { title: "Unmarried Certificate", slug: "unmarried-certificate" },
    { title: "Unemployment Certificate", slug: "unemployment-certificate" },
    { title: "No Graduate Certificate", slug: "no-graduate-certificate" },
    { title: "Family Migration Certificate", slug: "family-migration-certificate" },
    { title: "Agricultural Income Certificate", slug: "agricultural-income-certificate" },
    { title: "Small / Marginal Farmer Certificate", slug: "small-marginal-farmer-certificate" },
    { title: "Inter-Caste Marriage Certificate", slug: "inter-caste-marriage-certificate" },
    { title: "Differently Abled Certificate", slug: "differently-abled-certificate" },
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
          <h2 style={{ margin: 0, color: "#1e40af" }}>Revenue Department – Certificate Services</h2>
          <p style={{ marginTop: "6px", color: "#475569" }}>
            Click any service to view required documents
          </p>
        </div>
      </div>

      {/* List of services */}
      <div style={{ display: "grid", gap: "16px" }}>
        {revenueServices.map((service) => (
          <div
            key={service.slug}
            onClick={() => navigate(`/esevai/revenue/${service.slug}`)}
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
