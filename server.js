// server.js
const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public')); // Serve arquivos estáticos

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/sobre.html', (req, res) => {
  res.sendFile(__dirname + '/sobre.html');
});
app.get('/contato.html', (req, res) => {
  res.sendFile(__dirname + '/contato.html');
});
app.get('/home.html', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});
app.get('/AA.html', (req, res) => {
  res.sendFile(__dirname + '/AA.html');
});
app.get('/AB.html', (req, res) => {
  res.sendFile(__dirname + '/AB.html');
});
app.get('/AC.html', (req, res) => {
  res.sendFile(__dirname + '/AC.html');
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
