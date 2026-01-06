import React, { useEffect } from "react";
import Home from "./Home";
import { announcePage } from "../utils/accessibility";

export default function HomeWrapper() {
  useEffect(() => {
    announcePage(
      "Home page loaded. Welcome to the Smart Service Portal. Press Tab to navigate to Start Exploring."
    );
  }, []);

  return <Home />;
}
