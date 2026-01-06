import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// Accessibility wrappers
import HomeWrapper from "./pages/HomeWrapper";
import ServicesWrapper from "./pages/ServicesWrapper";

import Esevai from "./pages/esevai/Esevai";

// Revenue Services
import RevenueServicesList from "./pages/esevai/revenue/RevenueServices";
import RevenueServiceDetail from "./pages/esevai/revenue/RevenueServiceDetail";

// Social Security & Pension Services
import SocialSecurityPensionList from "./pages/esevai/socialsecurity/SocialSecurityPensionList";
import SocialSecurityPensionDetail from "./pages/esevai/socialsecurity/SocialSecurityPensionDetail";

function App() {
  return (
    <>
      {/* Global live region for screen readers */}
      <div
        id="sr-live-region"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      ></div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Use wrappers for Home & Services */}
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/services" element={<ServicesWrapper />} />
          <Route path="/services/:serviceName" element={<ServicesWrapper />} />

          <Route path="/esevai" element={<Esevai />} />

          {/* Revenue Services */}
          <Route path="/esevai/revenue" element={<RevenueServicesList />} />
          <Route
            path="/esevai/revenue/:certificate"
            element={<RevenueServiceDetail />}
          />

          {/* Social Security & Pension Services */}
          <Route
            path="/esevai/pension"
            element={<SocialSecurityPensionList />}
          />
          <Route
            path="/esevai/pension/:serviceName"
            element={<SocialSecurityPensionDetail />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
