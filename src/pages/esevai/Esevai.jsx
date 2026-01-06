import { useNavigate } from "react-router-dom";
import {
  Landmark,
  HandCoins,
  Map,
  ShoppingCart,
  IdCard,
  Car,
  Lightbulb,
  FileDown,
  Target,
  Briefcase,
  Settings
} from "lucide-react";

export default function Esevai() {
  const navigate = useNavigate();

  const departments = [
    {
      name: "Revenue Department – Certificates",
      path: "/esevai/revenue",
      color: "#1e3a8a",
      icon: <Landmark size={34} />
    },
    {
      name: "Social Security & Pension Schemes",
      path: "/esevai/pension",
      color: "#6d28d9",
      icon: <HandCoins size={34} />
    },
    {
      name: "Land Records & Taluk Services",
      path: "/esevai/land",
      color: "#047857",
      icon: <Map size={34} />
    },
    {
      name: "Civil Supplies – Ration Card Services",
      path: "/esevai/ration",
      color: "#b45309",
      icon: <ShoppingCart size={34} />
    },
    {
      name: "Identity & Citizen Services",
      path: "/esevai/identity",
      color: "#0f766e",
      icon: <IdCard size={34} />
    },
    {
      name: "Transport (RTO) Support Services",
      path: "/esevai/transport",
      color: "#991b1b",
      icon: <Car size={34} />
    },
    {
      name: "Utility & Payment Services",
      path: "/esevai/utilities",
      color: "#0369a1",
      icon: <Lightbulb size={34} />
    },
    {
      name: "Certificate Download & Printing",
      path: "/esevai/certificates",
      color: "#374151",
      icon: <FileDown size={34} />
    },
    {
      name: "Government Scheme Applications",
      path: "/esevai/schemes",
      color: "#4338ca",
      icon: <Target size={34} />
    },
    {
      name: "Labour, Employment & Welfare",
      path: "/esevai/labour",
      color: "#065f46",
      icon: <Briefcase size={34} />
    },
    {
      name: "Other Facilitation Services",
      path: "/esevai/other",
      color: "#581c87",
      icon: <Settings size={34} />
    }
  ];

  return (
    <div style={{ background: "#f1f5f9", minHeight: "100vh", padding: "50px" }}>
      <h1 style={{ textAlign: "center", color: "#1f2937", fontWeight: "700" }}>
        e-SEVAI SERVICES PORTAL
      </h1>
      <p style={{ textAlign: "center", color: "#475569", marginBottom: "45px" }}>
        Government of Tamil Nadu – Citizen Service Departments
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "32px"
        }}
      >
        {departments.map((dept, index) => (
          <div
            key={index}
            onClick={() => navigate(dept.path)}
            style={{
              background: "#ffffff",
              borderLeft: `8px solid ${dept.color}`,
              borderRadius: "14px",
              padding: "32px",
              minHeight: "140px",
              cursor: "pointer",
              boxShadow: "0 10px 22px rgba(0,0,0,0.08)",
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <div style={{ color: dept.color }}>{dept.icon}</div>
              <div>
                <h2 style={{ color: dept.color, fontSize: "20px", marginBottom: "6px" }}>
                  {dept.name}
                </h2>
                <p style={{ color: "#475569", fontSize: "14px" }}>
                  Access services, apply online, and track applications
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
