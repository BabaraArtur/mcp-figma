const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function send(obj) {
  process.stdout.write(JSON.stringify(obj) + "\n");
}

// Simulierte Layouts
const layoutTemplates = {
  basic: {
    name: "Basic Layout",
    elements: ["Header", "Content Section", "Footer"]
  },
  dashboard: {
    name: "Dashboard Layout",
    elements: ["Navigation Sidebar", "Stats Panel", "Main Content Area", "Notification Area"]
  },
  landing: {
    name: "Landing Page",
    elements: ["Hero Section", "Features Grid", "Testimonials", "Call to Action", "Footer"]
  }
};

rl.on("line", (line) => {
  try {
    const msg = JSON.parse(line);
    
    // Liste der verfügbaren Tools
    if (msg.type === "list_tools") {
      send({
        type: "tool_list",
        tools: [
          {
            name: "generateMockLayout",
            description: "Simuliert die Erstellung eines einfachen Layouts in Figma",
            parameters: []
          },
          {
            name: "createSpecificLayout",
            description: "Erstellt ein bestimmtes Layout-Template",
            parameters: [
              {
                name: "layoutType",
                type: "string",
                description: "Art des Layouts (basic, dashboard, landing)",
                required: true
              }
            ]
          },
          {
            name: "listAvailableLayouts",
            description: "Listet alle verfügbaren Layout-Templates auf",
            parameters: []
          }
        ]
      });
    }

    // Einfaches Layout generieren
    if (msg.type === "invoke_tool" && msg.tool === "generateMockLayout") {
      console.error("Tool generateMockLayout aufgerufen");
      
      send({
        type: "tool_response",
        tool: msg.tool,
        content: "🧪 Ein einfaches Layout wurde erfolgreich erstellt (Simulation)."
      });
    }

    // Spezifisches Layout erstellen
    if (msg.type === "invoke_tool" && msg.tool === "createSpecificLayout") {
      console.error("Tool createSpecificLayout aufgerufen");
      const layoutType = msg.parameters?.layoutType || "basic";
      
      const layout = layoutTemplates[layoutType] || layoutTemplates.basic;
      
      send({
        type: "tool_response",
        tool: msg.tool,
        content: `🧪 "${layout.name}" wurde erfolgreich erstellt mit folgenden Elementen: ${layout.elements.join(", ")}`
      });
    }

    // Verfügbare Layouts auflisten
    if (msg.type === "invoke_tool" && msg.tool === "listAvailableLayouts") {
      console.error("Tool listAvailableLayouts aufgerufen");
      
      const layoutList = Object.keys(layoutTemplates).map(key => {
        return `- ${layoutTemplates[key].name} (Typ: ${key})`;
      }).join("\n");
      
      send({
        type: "tool_response",
        tool: msg.tool,
        content: `Verfügbare Layout-Templates:\n${layoutList}`
      });
    }
  } catch (error) {
    console.error("Fehler beim Verarbeiten der Nachricht:", error);
  }
});
