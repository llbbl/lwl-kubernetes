'use strict';

const express = require('express');

// Constants
const PORT = 8889;
const HOST = '0.0.0.0';

// App
const app = express();

// get machine hostname
const hostname = require('os').hostname();

// return response
app.get('/', (req, res) => {
    res.send('Hello World' + '<br/><br/>' + 'Hostname: ' + hostname);
});

app.listen(PORT, HOST);

// console.log(`Running on http://${HOST}:${PORT}`);

