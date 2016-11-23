const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '.', 'build', 'index.html'));
});
app.use(express.static(path.resolve(__dirname, '.', 'build')));

var server = app.listen(8080, () => {
  console.log('Kj�rer server p� port 8080');
});
