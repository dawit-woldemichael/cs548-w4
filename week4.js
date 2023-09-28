const https = require('https');
const fs = require('fs')
const express = require('express');

const startup = require('./routes/startup');
const devices = require('./routes/devices');
const dawit = require('./routes/dawit');
const alive = require('./routes/alive');
const user = require('./routes/user');

const port = 8080; 
const httpsOptions = {
    key: fs.readFileSync('./certificates/key.pem'),
    cert: fs.readFileSync('./certificates/cert.pem')
}

app = express(); 

app.use('/', startup);
app.use('/', devices);
app.use('/', alive);
app.use('/', user);
app.use('/', dawit);

const server = https.createServer(httpsOptions,app)

server.listen(port, () => {
    console.log(`HTTPS is running in port ${port}`);
})