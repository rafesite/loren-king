// Local npm registry proxy: listens on 9091, forwards to registry.npmjs.org
import http from 'http';
import https from 'https';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const PORT = 9091;
const TARGET = 'registry.npmjs.org';

const server = http.createServer((req, res) => {
  const path = req.url.replace(/^\/proxy\/npm-registry/, '') || '/';
  const options = {
    hostname: TARGET,
    port: 443,
    path: path,
    method: req.method,
    headers: Object.assign({}, req.headers, { host: TARGET }),
  };
  delete options.headers['accept-encoding'];

  const proxy = https.request(options, (upstream) => {
    res.writeHead(upstream.statusCode, upstream.headers);
    upstream.pipe(res);
  });

  proxy.on('error', (err) => {
    res.writeHead(502);
    res.end('proxy error: ' + err.message);
  });

  req.pipe(proxy);
});

server.listen(PORT, '127.0.0.1', () => {
  process.stdout.write('npm-proxy ready on ' + PORT + '\n');
});
