import { createServer } from 'http';
import { readFile }     from 'fs/promises';
import { extname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(fileURLToPath(import.meta.url), '..');
const PORT = 3000;

const MIME = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.mjs':  'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
};

createServer(async (req, res) => {
  let pathname = req.url.split('?')[0];
  if (pathname === '/' || pathname === '') pathname = '/index.html';

  const filePath = join(ROOT, pathname);

  try {
    const data = await readFile(filePath);
    const ext  = extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  } catch {
    // Fall back to index.html for SPA-style routing
    try {
      const data = await readFile(join(ROOT, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html', 'Cache-Control': 'no-cache' });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  }
}).listen(PORT, () => {
  console.log(`\n  ❤️  Scrapbook server running at http://localhost:${PORT}\n`);
});
