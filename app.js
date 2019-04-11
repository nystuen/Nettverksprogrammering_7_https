const https = require('https');
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('<h1>localhost</h1>')
});

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(3000, () => {
  console.log('Server up and running');
});