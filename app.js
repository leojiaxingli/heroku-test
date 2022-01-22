const log = console.log;
let express = require('express');
let path = require('path');

let app = express();

app.get('/', (req, res) => {
  res.status(200).end("true");
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  log(`Listening on port ${port}...`)
})

module.exports = app;
