import React, { useEffect } from "react";
import Services from "./Services";
import { announcePage } from "../utils/accessibility";

export default function ServicesWrapper() {
  useEffect(() => {
    // Commented out for now, will announce later
    // announcePage(
    //   "Services page loaded. Use Tab to navigate through the service cards."
    // );
  }, []);

  return <Services />;
}
