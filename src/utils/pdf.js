import jsPDF from "jspdf";

export function exportChecklistToPDF(title, items = []) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const margin = 40;
  const lineHeight = 18;
  let y = margin;

  doc.setFontSize(20);
  doc.text(title, margin, y);
  y += 30;

  doc.setFontSize(12);
  items.forEach((it, idx) => {
    const label = `${idx + 1}. ${it.name} ${it.required ? "(Required)" : ""}`;
    const split = doc.splitTextToSize(label, 500);
    doc.text(split, margin, y);
    y += lineHeight * split.length;
    if (y > 750) {
      doc.addPage();
      y = margin;
    }
  });

  doc.save(`${title.replace(/\s+/g, "_")}_checklist.pdf`);
}
