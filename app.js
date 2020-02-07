const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db = require('./db');

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/products', async (req, res, next) => {
  res.send(await db.readJSON('products.json'));
});

app.get('/api/companies', async (req, res, next) => {
  res.send(await db.readJSON('companies.json'));
});

app.listen(port, () => console.log(`listening on port ${port}...`));
