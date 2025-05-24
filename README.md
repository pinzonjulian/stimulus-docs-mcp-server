# Stimulus Docs MCP Server

An MCP server to access up to date documentation for [Stimulus JS](http://stimulus.hotwired.dev/).

⚠️ **This is Experimental Software**

This MCP is in early development. It may contain bugs, have limited functionality, or undergo breaking changes without notice. Use at your own risk and expect potential instability.

## Building the MCP Server

### Prerequisites

- **Node.js**: Minimum version 18.0.0 or higher
- **npm**: Comes bundled with Node.js

### Build Instructions

1. Clone this repository and navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project using the provided script:
   ```bash
   npm run build
   ```

This will compile the TypeScript source code and create the executable in the `build/` directory.

## Usage

### With Claude Desktop

1. First, build the MCP server following the instructions above
2. Follow the instructions at https://modelcontextprotocol.io/quickstart/user to add a new MCP server.
3. Add the following configuration:
```json
{
  "mcpServers": {
    "stimulus-docs": {
      "command": "node",
      "args": ["/path/to/your/stimulus-docs-mcp-server/build/index.js"],
      "env": {}
    }
  }
}
```

3. Replace `/path/to/your/stimulus-docs-mcp-server` with the actual path to this project
4. Restart Claude Desktop
5. The Stimulus documentation tools should now be available in your Claude conversations

### With VS Code

1. Build the MCP server following the instructions above
2. Follow the instructions at https://code.visualstudio.com/docs/copilot/chat/mcp-servers
3. Using your preferred method based on the instructions above, configure the MCP server by pointing it to the built executable:
   ```json
   {
    "stimulus-docs": {
        "type": "stdio",
        "command": "node",
        "args": [
            "path/to/your/stimulus-docs-mcp-server"
          ]
    }
   }
   ```
4. Replace `path/to/your/stimulus-docs-mcp-server` with the path to the `index.js` file built in step 1.
5. The Stimulus documentation will be accessible through the MCP client interface

### Troubleshooting

#### Claude
You may see the following errors when opening Claude after configuring the MCP:
```
MCP stimulus-docs: spawn node ENOENT (2)

Could not connect to MCP server stimulus-docs

MCP stimulus-docs: Server disconnected. For troubleshooting guidance [...]

```

This is because the path to the `node` executable can not be found. If that's the case, instead of `"command": "node"` use the complete path to the node. If you use `mise` it may be something like:

```
"command": "/Users/<YOUR USER NAME/.local/share/mise/installs/node/20.18.3/bin/node
```

## Documentation Source & Caching Strategy

This MCP server fetches the latest Stimulus documentation directly from the official [stimulus-site repository](https://github.com/hotwired/stimulus-site) on GitHub. To ensure optimal performance and reduce API calls, the server implements the following caching strategy:

### How It Works

1. **Fresh Content Detection**: The server checks the latest commit SHA and timestamp from the GitHub repository
2. **Cache Key Generation**: A unique cache key is generated using the commit SHA (first 7 characters) and timestamp
3. **Caching**: Documentation files are cached locally using the cache key as the folder structure
4. **Cache Validation**: Before fetching from GitHub, the server checks if content is already cached for the current commit
5. **Fallback Strategy**: If GitHub is unavailable, the server falls back to local documentation files

### Cache Structure

```
cache/
  {commit-sha}-{timestamp}/
    handbook/
      01_introduction.md
      02_hello_stimulus.md
      ...
    reference/
      actions.md
      targets.md
      ...
```

### Benefits

- **Always Up-to-Date**: Content is automatically updated when the Stimulus repository changes
- **Performance**: Cached content loads instantly without network requests
- **Reliability**: Local fallback ensures the server works even when GitHub is unavailable
- **Efficient**: Only fetches new content when the repository has been updated

The local documentation files in `src/docs/` serve as a backup and ensure the MCP server remains functional even without internet connectivity.

All credit for the documentation content goes to the Stimulus team and contributors.

## Available Tools

This MCP server provides access to the complete Stimulus documentation, organized into:

**Handbook:**
- The Origin of Stimulus
- Introduction
- Hello Stimulus Tutorial
- Building Something Real
- Designing for Resilience
- Managing State
- Working with External Resources
- Installing Stimulus

**Reference:**
- Actions
- Controllers
- CSS Classes
- Lifecycle Callbacks
- Outlets
- Targets
- Using TypeScript
- Values

Each documentation section is available as a separate tool that can be called to retrieve the relevant content.
