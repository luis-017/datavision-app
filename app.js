
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  res.end(`
    <h1>DataVision Analytics</h1>
    <p>Aplicación desplegada en AWS EC2</p>
    <p>Práctica HT-05 - SENATI</p>
  `);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
