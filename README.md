Sure! Here's a quick README.md for the project:

markdown
# Node Multi-Route HTTP Server

## Overview

This project is part of the Full Stack JavaScript (Node.js) course, specifically for the Quantitative Assessment Practice #2 (QAP2). The goal is to build a multi-route HTTP server using Node.js without relying on external packages for routing. The server handles various routes, serves HTML files, and logs server activity to both the console and disk.

## Features

- Multi-route HTTP server
- Serves HTML files from a `views` folder
- Logs server activity to the console and a log file
- Handles different routes with custom responses
- Demonstrates use of Node.js core modules: `http`, `fs`, `path`, and `events`

## Routes

The server supports the following routes:

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/products` - Products page
- `/subscribe` - Subscribe page



2. Install dependencies (if any are added in the future):
   ```sh
   npm install
   ```

## Usage

1. Start the server:
   ```sh
   node server.js
   ```

2. Open your browser and navigate to `http://localhost:3000` and other routes to see the server in action.

## Logging

Server activity is logged to both the console and a `server.log` file. Logs include HTTP status codes and route access information.

## Project Structure

```
fsjs-qap2-webserver/
├── views/
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   ├── products.html
│   └── subscribe.html
├── .gitignore
├── README.md
├── server.js
└── server.log
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
