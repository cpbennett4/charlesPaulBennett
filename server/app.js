const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/../client/public')));

app.listen(port, () => {
  console.log(`awsPractice listening on port ${port}`);
});