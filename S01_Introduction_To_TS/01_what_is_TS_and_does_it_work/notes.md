JavaScript in VS Code uses the TypeScript Language Service for IntelliSense, auto completion, hover information, method suggestions, and property suggestions.

VS Code comes with the TypeScript Server (tsserver) pre installed. It also includes a bundled Node.js runtime that is used to run the TypeScript Server and handle inter process communication (IPC).

For example:
    let user = "sahil";
    user.toUpperCase();

When you hover over toUpperCase(), VS Code sends an IPC request to the TypeScript Server to fetch information about the method. The response is then displayed in the hover tooltip.

On Linux, you can freeze and unfreeze the TypeScript Servers:

1. List the running TS Servers:
    ps aux | grep tsserver

2. Freeze the servers:
    kill -STOP <PID> <PID>

3. Unfreeze the servers:
    kill -CONT <PID> <PID>

When the TypeScript Server is frozen, IntelliSense features stop working. Hover tooltips, auto completion, and method documentation will remain stuck on "Loading..." because VS Code can no longer communicate with the server.

VS Code itself is built using Electron, which combines Chromium and Node.js to create desktop applications.

Adding the following comment at the top of a JavaScript file:
// @ts-check

enables TypeScript style type checking in JavaScript files. This works because JavaScript in VS Code already uses the TypeScript Language Service behind the scenes.

TypeScript is not only a programming language, but also a powerful tooling ecosystem that provides language services for both TypeScript and JavaScript.