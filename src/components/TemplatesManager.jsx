import React, { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../i18n";

const LOCAL_KEY = "docs_templates_v1";

export default function TemplatesManager({ onLoadTemplate }) {
  const { lang } = useLanguage();
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (raw) setTemplates(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(templates));
  }, [templates]);

  function saveTemplate(name, payload) {
    const data = { id: `tmpl_${Date.now()}`, name, payload };
    setTemplates((s) => [...s, data]);
  }

  function removeTemplate(id) {
    setTemplates((s) => s.filter((x) => x.id !== id));
  }

  return (
    <div className="p-3 border rounded bg-white">
      <div className="flex items-center justify-between mb-2">
        <strong>{t(lang, "templates")}</strong>
        <button onClick={() => {
          const name = prompt("Template name");
          if (!name) return;
          const payload = window.__DOCS_CURRENT_TEMPLATE_PAYLOAD;
          if (!payload) return alert("Open a category details first to save a template.");
          saveTemplate(name, payload);
        }} className="px-2 py-1 border rounded text-sm">{t(lang, "saveTemplate")}</button>
      </div>

      <ul className="space-y-2">
        {templates.length === 0 && <div className="text-sm text-slate-500">No templates saved</div>}
        {templates.map((tm) => (
          <li key={tm.id} className="flex items-center justify-between">
            <button onClick={() => onLoadTemplate(tm.payload)} className="text-left">{tm.name}</button>
            <div className="flex gap-2">
              <button onClick={() => onLoadTemplate(tm.payload)} className="px-2 py-1 border rounded text-sm">Load</button>
              <button onClick={() => removeTemplate(tm.id)} className="px-2 py-1 border rounded text-sm text-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
