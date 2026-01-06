import React, { useEffect, useState } from "react";
import documentsData from "../data/documents.json";

export default function AdminPanel() {
  const [docs, setDocs] = useState([]);
  const [title, setTitle] = useState(""); 
  const [itemsText, setItemsText] = useState(""); 

  useEffect(() => {
    setDocs(JSON.parse(JSON.stringify(documentsData)));
  }, []);

  async function addCategory() {
    if (!title.trim()) return alert("Enter category title");
    const id = title.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();
    const items = itemsText.split("\n").map(l => l.trim()).filter(Boolean).map((l,idx) => {
      const parts = l.split("|").map(p => p.trim());
      return { id: `${id}-item-${idx}`, name: parts[0], required: parts[1] === "true" };
    });
    const cat = { id, title, items, desc: "" };
    setDocs(s => [cat, ...s]);
    setTitle(""); setItemsText(""); alert("Category added locally");
  }

  return (
    <div className="pt-24 container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-3">Admin — Edit / Add Categories</h2>

      <div className="mb-4 p-4 bg-white rounded">
        <label className="block mb-1">Category title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded mb-2" />
        <label className="block mb-1">Items (one per line): Name | required(true/false)</label>
        <textarea value={itemsText} onChange={(e) => setItemsText(e.target.value)} className="w-full p-2 border rounded mb-2" rows="6" />
        <div className="flex gap-2">
          <button onClick={addCategory} className="px-3 py-1 border rounded">Add Category</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {docs.map((c) => (
          <div key={c.id} className="p-3 bg-white rounded">
            <h4 className="font-semibold">{c.title}</h4>
            <div className="text-sm text-slate-500 mb-2">{c.desc}</div>
            <ul className="text-sm">{c.items.map(it => <li key={it.id}>{it.name} — {it.required ? "required" : "optional"}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}
