const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function senden(obj) {
  process.stdout.write(JSON.stringify(obj) + "\n");
}

rl.on("line", (zeile) => {
  try {
    const nachricht = JSON.parse(zeile);

    // Initialisierungsanfrage
    if (nachricht.method === "initialize") {
      senden({ jsonrpc: "2.0", id: nachricht.id, result: {} });
      // Sende sofort die Tool-Liste als Notification
      senden({
        jsonrpc: "2.0",
        method: "list_tools/response",
        params: {
          tools: [
            {
              name: "generateMockLayout",
              description: "Simulation der Layout-Erstellung in Figma"
            }
          ]
        }
      });
      return;
    }

    // Tool-Aufruf
    if (nachricht.method === "invoke_tool" && nachricht.params && nachricht.params.tool === "generateMockLayout") {
      senden({
        jsonrpc: "2.0",
        id: nachricht.id,
        result: {
          content: "🧪 Layout erfolgreich erstellt (Simulation)."
        }
      });
      return;
    }
  } catch (e) {
    // Fehler beim Parsen ignorieren
  }
});
