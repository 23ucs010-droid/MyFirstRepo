import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <select
      aria-label="Select language"
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      className="px-2 py-1 rounded border bg-white"
    >
      <option value="en">English</option>
      <option value="ta">தமிழ்</option>
    </select>
  );
}
