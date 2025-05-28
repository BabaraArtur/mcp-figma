# MCP Figma

Ein Repository für das MCP Figma Projekt, das die Integration zwischen dem Model Context Protocol (MCP) und Figma demonstriert.

## Beschreibung

Dieses Projekt enthält Materialien und Code für die Integration zwischen Model Context Protocol (MCP) und Figma. Es zeigt, wie man KI-gesteuerte Tools mit VS Code und Figma verbinden kann.

## Phasen des Projekts

### Phase 1: Lokale Simulation ohne Figma API
In dieser Phase können Sie die MCP-Integration in Visual Studio Code ohne API-Schlüssel oder echte Verbindung zur Figma API testen. Dies ist nützlich für Entwicklungs- und Testzwecke.

### Phase 2: Integration mit echter Figma API (kommt später)
In zukünftigen Updates wird die vollständige Integration mit der Figma API hinzugefügt.

## Erste Schritte

1. **Voraussetzungen**
   - Visual Studio Code
   - Node.js (Version 12 oder höher)

2. **Installation**
   ```bash
   # Klonen Sie das Repository
   git clone https://github.com/BabaraArtur/mcp-figma.git
   cd mcp-figma
   ```

3. **Einrichtung für Phase 1 (Lokale Simulation)**
   - Stellen Sie sicher, dass MCP in Ihren VS Code-Einstellungen aktiviert ist:
     ```json
     {
       "chat.mcp.enabled": true
     }
     ```
   - Öffnen Sie die Chat-Ansicht mit Ctrl + Alt + I
   - Wählen Sie Agent Mode
   - Aktivieren Sie das Tool "figmaMock"
   - Testen Sie die Simulation mit dem Befehl: `#generateMockLayout`

## Projektstruktur

- `server.js`: Ein einfacher MCP-Server, der die Figma-API simuliert
- `.vscode/mcp.json`: Konfigurationsdatei für das Model Context Protocol
- `.vscode/settings.json`: VS Code-Einstellungen, die MCP aktivieren

## Beitragende

- Artur Babara
