require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('salaardevarath');
});

app.get('/login', (req, res) => {
  res.send('<h1>please login at chai aur code</h1>');
});

app.get('/youtube', (req, res) => {
  res.send('<h2>Chai aur code</h2>');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
