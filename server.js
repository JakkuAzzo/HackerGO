const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const baseDir = path.join(__dirname, 'Web-app demo');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let filePath = req.url;
  if (filePath === '/') filePath = '/Open.html';
  filePath = path.join(baseDir, filePath);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }
    if (stats.isDirectory()) filePath = path.join(filePath, 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Server error');
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`HackerGO MVP running at http://localhost:${PORT}`);
});
