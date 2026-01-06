const translations = {
  en: {
    appTitle: "SmartGov Assistant",
    browseCategories: "Browse categories",
    searchPlaceholder: "Search e.g., passport, aadhaar...",
    markCollected: "Mark",
    collected: "Collected",
    required: "Required",
    optional: "Optional",
    printChecklist: "Print Checklist",
    exportJSON: "Export JSON",
    saveTemplate: "Save Template",
    loadTemplate: "Load Template",
    templates: "Templates",
    adminPanel: "Admin Panel",
    signIn: "Sign in",
    signOut: "Sign out",
    pdfExport: "Export PDF",
    noResults: (q) => `No results found for "${q}"`,
    docsAssistant: "Docs Assistant",
  },
  ta: {
    appTitle: "டாக்ஸ்‌செக்லிஸ்ட்",
    browseCategories: "வகைகள் பார்",
    searchPlaceholder: "உதா., பாஸ்போர்ட், ஆதார்...",
    markCollected: "குறிப்புசெய்",
    collected: "கூட்டியுள்ளன",
    required: "தேவையானது",
    optional: "ஆலோசிய",
    printChecklist: "அச்சு பட்டியல்",
    exportJSON: "JSON ஏற்றுமதி",
    saveTemplate: "விதிமுறை சேமிக்க",
    loadTemplate: "விதிமுறை ஏற்று",
    templates: "விதிமுறைகள்",
    adminPanel: "நிர்வாகம்",
    signIn: "உள்ளபார்வை",
    signOut: "வெளியேறு",
    pdfExport: "PDF ஏற்றுமதி",
    noResults: (q) => `"${q}" க்கு பொருந்தும் முடிவுகள் இல்லை`,
    docsAssistant: "ஆவண உதவியாளர்",
  },
};

export const LANGS = Object.keys(translations);
export function t(lang, key, ...args) {
  const val = translations[lang]?.[key] ?? translations["en"][key] ?? key;
  return typeof val === "function" ? val(...args) : val;
}
export default translations;
