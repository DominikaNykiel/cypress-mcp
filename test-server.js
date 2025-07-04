// Simple test script to demonstrate the MCP server
// This would typically be called by an MCP client

const testUrl = "https://example.com"

console.log(`Testing MCP server with URL: ${testUrl}`)
console.log("The server should now be running and ready to accept requests.")
console.log("Use an MCP client to call the 'generateLocator' tool with a URL parameter.")
console.log("Example tool call:")
console.log(`{
  "method": "tools/call",
  "params": {
    "name": "generateLocator",
    "arguments": {
      "url": "${testUrl}"
    }
  }
}`) 