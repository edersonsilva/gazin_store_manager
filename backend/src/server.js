import http from 'node:http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('Ola JavaScript now');
});

server.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});

