import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url"; // Import utilities for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = new McpServer({
  name: "stimulus-docs",
  version: "0.0.1",
  capabilities: {
    resources: {},
    tools: {}
  }
})

// Define individual tools for each documentation file
const docFiles = [
  // Handbook files
  { folder: 'handbook', file: '00_the_origin_of_stimulus.md', name: 'handbook-origin', description: 'Get the origin of Stimulus documentation' },
  { folder: 'handbook', file: '01_introduction.md', name: 'handbook-introduction', description: 'Get the Stimulus introduction documentation' },
  { folder: 'handbook', file: '02_hello_stimulus.md', name: 'handbook-hello', description: 'Get the Hello Stimulus tutorial documentation' },
  { folder: 'handbook', file: '03_building_something_real.md', name: 'handbook-building', description: 'Get the Building Something Real documentation' },
  { folder: 'handbook', file: '04_designing_for_resilience.md', name: 'handbook-resilience', description: 'Get the Designing for Resilience documentation' },
  { folder: 'handbook', file: '05_managing_state.md', name: 'handbook-state', description: 'Get the Managing State documentation' },
  { folder: 'handbook', file: '06_working_with_external_resources.md', name: 'handbook-external', description: 'Get the Working with External Resources documentation' },
  { folder: 'handbook', file: '07_installing_stimulus.md', name: 'handbook-installing', description: 'Get the Installing Stimulus documentation' },
  
  // Reference files
  { folder: 'reference', file: 'actions.md', name: 'reference-actions', description: 'Get the Stimulus Actions reference documentation' },
  { folder: 'reference', file: 'controllers.md', name: 'reference-controllers', description: 'Get the Stimulus Controllers reference documentation' },
  { folder: 'reference', file: 'css_classes.md', name: 'reference-css-classes', description: 'Get the Stimulus CSS Classes reference documentation' },
  { folder: 'reference', file: 'lifecycle_callbacks.md', name: 'reference-lifecycle', description: 'Get the Stimulus Lifecycle Callbacks reference documentation' },
  { folder: 'reference', file: 'outlets.md', name: 'reference-outlets', description: 'Get the Stimulus Outlets reference documentation' },
  { folder: 'reference', file: 'targets.md', name: 'reference-targets', description: 'Get the Stimulus Targets reference documentation' },
  { folder: 'reference', file: 'using_typescript.md', name: 'reference-typescript', description: 'Get the Using TypeScript with Stimulus documentation' },
  { folder: 'reference', file: 'values.md', name: 'reference-values', description: 'Get the Stimulus Values reference documentation' }
];

// Register a tool for each documentation file
docFiles.forEach(({ folder, file, name, description }) => {
  server.tool(
    name,
    description,
    async () => {
      try {
        const content = await readMarkdownFile(path.join(folder, file));
        return {
          content: [
            {
              type: "text",
              text: content
            }
          ]
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
          content: [
            {
              type: "text",
              text: `Error reading ${file}: ${errorMessage}`
            }
          ]
        };
      }
    }
  );
});

const docsFolder = path.resolve(__dirname, "../src/docs");

async function readMarkdownFile(filename: string): Promise<string> {
  const filePath = path.join(docsFolder, filename);
  if (!filePath.startsWith(docsFolder)) {
    throw new Error("Invalid file path");
  }
  try {
    return await fs.promises.readFile(filePath, "utf-8");
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to read file: ${errorMessage}`);
  }
}

async function main(){
  const transport = new StdioServerTransport();
  await server.connect(transport)
  console.error("Stimulus Docs MCP Server running on stdio")
}

main().catch((error) => {
  console.error("Fatal error in main():", error)
  process.exit(1)
})
