// Beispiel für eine Anwendung, die den MCP-Server verwendet
const fs = require('fs');
const path = require('path');

// Simuliert den Aufruf von MCP-Tools
function simulateMcpToolCall(toolName, params = {}) {
  console.log(`\n=== Simuliere Aufruf von MCP-Tool: ${toolName} ===`);
  
  switch (toolName) {
    case 'generateMockLayout':
      return "Ein einfaches Layout wurde erfolgreich erstellt.";
      
    case 'createSpecificLayout':
      const layoutType = params.layoutType || "basic";
      const layoutNames = {
        basic: "Basic Layout",
        dashboard: "Dashboard Layout",
        landing: "Landing Page"
      };
      return `"${layoutNames[layoutType] || layoutNames.basic}" wurde erfolgreich erstellt.`;
      
    case 'listAvailableLayouts':
      return `Verfügbare Layout-Templates:
- Basic Layout (Typ: basic)
- Dashboard Layout (Typ: dashboard)
- Landing Page (Typ: landing)`;
      
    default:
      return "Tool nicht gefunden";
  }
}

// Beispiel-Ausgabe
console.log("MCP Figma Demo-Anwendung");
console.log("========================");

console.log(simulateMcpToolCall('listAvailableLayouts'));
console.log(simulateMcpToolCall('createSpecificLayout', { layoutType: 'dashboard' }));

// Erstellt einen Ordner für simulierte Ausgaben
const outputDir = path.join(__dirname, 'generated');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Simuliert das Speichern eines Layouts
const demoLayout = {
  name: "Demo Layout",
  created: new Date().toISOString(),
  elements: [
    { type: "frame", id: "frame1", name: "Hauptframe" },
    { type: "text", id: "text1", name: "Überschrift", content: "Willkommen zur MCP-Figma Integration" },
    { type: "rectangle", id: "rect1", name: "Hintergrund", color: "#f5f5f5" }
  ]
};

fs.writeFileSync(
  path.join(outputDir, 'demo-layout.json'),
  JSON.stringify(demoLayout, null, 2)
);

console.log("\nDemo-Layout wurde in 'generated/demo-layout.json' gespeichert.");
console.log("Benutze den MCP-Server, um echte Figma-Layouts zu generieren!");
