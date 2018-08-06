const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

const app = express();
app.use(favicon(path.join(__dirname, '..', 'favicon.ico')));


const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/../client/public')));

app.listen(port, () => {
  console.log(`charlesPaulBennett listening on port ${port}`);
});
