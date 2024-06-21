const http = require('http');
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();

const PORT = 3000;

const server = http.createServer((req, res) => {
    const { url } = req;
    let filePath = path.join(__dirname, 'views', url === '/' ? 'index.html' : `${url}.html`);
    let contentType = 'text/html';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': contentType });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
                myEmitter.emit('log', `404: ${url} not found`);
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
                myEmitter.emit('log', `500: ${err.code} error`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
            myEmitter.emit('log', `200: ${url} served`);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

myEmitter.on('log', (message) => {
    console.log(message);
    fs.appendFile('server.log', `${new Date().toISOString()} - ${message}\n`, (err) => {
        if (err) throw err;
    });
});
