const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function send(obj) {
  process.stdout.write(JSON.stringify(obj) + "\n");
}

rl.on("line", (line) => {
  const msg = JSON.parse(line);
  if (msg.type === "list_tools") {
    send({
      type: "tool_list",
      tools: [
        {
          name: "generateMockLayout",
          description: "Simuliert die Erstellung eines Layouts in Figma"
        }
      ]
    });
  }

  if (msg.type === "invoke_tool" && msg.tool === "generateMockLayout") {
    send({
      type: "tool_response",
      tool: msg.tool,
      content: "🧪 Layout erfolgreich erstellt (Simulation)."
    });
  }
});
