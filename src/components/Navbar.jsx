import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Revenue", path: "/esevai/revenue" },
    { name: "Pension", path: "/esevai/pension" },
  ];

  return (
    <nav className="bg-purple-800 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">🏛️ SmartGov Portal</div>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`hover:text-yellow-300 ${
                location.pathname === link.path ? "underline" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
