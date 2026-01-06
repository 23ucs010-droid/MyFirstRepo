import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  GraduationCap,
  Landmark,
  Building2,
  ShieldCheck,
  HeartPulse,
  Car,
  HandHeart,
  Wheat,
  Home,
  Zap,
  Banknote,
  Wallet,
  Users,
} from "lucide-react";

// Services array with titles, icons, and optional paths for navigation
const services = [
  { title: "e-Services (e-Sevai)", icon: FileText, path: "/esevai" },
  { title: "Government Exams", icon: GraduationCap },
  { title: "Taluk Services", icon: Landmark, path: "/taluk" },
  { title: "Municipality Services", icon: Building2 },
  { title: "Police Department", icon: ShieldCheck },
  { title: "Health Department", icon: HeartPulse },
  { title: "Transport (RTO)", icon: Car },
  { title: "Social Welfare", icon: HandHeart },
  { title: "Agriculture Department", icon: Wheat },
  { title: "Housing & Urban Development", icon: Home },
  { title: "Utility Services", icon: Zap },
  { title: "Banking Services", icon: Banknote },
  { title: "Loans & Subsidies", icon: Wallet },
  { title: "RDO Services", icon: Users },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-indigo-50 to-purple-100">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        SmartGov Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => service.path && navigate(service.path)}
              className={`p-8 rounded-3xl bg-white shadow-xl cursor-pointer text-center transition
                ${service.path ? "hover:ring-4 hover:ring-purple-300" : ""}`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-purple-100">
                  <Icon className="w-10 h-10 text-purple-700" />
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h2>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
