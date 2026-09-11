import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
const root = path.resolve('.vercel/output/static');
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2','.xml':'application/xml','.json':'application/json','.ico':'image/x-icon','.txt':'text/plain'};
http.createServer((req,res)=>{
 try {
  let file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
  if(!file.startsWith(root+path.sep)&&file!==root)throw Error('path');
  if(fs.statSync(file).isDirectory())file=path.join(file,'index.html');
  const type=types[path.extname(file)]||'application/octet-stream';
  const data=fs.readFileSync(file);
  res.setHeader('Content-Type',type);
  if(/text|javascript|json|xml/.test(type)&&req.headers['accept-encoding']?.includes('gzip')) {res.setHeader('Content-Encoding','gzip');res.end(zlib.gzipSync(data));}else res.end(data);
 }catch{res.writeHead(404);res.end('Not found');}
}).listen(4173,'127.0.0.1',()=>console.log('Production static preview: http://127.0.0.1:4173'));
