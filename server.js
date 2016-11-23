const express = require('express');
const path = require('path');
const app = express();

require('./server/rest-endpoints.js')(app);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '.', 'build', 'index.html'));
});
app.use(express.static(path.resolve(__dirname, '.', 'build')));

var server = app.listen(8080, () => {
  console.log('Kjører server på port 8080');
});
